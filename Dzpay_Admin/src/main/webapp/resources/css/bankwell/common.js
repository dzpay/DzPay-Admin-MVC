var doc = document.all ? document.all:document;
var checkFlag = "false";

//========== 팝업호출.
function openPopup(url,width,height){	
	var widthSize = width;
	var heightSize = height;
	var leftPos = (screen.width - widthSize) / 2;
	var topPos = (screen.height - heightSize) / 2;
	var winProps = 'scrollbars=yes, resizable=yes, copyhistory=no, width='+widthSize+', height='+heightSize+'+, left='+leftPos+', top='+topPos+'';
	window.open(url,'popup', winProps);
}

// 신용카드 매출전표 보기
function openPopup2(url, width, height) {	
	var urlOpt = "scrollbars=no, resizable=no, copyhistory=no, location=no, width=" + width + ",height=" + height + ", left=0, top=0";
	window.open(url , 'popup2', urlOpt);
}

//========== 새창띄우기
function openWindow(url, width, height) {
	var urlOpt = "scrollbars=yes, resizable=yes, toolbar=yes, menubar=yes, copyhistory=no, location=yes, width=" + width + ",height=" + height + ", left=0, top=0";
	window.open(url , 'popup2', urlOpt); 
}

//========== 인쇄하기
function doPrint() { 
	alert("배경화면이 인쇄되지 않을경우 \n'도구 > 인터넷 옵셥 > 고급 > 배경색 및 이미지 인쇄'에 체크한 후 인쇄하시기 바랍니다.\n" 
	+ "브라우저 IE8의 경우 \n'파일> 페이지 설정 > 배경색 및 이미지 인쇄'에도 체크한 후  인쇄하시기 바랍니다.");
	window.print(); 
}

//========== 금액표시(#,###)
function moneyFormat(inputName, outputName) { 
	priceButton = document.getElementById(inputName);
 	num = toPrice(priceButton.value);
 	priceButton.value = num;
 	
 	document.getElementById(outputName).innerText = getOnlyNumeric(num); 
}

// 입력되는 값을 3자리마다 콤마(',')를 표시할 수 있게 한다.
// cipher로 ,를 표시한 자릿수를 입력한다. 입력하지 않으면 기본값으로 3이 설정된다.
function toPrice(money, cipher) {
	var len, strb, revslice;
	
	strb = money.toString();
	strb = strb.replace(/,/g, '');
	strb = getOnlyNumeric(strb);
	strb = parseInt(strb, 10);
	
	if(isNaN(strb))	return '';
	strb = strb.toString();
	len = strb.length;	
	if(len < 4)	return strb;	
	if(cipher == undefined)	cipher = 3;
	count = len/cipher;
	slice = new Array();
	
	for(var i=0; i<count; ++i) {
		if(i*cipher >= len)	break;
		slice[i] = strb.slice((i+1) * -cipher, len - (i*cipher));
 	}
 	
 	revslice = slice.reverse();
 	return revslice.join(',');
}

// 문자열을 제거하고 숫자만 반환한다.
function getOnlyNumeric(str) {
	 var chrTmp, strTmp;
	 var len;
	
	 len = str.length;
	 strTmp = '';
	 
	 for(var i=0; i<len; ++i) {
	  chrTmp = str.charCodeAt(i);
	  if((chrTmp > 47 || chrTmp <= 31) && chrTmp < 58) {
	   strTmp = strTmp + String.fromCharCode(chrTmp);
	  }
	 }
	 return strTmp;
}

// popup height resize
function setResize(width){
	var innerBody = document.body;
	var innerHeight = innerBody.scrollHeight;
	resizeTo(width, innerHeight);
	var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
	innerHeight = (innerBody.scrollHeight) * 2 - innerBody.offsetHeight;
	resizeTo(innerWidth+7, innerHeight+3);
}

// calendar
function cal(obj, e, frmt)  {
		var date1 ;
		top1=e.screenY+10 ;
		left1=e.screenX-90  ;
		date1=window.showModalDialog("/admin/common/calendar.jsp",frmt," dialogWidth:168px;dialogHeight:201px;center:1;scroll:0;help:0; dialogtop:" +  top1 + "; dialogleft:" + left1 + " ;status:0") ;
   	if (typeof(date1)!="undefined"){
   	    	obj.value=date1; 
   	}
}

//>>>>>>>>>> 거래기간
function searchDate(gubun, formName, fromDateName, toDateName){
	if(gubun == "today"){
		startdate = document.getElementById('hidToday').value;
	}else if(gubun == "week1"){
		startdate = document.getElementById('hidOneWeek').value;
	}else if(gubun == "week2"){
		startdate = document.getElementById('hidTwoWeek').value;
	}else if(gubun == "month1"){
		startdate = document.getElementById('hidOneMonth').value;
	}else if(gubun == "month3"){
		startdate = document.getElementById('hidThreeMonth').value;
	}

	document.getElementById(fromDateName).value = startdate;
	document.getElementById(toDateName).value = document.getElementById('hidToday').value;
}

// 체크박스 체크/체크해제
function doChecked(form){
	var elementCount = form.elements.length;	
	if (checkFlag == "false")
	{
		for (inx = 0; inx < elementCount; inx++)
		{
			if (form.elements[inx].type == "checkbox")
			{
				form.elements[inx].checked = true;			
			}		
		}			
		//form.check.value = uncheckAllText; 
		checkFlag = "true";
	}
	else
	{
		for (inx = 0; inx < elementCount; inx++)
		{
			if (form.elements[inx].type == "checkbox")
			{
				form.elements[inx].checked = false;			
			}		
		}			
		//form.check.value = selectAllText;
		checkFlag = "false";
	}
}