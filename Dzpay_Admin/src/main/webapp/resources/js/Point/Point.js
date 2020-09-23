/**  
 *   교통머니 Include Javascript
 *   작성자    : byunghun.Oh
 *   작성일자 : 2004년 9월 23일
 */
function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}

// 관리자 수정내역중 승인처리
function Send_Approve() {
	var num = 0;
	
	for(var i=0; i < document.form2.elements.length; i++) {
		if (document.form2.elements[i].name == "chk_id") {
			if (document.form2.elements[i].checked == true) {
				num++;
			}
		}
	}
	if (num == 0 ) {
    	alert("거부처리 목록을 선택하여 주세요.");
		return;
	}
	if (document.form3.auth_id.value == "")
	{
		alert("승인자 아이디를 입력하여 주세요");
		document.form3.auth_id.focus();
		return;
	}
	if (document.form3.auth_pw.value == "")
	{
		alert("승인자 비밀번호를 입력하여 주세요");
		document.form3.auth_pw.focus();
		return;
	}
	document.form2.auth_id.value = document.form3.auth_id.value;
	document.form2.auth_pw.value = document.form3.auth_pw.value;
	document.form2.action = 'ADPTAdminApproveAction.jsp';
	document.form2.submit();

}

// 관리자 승인 내역 중 거부처리
function Send_Disapprove() {

	document.form2.auth_id.value = document.form3.auth_id.value;
	document.form2.auth_pw.value = document.form3.auth_pw.value;
	document.form2.action = 'ADPTAdminDisapproveAction.jsp';
	document.form2.submit();
	
}
// 관리자 승인 내역 거부처리 중 거부처리 팝업
function Send_Disapprove_Pop() {

	var num = 0;
	var winl = (screen.width - 500) / 2; 
    var wint = (screen.height - 500) / 2;
	

	for(var i=0; i < document.form2.elements.length; i++) {
		if (document.form2.elements[i].name == "chk_id") {
			if (document.form2.elements[i].checked == true) {
				num++;
			}
		}
	}
	if (num == 0 ) {
    	alert("거부처리 목록을 선택하여 주세요.");
		return;
	}
	if (document.form3.auth_id.value == "")
	{
		alert("승인자 아이디를 입력하여 주세요");
		document.form3.auth_id.focus();
		return;
	}
	if (document.form3.auth_pw.value == "")
	{
		alert("승인자 비밀번호를 입력하여 주세요");
		document.form3.auth_pw.focus();
		return;
	}
	

    winOpts = 'status=0, scrollbars=no,resizable=0, menubar=no, top='+wint+',left='+winl+', width=500, height=200' ;
	sfile = './ADPTAdminDisapprove.jsp'  ;

	winObj = window.open(sfile, "mi_disapprove_pop", winOpts) ;

}

// 검색 조건에 따른  페이지 검색
function Send_Search()
{
	var datesplit;
	if (document.form1.date_from.value.length > 0) {
		/* 2005.09.26 deadlines 수정
		datesplit = document.form1.date_from.value.split("-");

		if (date_formate_yyyymmdd_check(document.form1.date_from.value) == '-1')
		{
			alert('yyyy-mm-dd 의형식으로 입력하여주세요.\nex) 2004/01/01');
			document.form1.date_from.focus();
			return;
		}
		
		for ( var i = 0; i < datesplit.length ; i++ )
		{
			if (number_check(datesplit[i]) == '-1')
			{
				alert('수치를 입력하여주세요.');
			    document.form1.date_from.focus();
			    return;
				break;
			}

		}

		if (date_number_yyyymmdd_check(datesplit[0],datesplit[1],datesplit[2]) == '-1')
		{
			alert('수치를 입력하여 주세요.');
			document.form1.date_from.focus();
			return;
		}
		*/
		if (document.form1.date_from.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
		if (document.form1.date_to.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_to.focus();
			return;			
		}
		if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
	}
	
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

// 검색 조건에 따른  페이지 검색
function Send_Point_Search()
{
	var datesplit;
	if (document.form1.date_from.value.length > 0) {
		/* 2005.09.26 deadlines 수정
		datesplit = document.form1.date_from.value.split("-");

		if (date_formate_yyyymmdd_check(document.form1.date_from.value) == '-1')
		{
			alert('yyyy-mm-dd 의형식으로 입력하여주세요.\nex) 2004/01/01');
			document.form1.date_from.focus();
			return;
		}
		
		for ( var i = 0; i < datesplit.length ; i++ )
		{
			if (number_check(datesplit[i]) == '-1')
			{
				alert('수치를 입력하여주세요.');
			    document.form1.date_from.focus();
			    return;
				break;
			}

		}

		if (date_number_yyyymmdd_check(datesplit[0],datesplit[1],datesplit[2]) == '-1')
		{
			alert('수치를 입력하여 주세요.');
			document.form1.date_from.focus();
			return;
		}
		*/
		if (document.form1.date_from.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
		if (document.form1.date_to.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_to.focus();
			return;			
		}
		if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
	}
	
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

/************
*
* 기능 : 날짜 형식을 확인한다.
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
	{   if ((comment.charAt(4) != '-') || (comment.charAt(10) != ' ') || (comment.charAt(7) != '/')  ||  (comment.charAt(13) != ':'))
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
* 기능 : 월별 날짜를 체크한다.
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
* 기능 : 윤달을 체크한다.
*
*/
function leapYear(year) {
	if (year % 4 == 0) return true;
}
 
/************
*
* 기능 : 수치를 체크한다.
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

// 달력추가 2004.10.08 황정현

function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.date_from.value  = cur.year + cur.month + cur.date; 
				               //2005.09.23 수정 deadlines
				               //document.form1.date_to.value  = cur.year + "-"+cur.month +"-"+ cur.date;	
				           break;
				case '2':  document.form1.date_to.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

function Go_PointHistory_Info(mnu_no,point_id) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=900, height=500' ;
	sfile = "/Modules/Point/Trans/ADPTTransHistoryView.jsp?mnu_no=" + mnu_no + "&point_id=" + point_id;
	winObj = window.open(sfile, "ADPTTransHistoryView", winOpts) ;
	
}

