
/**  ADACManagerGroup.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
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
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADACManagerGroupDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}


function Reload_Menu(){

// ����� �׷��� �������� �޴������� ����ǹǷ� ������ �����Ǹ� �ٽ� �޴��� Reloading �ؾ��Ѵ�.
if(document.form1.reload_check.value == "Y" ) {  
  parent.links.location="/Modules/Main/menu.jsp";
}

}



function Save_Group() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.admin_gp_no_data.value == "" ) {
			alert("�׷��ڵ带 �Է��ϼ���.");
			document.form1.admin_gp_no_data.focus();
		}
		else if(document.form1.gp_nm_data.value == "") {
			alert("�׷� ��Ī�� �Է��ϼ���.");
			document.form1.gp_nm_data.focus();
		}
		else if(document.form1.gp_desc_data.value == "") {
			alert("�׷� ������ �Է��ϼ���.");
			document.form1.gp_desc_data.focus();
		}
        else{

			document.form1.action="ADACManagerGroupInputAction.jsp";
			document.form1.submit();
   	}
}



function Update_Group() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.admin_gp_no_data.value == "" ) {
			alert("�׷��ڵ带 �Է��ϼ���.");
			document.form1.admin_gp_no_data.focus();
		}
		else if(document.form1.gp_nm_data.value == "") {
			alert("�׷� ��Ī�� �Է��ϼ���.");
			document.form1.gp_nm_data.focus();
		}
		else if(document.form1.gp_desc_data.value == "") {
			alert("�׷� ������ �Է��ϼ���.");
			document.form1.gp_desc_data.focus();
		}else{

			document.form1.action="ADACManagerGroupUpdateAction.jsp";
			document.form1.submit();
   	}
}