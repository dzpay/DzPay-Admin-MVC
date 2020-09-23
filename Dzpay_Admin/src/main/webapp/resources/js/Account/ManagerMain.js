
function Reload_Menu(){	
	
	// 사용자 그룹은 실직적인 메뉴구성에 관계되므로 권한이 수정되면 다시 메뉴를 Reloading 해야한다.
	if(document.form1.reload_check.value == "Y" )  
	parent.links.location="../Main/menu.jsp";
	
}

/**
 * ADACManager.jsp Include Javascript
 */
function Find_Manager() {
	
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
		else if(document.form1.jobgrp.value == "") {
			alert("직급을 입력하세요.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("담당종류를 입력하세요.");
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


function View_Manager(no,code) {

	window.open("ADACManagerView.jsp?mnu_no="+no+"&code="+code, "ADACManagerView", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');
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
			alert("담당종류를 입력하세요.");
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
        else{

			document.form1.action="ADACManagerMainUpdateAction.jsp";
			document.form1.submit();
    	}
}

/**
 * 비밀번호 정책에 부합하는 지 체크!
 * in_txt : document.form.in_text (o)
 * in_txt : document.form.in_text.value (x)
 */
function checkPassword(in_txt) {
	// 비밀번호 정책에 따라서 추후 설정하자.
	
	//7~15자, 최소1자이상의 영문소문자와 특수문자 포함, 영문대소문자,숫자,특수문자 가능
	var paswd = /^(?=.*[a-z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,15}$/;
		
	// 7~15자, 최소1자이상의 숫자와 특수문자 포함, 영문대소문자,숫자,특수문자 가능
	//var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

	// 7~14자, 영문대소문자만 가능!
  //var paswd=  /^[A-Za-z]\w{7,14}$/;
  
  // 6~20자, 최소1자이상의 숫자, 대문자, 소문자 하나씩 포함!
  //var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
  // 8~15자, 최소1자이상의 영문소문자, 영문대문자, 숫자, 특수문자, 포함!
  //var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	
	var len = in_txt.value.length;
	
	if ( (len < 7) || (len > 15) ) {
		alert("비밀번호는 7~15자로 설정가능합니다.");
		return false;
	}
  
  if(in_txt.value.match(paswd)){
  	return true;
  }else {
  	alert("사용가능한 비밀번호가 아닙니다.\n비밀번호 설정규칙을 확인하세요.");
  	return false;
  }
}


/**  
 * ADACManagerViewMain.jsp Include Javascript
 */
function Update_Manager_New() {
	
	if(checkPassword(document.form1.admin_pwd)){
		if(document.form1.admin_id.value == "" ) {
			alert("관리자아이디를 입력하세요.");
			document.form1.admin_id.focus();
		}
		else if(document.form1.admin_nm.value == "") {
			alert("관리자명을 입력하세요.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("비밀번호를 입력하세요.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("비밀번호확인을 입력하세요.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("비밀번호와 비밀번호확인이 서로 일치하지 않습니다.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_gp_no.value == "") {
			alert("관리자그룹을 입력하세요.");
			document.form1.admin_gp_no.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("담당종류를 입력하세요.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.jobgrp.value == "") {
			alert("직급을 입력하세요.");
			document.form1.jobgrp.focus();
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
		else{		
			document.form1.action="ADACManagerMainUpdateAction.jsp";
			document.form1.submit();
	  }
	}
}

/**  
 * ADACPwdUpdate.jsp Include Javascript
 */
function Update_Pwd() {
	
	if(checkPassword(document.form1.admin_pwd)){
		
		if(document.form1.admin_id.value == "" ) {
			alert("관리자아이디를 입력하세요.");
			document.form1.admin_id.focus();
		}		
		else if(document.form1.admin_pwd.value == "") {
			alert("비밀번호를 입력하세요.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("비밀번호확인을 입력하세요.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("비밀번호와 비밀번호확인이 서로 일치하지 않습니다.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}		
		else{		
			document.form1.action="ADACPwdUpdateAction.jsp";
			document.form1.submit();
	  }
	}
}