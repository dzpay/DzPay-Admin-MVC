function enrollAdmin(){
	var el = document.getElementsByName("admin-form")[0];
		if ( el.id.value == "") {
			alert("이이디를 입력해주세요" );
			el.id.focus();
			return;
		}
		else if(el.password.value == ""){
			alert("패스워드를 입력하세요");
			el.password.focus();
			return;
		} 
		else if(el.admin_gp_no.value == ""){
			alert("그룹을 선택해주세요");
			el.admin_gp_no.focus();
			return;
		}
		else if(el.admin_nm.value == ""){
			alert("관리자 이름을 입력하세요");
			el.admin_nm.focus();
			return;
		}
		else if(el.sub_dept.value == ""){
			alert("관리자 담당을 입력하세요");
			el.sub_dept.focus();
			return;
		}
		else if(el.job_tit.value == ""){
			alert("관리자의 담당 분야를 선택하세요");
			el.job_tit.focus();
			return;
		}
		else if(el.email.value == ""){
			alert("관리자의 이메일을 입력하세요");
			el.email.focus();
			return;
		}
		else if(el.comp_no.value == ""){
			alert("관리자 회사 번호를 입력하세요");
			el.comp_no.focus();
			return;
		}
		else if(el.mob_no.value == ""){
			alert("관리자의 휴대폰 번호를 입력하세요");
			el.mob_no.focus();
			return;
		}
		else if(el.fax_no.value == ""){
			alert("관리자의 팩스 번호를 입력하세요");
			el.fax_no.focus();
			return;
		}
		else if(el.site_cd.value == ""){
			alert("사이트 코드를 입력하세요");
			el.site_cd.focus();
			return;
		}
		else if(el.corp_cd.value == ""){
			alert("회사 코드를 입력하세요\nex)MK100000");
			el.corp_cd.focus();
			return;
		}
		else if(el.view_type.value == ""){
			alert("조회 레벨을 선택하세요");
			el.view_type.focus();
			return;
		}
		else if(el.site_cd.value.length > 5){
			alert('사이트 코드는 다섯자리입니다');
			el.site_cd.focus();
			return;
		}
	document.getElementById('admin-form').submit();
}

