
function Reload_Menu(){

// 사용자 그룹은 실직적인 메뉴구성에 관계되므로 권한이 수정되면 다시 메뉴를 Reloading 해야한다.
if(document.form1.reload_check.value == "Y" ) {  
  parent.links.location="/Modules/Main/menu.jsp";
}

}


function Delete_Menu() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKQuickMenuDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}




function Input_Menu() {
   
  if(document.form1.new_q_mnu_nm.value == "" ||  document.form1.new_q_mnu_nm.value == null) {
        alert("새로운 바로가기 메뉴명을 입력하세요");
		document.form1.new_q_mnu_nm.focus();
  }else if(document.form1.new_q_mnu_url.value == "" ) {
        alert("새로운 바로가기 메뉴  URL 을 입력하세요");
		document.form1.new_q_mnu_url.focus();
  }else{
    document.form1.action="ADMKQuickMenuInputAction.jsp";
    document.form1.submit();
  }
  
}



function Main_Menu() {
   
     window.open("ADMKQuickMenuGenerate.jsp", "ADMKQuickMenuGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADMKQuickMenuGenerate.jsp";
	document.form1.submit();
 
}

function Update(){

	document.form1.action="ADMKQuickMenuUpdate.jsp";
	document.form1.submit();
 
}
