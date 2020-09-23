
function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}
function Send_Search() {
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
		}else if (document.form1.date_to.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_to.focus();
			return;			
		}else if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}else {
			document.form1.method="post";
			document.form1.target="_self";
			document.form1.submit();
		}	
	}
	
	
}


function Send_Search_Detail() {
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
	
	document.frm1.method="post";
	document.frm1.target="_self";
	document.frm1.submit();
}

function Send_Input() {
	var num = 0;
	
	for(var i=0; i < document.form2.elements.length; i++) {
		if (document.form2.elements[i].name == "point_shop_seq") {
			if (document.form2.elements[i].checked == true) {
				num++;
			}
		}
	}
	if (num == 0 ) {
    	alert("입금확인 목록을 선택하여 주세요.");
		return;
	}
	document.form2.method="post";
	document.form2.target="_self";
	document.form2.action = 'ADSASaleComfirmAction.jsp';
	document.form2.submit();
}


function Go_SaleAdjust(mnu_no,date_from,date_to,mkt_nm,point_shop_seq,mktid) {

	location.href = 'ADSASaleAdjustList.jsp?mnu_no='+mnu_no+'&date_from=' + date_from + '&date_to=' + date_to + '&mkt_nm='+ mkt_nm + '&point_shop_seq=' + point_shop_seq + '&mktid=' + mktid;

}
function Go_PartnerDetail(mnu_no,date_from,date_to,mktid,fee_type) {

	location.href = 'ADSAPartnerDetailList.jsp?mnu_no='+mnu_no+'&date_from=' + date_from + '&date_to=' + date_to + '&degumtype='+ fee_type + '&search_mktid=' + mktid;

}

function GoDetail(mktid,sale_dt,fee_type) {
  document.form2.mktid.value = mktid;
	document.form2.sale_dt.value = sale_dt;
	document.form2.fee_type.value = fee_type;
  document.form2.action = '/Modules/Sale/Output/ADSAPartnerDetailList2.jsp';
	document.form2.submit();

}

function Go_ASPAdjust(seq, mktid) {

	document.form1.action = 'ADSAASPAdjustList.jsp?seq='+ seq +'&mktid='+ mktid;
	document.form1.submit();

}

function Go_PartnerAdjust(seq, from, to, mnu, view) {

	location.href = 'ADSAPartnerAdjustList.jsp?seq=' + seq + '&date_from=' + from + '&date_to=' + to + '&mnu_no=' + mnu + '&view=' + view;
	//document.form1.submit();

}

function Show_Daily(mnu_no, sale_dt, date_from, date_to, mkt_nm, mktid, point_shop_seq){
	var url = "ADSASaleDailyList.jsp?";
	url += "mnu_no="+mnu_no;
	url += "&sale_dt="+sale_dt;
	url += "&date_from="+date_from;
	url += "&date_to="+date_to;
	url += "&mkt_nm="+mkt_nm;
	url += "&mktid="+mktid;
	url += "&point_shop_seq="+point_shop_seq;

	window.open(url, "SaleDailyList", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

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
* 기능 : 윤단을 체크한다.
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

function update() {

	var obj = document.frm1;
	var num = 0;
	var donation_cnt = 0;

	for(var i=0; i < obj.elements.length; i++) {
		if (obj.elements[i].name == "seq") {
			if (obj.elements[i].checked == true) {
				num++;
			}
		}
	}
	if (num == 0 ) {
		return;
	}
	for (var i=0; i<obj.seq.length ; i++ ){
		if(obj.seq[i].checked){
			donation_cnt++;
		}
	}

	if(obj.seq.checked){
		donation_cnt++;
	}

	if(donation_cnt==0){
		alert("입금 확인 하실 아이템들을 체크하세요.");
	}else{
		obj.submit();
	}


}