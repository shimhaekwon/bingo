var myScroll;
var myScroll2;
var myScroll3;
var myScroll4;
var myScroll5;
var myScroll6;
var myScroll7;
var myScroll8;
var myScroll9;
var myScroll10;
var myScroll11;
var myScroll12;
var myScroll13;
var myScroll14;
var myScroll15;
function loaded() {
    myScroll = new iScroll('wrapper', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll2 = new iScroll('wrapper2', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll3 = new iScroll('wrapper3', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll4 = new iScroll('wrapper4', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll5 = new iScroll('wrapper5', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll6 = new iScroll('wrapper6', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll7 = new iScroll('wrapper7', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll8 = new iScroll('wrapper8', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll9 = new iScroll('wrapper9', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll10 = new iScroll('wrapper10', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll11 = new iScroll('wrapper11', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll12 = new iScroll('wrapper12', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll13 = new iScroll('wrapper13', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll14 = new iScroll('wrapper14', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
	myScroll15 = new iScroll('wrapper15', { hScrollbar: false, vScrollbar: true, checkDOMChanges: true});
   setTimeout(function() {      
        myScroll.refresh();
		myScroll2.refresh();
		myScroll3.refresh();
		myScroll4.refresh();
		myScroll5.refresh();
		myScroll6.refresh();
		myScroll7.refresh();
		myScroll8.refresh();
		myScroll9.refresh();
		myScroll10.refresh();
		myScroll11.refresh();
		myScroll12.refresh();
		myScroll13.refresh();
		myScroll14.refresh();
		myScroll15.refresh();
   }, 100);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);
</script>
<script>
var db;
var cb=[];
var datalength=0;
  // 문서를 읽어 들일 때 발생하는 이벤트를 설정
window.onload = function() {
	//document.addEventListener("deviceready", onDeviceReady, false);
//};
//window.localStorage.clear();
//function onDeviceReady() {
	//if(AdMob) {AdMob.showInterstitial();AdMob.showBanner(8);};
	//onLoad(); 
	//get_last_lotto_game();
	lotto_getdata()
	check_loading();
	data_open();
		
   
  };
  
     function onLoad() {
                if(( /(ipad|iphone|ipod|android)/i.test(navigator.userAgent) )) {
                    document.addEventListener('deviceready', initApp, false);
                } else {
                    initApp();
                }
            }
        
        var ad_units = {
            ios : {
                banner: 'ca-app-pub-3179694509720374/5235175240',
                interstitial: 'ca-app-pub-3179694509720374/6711908448'
            },
            android : {
                banner: 'ca-app-pub-3179694509720374/4749956441',
                interstitial: 'ca-app-pub-3179694509720374/1804993249'
            }
        };
        var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
        function initApp() {
        	if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
        	
            initAd();
            
            // display the banner at startup
			
			AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:true});
			
			if(AdMob) {	
	AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );};
	
			//AdMob.showInterstitial();
            //createSelectedBanner();
        }
        function initAd(){
            var defaultOptions = {
                // bannerId: admobid.banner,
                // interstitialId: admobid.interstitial,
                // adSize: 'SMART_BANNER',
                // width: integer, // valid when set adSize 'CUSTOM'
                // height: integer, // valid when set adSize 'CUSTOM'
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                // x: integer,		// valid when set position to 0 / POS_XY
                // y: integer,		// valid when set position to 0 / POS_XY
                isTesting: false, // set to true, to receiving test ad for testing purpose
                //autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
            };
            AdMob.setOptions( defaultOptions );
            registerAdEvents();
        }
        // optional, in case respond to events or handle error
        function registerAdEvents() {
        	/* deprecated
            document.addEventListener('onBannerFailedToReceive', function(data){ alert('error: ' + data.error + ', reason: ' + data.reason); });
            document.addEventListener('onBannerReceive', function(){});
            document.addEventListener('onBannerPresent', function(){});
            document.addEventListener('onBannerLeaveApp', function(){});
            document.addEventListener('onBannerDismiss', function(){});
            
            document.addEventListener('onInterstitialFailedToReceive', function(data){ alert('error: ' + data.error + ', reason: ' + data.reason); });
            document.addEventListener('onInterstitialReceive', function(){});
            document.addEventListener('onInterstitialPresent', function(){});
            document.addEventListener('onInterstitialLeaveApp', function(){});
            document.addEventListener('onInterstitialDismiss', function(){});
            */
            
            // new events, with variable to differentiate: adNetwork, adType, adEvent
            document.addEventListener('onAdFailLoad', function(data){ 
            	alert('error: ' + data.error + 
            			', reason: ' + data.reason + 
            			', adNetwork:' + data.adNetwork + 
            			', adType:' + data.adType + 
            			', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            document.addEventListener('onAdLoaded', function(data){});
            document.addEventListener('onAdPresent', function(data){});
            document.addEventListener('onAdLeaveApp', function(data){});
            document.addEventListener('onAdDismiss', function(data){});
        };
		  
  function data_open(){
	  if (window.openDatabase == undefined) {
      //alert("Web Database를 지원하지 않습니다!!");
      return;
    }
    // 데이터베이스 열기
    db = window.openDatabase("lotto.db", "1.0", "TODO", 1024 * 1024);
    db.transaction(function(tr) {
      // 테이블이 존재하지 않을 경우에는 새로 작성
      var query2 = "drop table todo_tb"
	  var query  = 
        "CREATE TABLE IF NOT EXISTS todo_tb(" +
        "  todo_id INTEGER  PRIMARY KEY,     " +
        "  a  INTEGER(10),             " +
		"  b  INTEGER(10),             " +
		"  c  INTEGER(10),             " +
		"  d  INTEGER(10),             " +
		"  e  INTEGER(10),             " +
		"  f  INTEGER(10),             " +
		"  sum  INTEGER(10),             " +
		"  holsu  INTEGER(10),             " +
		"  jaksu  INTEGER(10),             " +
		"  yunbun  INTEGER(10),             " +
		"  low  INTEGER(10),             " +
		"  high  INTEGER(10),             " +
		"  sosu  INTEGER(10),             " +
		"  samsu  INTEGER(10),             " +
		"  habsu  INTEGER(10),             " +
		"  zero  INTEGER(10),             " +
		"  one  INTEGER(10),             " +
		"  two  INTEGER(10),             " +
		"  three  INTEGER(10),             " +
		"  four  INTEGER(10),             " +
		"  junmul  INTEGER(10),             " +
		"  last_lotto  TEXT NOT NULL,             " +
		"  sumlastsu  INTEGER(10),             " +
		"  lotto_point  INTEGER(10),             " +
		"  jugocha  INTEGER(10),             " +
		"  asd  TEXT NOT NULL,             " +
		"  game_510mi  TEXT NOT NULL,             " +
		"  game_10mi  TEXT NOT NULL,             " +
		"  last_su  TEXT NOT NULL             " +
        ")";
      tr.executeSql(query, [], loadItems);
    });};	
  // 데이터 읽기
  function loadItems() {
    db.transaction(function(tr) {
      var query = "SELECT * FROM todo_tb";
      tr.executeSql(query, [], loadItems_onResult);
    });
  }
  // 데이터 읽기가 성공했을 때 실행할 처리
  function loadItems_onResult(tr, rs) {
     //리스트 초기화
    //while(my_lotto.hasChildNodes()) {
     // my_lotto.removeChild(my_lotto.lastChild);
   // }
   my_lott.innerHTML="";
	datalength= rs.rows.length;
    for (var i = 0; i < rs.rows.length; i++) {
      var row = rs.rows.item(i);
      var todo_id = row.todo_id;
      var a0   = row.a;
	  var a1    = row.b;
	  var a2    = row.c;
	  var a3    = row.d;
      var a4    = row.e;
	  var a5    = row.f;
	  var sum    = row.sum;
	  var holsu    = row.holsu;
	  var jaksu    = row.jaksu;
      var yunbun    = row.yunbun;
	  var low    = row.low;
   	  var high    = row.high;
	  var sosu    = row.sosu;
	  var samsu    = row.samsu;
	  var habsu    = row.habsu;
	  var zero = row.zero;
    var one=row.one;
    var two=row.two;
    var three=row.three;
    var four=row.four;
    var junmul=row.junmul;
    var last_lotto=row.last_lotto;
    var sumlastsu=row.sumlastsu;
    var lotto_point=row.lotto_point;
    var jugocha=row.jugocha;
    var asd=row.asd;
    var game_510mi=row.game_510mi;
    var game_10mi=row.game_10mi;
	var last_su=row.last_su;

cb=[a0,a1,a2,a3,a4,a5];
//my_lotto.innerHTML+=a0+","+a1+","+a2+","+a3+","+a4+","+a5;
//alert(lotto_selected_cb[0]);
for(j=0; j<6; j++){
if(cb[j]<10){my_lott.innerHTML+='<b style="background-color:orange">&nbsp;'+cb[j]+'&nbsp;</b>';}
else if(cb[j]==10){my_lott.innerHTML+='<b style="background-color:orange">'+cb[j]+'</b>';}
else if(cb[j]<=20){my_lott.innerHTML+='<b style="background-color:blue">'+cb[j]+'</b>';}
else if(cb[j]<=30){my_lott.innerHTML+='<b style="background-color:red">'+cb[j]+'</b>';}
else if(cb[j]<=40){my_lott.innerHTML+='<b style="background-color:gray">'+cb[j]+'</b>';}
else{my_lott.innerHTML+='<b style="background-color:green">'+cb[j]+'</b>';};
};
	 my_lott.innerHTML+="<button id='deletebutton' onclick='del("+todo_id+")'>삭제</button>";
	my_lott.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';
 
    }
  }
  // [삭제]버튼을 눌렀을 때 발생하는 이벤트
  function del(todo_id) {
    db.transaction(function(tr) {
        var query = "DELETE FROM todo_tb WHERE todo_id=?";
        tr.executeSql(query,[todo_id]);
    }, function(){ alert('삭제 실패') }, loadItems);
  };
  // [추가]버튼을 눌렀을 때 발생하는 이벤트
  function add(count) {
	//document.getElementById("button").innerText="sadad";  
    //and_btn.innerText="sadad";
	  
    var a = lotto_selected_all[count][0];
	var b = lotto_selected_all[count][1];
	var c = lotto_selected_all[count][2];
	var d = lotto_selected_all[count][3];
	var e = lotto_selected_all[count][4];
	var f = lotto_selected_all[count][5];
	var sum = lotto_info[count].sum;
	var holsu = lotto_info[count].holsu;
	var jaksu = lotto_info[count].jaksu;
	var yunbun = lotto_info[count].yunbun;
	var low = lotto_info[count].low;
	var high = lotto_info[count].high;
	var sosu = lotto_info[count].sosu;
	var samsu = lotto_info[count].samsu;
	var habsu = lotto_info[count].habsu;
	var zero = lotto_info[count].zero;
    var one=lotto_info[count].one;
    var two=lotto_info[count].two;
    var three=lotto_info[count].three;
    var four=lotto_info[count].four;
    var junmul=lotto_info[count].junmul;
    var last_lotto=lotto_info[count].last_lotto;
    var sumlastsu=lotto_info[count].sumlastsu;
    var lotto_point=lotto_info[count].lotto_point;
    var jugocha=lotto_info[count].jugocha;
    var asd=lotto_info[count].asd;
    var game_510mi=lotto_info[count].game_510mi;
    var game_10mi=lotto_info[count].game_10mi;
	var last_su=lotto_info[count].last_su;
	
if(datalength<5){	
	
    db.transaction(function(tr) {
      //var query = "INSERT INTO todo_tb(a,b) VALUES(?,?)";
var query = "INSERT INTO todo_tb(a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     // tr.executeSql(query,[a,b],loadItems);
	  tr.executeSql(query,[a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su],loadItems);
    });
	var massage="선택하신 조합이 저장되었습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
	}else{confirm1();}
  };
//-------------
  function add2(count) {
	//document.getElementById("button").innerText="sadad";  
    //and_btn.innerText="sadad";
	  
    var a = lotto_selected_all2[count][0];
	var b = lotto_selected_all2[count][1];
	var c = lotto_selected_all2[count][2];
	var d = lotto_selected_all2[count][3];
	var e = lotto_selected_all2[count][4];
	var f = lotto_selected_all2[count][5];
	var sum = lotto_info2[count].sum;
	var holsu = lotto_info2[count].holsu;
	var jaksu = lotto_info2[count].jaksu;
	var yunbun = lotto_info2[count].yunbun;
	var low = lotto_info2[count].low;
	var high = lotto_info2[count].high;
	var sosu = lotto_info2[count].sosu;
	var samsu = lotto_info2[count].samsu;
	var habsu = lotto_info2[count].habsu;
	var zero = lotto_info2[count].zero;
    var one=lotto_info2[count].one;
    var two=lotto_info2[count].two;
    var three=lotto_info2[count].three;
    var four=lotto_info2[count].four;
    var junmul=lotto_info2[count].junmul;
    var last_lotto=lotto_info2[count].last_lotto;
    var sumlastsu=lotto_info2[count].sumlastsu;
    var lotto_point=lotto_info2[count].lotto_point;
    var jugocha=lotto_info2[count].jugocha;
    var asd=lotto_info2[count].asd;
    var game_510mi=lotto_info2[count].game_510mi;
    var game_10mi=lotto_info2[count].game_10mi;
	var last_su=lotto_info2[count].last_su;
	
if(datalength<5){	
	
    db.transaction(function(tr) {
      //var query = "INSERT INTO todo_tb(a,b) VALUES(?,?)";
var query = "INSERT INTO todo_tb(a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     // tr.executeSql(query,[a,b],loadItems);
	  tr.executeSql(query,[a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su],loadItems);
    });
	var massage="선택하신 조합이 저장되었습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
	}else{confirm1();}
  };  
//-------------
  function add3(count) {
	//document.getElementById("button").innerText="sadad";  
    //and_btn.innerText="sadad";
	  
    var a = lotto_selected_all3[count][0];
	var b = lotto_selected_all3[count][1];
	var c = lotto_selected_all3[count][2];
	var d = lotto_selected_all3[count][3];
	var e = lotto_selected_all3[count][4];
	var f = lotto_selected_all3[count][5];
	var sum = lotto_info3[count].sum;
	var holsu = lotto_info3[count].holsu;
	var jaksu = lotto_info3[count].jaksu;
	var yunbun = lotto_info3[count].yunbun;
	var low = lotto_info3[count].low;
	var high = lotto_info3[count].high;
	var sosu = lotto_info3[count].sosu;
	var samsu = lotto_info3[count].samsu;
	var habsu = lotto_info3[count].habsu;
	var zero = lotto_info3[count].zero;
    var one=lotto_info3[count].one;
    var two=lotto_info3[count].two;
    var three=lotto_info3[count].three;
    var four=lotto_info3[count].four;
    var junmul=lotto_info3[count].junmul;
    var last_lotto=lotto_info3[count].last_lotto;
    var sumlastsu=lotto_info3[count].sumlastsu;
    var lotto_point=lotto_info3[count].lotto_point;
    var jugocha=lotto_info3[count].jugocha;
    var asd=lotto_info3[count].asd;
    var game_510mi=lotto_info3[count].game_510mi;
    var game_10mi=lotto_info3[count].game_10mi;
	var last_su=lotto_info3[count].last_su;
	
if(datalength<5){	
	
    db.transaction(function(tr) {
      //var query = "INSERT INTO todo_tb(a,b) VALUES(?,?)";
var query = "INSERT INTO todo_tb(a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     // tr.executeSql(query,[a,b],loadItems);
	  tr.executeSql(query,[a,b,c,d,e,f,sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su],loadItems);
    });
	var massage="선택하신 조합이 저장되었습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
	}else{confirm1();}
  };  
 
//----------------------------

function confirm1(){
	var massage="무료 버전은 최대 5게임만 저장 가능합니다. 유료버전은 기본조합추출 횟수와 저장에 제한이 없으며 전면광고가 송출되지 않습니다.";
    var title="유료버전 다운로드";
	var button="네,아니오";
	navigator.notification.confirm(massage,callback1,title,button);		
	}
function callback1(button){
	if(button==1){window.open("market://details?id=com.crying.lotto_pro","_system")}
	else if(button==2){};
}	
function confirm2(){
	var massage="저는 항상 여러분의 평가를 기다리고 있습니다. 사용하며 느끼신 모든 것들을 가감없이 남겨주세요!";
    var title="로또조또 평가하기";
	var button="지금 평가하기 ,나중에 평가하기";
	navigator.notification.confirm(massage,callback2,title,button);		
	}
		
function callback2(button){
	if(button==1){
		var dagul=1;
		window.localStorage.setItem("dagul",dagul);
		window.open("market://details?id=com.crying.lotto","_system")}
	else if(button==2){};
}	 


function dagulconfirm(){
var dagul=window.localStorage.getItem("dagul");
	if(dagul==null){confirm2()};
};
//--------------------------------------------data analysis-------------------------------------------------------
var last_lotto_game=0;
var now_lotto_game=0;
var lastlotto=[];
var dangchum=[];
var dangchum_every=[];
var game5every=[];
var game5chul=[];
var game5chul2=[];
var game5chularray=[]
var game5mi=[];
var game10every=[];
var game10chul=[];
var game10mi=[];
var game510mi=[];

//-----------------------
var data_success=false;
var alldangchum=new Array;
function lotto_getdata(){
	
   var qr="../lottogetdata.php";
	
	$.ajax({type:"GET",url:qr,timeout:5000,jsonp:"callback",dataType:"jsonp",
	success:function(data){
		if(data.myJson=="err"){
		alert("자료추출실패");
		return false;
		}else{
			var itemsu=data.myJson.length;
			for(var c=1; c<itemsu; c++)
			{alldangchum.push([parseInt(data.myJson[c].ball1),parseInt(data.myJson[c].ball2),parseInt(data.myJson[c].ball3),parseInt(data.myJson[c].ball4),parseInt(data.myJson[c].ball5),parseInt(data.myJson[c].ball6),parseInt(data.myJson[c].boball),parseInt(data.myJson[c].pick)]);
				}
				last_lotto_game=parseInt(data.myJson[itemsu-1].pick);
			//last_updated_lotto_game=parseInt(data.myJson[itemsu-1].pick);
			//alert("마지막업데이트회차"+last_updated_lotto_game);
			data_success=true;	
			}
	
	},error:function(xhr,status,error){
		if(status=="timeout"){
			alert("타임아웃으로실패");
			}else{
				alert("서버호출실패");
				}
	}});
	};
//----------------------- 
function loading_data(){
	intro.style.visibility="hidden"; 
	main.style.visibility="visible"; 
	};
//-----------------------------------
function check_loading(){
	if(data_success){ 
for(i=(alldangchum.length-150); i<alldangchum.length; i++){ 	
dangchum_every.push(alldangchum[i]);	
};	
for(i=(alldangchum.length-100); i<alldangchum.length; i++){ 	
dangchum.push(alldangchum[i]);	
};	

/*
var intrologin=window.localStorage.getItem("intrologin");

var qr="../login.php?intrologin="+intrologin;
	
	$.ajax({type:"GET",url:qr,timeout:5000,dataType:"json",
	success:function(data){
		if(data.myJson=="err"){
		alert("로조회원만 입장이 가능합니다.");
		return false;
		}else{
			//alert("로조회원의 입장을 환영합니다.");
			//get_last_lotto_game();
			//loading_data();
    window.localStorage.clear();		
    loading_data();
	lotto_analysis();
	basic_setting();	  
	calculate();		
	load_page2();		
	button_reset();
	 show_number1();		
	//lotto_choice();	
	onLoad(); 
			//
			}
	
	},error:function(xhr,status,error){
		if(status=="timeout"){
			alert("타임아웃으로 입장실패");
			}else{
				alert("서버호출실패");
				}
	}});*/
	
	  window.localStorage.clear();		
    loading_data();
	lotto_analysis();
	basic_setting();	  
	calculate();		
	load_page2();		
	button_reset();
	 show_number1();		
	//lotto_choice();	
	onLoad(); 
	

	//if(AdMob) {
	//AdMob.showInterstitial();
	//AdMob.showBanner(8);
	//};
	  }
	else{setTimeout(check_loading,100)};
	};
//-----------analysis function----------------- 
function lotto_analysis(){	
//-----------로또 45개 집어넣기----------------

  for(i=0; i<45; i++){
	lotto_number.push(i+1);
	};
//------------5게임,10게임,최근당첨리스트--------		
 for(i=(dangchum.length-10); i<dangchum.length; i++){
	 for(j=0; j<dangchum[i].length-1; j++){
		 game10every.push(dangchum[i][j]);
		 if(i>=(dangchum.length-5)){game5every.push(dangchum[i][j]);};
		 if(i==(dangchum.length-1)){lastlotto=dangchum[i];};//최근당첨번호
		 };
	  }; 		    
//------------5게임 출연수 및 5게임 미출현수 찾기----------------	
for(i=0; i<lotto_number.length; i++){
	var temp=0;
	game5chul[i]=new Array;
for(j=0; j<game5every.length; j++){
	      if(lotto_number[i]==game5every[j]){
			 // game5chul.push(lotto_number[i]);
			  temp++;
			  };
		  };
		     if(temp == 0){ 
			game5mi.push(lotto_number[i]);
			 }else{
		 game5chul[i].push(lotto_number[i],temp);	 
};};
     //game5chul.sort(function(a,b){return a[0]-b[0]});
	 //game5chul.unique();
//------------10게임 출연수 및 10게임 미출현수 찾기----------------	
for(i=0; i<lotto_number.length; i++){
	var temp=0;
for(j=0; j<game10every.length; j++){
	      if(lotto_number[i]==game10every[j]){
			  game10chul.push(lotto_number[i]);
			  temp++;
			  };
		  };
		     if(temp == 0){ 
             game10mi.push(lotto_number[i]);
			 };
};	 
    //game5chul.sort(function(a,b){return a[0]-b[0]});
	 game10chul.unique();	
//------------5~10게임 미출현수 찾기----------------	
for(i=0; i<game5mi.length; i++){
	var temp=0;
for(j=0; j<game10mi.length; j++){
	      if(game5mi[i]==game10mi[j]){
			  temp++;
			  };
		  };
		     if(temp == 0){ 
             game510mi.push(game5mi[i]);
			 };
};
 
var aa=document.getElementById("aa");
//--------------------------------
aa.innerHTML+="지난 회차("+last_lotto_game+"회) 당첨번호<br>";		
for(i=0; i<lastlotto.length-2; i++){
if(lastlotto[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lastlotto[i]+'&nbsp;</b>';}
else if(lastlotto[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+lastlotto[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+lastlotto[i]+'</b>';}
};
aa.innerHTML+="보너스";	
if(lastlotto[6]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lastlotto[6]+'&nbsp;</b>';}
else if(lastlotto[6]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+lastlotto[6]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+lastlotto[6]+'</b>';}

aa.innerHTML+="<br>6~10주 미 출현수(보너스포함)<br>";	 
for(i=0; i<game510mi.length; i++){
if(game510mi[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+game510mi[i]+'&nbsp;</b>';}
else if(game510mi[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+game510mi[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+game510mi[i]+'</b>';}
};
aa.innerHTML+="<br>11주 이상 미 출현수(보너스포함)<br>";	 	 
for(i=0; i<game10mi.length; i++){
if(game10mi[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+game10mi[i]+'&nbsp;</b>';}
else if(game10mi[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+game10mi[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+game10mi[i]+'</b>';}
};
aa.innerHTML+="<br>";	 

};
//--------------------------

Array.prototype.unique = function(){
  var aa = {};
   for(var i=0; i<this["length"]; i++)
     if(typeof aa[this[i]] == "undefined") aa[this[i]] = 3;
   this["length"] = 0;
   for(var i in aa) this[this["length"]] = i;
   return this;
} 
//--------------------------------------------------------------------------------------------------
var game=5;
var filter_on=false;
var filter_count=0;
var filter_goal=50;
var button_count=0;
var count=0;
var basic_count=0;
var sum=0;
var holsu=0;
var jaksu=0;
var high=0;
var low=0;
var jugocha=0;
var sumlastsu=0;
var yunbun=0;
var sosu=0;
var samsu=0;
var habsu=0;
var zero=0;
var one=0;
var two=0;
var three=0;
var four=0;
var junmul=0;
var junmul2=0;
var game_5chul=[];
var game_5chulsu=0;
var game_10mi=[];
var game_10misu=0;
var game_510mi=[];
var game_510misu=0;
var last_lotto=[];
var last_lottosu=0;
var lotto_point=0;
var sosu_number=[2,3,5,7,11,13,17,19,23,29,31,37,41,43];
var lotto_number=[];
var lotto_selected_all=[];	
var lotto_info=[];
var lotto_find=[];
var lotto_find2=[];
var game5chul_find=[];
var game510mi_find=[];
var game10mi_find=[];
var junmul_array={zero:0,one:0,two:0,three:0,four:0};
var samgu_array={zero:0,one:0,two:0,three:0,four:0};
var yigu_array={zero:0,one:0,two:0,three:0,four:0};
var ilgu_array={zero:0,one:0,two:0,three:0,four:0};
var goong_array={a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0};
var ewal_array={zero:0,one:0,two:0};
var yunbun_array={zero:0,one:0,two:0};
var lastsu_array={a0:0,a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0};

function AutoInter(){
button_count++;
if(button_count%8==0){ if(AdMob) AdMob.showInterstitial();};	
	};

var filter_goal_2=1;
	
function rebutton(){
myScroll5.scrollTo(0,0);	
lotto_find=[];
lotto_find2=[];
lotto_find3=[];
lotto_find4=[];
lotto_find5=[];
filter_count=0;
if(filter_goal_2==1){filter_goal=50;}else{filter_goal=500;};
for(i=0; i<45; i++){
	lotto_find[i]=new Array;
	lotto_find[i][0]=i+1;
	lotto_find[i][1]=0;
for(j=0; j<45; j++){
	lotto_find2[i]=new Array;	
	lotto_find2[i][0]=i+1;	
	lotto_find2[i][1]=j+1;
	lotto_find2[i][2]=0;
	lotto_find3.push(lotto_find2[i]);
	for(k=0; k<45; k++){
	lotto_find4[i]=new Array;	
	lotto_find4[i][0]=i+1;	
	lotto_find4[i][1]=j+1;
	lotto_find4[i][2]=k+1;
	lotto_find4[i][3]=0;
	lotto_find5.push(lotto_find4[i]);
		
		
		};
};
};
junmul_array={zero:0,one:0,two:0,three:0,four:0};
samgu_array={zero:0,one:0,two:0,three:0,four:0};
yigu_array={zero:0,one:0,two:0,three:0,four:0};
ilgu_array={zero:0,one:0,two:0,three:0,four:0};
goong_array={a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0};
ewal_array={zero:0,one:0,two:0};
yunbun_array={zero:0,one:0,two:0};
last_su_array={a0:0,a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0};
//if(AdMob) AdMob.showInterstitial();
};

function filtering(){
count=0;
//button_count++;
//if(button_count%5==0){ if(AdMob) AdMob.showInterstitial();};
lotto_number=[];
lotto_selected_all=[];
lotto_info=[];
filter_choice();
if(filter_count<filter_goal){
	
setTimeout(function(){filtering();},1);
}else{filter_count=0; restart(); lotto_choice();}

	
	};




function main_controll(){
	myScroll.scrollTo(0,0);
count=0;
button_count++;
lotto_number=[];
lotto_selected_all=[];
lotto_info=[];
	number.innerHTML="";	
basic_count=0;
//----------------
		var lotto_this2=window.localStorage.getItem("lotto_this2");
	var saved_lotto_game2=window.localStorage.getItem("saved_lotto_game2");
	if(lotto_this2==null){lotto_this2=0;};
	//if(saved_lotto_game==null){
		//saved_lotto_game=last_lotto_game;
		//window.localStorage.setItem("saved_lotto_game",saved_lotto_game); };
	if(saved_lotto_game2==last_lotto_game){
		lotto_this2++;}
		else{	saved_lotto_game2=last_lotto_game;
		window.localStorage.setItem("saved_lotto_game2",saved_lotto_game2); 
		lotto_this2=0;};	
	window.localStorage.setItem("lotto_this2",lotto_this2);
	//window.localStorage.setItem("saved_lotto_game",saved_lotto_game);
	//alert(lotto_this+"/"+saved_lotto_game+"/"+last_lotto_game);	
	//window.localStorage.clear();
	
	if(lotto_this2<10000){
	//restart();
	//lotto_choice();
	restart();		
	//var massage="금주 무료 추출 횟수가 "+(29-lotto_this2)+" 회 남았습니다.";
    //var title="알림";
	//var button="확인";
	//navigator.notification.alert(massage,alertcallback,title,button);
	//lotto_choice();	
//alert((9-lotto_this2));
	//}
	//else{
	//var massage="금주 무료 추출 횟수를 모두 사용하였습니다. 다음주에 다시 사용하실 수 있습니다.";
    //var title="알림";
	//var button="확인";
	//navigator.notification.alert(massage,alertcallback,title,button);
//alert("asdasd");	
	};
	};
	
function restart(){
//if(button_count%3==0){ if(AdMob) AdMob.showInterstitial();};
lotto_choice();
if(basic_count<5){
setTimeout(function(){restart();},1);
}else{basic_count=0;} 
	};



function lotto_choice(){
var hol=$("#holsu option:selected").val();
var want_sum=$("#sum option:selected").val();	
var jak=6-hol;
sum=0;
high=0;
low=0;
jugocha=0;
sumlastsu=0;
last_su=[];
yunbun=0;
sosu=0;
samsu=0;
habsu=6;
zero=0;
one=0;
two=0;
three=0;
four=0;
junmul=0;
junmul2=0;
game_5chul=[];
game_5chulsu=0;
game_10mi=[];
game_10misu=0;
game_510mi=[];
game_510misu=0;
last_lotto=[];
last_lottosu=0;
lotto_point=0;
holsu=0;
jaksu=0;
lotto_number=[];
addsu2=[];
for(i=0; i<addsu.length; i++){
	addsu2.push(addsu[i]);
	};
for(i=0; i<45; i++){
	lotto_number.push(i+1);
	};
for(i=0; i<lotto_number.length; i++){
	for(j=0; j<delsu.length; j++){
		if(lotto_number[i]==delsu[j]){lotto_number.splice(i,1);}};
		};	
//alert(lotto_number);			
var lotto_selected=[];	

hol="random";
want_sum="random";	
var lotto_selected=[];	

for(i=0; i<10000000; i++){
var ran;
var on_addsu2=false;


if(addsu2[0]==null){
	on_addsu2=false;	
ran=Math.floor(Math.random()*lotto_number.length);
var lotto_ran=lotto_number[ran];
}
else{
	on_addsu2=true;
	want_sum="random";
	ran=Math.floor(Math.random()*addsu2.length);
	var lotto_ran=addsu2[ran];
	}

if(hol=="random"){
if(lotto_ran%2==1){holsu++;}else{jaksu++;};	
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};	
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
if(on_addsu2){
for(i=0; i<lotto_number.length; i++){
		if(lotto_number[i]==addsu2[ran]){lotto_number.splice(i,1);};
		};		
addsu2.splice(ran, 1);	
	
	}else{lotto_number.splice(ran, 1);};
lotto_selected.sort(function(a,b){return a-b});
}else{
if(lotto_ran%2==1&holsu<hol){
	holsu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
}
else if(lotto_ran%2==0&jaksu<jak){
	jaksu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
};
};
if(lotto_selected.length==6){break;}
//document.write(lotto_selected.sort(function(a,b){return a-b})+"<br>");
};


for(i=0; i<lotto_selected.length; i++){
	sumlastsu+=lotto_selected[i]%10;
	last_su.push(lotto_selected[i]%10);	
	last_su.sort(function(a,b){return a-b});
	};

lotto_selected_all.push(lotto_selected);
//document.write(lotto_selected_all[count]+"/"+sum+"<br>");
//alert(lotto_selected_all);

for(i=1; i<6; i++){
if((lotto_selected_all[count][i]-lotto_selected_all[count][i-1])==1){yunbun++};
};
for(i=0; i<6; i++){
for(j=0; j<game10mi.length; j++){
	if(lotto_selected_all[count][i]==game10mi[j]){game_10misu++; game_10mi.push(lotto_selected_all[count][i])};
	};
for(j=0; j<game510mi.length; j++){
	if(lotto_selected_all[count][i]==game510mi[j]){game_510misu++;game_510mi.push(lotto_selected_all[count][i])};
	};
for(j=0; j<game5chul.length; j++){
	if(lotto_selected_all[count][i]==game5chul[j][0]){game_5chulsu++;game_5chul.push(game5chul[j])};
	};
for(j=0; j<lastlotto.length; j++){
	if(lotto_selected_all[count][i]==lastlotto[j]){last_lottosu++;last_lotto.push(lotto_selected_all[count][i])};
	};					
};

var asd="";

if(game_10mi==""){game_10mi="없음"};if(game_510mi==""){game_510mi="없음"};
if(game_5chul==""){asd="없음"};if(last_lotto==""){last_lotto="없음"};

for(i=0;i<game_5chul.length;i++){
if(i<game_5chul.length-1){asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회), ";}
else{asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회)";};
};


if(button_count==0){
for(i=0; i<6; i++){
if(lotto_selected_all[count][i]<10){zero++;}
else if(lotto_selected_all[count][i]==10){zero++;}
else if(lotto_selected_all[count][i]<=20){one++;}
else if(lotto_selected_all[count][i]<=30){two++;}
else if(lotto_selected_all[count][i]<=40){three++;}
else{four++;}
};
}else{
aa.innerHTML=""
aa.innerHTML+="추출분석기<br>"
for(i=0; i<6; i++){
if(lotto_selected_all[count][i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lotto_selected_all[count][i]+'&nbsp;</b>'; zero++;}
else if(lotto_selected_all[count][i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+lotto_selected_all[count][i]+'</b>'; zero++;}
else if(lotto_selected_all[count][i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+lotto_selected_all[count][i]+'</b>'; one++;}
else if(lotto_selected_all[count][i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+lotto_selected_all[count][i]+'</b>'; two++;}
else if(lotto_selected_all[count][i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+lotto_selected_all[count][i]+'</b>'; three++;}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+lotto_selected_all[count][i]+'</b>'; four++;}
};
};
jugocha=lotto_selected_all[count][5]-lotto_selected_all[count][0];
if(zero==0){junmul++;junmul2++;};if(one==0){junmul++;junmul2++;};if(two==0){junmul++;junmul2++;};if(three==0){junmul++;junmul2++;};if(four==0){junmul++;};

//number.innerHTML+="<button id='button' onclick='add("+count+"); style.opacity=0.4;'>저장</button>";
//number.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+") , 저고차("+jugocha+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+'</p>';
///if(holsu==2){number.innerHTML+='<b style="color:red">1등 확률이 높은 번호입니다.</b><br>';};
if(holsu==3){lotto_point+=8;};
if(holsu==2||holsu==4){lotto_point+=5;};
if(holsu==1||holsu==5){lotto_point+=2;};
//----------------------------------------
if(yunbun==1){lotto_point+=8;};
if(yunbun==0){lotto_point+=5;};
if(yunbun==2){lotto_point+=2;};
//----------------------------------------
if(sum>=120&sum<=160){lotto_point+=8;}
else if((sum>=90&sum<=119)||(sum>=161&sum<=180)){lotto_point+=5;}
else{lotto_point+=2;};
//------------------------------------------------------------
if((samsu+sosu)==3){lotto_point+=8;};
if((samsu+sosu)==5||(samsu+sosu)==4){lotto_point+=5;};
if((samsu+sosu)==2){lotto_point+=2;};
//--------------------------------------------------------
if(low==3){lotto_point+=8;};
if(low==2||low==4){lotto_point+=5;};
if(low==1||low==5){lotto_point+=2;};
//-----------------------------------------------------
if(zero<4&one<4&two<4&three<4&four<4&(junmul==1)){lotto_point+=13;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==2)){lotto_point+=7;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==1)){lotto_point+=10;};
//---------------------------------------------------------
if(jugocha>=30&jugocha<=40){lotto_point+=8;};
if((jugocha>=25&jugocha<=29)||(jugocha>=41&jugocha<=42)){lotto_point+=4;};
//---------------------------------------------------------
if(sumlastsu>=21&sumlastsu<=30){lotto_point+=8;};
if((sumlastsu>=16&sumlastsu<=20)||(sumlastsu>=31&sumlastsu<=35)){lotto_point+=4;};
//-----------------------------------------------------------------
if(last_lottosu==1){lotto_point+=13;};
if(last_lottosu==0){lotto_point+=8;};
if(last_lottosu==2){lotto_point+=3;};
//-------------------------------------------------------------------
if(game_5chulsu==3){lotto_point+=18;};
if(game_5chulsu==4){lotto_point+=10;};
if(game_5chulsu==2){lotto_point+=12;};
if(game_5chulsu==5){lotto_point+=6;};
//--------------------------------------------------------------
var basic_hol=false;
if(checkbox0.checked==false){basic_hol=true}else{if(holsu>=2&&holsu<=4){basic_hol=true;};};
var basic_sum=false;
if(checkbox1.checked==false){basic_sum=true}else{if(sum>=90&&sum<=180){basic_sum=true;};};
var basic_low=false;
if(checkbox2.checked==false){basic_low=true}else{if(low>=2&&low<=4){basic_low=true;};};
var basic_jugocha=false;
if(checkbox3.checked==false){basic_jugocha=true}else{if(jugocha>=25&&jugocha<=40){basic_jugocha=true;};};
var basic_last_lottosu=false;
if(checkbox4.checked==false){basic_last_lottosu=true}else{if(last_lottosu>=1){basic_last_lottosu=true;};};
var basic_yunbun=false;
if(checkbox5.checked==false){basic_yunbun=true}else{if(yunbun>=1){basic_yunbun=true;};};
var basic_color=false;
if(checkbox6.checked==false){basic_color=true}else{if(zero<4&one<4&two<4&three<4&four<4){basic_color=true;};};
var basic_junmul=false;
if(checkbox7.checked==false){basic_junmul=true}else{if(junmul>=1){basic_junmul=true;};};
var basic_game_5chulsu=false;
if(checkbox8.checked==false){basic_game_5chulsu=true}else{if(game_5chulsu>=3&&game_5chulsu<=4){basic_game_5chulsu=true;};};
var basic_game_10misu=false;
if(checkbox9.checked==false){basic_game_10misu=true}else{if(game_10mi!=="없음"){basic_game_10misu=true;};};

if(basic_hol&&basic_sum&&basic_low&&basic_jugocha&&basic_last_lottosu&&basic_yunbun&&basic_color&&basic_junmul&&basic_game_5chulsu&&basic_game_10misu){
basic_count++;

for(i=0; i<6; i++){
if(lotto_selected_all[count][i]<10){number.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all[count][i]+'&nbsp;</b>';}
else if(lotto_selected_all[count][i]==10){number.innerHTML+='<b style="background-color:orange">'+lotto_selected_all[count][i]+'</b>';}
else if(lotto_selected_all[count][i]<=20){number.innerHTML+='<b style="background-color:blue">'+lotto_selected_all[count][i]+'</b>';}
else if(lotto_selected_all[count][i]<=30){number.innerHTML+='<b style="background-color:red">'+lotto_selected_all[count][i]+'</b>';}
else if(lotto_selected_all[count][i]<=40){number.innerHTML+='<b style="background-color:gray">'+lotto_selected_all[count][i]+'</b>';}
else{number.innerHTML+='<b style="background-color:green">'+lotto_selected_all[count][i]+'</b>';}
};
number.innerHTML+="<button id='button' onclick='add("+count+"); style.opacity=0.4;'>저장</button>";
number.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><br>*1등 조합에 가장 좋은 점수대는 65~85점입니다.<p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';

};

lotto_info.push(new info(sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su));


count++;
if(button_count==0){}else{
aa.innerHTML+="<br>사용된 조합:"+(count)+"조합(100%)<br>"+"걸러진 조합:"+(count-basic_count)+"조합("+((count-basic_count)/(count)*100).toFixed(2)+"%)<br>선별된 조합:"+(basic_count)+"조합("+((basic_count)/(count)*100).toFixed(2)+"%)";

if(count==500){basic_count=5;number.innerHTML="불가능한 조건을 입력하여 조건을 충족하는 조합이 존재하지 않거나 조건이 까다로워 500게임 이내에서는 검출이 불가합니다.";};
};
};
//------------------------
function filter_choice(){
page3_main.innerHTML="";	
var hol=$("#holsu option:selected").val();
var want_sum=$("#sum option:selected").val();
var jak=6-hol;
sum=0;
high=0;
low=0;
jugocha=0;
sumlastsu=0;
last_su=[];
goong=[];
yunbun=0;
sosu=0;
samsu=0;
habsu=6;
zero=0;
one=0;
two=0;
three=0;
four=0;
junmul=0;
junmul2=0;
game_5chul=[];
game_5chulsu=0;
game_10mi=[];
game_10misu=0;
game_510mi=[];
game_510misu=0;
last_lotto=[];
last_lottosu=0;
lotto_point=0;
holsu=0;
jaksu=0;
lotto_number=[];
addsu2=[];	

for(i=0; i<45; i++){
	lotto_number.push(i+1);
	};
hol="random";
want_sum="random";	
//alert(lotto_number);			
var lotto_selected=[];	

for(i=0; i<10000000; i++){
	
var ran;
var on_addsu2=false;

if(addsu2[0]==null){
	on_addsu2=false;	
ran=Math.floor(Math.random()*lotto_number.length);
var lotto_ran=lotto_number[ran];
}
else{
	on_addsu2=true;
	hol="random";want_sum="random";
	ran=Math.floor(Math.random()*addsu2.length);
	var lotto_ran=addsu2[ran];
	}

if(hol=="random"){
if(lotto_ran%2==1){holsu++;}else{jaksu++;};	
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};	
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
if(on_addsu2){
for(i=0; i<lotto_number.length; i++){
		if(lotto_number[i]==addsu2[ran]){lotto_number.splice(i,1);};
		};		
addsu2.splice(ran, 1);	
	
	}else{lotto_number.splice(ran, 1);};
lotto_selected.sort(function(a,b){return a-b});
}else{
if(lotto_ran%2==1&holsu<hol){
	holsu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
}
else if(lotto_ran%2==0&jaksu<jak){
	jaksu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
};
};
if(lotto_selected.length==6){break;}
//document.write(lotto_selected.sort(function(a,b){return a-b})+"<br>");
};
if(want_sum<=sum&parseInt(want_sum)+5>=sum||want_sum=="random"){
for(i=0; i<lotto_selected.length; i++){
	sumlastsu+=lotto_selected[i]%10;
	last_su.push(lotto_selected[i]%10);	
	//last_su.sort(function(a,b){return a-b});
	goong.push(lotto_selected[i]%9);
	//goong.sort(function(a,b){return a-b});
	};

lotto_selected_all.push(lotto_selected);
//document.write(lotto_selected_all[count]+"/"+sum+"<br>");

for(i=1; i<6; i++){
if((lotto_selected_all[count][i]-lotto_selected_all[count][i-1])==1){yunbun++};
};
for(i=0; i<6; i++){
for(j=0; j<game10mi.length; j++){
	if(lotto_selected_all[count][i]==game10mi[j]){game_10misu++; game_10mi.push(lotto_selected_all[count][i])};
	};
for(j=0; j<game510mi.length; j++){
	if(lotto_selected_all[count][i]==game510mi[j]){game_510misu++;game_510mi.push(lotto_selected_all[count][i])};
	};
for(j=0; j<game5chul.length; j++){
	if(lotto_selected_all[count][i]==game5chul[j][0]){game_5chulsu++;game_5chul.push(game5chul[j])};
	};
for(j=0; j<lastlotto.length; j++){
	if(lotto_selected_all[count][i]==lastlotto[j]){last_lottosu++;last_lotto.push(lotto_selected_all[count][i])};
	};					
};

var asd="";

if(game_10mi==""){game_10mi="없음"};if(game_510mi==""){game_510mi="없음"};
if(game_5chul==""){asd="없음"};if(last_lotto==""){last_lotto="없음"};

for(i=0;i<game_5chul.length;i++){
if(i<game_5chul.length-1){asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회), ";}
else{asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회)";};
};

for(i=0; i<6; i++){
if(lotto_selected_all[count][i]<10){page3_main.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all[count][i]+'&nbsp;</b>'; zero++;}
else if(lotto_selected_all[count][i]==10){page3_main.innerHTML+='<b style="background-color:orange">'+lotto_selected_all[count][i]+'</b>'; zero++;}
else if(lotto_selected_all[count][i]<=20){page3_main.innerHTML+='<b style="background-color:blue">'+lotto_selected_all[count][i]+'</b>'; one++;}
else if(lotto_selected_all[count][i]<=30){page3_main.innerHTML+='<b style="background-color:red">'+lotto_selected_all[count][i]+'</b>'; two++;}
else if(lotto_selected_all[count][i]<=40){page3_main.innerHTML+='<b style="background-color:gray">'+lotto_selected_all[count][i]+'</b>'; three++;}
else{page3_main.innerHTML+='<b style="background-color:green">'+lotto_selected_all[count][i]+'</b>'; four++;}
};
jugocha=lotto_selected_all[count][5]-lotto_selected_all[count][0];
if(zero==0){junmul++;junmul2++;};if(one==0){junmul++;junmul2++;};if(two==0){junmul++;junmul2++;};if(three==0){junmul++;junmul2++;};if(four==0){junmul++;};

//number.innerHTML+="<button id='button' onclick='add("+count+"); style.opacity=0.4;'>저장</button>";
//number.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+") , 저고차("+jugocha+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+'</p>';
///if(holsu==2){number.innerHTML+='<b style="color:red">1등 확률이 높은 번호입니다.</b><br>';};
if(holsu==3){lotto_point+=8;};
if(holsu==2||holsu==4){lotto_point+=5;};
if(holsu==1||holsu==5){lotto_point+=2;};
//----------------------------------------
if(yunbun==1){lotto_point+=8;};
if(yunbun==0){lotto_point+=5;};
if(yunbun==2){lotto_point+=2;};
//----------------------------------------
if(sum>=120&sum<=160){lotto_point+=8;}
else if((sum>=90&sum<=119)||(sum>=161&sum<=180)){lotto_point+=5;}
else{lotto_point+=2;};
//------------------------------------------------------------
if((samsu+sosu)==3){lotto_point+=8;};
if((samsu+sosu)==5||(samsu+sosu)==4){lotto_point+=5;};
if((samsu+sosu)==2){lotto_point+=2;};
//--------------------------------------------------------
if(low==3){lotto_point+=8;};
if(low==2||low==4){lotto_point+=5;};
if(low==1||low==5){lotto_point+=2;};
//-----------------------------------------------------
if(zero<4&one<4&two<4&three<4&four<4&(junmul==1)){lotto_point+=13;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==2)){lotto_point+=7;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==1)){lotto_point+=10;};
//---------------------------------------------------------
if(jugocha>=30&jugocha<=40){lotto_point+=8;};
if((jugocha>=25&jugocha<=29)||(jugocha>=41&jugocha<=42)){lotto_point+=4;};
//---------------------------------------------------------
if(sumlastsu>=21&sumlastsu<=30){lotto_point+=8;};
if((sumlastsu>=16&sumlastsu<=20)||(sumlastsu>=31&sumlastsu<=35)){lotto_point+=4;};
//-----------------------------------------------------------------
if(last_lottosu==1){lotto_point+=13;};
if(last_lottosu==0){lotto_point+=8;};
if(last_lottosu==2){lotto_point+=3;};
//-------------------------------------------------------------------
if(game_5chulsu==3){lotto_point+=18;};
if(game_5chulsu==4){lotto_point+=10;};
if(game_5chulsu==2){lotto_point+=12;};
if(game_5chulsu==5){lotto_point+=6;};
//--------------------------------------------------------------
page3_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b>";

var game302bindo=0;
var game303bindo=0;
var game304bindo=0;
var game305bindo=0;
var game306bindo=0;
var game307bindo=0;
//----------
var game606bindo=0;
var game607bindo=0;
var game608bindo=0;
var game609bindo=0;
var game6010bindo=0;
var game6011bindo=0;
var game6012bindo=0;
var game6013bindo=0;
//-----------
var game9010bindo=0;
var game9011bindo=0;
var game9012bindo=0;
var game9013bindo=0;
var game9014bindo=0;
var game9015bindo=0;
var game9016bindo=0;
var game9017bindo=0;
var game9018bindo=0;
//-----
var gamehotsu=0;
var gamecoldsu=0;
var gamenormalsu=0;

for(k=0;k<number_array.length;k++){
	for(i=0;i<6;i++){
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30<=2){game302bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30==3){game303bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30==4){game304bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30==5){game305bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30==6){game306bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su30>=7){game307bindo++;}
	//-----------
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60<=6){game606bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==7){game607bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==8){game608bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==9){game609bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==10){game6010bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==11){game6011bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60==12){game6012bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su60>=13){game6013bindo++;}
	//----------
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90<=10){game9010bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==11){game9011bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==12){game9012bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==13){game9013bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==14){game9014bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==15){game9015bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==16){game9016bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90==17){game9017bindo++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].su90>=18){game9018bindo++;}	
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].bscore>226){gamehotsu++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&number_array[k].bscore<146){gamecoldsu++;}
	if((lotto_selected_all[count][i]==number_array[k].num)&&(number_array[k].bscore>=146&&number_array[k].bscore<=226)){gamenormalsu++;}
	};
};
var game5chul_2times=false;
var game5chul_1times=false;
for(i=0;i<game_5chul.length;i++){
if(game_5chul[i][1]>=2){game5chul_2times=true;}
if(game_5chul[i][1]==1){game5chul_1times=true;}
};

//if(lotto_point>=65&&lotto_point<=85){
if(lotto_point>=65&&lotto_point<=85&&(game_10mi!=="없음"||game_510mi!=="없음")&&game302bindo<=2&&game307bindo<=2&&game303bindo<=2&&game304bindo<=2&&game305bindo<=2&&game306bindo<=2&&gamehotsu>=1&&gamecoldsu>=1&&gamenormalsu>=2&&game606bindo<=2&&game607bindo<=2&&game608bindo<=2&&game609bindo<=2&&game6010bindo<=2&&game6011bindo<=2&&game6012bindo<=2&&game6013bindo<=2&&game9010bindo<=2&&game9011bindo<=2&&game9012bindo<=2&&game9013bindo<=2&&game9014bindo<=2&&game9015bindo<=2&&game9016bindo<=2&&game9017bindo<=2&&game9018bindo<=2){	

if(zero==0){junmul_array.zero++;};
if(one==0){junmul_array.one++;};
if(two==0){junmul_array.two++;};
if(three==0){junmul_array.three++;};
if(four==0){junmul_array.four++;};

if(zero==3){samgu_array.zero++;};
if(one==3){samgu_array.one++;};
if(two==3){samgu_array.two++;};
if(three==3){samgu_array.three++;};
if(four==3){samgu_array.four++;};

if(zero==2){yigu_array.zero++;};
if(one==2){yigu_array.one++;};
if(two==2){yigu_array.two++;};
if(three==2){yigu_array.three++;};
if(four==2){yigu_array.four++;};

if(zero==1){ilgu_array.zero++;};
if(one==1){ilgu_array.one++;};
if(two==1){ilgu_array.two++;};
if(three==1){ilgu_array.three++;};
if(four==1){ilgu_array.four++;};

if(last_lottosu==0){ewal_array.zero++;};
if(last_lottosu==1){ewal_array.one++;};
if(last_lottosu==2){ewal_array.two++;};

if(yunbun==0){yunbun_array.zero++;};
if(yunbun==1){yunbun_array.one++;};
if(yunbun==2){yunbun_array.two++;};

for(i=0; i<last_su.length; i++){
if(last_su[i]==0){last_su_array.a0++};
if(last_su[i]==1){last_su_array.a1++};
if(last_su[i]==2){last_su_array.a2++};
if(last_su[i]==3){last_su_array.a3++};
if(last_su[i]==4){last_su_array.a4++};
if(last_su[i]==5){last_su_array.a5++};
if(last_su[i]==6){last_su_array.a6++};
if(last_su[i]==7){last_su_array.a7++};
if(last_su[i]==8){last_su_array.a8++};
if(last_su[i]==9){last_su_array.a9++};
	};
	
for(i=0; i<goong.length; i++){
if(goong[i]==0){goong_array.a9++};
if(goong[i]==1){goong_array.a1++};
if(goong[i]==2){goong_array.a2++};
if(goong[i]==3){goong_array.a3++};
if(goong[i]==4){goong_array.a4++};
if(goong[i]==5){goong_array.a5++};
if(goong[i]==6){goong_array.a6++};
if(goong[i]==7){goong_array.a7++};
if(goong[i]==8){goong_array.a8++};

	};	
	
for(i=0; i<lotto_find.length; i++){
	for(j=0; j<6; j++){
if(lotto_find[i][0]==lotto_selected_all[count][j]){
	lotto_find[i][1]++;
	//lotto_find.push(i)
	};
	};		//alert(lotto_find);
};
//-------------------------------------------------
for(i=0; i<lotto_find3.length; i++){
	var temp1=false;
	var temp2=false;
		for(k=0; k<6; k++){
		if(lotto_find3[i][0]==lotto_selected_all[count][k]){temp1=true;};
	};
	for(j=0; j<6; j++){
		if(lotto_find3[i][1]==lotto_selected_all[count][j]){temp2=true;};
	};
	if(temp1&&temp2&&(lotto_find3[i][0]!==lotto_find3[i][1])){lotto_find3[i][2]++;}
};
//---------------------------
//-------------------------------------------------
/*for(i=0; i<lotto_find5.length; i++){
	var temp1=false;
	var temp2=false;
	var temp3=false;
		for(k=0; k<6; k++){
		if(lotto_find5[i][0]==lotto_selected_all[count][k]){temp1=true;};
	};
	for(j=0; j<6; j++){
		if(lotto_find5[i][1]==lotto_selected_all[count][j]){temp2=true;};
	};
	for(l=0; l<6; l++){
		if(lotto_find5[i][2]==lotto_selected_all[count][l]){temp3=true;};
	};
	if(temp1&&temp2&&temp3&&(lotto_find5[i][0]!==lotto_find5[i][1])&&(lotto_find5[i][0]!==lotto_find5[i][2])&&(lotto_find5[i][1]!==lotto_find5[i][2])&&(lotto_find5[i][0]<lotto_find5[i][1])&&(lotto_find5[i][1]<lotto_find5[i][2])){lotto_find5[i][3]++;}
};*/ 
//---------------------------
		filter_count++;	
};
//---------------------------------------
lotto_find.sort(function(a,b){return b[1]-a[1]});
lotto_find3.sort(function(a,b){return b[2]-a[2]});

//lotto_find5.sort(function(a,b){return b[3]-a[3]});

if(filter_goal_2==1){
page3_main.innerHTML+="<h3>필터링</h3>매번 새로운 조합을 생성하고 총 815만 조합 중 금주 1등 예상조합(약 80만 조합)에 포함되어 있는 우수조합만을 자동 선별하여 정보를 누적 추출하기 때문에 시간이 소요됩니다.(약 15~25초 소요) 필터링이 완료될때까지 잠시 기다려주세요!<br>";}
else{page3_main.innerHTML+="<h3>필터링+</h3>필터링+는 기존 필터링의 약 10배인 5000조합을 필터링하기 때문에 오랜 시간이 소요되지만(약 3~4분 소요) 기존 필터링에 비해 보다 높은 정확성을 제공합니다. 필터링이 완료될때까지 잠시 기다려주세요!<br>";}
//page3_main.innerHTML+=filter_count+"/"+filter_goal;

if(	filter_count==filter_goal){
		
page3_main.innerHTML+="<br><span style='color:red'>5주 이내 출현수(빨강)</span><br>";
page3_main.innerHTML+="<span style='color:green'>6~10주 미 출현수(녹색)</span><br>";
page3_main.innerHTML+="<span style='color:blue'>11주 이상 미 출현수(파랑)</span><br>";

page3_main.innerHTML+="<br>필터링 결과<br>";
page3_main.innerHTML+="<br>1.숫자 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 고정수로 활용.<br>";

   for(j=0; j<lotto_find.length; j++){
	   
	 if((j+1)%5==0){  
	   for(i=0; i<game5chul.length; i++){
		if(lotto_find[j][0]==game5chul[i][0]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:red; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)<br>";
			};};
	   for(i=0; i<game510mi.length; i++){
		if(lotto_find[j][0]==game510mi[i]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:green; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)<br>";
			};};
	   for(i=0; i<game10mi.length; i++){
		if(lotto_find[j][0]==game10mi[i]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:blue; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)<br>";
			};};
	 }else{
		    for(i=0; i<game5chul.length; i++){
		if(lotto_find[j][0]==game5chul[i][0]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:red; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)";
			};};
	   for(i=0; i<game510mi.length; i++){
		if(lotto_find[j][0]==game510mi[i]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:green; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)";
			};};
	   for(i=0; i<game10mi.length; i++){
		if(lotto_find[j][0]==game10mi[i]){
			//game5chul_find[i]=lotto_find2[j];
			page3_main.innerHTML+="<span style='color:blue; background-color:#CCC;'>"+lotto_find[j][0]+"</span>("+lotto_find[j][1]+"회)";
			};};
			};
			
			};		

page3_main.innerHTML+="<br><br>*주의:단순 빈도에 숫자간의 궁합은 반영되지 않습니다. 따라서 고정수와 제외수가 유력한 한 수를 찾기 위함이지 상위권에 속한다 해서 묶어 사용하거나 하위권에서 속한다 하여 제외하시면 최악의 조합을 구성하실 수도 있습니다. 숫자간 궁합은 메인화면의 기본추출분석기에서 고정수와 제외수 입력시 별도로 알려드리며 묶어서 사용하실때는 하단의 궁합 필터링 결과를 참조하세요.";

page3_main.innerHTML+="<br><br>2.궁합 필터링<br>";
page3_main.innerHTML+="<br>동반출현 상위 100(묶어서 활용)<br>";


/*	 var cnt=0;
	 var num_cnt=1;
 for(i=0; i<lotto_find3.length; i++){
	 if(lotto_find3[i][0]==num_cnt){cnt++; 
	 //if(lotto_find3[i][2]==0){lotto_find3[i][1]="";};
	 if(cnt==1){page3_main.innerHTML+=num_cnt+"번:"+lotto_find3[i][1]+"("+lotto_find3[i][2]+"회)";}
	else if(cnt!==0&&cnt<15){page3_main.innerHTML+=","+lotto_find3[i][1]+"("+lotto_find3[i][2]+"회)";}
	 else if(cnt==15){page3_main.innerHTML+=","+lotto_find3[i][1]+"("+lotto_find3[i][2]+"회)"+"<br>";};};
	 if(cnt>15){ cnt=0;num_cnt++; i=0; continue; };
	 if(num_cnt==46){break;}
	// if(cnt==1){page3_main.innerHTML+=num_cnt+"번:"+lotto_find3[i][1];}
	// else if(cnt!==0&&cnt<15){page3_main.innerHTML+=","+lotto_find3[i][1];}
	// else if(cnt==15){page3_main.innerHTML+=","+lotto_find3[i][1]+"<br>";};
	 };*/

//------

//lotto_find3.sort(function(a,b){return b[2]-a[2]}); 
var cnt2=0;	
for(i=0; i<lotto_find3.length; i++){
if(lotto_find3[i][0]<lotto_find3[i][1]){
cnt2++;			
if(cnt2%4==0){			 			
page3_main.innerHTML+=lotto_find3[i][0]+","+lotto_find3[i][1]+"("+lotto_find3[i][2]+"회)<br>";}
else{page3_main.innerHTML+=lotto_find3[i][0]+","+lotto_find3[i][1]+"("+lotto_find3[i][2]+"회)";};
};
if(cnt2==100){break;};
};
//--------
 
/*page3_main.innerHTML+="<br>3궁합.<br>";
 for(i=0; i<100; i++){
if((i+1)%4==0){	 			
page3_main.innerHTML+=lotto_find5[i][0]+","+lotto_find5[i][1]+","+lotto_find5[i][2]+"("+lotto_find5[i][3]+"회)<br>";}
else{page3_main.innerHTML+=lotto_find5[i][0]+","+lotto_find5[i][1]+","+lotto_find5[i][2]+"("+lotto_find5[i][3]+"회)";};
 };*/
//--------
};
};

if(	filter_count==filter_goal){
page3_main.innerHTML+="<br>3.전멸구간 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 전멸구간으로 활용.<br>";
page3_main.innerHTML+="단번대:"+junmul_array.zero+"회<br>";
page3_main.innerHTML+="10번대:"+junmul_array.one+"회<br>";
page3_main.innerHTML+="20번대:"+junmul_array.two+"회<br>";
page3_main.innerHTML+="30번대:"+junmul_array.three+"회<br>";
page3_main.innerHTML+="40번대:"+junmul_array.four+"회<br>";

page3_main.innerHTML+="<br>3.구간 3수 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 3구간으로 활용.<br>";
page3_main.innerHTML+="단번대:"+samgu_array.zero+"회<br>";
page3_main.innerHTML+="10번대:"+samgu_array.one+"회<br>";
page3_main.innerHTML+="20번대:"+samgu_array.two+"회<br>";
page3_main.innerHTML+="30번대:"+samgu_array.three+"회<br>";
page3_main.innerHTML+="40번대:"+samgu_array.four+"회<br>";

page3_main.innerHTML+="<br>3.구간 2수 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 2구간으로 활용.<br>";
page3_main.innerHTML+="단번대:"+yigu_array.zero+"회<br>";
page3_main.innerHTML+="10번대:"+yigu_array.one+"회<br>";
page3_main.innerHTML+="20번대:"+yigu_array.two+"회<br>";
page3_main.innerHTML+="30번대:"+yigu_array.three+"회<br>";
page3_main.innerHTML+="40번대:"+yigu_array.four+"회<br>";

page3_main.innerHTML+="<br>3.구간 1수 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 1구간으로 활용.<br>";
page3_main.innerHTML+="단번대:"+ilgu_array.zero+"회<br>";
page3_main.innerHTML+="10번대:"+ilgu_array.one+"회<br>";
page3_main.innerHTML+="20번대:"+ilgu_array.two+"회<br>";
page3_main.innerHTML+="30번대:"+ilgu_array.three+"회<br>";
page3_main.innerHTML+="40번대:"+ilgu_array.four+"회<br>";

page3_main.innerHTML+="<br>4.이월수 출현 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 이월수 비중으로 활용.<br>";
page3_main.innerHTML+="이월수 0개:"+ewal_array.zero+"회<br>";
page3_main.innerHTML+="이월수 1개:"+ewal_array.one+"회<br>";
page3_main.innerHTML+="이월수 2개:"+ewal_array.two+"회<br>";

page3_main.innerHTML+="<br>5.연속번호 출현 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 연속번호 비중으로 활용 .<br>";
page3_main.innerHTML+="연속번호 0개:"+yunbun_array.zero+"회<br>";
page3_main.innerHTML+="연속번호 1개:"+yunbun_array.one+"회<br>";
page3_main.innerHTML+="연속번호 2개:"+yunbun_array.two+"회<br>";

page3_main.innerHTML+="<br>6.끝수 필터링<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 끝수로 활용.<br>";
page3_main.innerHTML+="0끝:"+last_su_array.a0+"회<br>";
page3_main.innerHTML+="1끝:"+last_su_array.a1+"회<br>";
page3_main.innerHTML+="2끝:"+last_su_array.a2+"회<br>";
page3_main.innerHTML+="3끝:"+last_su_array.a3+"회<br>";
page3_main.innerHTML+="4끝:"+last_su_array.a4+"회<br>";
page3_main.innerHTML+="5끝:"+last_su_array.a5+"회<br>";
page3_main.innerHTML+="6끝:"+last_su_array.a6+"회<br>";
page3_main.innerHTML+="7끝:"+last_su_array.a7+"회<br>";
page3_main.innerHTML+="8끝:"+last_su_array.a8+"회<br>";
page3_main.innerHTML+="9끝:"+last_su_array.a9+"회<br>";

page3_main.innerHTML+="<br>7.9궁도 필터링<br>";
page3_main.innerHTML+="<br>1궁:1,10,19,28,37<br>2궁:2,11,20,29,38<br>3궁:3,12,21,30,39<br>4궁:4,13,22,31,40<br>5궁:5,14,23,32,41<br>6궁:6,15,24,33,42<br>7궁:7,16,25,34,43<br>8궁:8,17,26,35,44<br>9궁:9,18,27,36,45<br>";
page3_main.innerHTML+="<br>빈도가 높을수록 활용.<br>";
page3_main.innerHTML+="1궁:"+goong_array.a1+"회<br>";
page3_main.innerHTML+="2궁:"+goong_array.a2+"회<br>";
page3_main.innerHTML+="3궁:"+goong_array.a3+"회<br>";
page3_main.innerHTML+="4궁:"+goong_array.a4+"회<br>";
page3_main.innerHTML+="5궁:"+goong_array.a5+"회<br>";
page3_main.innerHTML+="6궁:"+goong_array.a6+"회<br>";
page3_main.innerHTML+="7궁:"+goong_array.a7+"회<br>";
page3_main.innerHTML+="8궁:"+goong_array.a8+"회<br>";
page3_main.innerHTML+="9궁:"+goong_array.a9+"회<br>";
};
//ewal_array={zero:0,one:0,two:0};
//yunbun_array={zero:0,one:0,two:0};
//lastsu_array={a0:0,a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0};
};


//----------------------------
var auto_count=0;
var lotto_selected_all2=[];
var lotto_info2=[];	 

function every_reset(){
	basic_count=5;
	filter_count=500;
	auto_count=5;
	auto_count_2=5;
setTimeout(function(){	
var info=document.getElementById("aa");
page_info(info);
var info=document.getElementById("page4_info");
page_info(info);
//page4_info.innerHTML="<h2>추출분석기+</h2>";
//if(goal_2==1){page5_info.innerHTML="<h2>1등 추천조합</h2>";}
//else if(goal_2==2){page5_info.innerHTML="<h2>1등 추천조합+</h2>";}
//else{page5_info.innerHTML="<h2>5등 추천조합</h2>";}
var info=document.getElementById("page5_info");
page_info(info);
	},5);

	};
function auto_controll(){
	
 if(goal_2==1||goal_2==2){
	var lotto_this=window.localStorage.getItem("lotto_this");
	var saved_lotto_game=window.localStorage.getItem("saved_lotto_game");
	if(lotto_this==null){lotto_this=0;};
	//if(saved_lotto_game==null){
		//saved_lotto_game=last_lotto_game;
		//window.localStorage.setItem("saved_lotto_game",saved_lotto_game); };
	if(saved_lotto_game==last_lotto_game){
		lotto_this++;}
		else{	saved_lotto_game=last_lotto_game;
		window.localStorage.setItem("saved_lotto_game",saved_lotto_game); 
		lotto_this=0;};	
	window.localStorage.setItem("lotto_this",lotto_this);
	//window.localStorage.setItem("saved_lotto_game",saved_lotto_game);
	//alert(lotto_this+"/"+saved_lotto_game+"/"+last_lotto_game);	
	//window.localStorage.clear();
	
	if(lotto_this<10000){
	auto_reset();
	auto_restart();
	
	var massage="금주 무료 추천 횟수가 "+(9-lotto_this)+" 회 남았습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);	
//alert((9-lotto_this));
	}
	else{
	var massage="금주 무료 추천 횟수를 모두 사용하였습니다. 다음주에 다시 사용하실 수 있습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
//alert("asdasd");	
	};
 }else{	auto_reset();
	auto_restart();}
	};
	
function alertcallback(){};	
	
function auto_reset(){
myScroll7.scrollTo(0,0);	
	if(goal_2==1){goal_1=1}
	else if(goal_2==2){goal_1=2}
    else if(goal_2==3){goal_1=3};	
page5_main.innerHTML="";
count=0;
auto_count=0; 
lotto_selected_all2=[];
lotto_info2=[];
	};

function auto_restart(){
//if(button_count%3==0){ if(AdMob) AdMob.showInterstitial();};
//page5_main.innerHTML="";
auto_choice();
if(auto_count<5){
setTimeout(function(){auto_restart();},1);
}else{auto_count=0; 
//restart(); lotto_choice();
};


	
	};
var goal_1=1;	
var goal_2=1;	
//------------------------
function auto_choice(){	
page5_info.innerHTML="";
if(goal_1==1){page5_info.innerHTML+=(last_lotto_game+1)+"회 1등 추천 조합<br>";}
else if(goal_1==2){page5_info.innerHTML+=(last_lotto_game+1)+"회 1등 추천 조합+<br>";}
else{page5_info.innerHTML+=(last_lotto_game+1)+"회 5등 추천 조합<br>";}

var hol=$("#holsu option:selected").val();
var want_sum=$("#sum option:selected").val();
var want_ewal=$("#ewal option:selected").val();
var want_yunbun=$("#yunbun option:selected").val();
var want_junmul=$("#junmul option:selected").val();
var want_lastsu1=$("#lastsu1 option:selected").val();
var want_lastsu2=$("#lastsu2 option:selected").val();
var want_lastsu3=$("#lastsu3 option:selected").val();
var want_lastsu4=$("#lastsu4 option:selected").val();
var want_lastsu5=$("#lastsu5 option:selected").val();
var want_lastsu6=$("#lastsu6 option:selected").val();
var want_add=$("#flipswitch1 option:selected").val();
var want_del=$("#flipswitch2 option:selected").val();
var jak=6-hol;
sum=0;
high=0;
low=0;
jugocha=0;
last_su=[];
sumlastsu=0;
yunbun=0;
sosu=0;
samsu=0;
habsu=6;
zero=0;
one=0;
two=0;
three=0;
four=0;
junmul=0;
junmul2=0;
game_5chul=[];
game_5chulsu=0;
game_10mi=[];
game_10misu=0;
game_510mi=[];
game_510misu=0;
last_lotto=[];
last_lottosu=0;
lotto_point=0;
holsu=0;
jaksu=0;
lotto_number=[];
addsu2=[];
if(want_add=="on"&&goal_1!==1){
for(i=0; i<addsu.length; i++){
	addsu2.push(addsu[i]);
	};};
for(i=0; i<45; i++){
	lotto_number.push(i+1);
	};
if(want_del=="on"&&goal_1!==1){		
for(i=0; i<lotto_number.length; i++){
	for(j=0; j<delsu.length; j++){
	  if(lotto_number[i]==delsu[j]){lotto_number.splice(i,1);}};
		};};	

hol="random";
want_sum="random";	
//alert(lotto_number);			
var lotto_selected=[];	

for(i=0; i<10000000; i++){
	
var ran;
var on_addsu2=false;

if(addsu2[0]==null){
	on_addsu2=false;	
ran=Math.floor(Math.random()*lotto_number.length);
var lotto_ran=lotto_number[ran];
}
else{
	on_addsu2=true;
	hol="random";want_sum="random";
	ran=Math.floor(Math.random()*addsu2.length);
	var lotto_ran=addsu2[ran];
	}

if(hol=="random"){
if(lotto_ran%2==1){holsu++;}else{jaksu++;};	
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};	
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
if(on_addsu2){
for(i=0; i<lotto_number.length; i++){
		if(lotto_number[i]==addsu2[ran]){lotto_number.splice(i,1);};
		};		
addsu2.splice(ran, 1);	
	
	}else{lotto_number.splice(ran, 1);};
lotto_selected.sort(function(a,b){return a-b});
}else{
if(lotto_ran%2==1&holsu<hol){
	holsu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
}
else if(lotto_ran%2==0&jaksu<jak){
	jaksu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
};
};
if(lotto_selected.length==6){break;}
//document.write(lotto_selected.sort(function(a,b){return a-b})+"<br>");
};
if(want_sum<=sum&parseInt(want_sum)+5>=sum||want_sum=="random"){
for(i=0; i<lotto_selected.length; i++){
	sumlastsu+=lotto_selected[i]%10;
	last_su.push(lotto_selected[i]%10);	
	last_su.sort(function(a,b){return a-b});
	};

lotto_selected_all2.push(lotto_selected);
//alert(lotto_selected_all);
//document.write(lotto_selected_all[count]+"/"+sum+"<br>");

for(i=1; i<6; i++){
if((lotto_selected_all2[count][i]-lotto_selected_all2[count][i-1])==1){yunbun++};
};
for(i=0; i<6; i++){
for(j=0; j<game10mi.length; j++){
	if(lotto_selected_all2[count][i]==game10mi[j]){game_10misu++; game_10mi.push(lotto_selected_all2[count][i])};
	};
for(j=0; j<game510mi.length; j++){
	if(lotto_selected_all2[count][i]==game510mi[j]){game_510misu++;game_510mi.push(lotto_selected_all2[count][i])};
	};
for(j=0; j<game5chul.length; j++){
	if(lotto_selected_all2[count][i]==game5chul[j][0]){game_5chulsu++;game_5chul.push(game5chul[j])};
	};
for(j=0; j<lastlotto.length; j++){
	if(lotto_selected_all2[count][i]==lastlotto[j]){last_lottosu++;last_lotto.push(lotto_selected_all2[count][i])};
	};					
};

var asd="";

if(game_10mi==""){game_10mi="없음"};if(game_510mi==""){game_510mi="없음"};
if(game_5chul==""){asd="없음"};if(last_lotto==""){last_lotto="없음"};

for(i=0;i<game_5chul.length;i++){
if(i<game_5chul.length-1){asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회), ";}
else{asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회)";};
};

for(i=0; i<6; i++){
if(lotto_selected_all2[count][i]<10){page5_info.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lotto_selected_all2[count][i]+'&nbsp;</b>'; zero++;}
else if(lotto_selected_all2[count][i]==10){page5_info.innerHTML+='<b class="small" style="background-color:orange">'+lotto_selected_all2[count][i]+'</b>'; zero++;}
else if(lotto_selected_all2[count][i]<=20){page5_info.innerHTML+='<b class="small" style="background-color:blue">'+lotto_selected_all2[count][i]+'</b>'; one++;}
else if(lotto_selected_all2[count][i]<=30){page5_info.innerHTML+='<b class="small" style="background-color:red">'+lotto_selected_all2[count][i]+'</b>'; two++;}
else if(lotto_selected_all2[count][i]<=40){page5_info.innerHTML+='<b class="small" style="background-color:gray">'+lotto_selected_all2[count][i]+'</b>'; three++;}
else{page5_info.innerHTML+='<b class="small" style="background-color:green">'+lotto_selected_all2[count][i]+'</b>'; four++;}
};
jugocha=lotto_selected_all2[count][5]-lotto_selected_all2[count][0];
if(zero==0){junmul++;junmul2++;};if(one==0){junmul++;junmul2++;};if(two==0){junmul++;junmul2++;};if(three==0){junmul++;junmul2++;};if(four==0){junmul++;};

//number.innerHTML+="<button id='button' onclick='add("+count+"); style.opacity=0.4;'>저장</button>";
//number.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+") , 저고차("+jugocha+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+'</p>';
///if(holsu==2){number.innerHTML+='<b style="color:red">1등 확률이 높은 번호입니다.</b><br>';};
if(holsu==3){lotto_point+=8;};
if(holsu==2||holsu==4){lotto_point+=5;};
if(holsu==1||holsu==5){lotto_point+=2;};
//----------------------------------------
if(yunbun==1){lotto_point+=8;};
if(yunbun==0){lotto_point+=5;};
if(yunbun==2){lotto_point+=2;};
//----------------------------------------
if(sum>=120&sum<=160){lotto_point+=8;}
else if((sum>=90&sum<=119)||(sum>=161&sum<=180)){lotto_point+=5;}
else{lotto_point+=2;};
//------------------------------------------------------------
if((samsu+sosu)==3){lotto_point+=8;};
if((samsu+sosu)==5||(samsu+sosu)==4){lotto_point+=5;};
if((samsu+sosu)==2){lotto_point+=2;};
//--------------------------------------------------------
if(low==3){lotto_point+=8;};
if(low==2||low==4){lotto_point+=5;};
if(low==1||low==5){lotto_point+=2;};
//-----------------------------------------------------
if(zero<4&one<4&two<4&three<4&four<4&(junmul==1)){lotto_point+=13;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==2)){lotto_point+=7;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==1)){lotto_point+=10;};
//---------------------------------------------------------
if(jugocha>=30&jugocha<=40){lotto_point+=8;};
if((jugocha>=25&jugocha<=29)||(jugocha>=41&jugocha<=42)){lotto_point+=4;};
//---------------------------------------------------------
if(sumlastsu>=21&sumlastsu<=30){lotto_point+=8;};
if((sumlastsu>=16&sumlastsu<=20)||(sumlastsu>=31&sumlastsu<=35)){lotto_point+=4;};
//-----------------------------------------------------------------
if(last_lottosu==1){lotto_point+=13;};
if(last_lottosu==0){lotto_point+=8;};
if(last_lottosu==2){lotto_point+=3;};
//-------------------------------------------------------------------
if(game_5chulsu==3){lotto_point+=18;};
if(game_5chulsu==4){lotto_point+=10;};
if(game_5chulsu==2){lotto_point+=12;};
if(game_5chulsu==5){lotto_point+=6;};
//--------------------------------------------------------------
//page5_info.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><br>";
 //alert(number_array.length);
var game302bindo=0;
var game303bindo=0;
var game304bindo=0;
var game305bindo=0;
var game306bindo=0;
var game307bindo=0;
//----------
var game606bindo=0;
var game607bindo=0;
var game608bindo=0;
var game609bindo=0;
var game6010bindo=0;
var game6011bindo=0;
var game6012bindo=0;
var game6013bindo=0;
//-----------
var game9010bindo=0;
var game9011bindo=0;
var game9012bindo=0;
var game9013bindo=0;
var game9014bindo=0;
var game9015bindo=0;
var game9016bindo=0;
var game9017bindo=0;
var game9018bindo=0;
//-----
var gamehotsu=0;
var gamecoldsu=0;
var gamenormalsu=0;

for(k=0;k<number_array.length;k++){
	for(i=0;i<6;i++){
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30<=2){game302bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30==3){game303bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30==4){game304bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30==5){game305bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30==6){game306bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su30>=7){game307bindo++;}
	//-----------
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60<=6){game606bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==7){game607bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==8){game608bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==9){game609bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==10){game6010bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==11){game6011bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60==12){game6012bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su60>=13){game6013bindo++;}
	//----------
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90<=10){game9010bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==11){game9011bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==12){game9012bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==13){game9013bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==14){game9014bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==15){game9015bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==16){game9016bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90==17){game9017bindo++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].su90>=18){game9018bindo++;}	
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].bscore>226){gamehotsu++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&number_array[k].bscore<146){gamecoldsu++;}
	if((lotto_selected_all2[count][i]==number_array[k].num)&&(number_array[k].bscore>=146&&number_array[k].bscore<=226)){gamenormalsu++;}
	};
};
var game5chul_2times=false;
var game5chul_1times=false;
for(i=0;i<game_5chul.length;i++){
if(game_5chul[i][1]>=2){game5chul_2times=true;}
if(game_5chul[i][1]==1){game5chul_1times=true;}
};

var want_ewalstatus=false;
if(want_ewal=="random"){want_ewalstatus=true;}else{if(last_lottosu==want_ewal){want_ewalstatus=true;};};
var want_yunbunstatus=false;
if(want_yunbun=="random"){want_yunbunstatus=true;}else{if(yunbun==want_yunbun){want_yunbunstatus=true;};};
var want_junmulstatus=false;
if(want_junmul=="random"){want_junmulstatus=true;}else{if(want_junmul==0){if(zero==0){want_junmulstatus=true;}};if(want_junmul==1){if(one==0){want_junmulstatus=true;}};if(want_junmul==2){if(two==0){want_junmulstatus=true;}};if(want_junmul==3){if(three==0){want_junmulstatus=true;}};if(want_junmul==4){if(four==0){want_junmulstatus=true;}};if(want_junmul==5){if(zero==0&four==0){want_junmulstatus=true;}};if(want_junmul==6){if(one==0&four==0){want_junmulstatus=true;}};if(want_junmul==7){if(two==0&four==0){want_junmulstatus=true;}};if(want_junmul==8){if(three==0&four==0){want_junmulstatus=true;}};};
var want_lastsu1status=false;
var want_lastsu2status=false;
var want_lastsu3status=false;
var want_lastsu4status=false;
var want_lastsu5status=false;
var want_lastsu6status=false;
if(want_lastsu1=="random"){want_lastsu1status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu1==last_su[i]){want_lastsu1status=true;}};};
if(want_lastsu2=="random"){want_lastsu2status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu2==last_su[i]){want_lastsu2status=true;}};};
if(want_lastsu3=="random"){want_lastsu3status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu3==last_su[i]){want_lastsu3status=true;}};};
if(want_lastsu4=="random"){want_lastsu4status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu4==last_su[i]){want_lastsu4status=true;}};};
if(want_lastsu5=="random"){want_lastsu5status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu5==last_su[i]){want_lastsu5status=true;}};};
if(want_lastsu6=="random"){want_lastsu6status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu6==last_su[i]){want_lastsu6status=true;}};};

