
function Reload_Menu(){

// 사용자 그룹은 실직적인 메뉴구성에 관계되므로 권한이 수정되면 다시 메뉴를 Reloading 해야한다.
if(document.form1.reload_check.value == "Y" )  
parent.links.location="../Main/menu.jsp";


}


/**  ADACManager.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 7일
 */
function Find_Manager() {
    
	
	
	//if(document.form1.mktid.value=="" && document.form1.admin_gp_no.value=="" && document.form1.sel_id_nm.value=="" ) {
	// document.form1.search_data.value=""	;
   // }
	

	if(document.form1.sel_id_nm.value =="" && document.form1.search_data.value !="" ){
          
     alert(" 검색구분을 입력하세요 ");
	 document.form1.sel_id_nm.focus();

	}else if(document.form1.sel_id_nm.value !="" && document.form1.search_data.value ==""){
          
     alert(" 검색구분 데이타를 입력하세요 ");
	 document.form1.search_data.focus();


	}else{
         document.form1.action="ADACManager.jsp";
         document.form1.submit();
    }
}

function Input_Manager(code,code2) {
   
     window.open("ADACManagerInput.jsp?mnu_no="+code+"&site_cd="+code2, "ADACManagerInput", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');

}


function Delete_Manager() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADACManagerDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}




function Save_Manager() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.admin_id.value == "" ) {
			alert("관리자 ID 를 입력하세요.");
			document.form1.admin_id.focus();
		}
		else if(document.form1.id_check.value == "") {
			alert("ID 중복체크를 하세요.");
		}
		else if(document.form1.admin_nm.value == "") {
			alert("사용자 이름을 입력하세요.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("비밀번호를 입력하세요.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("비밀번호 확인을 입력하세요.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("입력하신 비밀번호가 동일하지 않습니다. 다시한번 확인하세요.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.shop_info.value == "") {
			alert("업체가 선택되지 않았습니다. 찾기 버튼을 클릭하셔서 해당 업체를 선택하세요");
		}
		else if(document.form1.jobgrp.value == "") {
			alert("직급을 입력하세요.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("관리자종류를 입력하세요.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.sub_dept.value == "") {
			alert("소속부서를 입력하세요.");
			document.form1.sub_dept.focus();
		}
		else if(document.form1.email.value == "") {
			alert("e-mail을 입력하세요.");
			document.form1.email.focus();
		}
		else if(document.form1.comp_tel1.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel1.focus();
		}
		else if(document.form1.comp_tel2.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel2.focus();
		}
		else if(document.form1.comp_tel3.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel3.focus();
		}
		else if(document.form1.mob_tel1.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel1.focus();
		}
		else if(document.form1.mob_tel2.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel2.focus();
		}
		else if(document.form1.mob_tel3.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel3.focus();
		}
		else if(document.form1.fax_tel1.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel1.focus();
		}
		else if(document.form1.fax_tel2.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel2.focus();
		}
		else if(document.form1.fax_tel3.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel3.focus();
		}
		else if(document.form1.use_yn.value == "") {
			alert("사용유무를 입력하세요.");
			document.form1.use_yn.focus();
		}
        else{

			document.form1.action="ADACManagerInputAction.jsp";
			document.form1.submit();
    	}
}


function View_Manager(no,code, site_cd, corp_id) {

	window.open("ADACManagerView.jsp?mnu_no="+no+"&code="+code+"&site_cd="+site_cd+"&corp_id="+corp_id, "ADACManagerView", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');
}






/**
 * ADACManagerView.jsp Include Javascript
 */
function Update_Manager() {   // 작업그룹별 메뉴 리스트 수정

        if(document.form1.admin_id.value == "" ) {
			alert("사용자 ID 를 입력하세요.");
			document.form1.admin_id.focus();
		}
		/*else if(document.form1.id_check.value == "") {
			alert("ID 중복체크를 하세요.");
		}*/
		else if(document.form1.admin_nm.value == "") {
			alert("사용자 이름을 입력하세요.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("비밀번호를 입력하세요.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("비밀번호 확인을 입력하세요.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("입력하신 비밀번호가 동일하지 않습니다. 다시한번 확인하세요.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_gp_no.value == "") {
			alert("사용자 그룹을 입력하세요.");
			document.form1.admin_gp_no.focus();
		}
		else if(document.form1.jobgrp.value == "") {
			alert("직급을 입력하세요.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("관리자종류를 입력하세요.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.sub_dept.value == "") {
			alert("소속부서를 입력하세요.");
			document.form1.sub_dept.focus();
		}
		else if(document.form1.email.value == "") {
			alert("e-mail을 입력하세요.");
			document.form1.email.focus();
		}
		else if(document.form1.comp_tel1.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel1.focus();
		}
		else if(document.form1.comp_tel2.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel2.focus();
		}
		else if(document.form1.comp_tel3.value == "") {
			alert("전화번호를 입력하세요.");
			document.form1.comp_tel3.focus();
		}
		else if(document.form1.mob_tel1.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel1.focus();
		}
		else if(document.form1.mob_tel2.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel2.focus();
		}
		else if(document.form1.mob_tel3.value == "") {
			alert("휴대폰번호를 입력하세요.");
			document.form1.mob_tel3.focus();
		}
		else if(document.form1.fax_tel1.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel1.focus();
		}
		else if(document.form1.fax_tel2.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel2.focus();
		}
		else if(document.form1.fax_tel3.value == "") {
			alert("팩스번호를 입력하세요.");
			document.form1.fax_tel3.focus();
		}
		else if(document.form1.use_yn.value == "") {
			alert("사용유무를 입력하세요.");
			document.form1.use_yn.focus();
		}
        else{

			document.form1.action="ADACManagerUpdateAction.jsp";
			document.form1.submit();
    	}
}