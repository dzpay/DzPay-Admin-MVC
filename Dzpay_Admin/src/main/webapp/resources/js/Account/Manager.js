
function Reload_Menu(){

// ����� �׷��� �������� �޴������� ����ǹǷ� ������ �����Ǹ� �ٽ� �޴��� Reloading �ؾ��Ѵ�.
if(document.form1.reload_check.value == "Y" )  
parent.links.location="../Main/menu.jsp";


}


/**  ADACManager.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 7��
 */
function Find_Manager() {
    
	
	
	//if(document.form1.mktid.value=="" && document.form1.admin_gp_no.value=="" && document.form1.sel_id_nm.value=="" ) {
	// document.form1.search_data.value=""	;
   // }
	

	if(document.form1.sel_id_nm.value =="" && document.form1.search_data.value !="" ){
          
     alert(" �˻������� �Է��ϼ��� ");
	 document.form1.sel_id_nm.focus();

	}else if(document.form1.sel_id_nm.value !="" && document.form1.search_data.value ==""){
          
     alert(" �˻����� ����Ÿ�� �Է��ϼ��� ");
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
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADACManagerDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}




function Save_Manager() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.admin_id.value == "" ) {
			alert("������ ID �� �Է��ϼ���.");
			document.form1.admin_id.focus();
		}
		else if(document.form1.id_check.value == "") {
			alert("ID �ߺ�üũ�� �ϼ���.");
		}
		else if(document.form1.admin_nm.value == "") {
			alert("����� �̸��� �Է��ϼ���.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("��й�ȣ�� �Է��ϼ���.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("��й�ȣ Ȯ���� �Է��ϼ���.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("�Է��Ͻ� ��й�ȣ�� �������� �ʽ��ϴ�. �ٽ��ѹ� Ȯ���ϼ���.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.shop_info.value == "") {
			alert("��ü�� ���õ��� �ʾҽ��ϴ�. ã�� ��ư�� Ŭ���ϼż� �ش� ��ü�� �����ϼ���");
		}
		else if(document.form1.jobgrp.value == "") {
			alert("������ �Է��ϼ���.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("������������ �Է��ϼ���.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.sub_dept.value == "") {
			alert("�ҼӺμ��� �Է��ϼ���.");
			document.form1.sub_dept.focus();
		}
		else if(document.form1.email.value == "") {
			alert("e-mail�� �Է��ϼ���.");
			document.form1.email.focus();
		}
		else if(document.form1.comp_tel1.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel1.focus();
		}
		else if(document.form1.comp_tel2.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel2.focus();
		}
		else if(document.form1.comp_tel3.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel3.focus();
		}
		else if(document.form1.mob_tel1.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel1.focus();
		}
		else if(document.form1.mob_tel2.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel2.focus();
		}
		else if(document.form1.mob_tel3.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel3.focus();
		}
		else if(document.form1.fax_tel1.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel1.focus();
		}
		else if(document.form1.fax_tel2.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel2.focus();
		}
		else if(document.form1.fax_tel3.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel3.focus();
		}
		else if(document.form1.use_yn.value == "") {
			alert("��������� �Է��ϼ���.");
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
function Update_Manager() {   // �۾��׷캰 �޴� ����Ʈ ����

        if(document.form1.admin_id.value == "" ) {
			alert("����� ID �� �Է��ϼ���.");
			document.form1.admin_id.focus();
		}
		/*else if(document.form1.id_check.value == "") {
			alert("ID �ߺ�üũ�� �ϼ���.");
		}*/
		else if(document.form1.admin_nm.value == "") {
			alert("����� �̸��� �Է��ϼ���.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("��й�ȣ�� �Է��ϼ���.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("��й�ȣ Ȯ���� �Է��ϼ���.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("�Է��Ͻ� ��й�ȣ�� �������� �ʽ��ϴ�. �ٽ��ѹ� Ȯ���ϼ���.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_gp_no.value == "") {
			alert("����� �׷��� �Է��ϼ���.");
			document.form1.admin_gp_no.focus();
		}
		else if(document.form1.jobgrp.value == "") {
			alert("������ �Է��ϼ���.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("������������ �Է��ϼ���.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.sub_dept.value == "") {
			alert("�ҼӺμ��� �Է��ϼ���.");
			document.form1.sub_dept.focus();
		}
		else if(document.form1.email.value == "") {
			alert("e-mail�� �Է��ϼ���.");
			document.form1.email.focus();
		}
		else if(document.form1.comp_tel1.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel1.focus();
		}
		else if(document.form1.comp_tel2.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel2.focus();
		}
		else if(document.form1.comp_tel3.value == "") {
			alert("��ȭ��ȣ�� �Է��ϼ���.");
			document.form1.comp_tel3.focus();
		}
		else if(document.form1.mob_tel1.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel1.focus();
		}
		else if(document.form1.mob_tel2.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel2.focus();
		}
		else if(document.form1.mob_tel3.value == "") {
			alert("�޴�����ȣ�� �Է��ϼ���.");
			document.form1.mob_tel3.focus();
		}
		else if(document.form1.fax_tel1.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel1.focus();
		}
		else if(document.form1.fax_tel2.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel2.focus();
		}
		else if(document.form1.fax_tel3.value == "") {
			alert("�ѽ���ȣ�� �Է��ϼ���.");
			document.form1.fax_tel3.focus();
		}
		else if(document.form1.use_yn.value == "") {
			alert("��������� �Է��ϼ���.");
			document.form1.use_yn.focus();
		}
        else{

			document.form1.action="ADACManagerUpdateAction.jsp";
			document.form1.submit();
    	}
}