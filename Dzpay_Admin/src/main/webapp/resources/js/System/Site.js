function Search_Page() {
   
    document.form1.action="ADSIPageList.jsp";
    document.form1.submit();
}

function close_Page(code, code1, code2, no) {
   
   code3 = document.form1.search_ASP.value;

   if( code2 == "�̼���"){
	   alert("��� ������ ������ �Էµ��� �ʾҽ��ϴ�."); 
   }else{

	window.open("ADSIPageAction.jsp?mnu_no=" + no + "&code="+code+"&code1="+code1+"&update_flag=N", "ADSIPageAction", 'top=15000,left=15000,resize=no, scrollbars=no ,height=-10, width=10,location=no,directory=no,toolbar=no');
	//location.href = "ADSIPageAction.jsp";
   }

}

function open_Page(code, code1, no) {
   
	window.open("ADSIPageAction.jsp?mnu_no=" + no + "&code="+code+"&code1="+code1+"&update_flag=Y", "ADSIPageAction", 'top=15000,left=15000,resize=no, scrollbars=no ,height=10, width=10,location=no,directory=no,toolbar=no');
}


function view_Page(code,code1,no) {
   
	window.open("ADSIPageView.jsp?mnu_no="+no+"&code="+code+"&code1="+code1, "ADSIPageView", 'resize=no, scrollbars=no ,height=550, width=550,location=no,directory=no,toolbar=no');

}

function write_Page(no) {
	window.open("ADSIPageWrite.jsp?mnu_no="+no, "ADSIPageWrite", 'resize=no, scrollbars=no ,height=550, width=550,location=no,directory=no,toolbar=no');
}

function write_Exec() {
	var f = document.form1;

	if (f.mktid.value == "") {
		alert("ASP�縦 ������ �ֽʽÿ�.");
		f.mktid.focus();
		return;
	}
	if (f.nm.value == "") {
		alert("���������� �Է��� �ֽʽÿ�.");
		f.nm.focus();
		return;
	}

	f.submit();
}

function preview(no) {
	if (document.form1.desc.value == "") {
		alert("�̸����� �� ������ �����ϴ�.");
		document.form1.desc.focus();
		return;
	}
	val = document.form1.desc.value;
	//alert(document.form1.desc.value);
	//val = document.form1.desc.value.replace(/\\n/g,'<br>');
	val = document.form1.desc.value.replace(/\#/g,'');
	val = val.replace(/\&nbsp;/g,'_nbsp;');
	window.open("ADSIPagePreview.jsp?mnu_no="+no + "&body=" + val, "ADSIPagePreview", 'resize=no, scrollbars=no ,height=500, width=500,location=no,directory=no,toolbar=no');
}