/*******************************************************
 * script.js (예측 회차 인식 + 미노출 후보군 + 후보군 정규화)
 *******************************************************/

/* ===================== 전역 캐시/상수 ===================== */
let CLEANED_DATA = null; // [[round, n1..n6, bonus], ...] (최신 → 오래된 순)
let ROUND_MIN = null;
let ROUND_MAX = null;

// [PATCH] 원본의 '전부 0' 회차 추적(예측 회차 인식용)
let ZERO_ROUNDS = new Set();
let ZERO_MAX_ROUND = null;

const K_MIN = 6;
const K_MAX = 15;
const DEFAULT_TOTAL_ROUNDS = 30;
const DEFAULT_WEIGHTS = { w1: 1.0, w2: 0.3, w3: 0.8, w4: 0.2 };
const HINT_WEIGHTS = {
  hiHit7:  { w1: 0.8, w2: 0.0, w3: 1.2, w4: 0.2 },
  hiHit10: { w1: 1.0, w2: 0.3, w3: 0.8,  w4: 0.2 }
};
const TUNED = { k7: null, k10: null };

/* ===================== 전처리/유틸 ===================== */
/** 데이터 정제(최초 1회)
 * - 원본 numChosen을 먼저 훑어 '전부 0' 회차 목록(ZERO_ROUNDS) 생성
 * - CLEANED_DATA에는 '전부 0'을 제외하고, 중복 회차는 최신만 유지
 */
function prepareDataOnce() {
  if (CLEANED_DATA) return;

  // [PATCH] 전부 0 회차 탐지
  ZERO_ROUNDS = new Set();
  ZERO_MAX_ROUND = null;
  for (const row of numChosen) {
    const round = row[0];
    const nums = row.slice(1, 8);
    if (nums.every(n => n === 0)) {
      ZERO_ROUNDS.add(round);
      if (ZERO_MAX_ROUND === null || round > ZERO_MAX_ROUND) ZERO_MAX_ROUND = round;
    }
  }

  // 정제 데이터 생성(전부 0 제외, 중복 회차는 최신만)
  const seen = new Set();
  const cleaned = [];
  for (const row of numChosen) {
    const round = row[0];
    const nums = row.slice(1, 8);
    if (seen.has(round)) continue;               // 최신만 유지
    if (nums.every(n => n === 0)) continue;      // 전부 0은 정제 데이터에서 제외
    seen.add(round);
    cleaned.push(row);
  }
  CLEANED_DATA = cleaned;

  ROUND_MAX = Math.max(...cleaned.map(r => r[0]));
  ROUND_MIN = Math.min(...cleaned.map(r => r[0]));
}

/** 정수 클램핑 */
function clampInt(val, min, max, fallback = min) {
  const v = parseInt(val, 10);
  if (!Number.isFinite(v)) return fallback;
  return Math.max(min, Math.min(max, v));
}

/** [PATCH] 회차 클램핑 개선: 다음 회차 & 전부0 회차 허용
 * 허용 상한 = max(ROUND_MAX + 1, ZERO_MAX_ROUND ?? ROUND_MAX)
 */
function clampRoundOrPredictable(v) {
  const allowedMax = Math.max(ROUND_MAX + 1, ZERO_MAX_ROUND ?? ROUND_MAX);
  if (!Number.isFinite(v)) return ROUND_MAX;
  if (v < ROUND_MIN) return ROUND_MIN;
  if (v > allowedMax) return allowedMax;
  return v;
}

/** r_end(포함)까지의 최근 totalRounds 집계(보너스 0.5) — r_end+1 이후는 절대 포함 X */
function aggregateCountsUntil(r_end, totalRounds) {
  const start = r_end - totalRounds + 1;
  const counts = {};
  for (let i = 1; i <= 45; i++) counts[i] = 0;
  for (const [round, n1, n2, n3, n4, n5, n6, bonus] of CLEANED_DATA) {
    if (round >= start && round <= r_end) {
      [n1, n2, n3, n4, n5, n6].forEach((n) => { if (n >= 1 && n <= 45) counts[n]++; });
      if (bonus >= 1 && bonus <= 45) counts[bonus] += 0.5;
    }
  }
  return counts;
}

/** 히트맵 컬러 */
function getColor(value, min, max) {
  if (max === min) return "rgb(230,230,255)";
  const ratio = (value - min) / (max - min);
  const red = Math.round(255 * ratio);
  const blue = Math.round(255 * (1 - ratio));
  return `rgb(${red},220,${blue})`;
}

