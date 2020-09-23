// 검색조건에 따른 페이지 검색
function Send_Search()
{
	var datesplit;

	if (document.form1.date_from.value.length > 0) {
		/* 2005.09.23 deadlines 수정
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


function checkUnit(unit)
{   
	document.form1.check_unit.value = unit;
	document.form1.action="ADDEMileage.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

function checkIdx_key(idx_key)
{   
	document.form1.idx_key.value = idx_key;
	document.form1.action="ADDEMilageShopList.jsp";
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}


function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}




function GoCancelDetail(sale_dt,unit) {
	document.form1.sale_dt.value = sale_dt;
	document.form1.unit.value = unit;
    document.form1.action = 'ADDEMilageCancelList.jsp';
	document.form1.submit();

}

function GoShopDetail(sale_dt,unit) {
	document.form1.sale_dt.value = sale_dt;
	document.form1.unit.value = unit;
    document.form1.action = 'ADDEMilageShopList.jsp';
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
				               //document.form1.date_to.value  = cur.year + cur.month + cur.date;	
				           break;
				case '2':  document.form1.date_to.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}