var basic_hol=false;
if(checkbox0.checked==false){basic_hol=true}else{if(holsu>=2&&holsu<=4){basic_hol=true;};};
var basic_sum=false;
if(checkbox1.checked==false){basic_sum=true}else{if(sum>=90&&sum<=180){basic_sum=true;};};
var basic_low=false;
if(checkbox2.checked==false){basic_low=true}else{if(low>=2&&low<=4){basic_low=true;};};
var basic_jugocha=false;
if(checkbox3.checked==false){basic_jugocha=true}else{if(jugocha>=25&&jugocha<=40){basic_jugocha=true;};};
var basic_last_lottosu=false;
if(checkbox4.checked==false){basic_last_lottosu=true}else{if(last_lottosu>=1){basic_last_lottosu=true;};};
var basic_yunbun=false;
if(checkbox5.checked==false){basic_yunbun=true}else{if(yunbun>=1){basic_yunbun=true;};};
var basic_color=false;
if(checkbox6.checked==false){basic_color=true}else{if(zero<4&one<4&two<4&three<4&four<4){basic_color=true;};};
var basic_junmul=false;
if(checkbox7.checked==false){basic_junmul=true}else{if(junmul>=1){basic_junmul=true;};};
var basic_game_5chulsu=false;
if(checkbox8.checked==false){basic_game_5chulsu=true}else{if(game_5chulsu>=3&&game_5chulsu<=4){basic_game_5chulsu=true;};};
var basic_game_10misu=false;
if(checkbox9.checked==false){basic_game_10misu=true}else{if(game_10mi!=="없음"){basic_game_10misu=true;};};