/** 디바운스 */
function debounce(fn, delay = 150) {
  let t = null;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(null, args), delay); };
}

/** 소프트맥스 (수치 안정) */
function scoresToProbs(scoreMap, tau = 1.0) {
  const keys = Array.from(scoreMap.keys());
  const arr  = keys.map(k => scoreMap.get(k));
  const maxV = Math.max(...arr);
  const exps = arr.map(v => Math.exp((v - maxV) / tau));
  const Z = exps.reduce((a,b)=>a+b, 0) || 1;
  const probs = new Map();
  keys.forEach((k,i) => probs.set(k, exps[i] / Z));
  return probs;
}

/** z-score 정규화 */
function zNormalize(values) {
  const n = values.length || 1;
  const mean = values.reduce((a,b)=>a+b,0) / n;
  const varc = values.reduce((a,b)=>a + (b-mean)*(b-mean), 0) / n;
  const std = Math.sqrt(varc) || 1;
  return values.map(v => (v - mean) / std);
}

/* ============== 스코어링 기반 후보군(점수 맵 반환) ============== */
function getScoredCandidatesWithScores(
  counts,
  applyData,
  totalRounds,
  k = 10,
  weights = DEFAULT_WEIGHTS,
  post = { range: true, ending: true, normalize: true } // [PATCH] normalize 기본 on
) {
  const round = applyData[0];
  const end = round - 1; // 항상 r-1까지만 사용
  const numbers = Array.from({ length: 45 }, (_, i) => i + 1);

  // 직전 회차/인접수
  const prev = CLEANED_DATA.find((d) => d[0] === round - 1);
  const prevSet = new Set(prev ? prev.slice(1, 7) : []);
  const prevAdj = new Set();
  prevSet.forEach((n) => { if (n > 1) prevAdj.add(n - 1); if (n < 45) prevAdj.add(n + 1); });

  // 마지막 출현 시점 — 적용회차 직전까지
  const lastSeen = new Map(numbers.map((n) => [n, null]));
  for (const [r, n1, n2, n3, n4, n5, n6, bonus] of CLEANED_DATA) {
    if (r > end) continue;
    [n1, n2, n3, n4, n5, n6].forEach((n) => { if (lastSeen.get(n) === null) lastSeen.set(n, r); });
    if (bonus && lastSeen.get(bonus) === null) lastSeen.set(bonus, r);
  }

  const { w1, w2, w3, w4 } = weights;
  const targetAvg = (totalRounds * 6) / 45;

  // 정규화 준비
  const deficitRaw = [];
  const gapRaw = [];
  for (let n = 1; n <= 45; n++) {
    const deficit = targetAvg - (counts[n] || 0);
    const ls = lastSeen.get(n);
    const gap = (ls !== null) ? (end - ls) : totalRounds;
    deficitRaw.push(deficit);
    gapRaw.push(gap / totalRounds);
  }
  const useNorm = post && post.normalize !== false;
  const deficitArr = useNorm ? zNormalize(deficitRaw) : deficitRaw;
  const gapArr     = useNorm ? zNormalize(gapRaw)     : gapRaw;

  // 점수 계산
  const score = new Map();
  for (let n = 1; n <= 45; n++) {
    const idx = n - 1;
    let s = 0;
    s += w1 * deficitArr[idx];
    s += w2 * gapArr[idx];
    if (prevSet.has(n)) s += w3;
    if (prevAdj.has(n)) s += w4;
    score.set(n, s);
  }

  // 상위 k 1차 선별
  const ranked = Array.from(score.keys()).sort(
    (a, b) => (score.get(b) - score.get(a)) || (a - b)
  );
  const cand = new Set(ranked.slice(0, k));

  // 구간 커버
  if (post?.range) {
    [[1,15],[16,30],[31,45]].forEach(([a,b]) => {
      if (![...cand].some(n => a <= n && n <= b)) {
        const add = ranked.find(n => n>=a && n<=b && !cand.has(n));
        if (add) {
          cand.add(add);
          if (cand.size > k) {
            const drop = [...cand]
              .filter(x => !(a<=x&&x<=b))
              .sort((x,y) => (score.get(x)-score.get(y)) || (x-y))[0];
            if (drop) cand.delete(drop);
          }
        }
      }
    });
  }

  // 끝자리 다양성(같은 끝자리 최대 2개)
  if (post?.ending) {
    const endCount = {};
    for (const n of [...cand]) {
      const e = n % 10;
      endCount[e] = (endCount[e] || 0) + 1;
    }
    for (const e in endCount) {
      if (endCount[e] > 2) {
        const overs = [...cand]
          .filter(n => n % 10 === (+e))
          .sort((x,y) => (score.get(x)-score.get(y)) || (x-y));
        while (overs.length > 2) cand.delete(overs.shift());
      }
    }
    if (cand.size < k) {
      for (const n of ranked) { if (cand.size >= k) break; cand.add(n); }
    }
  }

  return { set: cand, score };
}

