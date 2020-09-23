/*
 * Filename	:	common.js
 * Function	:	결제내역 조회 스크립트모음 
 * Version	:	 
 */
 
var today = new Date();
var weekday = new Date(today-(3600000*24*7));
var monthday = new Date(today-(3600000*24*30));
var threemonthday = new Date(today-(3600000*24*90));
		
//날짜 형식 변환
function timeSt(dt) { 
	 var d = new Date(dt); 
	 var yyyy = d.getFullYear(); 
	 var MM = d.getMonth()+1; 
	 var dd = d.getDate();
	 return (yyyy + addzero(MM) +  addzero(dd)  ); 
	} 

//10보다 작으면 앞에 0을 붙임 
function addzero(n) { 
	 return n < 10 ? "0" + n : ""+n; 
	}

//기간 날짜 선택시에 따른 값넣기.
function selectDay(val){	 
	switch(val){
		case 1:	//당일버튼			
			document.getElementById("startDT").value = timeSt(today);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 2:	//일주일버튼		
			document.getElementById("startDT").value = timeSt(weekday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 3:	//한달버튼		
			document.getElementById("startDT").value = timeSt(monthday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 4:	//세달버튼		
			document.getElementById("startDT").value = timeSt(threemonthday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 5: //최초 로드시 기본값 셋팅
			var stdt = document.getElementById("startDT").value;
			var eddt = document.getElementById("endDT").value;
			if((stdt == "" || stdt==null)&& (eddt == "" || eddt == null))
			{				
			document.getElementById("startDT").value = timeSt(today);
			document.getElementById("endDT").value = timeSt(today);
			}
			break;
	}	
}

//날짜 3개월이상인지 시작날짜 오류인지 체
function CompareDate(daybef,dayaft) {	
	
	if(daybef.length != 8 || dayaft.length != 8){
		alert("날짜 형식이 맞지 않습니다.예)19991231");
		selectDay(1);	
		return false;
	}	
	
	daybef = new Date(daybef.substr(0,4), addzero(daybef.substr(4,2) - 1), daybef.substr(6,2));//희망일자 (년도,월,일)
    dayaft = new Date(dayaft.substr(0,4), addzero(dayaft.substr(4,2) - 1), dayaft.substr(6,2));//희망일자 (년도,월,일)

    daybef = daybef.getTime(); //1970년 1월 1일 00 시 00 분 00 초를 기준으로 한 시간으로 바꾸어줌
	dayaft = dayaft.getTime(); //1970년 1월 1일 00 시 00 분 00 초를 기준으로 한 시간으로 바꾸어줌

	count = dayaft- daybef ;
    count = Math.floor(count/(24*3600*1000));
    
    if(count > 90){
   		alert("조회기간은 최대 3개월 입니다.");
    	return false ;
    }  
	
	if(daybef != "" && dayaft != "" && count<0 ){
		alert("시작일자가 종료일자보다 클수 없습니다.");
		return false ;
	}		
	return true;
}

//날짜 8자리가 아니면 재입력 유효한 날짜체크. 포커스 아웃시 바로 체크.
function dateTypeCK(txtval){
	if(txtval.value.length != 8){
		alert("날짜 형식이 맞지 않습니다.예)19991231");
		selectDay(1);	
	}	
		
	var nYear = Number(txtval.value.substr(0,4));   
    var nMonth = Number(txtval.value.substr(4,2));   
    var nDay = Number(txtval.value.substr(6,2));	
    var nMaxDay = new Date(new Date(nYear, nMonth, 1) - 86400000).getDate();
       
    if ((nDay < 1 || nDay > nMaxDay)
    	||(nMonth < 1 || nMonth > 12)
    	||(nYear < 1900 || nYear > 3000)){   
       alert("존재하지 않은 년월일을 입력하셨습니다.");   
       selectDay(1);   
    }
}

//숫자 자동컴마.
String.prototype.comma = function() {
    tmp = this.split('.');
    var str = new Array();
    var v = tmp[0].replace(/,/gi,'');
    for(var i=0; i<=v.length; i++) {
        str[str.length] = v.charAt(v.length-i);
        if(i%3==0 && i!=0 && i!=v.length) {
            str[str.length] = '.';
        }
    }
    str = str.reverse().join('').replace(/\./gi,',');
    return (tmp.length==2) ? str + '.' + tmp[1] : str;
}

//텍스트박스 숫자만 받기위함 함수. event 를 넘겨받는다.
function txtOnlyNum(e) {
	var keycode = (window.netscape) ? e.which : e.keyCode;
	 if(!(keycode == 0 || keycode == 8 ||(keycode >=48 && keycode <= 57 ))){		 
		if(window.netscape){ 
			e.preventDefault();			
		}else{			
			e.returnValue = false;
		}
	}
}

// action처리
function dosubmit(val){	
	document.getElementById("payMTHD").value = val;		
	var inForm = document.getElementById('inForm');
	if(checkInputData()){
		inForm.submit();
	}	
}
	
// input값 check
function checkInputData(){	
	var inForm = document.getElementById('inForm');
	var daybef = inForm.startDT.value ;
    var dayaft = inForm.endDT.value;
    
    //날짜 체크 함수호출
    if( CompareDate(daybef,dayaft) == false) {     
    	selectDay(1);    
        return false;
    }
	// 휴대폰 소액결제 조회. - 휴대폰
	if (typeof(inForm.mob_no)!= "undefined")	{
		 if(Trim(inForm.mob_no.value).length<10){
		 	alert("휴대폰 번호를 입력하세요.");
		 	inForm.mob_no.focus();
		 	return false;
		 }
	}	
	
	// 휴대폰 소액결제 조회 - 결제금액
	if (typeof(inForm.trade_mony)!= "undefined")	{
		 if(Trim(inForm.trade_mony.value).length<1){
		 	document.getElementById("payMTHD").value == 5 ? alert("입금금액을 입력하세요.") :alert("결제금액을 입력하세요.");
		 	inForm.trade_mony.focus();
		 	return false;
		 }
	}	
	
	// 휴대폰
	if (typeof(inForm.phoneNum)!= "undefined")	{
		 if(Trim(inForm.phoneNum.value).length<1){
		 	alert("휴대폰 번호를 입력하세요.");
		 	inForm.phoneNum.focus();
		 	return false;
		 }
	}	
	// 전화번호
	if (typeof(inForm.telNum)!= "undefined")	{
		 if(Trim(inForm.telNum.value).length<1){
		 	alert("전화번호를 입력하세요.");
		 	inForm.telNum.focus();
		 	return false;
		 }
	}	
	// 카드사 선택
	if (typeof(inForm.cardTp)!= "undefined")	{
		 if(Trim(inForm.cardTp.value)==""){
		 	alert("카드사를 선택하세요.");
		 	inForm.cardTp.focus();
		 	return false;
		 }
	}	
	// 은행선택
	if (typeof(inForm.selBankMain)!= "undefined")	{
		 if(Trim(inForm.selBankMain.value) == ""){
			 	alert("은행을 선택하세요.");
			 	inForm.selBankMain.focus();
			 	return false;
		 }
	} 	
	// 예금주
	if (typeof(inForm.tranName)!= "undefined")	{
		 if(Trim(inForm.tranName.value).length<1){
		 	alert("예금주를 입력하세요.");
		 	inForm.tranName.focus();
		 	return false;
		 }
	}	
	// 결제금액
	if (typeof(inForm.payAmt)!= "undefined")	{
		 if(Trim(inForm.payAmt.value).length<1){
		 	document.getElementById("payMTHD").value == 5 ? alert("입금금액을 입력하세요.") :alert("결제금액을 입력하세요.");
		 	inForm.payAmt.focus();
		 	return false;
		 }
	}	
	// 계좌번호
	if (typeof(inForm.tranNum)!= "undefined")	{
		 if(Trim(inForm.tranNum.value).length<1){
			 	alert("계좌번호를 입력하세요.");
			 	inForm.tranNum.focus();
			 	return false;
		 }
	}
	// 승인번호
	if (typeof(inForm.payNum)!= "undefined")	{
		 if(Trim(inForm.payNum.value).length<1){
			 	alert("승인번호를 입력하세요.");
			 	inForm.crdApprvlNo.focus();
			 	return false;
		 }
	}			
	inForm.act.value='OK';
	return true;
}

// 신용카드 매출전표 보기
function openWindow(url, width, height) {
	var urlOpt = "scrollbars=no, resizable=no, copyhistory=no, location=no, width=" + width + ",height=" + height + ", left=0, top=0";
	window.open(url , 'popup', urlOpt);
}

// check Input Data
function Trim(str){
	str = str.replace(/^\s*/,'').replace(/\s*$/, '');
	return str;
}
	function print_Trade(c_trade_no,site_cd) {
		var w = 400;
		var h = 600;
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2;
		winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=no,status=no,menubar=no,resizable=no,location=no,directory=no,toolbar=no';

		window.open("/Modules/Bill/ADTS_Bill_Blue.jsp?c_trade_no="+c_trade_no+"&site_cd="+site_cd+"&trade_type=PA11", "ADTS_Card_Bill", winprops);		
	}
	
	function print_Trade_trance(c_trade_no,site_cd) {
		var w = 400;
		var h = 600;
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2;
		winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=no,status=no,menubar=no,resizable=no,location=no,directory=no,toolbar=no';

		window.open("/Modules/Bill/ADTS_Cash_Bill_Blue.jsp?c_trade_no="+c_trade_no+"&site_cd="+site_cd+"", "ADTS_Cash_Bill", winprops);		
	}
	
