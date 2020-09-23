/**
 * 파일명   : Poll.js
 * 기  능   : ADPoll.jsp Include Javascript
 * 
 * @author  조영문
 * @version	1.0
 * @since   2002.10.23
 */

function isNumber(f) {
    var chars = "0123456789";
    return containsCharsOnly(f,chars);
}

function containsCharsOnly(f,chars) {
    for (var inx = 0; inx < f.value.length; inx++) {
       if (chars.indexOf(f.value.charAt(inx)) == -1)
           return false;
    }
    return true;
}

function isDate(value) {

    if ( value.length != 8)
        return false;
    else {
        var year  = value.substring(0,4);
        var month = value.substring(4,6);
        var day   = value.substring(6,8);

        if ( parseInt( year ) >= 1900  && checkMonth( month ) && checkDay( year, month, day ))
            return true;
        else {
            return false;
        }

    }
}

function checkDay(yyyy,mm,dd) {
    var monthDD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var im = parseInt(mm) - 1;

    if( ( (yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0) )
        monthDD[1] = 29;

    if( dd <= "0" || dd > monthDD[im] )
        return false;
    else
        return true;
}

function checkMonth(value) {
    if ( value  <= "0"  || value > "12"  )
        return false;
    else
        return true;
}

// 숫자만 입력되는지 체크
function onlyNumber()
{
    if(((event.keyCode<48)||(event.keyCode>57)))
    event.returnValue=false;
}


function Find_Poll() {  // News 검색

	if(document.form1.search_data.value =="" ){

     alert(" 검색 Keyword를 입력하세요 ");
	 document.form1.search_data.focus();

	}else{
         document.form1.search_yn.value = 'Y';
         document.form1.action="ADMKPollList.jsp";
         document.form1.submit();
    }

}

function Input_Poll() {
   
     window.open("ADMKPollInput.jsp", "ADMKPollInput", 'resize=no, scrollbars=yes ,height=500, width=850,location=no,directory=no,toolbar=no');

}


function Delete_Poll() {    // News 삭제
    
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMSPollDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}




function Register_Poll() {   // Poll 등록

        if(document.form1.poll_qt.value == "" ) {
			alert("Poll 질문을 입력하세요.");
			document.form1.poll_qt.focus();
		}
		else if(document.form1.rst_cont[0].value == "") {
			alert("Poll 답변을 입력하세요.");
			document.form1.rst_cont[0].focus();
		}
		else if(document.form1.rst_cont[1].value == "") {
			alert("적어도 두개의 Poll 답변을 입력하셔야 합니다.");
			document.form1.rst_cont[1].focus();
		}
		else if(document.form1.reg_str_dt.value == "") {
			alert("Poll 시작일을 입력하세요.");
			document.form1.reg_str_dt.focus();
		}
		else if(document.form1.reg_end_dt.value == "") {
			alert("Poll 종료일을 입력하세요.");
			document.form1.reg_end_dt.focus();
		}
		else if(!isDate(document.form1.reg_str_dt.value)) {
			alert("Poll 시작일은 날짜형식으로 입력해 주세요. (예 : 200209091010)");
			document.form1.reg_str_dt.focus();
		}
		else if(!isDate(document.form1.reg_end_dt.value)) {
			alert("Poll 종료일은 날짜형식으로 입력해 주세요. (예 : 200209091010)");
			document.form1.reg_end_dt.focus();
		}
		else if(document.form1.reg_end_dt.value <= document.form1.reg_str_dt.value) {
			alert("Poll 종료일과 시작일이 바뀌었습니다.");
			document.form1.reg_end_dt.focus();
		}
        else{

			document.form1.action="ADMKPollInputAction.jsp";
			document.form1.submit();
    	}
}


function View_Poll(poll_no,mnu_no) { // News 조회

	window.open("ADMKPollView.jsp?mnu_no="+mnu_no+"&poll_no="+poll_no, "ADPollView", 'resize=no, scrollbars=yes ,height=650, width=850,location=no,directory=no,toolbar=no');

}

function Update_Poll() {   // Poll 등록

        if(document.form1.poll_qt.value == "" ) {
			alert("Poll 질문을 입력하세요.");
			document.form1.poll_qt.focus();
		}
		else if(document.form1.rst_cont[0].value == "") {
			alert("Poll 답변을 입력하세요.");
			document.form1.rst_cont[0].focus();
		}
		else if(document.form1.rst_cont[1].value == "") {
			alert("적어도 두개의 Poll 답변을 입력하셔야 합니다.");
			document.form1.rst_cont[1].focus();
		}
		else if(document.form1.reg_str_dt.value == "") {
			alert("Poll 시작일을 입력하세요.");
			document.form1.reg_str_dt.focus();
		}
		else if(document.form1.reg_end_dt.value == "") {
			alert("Poll 종료일을 입력하세요.");
			document.form1.reg_end_dt.focus();
		}
		else if(!isDate(document.form1.reg_str_dt.value)) {
			alert("Poll 시작일은 날짜형식으로 입력해 주세요. (예 : 200209091010)");
			document.form1.reg_str_dt.focus();
		}
		else if(!isDate(document.form1.reg_end_dt.value)) {
			alert("Poll 종료일은 날짜형식으로 입력해 주세요. (예 : 200209091010)");
			document.form1.reg_end_dt.focus();
		}
		else if(document.form1.reg_end_dt.value <= document.form1.reg_str_dt.value) {
			alert("Poll 종료일과 시작일이 바뀌었습니다.");
			document.form1.reg_end_dt.focus();
		}
        else{

			document.form1.action="ADMKPollUpdateAction.jsp";
			document.form1.submit();
    	}
}

function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.reg_str_dt.value  = cur.year + cur.month + cur.date; break;
				case '2':  document.form1.reg_end_dt.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

<!-- Main Js 생성 -->
function goCreateJs() {	
	document.form1.action = "ADMKPollCreateJs.jsp";
	document.form1.submit();	
}