var want_basic=$("#flipswitch3 option:selected").val();
var basic_all=false;
if(want_basic=="off"){basic_all=true;}else{if(basic_hol&&basic_sum&&basic_low&&basic_jugocha&&basic_last_lottosu&&basic_yunbun&&basic_color&&basic_junmul&&basic_game_5chulsu&&basic_game_10misu){basic_all=true;};};

if(goal_1==1&&count>30){
if(lotto_point>=65&&lotto_point<=85&&(game_10mi!=="없음"||game_510mi!=="없음")&&game302bindo<=2&&game307bindo<=2&&game303bindo<=2&&game304bindo<=2&&game305bindo<=2&&game306bindo<=2&&gamehotsu>=1&&gamecoldsu>=1&&gamenormalsu>=2&&game606bindo<=2&&game607bindo<=2&&game608bindo<=2&&game609bindo<=2&&game6010bindo<=2&&game6011bindo<=2&&game6012bindo<=2&&game6013bindo<=2&&game9010bindo<=2&&game9011bindo<=2&&game9012bindo<=2&&game9013bindo<=2&&game9014bindo<=2&&game9015bindo<=2&&game9016bindo<=2&&game9017bindo<=2&&game9018bindo<=2){	
auto_count++;
for(i=0; i<6; i++){
if(lotto_selected_all2[count][i]<10){page5_main.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all2[count][i]+'&nbsp;</b>';}
else if(lotto_selected_all2[count][i]==10){page5_main.innerHTML+='<b style="background-color:orange">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=20){page5_main.innerHTML+='<b style="background-color:blue">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=30){page5_main.innerHTML+='<b style="background-color:red">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=40){page5_main.innerHTML+='<b style="background-color:gray">'+lotto_selected_all2[count][i]+'</b>';}
else{page5_main.innerHTML+='<b style="background-color:green">'+lotto_selected_all2[count][i]+'</b>';}
};
page5_main.innerHTML+="<button id='button' onclick='add2("+count+"); style.opacity=0.4;'>저장</button>";
page5_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';
};}
else if(goal_1==2&&count>30){
if(lotto_point>=65&&lotto_point<=85&&(game_10mi!=="없음"||game_510mi!=="없음")&&want_ewalstatus&&want_junmulstatus&&want_lastsu1status&&want_lastsu2status&&want_lastsu3status&&want_lastsu4status&&want_lastsu5status&&want_lastsu6status&&want_yunbunstatus&&game302bindo<=2&&game307bindo<=2&&game303bindo<=2&&game304bindo<=2&&game305bindo<=2&&game306bindo<=2&&gamehotsu>=1&&gamecoldsu>=1&&gamenormalsu>=2&&game606bindo<=2&&game607bindo<=2&&game608bindo<=2&&game609bindo<=2&&game6010bindo<=2&&game6011bindo<=2&&game6012bindo<=2&&game6013bindo<=2&&game9010bindo<=2&&game9011bindo<=2&&game9012bindo<=2&&game9013bindo<=2&&game9014bindo<=2&&game9015bindo<=2&&game9016bindo<=2&&game9017bindo<=2&&game9018bindo<=2&&basic_all){	
auto_count++;
//count++;	
for(i=0; i<6; i++){
if(lotto_selected_all2[count][i]<10){page5_main.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all2[count][i]+'&nbsp;</b>';}
else if(lotto_selected_all2[count][i]==10){page5_main.innerHTML+='<b style="background-color:orange">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=20){page5_main.innerHTML+='<b style="background-color:blue">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=30){page5_main.innerHTML+='<b style="background-color:red">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=40){page5_main.innerHTML+='<b style="background-color:gray">'+lotto_selected_all2[count][i]+'</b>';}
else{page5_main.innerHTML+='<b style="background-color:green">'+lotto_selected_all2[count][i]+'</b>';}
};
page5_main.innerHTML+="<button id='button' onclick='add2("+count+"); style.opacity=0.4;'>저장</button>";
page5_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';
};}
else if(goal_1==3&&count>30){
if(lotto_point<=90&&game5chul_2times&&game5chul_1times&&(zero>=3||one>=3||two>=3||three>=3||four>=3)&&jugocha<27&&junmul>=2&&(game_10mi!=="없음"||game_510mi!=="없음")&&want_ewalstatus&&want_junmulstatus&&want_lastsu1status&&want_lastsu2status&&want_lastsu3status&&want_lastsu4status&&want_lastsu5status&&want_lastsu6status&&want_yunbunstatus&&basic_all){
auto_count++;	
for(i=0; i<6; i++){
if(lotto_selected_all2[count][i]<10){page5_main.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all2[count][i]+'&nbsp;</b>';}
else if(lotto_selected_all2[count][i]==10){page5_main.innerHTML+='<b style="background-color:orange">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=20){page5_main.innerHTML+='<b style="background-color:blue">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=30){page5_main.innerHTML+='<b style="background-color:red">'+lotto_selected_all2[count][i]+'</b>';}
else if(lotto_selected_all2[count][i]<=40){page5_main.innerHTML+='<b style="background-color:gray">'+lotto_selected_all2[count][i]+'</b>';}
else{page5_main.innerHTML+='<b style="background-color:green">'+lotto_selected_all2[count][i]+'</b>';}
};
page5_main.innerHTML+="<button id='button' onclick='add2("+count+"); style.opacity=0.4;'>저장</button>";
page5_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';
};};


};

lotto_info2.push(new info(sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su));

count++;
page5_info.innerHTML+="<br>사용된 조합:"+(count)+"조합(100%)<br>"+"걸러진 조합:"+(count-auto_count)+"조합("+((count-auto_count)/(count)*100).toFixed(2)+"%)<br>선별된 조합:"+(auto_count)+"조합("+((auto_count)/(count)*100).toFixed(2)+"%)";

};
//------------------------	

