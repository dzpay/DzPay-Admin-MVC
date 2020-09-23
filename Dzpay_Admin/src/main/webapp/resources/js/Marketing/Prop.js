
/**  ADMKPropList.jsp Include Javascript
 *    작성자    : deadlines
 *    작성일자 : 2004년 10월 4일
 */
function Search_Prop(no) {
   
    document.form1.action="ADMKPropList.jsp?mnu_no="+no;
    document.form1.submit();
}


function Input_Prop(code) {
   
     window.open("ADMKPropInput.jsp?mnu_no="+code, "ADMKPropInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}



function View_Contents() {
	   
	  html_yn = document.form1.html_yn.value;
	  contents = document.form1.contents.value;
 
      window.open("ADMKPropInputView.jsp?html_yn="+html_yn+"&contents="+contents, "ADMKPropInputView", 'resize=yes, scrollbars=yes ,height=400, width=500,location=no,directory=no,toolbar=no');
}


function View_Prop(no,code) {

	window.open("ADMKPropView.jsp?mnu_no="+no+"&qna_seq="+code, "ADMKPropView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}


function Delete_Prop() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKPropDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}



function Save_Prop() {   // Prop 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKPropInputAction.jsp";
			document.form1.submit();
    	}
}




function Update_Prop() {   // Prop 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKPropUpdateAction.jsp";
			document.form1.submit();
    	}
}

function Answer_Prop() {   // Prop 답변 저장

        if(document.form1.answer_title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.answer_title.focus();
		}
		else if(document.form1.answer_contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.answer_contents.focus();
		}
        else{

			document.form1.action="ADMKPropReplyInputAction.jsp";
			document.form1.submit();
    	}
}

function Send_Prop() {   // QNA 이관

       
			document.form1.action="ADMKPropSendMailAction.jsp";
			document.form1.submit();
    	
}

function Go_UserInfo(mnu_no,mktid,ssn) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=800' ;
	sfile = "../../User/User/ADURUserFrame.jsp?mnu_no=" + mnu_no + "&mktid=" + mktid + "&ssn=" + ssn;
	winObj = window.open(sfile, "UserInfoWin", winOpts) ;
	
}