
/**  ADManagerGroup.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */
function Search_Code() {
   
    document.form1.action="ADSTCode.jsp";
    document.form1.submit();
}

function Input_Code(code) {
   
     window.open("ADSTCodeInput.jsp?mnu_no="+code, "ADSTCodeInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}


function View_Code(no,code) {

	window.open("ADSTCodeView.jsp?mnu_no="+no+"&code="+code, "ADSTCodeView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}



function Delete_Code() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADSTCodeDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}


/**  ADCodeInput.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */

function Save_Code() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.cd.value == "" ) {
			alert("�׷��ڵ带 �Է��ϼ���.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("�׷� �ڵ� ��Ī�� �Է��ϼ���.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("��з������ڵ带 �Է��ϼ���.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeInputAction.jsp";
			document.form1.submit();
   	    }
}


/**  ADCodeView.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */


function Update_Code() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.cd.value == "" ) {
			alert("�׷��ڵ带 �Է��ϼ���.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("�׷� �ڵ� ��Ī�� �Է��ϼ���.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("��з������ڵ带 �Է��ϼ���.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeUpdateAction.jsp";
			document.form1.submit();
   	    }
}



function Insert_Code(code, code2, code3) {
   
     window.open("ADSTCodeLowInput.jsp?cd_gp="+code+"&mnu_no="+code2+"&codemaster="+code3,"ADSTCodeLowInput", 'resize=no, scrollbars=yes ,height=350, width=850,location=no,directory=no,toolbar=no');

}

function View_LowCode(no,group,code) {

	window.open("ADSTCodeLowView.jsp?mnu_no="+no+"&cd_gp="+group+"&cd="+code, "ADSTCodeLowView", 'resize=no, scrollbars=yes ,height=350, width=850,location=no,directory=no,toolbar=no');
}


function Delete_LowCode() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
        document.form1.check.value = "L";  // L �� check Flag �� �����Ѵ�. 
	    document.form1.action="ADSTCodeDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}


/**  ADCodeLowInput.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 12��
 */


function Save_LowCode() {   // ���� �ڵ����� �߰�

        if(document.form1.cd_tail.value == "" ) {
			alert("�ڵ带 �Է��ϼ���.");
			document.form1.cd_tail.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("�ڵ� ��Ī�� �Է��ϼ���.");
			document.form1.cd_nm.focus();
	//	}
		//else if(document.form1.codemaster.value == "") {
		//	alert("�Һз������ڵ带 �Է��ϼ���.");
		//	document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeLowInputAction.jsp";
			document.form1.submit();
   	    }
}


/**  ADCodeLowView.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */


function Update_LowCode() {   // �۾��׷캰 �޴� ����Ʈ �߰�

        if(document.form1.cd.value == "" ) {
			alert("�ڵ带 �Է��ϼ���.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("�ڵ� ��Ī�� �Է��ϼ���.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("�Һз������ڵ带 �Է��ϼ���.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeLowUpdateAction.jsp";
			document.form1.submit();
   	    }
}



function generate_code(){

     window.open("ADSTCodeGenerate.jsp","ADSTCodeGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADSTCodeGenerate.jsp";
	document.form1.submit();
 
}



function focus_cd(){

   document.form1.cd_tail.focus();
}

