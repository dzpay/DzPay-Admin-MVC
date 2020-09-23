var doc = document.all ? document.all:document;
var checkFlag = "false";

//========== �˾�ȣ��.
function openPopup(url,width,height){	
	var widthSize = width;
	var heightSize = height;
	var leftPos = (screen.width - widthSize) / 2;
	var topPos = (screen.height - heightSize) / 2;
	var winProps = 'scrollbars=yes, resizable=yes, copyhistory=no, width='+widthSize+', height='+heightSize+'+, left='+leftPos+', top='+topPos+'';
	window.open(url,'popup', winProps);
}

// �ſ�ī�� ������ǥ ����
function openPopup2(url, width, height) {	
	var urlOpt = "scrollbars=no, resizable=no, copyhistory=no, location=no, width=" + width + ",height=" + height + ", left=0, top=0";
	window.open(url , 'popup2', urlOpt);
}

//========== ��â����
function openWindow(url, width, height) {
	var urlOpt = "scrollbars=yes, resizable=yes, toolbar=yes, menubar=yes, copyhistory=no, location=yes, width=" + width + ",height=" + height + ", left=0, top=0";
	window.open(url , 'popup2', urlOpt); 
}

//========== �μ��ϱ�
function doPrint() { 
	alert("���ȭ���� �μ���� ������� \n'���� > ���ͳ� �ɼ� > ��� > ���� �� �̹��� �μ�'�� üũ�� �� �μ��Ͻñ� �ٶ��ϴ�.\n" 
	+ "������ IE8�� ��� \n'����> ������ ���� > ���� �� �̹��� �μ�'���� üũ�� ��  �μ��Ͻñ� �ٶ��ϴ�.");
	window.print(); 
}

//========== �ݾ�ǥ��(#,###)
function moneyFormat(inputName, outputName) { 
	priceButton = document.getElementById(inputName);
 	num = toPrice(priceButton.value);
 	priceButton.value = num;
 	
 	document.getElementById(outputName).innerText = getOnlyNumeric(num); 
}

// �ԷµǴ� ���� 3�ڸ����� �޸�(',')�� ǥ���� �� �ְ� �Ѵ�.
// cipher�� ,�� ǥ���� �ڸ����� �Է��Ѵ�. �Է����� ������ �⺻������ 3�� �����ȴ�.
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

// ���ڿ��� �����ϰ� ���ڸ� ��ȯ�Ѵ�.
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


//>>>>>>>>>> �ŷ��Ⱓ
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

// üũ�ڽ� üũ/üũ����
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