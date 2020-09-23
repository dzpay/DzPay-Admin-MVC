
/**  ADManagerGroup.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */
function Search_Top_Menu() {
   
    document.form1.action="ADSTMenu.jsp";
    document.form1.submit();
}

function Search_Middle_Menu() {
   
    document.form1.action="ADSTMenu.jsp";
    document.form1.submit();
}

function Search_Menu() {
   
    document.form1.action="ADSTMenu.jsp";
    document.form1.submit();
}


function Input_Menu(code) {
   
     window.open("ADSTMenuInput.jsp?mnu_no="+code, "ADSTMenuInput", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');

}


function View_Menu(no,code) {

	window.open("ADSTMenuView.jsp?mnu_no="+no+"&code="+code, "ADSTMenuView", 'resize=no, scrollbars=yes ,height=500, width=850,location=no,directory=no,toolbar=no');
}



function Delete_Menu() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADSTMenuDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}


/**  ADMenuInput.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */


function Next_Menu() {   // 실질적인 입력화면
        if(document.form1.sel_root_nm.value == ""){
              alert("신규로 등록할 그룹메뉴명을 입력하세요.");
		}else{
		  document.form1.submit();
		}
}


function select_group(){

    document.form1.sel_root_nm.value = document.form1.sel_root_nm_view.value ;

}




function Save_Menu() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.middle_nm.value == "") {
			alert("그룹메뉴명을 입력하세요.");
			document.form1.middle_nm.focus();
		}
		else if(document.form1.mnu_dir.value == "") {
			alert("메뉴 디렉토리를 입력하세요.");
			document.form1.mnu_dir.focus();
		}
		else if(document.form1.mnu_page_nm.value == "") {
			alert("메뉴 페이지명을 입력하세요.");
			document.form1.mnu_page_nm.focus();
		}else{
			document.form1.submit();
   	    }
}


/**  ADMenuView.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */


function Update_Menu() {   // 작업그룹별 메뉴 리스트 추가

         if(document.form1.mnu_nm.value == "" ) {
			alert("메뉴명을 입력하세요.");
			document.form1.mnu_nm.focus();
		}else{
			document.form1.submit();
   	    }

}


function Delete_MenuView() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form2.action="ADSTMenuDeleteAction.jsp";
		document.form2.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}
