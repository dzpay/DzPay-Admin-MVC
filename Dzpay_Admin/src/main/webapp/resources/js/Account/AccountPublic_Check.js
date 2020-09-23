function goSubmit(var1)
{
	formVar = document.AcctForm;
	var msg;
	if ( !(formVar.site_cd.value) ) {
		msg = "사이트코드를 입력해 주세요.";
		ErrMsg( formVar.site_cd, msg );
		return;
	}	
	else if ((formVar.search_from_date.value.length != 8) || (!isDate(formVar.search_from_date.value))) {
		msg = "조회시작일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "조회마지막일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "입력날짜가 올바르지 않습니다.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {
		var rs = isOneMonth( formVar.search_from_date.value, formVar.search_toxx_date.value );
		if( rs == false ) {
		    msg = "조회기간은 한달만 조회할 수 있습니다.";
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
		msg = "사이트코드를 입력해 주세요.";
		ErrMsg( formVar.site_cd, msg );
		return;
	}	
	else if ((formVar.search_from_date.value.length != 8) || (!isDate(formVar.search_from_date.value))) {
		msg = "조회시작일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "조회마지막일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "입력날짜가 올바르지 않습니다.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {	
		if( rs == false ) {
			    msg = "엑셀파일은 하루치만 다운로드가 가능합니다.";
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
		msg = "조회시작일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else if ((formVar.search_toxx_date.value.length != 8) || (!isDate(formVar.search_toxx_date.value))) {
		msg = "조회마지막일자를 바르게 입력해 주세요";
		ErrMsg( formVar.search_toxx_date, msg );
		return;
	}
	else if ( formVar.search_from_date.value > formVar.search_toxx_date.value ) {
		msg = "입력날짜가 올바르지 않습니다.";
		ErrMsg( formVar.search_from_date, msg );
		return;
	}
	else {	
		formVar.action = "/Modules/Account/ADSA_Account_KeyComFile.jsp?mnu_no="+var1;
		formVar.submit();
	}
}