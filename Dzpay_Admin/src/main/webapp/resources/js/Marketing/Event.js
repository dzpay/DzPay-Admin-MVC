/**  ADETDonation.jsp Include Javascript
 *    �ۼ���    : �̻���
 *    �ۼ����� : 2004�� 11�� 09��
 */
 
String.prototype.trim = function() {

	return this.replace(/(^\s*)|(\s*$)/gi, "");

}

function searchEvent() {
   
    document.form1.action="ADETEvent.jsp";
    document.form1.submit();
}

function insertEvent(code) {
   
     window.open("ADETEventInput.jsp?mnu_no="+code, "ADETEventInput", 'resize=no, scrollbars=yes ,height=400, width=450,location=no,directory=no,toolbar=no');

}


function insertEventMaster() {
	document.form1.event_nm.value = document.form1.event_nm.value.trim();
	document.form1.event_mktid.value = document.form1.event_mktid.value.trim();

	if(document.form1.event_nm.value == "" ) {
		alert("�̺�Ʈ�̸��� �Է��ϼ���.");
		document.form1.event_nm.focus();
	}
	else if(document.form1.start_dt.value == "" ) {
		alert("�������� �Է��ϼ���.");
		document.form1.start_dt.focus();
	}
	else if(document.form1.end_dt.value == "" ) {
		alert("�������� �Է��ϼ���.");
		document.form1.end_dt.focus();
	}
	else if(document.form1.event_mktid.value == "" ) {
		alert("�ְ��縦 ����ϼ���.");
		document.form1.event_mktid.focus();
	}
	else{

		document.form1.action="ADETEventInputAction.jsp";
		document.form1.submit();
	}
}

function insertEventWinnum() {
	document.form1.action="ADETEventRankInputAction.jsp";
	document.form1.submit();

}

function deleteEvent() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADETEventDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}

function deleteEventWinnum() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADETEventRankDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}

function showDetail(seq, code) {
     window.open("ADETEventRankInput.jsp?event_seq="+seq+"&mnu_no="+code, "ADETEventRankInput", 'resize=no, scrollbars=yes ,height=600, width=650,location=no,directory=no,toolbar=no');
}

// ���� �ο�����
function showJoinUser(seq) {
   
    document.form1.search_seq.value=seq;
    document.form1.action="ADETEventJoinUser.jsp";
    document.form1.submit();
}

//��÷ �ο� ����
function showWinUser(seq) {
   
    document.form1.search_seq.value=seq;
    document.form1.action="ADETEventWinUser.jsp";
    document.form1.submit();
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





// ȸ������
// 2005.05.16 Ȳ����

function Go_UserInfo(mnu_no,mktid,ssn) {
	
	var winl = (screen.width - 800) / 2; 
  var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=850' ;
	sfile = "/Modules/User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&ssn=" + ssn;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}

function Event_File_Upload(mnu_no, event_seq) {
  var winl = (screen.width - 800) / 2; 
  var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=850' ;
	sfile = "ADETEventFileFrame.jsp?mnu_no=" + mnu_no + "&event_seq=" + event_seq ;
	winObj = window.open(sfile, "EventUP", winOpts) ;
}

