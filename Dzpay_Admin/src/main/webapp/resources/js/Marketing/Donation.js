/**  ADETDonation.jsp Include Javascript
 *    �ۼ���    : �̻���
 *    �ۼ����� : 2004�� 11�� 09��
 */
function search(_page) {
   
    document.form1.action=_page;
    document.form1.submit();
}

// ������ ������ ���ڿ��� ���� ��ȯ
function getLength(_str){

	var str = _str;

	var len = 0;

	for (var i=0; i<str.length ; i++ ){
		if(str.substring(i,i+1)!=" "){
			len++;
		}
	}

	return len;

}

// �ش� ���ڿ��� byte �Ի�
function cal_byte(aquery) 
{
	var tmpStr;
	var temp=0;
	var onechar;
	var tcount;
	tcount = 0;

	tmpStr = new String(aquery);
	temp = tmpStr.length;

	for (var k=0;k<temp;k++){
		onechar = tmpStr.charAt(k);

		if (escape(onechar) =='%0D') { 
		}else if (escape(onechar).length > 4) { 
			tcount += 2; 
		} else { 
			tcount++; 
		}
	}

	return tcount;

}

//��¥ ���� �޷� ��ũ��Ʈ
function selectDate(form_name)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		var obj = eval("document.form1."+form_name);

		if(cur != null && obj)
		{
			obj.value  = cur.year + "-"+cur.month +"-"+ cur.date; 
		}
}

// ���� / maximum bytes üũ
function frmCheck( _form_obj, _zero_check_yn, _max_length, _form_str ){

	var form_obj = _form_obj;
	var str = form_obj.value;
	var max_length = _max_length;
	var form_str = _form_str;
	
	// zero_check_yn ���� "Y"�� ��� ���� üũ
	if( _zero_check_yn=="Y" && getLength(str)==0 ){
		alert( form_str+" �׸��� �ݵ�� �Է��ϼž� �մϴ�.");
		form_obj.focus();
		return false;
	}

	// max_length ���� 0���� ū��� byte check
	if(max_length>0 && cal_byte(str)>max_length){
		alert( form_str+" �׸��� "+max_length+" byte ������ �Է��� �� �ֽ��ϴ�.");
		form_obj.focus();
		return false;
	}

	return true;
}


// üũ�ڽ��� ��� üũ, ��üũ
function checkAll(_obj_source, _obj_target){
	var obj_target = eval("document.form1."+_obj_target);
	var obj_source = _obj_source
	if(obj_target){
		for (var i=0; i<obj_target.length ; i++ ){
			obj_target[i].checked = obj_source.checked;
		}

		obj_target.checked = obj_source.checked;
	}
}

