
/**  ADManagerGroup.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
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
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADSTMenuDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}


/**  ADMenuInput.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */


function Next_Menu() {   // �������� �Է�ȭ��
        if(document.form1.sel_root_nm.value == ""){
              alert("�űԷ� ����� �׷�޴����� �Է��ϼ���.");
		}else{
		  document.form1.submit();
		}
}


function select_group(){

    document.form1.sel_root_nm.value = document.form1.sel_root_nm_view.value ;

}




function Save_Menu() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.middle_nm.value == "") {
			alert("�׷�޴����� �Է��ϼ���.");
			document.form1.middle_nm.focus();
		}
		else if(document.form1.mnu_dir.value == "") {
			alert("�޴� ���丮�� �Է��ϼ���.");
			document.form1.mnu_dir.focus();
		}
		else if(document.form1.mnu_page_nm.value == "") {
			alert("�޴� ���������� �Է��ϼ���.");
			document.form1.mnu_page_nm.focus();
		}else{
			document.form1.submit();
   	    }
}


/**  ADMenuView.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */


function Update_Menu() {   // �۾��׷캰 �޴� ����Ʈ �߰�

         if(document.form1.mnu_nm.value == "" ) {
			alert("�޴����� �Է��ϼ���.");
			document.form1.mnu_nm.focus();
		}else{
			document.form1.submit();
   	    }

}


function Delete_MenuView() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form2.action="ADSTMenuDeleteAction.jsp";
		document.form2.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}