var auto_count_2=0;
var lotto_selected_all3=[];
var lotto_info3=[];
 

function auto_controll_2(){
		var lotto_this1=window.localStorage.getItem("lotto_this1");
	var saved_lotto_game1=window.localStorage.getItem("saved_lotto_game1");
	if(lotto_this1==null){lotto_this1=0;};
	//if(saved_lotto_game==null){
		//saved_lotto_game=last_lotto_game;
		//window.localStorage.setItem("saved_lotto_game",saved_lotto_game); };
	if(saved_lotto_game1==last_lotto_game){
		lotto_this1++;}
		else{	saved_lotto_game1=last_lotto_game;
		window.localStorage.setItem("saved_lotto_game1",saved_lotto_game1); 
		lotto_this1=0;};	
	window.localStorage.setItem("lotto_this1",lotto_this1);
	//window.localStorage.setItem("saved_lotto_game",saved_lotto_game);
	//alert(lotto_this+"/"+saved_lotto_game+"/"+last_lotto_game);	
	//window.localStorage.clear();
	
	if(lotto_this1<10000){
	auto_reset_2();
	auto_restart_2();
	
	var massage="금주 무료 추출 횟수가 "+(29-lotto_this1)+" 회 남았습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);	
//alert((9-lotto_this));
	}
	else{
	var massage="금주 무료 추출 횟수를 모두 사용하였습니다. 다음주에 다시 사용하실 수 있습니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
//alert("asdasd");	
	};
	};
	
function auto_reset_2(){
myScroll11.scrollTo(0,0);	
page4_main.innerHTML="";
count=0;
auto_count_2=0; 
lotto_selected_all3=[];
lotto_info3=[];
	};

function auto_restart_2(){
auto_choice_2();
if(auto_count_2<5){
setTimeout(function(){auto_restart_2();},1);
}else{auto_count_2=0; 
//restart(); lotto_choice();
};


	
	};
//------------------------

function auto_choice_2(){	
page4_info.innerHTML="";
page4_info.innerHTML+="추출분석기+<br>";
var hol=$("#holsu option:selected").val();
var want_sum=$("#sum option:selected").val();
var want_ewal=$("#ewal_2 option:selected").val();
var want_yunbun=$("#yunbun_2 option:selected").val();
var want_junmul=$("#junmul_2 option:selected").val();
var want_lastsu1=$("#lastsu1_2 option:selected").val();
var want_lastsu2=$("#lastsu2_2 option:selected").val();
var want_lastsu3=$("#lastsu3_2 option:selected").val();
var want_add=$("#flipswitch1_2 option:selected").val();
var want_del=$("#flipswitch2_2 option:selected").val();
var jak=6-hol;
sum=0;
high=0;
low=0;
jugocha=0;
last_su=[];
sumlastsu=0;
yunbun=0;
sosu=0;
samsu=0;
habsu=6;
zero=0;
one=0;
two=0;
three=0;
four=0;
junmul=0;
junmul2=0;
game_5chul=[];
game_5chulsu=0;
game_10mi=[];
game_10misu=0;
game_510mi=[];
game_510misu=0;
last_lotto=[];
last_lottosu=0;
lotto_point=0;
holsu=0;
jaksu=0;
lotto_number=[];
addsu2=[];
if(want_add=="on"){
for(i=0; i<addsu.length; i++){
	addsu2.push(addsu[i]);
	};};
for(i=0; i<45; i++){
	lotto_number.push(i+1);
	};
if(want_del=="on"){		
for(i=0; i<lotto_number.length; i++){
	for(j=0; j<delsu.length; j++){
	  if(lotto_number[i]==delsu[j]){lotto_number.splice(i,1);}};
		};};	

hol="random";
want_sum="random";	
//alert(lotto_number);			
var lotto_selected=[];	

for(i=0; i<10000000; i++){
	
var ran;
var on_addsu2=false;

if(addsu2[0]==null){
	on_addsu2=false;	
ran=Math.floor(Math.random()*lotto_number.length);
var lotto_ran=lotto_number[ran];
}
else{
	on_addsu2=true;
	hol="random";want_sum="random";
	ran=Math.floor(Math.random()*addsu2.length);
	var lotto_ran=addsu2[ran];
	}

if(hol=="random"){
if(lotto_ran%2==1){holsu++;}else{jaksu++;};	
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};	
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
if(on_addsu2){
for(i=0; i<lotto_number.length; i++){
		if(lotto_number[i]==addsu2[ran]){lotto_number.splice(i,1);};
		};		
addsu2.splice(ran, 1);	
	
	}else{lotto_number.splice(ran, 1);};
lotto_selected.sort(function(a,b){return a-b});
}else{
if(lotto_ran%2==1&holsu<hol){
	holsu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
}
else if(lotto_ran%2==0&jaksu<jak){
	jaksu++;
if(lotto_ran<=22){low++;}else{high++;};	
for(i=0; i<sosu_number.length; i++){if(lotto_ran==sosu_number[i]){sosu++;habsu--;};};
if(lotto_ran%3==0&lotto_ran!==3){samsu++;habsu--;};		
sum=sum+lotto_ran;	
lotto_selected.push(lotto_ran);
addsu2.splice(ran, 1);
lotto_number.splice(ran, 1);
lotto_selected.sort(function(a,b){return a-b});
};
};
if(lotto_selected.length==6){break;}
//document.write(lotto_selected.sort(function(a,b){return a-b})+"<br>");
};
if(want_sum<=sum&parseInt(want_sum)+5>=sum||want_sum=="random"){
for(i=0; i<lotto_selected.length; i++){
	sumlastsu+=lotto_selected[i]%10;
	last_su.push(lotto_selected[i]%10);	
	last_su.sort(function(a,b){return a-b});
	};

lotto_selected_all3.push(lotto_selected);
//alert(lotto_selected_all);
//document.write(lotto_selected_all[count]+"/"+sum+"<br>");

for(i=1; i<6; i++){
if((lotto_selected_all3[count][i]-lotto_selected_all3[count][i-1])==1){yunbun++};
};
for(i=0; i<6; i++){
for(j=0; j<game10mi.length; j++){
	if(lotto_selected_all3[count][i]==game10mi[j]){game_10misu++; game_10mi.push(lotto_selected_all3[count][i])};
	};
for(j=0; j<game510mi.length; j++){
	if(lotto_selected_all3[count][i]==game510mi[j]){game_510misu++;game_510mi.push(lotto_selected_all3[count][i])};
	};
for(j=0; j<game5chul.length; j++){
	if(lotto_selected_all3[count][i]==game5chul[j][0]){game_5chulsu++;game_5chul.push(game5chul[j])};
	};
for(j=0; j<lastlotto.length; j++){
	if(lotto_selected_all3[count][i]==lastlotto[j]){last_lottosu++;last_lotto.push(lotto_selected_all3[count][i])};
	};					
};

var asd="";

if(game_10mi==""){game_10mi="없음"};if(game_510mi==""){game_510mi="없음"};
if(game_5chul==""){asd="없음"};if(last_lotto==""){last_lotto="없음"};

for(i=0;i<game_5chul.length;i++){
if(i<game_5chul.length-1){asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회), ";}
else{asd+=game_5chul[i][0]+"("+game_5chul[i][1]+"회)";};
};

for(i=0; i<6; i++){
if(lotto_selected_all3[count][i]<10){page4_info.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lotto_selected_all3[count][i]+'&nbsp;</b>'; zero++;}
else if(lotto_selected_all3[count][i]==10){page4_info.innerHTML+='<b class="small"style="background-color:orange">'+lotto_selected_all3[count][i]+'</b>'; zero++;}
else if(lotto_selected_all3[count][i]<=20){page4_info.innerHTML+='<b class="small" style="background-color:blue">'+lotto_selected_all3[count][i]+'</b>'; one++;}
else if(lotto_selected_all3[count][i]<=30){page4_info.innerHTML+='<b class="small" style="background-color:red">'+lotto_selected_all3[count][i]+'</b>'; two++;}
else if(lotto_selected_all3[count][i]<=40){page4_info.innerHTML+='<b class="small" style="background-color:gray">'+lotto_selected_all3[count][i]+'</b>'; three++;}
else{page4_info.innerHTML+='<b class="small" style="background-color:green">'+lotto_selected_all3[count][i]+'</b>'; four++;}
};
jugocha=lotto_selected_all3[count][5]-lotto_selected_all3[count][0];
if(zero==0){junmul++;junmul2++;};if(one==0){junmul++;junmul2++;};if(two==0){junmul++;junmul2++;};if(three==0){junmul++;junmul2++;};if(four==0){junmul++;};

//number.innerHTML+="<button id='button' onclick='add("+count+"); style.opacity=0.4;'>저장</button>";
//number.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+") , 저고차("+jugocha+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+'</p>';
///if(holsu==2){number.innerHTML+='<b style="color:red">1등 확률이 높은 번호입니다.</b><br>';};
if(holsu==3){lotto_point+=8;};
if(holsu==2||holsu==4){lotto_point+=5;};
if(holsu==1||holsu==5){lotto_point+=2;};
//----------------------------------------
if(yunbun==1){lotto_point+=8;};
if(yunbun==0){lotto_point+=5;};
if(yunbun==2){lotto_point+=2;};
//----------------------------------------
if(sum>=120&sum<=160){lotto_point+=8;}
else if((sum>=90&sum<=119)||(sum>=161&sum<=180)){lotto_point+=5;}
else{lotto_point+=2;};
//------------------------------------------------------------
if((samsu+sosu)==3){lotto_point+=8;};
if((samsu+sosu)==5||(samsu+sosu)==4){lotto_point+=5;};
if((samsu+sosu)==2){lotto_point+=2;};
//--------------------------------------------------------
if(low==3){lotto_point+=8;};
if(low==2||low==4){lotto_point+=5;};
if(low==1||low==5){lotto_point+=2;};
//-----------------------------------------------------
if(zero<4&one<4&two<4&three<4&four<4&(junmul==1)){lotto_point+=13;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==2)){lotto_point+=7;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==1)){lotto_point+=10;};
//---------------------------------------------------------
if(jugocha>=30&jugocha<=40){lotto_point+=8;};
if((jugocha>=25&jugocha<=29)||(jugocha>=41&jugocha<=42)){lotto_point+=4;};
//---------------------------------------------------------
if(sumlastsu>=21&sumlastsu<=30){lotto_point+=8;};
if((sumlastsu>=16&sumlastsu<=20)||(sumlastsu>=31&sumlastsu<=35)){lotto_point+=4;};
//-----------------------------------------------------------------
if(last_lottosu==1){lotto_point+=13;};
if(last_lottosu==0){lotto_point+=8;};
if(last_lottosu==2){lotto_point+=3;};
//-------------------------------------------------------------------
if(game_5chulsu==3){lotto_point+=18;};
if(game_5chulsu==4){lotto_point+=10;};
if(game_5chulsu==2){lotto_point+=12;};
if(game_5chulsu==5){lotto_point+=6;};
//--------------------------------------------------------------
//page4_info.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><br>";
page4_info.innerHTML+="<br>";
 //alert(number_array.length);
var game302bindo=0;
var game303bindo=0;
var game304bindo=0;
var game305bindo=0;
var game306bindo=0;
var game307bindo=0;
var gamehotsu=0;
var gamecoldsu=0;
var gamenormalsu=0;

for(k=0;k<number_array.length;k++){
	for(i=0;i<6;i++){
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30<=2){game302bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30==3){game303bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30==4){game304bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30==5){game305bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30==6){game306bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].su30>=7){game307bindo++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].bscore>226){gamehotsu++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&number_array[k].bscore<146){gamecoldsu++;}
	if((lotto_selected_all3[count][i]==number_array[k].num)&&(number_array[k].bscore>=146&&number_array[k].bscore<=226)){gamenormalsu++;}
	};
};
var game5chul_2times=false;
var game5chul_1times=false;

for(i=0;i<game_5chul.length;i++){
if(game_5chul[i][1]>=2){game5chul_2times=true;}
if(game_5chul[i][1]==1){game5chul_1times=true;}
};

var want_ewalstatus=false;
if(want_ewal=="random"){want_ewalstatus=true;}else{if(last_lottosu==want_ewal){want_ewalstatus=true;};};
var want_yunbunstatus=false;
if(want_yunbun=="random"){want_yunbunstatus=true;}else{if(yunbun==want_yunbun){want_yunbunstatus=true;};};
var want_junmulstatus=false;
if(want_junmul=="random"){want_junmulstatus=true;}else{if(want_junmul==0){if(zero==0){want_junmulstatus=true;}};if(want_junmul==1){if(one==0){want_junmulstatus=true;}};if(want_junmul==2){if(two==0){want_junmulstatus=true;}};if(want_junmul==3){if(three==0){want_junmulstatus=true;}};if(want_junmul==4){if(four==0){want_junmulstatus=true;}};if(want_junmul==5){if(zero==0&four==0){want_junmulstatus=true;}};if(want_junmul==6){if(one==0&four==0){want_junmulstatus=true;}};if(want_junmul==7){if(two==0&four==0){want_junmulstatus=true;}};if(want_junmul==8){if(three==0&four==0){want_junmulstatus=true;}};};
var want_lastsu1status=false;
var want_lastsu2status=false;
var want_lastsu3status=false;
if(want_lastsu1=="random"){want_lastsu1status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu1==last_su[i]){want_lastsu1status=true;}};};
if(want_lastsu2=="random"){want_lastsu2status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu2==last_su[i]){want_lastsu2status=true;}};};
if(want_lastsu3=="random"){want_lastsu3status=true;}
else{for(i=0; i<last_su.length; i++){if(want_lastsu3==last_su[i]){want_lastsu3status=true;}};};

var basic_hol=false;
if(checkbox0.checked==false){basic_hol=true}else{if(holsu>=2&&holsu<=4){basic_hol=true;};};
var basic_sum=false;
if(checkbox1.checked==false){basic_sum=true}else{if(sum>=90&&sum<=180){basic_sum=true;};};
var basic_low=false;
if(checkbox2.checked==false){basic_low=true}else{if(low>=2&&low<=4){basic_low=true;};};
var basic_jugocha=false;
if(checkbox3.checked==false){basic_jugocha=true}else{if(jugocha>=25&&jugocha<=40){basic_jugocha=true;};};
var basic_last_lottosu=false;
if(checkbox4.checked==false){basic_last_lottosu=true}else{if(last_lottosu>=1){basic_last_lottosu=true;};};
var basic_yunbun=false;
if(checkbox5.checked==false){basic_yunbun=true}else{if(yunbun>=1){basic_yunbun=true;};};
var basic_color=false;
if(checkbox6.checked==false){basic_color=true}else{if(zero<4&one<4&two<4&three<4&four<4){basic_color=true;};};
var basic_junmul=false;
if(checkbox7.checked==false){basic_junmul=true}else{if(junmul>=1){basic_junmul=true;};};
var basic_game_5chulsu=false;
if(checkbox8.checked==false){basic_game_5chulsu=true}else{if(game_5chulsu>=3&&game_5chulsu<=4){basic_game_5chulsu=true;};};
var basic_game_10misu=false;
if(checkbox9.checked==false){basic_game_10misu=true}else{if(game_10mi!=="없음"){basic_game_10misu=true;};};

var want_basic=$("#flipswitch3_2 option:selected").val();
var basic_all=false;
if(want_basic=="off"){basic_all=true;}else{if(basic_hol&&basic_sum&&basic_low&&basic_jugocha&&basic_last_lottosu&&basic_yunbun&&basic_color&&basic_junmul&&basic_game_5chulsu&&basic_game_10misu){basic_all=true;};};

//var aaaaa=false;
//if(aaaa) {aaaa=true}
//if(last_lottosu==0){auto_choice();};
if(want_ewalstatus&&want_junmulstatus&&want_lastsu1status&&want_lastsu2status&&want_lastsu3status&&want_yunbunstatus&&basic_all){		
auto_count_2++;
//count++;	
for(i=0; i<6; i++){
if(lotto_selected_all3[count][i]<10){page4_main.innerHTML+='<b style="background-color:orange">&nbsp'+lotto_selected_all3[count][i]+'&nbsp;</b>';}
else if(lotto_selected_all3[count][i]==10){page4_main.innerHTML+='<b style="background-color:orange">'+lotto_selected_all3[count][i]+'</b>';}
else if(lotto_selected_all3[count][i]<=20){page4_main.innerHTML+='<b style="background-color:blue">'+lotto_selected_all3[count][i]+'</b>';}
else if(lotto_selected_all3[count][i]<=30){page4_main.innerHTML+='<b style="background-color:red">'+lotto_selected_all3[count][i]+'</b>';}
else if(lotto_selected_all3[count][i]<=40){page4_main.innerHTML+='<b style="background-color:gray">'+lotto_selected_all3[count][i]+'</b>';}
else{page4_main.innerHTML+='<b style="background-color:green">'+lotto_selected_all3[count][i]+'</b>';}
};
page4_main.innerHTML+="<button id='button' onclick='add3("+count+"); style.opacity=0.4;'>저장</button>";
page4_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><br>*1등 조합에 가장 좋은 점수대는 65~85점입니다.<p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+holsu+":"+jaksu+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+last_su+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi+'</p>';

}


};

lotto_info3.push(new info(sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su));

count++;
page4_info.innerHTML+="사용된 조합:"+(count)+"조합(100%)<br>"+"걸러진 조합:"+(count-auto_count_2)+"조합("+((count-auto_count_2)/(count)*100).toFixed(2)+"%)<br>선별된 조합:"+(auto_count_2)+"조합("+((auto_count_2)/(count)*100).toFixed(2)+"%)" ;

};
//-----------------------------------------
info = function(sum,holsu,jaksu,yunbun,low,high,sosu,samsu,habsu,zero,one,two,three,four,junmul,last_lotto,sumlastsu,lotto_point,jugocha,asd,game_510mi,game_10mi,last_su){
	    this.sum=sum;
		this.holsu = holsu;
		this.jaksu = jaksu;
		this.yunbun = yunbun;
		this.low = low;
		this.high = high;
		this.sosu = sosu;
		this.samsu = samsu;
		this.habsu = habsu;
		this.zero = zero;
		this.one = one;
		this.two = two;
		this.three = three;
		this.four = four;
		this.junmul = junmul;
		this.last_lotto=last_lotto;
		this.sumlastsu=sumlastsu;
	 	this.lotto_point=lotto_point;
		this.jugocha=jugocha;
	    this.asd=asd;
	    this.game_510mi=game_510mi;
		this.game_10mi=game_10mi;
		this.last_su=last_su;

};

