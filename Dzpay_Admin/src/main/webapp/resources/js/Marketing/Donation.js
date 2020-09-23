/**  ADETDonation.jsp Include Javascript
 *    작성자    : 이상준
 *    작성일자 : 2004년 11월 09일
 */
function search(_page) {
   
    document.form1.action=_page;
    document.form1.submit();
}

// 공백을 제외한 문자열의 길이 반환
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

// 해당 문자열의 byte 게산
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

//날짜 선택 달력 스크립트
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

// 공백 / maximum bytes 체크
function frmCheck( _form_obj, _zero_check_yn, _max_length, _form_str ){

	var form_obj = _form_obj;
	var str = form_obj.value;
	var max_length = _max_length;
	var form_str = _form_str;
	
	// zero_check_yn 값이 "Y"인 경우 공백 체크
	if( _zero_check_yn=="Y" && getLength(str)==0 ){
		alert( form_str+" 항목은 반드시 입력하셔야 합니다.");
		form_obj.focus();
		return false;
	}

	// max_length 값이 0보다 큰경우 byte check
	if(max_length>0 && cal_byte(str)>max_length){
		alert( form_str+" 항목은 "+max_length+" byte 까지만 입력할 수 있습니다.");
		form_obj.focus();
		return false;
	}

	return true;
}


// 체크박스를 모두 체크, 언체크
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

// 신규 도네이션 등록
function Regist_Donation(code) {
  
     window.open("ADETDonationInput.jsp?mnu_no="+code, "DonationInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}

// 도네이션 마스터 내용 수정
function Modify_Donation(){
	var obj = document.form1;

	// 제목
	if( !frmCheck(obj.donation_nm, "Y", 500, "행사명") ){
		return;
	}

	// 기간 - 시작일
	if( !frmCheck(obj.start_dt, "Y", 0, "기간(시작일)") ){
		return;
	}

	// 기간 - 종료일
	if( !frmCheck(obj.end_dt, "Y", 0, "기간(종료일)") ){
		return;
	}

	// 행사ID
	if( !frmCheck(obj.donation_id, "Y", 20, "행사ID") ){
		return;
	}

	// 내용
	if( !frmCheck(obj.donation_id, "N", 500, "내용") ){
		return;
	}

	obj.action = "ADETDonationModify.jsp";
	obj.target= "_blank";

	obj.submit();
}

// 신규 도네이션 등록 폼체크
function Save_Donation(){

	var obj = document.form1;

	// 제목
	if( !frmCheck(obj.donation_nm, "Y", 500, "행사명") ){
		return;
	}

	// 기간 - 시작일
	if( !frmCheck(obj.start_dt, "Y", 0, "기간(시작일)") ){
		return;
	}

	// 기간 - 종료일
	if( !frmCheck(obj.end_dt, "Y", 0, "기간(종료일)") ){
		return;
	}

	// 행사ID
	if( !frmCheck(obj.donation_id, "Y", 20, "행사ID") ){
		return;
	}

	// 내용
	if( !frmCheck(obj.donation_id, "N", 500, "내용") ){
		return;
	}

	obj.action = "ADETDonationInputAction.jsp";

	obj.submit();
}

// 도네이션 상세보기 페이지로 이동
function showDetail(_seq){
	document.form1.donation_seq_src.value = _seq;
	document.form1.action = "ADETDonationDetail.jsp";
	document.form1.submit();
}

// 도네이션 삭제
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
		alert("삭제하실 행사를 체크하세요.");
	}else{
		if(confirm("선택하신 행사를 삭제하시겠습니까?")){
			obj.order.value = "remove";
			obj.action = "ADETDonationStatus.jsp";
			obj.submit();
		}
	}
}

// 도네이션 상태 변경
function modDonationStatus(_code){
	var code = _code;

	var msg = "시작(연장)";

	if(code=="DS03"){
		msg = "마감";
	}else if(code=="DS04"){
		msg = "취소";
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
		alert(msg+"하실 행사를 체크하세요.");
	}else{
		if(confirm("선택하신 행사를 "+msg+"하시겠습니까?")){
			obj.order.value = code;
			obj.action = "ADETDonationStatus.jsp";
			obj.submit();
		}
	}

}

