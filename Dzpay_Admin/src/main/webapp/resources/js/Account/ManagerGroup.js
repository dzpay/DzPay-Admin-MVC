
/**  ADACManagerGroup.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */
function Search_Group() {
   
    document.form1.action="ADACManagerGroup.jsp";
    document.form1.submit();
}

function Input_Group(code) {
   
     window.open("ADACManagerGroupInput.jsp?mnu_no="+code, "ADACManagerGroupInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}

function Back_Group() {
   
   window.history.back();
}

function go_page(mnu_no,page_no,search_data) {
   
    document.form1.search_data.value=search_data;
    document.form1.action="ADACManagerGroup.jsp";
    document.form1.submit();
}

function View_Group(no,code) {

	window.open("ADACManagerGroupView.jsp?mnu_no="+no+"&code="+code, "ADACManagerGroupView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}


function Delete_Group() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADACManagerGroupDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}


function Reload_Menu(){

// 사용자 그룹은 실직적인 메뉴구성에 관계되므로 권한이 수정되면 다시 메뉴를 Reloading 해야한다.
if(document.form1.reload_check.value == "Y" ) {  
  parent.links.location="/Modules/Main/menu.jsp";
}

}



function Save_Group() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.admin_gp_no_data.value == "" ) {
			alert("그룹코드를 입력하세요.");
			document.form1.admin_gp_no_data.focus();
		}
		else if(document.form1.gp_nm_data.value == "") {
			alert("그룹 명칭을 입력하세요.");
			document.form1.gp_nm_data.focus();
		}
		else if(document.form1.gp_desc_data.value == "") {
			alert("그룹 설명을 입력하세요.");
			document.form1.gp_desc_data.focus();
		}
        else{

			document.form1.action="ADACManagerGroupInputAction.jsp";
			document.form1.submit();
   	}
}



function Update_Group() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.admin_gp_no_data.value == "" ) {
			alert("그룹코드를 입력하세요.");
			document.form1.admin_gp_no_data.focus();
		}
		else if(document.form1.gp_nm_data.value == "") {
			alert("그룹 명칭을 입력하세요.");
			document.form1.gp_nm_data.focus();
		}
		else if(document.form1.gp_desc_data.value == "") {
			alert("그룹 설명을 입력하세요.");
			document.form1.gp_desc_data.focus();
		}else{

			document.form1.action="ADACManagerGroupUpdateAction.jsp";
			document.form1.submit();
   	}
}