var addsu=[];
var delsu=[];
//--------------------------------------
function button_reset(){
	var addsu_array=window.localStorage.getItem("addsu_array");
var addsu_array2=[];
if(addsu_array!==null){
for(i=0; i<addsu_array.length; i++){
	if(addsu_array[i]!==","&&addsu_array[i+1]==","&&addsu_array[i+1]!==undefined){addsu_array2.push(parseInt(addsu_array[i]));i++;}
	else if(addsu_array[i]==","&&addsu_array[i+1]==undefined){i++;}
	else if(addsu_array[i]!==","&&addsu_array[i+1]!==","&&addsu_array[i+1]!==undefined){addsu_array2.push(parseInt(addsu_array[i]+addsu_array[i+1]));i=i+2}
else if(addsu_array[i]!==","&&addsu_array[i+1]!==","&&addsu_array[i+1]==undefined){addsu_array2.push(parseInt(addsu_array[i]));i++;};

	//if(addsu_array[i]!==","&&addsu_array[i+1]!==","){addsu_array2.push(addsu_array[i]+addsu_array[i+1])};
};
//for(i=0; i<addsu_array2.length; i++){	
//ad(addsu_array2[i]);
//};
addsu=addsu_array2;
};
if(addsu==""){infoadd.innerHTML="고정수";}
	else{
	infoadd.innerHTML="고정수"+"("+addsu.sort(function(a,b){return a-b})+")"};
	info_add.innerHTML="고정수"; 
	for(i=0; i<addsu.length; i++){
if(i%10==0){info_add.innerHTML+="<br>"};			
if(addsu[i]<10){info_add.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+addsu[i]+'&nbsp;</b>'; }
else if(addsu[i]==10){info_add.innerHTML+='<b class="small" style="background-color:orange">'+addsu[i]+'</b>'; }
else if(addsu[i]<=20){info_add.innerHTML+='<b class="small" style="background-color:blue">'+addsu[i]+'</b>'; }
else if(addsu[i]<=30){info_add.innerHTML+='<b class="small" style="background-color:red">'+addsu[i]+'</b>'; }
else if(addsu[i]<=40){info_add.innerHTML+='<b class="small" style="background-color:gray">'+addsu[i]+'</b>'; }
else{info_add.innerHTML+='<b class="small" style="background-color:green">'+addsu[i]+'</b>'; }
	};
//-------	
	for(i=1; i<46; i++){
var button_status=1;
for(j=0; j<addsu_array2.length; j++){
	if(i==addsu_array2[j]){button_status=0.1;}
};		
	if(i<=10){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:orange">'+i+'</button>';}
else if(i<=20){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:blue">'+i+'</button>';}
else if(i<=30){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:red">'+i+'</button>';}
else if(i<=40){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:gray">'+i+'</button>';}
else{add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:green">'+i+'</button>';}
};
//-------------
var delsu_array=window.localStorage.getItem("delsu_array");
var delsu_array2=[];
if(delsu_array!==null){
for(i=0; i<delsu_array.length; i++){
	if(delsu_array[i]!==","&&delsu_array[i+1]==","&&delsu_array[i+1]!==undefined){delsu_array2.push(parseInt(delsu_array[i]));i++;}
	else if(delsu_array[i]==","&&delsu_array[i+1]==undefined){i++;}
	else if(delsu_array[i]!==","&&delsu_array[i+1]!==","&&delsu_array[i+1]!==undefined){delsu_array2.push(parseInt(delsu_array[i]+delsu_array[i+1]));i=i+2}
else if(delsu_array[i]!==","&&delsu_array[i+1]!==","&&delsu_array[i+1]==undefined){delsu_array2.push(parseInt(delsu_array[i]));i++;};

	//if(addsu_array[i]!==","&&addsu_array[i+1]!==","){addsu_array2.push(addsu_array[i]+addsu_array[i+1])};
};
//for(i=0; i<delsu_array2.length; i++){	
//de(parseInt(delsu_array2[i]));
//};
delsu=delsu_array2;
};
if(delsu==""){infodel.innerHTML="제외수";}
	else{
	infodel.innerHTML="제외수"+"("+delsu.sort(function(a,b){return a-b})+")"};
	info_del.innerHTML="제외수"; 
	for(i=0; i<delsu.length; i++){
if(i%10==0){info_del.innerHTML+="<br>"};			
if(delsu[i]<10){info_del.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+delsu[i]+'&nbsp;</b>'; }
else if(delsu[i]==10){info_del.innerHTML+='<b class="small" style="background-color:orange">'+delsu[i]+'</b>'; }
else if(delsu[i]<=20){info_del.innerHTML+='<b class="small" style="background-color:blue">'+delsu[i]+'</b>'; }
else if(delsu[i]<=30){info_del.innerHTML+='<b class="small" style="background-color:red">'+delsu[i]+'</b>'; }
else if(delsu[i]<=40){info_del.innerHTML+='<b class="small" style="background-color:gray">'+delsu[i]+'</b>'; }
else{info_del.innerHTML+='<b class="small" style="background-color:green">'+delsu[i]+'</b>'; }
	};
//-------	
	for(i=1; i<46; i++){
var button_status=1;
for(j=0; j<delsu_array2.length; j++){
	if(i==delsu_array2[j]){button_status=0.1;}
};		
	if(i<=10){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:orange">'+i+'</button>';}
else if(i<=20){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:blue">'+i+'</button>';}
else if(i<=30){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:red">'+i+'</button>';}
else if(i<=40){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:gray">'+i+'</button>';}
else{del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="opacity:'+button_status+';background-color:green">'+i+'</button>';}
};
};

function button_reset_add(){
	addsu=[];
	window.localStorage.setItem("addsu_array",addsu);
	infoadd.innerHTML="선택된 수는 번호 추출시 추가 되어집니다.";
	info_add.innerHTML="고정수 ";
	add_su2.innerHTML="";
	for(i=1; i<46; i++){
	if(i<=10){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:orange">'+i+'</button>';}
else if(i<=20){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:blue">'+i+'</button>';}
else if(i<=30){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:red">'+i+'</button>';}
else if(i<=40){add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:gray">'+i+'</button>';}
else{add_su2.innerHTML+='<button class="del_b" onclick="ad('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:green">'+i+'</button>';}
};
};
function button_reset_del(){
	delsu=[];
	window.localStorage.setItem("delsu_array",delsu);
	infodel.innerHTML="선택된 수는 번호 추출시 제외 되어집니다.";
	info_del.innerHTML="제외수 ";
	del_su2.innerHTML=""; 
	for(i=1; i<46; i++){
	if(i<=10){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:orange">'+i+'</button>';}
else if(i<=20){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:blue">'+i+'</button>';}
else if(i<=30){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:red">'+i+'</button>';}
else if(i<=40){del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:gray">'+i+'</button>';}
else{del_su2.innerHTML+='<button class="del_b" onclick="de('+i+'); if(style.opacity==0.1){style.opacity=1;}else{style.opacity=0.1;};" style="background-color:green">'+i+'</button>';}
};
};
//--------------------------------------
function addadd_su(){
	if(addsu==""){infoadd.innerHTML="선택된 수는 번호 추출시 추가 되어집니다.";}
	else{
	infoadd.innerHTML="고정수 "+addsu.sort(function(a,b){return a-b});}
	
	add_su.style.visibility="visible";
};
//--------------------------------
function ad_close(){
	//add_su2.innerHTML=""; 
	window.localStorage.setItem("addsu_array",addsu);
	setTimeout(function(){add_su.style.visibility="hidden";},300);
	if(addsu==""){infoadd.innerHTML="고정수";}
	else{
	infoadd.innerHTML="고정수 "+addsu.sort(function(a,b){return a-b});}
	info_add.innerHTML="고정수"; 
	for(i=0; i<addsu.length; i++){
if(i%10==0){info_add.innerHTML+="<br>"};			
if(addsu[i]<10){info_add.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+addsu[i]+'&nbsp;</b>'; }
else if(addsu[i]==10){info_add.innerHTML+='<b class="small" style="background-color:orange">'+addsu[i]+'</b>'; }
else if(addsu[i]<=20){info_add.innerHTML+='<b class="small" style="background-color:blue">'+addsu[i]+'</b>'; }
else if(addsu[i]<=30){info_add.innerHTML+='<b class="small" style="background-color:red">'+addsu[i]+'</b>'; }
else if(addsu[i]<=40){info_add.innerHTML+='<b class="small" style="background-color:gray">'+addsu[i]+'</b>'; }
else{info_add.innerHTML+='<b class="small" style="background-color:green">'+addsu[i]+'</b>'; }
	};
	//alert(delsu);
	};
//--------------------------------
function ad(num){
	addsu.push(num);
	for(i=0; i<addsu.length-1; i++){
		if(addsu[i]==num){addsu.splice(i,1);addsu.splice(addsu.length-1,1);}
		};
	infoadd.innerHTML="고정수 "+addsu.sort(function(a,b){return a-b});
	infoadd.innerHTML+="<br>";
	 for(i=0; i<game10mi.length; i++){if(game10mi[i]==num){infoadd.innerHTML+="<br>"+num+"번은 11주 이상 미 출현수이며"};};
	 for(i=0; i<game510mi.length; i++){if(game510mi[i]==num){infoadd.innerHTML+="<br>"+num+"번은 6~10주 미 출현수이며"};};
	 for(i=0; i<game5chul.length; i++){if(game5chul[i][0]==num){infoadd.innerHTML+="<br>"+num+"번은 5주 이내 "+game5chul[i][1]+"회 출현수이며 "};};
	 var bindo30_this=0;
	 var bindo60_this=0;
	 var bindo90_this=0;
	  var bindo30_this_array=[];
	 var bindo60_this_array=[];
	 var bindo90_this_array=[];
	 var je_array=[];
	 for(k=0; k<45; k++){	 
	if(number_array[k].num==num){bindo30_this=number_array[k].su30};
	if(number_array[k].num==num){bindo60_this=number_array[k].su60};
	if(number_array[k].num==num){bindo90_this=number_array[k].su90};
	 };	 
	
	if(bindo30_this<=2){bindo30_this_array.push(0,1,2)}
	else if(bindo30_this>=7){bindo30_this_array.push(7,8,9,10,11,12,13,14,15,16,17)}
	else{bindo30_this_array.push(bindo30_this)};
	if(bindo60_this<=6){bindo60_this_array.push(0,1,2,3,4,5,6)}
	else if(bindo60_this>=13){bindo60_this_array.push(13,14,15,16,17,18,19,20,21,22,23,24,25)}
	else{bindo60_this_array.push(bindo60_this)};
	if(bindo90_this<=10){bindo90_this_array.push(0,1,2,3,4,5,6,7,8,9,10)}
	else if(bindo90_this>=18){bindo90_this_array.push(18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35)}
	else{bindo90_this_array.push(bindo90_this)};
	
	  for(i=0; i<bindo30_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su30==bindo30_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo60_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su60==bindo60_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo90_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su90==bindo90_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	 infoadd.innerHTML+=" 빈도 필터링 분석 결과 이번주에 "+je_array.unique()+"번과 함께 출현할 확률이 낮습니다."+num+"번을 고정수로 가져가실때에는 이 수들을 모두 제외하시거나 1수 정도만 취하시기 바랍니다.(최대 2수)";
	 //show_goong();
	 
	};
//---------
function show_goong(){
	 for(num=1; num<46; num++){
 var bindo30_this=0;
	 var bindo60_this=0;
	 var bindo90_this=0;
	  var bindo30_this_array=[];
	 var bindo60_this_array=[];
	 var bindo90_this_array=[];
	 var je_array=[];
	 for(k=0; k<45; k++){	 
	if(number_array[k].num==num){bindo30_this=number_array[k].su30};
	if(number_array[k].num==num){bindo60_this=number_array[k].su60};
	if(number_array[k].num==num){bindo90_this=number_array[k].su90};
	 };	 
	
	if(bindo30_this<=2){bindo30_this_array.push(0,1,2)}
	else if(bindo30_this>=7){bindo30_this_array.push(7,8,9,10,11,12,13,14,15,16,17)}
	else{bindo30_this_array.push(bindo30_this)};
	if(bindo60_this<=6){bindo60_this_array.push(0,1,2,3,4,5,6)}
	else if(bindo60_this>=13){bindo60_this_array.push(13,14,15,16,17,18,19,20,21,22,23,24,25)}
	else{bindo60_this_array.push(bindo60_this)};
	if(bindo90_this<=10){bindo90_this_array.push(0,1,2,3,4,5,6,7,8,9,10)}
	else if(bindo90_this>=18){bindo90_this_array.push(18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35)}
	else{bindo90_this_array.push(bindo90_this)};
	
	  for(i=0; i<bindo30_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su30==bindo30_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo60_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su60==bindo60_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo90_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su90==bindo90_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	 add_su2.innerHTML+=num+"번 "+je_array.unique()+"<br>";	
	 };
	
	};	
//------------------------------------------
function delete_su(){
	if(delsu==""){infodel.innerHTML="선택된 수는 번호 추출시 제외 되어집니다.";}
	else{
	infodel.innerHTML="제외수 "+delsu.sort(function(a,b){return a-b});}
	del_su.style.visibility="visible";
};
//--------------------------------
function de_close(){
	//del_su2.innerHTML="";
	window.localStorage.setItem("delsu_array",delsu); 
	setTimeout(function(){del_su.style.visibility="hidden";},300);
	if(delsu==""){infoadd.innerHTML="제외수";}
	else{
	infodel.innerHTML="제외수 "+delsu.sort(function(a,b){return a-b});}
	info_del.innerHTML="제외수"; 
	for(i=0; i<delsu.length; i++){
if(i%10==0){info_del.innerHTML+="<br>"};			
if(delsu[i]<10){info_del.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+delsu[i]+'&nbsp;</b>'; }
else if(delsu[i]==10){info_del.innerHTML+='<b class="small" style="background-color:orange">'+delsu[i]+'</b>'; }
else if(delsu[i]<=20){info_del.innerHTML+='<b class="small" style="background-color:blue">'+delsu[i]+'</b>'; }
else if(delsu[i]<=30){info_del.innerHTML+='<b class="small" style="background-color:red">'+delsu[i]+'</b>'; }
else if(delsu[i]<=40){info_del.innerHTML+='<b class="small" style="background-color:gray">'+delsu[i]+'</b>'; }
else{info_del.innerHTML+='<b class="small" style="background-color:green">'+delsu[i]+'</b>'; }
	};
	//alert(delsu);
	};
//--------------------------------
function de(num){
	delsu.push(num);
	for(i=0; i<delsu.length-1; i++){
		if(delsu[i]==num){delsu.splice(i,1);delsu.splice(delsu.length-1,1);}
		};
	infodel.innerHTML="제외수 "+delsu.sort(function(a,b){return a-b});
	infodel.innerHTML+="<br>";
	 for(i=0; i<game10mi.length; i++){if(game10mi[i]==num){infodel.innerHTML+="<br>"+num+"번은 11주 이상 미 출현수이며"};};
	 for(i=0; i<game510mi.length; i++){if(game510mi[i]==num){infodel.innerHTML+="<br>"+num+"번은 6~10주 미 출현수이며"};};
	 for(i=0; i<game5chul.length; i++){if(game5chul[i][0]==num){infodel.innerHTML+="<br>"+num+"번은 5주 이내 "+game5chul[i][1]+"회 출현수이며 "};};
	  var bindo30_this=0;
	 var bindo60_this=0;
	 var bindo90_this=0;
	  var bindo30_this_array=[];
	 var bindo60_this_array=[];
	 var bindo90_this_array=[];
	 var je_array=[];
	 for(k=0; k<45; k++){	 
	if(number_array[k].num==num){bindo30_this=number_array[k].su30};
	if(number_array[k].num==num){bindo60_this=number_array[k].su60};
	if(number_array[k].num==num){bindo90_this=number_array[k].su90};
	 };	 
	
	if(bindo30_this<=2){bindo30_this_array.push(0,1,2)}
	else if(bindo30_this>=7){bindo30_this_array.push(7,8,9,10,11,12,13,14,15,16,17)}
	else{bindo30_this_array.push(bindo30_this)};
	if(bindo60_this<=6){bindo60_this_array.push(0,1,2,3,4,5,6)}
	else if(bindo60_this>=13){bindo60_this_array.push(13,14,15,16,17,18,19,20,21,22,23,24,25)}
	else{bindo60_this_array.push(bindo60_this)};
	if(bindo90_this<=10){bindo90_this_array.push(0,1,2,3,4,5,6,7,8,9,10)}
	else if(bindo90_this>=18){bindo90_this_array.push(18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35)}
	else{bindo90_this_array.push(bindo90_this)};
	
	  for(i=0; i<bindo30_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su30==bindo30_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo60_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su60==bindo60_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	   for(i=0; i<bindo90_this_array.length; i++){		
	  for(k=0; k<45; k++){	 
	if((number_array[k].su90==bindo90_this_array[i])&&(number_array[k].num!==num)){je_array.push(number_array[k].num);};
	 };};
	 infodel.innerHTML+=" 빈도 필터링 분석 결과 이번주에 "+je_array.unique()+"번과 함께 출현할 확률이 낮습니다."+num+"번을 고정수로 가져가실때에는 이 수들을 모두 제외하시거나 1수 정도만 취하시기 바랍니다.(최대 2수)";

	};
var overdue_array=[];
var not_overdue_array=[];
var position_high_array=[];
var not_position_high_array=[];
var frequency_high_array=[];
var fixed_array=[];
var exception_array=[];
var positionsu_array=[];
//------------------------------------
var number_array=[];
var num_b={b302:[],b303:[],b304:[],b305:[],b306:[],b307:[],b606:[],b607:[],b608:[],b609:[],b6010:[],b6011:[],b6012:[],b6013:[],b9010:[],b9011:[],b9012:[],b9013:[],b9014:[],b9015:[],b9016:[],b9017:[],b9018:[]};
var johab_array=[];
var lastsu_array=[];
var sum_score=0;
var sum_su=0;
var sum_mscore=0;
var bindo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var bindo_array={b0:[],b1:[],b2:[],b3:[],b4:[],b5:[],b6:[],b7:[],b8:[],b9:[],b10:[],b11:[],b12:[]};
var bindo_class={a0:[],a1:[],a2:[],a3:[],a4:[],a5:[],a6:[]};
var col3={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col5={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col10={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col15={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col30={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col60={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
var col={col0:0,col1:0,col2:0,col3:0,col4:0,col5:0,col6:0,col7:0,col8:0,array0:[],array1:[],array2:[],array3:[],array4:[],array5:[],array6:[],array7:[],array8:[]};
//------------------  

//------------------------------------

function calculate(){	
//alert(dangchum.length);
for(i=0; i<dangchum.length; i++){
	for(j=0; j<7; j++){
		for(k=0; k<45; k++){
		if(dangchum[i][j]==positionsu_array[k].num&&j==0&&i>=dangchum.length-60){positionsu_array[k].p1+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==1&&i>=dangchum.length-60){positionsu_array[k].p2+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==2&&i>=dangchum.length-60){positionsu_array[k].p3+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==3&&i>=dangchum.length-60){positionsu_array[k].p4+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==4&&i>=dangchum.length-60){positionsu_array[k].p5+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==5&&i>=dangchum.length-60){positionsu_array[k].p6+=1};
		if(dangchum[i][j]==positionsu_array[k].num&&j==6&&i>=dangchum.length-60){positionsu_array[k].p7+=1};
		//---------	
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-1){number_array[k].score+=(i+1);number_array[k].su1+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-2){number_array[k].score+=(i+1);number_array[k].su2+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-3){number_array[k].score+=(i+1);number_array[k].su3+=1
				if(dangchum[i][j]<=5){col3.col0++;col3.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col3.col1++;col3.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col3.col2++;col3.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col3.col3++;col3.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col3.col4++;col3.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col3.col5++;col3.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col3.col6++;col3.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col3.col7++;col3.array7.push(dangchum[i][j]);}
		else{col3.col8++;col3.array8.push(dangchum[i][j]);};
		};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-4){number_array[k].score+=(i+1);number_array[k].su4+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-6){number_array[k].score+=(i+1);number_array[k].su6+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-7){number_array[k].score+=(i+1);number_array[k].su7+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-5){number_array[k].score+=(i+1);number_array[k].su5+=1;
			if(dangchum[i][j]<=5){col5.col0++;col5.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col5.col1++;col5.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col5.col2++;col5.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col5.col3++;col5.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col5.col4++;col5.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col5.col5++;col5.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col5.col6++;col5.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col5.col7++;col5.array7.push(dangchum[i][j]);}
		else{col5.col8++;col5.array8.push(dangchum[i][j]);};
		};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-8){number_array[k].score+=(i+1);number_array[k].su8+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-9){number_array[k].score+=(i+1);number_array[k].su9+=1};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-10){number_array[k].score+=(i+1);number_array[k].su10+=1;
		if(dangchum[i][j]<=5){col10.col0++;col10.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col10.col1++;col10.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col10.col2++;col10.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col10.col3++;col10.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col10.col4++;col10.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col10.col5++;col10.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col10.col6++;col10.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col10.col7++;col10.array7.push(dangchum[i][j]);}
		else{col10.col8++;col10.array8.push(dangchum[i][j]);};
		};
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-15){number_array[k].score+=(i+1);number_array[k].su15+=1;
			if(dangchum[i][j]<=5){col15.col0++;col15.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col15.col1++;col15.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col15.col2++;col15.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col15.col3++;col15.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col15.col4++;col15.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col15.col5++;col15.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col15.col6++;col15.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col15.col7++;col15.array7.push(dangchum[i][j]);}
		else{col15.col8++;col15.array8.push(dangchum[i][j]);};
		};
		
			if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-30){number_array[k].score+=(i+1);number_array[k].su30+=1;
			if(dangchum[i][j]<=5){col30.col0++;col30.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col30.col1++;col30.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col30.col2++;col30.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col30.col3++;col30.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col30.col4++;col30.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col30.col5++;col30.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col30.col6++;col30.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col30.col7++;col30.array7.push(dangchum[i][j]);}
		else{col30.col8++;col30.array8.push(dangchum[i][j]);};
		};
		
			if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-60){number_array[k].score+=(i+1);number_array[k].su60+=1;
			if(dangchum[i][j]<=5){col60.col0++;col60.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col60.col1++;col60.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col60.col2++;col60.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col60.col3++;col60.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col60.col4++;col60.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col60.col5++;col60.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col60.col6++;col60.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col60.col7++;col60.array7.push(dangchum[i][j]);}
		else{col60.col8++;col60.array8.push(dangchum[i][j]);};
		};
		
		
	if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-90){number_array[k].su90+=1};
		
		if(dangchum[i][j]==number_array[k].num&&i>=dangchum.length-100){number_array[k].score+=(i+1);number_array[k].su100+=1;
if(dangchum[i][j]<=5){col.col0++;col.array0.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=10){col.col1++;col.array1.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=15){col.col2++;col.array2.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=20){col.col3++;col.array3.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=25){col.col4++;col.array4.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=30){col.col5++;col.array5.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=35){col.col6++;col.array6.push(dangchum[i][j]);}
		else if(dangchum[i][j]<=40){col.col7++;col.array7.push(dangchum[i][j]);}
		else{col.col8++;col.array8.push(dangchum[i][j]);};
		};		
		
		
		if(dangchum[i][j]==number_array[k].num){number_array[k].su+=1;number_array[k].bscore=(number_array[k].score/number_array[k].su).toFixed(0);number_array[k].appear.push(dangchum.length-i);
		};
		//alert(number_array[k].num+","+number_array[k].score);
		};
		
		var msum=0;
		
		for(l=i+1; l<dangchum.length; l++){
		for(m=0; m<7; m++){
			
			for(k=0; k<45; k++){
	if(dangchum[i][j]==dangchum[l][m]&dangchum[i][j]==number_array[k].num){
		//number_array[k].mscore+=1;
		number_array[k].mscore2+=((1/(l-i))*100)
		number_array[k].mscore=number_array[k].mscore2/number_array[k].su;
		};	
			}
		}
		};
		
	};
	};								
	for(k=0; k<45; k++){
sum_score+=number_array[k].score;	
sum_su+=number_array[k].su;
sum_mscore+=number_array[k].mscore;		

	};
	for(k=0; k<45; k++){
		number_array[k].appear.sort(function(a,b){return a-b});	
		for(j=1; j<number_array[k].appear.length; j++){
number_array[k].appear2.push(number_array[k].appear[j]-number_array[k].appear[j-1]);			
		};
	};
	
	//-----------끝수계산---------
	for(i=0; i<dangchum.length; i++){
		var array=[];
	for(j=0; j<7; j++){
		
		array.push(dangchum[i][j]%10);
		array.sort(function(a,b){return a-b});	
		};
		johab_array[i]=array;
		
		//alert(dangchum[i]+"<br>"+johab_array[i]);
	};
	
	for(i=0; i<johab_array.length; i++){
	for(j=0; j<7; j++){
		for(k=0; k<10; k++){
		
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-1){lastsu_array[k].su1++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-2){lastsu_array[k].su2++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-3){lastsu_array[k].su3++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-4){lastsu_array[k].su4++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-5){lastsu_array[k].su5++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-10){lastsu_array[k].su10++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-30){lastsu_array[k].su30++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-60){lastsu_array[k].su60++;};
		if(johab_array[i][j]==lastsu_array[k].lastnum&&i>=johab_array.length-100){lastsu_array[k].su100++;};
		};
		
		};
	};
	show_info("number1")
};
function show_info(id){	
var page2_main=document.getElementById(id);
//page2_main.innerHTML="<br>최근 30게임 당첨번호 색깔별 정리<br><br>";
//---------
var je_find=[];
var je_find2=[];
var je_interval=[];
var je_interval2=[];
for(j=0; j<45; j++){
	je_interval2[j]=[];
	je_interval2[j][0]=j;
	je_interval2[j][1]=0;
};
for(j=0; j<45; j++){
	je_find2[j]=[];
	je_find2[j][0]=j+1;
	je_find2[j][1]=0;
};
for(i=0; i<7; i++){
	je_interval[i]=[];
	for(j=0; j<45; j++){
		je_interval[i][j]=[];
		je_interval[i][j][0]=j;
	je_interval[i][j][1]=0;
	je_interval[i][j][2]=false;
		
	};
};
for(i=0; i<7; i++){
	je_find[i]=[];
for(j=0; j<45; j++){
	je_find[i][j]=[];
	je_find[i][j][0]=j+1;
	je_find[i][j][1]=0;
};
};

var je_find_array=[];
for(j=0; j<45; j++){
	je_find_array[j]=[];
	je_find_array[j][0]=j+1;
	je_find_array[j][1]=0;
};
//-----------
for(t=1; t<4; t++){
for(l=0; l<7; l++){
for(k=0; k<45; k++){
var broken=je_interval[l][k][2];
var num=0;	
var num_same=0;
if((dangchum[dangchum.length-(t+1)][l]+k)<=45){num=(dangchum[dangchum.length-(t+1)][l]+k);}else{num=(dangchum[dangchum.length-(t+1)][l]+k-45);};
for(j=0; j<7; j++){
if(num!==dangchum[dangchum.length-t][j]){num_same++;};	
};
if(num_same==7){je_interval[l][k][1]+=1;je_interval[l][k][2]=false;}else{je_interval[l][k][2]=true;};
};};};
//-------------
for(t=1; t<31; t++){
for(l=0; l<7; l++){
for(k=0; k<45; k++){
var num=0;	
var num_same=0;
if((dangchum[dangchum.length-(t+1)][l]+k)<=45){num=(dangchum[dangchum.length-(t+1)][l]+k);}else{num=(dangchum[dangchum.length-(t+1)][l]+k-45);};
for(j=0; j<7; j++){
if(num!==dangchum[dangchum.length-t][j]){
num_same++;
};
if(num_same==7){je_interval2[k][1]+=1};
};
};};};
//------------
je_interval.sort(function(a,b){return b[1]-a[1]});
je_interval2.sort(function(a,b){return b[1]-a[1]});
//page2_main.innerHTML+=dangchum[dangchum.length-(2)];
//page2_main.innerHTML+="<br><br>";
//page2_main.innerHTML+=je_interval;
//page2_main.innerHTML+="<br><br>";
//page2_main.innerHTML+=je_interval2;
//page2_main.innerHTML+="<br><br>";
for(i=0; i<je_interval.length; i++){
	for(j=0; j<je_interval[i].length; j++){
		for(k=0; k<7; k++){
		var num=0;	
	if((je_interval[i][j][0]+dangchum[dangchum.length-1][k])<=45){num=je_interval[i][j][0]+dangchum[dangchum.length-1][k];}else{num=je_interval[i][j][0]+dangchum[dangchum.length-1][k]-45;};
		je_find[i][num-1][1]+=je_interval[i][j][1];	
			};	
	};
};
//-------------------------------
for(i=0; i<je_interval2.length; i++){
	for(j=0; j<7; j++){
var num=0;		
if((je_interval2[i][0]+dangchum[dangchum.length-1][j])<=45){num=je_interval2[i][0]+dangchum[dangchum.length-1][j];}	
else{num=je_interval2[i][0]+dangchum[dangchum.length-1][j]-45;};	
je_find2[num-1][1]+=je_interval2[i][1];
};};
//---------
for(k=0; k<je_find_array.length; k++){
	for(i=0; i<je_find.length; i++){
for(j=0; j<je_find[i].length; j++){
if(je_find[i][j][0]==je_find_array[k][0]){je_find_array[k][1]+=je_find[i][j][1];}
		};};	
	};
//page2_main.innerHTML+="<br><br>"
je_find_array.sort(function(a,b){return b[1]-a[1]});
je_find2.sort(function(a,b){return b[1]-a[1]});
//-------------------

var p1_array=[];
var p1_array_last=[];
var p2_array=[];
var p2_array_last=[];
var p3_array=[];
var p3_array_last=[];
var p4_array=[];
var p4_array_last=[];
var p5_array=[];
var p5_array_last=[];
var p6_array=[];
var p6_array_last=[];
var p7_array=[];
var p7_array_last=[];
for(i=0; i<30; i++){
p1_array[i]=[];
p1_array[i][0]=i;
p1_array[i][1]=0;
p2_array[i]=[];
p2_array[i][0]=i;
p2_array[i][1]=0;
p3_array[i]=[];
p3_array[i][0]=i;
p3_array[i][1]=0;
p4_array[i]=[];
p4_array[i][0]=i;
p4_array[i][1]=0;
p5_array[i]=[];
p5_array[i][0]=i;
p5_array[i][1]=0;
p6_array[i]=[];
p6_array[i][0]=i;
p6_array[i][1]=0;
p7_array[i]=[];
p7_array[i][0]=i;
p7_array[i][1]=0;
}
//----------------------------------------
positionsu_array.sort(function(a,b){return b.p1-a.p1});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p1_array.length; j++){
if(positionsu_array[i].p1==p1_array[j][0]&&positionsu_array[i].p1!==0){
	p1_array[j][1]++;
	};
};};
for(j=0; j<p1_array.length; j++){
if(p1_array[j][1]!==0){p1_array_last.push(p1_array[j]);};
};
p1_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p1==p1_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p1==p1_array_last[1][0]&&p1_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p1==p1_array_last[2][0]&&p1_array_last[0][1]==1&&p1_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};
//----------------------------------------
positionsu_array.sort(function(a,b){return b.p2-a.p2});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p2_array.length; j++){
if(positionsu_array[i].p2==p2_array[j][0]&&positionsu_array[i].p2!==0){
	p2_array[j][1]++;
	};
};};
for(j=0; j<p2_array.length; j++){
if(p2_array[j][1]!==0){p2_array_last.push(p2_array[j]);};
};
p2_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p2==p2_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p2==p2_array_last[1][0]&&p2_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p2==p2_array_last[2][0]&&p2_array_last[0][1]==1&&p2_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};	
//-----------------------------------
positionsu_array.sort(function(a,b){return b.p3-a.p3});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p3_array.length; j++){
if(positionsu_array[i].p3==p3_array[j][0]&&positionsu_array[i].p3!==0){
	p3_array[j][1]++;
	};
};};
for(j=0; j<p3_array.length; j++){
if(p3_array[j][1]!==0){p3_array_last.push(p3_array[j]);};
};
p3_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p3==p3_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p3==p3_array_last[1][0]&&p3_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p3==p3_array_last[2][0]&&p3_array_last[0][1]==1&&p3_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};	
//-----------------------------------
positionsu_array.sort(function(a,b){return b.p4-a.p4});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p4_array.length; j++){
if(positionsu_array[i].p4==p4_array[j][0]&&positionsu_array[i].p4!==0){
	p4_array[j][1]++;
	};
};};
for(j=0; j<p4_array.length; j++){
if(p4_array[j][1]!==0){p4_array_last.push(p4_array[j]);};
};
p4_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p4==p4_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p4==p4_array_last[1][0]&&p4_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p4==p4_array_last[2][0]&&p4_array_last[0][1]==1&&p4_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};	
//-----------------------------------	
positionsu_array.sort(function(a,b){return b.p6-a.p6});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p6_array.length; j++){
if(positionsu_array[i].p6==p6_array[j][0]&&positionsu_array[i].p6!==0){
	p6_array[j][1]++;
	};
};};
for(j=0; j<p6_array.length; j++){
if(p6_array[j][1]!==0){p6_array_last.push(p6_array[j]);};
};
p6_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p6==p6_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p6==p6_array_last[1][0]&&p6_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p6==p6_array_last[2][0]&&p6_array_last[0][1]==1&&p6_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};	
//-----------------------------------
positionsu_array.sort(function(a,b){return b.p5-a.p5});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p5_array.length; j++){
if(positionsu_array[i].p5==p5_array[j][0]&&positionsu_array[i].p5!==0){
	p5_array[j][1]++;
	};
};};
for(j=0; j<p5_array.length; j++){
if(p5_array[j][1]!==0){p5_array_last.push(p5_array[j]);};
};
p5_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p5==p5_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p5==p5_array_last[1][0]&&p5_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p5==p5_array_last[2][0]&&p5_array_last[0][1]==1&&p5_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};
//-----------------------------------
positionsu_array.sort(function(a,b){return b.p7-a.p7});
for(i=0; i<positionsu_array.length; i++){
	for(j=0; j<p7_array.length; j++){
if(positionsu_array[i].p7==p7_array[j][0]&&positionsu_array[i].p7!==0){
	p7_array[j][1]++;
	};
};};
for(j=0; j<p7_array.length; j++){
if(p7_array[j][1]!==0){p7_array_last.push(p7_array[j]);};
};
p7_array_last.sort(function(a,b){return b[0]-a[0]});
for(i=0; i<positionsu_array.length; i++){
	if(positionsu_array[i].p7==p7_array_last[0][0])
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p7==p7_array_last[1][0]&&p7_array_last[0][1]<=2)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else if(positionsu_array[i].p7==p7_array_last[2][0]&&p7_array_last[0][1]==1&&p7_array_last[2][1]==1)
	{position_high_array.push(positionsu_array[i].num);fixed_array.push(positionsu_array[i].num);}
	else{not_position_high_array.push(positionsu_array[i].num)};
	};		
//-----------------------------------
position_high_array.unique();	
not_position_high_array.unique();	
//page2_main.innerHTML+=position_high_array;	
//page2_main.innerHTML+="<br>";
for(k=0; k<45; k++){
if(number_array[k].appear[0]>=11){overdue_array.push(number_array[k].num);fixed_array.push(number_array[k].num);}
else{not_overdue_array.push(number_array[k].num);};
	};
//---------
fixed_array.unique();
//----------------------		
for(j=0; j<fixed_array.length; j++){
for(i=0; i<not_position_high_array.length; i++){	
		if(not_position_high_array[i]==fixed_array[j]){not_position_high_array.splice(i,1);continue;}
	};
	};
fixed_array.unique();
exception_array.unique();
//page2_main.innerHTML+=overdue_array;
//page2_main.innerHTML+="<br>";	
//page2_main.innerHTML+=fixed_array;	
//page2_main.innerHTML+="<br>";	
//page2_main.innerHTML+=not_position_high_array;
//page2_main.innerHTML+="<br><br>";	
//page2_main.innerHTML+="고정수<br><br>";
//page2_main.innerHTML+=fixed_array;	
//page2_main.innerHTML+="<br><br>";	
var last_fix=[];
var last_fix1=[];

for(j=0; j<fixed_array.length; j++){
	for(k=15; k<45; k++){
 if(je_find_array[k][0]==fixed_array[j]){last_fix.push(je_find_array[k][0])};
	};
	};
	
for(i=15; i<45; i++){
	for(k=15; k<45; k++){
	for(j=0; j<fixed_array.length; j++){
 if(je_find_array[i][0]==je_find2[k][0]&&je_find2[k][0]==fixed_array[j]){last_fix1.push(je_find_array[i][0])};
	};};
	};
last_fix.unique();	
last_fix1.unique();	
//page2_main.innerHTML+=last_fix;	
//page2_main.innerHTML+="<br><br>";
//page2_main.innerHTML+=last_fix1;	
//page2_main.innerHTML+="<br><br>";
//----------------------
var last_je=[];
var last_je1=[];
var last_je2=[];
//for(i=0; i<10; i++){
//last_je.push(je_find_array[i][0]);	
//};

//for(i=0; i<not_position_high_array.length; i++){
//for(k=0; k<15; k++){
//if(je_find_array[k][0]==not_position_high_array[i]){last_je1.push(je_find_array[k][0])};		
	//};
//};


/*for(i=0; i<45; i++){
	for(k=0; k<45; k++){
	   if(je_find_array[i][0]==je_find2[k][0]&&je_find_array[i][1]>128&&je_find2[k][1]>415){last_je.push(je_find_array[i][0])};	
	};
	for(j=0; j<not_position_high_array.length; j++){
		 if(je_find_array[i][0]==not_position_high_array[j]&&je_find_array[i][1]>128){last_je.push(je_find_array[i][0])};
		if(je_find2[i][0]==not_position_high_array[j]&&je_find2[i][1]>415){last_je.push(je_find2[i][0])};	
	};
	};*/
/*for(i=0; i<45; i++){
	   if(je_find2[i][1]>1245){last_je.push(je_find2[i][0])};	
};
for(i=0; i<45; i++){
	   if(je_find_array[i][1]>126){last_je.push(je_find_array[i][0])};	
};*/

for(i=0; i<15; i++){
	for(k=0; k<15; k++){
	   if(je_find_array[i][0]==je_find2[k][0]){last_je.push(je_find_array[i][0])};	
	};
	for(j=0; j<not_position_high_array.length; j++){
		if(je_find_array[i][0]==not_position_high_array[j]){last_je.push(je_find_array[i][0])};
		if(je_find2[i][0]==not_position_high_array[j]){last_je.push(je_find2[i][0])};	
	};
	};	

for(i=0; i<15; i++){
	for(k=0; k<15; k++){
	   //if(je_find_array[i][0]==je_find2[k][0]){last_je1.push(je_find_array[i][0])};	
	};
	for(j=0; j<not_position_high_array.length; j++){
		if(je_find_array[i][0]==not_position_high_array[j]){last_je1.push(je_find_array[i][0])};
		if(je_find2[i][0]==not_position_high_array[j]){last_je1.push(je_find2[i][0])};	
	};
	};	
	
for(i=0; i<15; i++){
	for(k=0; k<15; k++){
		for(j=0; j<not_position_high_array.length; j++){
	   if(je_find_array[i][0]==je_find2[k][0]&&je_find_array[i][0]==not_position_high_array[j]){last_je2.push(je_find_array[i][0])}; 	
	};
		 //if(je_find_array[i][0]==not_position_high_array[j]&&je_find_array[i][1]>2490){last_je2.push(je_find_array[i][0])};
		 //if(je_find2[i][0]==not_position_high_array[j]&&je_find2[i][1]>1247){last_je2.push(je_find2[i][0])};		
	};
	};
//-----
last_je.unique();
last_je1.unique();
last_je2.unique();
page2_main.innerHTML+=dangchum[dangchum.length-1][7]+1+"회 추천 제외수 자동분석 결과<br><br>";	
page2_main.innerHTML+="제외수 A(예상)<br>";
	for(i=0; i<last_je.length; i++){	
if(last_je[i]<10){page2_main.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+last_je[i]+'&nbsp;</b>';}
else if(last_je[i]==10){page2_main.innerHTML+='<b class="small" style="background-color:orange">'+last_je[i]+'</b>';}
else if(last_je[i]<=20){page2_main.innerHTML+='<b class="small" style="background-color:blue">'+last_je[i]+'</b>';}
else if(last_je[i]<=30){page2_main.innerHTML+='<b class="small" style="background-color:red">'+last_je[i]+'</b>';}
else if(last_je[i]<=40){page2_main.innerHTML+='<b class="small" style="background-color:gray">'+last_je[i]+'</b>';}
else{page2_main.innerHTML+='<b class="small" style="background-color:green">'+last_je[i]+'</b>';};
if((i+1)%10==0){page2_main.innerHTML+="<br>";};
};
page2_main.innerHTML+="<br>제외수 A+(유력)<br>";	
for(i=0; i<last_je1.length; i++){	
if(last_je1[i]<10){page2_main.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+last_je1[i]+'&nbsp;</b>';}
else if(last_je1[i]==10){page2_main.innerHTML+='<b class="small" style="background-color:orange">'+last_je1[i]+'</b>';}
else if(last_je1[i]<=20){page2_main.innerHTML+='<b class="small" style="background-color:blue">'+last_je1[i]+'</b>';}
else if(last_je1[i]<=30){page2_main.innerHTML+='<b class="small" style="background-color:red">'+last_je1[i]+'</b>';}
else if(last_je1[i]<=40){page2_main.innerHTML+='<b class="small" style="background-color:gray">'+last_je1[i]+'</b>';}
else{page2_main.innerHTML+='<b class="small" style="background-color:green">'+last_je1[i]+'</b>';};
if((i+1)%10==0){page2_main.innerHTML+="<br>";};
};
page2_main.innerHTML+="<br>제외수 A++(매우유력)<br>";	
for(i=0; i<last_je2.length; i++){	
if(last_je2[i]<10){page2_main.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+last_je2[i]+'&nbsp;</b>';}
else if(last_je2[i]==10){page2_main.innerHTML+='<b class="small" style="background-color:orange">'+last_je2[i]+'</b>';}
else if(last_je2[i]<=20){page2_main.innerHTML+='<b class="small" style="background-color:blue">'+last_je2[i]+'</b>';}
else if(last_je2[i]<=30){page2_main.innerHTML+='<b class="small" style="background-color:red">'+last_je2[i]+'</b>';}
else if(last_je2[i]<=40){page2_main.innerHTML+='<b class="small" style="background-color:gray">'+last_je2[i]+'</b>';}
else{page2_main.innerHTML+='<b class="small" style="background-color:green">'+last_je2[i]+'</b>';};
if((i+1)%10==0){page2_main.innerHTML+="<br>";};
};
page2_main.innerHTML+="<br><br>";
};
//-----------------------------------------
function basic_setting(){
	for(i=0; i<45; i++){
	number_array.push(new bindo_number(i+1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[],[]));
	positionsu_array.push(new positionsu(i+1,0,0,0,0,0,0,0));
	};
	for(i=0; i<10; i++){
	lastsu_array.push(new lastsu(i,0,0,0,0,0,0,0,0,0));
	};
};	