// 업체도네이션 추가
function insertShop(){
	var obj = document.form1;

	if(obj.donation_sts.value != "DS02" ){
		alert("행사가 진행중인 경우에만 연결할 수 있습니다.");
		return;
	}

	var donation_cnt = 0;

	for (var i=0; i<obj.mktid.length ; i++ ){
		if(obj.mktid[i].checked){
			donation_cnt++;
			
			if(obj.shop_sts[i].value!="SD01"){
				alert("업체의 상태가 '미진행'인 업체만 선택해주세요.");
				return;
			}

		}
	}

	if(obj.mktid.checked){
		donation_cnt++;

		if(obj.shop_sts.value!="SD01"){
			alert("업체의 상태가 '미진행'인 업체만 선택해주세요.");
			return;
		}
	}

	if(donation_cnt==0){
		alert("행사에 연결할 업체를 선택하세요.");
	}else{
		if(confirm("선택하신 업체를 행사에 연결하시겠습니까?")){

			obj.order.value = "SD01";
			obj.action = "ADETDonationShopStatus.jsp";
			obj.submit();

		}
	}
}

// 연결업체 상태(SHOP_STS) 변경
function modShopStatus(_code){
	var obj = document.form1;
	var code = _code;
	var donation_cnt = 0;


	if(obj.donation_sts.value != "DS02" ){
		alert("행사가 진행중인 경우에만 업체연결상태를 변경할 수 있습니다.");
		return;
	}

	// 마감, 중지, 취소
	if( code=="SD05" || code=="SD03" || code=="SD06" ){
		
		for (var i=0; i<obj.mktid.length ; i++ ){
			if(obj.mktid[i].checked){
				donation_cnt++;
				
				if(obj.shop_sts[i].value!="SD02" && obj.shop_sts[i].value!="SD04"){
					alert("업체의 상태가 '진행중/진행연장'인 업체만 선택해주세요.");
					return;
				}

			}
		}

		if(obj.mktid.checked){
			donation_cnt++;

			if(obj.shop_sts.value!="SD02" && obj.shop_sts.value!="SD04"){
				alert("업체의 상태가 '진행중/진행연장'인 업체만 선택해주세요.");
				return;
			}
		}

	// 연장
	}else if( code == "SD04" ){

		for (var i=0; i<obj.mktid.length ; i++ ){
			if(obj.mktid[i].checked){
				donation_cnt++;
				
				if(obj.shop_sts[i].value!="SD03" && obj.shop_sts[i].value!="SD05" && obj.shop_sts[i].value!="SD05"){
					alert("업체의 상태가 '중지/마감/취소'인 업체만 선택해주세요.");
					return;
				}

			}
		}

		if(obj.mktid.checked){
			donation_cnt++;

			if(obj.shop_sts.value!="SD03" && obj.shop_sts.value!="SD05" && obj.shop_sts.value!="SD06"){
				alert("업체의 상태가 '중지/마감/취소'인 업체만 선택해주세요.");
				return;
			}
		}

	}



	if (donation_cnt==0){
		alert("대상 업체를 선택하세요.");
		return;
	}


	var msg = "마감";

	if(code=="SD03") msg = "중지";
	else if(code=="SD04") msg = "연장";
	else if(code=="SD06") msg = "취소";

	if(confirm("업체의 행사를 "+msg+"하시겠습니까?")){
		obj.action = "ADETDonationShopStatus.jsp";
		obj.order.value = code;
		obj.submit();
	}

}

// 기부자목록
function ShowJoinList(_donation_seq, _mktid){
     window.open("ADETDonationJoinList.jsp?donation_seq="+_donation_seq+"&mktid="+_mktid+"&mnu_no="+document.form1.mnu_no.value, "DonationJoinList", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}

// 제한조건
function donationUser(_donation_seq, _ssn){
     window.open("ADETDonationUser.jsp?donation_seq="+_donation_seq+"&ssn="+_ssn+"&mnu_no="+document.form1.mnu_no.value, "DonationUser", 'resize=no, scrollbars=no ,height=230, width=270,location=no,directory=no,toolbar=no');
}

function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
}