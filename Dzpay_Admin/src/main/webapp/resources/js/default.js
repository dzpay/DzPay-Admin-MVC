// Calender.jsp Include Script 

function getParameter(str, name)
{
		val = "";

		val_index = str.indexOf(name);

		if (val_index != -1)
		{
			val = str.substring(val_index);

			if (val.length > (name.length + 1))
			{
				if (val.charAt(name.length) == "=")
				{
					val = val.substring(name.length + 1);

					val_end = val.indexOf("&");

					if (val_end != -1)
					{
						val = val.substring(0, val_end);
					}
				}
			}
		}

		return	val;
}



var focus_obj
var form_nm = getParameter(location.search, "form_nm");
var date_nm = getParameter(location.search, "date_nm");
var cal_flag = getParameter(location.search, "cal_flag");

function setOpener(form)
{
		yyyy = form.year.value;

		mm = eval(form.month.options[form.month.selectedIndex].value);

		if (mm < 10)
		{
			mm = "0" + mm;
		}

		dd = eval(form.date.value);

		if (dd < 10)
		{
			dd = "0" + dd;
		}
/*	
		hh = eval(form.hour.value);

		if (hh < 0)
		{
			hh = "00";
		}
		else if (hh < 10)
		{
			hh = "0" + hh;
		}
		else if (hh > 23)
		{
			hh = "23";
		}

		mi = eval(form.minute.value);

		if (hh < 0)
		{
			hh = "00";
		}
		else if (mi < 10)
		{
			mi = "0" + mi;
		}
		else if (mi > 59)
		{
			mi = "59";
		}

		ss = eval(form.second.value);

		if (ss < 0)
		{
			ss = "00";
		}
		else if (ss < 10)
		{
			ss = "0" + ss;
		}
		else if (ss > 59)
		{
			ss = "59";
		}
*/
		if (cal_flag == "DT")  //20020327 형식으로 출력하기
		{
			opener.document.all[form_nm].elements(date_nm).value = yyyy + mm + dd;
			self.close();
		}
		else if (cal_flag == "DM")  // 2002-03-27 형식으로 출력하기
		{

			var today = new Date();
			var now_mm = today.getMonth() + 1;
			var now_dd = today.getDate();
			var now_hh = today.getHours();
			var now_mi = today.getMinutes();

			if (now_mm < 10) {
				now_mm = "0" + now_mm;
			}
			if (now_dd < 10) {
				now_dd = "0" + now_dd;
			}
			if (now_hh < 10) {
				now_hh = "0" + now_hh;
			}
			if (now_mi < 10) {
				now_mi = "0" + now_mi;
			}

			var now_date = 	today.getYear() + "" + now_mm + "" + now_dd + "" + now_hh + "" + now_mi;
			var sel_date = yyyy +"-"+ mm +"-"+ dd;

				opener.document.all[form_nm].elements(date_nm).value = sel_date;
				self.close();
		} else {
			alert('cal_flag 파라미터가 올바르지 않습니다.');
			self.close();
		}

}



function init(form)
{
		form.form_nm.value = form_nm;
		form.date_nm.value = date_nm;
		form.cal_flag.value = cal_flag;

		var today = new Date();
		form.year.value = today.getYear();
		form.month.options[today.getMonth()].selected = true;
		form.date.value = today.getDate();

		showCalendar(form);
/*
		if (cal_flag == "DM")
		{
			document.all['A1'].style.display = "";
		}
*/
}



function increaseYear(form)
{
		++form.year.value;
		showCalendar(form);
}


function decreaseYear(form)
{
		--form.year.value;
		showCalendar(form);
}


function setFocus(obj)
{
		focus_obj = obj;
		document.form1.b3.disabled = false;
		document.form1.b4.disabled = false;
}



function increaseObj()
{
		value = eval(focus_obj.value);

		++value;

		if (value < 10)
		{
			focus_obj.value = "0" + value;
		}
		else
		{
			focus_obj.value = value;
		}
}