/* ============== 전부 0 회차: 예상 추출 6개 샘플 ============== */
function weightedSampleWithoutReplacement(probsMap, drawCount = 6) {
  const pool = Array.from(probsMap.keys());
  const weights = pool.map(k => probsMap.get(k));
  const picked = [];
  let total = weights.reduce((a,b)=>a+b,0);
  for (let t=0; t<drawCount && pool.length>0; t++) {
    let r = Math.random() * total, idx = 0;
    while (idx < pool.length && r > weights[idx]) { r -= weights[idx]; idx++; }
    if (idx >= pool.length) idx = pool.length - 1;
    picked.push(pool[idx]);
    total -= weights[idx];
    pool.splice(idx,1);
    weights.splice(idx,1);
  }
  return picked.sort((a,b)=>a-b);
}

function getRoundRow(round) { return CLEANED_DATA.find(r => r[0] === round); }

/* =================== 메인 시뮬레이션 =================== */
function simulate() {
  prepareDataOnce();

  const totalRoundsEl = document.getElementById("totalRounds");
  const applyRoundEl  = document.getElementById("applyRound");
  const candidateEl   = document.getElementById("candidateCount");
  const modeEl        = document.getElementById("mode");
  const objEl         = document.getElementById("objective");

  let totalRounds = clampInt(totalRoundsEl?.value, 1, 180, DEFAULT_TOTAL_ROUNDS);

  // [PATCH] 회차 입력을 '예측 가능 범위'로 보정
  let applyRoundRaw = parseInt(applyRoundEl?.value, 10);
  let applyRound    = clampRoundOrPredictable(applyRoundRaw);

  let k = clampInt(candidateEl?.value, K_MIN, K_MAX, 10);
  if (totalRoundsEl) totalRoundsEl.value = totalRounds;
  if (applyRoundEl)  applyRoundEl.value  = applyRound;
  if (candidateEl)   candidateEl.value   = k;

  const mode      = modeEl?.value || 'predict';
  const objective = objEl?.value  || 'avg';

  // === 집계(항상 적용회차 직전 r-1까지) ===
  const counts = aggregateCountsUntil(applyRound - 1, totalRounds);

  // === [PATCH] 예측 회차 판별 및 적용 데이터 구성 ===
  // 조건: (1) 입력 회차가 ZERO_ROUNDS에 있음  OR  (2) ROUND_MAX + 1
  const isZeroRoundProvided = ZERO_ROUNDS.has(applyRound);
  const isNextRound         = (!isZeroRoundProvided) && (applyRound === (ROUND_MAX + 1));
  const isPredictRound      = isZeroRoundProvided || isNextRound;

  // 예측 회차면 전부 0 더미 행 구성, 아니면 실제 행 사용
  let applyData = isPredictRound
    ? [applyRound, 0,0,0,0,0,0, 0]
    : getRoundRow(applyRound);

  const isDummy = applyData && applyData.slice(1,8).every(n => n === 0); // 안전한 플래그

  // === 가중치 선택(튜닝 결과 → 힌트 → 기본) ===
  let weights = { ...DEFAULT_WEIGHTS };
  if (k === 7) {
    if (!TUNED.k7)  optimizeWeightsForK(7, 3, totalRounds, 250);
    if (TUNED.k7?.weights) weights = TUNED.k7.weights;
    else if (objective === 'hiHit') weights = { ...HINT_WEIGHTS.hiHit7 };
  } else if (k === 10) {
    if (!TUNED.k10) optimizeWeightsForK(10, 4, totalRounds, 250);
    if (TUNED.k10?.weights) weights = TUNED.k10.weights;
    else if (objective === 'hiHit') weights = { ...HINT_WEIGHTS.hiHit10 };
  }

  // === 후보군 생성 (정규화/후처리 포함) ===
  const { set: candidateSet, score } =
    getScoredCandidatesWithScores(counts, applyData, totalRounds, k, weights, { range:true, ending:true, normalize:true });

  // === 미노출 후보군 ===
  const probsAll = scoresToProbs(score, 1.0);
  const sortedByLowP = Array.from(probsAll.entries())
    .sort((a,b) => (a[1] - b[1]) || (a[0] - b[0]));
  const nonExpose = [];
  for (const [n] of sortedByLowP) {
    if (!candidateSet.has(n)) nonExpose.push(n);
    if (nonExpose.length >= k) break;
  }

  // === 렌더링 준비 ===
  const maxCount = Math.max(...Object.values(counts));
  const minCount = Math.min(...Object.values(counts));
  const applyNums  = applyData ? applyData.slice(1, 7) : [];
  const applyBonus = applyData ? applyData[7] : null;

  // === 테이블 렌더 ===
  let html = "<table>";

  // 헤더
  html += "<tr>";
  for (let i = 1; i <= 45; i++) html += `<th>${i}</th>`;
  html += "</tr>";

  // 빈도수
  html += `<tr><td colspan="45" class="section-label">빈도수</td></tr>`;
  html += "<tr>";
  for (let i = 1; i <= 45; i++) {
    const color = getColor(counts[i], minCount, maxCount);
    const tip = `번호 ${i}의 최근 ${totalRounds}회 빈도: ${counts[i]}회 (보너스 0.5 반영)`;
    html += `<td style="background:${color};color:#111" title="${tip}">${counts[i]}</td>`;
  }
  html += "</tr>";

  // 적용회차 추출
  html += `<tr><td colspan="45" class="section-label">적용회차 추출</td></tr>`;
  html += "<tr>";
  for (let i = 1; i <= 45; i++) {
    let val = 0, cls = "";
    if (applyNums.includes(i)) { val = 1; cls = "highlight-pink"; }
    else if (applyBonus === i) { val = 1; cls = "highlight-green"; }
    const tip = (val === 1)
      ? (applyBonus === i ? `적용회차 보너스 번호: ${i}` : `적용회차 당첨 번호: ${i}`)
      : `적용회차에 선택되지 않음`;
    html += `<td class="${cls}" title="${tip}">${val}</td>`;
  }
  html += "</tr>";

  // 예상 후보군
  html += `<tr><td colspan="45" class="section-label">예상 후보군</td></tr>`;
  html += "<tr>";
  for (let i = 1; i <= 45; i++) {
    const inSet = candidateSet.has(i);
    const tip = inSet ? `스코어 상위 후보 포함: ${i}` : `후보 미포함`;
    html += `<td class="${inSet ? "highlight-purple" : ""}" title="${tip}">${inSet ? 1 : 0}</td>`;
  }
  html += "</tr>";

  // 예상 미노출 후보군
  html += `<tr><td colspan="45" class="section-label">예상 미노출 후보군</td></tr>`;
  html += "<tr>";
  const nonExposeSet = new Set(nonExpose);
  for (let i = 1; i <= 45; i++) {
    const isNX = nonExposeSet.has(i);
    const p = probsAll.get(i) || 0;
    const pText = (p * 100).toFixed(2) + '%';
    const qText = ((1 - p) * 100).toFixed(2) + '%';
    const tip = `p(${i})=${pText} | 미노출 확률=${qText}`;
    html += `<td class="${isNX ? "highlight-nonexpose" : ""}" title="${tip}">${isNX ? 1 : 0}</td>`;
  }
  html += "</tr>";

  html += "</table>";
  document.getElementById("table").innerHTML = html;

  // 요약
  const isPredictBadge = isPredictRound ? ' (예측 회차)' : '';
  let summaryHtml =
    `적용회차: <b>${applyRound}${isPredictBadge}</b> / 차수 크기: <b>${totalRounds}</b> / 후보 개수: <b>${k}</b><br>
     집계 범위: ${applyRound - totalRounds} ~ ${applyRound - 1} 회차`;

  // 전부 0(더미) → softmax 기반 6개 샘플
  if (isDummy) {
    const probsCand = new Map();
    for (const n of candidateSet) probsCand.set(n, probsAll.get(n) || 0);
    const pick6 = weightedSampleWithoutReplacement(
      probsCand.size ? probsCand : probsAll, 6
    );
    summaryHtml += `<br><b>예상 추출(샘플):</b> ${pick6.join(", ")}`;
  }

  summaryHtml += `<br><span style="opacity:.75">w1:${weights.w1}, w2:${weights.w2}, w3:${weights.w3}, w4:${weights.w4}</span>`;
  document.getElementById("summary").innerHTML = summaryHtml;
}