// �ű� �����̼� ���
function Regist_Donation(code) {
  
     window.open("ADETDonationInput.jsp?mnu_no="+code, "DonationInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}

// �����̼� ������ ���� ����
function Modify_Donation(){
	var obj = document.form1;

	// ����
	if( !frmCheck(obj.donation_nm, "Y", 500, "����") ){
		return;
	}

	// �Ⱓ - ������
	if( !frmCheck(obj.start_dt, "Y", 0, "�Ⱓ(������)") ){
		return;
	}

	// �Ⱓ - ������
	if( !frmCheck(obj.end_dt, "Y", 0, "�Ⱓ(������)") ){
		return;
	}

	// ���ID
	if( !frmCheck(obj.donation_id, "Y", 20, "���ID") ){
		return;
	}

	// ����
	if( !frmCheck(obj.donation_id, "N", 500, "����") ){
		return;
	}

	obj.action = "ADETDonationModify.jsp";
	obj.target= "_blank";

	obj.submit();
}

// �ű� �����̼� ��� ��üũ
function Save_Donation(){

	var obj = document.form1;

	// ����
	if( !frmCheck(obj.donation_nm, "Y", 500, "����") ){
		return;
	}

	// �Ⱓ - ������
	if( !frmCheck(obj.start_dt, "Y", 0, "�Ⱓ(������)") ){
		return;
	}

	// �Ⱓ - ������
	if( !frmCheck(obj.end_dt, "Y", 0, "�Ⱓ(������)") ){
		return;
	}

	// ���ID
	if( !frmCheck(obj.donation_id, "Y", 20, "���ID") ){
		return;
	}

	// ����
	if( !frmCheck(obj.donation_id, "N", 500, "����") ){
		return;
	}

	obj.action = "ADETDonationInputAction.jsp";

	obj.submit();
}

// �����̼� �󼼺��� �������� �̵�
function showDetail(_seq){
	document.form1.donation_seq_src.value = _seq;
	document.form1.action = "ADETDonationDetail.jsp";
	document.form1.submit();
}

// �����̼� ����
function Remove_Donation(){

	var obj = document.form1;

	var donation_cnt = 0;

	for (var i=0; i<obj.donation_seq.length ; i++ ){
		if(obj.donation_seq[i].checked){
			donation_cnt++;
		}
	}

	if(obj.donation_seq.checked){
		donation_cnt++;
	}

	if(donation_cnt==0){
		alert("�����Ͻ� ��縦 üũ�ϼ���.");
	}else{
		if(confirm("�����Ͻ� ��縦 �����Ͻðڽ��ϱ�?")){
			obj.order.value = "remove";
			obj.action = "ADETDonationStatus.jsp";
			obj.submit();
		}
	}
}

// �����̼� ���� ����
function modDonationStatus(_code){
	var code = _code;

	var msg = "����(����)";

	if(code=="DS03"){
		msg = "����";
	}else if(code=="DS04"){
		msg = "���";
	}

	var obj = document.form1;

	var donation_cnt = 0;

	for (var i=0; i<obj.donation_seq.length ; i++ ){
		if(obj.donation_seq[i].checked){
			donation_cnt++;
		}
	}

	if(obj.donation_seq.checked){
		donation_cnt++;
	}

	if(donation_cnt==0){
		alert(msg+"�Ͻ� ��縦 üũ�ϼ���.");
	}else{
		if(confirm("�����Ͻ� ��縦 "+msg+"�Ͻðڽ��ϱ�?")){
			obj.order.value = code;
			obj.action = "ADETDonationStatus.jsp";
			obj.submit();
		}
	}

}

// ��ü�����̼� �߰�
function insertShop(){
	var obj = document.form1;

	if(obj.donation_sts.value != "DS02" ){
		alert("��簡 �������� ��쿡�� ������ �� �ֽ��ϴ�.");
		return;
	}

	var donation_cnt = 0;

	for (var i=0; i<obj.mktid.length ; i++ ){
		if(obj.mktid[i].checked){
			donation_cnt++;
			
			if(obj.shop_sts[i].value!="SD01"){
				alert("��ü�� ���°� '������'�� ��ü�� �������ּ���.");
				return;
			}

		}
	}

	if(obj.mktid.checked){
		donation_cnt++;

		if(obj.shop_sts.value!="SD01"){
			alert("��ü�� ���°� '������'�� ��ü�� �������ּ���.");
			return;
		}
	}

	if(donation_cnt==0){
		alert("��翡 ������ ��ü�� �����ϼ���.");
	}else{
		if(confirm("�����Ͻ� ��ü�� ��翡 �����Ͻðڽ��ϱ�?")){

			obj.order.value = "SD01";
			obj.action = "ADETDonationShopStatus.jsp";
			obj.submit();

		}
	}
}

// �����ü ����(SHOP_STS) ����
function modShopStatus(_code){
	var obj = document.form1;
	var code = _code;
	var donation_cnt = 0;


	if(obj.donation_sts.value != "DS02" ){
		alert("��簡 �������� ��쿡�� ��ü������¸� ������ �� �ֽ��ϴ�.");
		return;
	}

	// ����, ����, ���
	if( code=="SD05" || code=="SD03" || code=="SD06" ){
		
		for (var i=0; i<obj.mktid.length ; i++ ){
			if(obj.mktid[i].checked){
				donation_cnt++;
				
				if(obj.shop_sts[i].value!="SD02" && obj.shop_sts[i].value!="SD04"){
					alert("��ü�� ���°� '������/���࿬��'�� ��ü�� �������ּ���.");
					return;
				}

			}
		}

		if(obj.mktid.checked){
			donation_cnt++;

			if(obj.shop_sts.value!="SD02" && obj.shop_sts.value!="SD04"){
				alert("��ü�� ���°� '������/���࿬��'�� ��ü�� �������ּ���.");
				return;
			}
		}

	// ����
	}else if( code == "SD04" ){

		for (var i=0; i<obj.mktid.length ; i++ ){
			if(obj.mktid[i].checked){
				donation_cnt++;
				
				if(obj.shop_sts[i].value!="SD03" && obj.shop_sts[i].value!="SD05" && obj.shop_sts[i].value!="SD05"){
					alert("��ü�� ���°� '����/����/���'�� ��ü�� �������ּ���.");
					return;
				}

			}
		}

		if(obj.mktid.checked){
			donation_cnt++;

			if(obj.shop_sts.value!="SD03" && obj.shop_sts.value!="SD05" && obj.shop_sts.value!="SD06"){
				alert("��ü�� ���°� '����/����/���'�� ��ü�� �������ּ���.");
				return;
			}
		}

	}



	if (donation_cnt==0){
		alert("��� ��ü�� �����ϼ���.");
		return;
	}


	var msg = "����";

	if(code=="SD03") msg = "����";
	else if(code=="SD04") msg = "����";
	else if(code=="SD06") msg = "���";

	if(confirm("��ü�� ��縦 "+msg+"�Ͻðڽ��ϱ�?")){
		obj.action = "ADETDonationShopStatus.jsp";
		obj.order.value = code;
		obj.submit();
	}

}

// ����ڸ��
function ShowJoinList(_donation_seq, _mktid){
     window.open("ADETDonationJoinList.jsp?donation_seq="+_donation_seq+"&mktid="+_mktid+"&mnu_no="+document.form1.mnu_no.value, "DonationJoinList", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}

// ��������
function donationUser(_donation_seq, _ssn){
     window.open("ADETDonationUser.jsp?donation_seq="+_donation_seq+"&ssn="+_ssn+"&mnu_no="+document.form1.mnu_no.value, "DonationUser", 'resize=no, scrollbars=no ,height=230, width=270,location=no,directory=no,toolbar=no');
}

function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
}