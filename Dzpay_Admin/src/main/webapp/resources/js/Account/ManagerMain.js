
function Reload_Menu(){	
	
	// ����� �׷��� �������� �޴������� ����ǹǷ� ������ �����Ǹ� �ٽ� �޴��� Reloading �ؾ��Ѵ�.
	if(document.form1.reload_check.value == "Y" )  
	parent.links.location="../Main/menu.jsp";
	
}

/**
 * ADACManager.jsp Include Javascript
 */
function Find_Manager() {
	
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
		else if(document.form1.jobgrp.value == "") {
			alert("������ �Է��ϼ���.");
			document.form1.jobgrp.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("��������� �Է��ϼ���.");
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


function View_Manager(no,code) {

	window.open("ADACManagerView.jsp?mnu_no="+no+"&code="+code, "ADACManagerView", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');
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
			alert("��������� �Է��ϼ���.");
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
        else{

			document.form1.action="ADACManagerMainUpdateAction.jsp";
			document.form1.submit();
    	}
}

/**
 * ��й�ȣ ��å�� �����ϴ� �� üũ!
 * in_txt : document.form.in_text (o)
 * in_txt : document.form.in_text.value (x)
 */
function checkPassword(in_txt) {
	// ��й�ȣ ��å�� ���� ���� ��������.
	
	//7~15��, �ּ�1���̻��� �����ҹ��ڿ� Ư������ ����, ������ҹ���,����,Ư������ ����
	var paswd = /^(?=.*[a-z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{7,15}$/;
		
	// 7~15��, �ּ�1���̻��� ���ڿ� Ư������ ����, ������ҹ���,����,Ư������ ����
	//var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

	// 7~14��, ������ҹ��ڸ� ����!
  //var paswd=  /^[A-Za-z]\w{7,14}$/;
  
  // 6~20��, �ּ�1���̻��� ����, �빮��, �ҹ��� �ϳ��� ����!
  //var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
  // 8~15��, �ּ�1���̻��� �����ҹ���, �����빮��, ����, Ư������, ����!
  //var paswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	
	var len = in_txt.value.length;
	
	if ( (len < 7) || (len > 15) ) {
		alert("��й�ȣ�� 7~15�ڷ� ���������մϴ�.");
		return false;
	}
  
  if(in_txt.value.match(paswd)){
  	return true;
  }else {
  	alert("��밡���� ��й�ȣ�� �ƴմϴ�.\n��й�ȣ ������Ģ�� Ȯ���ϼ���.");
  	return false;
  }
}


/**  
 * ADACManagerViewMain.jsp Include Javascript
 */
function Update_Manager_New() {
	
	if(checkPassword(document.form1.admin_pwd)){
		if(document.form1.admin_id.value == "" ) {
			alert("�����ھ��̵� �Է��ϼ���.");
			document.form1.admin_id.focus();
		}
		else if(document.form1.admin_nm.value == "") {
			alert("�����ڸ��� �Է��ϼ���.");
			document.form1.admin_nm.focus();
		}
		else if(document.form1.admin_pwd.value == "") {
			alert("��й�ȣ�� �Է��ϼ���.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("��й�ȣȮ���� �Է��ϼ���.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("��й�ȣ�� ��й�ȣȮ���� ���� ��ġ���� �ʽ��ϴ�.");
			document.form1.admin_pwd.value ="";
			document.form1.admin_pwd_comp.value ="";
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_gp_no.value == "") {
			alert("�����ڱ׷��� �Է��ϼ���.");
			document.form1.admin_gp_no.focus();
		}
		else if(document.form1.chgtype.value == "") {
			alert("��������� �Է��ϼ���.");
			document.form1.chgtype.focus();
		}
		else if(document.form1.jobgrp.value == "") {
			alert("������ �Է��ϼ���.");
			document.form1.jobgrp.focus();
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
			alert("�����ھ��̵� �Է��ϼ���.");
			document.form1.admin_id.focus();
		}		
		else if(document.form1.admin_pwd.value == "") {
			alert("��й�ȣ�� �Է��ϼ���.");
			document.form1.admin_pwd.focus();
		}
		else if(document.form1.admin_pwd_comp.value == "") {
			alert("��й�ȣȮ���� �Է��ϼ���.");
			document.form1.admin_pwd_comp.focus();
		}
		else if(document.form1.admin_pwd_comp.value != document.form1.admin_pwd.value) {
			alert("��й�ȣ�� ��й�ȣȮ���� ���� ��ġ���� �ʽ��ϴ�.");
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