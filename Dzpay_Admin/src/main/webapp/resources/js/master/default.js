function enrollAdmin(){
	var el = document.getElementsByName("admin-form")[0];
		if ( el.id.value == "") {
			alert("���̵� �Է����ּ���" );
			el.id.focus();
			return;
		}
		else if(el.password.value == ""){
			alert("�н����带 �Է��ϼ���");
			el.password.focus();
			return;
		} 
		else if(el.admin_gp_no.value == ""){
			alert("�׷��� �������ּ���");
			el.admin_gp_no.focus();
			return;
		}
		else if(el.admin_nm.value == ""){
			alert("������ �̸��� �Է��ϼ���");
			el.admin_nm.focus();
			return;
		}
		else if(el.sub_dept.value == ""){
			alert("������ ����� �Է��ϼ���");
			el.sub_dept.focus();
			return;
		}
		else if(el.job_tit.value == ""){
			alert("�������� ��� �о߸� �����ϼ���");
			el.job_tit.focus();
			return;
		}
		else if(el.email.value == ""){
			alert("�������� �̸����� �Է��ϼ���");
			el.email.focus();
			return;
		}
		else if(el.comp_no.value == ""){
			alert("������ ȸ�� ��ȣ�� �Է��ϼ���");
			el.comp_no.focus();
			return;
		}
		else if(el.mob_no.value == ""){
			alert("�������� �޴��� ��ȣ�� �Է��ϼ���");
			el.mob_no.focus();
			return;
		}
		else if(el.fax_no.value == ""){
			alert("�������� �ѽ� ��ȣ�� �Է��ϼ���");
			el.fax_no.focus();
			return;
		}
		else if(el.site_cd.value == ""){
			alert("����Ʈ �ڵ带 �Է��ϼ���");
			el.site_cd.focus();
			return;
		}
		else if(el.corp_cd.value == ""){
			alert("ȸ�� �ڵ带 �Է��ϼ���\nex)MK100000");
			el.corp_cd.focus();
			return;
		}
		else if(el.view_type.value == ""){
			alert("��ȸ ������ �����ϼ���");
			el.view_type.focus();
			return;
		}
		else if(el.site_cd.value.length > 5){
			alert('����Ʈ �ڵ�� �ټ��ڸ��Դϴ�');
			el.site_cd.focus();
			return;
		}
	document.getElementById('admin-form').submit();
}