positionsu = function(num,p1,p2,p3,p4,p5,p6,p7){
	    this.num=num;
		this.p1=p1;
		this.p2=p2;
		this.p3=p3;
		this.p4=p4;
		this.p5=p5;
		this.p6=p6;
		this.p7=p7;
	
	
	}	


lastsu = function(lastnum,su1,su2,su3,su4,su5,su10,su30,su60,su100){
	    this.lastnum=lastnum;
		this.su1=su1;
		this.su2=su2;
		this.su3=su3;
		this.su4=su4;
		this.su5=su5;
		this.su10=su10;
		this.su30=su30;
		this.su60=su60;
		this.su100=su100;
	
	
	}

bindo_number = function(num,score,su,su1,su2,su3,su4,su5,su6,su7,su8,su9,su10,su15,su30,su60,su90,su100,su120,bscore,mscore2,mscore,appear,appear2){
	    this.num=num;
		this.score = score;
		this.su=su;
		this.su1=su1;
		this.su2=su2;
		this.su3=su3;
		this.su4=su4;
		this.su5=su5;
		this.su6=su6;
		this.su7=su7;
		this.su8=su8;
		this.su9=su9;
		this.su10=su10;
		this.su15=su15;
		this.su30=su30;
		this.su60=su60;
		this.su90=su90;
		this.su100=su100;
		this.su120=su120;
		this.bscore=bscore;
		this.mscore2=mscore2;
		this.mscore=mscore;
		this.appear=appear;
		this.appear2=appear2;
};	
//---------------------------------------
function page_info(aa){
aa.innerHTML="";
aa.innerHTML+="지난 회차("+last_lotto_game+"회) 당첨번호<br>";		
for(i=0; i<lastlotto.length-2; i++){
if(lastlotto[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lastlotto[i]+'&nbsp;</b>';}
else if(lastlotto[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+lastlotto[i]+'</b>';}
else if(lastlotto[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+lastlotto[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+lastlotto[i]+'</b>';}
};
aa.innerHTML+="보너스";	
if(lastlotto[6]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+lastlotto[6]+'&nbsp;</b>';}
else if(lastlotto[6]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+lastlotto[6]+'</b>';}
else if(lastlotto[6]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+lastlotto[6]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+lastlotto[6]+'</b>';}

aa.innerHTML+="<br>6~10주 미 출현수(보너스포함)<br>";	 
for(i=0; i<game510mi.length; i++){
if(game510mi[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+game510mi[i]+'&nbsp;</b>';}
else if(game510mi[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+game510mi[i]+'</b>';}
else if(game510mi[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+game510mi[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+game510mi[i]+'</b>';}
};
aa.innerHTML+="<br>11주 이상 미 출현수(보너스포함)<br>";	 	 
for(i=0; i<game10mi.length; i++){
if(game10mi[i]<10){aa.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+game10mi[i]+'&nbsp;</b>';}
else if(game10mi[i]==10){aa.innerHTML+='<b class="small" style="background-color:orange">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=20){aa.innerHTML+='<b class="small" style="background-color:blue">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=30){aa.innerHTML+='<b class="small" style="background-color:red">'+game10mi[i]+'</b>';}
else if(game10mi[i]<=40){aa.innerHTML+='<b class="small" style="background-color:gray">'+game10mi[i]+'</b>';}
else{aa.innerHTML+='<b class="small" style="background-color:green">'+game10mi[i]+'</b>';}
};
aa.innerHTML+="<br>";	
	
	};

//---------------------------
var help_msg;
var info_msg;
var change_count=0;
function change_word(){
	change_count++;
	if(change_count%2==0){page2_info.innerHTML=info_msg}
	else{page2_info.innerHTML=help_msg};
	};
//-----
function load_page2(){
page2_main1.innerHTML+="<br>최근 30게임 당첨번호 색깔별 정리<br><br>";
for(i=dangchum.length-1; i>=dangchum.length-30; i--){
page2_main1.innerHTML+=dangchum[i][7]+"회";
var ewal=0;
var yunbun=0;
var hol=0;
var jak=0;	
for(j=0; j<7; j++){
if(j==6){page2_main1.innerHTML+="보너스"};		
if(dangchum[i][j]<10){page2_main1.innerHTML+='<b class="small" style="background-color:orange">&nbsp'+dangchum[i][j]+'&nbsp;</b>';}
else if(dangchum[i][j]==10){page2_main1.innerHTML+='<b class="small" style="background-color:orange">'+dangchum[i][j]+'</b>';}
else if(dangchum[i][j]<=20){page2_main1.innerHTML+='<b class="small" style="background-color:blue">'+dangchum[i][j]+'</b>';}
else if(dangchum[i][j]<=30){page2_main1.innerHTML+='<b class="small" style="background-color:red">'+dangchum[i][j]+'</b>';}
else if(dangchum[i][j]<=40){page2_main1.innerHTML+='<b class="small" style="background-color:gray">'+dangchum[i][j]+'</b>';}
else{page2_main1.innerHTML+='<b class="small" style="background-color:green">'+dangchum[i][j]+'</b>';}
if(dangchum[i][j+1]-dangchum[i][j]==1){yunbun++;};
if(j<6){if(dangchum[i][j]%2==0){jak++;}else{hol++;};};
for(k=0; k<7; k++){
if(dangchum[i][j]==dangchum[i-1][k]){ewal++;};
};
};
page2_main1.innerHTML+="<br>이월수("+ewal+"개)";	
page2_main1.innerHTML+=", 연속번호("+yunbun+"개)";
page2_main1.innerHTML+=", 홀짝("+hol+":"+jak+")";	
page2_main1.innerHTML+="<br>";
};
//---------
page2_main2.innerHTML+="<br>5/10단위 구간별 출현빈도 정리<br>"	
page2_main2.innerHTML+="<br>5단위로 나누었을때 구간별 출현빈도<br>"	
page2_main2.innerHTML+="<br>최근 3게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col3.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col3.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col3.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col3.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col3.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col3.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col3.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col3.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col3.col8+"</span>";
page2_main2.innerHTML+="<br>최근 5게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col5.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col5.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col5.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col5.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col5.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col5.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col5.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col5.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col5.col8+"</span>";
page2_main2.innerHTML+="<br>최근 6~10게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col10.col0-col5.col0)+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+(col10.col1-col5.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col10.col2-col5.col2)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col10.col3-col5.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col10.col4-col5.col4)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col10.col5-col5.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col10.col6-col5.col6)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col10.col7-col5.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+(col10.col8-col5.col8)+"</span>";
page2_main2.innerHTML+="<br>최근 10게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col10.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col10.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col10.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col10.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col10.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col10.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col10.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col10.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col10.col8+"</span>";
page2_main2.innerHTML+="<br>최근 15게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col15.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col15.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col15.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col15.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col15.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col15.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col15.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col15.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col15.col8+"</span>";
page2_main2.innerHTML+="<br>최근 30게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col30.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col30.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col30.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col30.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col30.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col30.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col30.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col30.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col30.col8+"</span>";
page2_main2.innerHTML+="<br>최근 60게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col60.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col60.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col60.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col60.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col60.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col60.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col60.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col60.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col60.col8+"</span>";
page2_main2.innerHTML+="<br>최근 100게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+col.col0+"</span>"+"/"+
"<span style='background-color:orange; color:white;'>"+col.col1+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col.col2+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+col.col3+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col.col4+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+col.col5+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col.col6+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+col.col7+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col.col8+"</span>";

page2_main2.innerHTML+="<br><br>10단위로 나누었을때 구간별 출현빈도<br>"	
page2_main2.innerHTML+="<br>최근 5게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col5.col0+col5.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col5.col2+col5.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col5.col4+col5.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col5.col6+col5.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col5.col8+"</span>";

page2_main2.innerHTML+="<br>최근 6~10게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col10.col0+col10.col1-col5.col0-col5.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col10.col2+col10.col3-col5.col2-col5.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col10.col4+col10.col5-col5.col4-col5.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col10.col6+col10.col7-col5.col6-col5.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+(col10.col8-col5.col8)+"</span>";

page2_main2.innerHTML+="<br>최근 10게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col10.col0+col10.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col10.col2+col10.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col10.col4+col10.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col10.col6+col10.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col10.col8+"</span>";

page2_main2.innerHTML+="<br>최근 15게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col15.col0+col15.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col15.col2+col15.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col15.col4+col15.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col15.col6+col15.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col15.col8+"</span>";

page2_main2.innerHTML+="<br>최근 30게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col30.col0+col30.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col30.col2+col30.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col30.col4+col30.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col30.col6+col30.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col30.col8+"</span>";

page2_main2.innerHTML+="<br>최근 60게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col60.col0+col60.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col60.col2+col60.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col60.col4+col60.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col60.col6+col60.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col60.col8+"</span>";

page2_main2.innerHTML+="<br>최근 100게임<br>"
page2_main2.innerHTML+=
"<span style='background-color:orange; color:white;'>"+(col.col0+col.col1)+"</span>"+"/"+
"<span style='background-color:blue; color:white;'>"+(col.col2+col.col3)+"</span>"+"/"+
"<span style='background-color:red; color:white;'>"+(col.col4+col.col5)+"</span>"+"/"+
"<span style='background-color:gray; color:white;'>"+(col.col6+col.col7)+"</span>"+"/"+
"<span style='background-color:green; color:white;'>"+col.col8+"</span>";
//----------
page2_main3.innerHTML+="<br>최근 3/5/7/10/15게임 빈도별 정리 및 30게임 빈도구분<br> ";

page2_main3.innerHTML+="<br>최근 3게임 빈도 순위<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});	
number_array.sort(function(a,b){return a.su3-b.su3});	
for(k=0; k<45; k++){					
if(k%5==4){	
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su3+")<br>";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su3+")<br>";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su3+")<br>";};
}
else{
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su3+"),";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su3+"),";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su3+"),";};
	};
};

page2_main3.innerHTML+="<br>최근 5게임 빈도 순위<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});
number_array.sort(function(a,b){return a.su5-b.su5});	
for(k=0; k<45; k++){					
if(k%5==4){	
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su5+")<br>";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su5+")<br>";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su5+")<br>";};
}
else{
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su5+"),";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su5+"),";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su5+"),";};
	};
};

page2_main3.innerHTML+="<br>최근 7게임 빈도 순위<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});
number_array.sort(function(a,b){return a.su7-b.su7});
for(k=0; k<45; k++){					
if(k%5==4){	
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su7+")<br>";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su7+")<br>";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su7+")<br>";};
}
else{
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su7+"),";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su7+"),";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su7+"),";};
	};
};

page2_main3.innerHTML+="<br>최근 10게임 빈도 순위<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});
number_array.sort(function(a,b){return a.su10-b.su10});
for(k=0; k<45; k++){					
if(k%5==4){	
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su10+")<br>";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su10+")<br>";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su10+")<br>";};
}
else{
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su10+"),";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su10+"),";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su10+"),";};
	};
};



page2_main3.innerHTML+="<br>최근 15게임 빈도 순위<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});
number_array.sort(function(a,b){return a.su15-b.su15});
for(k=0; k<45; k++){					
if(k%5==4){	
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su15+")<br>";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su15+")<br>";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su15+")<br>";};
}
else{
if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].su15+"),";}
else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].su15+"),";}
else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].su15+"),";};
	};
};

