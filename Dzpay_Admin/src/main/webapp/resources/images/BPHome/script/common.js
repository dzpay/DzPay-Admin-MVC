/*
 * Filename	:	common.js
 * Function	:	�������� ��ȸ ��ũ��Ʈ���� 
 * Version	:	 
 */
 
var today = new Date();
var weekday = new Date(today-(3600000*24*7));
var monthday = new Date(today-(3600000*24*30));
var threemonthday = new Date(today-(3600000*24*90));
		
//��¥ ���� ��ȯ
function timeSt(dt) { 
	 var d = new Date(dt); 
	 var yyyy = d.getFullYear(); 
	 var MM = d.getMonth()+1; 
	 var dd = d.getDate();
	 return (yyyy + addzero(MM) +  addzero(dd)  ); 
	} 

//10���� ������ �տ� 0�� ���� 
function addzero(n) { 
	 return n < 10 ? "0" + n : ""+n; 
	}

//�Ⱓ ��¥ ���ýÿ� ���� ���ֱ�.
function selectDay(val){	 
	switch(val){
		case 1:	//���Ϲ�ư			
			document.getElementById("startDT").value = timeSt(today);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 2:	//�����Ϲ�ư		
			document.getElementById("startDT").value = timeSt(weekday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 3:	//�Ѵ޹�ư		
			document.getElementById("startDT").value = timeSt(monthday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 4:	//���޹�ư		
			document.getElementById("startDT").value = timeSt(threemonthday);
			document.getElementById("endDT").value = timeSt(today);
			break;
		case 5: //���� �ε�� �⺻�� ����
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

//��¥ 3�����̻����� ���۳�¥ �������� ü
function CompareDate(daybef,dayaft) {	
	
	if(daybef.length != 8 || dayaft.length != 8){
		alert("��¥ ������ ���� �ʽ��ϴ�.��)19991231");
		selectDay(1);	
		return false;
	}	
	
	daybef = new Date(daybef.substr(0,4), addzero(daybef.substr(4,2) - 1), daybef.substr(6,2));//������� (�⵵,��,��)
    dayaft = new Date(dayaft.substr(0,4), addzero(dayaft.substr(4,2) - 1), dayaft.substr(6,2));//������� (�⵵,��,��)

    daybef = daybef.getTime(); //1970�� 1�� 1�� 00 �� 00 �� 00 �ʸ� �������� �� �ð����� �ٲپ���
	dayaft = dayaft.getTime(); //1970�� 1�� 1�� 00 �� 00 �� 00 �ʸ� �������� �� �ð����� �ٲپ���

	count = dayaft- daybef ;
    count = Math.floor(count/(24*3600*1000));
    
    if(count > 90){
   		alert("��ȸ�Ⱓ�� �ִ� 3���� �Դϴ�.");
    	return false ;
    }  
	
	if(daybef != "" && dayaft != "" && count<0 ){
		alert("�������ڰ� �������ں��� Ŭ�� �����ϴ�.");
		return false ;
	}		
	return true;
}

//��¥ 8�ڸ��� �ƴϸ� ���Է� ��ȿ�� ��¥üũ. ��Ŀ�� �ƿ��� �ٷ� üũ.
function dateTypeCK(txtval){
	if(txtval.value.length != 8){
		alert("��¥ ������ ���� �ʽ��ϴ�.��)19991231");
		selectDay(1);	
	}	
		
	var nYear = Number(txtval.value.substr(0,4));   
    var nMonth = Number(txtval.value.substr(4,2));   
    var nDay = Number(txtval.value.substr(6,2));	
    var nMaxDay = new Date(new Date(nYear, nMonth, 1) - 86400000).getDate();
       
    if ((nDay < 1 || nDay > nMaxDay)
    	||(nMonth < 1 || nMonth > 12)
    	||(nYear < 1900 || nYear > 3000)){   
       alert("�������� ���� ������� �Է��ϼ̽��ϴ�.");   
       selectDay(1);   
    }
}

//���� �ڵ��ĸ�.
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

//�ؽ�Ʈ�ڽ� ���ڸ� �ޱ����� �Լ�. event �� �Ѱܹ޴´�.
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

// actionó��
function dosubmit(val){	
	document.getElementById("payMTHD").value = val;		
	var inForm = document.getElementById('inForm');
	if(checkInputData()){
		inForm.submit();
	}	
}
	
// input�� check
function checkInputData(){	
	var inForm = document.getElementById('inForm');
	var daybef = inForm.startDT.value ;
    var dayaft = inForm.endDT.value;
    
    //��¥ üũ �Լ�ȣ��
    if( CompareDate(daybef,dayaft) == false) {     
    	selectDay(1);    
        return false;
    }
	// �޴��� �Ҿװ��� ��ȸ. - �޴���
	if (typeof(inForm.mob_no)!= "undefined")	{
		 if(Trim(inForm.mob_no.value).length<10){
		 	alert("�޴��� ��ȣ�� �Է��ϼ���.");
		 	inForm.mob_no.focus();
		 	return false;
		 }
	}	
	
	// �޴��� �Ҿװ��� ��ȸ - �����ݾ�
	if (typeof(inForm.trade_mony)!= "undefined")	{
		 if(Trim(inForm.trade_mony.value).length<1){
		 	document.getElementById("payMTHD").value == 5 ? alert("�Աݱݾ��� �Է��ϼ���.") :alert("�����ݾ��� �Է��ϼ���.");
		 	inForm.trade_mony.focus();
		 	return false;
		 }
	}	
	
	// �޴���
	if (typeof(inForm.phoneNum)!= "undefined")	{
		 if(Trim(inForm.phoneNum.value).length<1){
		 	alert("�޴��� ��ȣ�� �Է��ϼ���.");
		 	inForm.phoneNum.focus();
		 	return false;
		 }
	}	
	// ��ȭ��ȣ
	if (typeof(inForm.telNum)!= "undefined")	{
		 if(Trim(inForm.telNum.value).length<1){
		 	alert("��ȭ��ȣ�� �Է��ϼ���.");
		 	inForm.telNum.focus();
		 	return false;
		 }
	}	
	// ī��� ����
	if (typeof(inForm.cardTp)!= "undefined")	{
		 if(Trim(inForm.cardTp.value)==""){
		 	alert("ī��縦 �����ϼ���.");
		 	inForm.cardTp.focus();
		 	return false;
		 }
	}	
	// ���༱��
	if (typeof(inForm.selBankMain)!= "undefined")	{
		 if(Trim(inForm.selBankMain.value) == ""){
			 	alert("������ �����ϼ���.");
			 	inForm.selBankMain.focus();
			 	return false;
		 }
	} 	
	// ������
	if (typeof(inForm.tranName)!= "undefined")	{
		 if(Trim(inForm.tranName.value).length<1){
		 	alert("�����ָ� �Է��ϼ���.");
		 	inForm.tranName.focus();
		 	return false;
		 }
	}	
	// �����ݾ�
	if (typeof(inForm.payAmt)!= "undefined")	{
		 if(Trim(inForm.payAmt.value).length<1){
		 	document.getElementById("payMTHD").value == 5 ? alert("�Աݱݾ��� �Է��ϼ���.") :alert("�����ݾ��� �Է��ϼ���.");
		 	inForm.payAmt.focus();
		 	return false;
		 }
	}	
	// ���¹�ȣ
	if (typeof(inForm.tranNum)!= "undefined")	{
		 if(Trim(inForm.tranNum.value).length<1){
			 	alert("���¹�ȣ�� �Է��ϼ���.");
			 	inForm.tranNum.focus();
			 	return false;
		 }
	}
	// ���ι�ȣ
	if (typeof(inForm.payNum)!= "undefined")	{
		 if(Trim(inForm.payNum.value).length<1){
			 	alert("���ι�ȣ�� �Է��ϼ���.");
			 	inForm.crdApprvlNo.focus();
			 	return false;
		 }
	}			
	inForm.act.value='OK';
	return true;
}

// �ſ�ī�� ������ǥ ����
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
	
