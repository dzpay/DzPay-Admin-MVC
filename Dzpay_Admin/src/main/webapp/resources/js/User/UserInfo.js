/**  
 *   ADURViewUserList.jsp Include Javascript
 *   �ۼ���    : byunghun.Oh
 *   �ۼ����� : 2004�� 9�� 23��
 */



function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}

// �� �������� �˻�Ű
function Send_Search(target)
{
	var datesplit;
	if (document.form1.date_from.value.length > 0) {
		
		//datesplit = document.form1.date_from.value.split("-");

		//if (date_formate_yyyymmdd_check(document.form1.date_from.value) == '-1')
		//{
		//	alert('yyyy-mm-dd ���������� �Է��Ͽ��ּ���.\nex) 2004/01/01');
		//	document.form1.date_from.focus();
		//	return;
		//}
		
		//for ( var i = 0; i < datesplit.length ; i++ )
		//{
		//	if (number_check(datesplit[i]) == '-1')
		//	{
		//		alert('��ġ�� �Է��Ͽ��ּ���.');
		//	    document.form1.date_from.focus();
		//	    return;
		//		break;
		//	}

		//}

		//if (date_number_yyyymmdd_check(datesplit[0],datesplit[1],datesplit[2]) == '-1')
		//{
		//	alert('��ġ�� �Է��Ͽ� �ּ���.');
		//	document.form1.date_from.focus();
		//	return;
		//}
		if (document.form1.date_from.value.length != 8) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_from.focus();
			return;			
		}
		if (document.form1.date_to.value.length != 8) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_to.focus();
			return;			
		}
		if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_from.focus();
			return;			
		}
	}
	
	if (target=="asp")
	{
		if (document.form1.ser_key.value == "ssn")
		{
			if (document.form1.ser_sentence.value.length < 6)
			{
				alert('�ֹι�ȣ ���ڸ� 6�̻� �Է��Ͽ� �ּ���.');
				document.form1.ser_sentence.focus();
				return;
			}
		} else if (document.form1.ser_key.value == "card_no") {
			if (document.form1.ser_sentence.value.length < 8)
			{
				alert('ī���ȣ ���ڸ� 8�̻� �Է��Ͽ� �ּ���.');
				document.form1.ser_sentence.focus();
				return;
			}
		} else if (document.form1.ser_key.value == "all") {
			    document.form1.ser_sentence.value = "";
		}
	}
    
	if (target=="money")
	{
		if (document.form1.charge_gubun.value == "Mileage" || document.form1.charge_gubun.value == "ACNT" )
		{
			if (document.form1.card_no.value == "")
			{
				alert("���� ī�带 �����Ͽ� �ֽʽÿ�");
				document.form1.card_no.focus();
				return;
			}
		}
	}

	
	if (target == "user") {
		document.form1.action="ADURViewUserList.jsp";
	} else if (target == "asp") {
		document.form1.action="ADURUserASPList.jsp";
	} else if (target == "point") {
		document.form1.action="ADURUserMileage.jsp";
	} else if (target == "money") {
		document.form1.action="ADURUserMoney.jsp";
	} else if (target == "reserve") {
		document.form1.action="ADURUserResMoney.jsp";
	} else if (target == "card") {
    document.form1.page_no.value = "1";
		document.form1.action="ADURUserCardHistory.jsp";
	}
	
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

function Go_UserInfo(mnu_no,mktid,user_pk_id) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=850' ;
	sfile = "/Modules/User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&user_pk_id=" + user_pk_id;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}

function Go_UserInfo2(mnu_no,mktid,user_pk_id) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=850' ;
	sfile = "/Modules/User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&user_pk_id=" + user_pk_id;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}