page2_main3.innerHTML+="<br>숫자 옆 가로안의 내용은 (빈도환산점수)(몰림도)(최근 1/2/3/4/5/6/7/8/10/15/30/60/100게임당 출현빈도)입니다.<br><br>";
page2_main3.innerHTML+="<br>"+"빈도환산점수 평균값: "+((sum_score/45)/(sum_su/45)).toFixed(0);	
page2_main3.innerHTML+="<br>"+"몰림도 평균값: "+(sum_mscore/45).toFixed(0)+"<br>";
page2_main3.innerHTML+="<br>최근 30게임 빈도 0회 수<br> ";
number_array.sort(function(a,b){return a.bscore-b.bscore});	
for(k=0; k<45; k++){				
if(number_array[k].su30==0){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 1회 수<br> ";
for(k=0; k<45; k++){			
if(number_array[k].su30==1){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 2회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==2){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 3회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==3){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 4회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==4){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 5회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==5){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 6회 수<br> ";
for(k=0; k<45; k++){					
if(number_array[k].su30==6){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 7회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==7){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 8회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==8){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 9회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==9){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 10회 수<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30==10){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};

page2_main3.innerHTML+="<br>최근 30게임 빈도 11회 수 이상<br> ";
for(k=0; k<45; k++){				
if(number_array[k].su30>=11){
	bindo_array.b1.push(number_array[k].num);
	if(number_array[k].bscore<146){page2_main3.innerHTML+="<span style='background-color:#0cf;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else if(number_array[k].bscore<226){page2_main3.innerHTML+="<span style='background-color:#fc9;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	else{page2_main3.innerHTML+="<span style='background-color:#f30;'>"+number_array[k].num+"</span>("+number_array[k].bscore+")("+(number_array[k].mscore).toFixed(0)+")("+number_array[k].su1+"/"+number_array[k].su2+"/"+number_array[k].su3+"/"+number_array[k].su4+"/"+number_array[k].su5+"/"+number_array[k].su6+"/"+number_array[k].su7+"/"+number_array[k].su8+"/"+number_array[k].su10+"/"+number_array[k].su15+"/"+number_array[k].su30+"/"+number_array[k].su60+"/"+number_array[k].su100+")<br>";}
	};
};
//------
page2_main4.innerHTML+="[숫자]<br>최근 1/3/5/7/10/15/30/60/100게임당 출현빈도<br>최근 100게임 출현시 출현시점(몇게임전)<br>출현시 출현 간격<br>빈도당 환산점수/몰림도<br>"
page2_main4.innerHTML+="<br>"+"빈도환산점수 평균값: "+((sum_score/45)/(sum_su/45)).toFixed(0);	
page2_main4.innerHTML+="<br>"+"몰림도 평균값: "+(sum_mscore/45).toFixed(0)+"<br>";
for(k=0; k<45; k++){	
	
number_array.sort(function(a,b){return a.num-b.num});		
number_array[k].appear.sort(function(a,b){return a-b});			
if(number_array[k].su30==0){bindo[0]++;};
if(number_array[k].su30==1){bindo[1]++;};	
if(number_array[k].su30==2){bindo[2]++;};	
if(number_array[k].su30==3){bindo[3]++;};	
if(number_array[k].su30==4){bindo[4]++;};	
if(number_array[k].su30==5){bindo[5]++;};	
if(number_array[k].su30==6){bindo[6]++;};	
if(number_array[k].su30==7){bindo[7]++;};	
if(number_array[k].su30==8){bindo[8]++;};	
if(number_array[k].su30==9){bindo[9]++;};	
if(number_array[k].su30==10){bindo[10]++;};	
if(number_array[k].su30==11){bindo[11]++;};	
if(number_array[k].su30==12){bindo[12]++;};	
if(number_array[k].su30==13){bindo[13]++;};			

//number_array.sort(function(a,b){return b.score-a.score});
if(number_array[k].num<=10){
page2_main4.innerHTML+="<br>["+"<span style='background-color:orange; color:white;'>"+number_array[k].num+"</span>"+"번]<br>"+"빈도:"+number_array[k].su1+"회/"+number_array[k].su3+"회/"+number_array[k].su5+"회/"+number_array[k].su7+"회/"+number_array[k].su10+"회/"+number_array[k].su15+"회/"+number_array[k].su30+"회/"+number_array[k].su60+"회/"+number_array[k].su100+"회"+"<br>"+"출현시점(몇게임전):"+number_array[k].appear+"<br>"+"출현간격:"+number_array[k].appear2+"<br>"+"빈도환산/몰림:"+number_array[k].bscore+"점/"+(number_array[k].mscore).toFixed(0)+"점";
}
else if(number_array[k].num<=20){
page2_main4.innerHTML+="<br>["+"<span style='background-color:blue; color:white;'>"+number_array[k].num+"</span>"+"번]<br>"+"빈도:"+number_array[k].su1+"회/"+number_array[k].su3+"회/"+number_array[k].su5+"회/"+number_array[k].su7+"회/"+number_array[k].su10+"회/"+number_array[k].su15+"회/"+number_array[k].su30+"회/"+number_array[k].su60+"회/"+number_array[k].su100+"회"+"<br>"+"출현시점(몇게임전):"+number_array[k].appear+"<br>"+"출현간격:"+number_array[k].appear2+"<br>"+"빈도환산/몰림:"+number_array[k].bscore+"점/"+(number_array[k].mscore).toFixed(0)+"점";
}
else if(number_array[k].num<=30){
page2_main4.innerHTML+="<br>["+"<span style='background-color:red; color:white;'>"+number_array[k].num+"</span>"+"번]<br>"+"빈도:"+number_array[k].su1+"회/"+number_array[k].su3+"회/"+number_array[k].su5+"회/"+number_array[k].su7+"회/"+number_array[k].su10+"회/"+number_array[k].su15+"회/"+number_array[k].su30+"회/"+number_array[k].su60+"회/"+number_array[k].su100+"회"+"<br>"+"출현시점(몇게임전):"+number_array[k].appear+"<br>"+"출현간격:"+number_array[k].appear2+"<br>"+"빈도환산/몰림:"+number_array[k].bscore+"점/"+(number_array[k].mscore).toFixed(0)+"점";
}
else if(number_array[k].num<=40){
page2_main4.innerHTML+="<br>["+"<span style='background-color:gray; color:white;'>"+number_array[k].num+"</span>"+"번]<br>"+"빈도:"+number_array[k].su1+"회/"+number_array[k].su3+"회/"+number_array[k].su5+"회/"+number_array[k].su7+"회/"+number_array[k].su10+"회/"+number_array[k].su15+"회/"+number_array[k].su30+"회/"+number_array[k].su60+"회/"+number_array[k].su100+"회"+"<br>"+"출현시점(몇게임전):"+number_array[k].appear+"<br>"+"출현간격:"+number_array[k].appear2+"<br>"+"빈도환산/몰림:"+number_array[k].bscore+"점/"+(number_array[k].mscore).toFixed(0)+"점";
}
else{
page2_main4.innerHTML+="<br>["+"<span style='background-color:green; color:white;'>"+number_array[k].num+"</span>"+"번]<br>"+"빈도:"+number_array[k].su1+"회/"+number_array[k].su3+"회/"+number_array[k].su5+"회/"+number_array[k].su7+"회/"+number_array[k].su10+"회/"+number_array[k].su15+"회/"+number_array[k].su30+"회/"+number_array[k].su60+"회/"+number_array[k].su100+"회"+"<br>"+"출현시점(몇게임전):"+number_array[k].appear+"<br>"+"출현간격:"+number_array[k].appear2+"<br>"+"빈도환산/몰림:"+number_array[k].bscore+"점/"+(number_array[k].mscore).toFixed(0)+"점";
}

};
//-------	
page2_main5.innerHTML+="<br>최근 3게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su3+")";	 
	 };
page2_main5.innerHTML+="<br><br>최근 5게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su5+")";	 
	 };
page2_main5.innerHTML+="<br><br>최근 10게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su10+")";	 
	 };
page2_main5.innerHTML+="<br><br>최근 30게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su30+")";	 
	 };	 	
page2_main5.innerHTML+="<br><br>최근 60게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su60+")";	 
	 };	 		 
page2_main5.innerHTML+="<br><br>최근 100게임 끝수별 출현 빈도 누적<br> ";
 for(k=0; k<10; k++){
page2_main5.innerHTML+="<span style='background-color:orange; color:white;'>"+lastsu_array[k].lastnum+"</span>"+"("+lastsu_array[k].su100+")";	 
	 };
page2_main5.innerHTML+="<br><br>최근 30게임 출현 끝수<br><br> ";
for(i=1; i<31; i++){
page2_main5.innerHTML+=johab_array[johab_array.length-i]+"("+dangchum[dangchum.length-i][7]+"회)"+"<br>";
};	 	 		 	 	 	 
//------
page2_main6.innerHTML+="<br>최근 100게임 5단위 구간별 출연숫자 연속 추적<br>다음의 ?안은 과연 어떤 수로 채워질까요?<br>"
page2_main6.innerHTML+=
"<br>1~5 구간 출현번호 추적<br>"+"<div style='background-color:#FC0; color:white;'><span>"+col.array0+"</span>,?</div>"+
"<br>6~10 구간 출현번호 추적<br>"+"<div style='background-color:#FC0; color:white;'><span>"+col.array1+"</span>,?</div>"+
"<br>11~15 구간 출현번호 추적<br>"+"<div style='background-color:blue; color:white;'><span>"+col.array2+"</span>,?</div>"+
"<br>16~20 구간 출현번호 추적<br>"+"<div style='background-color:blue; color:white;'><span>"+col.array3+"</span>,?</div>"+
"<br>21~25 구간 출현번호 추적<br>"+"<div style='background-color:red; color:white;'><span>"+col.array4+"</span>,?</div>"+
"<br>26~30 구간 출현번호 추적<br>"+"<div style='background-color:red; color:white;'><span>"+col.array5+"</span>,?</div>"+
"<br>31~35 구간 출현번호 추적<br>"+"<div style='background-color:gray; color:white;'><span>"+col.array6+"</span>,?</div>"+
"<br>36~40 구간 출현번호 추적<br>"+"<div style='background-color:gray; color:white;'><span>"+col.array7+"</span>,?</div>"+
"<br>41~45 구간 출현번호 추적<br>"+"<div style='background-color:green; color:white;'><span>"+col.array8+"</span>,?</div>";
//-----
	};	
function page2_1(){
change_count=0;	
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);
page2_main2.style.display="none";
page2_main3.style.display="none";
page2_main4.style.display="none";
page2_main5.style.display="none";
page2_main6.style.display="none";
page2_main1.style.display="block";	
help_msg="<br>도움말<br><br>1.최근 30게임의 당첨번호를 확인할 수 있으며 숫자를 10단위로 구간을 나누어 색깔을 달리하여 그 결과를 출력합니다.<br><br>2.당첨번호 추세를 통해 대세구간을 예측하고 조합구성시 40번대의 포함빈도와 이월수 결정 여부를 결정하도록 합니다.<br><br>3.이월수는 보너스 번호를 포함하였고 홀짝과 연속번호는 보너스 번호를 포함시키지 않았습니다."
info_msg="<br>활용Tip<br><br>1.40번대 녹색공이 2회 연속 미출현한 경우 조합 구성시 40번대의 빈도를 높여 보세요<br><br>2.최근 대세구간으로 전환된 경우 조합 구성시 그 구간에서 1수 이상 포함시켜 보세요<br><br>3.이전 회차시 이월수가 나오지 않았을 경우 조합구성시 이월수를 포함하는 조합 비중을 늘려 보세요<br><br>4.빈도수가 과도했던 구간이 힘이 약해진다면 조합 구성시 제외시켜 보세요<br><br>5.조합구성시 구간별 비중은 321과 2211인 경우가 많습니다.<br><br>6.이전 회차시 제외된 구간은 1수 이상 포함시켜 보세요" ;
page2_info.innerHTML=info_msg;
};
function page2_2(){	
change_count=0;
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);
page2_main1.style.display="none";
page2_main3.style.display="none";
page2_main4.style.display="none";
page2_main5.style.display="none";
page2_main6.style.display="none";
page2_main2.style.display="block";
help_msg="<br>도움말<br><br>1.당첨조합에 포함된 번호를 5단위와 10단위의 구간별로 나누어 어느 구간의 수가 많이 출현하였는지를 보여줍니다.<br><br>2.최근 대세인 구간과 약세인 구간을 파악할 수 있습니다.<br><br>3.다음회차에 어느 구간에서 몇개의 숫자의 나올 것인지 예측하시는데 활용하시기 바랍니다.<br><br>4.5게임당 5구간별 평균빈도는 3.89입니다. 즉 5구간에서 4번정도 출현하는 것이 산술적인 평균값입니다.<br>" 
info_msg="<br>활용Tip<br><br>1.이전에 빈도수가 높았던 구간은 최근에 빈도수가 줄어들 확률이 높습니다.<br><br>2.최근에 빈도수가 지나치게 높다면 곧 빈도수가 급격히 줄어들 확률이 높아집니다.<br><br>3.조합 구성시 최근 5게임에서 빈도수가 가장 작은 구간의 수를 포함해 보세요<br><br>4.빈도수가 높고 대세가 꺽이는 구간은 조합 구성시 제외시켜 보세요<br><br>5.최근 5게임,6~10게임,10게임을 중점적으로 분석하셔서 전멸구간을 예측해보세요";
page2_info.innerHTML=info_msg;	
};
function page2_3(){	
change_count=0;
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);
page2_main1.style.display="none";
page2_main2.style.display="none";
page2_main4.style.display="none";
page2_main5.style.display="none";
page2_main6.style.display="none";
page2_main3.style.display="block";	
help_msg="<br>도움말<br><br>1.최근 게임에 출현한 숫자를 빈도순으로 정리하였습니다.<br><br>2.30게임 빈도에서 같은 빈도일때에는 빈도환산점수가 낮을수록 앞쪽에 위치합니다. 즉 같은 빈도일때에는 차가운 수 일수록 앞쪽에 위치하고 뜨거운 수일 수록 뒤쪽에 위치합니다.<br><br>3.가장 중요한 최근 30게임(최근 6개월) 빈도에서는 최근 출몰정도에 따라 색깔별로 분류하여 보기 쉽게 하였습니다.";
info_msg="<br>활용Tip<br><br>1.조합구성시 최근 5게임 빈도가 2이상인 수가 평균 1수(1~2수)출현 합니다.<br><br>2.조합 구성시 7게임 빈도 3이상인 수에서 1수 정도를 포함시켜 보세요.<br><br>3.최근 30게임 빈도 3회 이내(0~2빈도)인 수에서는 평균 1수(1~2수)정도 출현합니다.<br><br>4.최근 30게임 빈도 7회 이상에서 평균 1수(1~2수) 정도 출현합니다.<br><br>5.평균적으로 최근 30게임 빈도에서 빨간색인 수가 평균 2개, 파란색 수가 2개, 갈색 수가 3개 정도로 출현합니다.";
page2_info.innerHTML=info_msg;
};
function page2_4(){	
change_count=0;
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);
page2_main1.style.display="none";
page2_main3.style.display="none";
page2_main2.style.display="none";
page2_main5.style.display="none";
page2_main6.style.display="none";
page2_main4.style.display="block";
help_msg="<br>도움말<br><br>1.각 숫자별로 최근게임당 빈도,출현한 이전게임,출현간격을 집계하고 이를 토대로 빈도당환산점수와 몰림도를 측정한 결과입니다.<br><br>용어설명<br><br>1.빈도당환산점수:최근출현빈도에 가중치를 둔 빈도값을 출현빈도수로 나눈 값입니다. 점수가 높을수록 최근에 출현 확률이 높은 수(뜨거운수)입니다. 빈도수를 반영하기에 빈도가 적으면 큰폭으로 점수가 올라가지만 빈도가 많은 수록 점수가 크게 올라가지는 않습니다. 즉 한동안 나오지 않다가 몰려나오는 경우에 점수가 크게 올라갑니다.<br><br>2.몰림도:몰림도는 연속해서 몰아나오는 경우에 가중치를 두어 집계한 값입니다. 즉 몰림도가 높을수록 몰아나오는 경향이 높았던 수입니다.";
info_msg="<br>활용Tip<br><br>1.조합구성시 빈도당 환산점수가 높은 수와 낮은 수, 그리고 중간인 수를 적절히 조합해 보세요.<br><br>2.평균적으로 빈도당 환산점수가 높은 수가 1~2개, 낮은 수가 1~2개, 중간인 수가 2~3개 정도 출현합니다.<br><br>3.몰림도가 높은 수가 최근 출몰했다면 연속 출현하거나 조만간 재출현할 확률이 높으며 최근에 출몰하지 않기 시작한다면 당분간 출현하지 않을 확률이 높습니다.<br><br>4.몰림도가 낮은 수는 드문 드문 출현한다는 것을 의미합니다. 이런 수들은 평균 7게임~10게임 정도에 한 번 정도 꼴로 출현합니다.";
page2_info.innerHTML=info_msg;	
};
function page2_5(){	
change_count=0;
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);
page2_main1.style.display="none";
page2_main3.style.display="none";
page2_main4.style.display="none";
page2_main2.style.display="none";
page2_main6.style.display="none";
page2_main5.style.display="block";
help_msg="<br>도움말<br><br>1.최근 100게임에 출현한 출현한 숫자의 끝수를 집계한 결과입니다.<br><br>2.여러분은 다음회차에 어떤 끝수가 나올거라 예상하시는지요?<br>"
info_msg="<br>활용Tip<br><br>1.평균적으로 이전 회차에 출현한 끝수가 2~3개정도는 다시 출현하는 경향을 보입니다.조합 구성시 참고바랍니다.<br><br>2.최근 3게임동안 출현하지 않은 끝수를 가진 숫자들은 곧 출현할 확률이 높습니다.<br><br>3.최근 10게임동안 출현빈도가 높은 끝수는 향후 출현 확률이 점점 낮아질 가능성이 높습니다.<br><br>4.최근 10게임동안 출현빈도가 적은 끝수는 향후 출현 확률이 점점 높아질 가능성이 높습니다.<br><br>5.평균적으로 동끝수가 1회정도 나옵니다. 조합시 같은 끝수를 넣어 조합해 보세요<br><br>6.1~5끝을 가진 숫자가 더 많기 때문에 상대적으로 이들 끝수는 빈도가 높다는 점을 고려하셔야 합니다.<br>";
page2_info.innerHTML=info_msg;	
};
function page2_6(){
change_count=0;
myScroll2.scrollTo(0,0);
myScroll3.scrollTo(0,0);	
page2_main1.style.display="none";
page2_main3.style.display="none";
page2_main4.style.display="none";
page2_main5.style.display="none";
page2_main2.style.display="none";
page2_main6.style.display="block";
help_msg="<br>도움말<br><br>1.최근 100게임에 출현한 숫자를 5단위 구간별로 나누어 연속 추적한 결과입니다.<br><br>2.과거에서부터 최근의 순서로 나열되었습니다.<br><br>3.여러분은 다음의 ?안을 어떤 수가 채울 거라 생각하시는지요? ";
info_msg="<br>활용Tip<br><br>1.연속 추적한 결과를 살펴보면서 각 구간별로 다음회차에 등장할 수를 1~2수 정도 뽑아보세요!<br><br>2.자신이 예측한 수를 조합에 포함시킴으로 해서 보다 재미있게 로또를 즐기실 수 있습니다.<br><br>3.한동안 나오지 않은 수와 몰려서 나온 수를 유의깊게 살펴보세요.";
page2_info.innerHTML=info_msg;	
};
//-----------------------
function page3_1(){	
myScroll5.scrollTo(0,0);	
if(filter_goal_2==1){page3_main.innerHTML="<h3>필터링 안내</h3><h4>1.필터링은 해당회차의 고정수와 제외수, 전멸구간, 이월수 비중 ,연속번호 비중 ,예상 끝수를 선별하고 검수하기 위한 도구로 개발되었습니다.</h4><h4>2.해당회차의 고정수와 제외수를 선별하고 전멸구간 및 이월수 비중, 연속번호 비중, 예상 끝수 등을 결정하는데 필터링을 활용하실 수 있습니다.(가장 유력한 고정수와 제외수를 선별시 사용)</h4><h4>3.단순 빈도에 숫자간의 궁합은 반영되지 않습니다. 따라서 고정수와 제외수가 유력한 한 수를 찾기 위함이지 상위권에 속한다 해서 묶어 사용하거나 하위권에서 속한다 하여 제외하시면 최악의 조합을 구성하실 수도 있습니다. 숫자간 궁합은 메인화면의 기본추출분석기에서 고정수와 제외수 입력시 별도로 알려드리며 묶어서 사용하실때는 궁합 필터링 결과를 참조하세요.</h4><h4>4.필터링에는 기본필터링과 빈도필터링이 사용됩니다.(1등 추천조합 필터링과 동일)</h4>A.기본 필터링에 사용된 통계는 다음과 같습니다.<br>홀짝비,전멸구간,끝수합,고저,고저차,이월수,소수/합성수/3배수비,연속번호,5주이내출현수,6~10주미출현수,11주이상미출현수<br><br>B.빈도 필터링에 사용된 통계는 다음과 같습니다.<br>빈도환산점수(뜨거운수,차가운수),최근30게임빈도분산,최근60게임빈도분산,최근90게임빈도분산 <h3>필터링 특징</h3>1.평균 500게임의 로또조합을 연속 자동 추출<br><br>2.해당회차 기본 필터링으로 1차 선별<br><br>3.해당회차 빈도 필터링으로 2차 선별<br><br>4.최종 선별된 조합에 출현한 숫자 및 전멸구간,이월수,연속번호,끝수의 빈도수를 누적 합산<br><br>";}else{page3_main.innerHTML="<h3>필터링+ 안내</h3><h4>1.필터링+는 기존 필터링에 비해 약 10배 많은 표본 개체를 사용하기 때문에 오랜 시간이 필요합니다.</h4><h4>2.필터링+는 기존 필터링에 비해 보다 높은 정확성을 필요로 할때 사용합니다.</h4><h4>3.필터링에는 기본필터링과 빈도필터링이 사용됩니다.(1등 추천조합 필터링과 동일)</h4>A.기본 필터링에 사용된 통계는 다음과 같습니다.<br>홀짝비,전멸구간,끝수합,고저,고저차,이월수,소수/합성수/3배수비,연속번호,5주이내출현수,6~10주미출현수,11주이상미출현수<br><br>B.빈도 필터링에 사용된 통계는 다음과 같습니다.<br>빈도환산점수(뜨거운수,차가운수),최근30게임빈도분산,최근60게임빈도분산,최근90게임빈도분산 <h3>필터링+ 특징</h3>1.평균 5000게임의 로또조합을 연속 자동 추출<br><br>2.해당회차 기본 필터링으로 1차 선별<br><br>3.해당회차 빈도 필터링으로 2차 선별<br><br>4.최종 선별된 조합에 출현한 숫자 및 전멸구간,이월수,연속번호,끝수의 빈도수를 누적 합산<br><br>"};
};

function page3_2(){	
myScroll5.scrollTo(0,0);
var info=document.getElementById("page3_info");
page_info(info);
};

function page6_1(){	
myScroll9.scrollTo(0,0);	
var info=document.getElementById("page6_info");
page_info(info);
};
//----------------------------------
//window.localStorage.setItem("last_lotto_game",last_lotto_game);
//window.localStorage.clear();	

function page4_1(){	
myScroll11.scrollTo(0,0);	
//auto_reset();
//auto_restart();
var info=document.getElementById("page4_info");
page_info(info);
//page4_info.innerHTML="<h2>추출분석기+</h2>";
};
function page5_1(){
myScroll7.scrollTo(0,0);
var info=document.getElementById("page5_info");
page_info(info);	

//auto_reset();
//auto_restart();

if(goal_2==1){	
//page5_info.innerHTML="<h2>1등 추천조합</h2>";	
auto_recommend_controll.style.visibility="hidden";
page5_btn1.style.top="140px";
page5_btn2.style.top="140px";
wrapper7.style.top="195px"; 	
page5_main.innerHTML="<h2>"+(last_lotto_game+1)+"회 1등 추천조합을 추출합니다.</h2><h3>1등 추천조합이란?</h3>1.기본적인 조합의 우수성 뿐만 아니라 해당회차 자동분석 결과를 바탕으로 통계/확률적으로 1등번호가 가져야만 할 기본 조건을 충족하는 우수조합(1등기준)만이 필터링(기본 필터링+빈도 필터링)을 통해 걸러져 최종 추출 되어집니다. 최종 선별 비율은 10% 내외로 총 815만 조합 중 매주 평균 80만 조합 정도입니다.<br><br>A.기본 필터링에 사용된 통계는 다음과 같습니다.<br>홀짝비,전멸구간,끝수합,고저,고저차,이월수,소수/합성수/3배수비,연속번호,5주이내출현수,6~10주미출현수,11주이상미출현수<br><br>B.빈도 필터링에 사용된 통계는 다음과 같습니다.<br>빈도환산점수(뜨거운수,차가운수),최근30게임빈도분산,최근60게임빈도분산,최근90게임빈도분산<br><br>2.1등 추천조합은 1회 5조합씩 무료버전 매주 최대 10회 총 50조합, 유료버전 매주 최대 50회 총 250조합 추출하실 수 있습니다.<br><br>3.무작위의 조합들을 개별 검사하여 우수한 조합을 추출하는 형식이기 때문에 사용자에게 중복된 조합이 배정될 확률이 높습니다. 따라서 매주  1등 추천조합의 사용자 최대 정원은 3000명으로 제한됩니다.(공지사항 필독)<br><br>4.1등 추천조합은 고순위 당첨에 특화되어 있어 조합의 기본적인 분산도가 일반 무작위 선별에 비해 크고 조합 구성 자체가 계산되어진 구조를 이루기 때문에 저 순위 당첨율(5등기준)은 일반 조합에 비해 낮다는 단점이 있습니다. 5등 당첨이 목표이신 분들은 5등 추천조합을 활용하시기 바랍니다. <br><br>";	}
else if(goal_2==2){
//page5_info.innerHTML="<h2>1등 추천조합+</h2>";	
auto_recommend_controll.style.visibility="visible"; 
page5_btn1.style.top="275px";
page5_btn2.style.top="275px";
wrapper7.style.top="335px";	
page5_main.innerHTML="<h2>"+(last_lotto_game+1)+"회 1등 추천조합을 추출합니다.</h2><h3>1등 추천조합이란?</h3>1.기본적인 조합의 우수성 뿐만 아니라 해당회차 자동분석 결과를 바탕으로 통계/확률적으로 1등번호가 가져야만 할 기본 조건을 충족하는 우수조합(1등기준)만이 필터링(기본 필터링+빈도 필터링)을 통해 걸러져 최종 추출 되어집니다. 최종 선별 비율은 10% 내외로 총 815만 조합 중 매주 평균 80만 조합 정도입니다.<br><br>A.기본 필터링에 사용된 통계는 다음과 같습니다.<br>홀짝비,전멸구간,끝수합,고저,고저차,이월수,소수/합성수/3배수비,연속번호,5주이내출현수,6~10주미출현수,11주이상미출현수<br><br>B.빈도 필터링에 사용된 통계는 다음과 같습니다.<br>빈도환산점수(뜨거운수,차가운수),최근30게임빈도분산,최근60게임빈도분산,최근90게임빈도분산<br><br>2.1등 추천조합 추출시에 자신이 분석한 분석 정보를 추가로 입력하시면 1등 추천번호 내에서 자신만의 1등 추천번호를 선별하실 수 있습니다. 추가적으로 입력하실 수 있는 사항은 고정수,제외수,기본설정,이월수,연속번호,전멸구간,끝수 최대 3수입니다.(조건이 까다롭다면 검출시간이 오래 걸릴 수 있으며 혹 존재하지 않는 조합이라면 추출되지 않으니 주의하시기 바랍니다.)<br><br>3.고정수,제외수,기본설정 스위치 버튼을 on상태로 하시면 메인화면의 조합추출분석기에 입력된 고정수,제외수,기본설정을 적용시킬 수 있습니다.<br><br>4.1등 추천조합은 1회 5조합씩 무료버전 매주 최대 10회 총 50조합, 유료버전 매주 최대 50회 총 250조합 추출하실 수 있습니다.<br><br>5.무작위의 조합들을 개별 검사하여 우수한 조합을 추출하는 형식이기 때문에 사용자에게 중복된 조합이 배정될 확률이 높습니다. 따라서 매주  1등 추천조합의 사용자 최대 정원은 3000명으로 제한됩니다.(공지사항 필독)<br><br>6.1등 추천조합은 고순위 당첨에 특화되어 있어 조합의 기본적인 분산도가 일반 무작위 선별에 비해 크고 조합 구성 자체가 계산되어진 구조를 이루기 때문에 저 순위 당첨율(5등기준)은 일반 조합에 비해 낮다는 단점이 있습니다. 5등 당첨이 목표이신 분들은 5등 추천조합을 활용하시기 바랍니다. <br><br>";	}
else if(goal_2==3){
//page5_info.innerHTML="<h2>5등 추천조합</h2>";	
auto_recommend_controll.style.visibility="visible";
page5_btn1.style.top="275px";
page5_btn2.style.top="275px";
wrapper7.style.top="335px";	 	
page5_main.innerHTML="<h2>"+(last_lotto_game+1)+"회 5등 추천조합을 추출합니다.</h2><h3>5등 추천조합이란?</h3>1.5등 조건에 부합하는 기본적인 조합 구성 뿐만 아니라 해당회차 자동분석 결과를 토대로 통계/확률적으로 최소한의 기본 조건을 일부 충족하는 조합(5등기준)이 필터링을 통해 걸러져 최종 추출되어집니다. 최종 선별 비율은 10% 내외로 총 815만 조합 중 매주 평균 80만 조합 정도입니다.<br><br>2.5등 추천조합은 1회 5조합씩 매주 제한없이 무료로 제공 받으실 수 있습니다.<br><br>3.고정수,제외수,기본설정 스위치 버튼을 on상태로 하시면 메인화면의 조합추출분석기에 입력된 고정수,제외수,기본설정을 적용시킬 수 있습니다.<br><br>4.5등 추천조합 추출시에 자신이 분석한 분석 정보를 추가로 입력하시면 5등 추천번호 내에서 자신만의 5등 추천번호를 선별하실 수 있습니다. 추가적으로 입력하실 수 있는 사항은 고정수,제외수,기본설정,이월수,연속번호,전멸구간,끝수 최대 3수입니다.(조건이 까다롭다면 검출시간이 오래 걸릴 수 있으며 혹 존재하지 않는 조합이라면 추출되지 않으니 주의하시기 바랍니다.)<br><br>5.5등 추천조합은 5등 당첨에 특화되어 있어 일반 무작위 선별에 비해 예상 구간 번호대의 몰림정도가 뚜렷한 특성을 지니기 때문에 낙첨될 확률은 크게 줄어드나 분산도가 일반 무작위 선별에 비해 좁고 한정된 예상수 위주의 조합을 하기 때문에 사실상 4등 이상의 당첨을 기대하기는 어렵다는 단점이 있습니다. 4등 이상의 당첨을 노리신다면 1등 추천 조합을 활용하시기 바랍니다.<br><br>";};
};
function show_number(){
myScroll.scrollTo(0,0);
number.style.display="block";
number1.style.display="none";
number2.style.display="none";
};
function show_number1(){
myScroll.scrollTo(0,0);
var info=document.getElementById("aa");
page_info(info);
number1.style.display="block";
number.style.display="none";
number2.style.display="none";
};
function show_number2(){
myScroll.scrollTo(0,0);
var info=document.getElementById("aa");
page_info(info);
number2.style.display="block";
number1.style.display="none";
number.style.display="none";
};

