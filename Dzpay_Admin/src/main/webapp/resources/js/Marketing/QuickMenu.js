
function Reload_Menu(){

// ����� �׷��� �������� �޴������� ����ǹǷ� ������ �����Ǹ� �ٽ� �޴��� Reloading �ؾ��Ѵ�.
if(document.form1.reload_check.value == "Y" ) {  
  parent.links.location="/Modules/Main/menu.jsp";
}

}


function Delete_Menu() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKQuickMenuDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}




function Input_Menu() {
   
  if(document.form1.new_q_mnu_nm.value == "" ||  document.form1.new_q_mnu_nm.value == null) {
        alert("���ο� �ٷΰ��� �޴����� �Է��ϼ���");
		document.form1.new_q_mnu_nm.focus();
  }else if(document.form1.new_q_mnu_url.value == "" ) {
        alert("���ο� �ٷΰ��� �޴�  URL �� �Է��ϼ���");
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
