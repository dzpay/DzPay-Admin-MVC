
/**  ADMKBugList.jsp Include Javascript
 *    �ۼ���   :  skyking
 *    �ۼ����� : 2005�� 11�� 22��
 */
function Search_Bug(no) {
   
    document.form1.action="ADMKBugList.jsp?mnu_no="+no;
    document.form1.submit();
}


function Input_Bug(code) {
   
     window.open("ADMKBugInput.jsp?mnu_no="+code, "ADMKBugInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}



function View_Contents() {
	   
	  html_yn = document.form1.html_yn.value;
	  contents = document.form1.contents.value;
 
      window.open("ADMKBugInputView.jsp?html_yn="+html_yn+"&contents="+contents, "ADMKBugInputView", 'resize=yes, scrollbars=yes ,height=400, width=500,location=no,directory=no,toolbar=no');
}


function View_Bug(no,code) {

	window.open("ADMKBugView.jsp?mnu_no="+no+"&qna_seq="+code, "ADMKBugView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}


function Delete_Bug() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKBugDelAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}



function Save_Bug() {   // Bug ����

        if(document.form1.title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKBugInputAction.jsp";
			document.form1.submit();
    	}
}




function Update_Bug() {   // Bug ����

        if(document.form1.title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKBugUpdateAction.jsp";
			document.form1.submit();
    	}
}

function Answer_Bug() {   // Bug �亯 ����

        if(document.form1.answer_title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.answer_title.focus();
		}
		else if(document.form1.answer_contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.answer_contents.focus();
		}
        else{

			document.form1.action="ADMKBugReplyInputAction.jsp";
			document.form1.submit();
    	}
}

function Send_Bug() {   // Bug �̰�

       
			document.form1.action="ADMKBugSendMailAction.jsp";
			document.form1.submit();
    	
}


function Go_UserInfo(mnu_no,mktid,ssn) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=800' ;
	sfile = "../../User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&ssn=" + ssn;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}