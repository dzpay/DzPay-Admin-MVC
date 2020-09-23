
/**  ADMKQNAList.jsp Include Javascript
 *    작성자    : deadlines
 *    작성일자 : 2004년 10월 4일
 */
function Search_QNA(no) {
   
    document.form1.action="ADMKQNAList.jsp?mnu_no="+no;
    document.form1.submit();
}


function Input_QNA(code) {
   
     window.open("ADMKQNAInput.jsp?mnu_no="+code, "ADMKQNAInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}



function View_Contents() {
	   
	  html_yn = document.form1.html_yn.value;
	  contents = document.form1.contents.value;
 
      window.open("ADMKQNAInputView.jsp?html_yn="+html_yn+"&contents="+contents, "ADMKQNAInputView", 'resize=yes, scrollbars=yes ,height=400, width=500,location=no,directory=no,toolbar=no');
}


function View_QNA(no,code) {

	window.open("ADMKQNAView.jsp?mnu_no="+no+"&qna_seq="+code, "ADMKQNAView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}


function Delete_QNA() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKQNADeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}



function Save_QNA() {   // QNA 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKQNAInputAction.jsp";
			document.form1.submit();
    	}
}




function Update_QNA() {   // QNA 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKQNAUpdateAction.jsp";
			document.form1.submit();
    	}
}

function Answer_QNA() {   // QNA 답변 저장

        if(document.form1.answer_title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.answer_title.focus();
		}
		else if(document.form1.answer_contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.answer_contents.focus();
		}
        else{

			document.form1.action="ADMKQNAReplyInputAction.jsp";
			document.form1.submit();
    	}
}

function Send_QNA() {   // QNA 이관

       
			document.form1.action="ADMKQNASendMailAction.jsp";
			document.form1.submit();
    	
}


function Go_UserInfo(mnu_no,mktid,ssn) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=800' ;
	sfile = "../../User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&ssn=" + ssn;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}