/* =================== 초기화 & 이벤트 =================== */
window.addEventListener('DOMContentLoaded', () => {
  prepareDataOnce();
  const tr  = document.getElementById('totalRounds');
  const ar  = document.getElementById('applyRound');
  const cc  = document.getElementById('candidateCount');
  const btn = document.getElementById('refreshBtn');
  const tuneBtn = document.getElementById('tuneBtn');

  if (tr && (!tr.value || parseInt(tr.value, 10) <= 0)) tr.value = DEFAULT_TOTAL_ROUNDS;

  // 기본 적용회차: 비어있으면 최신(ROUND_MAX)
  if (ar && (!ar.value || parseInt(ar.value, 10) === 0)) ar.value = ROUND_MAX;

  if (cc && (!cc.value || parseInt(cc.value, 10) <= 0)) cc.value = 10;

  const onInput = debounce(() => simulate(), 120);
  tr?.addEventListener('input', onInput);
  ar?.addEventListener('input', onInput);
  cc?.addEventListener('input', onInput);
  btn?.addEventListener('click', () => simulate());

  tuneBtn?.addEventListener('click', () => {
    const trv = clampInt(tr?.value, 1, 180, DEFAULT_TOTAL_ROUNDS);
    console.time('tune7');  optimizeWeightsForK(7, 3, trv, 250);  console.timeEnd('tune7');
    console.time('tune10'); optimizeWeightsForK(10, 4, trv, 250); console.timeEnd('tune10');
    simulate();
  });

  simulate();
});