function decreaseObj()
{
		value = eval(focus_obj.value);
		
		if (value == 0)
		{
			return;
		}

		--value;

		if (value < 10)
		{
			focus_obj.value = "0" + value;
		}
		else
		{
			focus_obj.value = value;
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 칼렌터
function calendar(form, form_nm, date_nm, cal_flag)	{
		var Calendar = window.open('../../common/Calendar.jsp?form_nm=' + form_nm + '&date_nm=' + date_nm + '&cal_flag=' + cal_flag, 'Calendar', 'status=no,width=270,height=270');
		Calendar.focus();
}

function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.s_dt.value  = cur.year + cur.month + cur.date; 
				               document.form1.e_dt.value  = cur.year + cur.month + cur.date;	break;
				case '2':  document.form1.e_dt.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// HOME 우편번호
// 우편번호 열기
function zipCodeOpen() {
		//var zipcode_search = window.open('../../common/Zipcode.jsp','zipcode_search','left=250,top=250,width=380,height=265');
		var zipcode_search = window.open('../../common/zip_search.jsp','zipcode_search','scrollbars=yes,left=250,top=250,width=380,height=265');
		zipcode_search.moveTo(360,20);
		zipcode_search.focus();
}


function setZipCode(zipcode1,zipcode2, addr1,addr2, addr3) {
		//집주소 검색 일때
			document.form1.home_post_no1.value = zipcode1;
			document.form1.home_post_no2.value = zipcode2;
			document.form1.home_addr1.value = addr1 + " " + addr2 + " " + addr3;
			document.form1.home_addr2.focus();
	
}


function search(form) {
	if(form.search_word.value == "") {
		alert("검색어를 입력하세요.");
		form.search_word.focus();
		return;
	}

	form.submit();
}

function SetZipCode()
{
	var f = document.searchResultForm;

	var nSelected = f.addrList.selectedIndex;
	
	//주소를 선택했는지 체크
	if (nSelected < 0) 
	{
		alert("선택된 주소가 없습니다.\n목록에서 원하는 주소를 선택한 후 [확인] 버튼을 눌러주세요.");
		return;
	}
	
	var rAddr = new Array();

	//주소를 우편번호와 분류한다.
	rAddr = f.addrList[f.addrList.selectedIndex].value.split("|");

	var rBungi = new Array();
	
	rBungi = rAddr[0].split("-");
	opener.setZipCode(rBungi[0], rBungi[1].substring(0,3), rAddr[1], rAddr[2], rAddr[3]);

	this.close();
}



////////////////  WORK 우편번호
// 우편번호 열기
function zipCodeOpen_work() {
		var zipcode_search = window.open('../../common/Zipcode_work.jsp','zipcode_search','left=250,top=250,width=380,height=265');
		zipcode_search.moveTo(360,20);
		zipcode_search.focus();
}


function setZipCode_work(zipcode1,zipcode2, addr1,addr2, addr3) {
		//집주소 검색 일때
			document.form1.work_post_no1.value = zipcode1;
			document.form1.work_post_no2.value = zipcode2;
			document.form1.work_addr1.value = addr1 + " " + addr2 + " " + addr3;
			document.form1.work_addr2.focus();
	
}


function SetZipCode_work()
{
	var f = document.searchResultForm;

	var nSelected = f.addrList.selectedIndex;
	
	//주소를 선택했는지 체크
	if (nSelected < 0) 
	{
		alert("선택된 주소가 없습니다.\n목록에서 원하는 주소를 선택한 후 [확인] 버튼을 눌러주세요.");
		return;
	}
	
	var rAddr = new Array();

	//주소를 우편번호와 분류한다.
	rAddr = f.addrList[f.addrList.selectedIndex].value.split("|");

	var rBungi = new Array();
	
	rBungi = rAddr[0].split("-");

	opener.setZipCode_work(rBungi[0], rBungi[1].substring(0,3), rAddr[1], rAddr[2], rAddr[3]);

	this.close();
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**  ADIdOverLap.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 8일
 */

function idCheck() {
	if( document.form1.admin_id.value == "" ) {
		alert("검색하고자 하는 아이디를 입력하여 주십시오.");
		document.form1.admin_id.focus();
		return;
	} 

	document.form1.submit();
}

function setUesrID(check, ok) {
	opener.setUserID1(check, ok);
	this.close();
}

function setUserID1(admin_id, ok) {
		document.form1.admin_id.value = admin_id;
		document.form1.id_check.value = ok;
}



// 처음 페이지에서 부름

function userIDCheck() { // 회원 아이디가 사용 가능한지 체크
		if(document.form1.admin_id.value == "") {
			alert("회원 ID를 입력하세요.");
			document.form1.admin_id.focus();
			return;
		}
		url = "../../common/ADIdOverLap.jsp?admin_id=" + document.form1.admin_id.value ;
		
		var id_use = window.open(url, 'UserIDCheck','left=250,top=200,width=380,height=200');
		id_use.moveTo(360,20);
		id_use.focus();

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**  ADFindComp.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 18일
 */

// 소속업체 페이지 열기
function FindCompOpen() {
		var comp_search = window.open('../common/ADFindComp.jsp','comp_search','left=350,top=350,width=350,height=300');
		comp_search.moveTo(360,20);
		comp_search.focus();
}


function setCompCode_old() {
		
			opener.document.form1.comp_no.value = document.form1.comp_no.value;
			opener.document.form1.comp_nm.value = document.form1.comp_no.value;
            //window.close();	

			alert(document.form1.comp_no.value+"가 선택되었습니다");
}

function setCompCode() {
		
           for(var i = 0 ; i < document.form1.comp_no.length;  i++){
			      
				  if(document.form1.comp_no[i].checked == true ) {
           
			    opener.document.form1.comp_no.value = document.form1.comp_no[i].value;
			    opener.document.form1.comp_nm.value = document.form1.comp_no[i].value;
                window.close();	

			//alert(document.form1.comp_no[i].value+"가 선택되었습니다");
				  }
           }
}       



function Find_Comp() {
 document.form1.action = "ADFindComp.jsp";
 document.form1.submit();
}
		
