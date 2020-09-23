/**
 * ���ϸ�   : Poll.js
 * ��  ��   : ADPoll.jsp Include Javascript
 * 
 * @author  ������
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

// ���ڸ� �ԷµǴ��� üũ
function onlyNumber()
{
    if(((event.keyCode<48)||(event.keyCode>57)))
    event.returnValue=false;
}


function Find_Poll() {  // News �˻�

	if(document.form1.search_data.value =="" ){

     alert(" �˻� Keyword�� �Է��ϼ��� ");
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


function Delete_Poll() {    // News ����
    
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMSPollDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}




function Register_Poll() {   // Poll ���

        if(document.form1.poll_qt.value == "" ) {
			alert("Poll ������ �Է��ϼ���.");
			document.form1.poll_qt.focus();
		}
		else if(document.form1.rst_cont[0].value == "") {
			alert("Poll �亯�� �Է��ϼ���.");
			document.form1.rst_cont[0].focus();
		}
		else if(document.form1.rst_cont[1].value == "") {
			alert("��� �ΰ��� Poll �亯�� �Է��ϼž� �մϴ�.");
			document.form1.rst_cont[1].focus();
		}
		else if(document.form1.reg_str_dt.value == "") {
			alert("Poll �������� �Է��ϼ���.");
			document.form1.reg_str_dt.focus();
		}
		else if(document.form1.reg_end_dt.value == "") {
			alert("Poll �������� �Է��ϼ���.");
			document.form1.reg_end_dt.focus();
		}
		else if(!isDate(document.form1.reg_str_dt.value)) {
			alert("Poll �������� ��¥�������� �Է��� �ּ���. (�� : 200209091010)");
			document.form1.reg_str_dt.focus();
		}
		else if(!isDate(document.form1.reg_end_dt.value)) {
			alert("Poll �������� ��¥�������� �Է��� �ּ���. (�� : 200209091010)");
			document.form1.reg_end_dt.focus();
		}
		else if(document.form1.reg_end_dt.value <= document.form1.reg_str_dt.value) {
			alert("Poll �����ϰ� �������� �ٲ�����ϴ�.");
			document.form1.reg_end_dt.focus();
		}
        else{

			document.form1.action="ADMKPollInputAction.jsp";
			document.form1.submit();
    	}
}


function View_Poll(poll_no,mnu_no) { // News ��ȸ

	window.open("ADMKPollView.jsp?mnu_no="+mnu_no+"&poll_no="+poll_no, "ADPollView", 'resize=no, scrollbars=yes ,height=650, width=850,location=no,directory=no,toolbar=no');

}

function Update_Poll() {   // Poll ���

        if(document.form1.poll_qt.value == "" ) {
			alert("Poll ������ �Է��ϼ���.");
			document.form1.poll_qt.focus();
		}
		else if(document.form1.rst_cont[0].value == "") {
			alert("Poll �亯�� �Է��ϼ���.");
			document.form1.rst_cont[0].focus();
		}
		else if(document.form1.rst_cont[1].value == "") {
			alert("��� �ΰ��� Poll �亯�� �Է��ϼž� �մϴ�.");
			document.form1.rst_cont[1].focus();
		}
		else if(document.form1.reg_str_dt.value == "") {
			alert("Poll �������� �Է��ϼ���.");
			document.form1.reg_str_dt.focus();
		}
		else if(document.form1.reg_end_dt.value == "") {
			alert("Poll �������� �Է��ϼ���.");
			document.form1.reg_end_dt.focus();
		}
		else if(!isDate(document.form1.reg_str_dt.value)) {
			alert("Poll �������� ��¥�������� �Է��� �ּ���. (�� : 200209091010)");
			document.form1.reg_str_dt.focus();
		}
		else if(!isDate(document.form1.reg_end_dt.value)) {
			alert("Poll �������� ��¥�������� �Է��� �ּ���. (�� : 200209091010)");
			document.form1.reg_end_dt.focus();
		}
		else if(document.form1.reg_end_dt.value <= document.form1.reg_str_dt.value) {
			alert("Poll �����ϰ� �������� �ٲ�����ϴ�.");
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

<!-- Main Js ���� -->
function goCreateJs() {	
	document.form1.action = "ADMKPollCreateJs.jsp";
	document.form1.submit();	
}