/* =================== (선택) 콘솔 유틸 =================== */
function backtestOnce(round, totalRounds, k, weights) {
  const counts = aggregateCountsUntil(round - 1, totalRounds);
  const applyData = getRoundRow(round);
  const { set: cand } = getScoredCandidatesWithScores(counts, applyData, totalRounds, k, weights);
  const actual = new Set(applyData.slice(1, 7));
  let hits = 0; for (const n of cand) if (actual.has(n)) hits++;
  return hits;
}
function lexGreater(a, b) {
  for (let i=0;i<Math.max(a.length,b.length);i++) {
    if ((a[i]||0) > (b[i]||0)) return true;
    if ((a[i]||0) < (b[i]||0)) return false;
  }
  return false;
}
function optimizeWeightsForK(k, targetHits, totalRounds = DEFAULT_TOTAL_ROUNDS, sampleN = 250) {
  prepareDataOnce();
  const roundsAsc = CLEANED_DATA.map(r => r[0]).sort((a,b)=>a-b)
    .filter(r => (r - 1) >= ROUND_MIN && (r - totalRounds) >= ROUND_MIN);
  const sample = roundsAsc.slice(-sampleN);
  const GRID = (k === 7)
    ? { w1:[0.6,0.8,1.0], w2:[0.0,0.3], w3:[0.8,1.2,1.6], w4:[0.0,0.2,0.4] }
    : { w1:[0.8,1.0,1.2], w2:[0.3,0.6], w3:[0.5,0.8,1.2], w4:[0.0,0.2,0.4] };
  let best = null, bestW = null, bestStats = null;
  for (const w1 of GRID.w1) for (const w2 of GRID.w2)
  for (const w3 of GRID.w3) for (const w4 of GRID.w4) {
    let cnt = 0, sumH = 0, geT = 0, geTminus1 = 0;
    for (const r of sample) {
      const h = backtestOnce(r, totalRounds, k, { w1, w2, w3, w4 });
      sumH += h; cnt++;
      if (h >= targetHits) geT++;
      if (h >= targetHits - 1) geTminus1++;
    }
    const avg = sumH / cnt;
    const pGeT  = geT / cnt;
    const pGeT1 = geTminus1 / cnt;
    const key = (k === 7) ? [pGeT, pGeT1, avg] : [pGeT, avg, pGeT1];
    if (!best || (function lexGreater(a, b){for(let i=0;i<Math.max(a.length,b.length);i++){if((a[i]||0)>(b[i]||0))return true;if((a[i]||0)<(b[i]||0))return false;}return false;})(key,best)) {
      best = key; bestW = { w1, w2, w3, w4 }; bestStats = { avg, pGeT, pGeT1, tested: cnt };
    }
  }
  const slot = (k === 7) ? 'k7' : 'k10';
  TUNED[slot] = { weights: bestW, stats: bestStats };
  return TUNED[slot];
}