//-----------analysis old----------------- 
function lotto_analysis_old(){
	
//-------------최근 5게임 당첨번호 및 최근번호----------------------	
 for(i=(dangchum_old.length-5); i<dangchum_old.length; i++){
	 for(j=0; j<dangchum_old[i].length; j++){
		 game5every_old.push(dangchum_old[i][j]);
		 };
	  }; 
//-------------최근 10게임 당첨번호----------------------	
 for(i=(dangchum_old.length-10); i<dangchum_old.length; i++){
	 for(j=0; j<dangchum_old[i].length-1; j++){
		 game10every_old.push(dangchum_old[i][j]);
		 };
	  }; 		    
//------------5게임 출연수 및 5게임 미출현수 찾기----------------	
for(i=0; i<lotto_number_old.length; i++){
	var temp=0;
	 game5chularray_old[i]=new Array;
for(j=0; j<game5every_old.length-1; j++){
	      if(lotto_number_old[i]==game5every_old[j]){
			 // game5chul.push(lotto_number[i]);
			  temp++;
			  };
		  };
		     if(temp == 0){ 
			game5mi_old.push(lotto_number_old[i]);
			 };
		 game5chularray_old[i][0]=lotto_number_old[i];
		 game5chularray_old[i][1]=temp;		 
};
     //game5chul.sort(function(a,b){return a[0]-b[0]});
	 //game5chul.unique();

for(i=0; i<game5chularray_old.length; i++){
	if(game5chularray_old[i][1]!==0){game5chul_old.push(game5chularray_old[i])}
	};
//------------10게임 출연수 및 10게임 미출현수 찾기----------------	
for(i=0; i<lotto_number_old.length; i++){
	var temp=0;
for(j=0; j<game10every_old.length; j++){
	      if(lotto_number_old[i]==game10every_old[j]){
			  game10chul_old.push(lotto_number_old[i]);
			  temp++;
			  };
		  };
		     if(temp == 0){ 
             game10mi_old.push(lotto_number_old[i]);
			 };
};	 
    //game5chul.sort(function(a,b){return a[0]-b[0]});
	 game10chul_old.unique();	
//------------5~10게임 미출현수 찾기----------------	
for(i=0; i<game5mi_old.length; i++){
	var temp=0;
for(j=0; j<game10mi_old.length; j++){
	      if(game5mi_old[i]==game10mi_old[j]){
			  temp++;
			  };
		  };
		     if(temp == 0){ 
             game510mi_old.push(game5mi_old[i]);
			 };
};	 

};
function pre_old(){
myScroll12.scrollTo(0,0);		
dangchum_old=[];
count_old=count_old-1;
lotto_number_old=[];
number_array_old=[];
nextlotto_old=[];
nextlotto_old_array=[];
game5every_old=[];
game10every_old=[];
game5chularray_old=[];
game5chul_old=[];
game5chul2_old=[];
game10chul_old=[];
game5mi_old=[];
game10mi_old=[];
game510mi_old=[];	
	if(count_old>=1){
	basic_setting_old();
	calculate_old();
	lotto_analysis_old()
	show_old();}else{count_old=1; 
	var massage="존재하지 않는 회차입니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
	};	
	
	
	};
function next_old(){
myScroll12.scrollTo(0,0);		
dangchum_old=[];
count_old=count_old+1;
lotto_number_old=[];
number_array_old=[];
nextlotto_old=[];
nextlotto_old_array=[];
game5every_old=[];
game10every_old=[];
game5chularray_old=[];
game5chul_old=[];
game5chul2_old=[];
game10chul_old=[];
game5mi_old=[];
game10mi_old=[];
game510mi_old=[];	
	if(count_old<=50){
	basic_setting_old();
	calculate_old();
	lotto_analysis_old()
	show_old();}else{count_old=50; 
	var massage="최근 50게임까지만 복기 지원됩니다.";
    var title="알림";
	var button="확인";
	navigator.notification.alert(massage,alertcallback,title,button);
	};	
	

	
	};	
var dangchum_old=[];
var count_old=1;
var lotto_number_old=[];
var number_array_old=[];
var nextlotto_old=[];
var nextlotto_old_array=[];
var game5every_old=[];
var game10every_old=[];
var game5chularray_old=[];
var game5chul_old=[];
var game5chul2_old=[];
var game10chul_old=[];
var game5mi_old=[];
var game10mi_old=[];
var game510mi_old=[];
var sum_score_old=0;
var sum_su_old=0;
//---
function open_old(){
myScroll12.scrollTo(0,0);		
dangchum_old=[];
count_old=1;
lotto_number_old=[];
number_array_old=[];
nextlotto_old=[];
nextlotto_old_array=[];
game5every_old=[];
game10every_old=[];
game5chularray_old=[];
game5chul_old=[];
game5chul2_old=[];
game10chul_old=[];
game5mi_old=[];
game10mi_old=[];
game510mi_old=[];	
	
	basic_setting_old();
	calculate_old();
	lotto_analysis_old()
	show_old();
	
	};

function show_old(){
page7_main.innerHTML="";
nextlotto_old=dangchum[dangchum.length-count_old];
lastlotto_old=dangchum[(dangchum.length-count_old)-1];
//page7_main.innerHTML+=dangchum_old;
page7_main.innerHTML+="<br>"; 
page7_main.innerHTML+="<h2>&nbsp;&nbsp;"+nextlotto_old[7]+"회차 자동 복기</h2><h3>"+nextlotto_old[7]+"회차 1,2등 조합을 자동 복기한 자료입니다.<br>특징을 살펴보고 분석에 활용하시기 바랍니다.</h3>"+"<span style='color:red; font-size:12px;'>로또조또는 개인정보 보호를 위해 어떠한 개인정보도 수집하지 않으며 1등 추천조합 배정방식이 추출식 랜덤 배정(중복 배정 가능)이기 때문에 1등 추천조합에서 해당회차 1,2등 조합 배출 여부만 알 수 있을 뿐 배출된 조합을 실제로 배정받은 사용자수가 몇 명인지는 알 수가 없습니다.</span><br><br>";
for(k=0; k<7; k++){
if(k==6){page7_main.innerHTML+="bonus";};
if(nextlotto_old[k]<10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>&nbsp;"+nextlotto_old[k]+"&nbsp;</b>";}
else if(nextlotto_old[k]==10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>"+nextlotto_old[k]+"</b>";}
else if(nextlotto_old[k]<=20){
page7_main.innerHTML+="<b style='background-color:blue; color:white;'>"+nextlotto_old[k]+"</b>";}
else if(nextlotto_old[k]<=30){
page7_main.innerHTML+="<b style='background-color:red; color:white;'>"+nextlotto_old[k]+"</b>";}
else if(nextlotto_old[k]<=40){
page7_main.innerHTML+="<b style='background-color:gray; color:white;'>"+nextlotto_old[k]+"</b>";}
else{
page7_main.innerHTML+="<b style='background-color:green; color:white;'>"+nextlotto_old[k]+"</b>";}
}
//-------------

page7_main.innerHTML+="<br>";
page7_main.innerHTML+="<h3>&nbsp;&nbsp;출현 숫자별 빈도<h3>";
for(i=0; i<7; i++){nextlotto_old_array[i]= new Array;}
nextlotto_old_array[0]=[nextlotto_old[0],nextlotto_old[1],nextlotto_old[2],nextlotto_old[3],nextlotto_old[4],nextlotto_old[5]];
nextlotto_old_array[1]=[nextlotto_old[0],nextlotto_old[1],nextlotto_old[2],nextlotto_old[3],nextlotto_old[4],nextlotto_old[6]];
nextlotto_old_array[2]=[nextlotto_old[0],nextlotto_old[1],nextlotto_old[2],nextlotto_old[3],nextlotto_old[5],nextlotto_old[6]];
nextlotto_old_array[3]=[nextlotto_old[0],nextlotto_old[1],nextlotto_old[2],nextlotto_old[4],nextlotto_old[5],nextlotto_old[6]];
nextlotto_old_array[4]=[nextlotto_old[0],nextlotto_old[1],nextlotto_old[3],nextlotto_old[4],nextlotto_old[5],nextlotto_old[6]];
nextlotto_old_array[5]=[nextlotto_old[0],nextlotto_old[2],nextlotto_old[3],nextlotto_old[4],nextlotto_old[5],nextlotto_old[6]];
nextlotto_old_array[6]=[nextlotto_old[1],nextlotto_old[2],nextlotto_old[3],nextlotto_old[4],nextlotto_old[5],nextlotto_old[6]];
for(i=0; i<7; i++){nextlotto_old_array[i].sort(function(a,b){return a-b});}
//page7_main.innerHTML+=((sum_score_old/45)/(sum_su_old/45)).toFixed(0);	
//-------
	for(i=0; i<45; i++){
	for(k=0; k<7; k++){	
if(number_array_old[i].num==nextlotto_old[k]){
if(nextlotto_old[k]<10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>&nbsp;"+nextlotto_old[k]+"&nbsp;</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}
else if(nextlotto_old[k]==10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>"+nextlotto_old[k]+"</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}
else if(nextlotto_old[k]<=20){
page7_main.innerHTML+="<b style='background-color:blue; color:white;'>"+nextlotto_old[k]+"</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}
else if(nextlotto_old[k]<=30){
page7_main.innerHTML+="<b style='background-color:red; color:white;'>"+nextlotto_old[k]+"</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}
else if(nextlotto_old[k]<=40){
page7_main.innerHTML+="<b style='background-color:gray; color:white;'>"+nextlotto_old[k]+"</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}
else{
page7_main.innerHTML+="<b style='background-color:green; color:white;'>"+nextlotto_old[k]+"</b>"+number_array_old[i].su5+"/"+number_array_old[i].su10+"/"+number_array_old[i].su30+"/"+number_array_old[i].su60+"/"+number_array_old[i].su100+"(최근 5/10/30/60/100게임 출현빈도)<br>";}

	};};};	
page7_main.innerHTML+="<br>";
//-----------	
for (j=0; j<nextlotto_old_array.length; j++){		

var sum=0;
var junmul=0;
var junmul2=0;
var jak=0;
var hol=0;
var zero=0;
var one=0;
var two=0;
var three=0;
var four=0;
var yunbun=0;
var lastsu_array=[];
var sumlastsu=0;
var low=0;
var high=0;
var jugocha=0;
var sosu=0;
var samsu=0;
var habsu=6;
var game_10mi_old=[];
var game_510mi_old=[];
var game_5chul_old=[];
var game_10misu_old=0;
var game_510misu_old=0;
var game_5chulsu_old=0;
var last_lottosu_old=0;
var last_lotto_old=[];
var lotto_point=0;

for(i=0; i<nextlotto_old_array[j].length; i++){
	sum=sum+nextlotto_old_array[j][i];
	if(nextlotto_old_array[j][i]<=10){zero++}else if(nextlotto_old_array[j][i]<=20){one++}else if(nextlotto_old_array[j][i]<=30){two++}else if(nextlotto_old_array[j][i]<=40){three++}else{four++};
	if(nextlotto_old_array[j][i]%2==0){jak++}else{hol++};
	if(nextlotto_old_array[j][i+1]-nextlotto_old_array[j][i]==1){yunbun++;}
	lastsu_array.push(nextlotto_old_array[j][i]%10);
	sumlastsu+=nextlotto_old_array[j][i]%10;
	if(nextlotto_old_array[j][i]<=22){low++;}else{high++;};	
	for(k=0; k<sosu_number.length; k++){if(nextlotto_old_array[j][i]==sosu_number[k]){sosu++;habsu--;};};
if(nextlotto_old_array[j][i]%3==0&nextlotto_old_array[j][i]!==3){samsu++;habsu--;};	
	};
//-------	
if(zero==0){junmul++;};if(one==0){junmul++;};if(two==0){junmul++;};if(three==0){junmul++;};if(four==0){junmul++;junmul2++;};			
lastsu_array.sort(function(a,b){return a-b});
jugocha=nextlotto_old_array[j][5]-nextlotto_old_array[j][0];
//----------------
for(i=0; i<6; i++){
for(k=0; k<game10mi_old.length; k++){
	if(nextlotto_old_array[j][i]==game10mi_old[k]){game_10misu_old++; game_10mi_old.push(nextlotto_old_array[j][i])};
	};
for(k=0; k<game510mi_old.length; k++){
	if(nextlotto_old_array[j][i]==game510mi_old[k]){game_510misu_old++;game_510mi_old.push(nextlotto_old_array[j][i])};
	};
for(k=0; k<game5chul_old.length; k++){
	if(nextlotto_old_array[j][i]==game5chul_old[k][0]){game_5chulsu_old++;game_5chul_old.push(game5chul_old[k])};
	};
for(k=0; k<lastlotto_old.length-1; k++){
	if(nextlotto_old_array[j][i]==lastlotto_old[k]){last_lottosu_old++;last_lotto_old.push(lastlotto_old[k])};
	};					
};
var asd="";

if(game_10mi_old==""){game_10mi_old="없음"};if(game_510mi_old==""){game_510mi_old="없음"};
if(game_5chul_old==""){asd="없음"};if(last_lotto_old==""){last_lotto_old="없음"};
//-------
for(i=0;i<game_5chul_old.length;i++){
if(i<game_5chul_old.length-1){asd+=game_5chul_old[i][0]+"("+game_5chul_old[i][1]+"회), ";}
else{asd+=game_5chul_old[i][0]+"("+game_5chul_old[i][1]+"회)";};
};
//------
if(hol==3){lotto_point+=8;};
if(hol==2||hol==4){lotto_point+=5;};
if(hol==1||hol==5){lotto_point+=2;};
//----------------------------------------
if(yunbun==1){lotto_point+=8;};
if(yunbun==0){lotto_point+=5;};
if(yunbun==2){lotto_point+=2;};
//----------------------------------------
if(sum>=120&sum<=160){lotto_point+=8;}
else if((sum>=90&sum<=119)||(sum>=161&sum<=180)){lotto_point+=5;}
else{lotto_point+=2;};
//------------------------------------------------------------
if((samsu+sosu)==3){lotto_point+=8;};
if((samsu+sosu)==5||(samsu+sosu)==4){lotto_point+=5;};
if((samsu+sosu)==2){lotto_point+=2;};
//--------------------------------------------------------
if(low==3){lotto_point+=8;};
if(low==2||low==4){lotto_point+=5;};
if(low==1||low==5){lotto_point+=2;};
//-----------------------------------------------------
if(zero<4&one<4&two<4&three<4&four<4&(junmul==1)){lotto_point+=13;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==0)){lotto_point+=7;};
if(zero<4&one<4&two<4&three<4&four<4&(junmul==2&junmul2==1)){lotto_point+=10;};
//---------------------------------------------------------
if(jugocha>=30&jugocha<=40){lotto_point+=8;};
if((jugocha>=25&jugocha<=29)||(jugocha>=41&jugocha<=42)){lotto_point+=4;};
//---------------------------------------------------------
if(sumlastsu>=21&sumlastsu<=30){lotto_point+=8;};
if((sumlastsu>=16&sumlastsu<=20)||(sumlastsu>=31&sumlastsu<=35)){lotto_point+=4;};
//-----------------------------------------------------------------
if(last_lottosu_old==1){lotto_point+=13;};
if(last_lottosu_old==0){lotto_point+=8;};
if(last_lottosu_old==2){lotto_point+=3;};
//-------------------------------------------------------------------
if(game_5chulsu_old==3){lotto_point+=18;};
if(game_5chulsu_old==4){lotto_point+=10;};
if(game_5chulsu_old==2){lotto_point+=12;};
if(game_5chulsu_old==5){lotto_point+=6;};
//-------
var game302bindo=0;
var game303bindo=0;
var game304bindo=0;
var game305bindo=0;
var game306bindo=0;
var game307bindo=0;
//----------
var game606bindo=0;
var game607bindo=0;
var game608bindo=0;
var game609bindo=0;
var game6010bindo=0;
var game6011bindo=0;
var game6012bindo=0;
var game6013bindo=0;
//-----------
var game9010bindo=0;
var game9011bindo=0;
var game9012bindo=0;
var game9013bindo=0;
var game9014bindo=0;
var game9015bindo=0;
var game9016bindo=0;
var game9017bindo=0;
var game9018bindo=0;
//----
var gamehotsu=0;
var gamecoldsu=0;
var gamenormalsu=0;

var game5chul_2times=false;
var game5chul_1times=false;
for(i=0;i<game_5chul_old.length;i++){
if(game_5chul_old[i][1]>=2){game5chul_2times=true;}
if(game_5chul_old[i][1]==1){game5chul_1times=true;}
};

for(k=0;k<number_array_old.length;k++){
	for(i=0;i<6;i++){
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30<=2){game302bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30==3){game303bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30==4){game304bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30==5){game305bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30==6){game306bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su30>=7){game307bindo++;}
//------
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60<=6){game606bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==7){game607bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==8){game608bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==9){game609bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==10){game6010bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==11){game6011bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60==12){game6012bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su60>=13){game6013bindo++;}
	//----------
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90<=10){game9010bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==11){game9011bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==12){game9012bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==13){game9013bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==14){game9014bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==15){game9015bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==16){game9016bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90==17){game9017bindo++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].su90>=18){game9018bindo++;}
	//---
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].bscore>226){gamehotsu++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&number_array_old[k].bscore<146){gamecoldsu++;}
	if((nextlotto_old_array[j][i]==number_array_old[k].num)&&(number_array_old[k].bscore>=146&&number_array_old[k].bscore<=226)){gamenormalsu++;}
	};};

if(j==0){page7_main.innerHTML+="<h2>&nbsp;&nbsp;&nbsp;"+nextlotto_old[7]+"회 1등조합</h2>"}else{page7_main.innerHTML+="<h2>&nbsp;&nbsp;&nbsp;"+nextlotto_old[7]+"회 2등조합</h2>"};
	
if(lotto_point>=65&&lotto_point<=85&&(game_10mi_old!=="없음"||game_510mi_old!=="없음")&&game302bindo<=2&&game307bindo<=2&&game303bindo<=2&&game304bindo<=2&&game305bindo<=2&&game306bindo<=2&&gamehotsu>=1&&gamecoldsu>=1&&gamenormalsu>=2&&game606bindo<=2&&game607bindo<=2&&game608bindo<=2&&game609bindo<=2&&game6010bindo<=2&&game6011bindo<=2&&game6012bindo<=2&&game6013bindo<=2&&game9010bindo<=2&&game9011bindo<=2&&game9012bindo<=2&&game9013bindo<=2&&game9014bindo<=2&&game9015bindo<=2&&game9016bindo<=2&&game9017bindo<=2&&game9018bindo<=2){page7_main.innerHTML+="<span style='color:red; font-size:12px;'>이 조합은 해당회차 1등 추천조합에서 배출된 조합입니다.</span><br><span style='color:red; font-size:12px;'>배정 받으신 분들의 당첨을 진심으로 축하드립니다.</span><br>"}//-----
for(k=0; k<6; k++){
if(nextlotto_old_array[j][k]<10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>&nbsp;"+nextlotto_old_array[j][k]+"&nbsp;</b>";}
else if(nextlotto_old_array[j][k]==10){
page7_main.innerHTML+="<b style='background-color:orange; color:white;'>"+nextlotto_old_array[j][k]+"</b>";}
else if(nextlotto_old_array[j][k]<=20){
page7_main.innerHTML+="<b style='background-color:blue; color:white;'>"+nextlotto_old_array[j][k]+"</b>";}
else if(nextlotto_old_array[j][k]<=30){
page7_main.innerHTML+="<b style='background-color:red; color:white;'>"+nextlotto_old_array[j][k]+"</b>";}
else if(nextlotto_old_array[j][k]<=40){
page7_main.innerHTML+="<b style='background-color:gray; color:white;'>"+nextlotto_old_array[j][k]+"</b>";}
else{
page7_main.innerHTML+="<b style='background-color:green; color:white;'>"+nextlotto_old_array[j][k]+"</b>";}
}
	//---------------
page7_main.innerHTML+='<b style="color:black">'+" 합:"+sum+"</b><br><b style='color:red'>로또조또 분석 점수( "+lotto_point+" 점 )</b><p style='color:black'>&nbsp;&nbsp;색깔("+zero+":"+one+":"+two+":"+three+":"+four+")"+" , 전멸구간("+junmul +"구간)<br>&nbsp;&nbsp;홀짝("+hol+":"+jak+")"+" , 연속번호("+yunbun+"회)"+" , 끝수합("+sumlastsu+")<br>&nbsp;&nbsp;끝수("+lastsu_array+")<br>&nbsp;&nbsp;저고("+low+":"+high+")"+" , 저고차("+jugocha+") , 소수:3배수:합성수("+sosu+":"+samsu+":"+habsu+")"+"<br>&nbsp;&nbsp;지난회차 출현수: "+last_lotto_old+"<br>&nbsp;&nbsp;5주 이내 출현수: "+asd+"<br>&nbsp;&nbsp;6~10주 미출현수: "+game_510mi_old+"<br>&nbsp;&nbsp;11주 이상 미출현수: "+game_10mi_old+'</p>';
};

};
function calculate_old(){
	for(i=(dangchum_every.length-100)-count_old; i<dangchum_every.length-count_old; i++){ 	
dangchum_old.push(dangchum_every[i]);	
};
	for(i=0; i<dangchum_old.length; i++){
	for(j=0; j<7; j++){
		for(k=0; k<45; k++){
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-1){number_array_old[k].score+=(i+1);number_array_old[k].su1+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-2){number_array_old[k].score+=(i+1);number_array_old[k].su2+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-3){number_array_old[k].score+=(i+1);number_array_old[k].su3+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-4){number_array_old[k].score+=(i+1);number_array_old[k].su4+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-5){number_array_old[k].score+=(i+1);number_array_old[k].su5+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-6){number_array_old[k].score+=(i+1);number_array_old[k].su6+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-7){number_array_old[k].score+=(i+1);number_array_old[k].su7+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-8){number_array_old[k].score+=(i+1);number_array_old[k].su8+=1};
		if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-9){number_array_old[k].score+=(i+1);number_array_old[k].su9+=1};																			
	    if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-10){number_array_old[k].score+=(i+1);number_array_old[k].su10+=1};
	    if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-15){number_array_old[k].score+=(i+1);number_array_old[k].su15+=1};			
			if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-30){number_array_old[k].score+=(i+1);number_array_old[k].su30+=1};
		    if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-60){number_array_old[k].score+=(i+1);number_array_old[k].su60+=1};	
				    if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-90){number_array_old[k].su90+=1};					
		    if(dangchum_old[i][j]==number_array_old[k].num&&i>=dangchum_old.length-100){number_array_old[k].score+=(i+1);number_array_old[k].su100+=1;number_array_old[k].bscore=(number_array_old[k].score/number_array_old[k].su100).toFixed(0);};			
			
			}
	};};
 	for(k=0; k<45; k++){
sum_score_old+=number_array_old[k].score;	
sum_su_old+=number_array_old[k].su100;	

	};
//alert(((sum_score_old/45)/(sum_su_old/45)).toFixed(0));		
	};	
	
function basic_setting_old(){
	for(i=0; i<45; i++){
	lotto_number_old.push(i+1);
	};
	for(i=0; i<45; i++){
	number_array_old.push(new number_old(i+1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));
	};
	
};	

number_old = function(num,score,bscore,su1,su2,su3,su4,su5,su6,su7,su8,su9,su10,su15,su30,su60,su90,su100){
	    this.num=num;
		this.score=score;
		this.bscore=bscore;
		this.su1=su1;
		this.su2=su2;
		this.su3=su3;
		this.su4=su4;
		this.su5=su5;
		this.su6=su6;
		this.su7=su7;
		this.su8=su8;
		this.su9=su9;
        this.su10=su10;
		this.su15=su15;	
		this.su30=su30;
		this.su60=su60;
		this.su90=su90;
		this.su100=su100;		
};	
	
	
//----------------------------------		
function open_setting(){
	myScroll15.scrollTo(0,0);	
	setting.style.visibility="visible";
	//if(checkbox0.checked){alert("asdasd")};
	};
function reset_setting(){
	myScroll15.scrollTo(0,0);
	setting_box.reset()
	};	
var basic_setting_status=[];

function close_setting(){
	info_setting.innerHTML="";
	info_setting.innerHTML+="기본설정<br><br>";
      if(checkbox0.checked){basic_setting_status[0]=["홀짝비가 2:4/3:3/4:2 인 조합만 검출",checkbox0.value];}else{basic_setting_status[0]=["",checkbox0.value];};
	if(checkbox1.checked){basic_setting_status[1]=["총합이 90~180 인 조합만 검출",checkbox1.value];}else{basic_setting_status[1]=["",checkbox0.value];};
	if(checkbox2.checked){basic_setting_status[2]=["고저비가 2:4/3:3/4:2 인 조합만 검출",checkbox2.value];}else{basic_setting_status[2]=["",checkbox0.value];};
	if(checkbox3.checked){basic_setting_status[3]=["고저차가 25~40 인 조합만 검출",checkbox3.value];}else{basic_setting_status[3]=["",checkbox0.value];};
	if(checkbox4.checked){basic_setting_status[4]=["이월수를 포함한 조합만 검출",checkbox4.value];}else{basic_setting_status[4]=["",checkbox0.value];};
	if(checkbox5.checked){basic_setting_status[5]=["연속번호를 포함한 조합만 검출",checkbox5.value];}else{basic_setting_status[5]=["",checkbox0.value];};
	if(checkbox6.checked){basic_setting_status[6]=["같은 색깔의 공이 3개 이하인 조합만 검출",checkbox6.value];}else{basic_setting_status[6]=["",checkbox0.value];};
	if(checkbox7.checked){basic_setting_status[7]=["1구간(색깔)이상이 전멸된 조합만 검출",checkbox7.value];}else{basic_setting_status[7]=["",checkbox0.value];};
	if(checkbox8.checked){basic_setting_status[8]=["5주이내 출현수 비중이 3~4개인 조합만 검출",checkbox8.value];}else{basic_setting_status[8]=["",checkbox0.value];};
	if(checkbox9.checked){basic_setting_status[9]=["장기미출수(10주이상)를 포함한 조합만 검출",checkbox9.value];}else{basic_setting_status[9]=["",checkbox0.value];};
	basic_setting_status.sort(function(a,b){return a[1]-b[1]});
	for(i=0; i<basic_setting_status.length; i++){
		if(basic_setting_status[i][0]!==""){info_setting.innerHTML+=basic_setting_status[i][0]+"<br>"};
		};
		setTimeout(function(){setting.style.visibility="hidden";},300);
	};
