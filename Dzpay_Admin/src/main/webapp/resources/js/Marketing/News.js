
/**  ADACManagerGroup.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */
function Search_News() {
   
    document.form1.action="ADMKNewsList.jsp";
    document.form1.submit();
}

function Input_News(code) {
   
     window.open("ADMKNewsInput.jsp?mnu_no="+code, "ADMKNewsInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}

function Main_News() {
   
     window.open("ADMKNewsGenerate.jsp", "ADMKNewsGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADMKNewsGenerate.jsp";
	document.form1.submit();
 
}

function View_Contents() {
	   
	  if( document.form1.html_yn(0).checked ) html_yn = "Y";
	  if( document.form1.html_yn(1).checked ) html_yn = "N";
	  
	  contents = document.form1.contents.value;
	  
	  if( html_yn=="N")	{	  	
  		contents = contents.replace(/(\r{0,1})\n/g, "<br>");		
	  }
      window.open("ADMKNewsInputView.jsp?html_yn="+html_yn+"&contents="+contents, "ADMKNewsInputView", 'resize=yes, scrollbars=yes ,height=400, width=500,location=no,directory=no,toolbar=no');
}


function View_News(no,code) {

	window.open("ADMKNewsView.jsp?mnu_no="+no+"&code="+code, "ADMKNewsView", 'resize=no, scrollbars=yes ,height=600, width=800,location=no,directory=no,toolbar=no');
}


function Delete_News(code) {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKNewsDeleteAction.jsp?del_check="+code;
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}



function Save_News() {   // 공지사항 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsInputAction.jsp";
			document.form1.submit();
    	}
}


function Save_News2() {   // 공지사항 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsInputAction.jsp";
			document.form1.submit();
    	}
}



function Update_News() {   // 공지사항 저장

        if(document.form1.title.value == "" ) {
			alert("제목을 입력하세요.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("내용을 입력하세요.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsUpdateAction.jsp";
			document.form1.submit();
    	}
}

