
/**  ADACManagerGroup.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */
function Search_Group() {
   
    document.form1.action="ADACManagerGroup.jsp";
    document.form1.submit();
}

function Input_Group(code) {
   
     window.open("ADACManagerGroupInput.jsp?mnu_no="+code, "ADACManagerGroupInput", 'resize=no, scrollbars=yes ,height=700, width=850,location=no,directory=no,toolbar=no');

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

	window.open("ADACManagerGroupView.jsp?mnu_no="+no+"&code="+code, "ADACManagerGroupView", 'resize=no, scrollbars=yes ,height=700, width=850,location=no,directory=no,toolbar=no');
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
if(document.form1.reload_check.value == "Y" )  
parent.links.location="../../Main/menu.jsp";


}




/**  ADACManagerGroupInputAction.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */

/*
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


			for( var i=0; i<document.form1.elements.length; i++) { //<!-- FOR STATEMENT start

				var ele = document.form1.elements[i];
				

				// IF STATEMENT 1st start
				if(ele.name == 'checkbox2'){	
					
					if(ele.checked){

					  for( var j=0; j<document.form1.elements.length; j++) {
						  var ele2 = document.form1.elements[j];
						  
						  if(ele2.name == 'checkbox1' && ele2.value == ele.value){
						   ele2.checked = true;
						  }	   
					  }

					}            
				}  // IF STATEMENT 1st end

				// IF STATEMENT 2nd start
				if(ele.name == 'checkbox3'){	
					
					if(ele.checked){

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox1' && ele3.value == ele.value){
						   ele3.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 2nd end


				// IF STATEMENT 3rd start
				if(ele.name == 'checkbox4'){	
					
					if(ele.checked){

					  for( var l=0; l<document.form1.elements.length; l++) {
						  var ele4 = document.form1.elements[l];
						  
						  if(ele4.name == 'checkbox1' && ele4.value == ele.value){
						   ele4.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 3rd end
			
			}  //-->	 FOR STATEMENT end


			document.form1.action="ADACManagerGroupInputAction.jsp";
			document.form1.submit();
   	}
}
*/


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


function check_reg(mnu_no) { 

   for( var i=0; i<document.form1.elements.length; i++) {
       
		var ele = document.form1.elements[i];

		if(ele.name == 'checkbox2'){	
					
					if(ele.checked){

					  for( var j=0; j<document.form1.elements.length; j++) {
						  var ele2 = document.form1.elements[j];
						  
						  if(ele2.name == 'checkbox1' && ele2.value == ele.value){
						   ele2.checked = true;
						  }	   
					  }

					
			}
			
		}  // IF STATEMENT 1st end

   }

}


function check_mod(mnu_no) { 

   for( var i=0; i<document.form1.elements.length; i++) {
       
		var ele = document.form1.elements[i];

		if(ele.name == 'checkbox3'){	
					
					if(ele.checked){

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox1' && ele3.value == ele.value){
						   ele3.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 2nd end

   }
}



function check_del(mnu_no) { 

   for( var i=0; i<document.form1.elements.length; i++) {
       
		var ele = document.form1.elements[i];

		if(ele.name == 'checkbox4'){	
					
					if(ele.checked){

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox1' && ele3.value == ele.value){
						   ele3.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 2nd end

   }
}




function check_search(mnu_no) { 

   for( var i=0; i<document.form1.elements.length; i++) {
       
		var ele = document.form1.elements[i];

		     if(ele.name == 'checkbox1'){	
					
					if(!ele.checked){

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox2' && ele3.value == ele.value){
						   ele3.checked = false;
						  }	   
					  }

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox3' && ele3.value == ele.value){
						   ele3.checked = false;
						  }	   
					  }

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox4' && ele3.value == ele.value){
						   ele3.checked = false;
						  }	   
					  }

					}            
				} // IF STATEMENT 2nd end


   }
}


/**  ADACManagerGroupInputView.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */

/*

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
		}
        else{


			for( var i=0; i<document.form1.elements.length; i++) { //<!-- FOR STATEMENT start

				var ele = document.form1.elements[i];
				

				// IF STATEMENT 1st start
				if(ele.name == 'checkbox2'){	
					
					if(ele.checked){

					  for( var j=0; j<document.form1.elements.length; j++) {
						  var ele2 = document.form1.elements[j];
						  
						  if(ele2.name == 'checkbox1' && ele2.value == ele.value){
						   ele2.checked = true;
						  }	   
					  }

					}            
				}  // IF STATEMENT 1st end

				// IF STATEMENT 2nd start
				if(ele.name == 'checkbox3'){	
					
					if(ele.checked){

					  for( var k=0; k<document.form1.elements.length; k++) {
						  var ele3 = document.form1.elements[k];
						  
						  if(ele3.name == 'checkbox1' && ele3.value == ele.value){
						   ele3.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 2nd end


				// IF STATEMENT 3rd start
				if(ele.name == 'checkbox4'){	
					
					if(ele.checked){

					  for( var l=0; l<document.form1.elements.length; l++) {
						  var ele4 = document.form1.elements[l];
						  
						  if(ele4.name == 'checkbox1' && ele4.value == ele.value){
						   ele4.checked = true;
						  }	   
					  }

					}            
				} // IF STATEMENT 3rd end
			
			}  //-->	 FOR STATEMENT end


			document.form1.action="ADACManagerGroupUpdateAction.jsp";
			document.form1.submit();
   	}
}

*/


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
		}
        else{

			document.form1.action="ADACManagerGroupUpdateAction.jsp";
			document.form1.submit();
   	}
}


function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
}
