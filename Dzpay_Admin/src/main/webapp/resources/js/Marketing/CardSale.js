function Input_Card_Info(code) {
   
     window.open("ADMKCardSaleInput.jsp?mnu_no="+code, "ADMKCardSaleInput", 'resize=no, scrollbars=yes ,height=400, width=450,location=no,directory=no,toolbar=no');

}

function Main_News() {
   
     window.open("ADMKCardSaleGenerate.jsp", "ADMKCardSaleGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADMKCardSaleGenerate.jsp";
	document.form1.submit();
 
}


function Delete_Card_Info() {
   var Message1 = '���� ���� �Ͻðڽ��ϱ�?';
   var Message2 = '���õ� ��� �����ʹ� ��� �����˴ϴ�. �׷��� �����Ͻðڽ��ϱ�?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKCardSaleDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('������ ����ϼ̽��ϴ�');
	    
   }
  
}


String.prototype.trim = function() {

	return this.replace(/(^\s*)|(\s*$)/gi, "");

}

function isNumber(num) {
	var value = num.replace(/[0-9]/g, "");
	if (value == "") {
		return true;
	} else {
		return false;
	}
}

function Save_Card_Info() {   // ī�� ���� ����

	document.form1.card_nm.value = document.form1.card_nm.value.trim();
	document.form1.price.value = document.form1.price.value.trim();
	document.form1.url.value = document.form1.url.value.trim();

	if(document.form1.card_nm.value == "" ) {
		alert("ī���̸��� �Է��ϼ���.");
		document.form1.card_nm.focus();
	}
	else if(document.form1.price.value == "" ) {
		alert("ī�� ������ �Է��ϼ���.");
		document.form1.price.focus();
	}
	else if(! isNumber(document.form1.price.value) ) {
		alert("ī�� ������ ���ڷ� �Է��ϼ���.");
		document.form1.price.value = "";
		document.form1.price.focus();
	}
	else if(document.form1.url.value == "" ) {
		alert("�̵��� �ּҸ� �Է��ϼ���.");
		document.form1.url.focus();
	}
	else if(document.form1.card_img.value == "" ) {
		alert("�̹����� ����ϼ���.");
	}
	else{

		document.form1.action="ADMKCardSaleInputAction.jsp";
		document.form1.submit();
	}
}