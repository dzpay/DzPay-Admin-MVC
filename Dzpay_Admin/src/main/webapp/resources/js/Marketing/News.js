
/**  ADACManagerGroup.jsp Include Javascript
 *    �ۼ���    : Ȳ����
 *    �ۼ����� : 2002�� 3�� 6��
 */
function Search_News() {
   
    document.form1.action="ADMKNewsList.jsp";
    document.form1.submit();
}

function Input_News(code) {
   
     window.open("ADMKNewsInput.jsp?mnu_no="+code, "ADMKNewsInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}

function Main_News() {
   
     window.open("ADMKNewsGenerate.jsp", "ADMKNewsGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADMKNewsGenerate.jsp";
	document.form1.submit();
 
}

function View_Contents() {
	   
	  if( document.form1.html_yn(0).checked ) html_yn = "Y";
	  if( document.form1.html_yn(1).checked ) html_yn = "N";
	  
	  contents = document.form1.contents.value;
	  
	  if( html_yn=="N")	{	  	
  		contents = contents.replace(/(\r{0,1})\n/g, "<br>");		
	  }
      window.open("ADMKNewsInputView.jsp?html_yn="+html_yn+"&contents="+contents, "ADMKNewsInputView", 'resize=yes, scrollbars=yes ,height=400, width=500,location=no,directory=no,toolbar=no');
}


function View_News(no,code) {

	window.open("ADMKNewsView.jsp?mnu_no="+no+"&code="+code, "ADMKNewsView", 'resize=no, scrollbars=yes ,height=600, width=800,location=no,directory=no,toolbar=no');
}


function Delete_News(code) {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKNewsDeleteAction.jsp?del_check="+code;
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}



function Save_News() {   // �������� ����

        if(document.form1.title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsInputAction.jsp";
			document.form1.submit();
    	}
}


function Save_News2() {   // �������� ����

        if(document.form1.title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsInputAction.jsp";
			document.form1.submit();
    	}
}



function Update_News() {   // �������� ����

        if(document.form1.title.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.title.focus();
		}
		else if(document.form1.contents.value == "" ) {
			alert("������ �Է��ϼ���.");
			document.form1.contents.focus();
		}
        else{

			document.form1.action="ADMKNewsUpdateAction.jsp";
			document.form1.submit();
    	}
}

