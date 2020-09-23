function goSubmit(var1)
{
	formVar = document.AcctForm;
	var msg;
	if ( !(formVar.site_cd.value) ) {
		msg = "����Ʈ�ڵ带 �Է��� �ּ���.";
		ErrMsg( formVar.site_cd, msg );
		return;
	}	
	else if ((formVar.search_from_date.value.length != 8) || (!isDate(formVar.search_from_date.value))) {
		msg = "��ȸ�������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "��ȸ���������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "�Է³�¥�� �ùٸ��� �ʽ��ϴ�.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {
		var rs = isOneMonth( formVar.search_from_date.value, formVar.search_toxx_date.value );
		if( rs == false ) {
		    msg = "��ȸ�Ⱓ�� �Ѵ޸� ��ȸ�� �� �ֽ��ϴ�.";
			ErrMsg( formVar.search_toxx_date, msg );
			return;
	  	}
		else {
			formVar.action = var1;
	  		formVar.submit();
	  	}
	}
}

function downExcelFile(var1) {
	formVar = document.AcctForm;
	var rs = isOneDay( formVar.search_from_date.value, formVar.search_toxx_date.value );
	
	if ( !(formVar.site_cd.value) ) {
		msg = "����Ʈ�ڵ带 �Է��� �ּ���.";
		ErrMsg( formVar.site_cd, msg );
		return;
	}	
	else if ((formVar.search_from_date.value.length != 8) || (!isDate(formVar.search_from_date.value))) {
		msg = "��ȸ�������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "��ȸ���������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "�Է³�¥�� �ùٸ��� �ʽ��ϴ�.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {	
		if( rs == false ) {
			    msg = "���������� �Ϸ�ġ�� �ٿ�ε尡 �����մϴ�.";
				ErrMsg( formVar.search_toxx_date, msg );
				return;
		}
		else {
			formVar.action = "/Modules/Account/ADSA_Account_DownLoad.jsp?mnu_no="+var1;
			formVar.submit();
		}
	}
}

function downKeyComFile(var1) {
	formVar = document.AcctForm;
	
	if ((formVar.search_from_date.value.length != 8) || (!isDate(formVar.search_from_date.value))) {
		msg = "��ȸ�������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "��ȸ���������ڸ� �ٸ��� �Է��� �ּ���";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "�Է³�¥�� �ùٸ��� �ʽ��ϴ�.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {	
		formVar.action = "/Modules/Account/ADSA_Account_KeyComFile.jsp?mnu_no="+var1;
		formVar.submit();
	}
}