function Userinfo_Mody() {
	
	
	if (document.form1.user_email.value == "")
	{
		alert("E-Mail�ּҸ� �Է��Ͽ� �ּ���.");
		document.form1.user_email.focus();
		return;
	}
		   
	document.form1.action="ADURViewUserInfoAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}
// ȸ�� Ż��
function User_WithDrawal(card_corp) {
	if (!confirm("ȸ���� Ż��ó���� �Ͻðڽ��ϱ�?" ))
	{
		return;
	}
	document.form1.card_corp.value = card_corp;

	document.form1.action="ADURViewUserDelAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}
// ȸ�� �� ����
function User_Add(card_corp) {
	document.form1.card_corp.value = card_corp;

	document.form1.action="ADURViewUserAddAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();

}
// ��� ��ȣ ����
function User_PWD_Change(card_corp) {

	if (!confirm("ȸ���� ������й�ȣ ����ó���� �Ͻðڽ��ϱ�?" ))
	{
		return;
	}
	if (document.form1.user_email.value == "")
	{
		alert("E-Mail�ּҸ� �Է��� �� ���� ���� �� ��õ� ���ּ���.");
		document.form1.user_email.focus();
		return;
	}
	document.form1.card_corp.value = card_corp;
	document.form1.action="ADURViewUserPWDAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

// ��� ��ȣ ���� �˾�
//20051212 deadlines �߰�
function User_PWD_Change_popup(mnu_no, user_pk_id, user_nm, user_email, usertype, card_corp) {

	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;
    
	if (!confirm("ȸ���� ������й�ȣ ����ó���� �Ͻðڽ��ϱ�?" ))
	{
		return;
	}
	if (user_email.value == "")
	{
		alert("E-Mail�ּҸ� �Է��� �� ���� ���� �� ��õ� ���ּ���.");
		document.form1.user_email.focus();
		return;
	}
	
	winOpts = 'status=0, scrollbars=no,resizable=0, menubar=no,top='+wint+',left='+winl+', width=500, height=250' ;
	sfile = './ADURViewUserPWDInput.jsp?mnu_no='+ mnu_no + '&user_pk_id='+user_pk_id+'&user_nm=' + user_nm + '&user_email=' + user_email + '&usertype=' + usertype + '&card_corp=' + card_corp;
	winObj = window.open(sfile, "passwin", winOpts) ;
	
}


// ���ϸ��� ������ ���� �˾�
function Mileage_Mody(mnu_no,mktid,user_pk_id) {

	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;

	winOpts = 'status=0, scrollbars=no,resizable=0, menubar=no,top='+wint+',left='+winl+', width=500, height=230' ;
	sfile = './ADURUserMileageMody.jsp?mktid='+mktid+'&mnu_no=' + mnu_no + '&user_pk_id=' + user_pk_id  ;
	winObj = window.open(sfile, "modiwin", winOpts) ;

}


// ���븶�ϸ��� �������� - ������������ �˾� - �̻���
function MileageErrLog(){
	var _ssn = document.form1.user_pk_id.value;
	var _mnu_no = document.form1.mnu_no.value;
	var url = "./ADURUserMileageErrList.jsp?user_pk_id="+user_pk_id+"&mnu_no="+_mnu_no;
	window.open(url, "MileageErrLog", 'resize=no, scrollbars=yes ,height=400, width=1000,location=no,directory=no,toolbar=no');
}

// ����� �ʵ尪 ���� �Ұ� ó��
function closeFields(){
	var prt = document.form1;
	prt.change_point.disabled = true;
	prt.mktid.disabled = true;
	prt.trans_mktid.disabled = true;
	prt.add_dt.disabled = true;
}

// ����� �ʵ尪 ���� �Ұ� ó��
function closeFieldsMoney(){
	var prt = document.form1;
	prt.change_money.disabled = true;
	prt.mktid.disabled = true;
	prt.trans_mktid.disabled = true;
	prt.add_dt.disabled = true;
}

function openFields(){
	var prt = document.form1;
	prt.change_point.disabled = false;
	prt.mktid.disabled = false;
	prt.trans_mktid.disabled = false;
	prt.add_dt.disabled = false;
}

function openFieldsForMoney(){
	var prt = document.form1;
	prt.change_money.disabled = false;
	prt.mktid.disabled = false;
	prt.trans_mktid.disabled = false;
	prt.add_dt.disabled = false;
}

// ���ϸ��� ������ ���� ����
function Mileage_Mody_Action() {

	if (document.form1.change_point.value == 0)
	{
		alert("0�̻��� ��ġ�� �Է��Ͽ� �ּ���.");
		document.form1.change_point.focus();
		return;
	}
	if (number_check(document.form1.change_point.value) == -1 || document.form1.change_point.value == "")
	{
		alert("��ġ�� �Է��Ͽ� �ּ���.");
		document.form1.change_point.focus();
		return;
	}

	if (document.form1.addtype.value == "AP02" && document.form1.pointgubun.value == "MG01")
	{
		alert("�� ���� �����ϰ�� ������ �� �����ϴ�.");
		document.form1.addtype_00.focus();
		return;
	}

    if (document.form1.act_desc.value == "")
    {
		alert("���� ������ �Է��Ͽ� �ּ���.");
		document.form1.act_desc.focus();
		return;
    }

	if (document.form1.reg_id.value == "")
	{
		alert("����� ID�� �Է��Ͽ� �ּ���.");
		document.form1.reg_id.focus();
		return
	}
	if (document.form1.reg_pwd.value == "")
	{
		alert("����� ��й�ȣ�� �Է��Ͽ� �ּ���.");
		document.form1.reg_pwd.focus();
		return
	}

	openFields();

	document.form1.action="ADURUserMileageModyAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
	
}

// ����Ӵ� ������ ���� �˾�
function Money_Mody(mnu_no,mktid,user_pk_id,card_no) {

	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;

	if ((document.form1.card_no.value == ""))
	{
		alert("ī�带 �����ϼ���.");
		document.form1.card_no.focus();
		return;
	}
    card_no = document.form1.card_no.value;
	winOpts = 'status=0, scrollbars=no,resizable=0, top='+wint+',left='+winl+', menubar=no, width=500, height=210' ;
	sfile = './ADURUserMoneyMody.jsp?mnu_no=' + mnu_no + '&mktid=' + mktid + '&user_pk_id=' + user_pk_id + '&card_no=' + card_no ;
	winObj = window.open(sfile, "modiwin", winOpts) ;
}

// ���븶�ϸ��� �������� - ������������ �˾� - �̻���
function MoneyErrLog(){
	var _card_no = document.form1.card_no.value;
	var _mnu_no = document.form1.mnu_no.value;
	var url = "./ADURUserMoneyErrLog.jsp?card_no="+_card_no+"&mnu_no="+_mnu_no;
	window.open(url, "MoneyErrLog", 'resize=no, scrollbars=yes ,height=400, width=900,location=no,directory=no,toolbar=no');
}

// ����Ӵ� ������ ���� ����
function Money_Mody_Action() {

	if (document.form1.change_money.value <= 0)
	{
		alert("0�̻��� ��ġ�� �Է��Ͽ� �ּ���.");
		document.form1.change_money.focus();
		return;
	}
	
	if (number_check(document.form1.change_money.value) == -1 || document.form1.change_money.value == "")
	{
		alert("��ġ�� �Է��Ͽ� �ּ���.");
		document.form1.change_money.focus();
		return;
	}

	if (document.form1.act_desc.value == "")
    {
		alert("���� ������ �Է��Ͽ� �ּ���.");
		document.form1.act_desc.focus();
		return;
    }

	if (document.form1.reg_id.value == "")
	{
		alert("����� ID�� �Է��Ͽ� �ּ���.");
		document.form1.reg_id.focus();
		return
	}
	if (document.form1.reg_pwd.value == "")
	{
		alert("����� ��й�ȣ�� �Է��Ͽ� �ּ���.");
		document.form1.reg_pwd.focus();
		return
	}

	//document.form1.add_dt.value = document.form1.tx_ymd.value + document.form1.tx_hms.value;
	openFieldsForMoney();

	document.form1.action="ADURUserMoneyModyAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
	
}


function Reserve_Ins(mnu_no,user_pk_id,card_no) {
	if ((document.form1.card_no.value == ""))
	{
		alert("ī�带 �����ϼ���.");
		document.form1.card_no.focus();
		return;
	}
	
    card_no = document.form1.card_no.value;
	winOpts = "status=0, scrollbars=no,resizable=0, menubar=no, width=510, height=300" ;
	sfile = './ADURUserResMoneyMody.jsp?i_flag=y&mnu_no=' + mnu_no + '&user_pk_id=' + user_pk_id + '&card_no=' + card_no ;
	winObj = window.open(sfile, "modiwin", winOpts) ;
}

function Reserve_Mod(mnu_no,money,id) {
	
    card_no = document.form1.card_no.value;
	winOpts = "status=0, scrollbars=no,resizable=0, menubar=no, width=510, height=300" ;
	sfile = './ADURUserResMoneyMody.jsp?i_flag=n&mnu_no=' + mnu_no + '&target_money=' + money + '&reserve_id=' + id;
	winObj = window.open(sfile, "modiwin", winOpts) ;
}

function Reserve_Mody_Action() {
	
	document.form1.action="ADURUserResMoneyModyAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
	
}

function Mileage_Gubun_Change() {
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

//----------------------------------------- ����� ��� ī�� ���� ��ũ����(ī���ü/�߰�/�нǽŰ� ���... -----------------------------------------------------------
function User_Card_Del() {
	var num = 0;
	
	for(var i=0; i < document.form1.elements.length; i++) {
		if (document.form1.elements[i].name == "card_no") {
			if (document.form1.elements[i].checked == true) {
				num++;
				
			}
		}
	}
	if (num == 0 ) {
    	alert("������ ī�带 �����Ͽ� �ּ���.");
		return;
	}
	document.form1.action="ADURUserCardStopAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();


}

function User_Card_Loss() {
	var num = 0;
	
	for(var i=0; i < document.form1.elements.length; i++) {
		if (document.form1.elements[i].name == "card_no") {
			if (document.form1.elements[i].checked == true) {
				num++;
				parm = document.form1.elements[i].value.split('|');
				if (parm[1] == "CS02")
				{
					alert("�����Ͻ� ī��� �̹� �н� �Ű� �� ī���Դϴ�.");
					return;
				}
			}
		}
	}
	if (num == 0 ) {
    	alert("�н� �Ű� ī�带 �����Ͽ� �ּ���.");
		return;
	}
	document.form1.action="ADURUserCardLossAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();


}
function User_Card_LossFind() {
	var num = 0;
	
	for(var i=0; i < document.form1.elements.length; i++) {
		if (document.form1.elements[i].name == "card_no") {
			if (document.form1.elements[i].checked == true) {
				num++;
				parm = document.form1.elements[i].value.split('|');
				if (parm[1] != "CS02")
				{
					alert("�����Ͻ� ī��� �н� �Ű�� ī�尡 �ƴմϴ�.");
					return;
				}

				if (document.form1.elements[i].value.substring(0,3) == "101")
				{
					alert("���� KSCCī��� �н�öȸ �� �� �����ϴ�.");
					return;
				}

			}
		}
	}
	if (num == 0 ) {
    	alert("�н� öȸ ī�带 �����Ͽ� �ּ���.");
		return;
	}
	document.form1.action="ADURUserCardLossFindAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}


function User_Card_ReStart() {
	
	alert('������ �����ϴ�.');
	return;
	
	var num = 0;
	
	for(var i=0; i < document.form1.elements.length; i++) {
		if (document.form1.elements[i].name == "card_no") {
			if (document.form1.elements[i].checked == true) {
				num++;
			}
		}
	}
	if (num == 0 ) {
    	alert("����簳 ī�带 �����Ͽ� �ּ���.");
		return;
	}
	document.form1.action="ADURUserCardReStartAction.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}


/****************************************************************************************************************************************
*
* ��� : ��¥ ������ Ȯ���Ѵ�.
*
*/
function date_formate_yyyymmdd_check(comment) {
	var intErr
	if (comment.length == 10)
	{   
		if ((comment.charAt(4) != '-') || (comment.charAt(7) != '-') )
		{
		intErr = -1;
		}
	}
	else if (comment.length == 16 )
	{   if ((comment.charAt(4) != '-') || (comment.charAt(10) != ' ') || (comment.charAt(7) != '-')  ||  (comment.charAt(13) != ':'))
		{
		intErr = -1;
		}
	}
	else 
	{
		intErr = -1;
	}
	
	return (intErr);
}
/************
*
* ��� : ���� ��¥�� üũ�Ѵ�.
*
*/
function date_number_yyyymmdd_check(yyyy,mm,dd) {
	var intErr ;
	var lastday;
	var mon = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
	var day = new Array();
	day[0] = 31;
	day[1] = (leapYear(yyyy))?29:28;
	day[2] = 31;
	day[3] = 30;
	day[4] = 31;
	day[5] = 30;
	day[6] = 31;
	day[7] = 31;
	day[8] = 30;
	day[9] = 31;
	day[10] = 30;
	day[11] = 31;
    for ( i = 0; i < mon.length ;i++ )
    {
		if (mon[i] == mm)
		{
			intErr = 0;
			lastday = day[i];
			break;
		}
    }
	if (intErr != 0)
	{
		intErr = -1;
	}
	if (dd > lastday)
	{
		intErr = -1;
	}
	return (intErr);
}

/************
*
* ��� : ������ üũ�Ѵ�.
*
*/
function leapYear(year) {
	if (year % 4 == 0) return true;
}
 
/************
*
* ��� : ��ġ�� üũ�Ѵ�.
*
*/
function number_check(comment) {

	var intErr
	var strValue = comment
	var retCode = 0

	for (i = 0; i < strValue.length; i++) {

		var retCode = strValue.charCodeAt(i)
		var retChar = strValue.substr(i,1).toUpperCase()

		retCode = parseInt(retCode)

		if (retChar < "0" || retChar > "9") {
				intErr = -1;
				break;
		}
	}
	return (intErr);
}


// �޷��߰� 2004.10.08 Ȳ����

function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.date_from.value  = cur.year + cur.month + cur.date; 
								//2005.09.23 ���� deadlines
				               //document.form1.date_to.value  = cur.year + "-"+cur.month +"-"+ cur.date;
				               break;
				case '2':  document.form1.date_to.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}




// ����Ӵ� ������ ���� �˾�
function Card_Check(mnu_no,ssn,card_no) {

	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;

//	if ((document.form1.card_no.value == ""))
//	{
//		alert("ī�带 �����ϼ���.");
//		document.form1.card_no.focus();
//		return;
//	}
//   card_no = document.form1.card_no.value;
	winOpts = 'status=0, scrollbars=yes,resizable=0, top='+wint+',left='+winl+', menubar=no, width=520, height=310' ;
	sfile = '/Modules/User/Refund/ADURUserCardCheck.jsp?mnu_no=' + mnu_no + '&ssn=' + ssn + '&card_no=' + card_no ;
	winObj = window.open(sfile, "CardCheck", winOpts) ;
}


function User_Recharge(ssn) {

	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;

	winOpts = 'status=0, scrollbars=no,resizable=0, top='+wint+',left='+winl+', menubar=no, width=650, height=350' ;
	sfile = '/Modules/User/Recharge/ADURRechargeHistory.jsp?ssn=' + ssn ;
	winObj = window.open(sfile, "User_Charge", winOpts) ;
}





// ī���ȣ�� ȸ������ ��������
// 2005-06-14 Ȳ����
function Go_UserCardInfo(mnu_no,mktid,card_no) {
	
	var winl = (screen.width - 800) / 2; 
  var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=850' ;
	sfile = "/Modules/User/User/ADURUserCardInfo.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&card_no=" + card_no;
	winObj = window.open(sfile, "UserCardInfoWin", winOpts) ;
	
}
