<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="euc-kr"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet" type="text/css"
	href="/Modules/BPHome/css/default.css" />

<title>더존페이 계정 찾기</title>
<style type='text/css'>
<!--
body {
	overflow-y: auto;
	overflow-x: hidden;
}

table.tbl_type1 {
	clear: both;
	width: 100%;
	align: center;
	margin: 3px 3px 3px 3px;
	border-collapse: collapse;
	border-top: 1px solid #BEB49B;
	border-bottom: 1px solid #BEB49B;
	border-right: 1px solid #CCC;
	line-height: 16px;
}

table.tbl_type1 th, table.tbl_type1 td {
	border-top: 1px solid #CCC;
	border-left: 1px solid #CCC;
	border-right: 1px solid #CCC;
	text-align: left;
	margin: 3px 3px 3px 3px;
}

table.tbl_type1 th {
	padding: 7px 10px 3px 10px;
	font-size: 11px;
	color: #49453A;
	font-weight: bold;
	letter-spacing: -1px;
	background: #D8EDFC;
}

table.tbl_type1 td.head {
	background: #F0ECE0;
	color: #4E483F;
}
-->
</style>

<SCRIPT language=JavaScript>
	
//로딩시 라디오 박스 체크 설정 
function setResize(){
	var innerBody = document.body;
	var innerHeight = innerBody.scrollHeight;
	resizeTo(500, innerHeight);
	var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
	innerHeight = (innerBody.scrollHeight) * 2 - innerBody.offsetHeight;
	resizeTo(innerWidth+7, innerHeight+3);
	alert('<c:out value="${msg}"/>');
}


function goSubmit(){
	if(document.getElementById("auth-code").value == ""){
		alert("인증번호를 입력해주세요");		 
		return;
	}
	document.form_search_id.submit();
}
 
</SCRIPT>

</head>
<body onLoad="javascript:setResize(); ">
	<form name="form_search_id" method="post"
		action="<%=request.getContextPath()%>/init/search-user/auth.do">
		<table width="500" height="150" border="0" cellspacing="0"
			cellpadding="0">
			<tr>
				<td><img
					src="<spring:url value='/resources/images/BPHome/images/escrow/bp_title.gif'/>"
					width="500" height="47" /></td>
			</tr>
			<tr>
			<tr align="center">
				<td>SMS 메시지를 송신했습니다</td>
			</tr>

			<tr align="center">
				<td>인증코드</td>
			</tr>
			<tr align="center">
				<td class="border_none"><input type="text" id="auth-code"
					name="auth-code" value="" style="background-color: #ffffff"></td>
			<tr>
				<th scope='col' height="2" bgcolor="5e99d3" colspan="9"></th>
				<input type = "hidden" id = "phone-number" name = "phone-number" value = '<c:out value="${list.phoneNumber}"/>'/>
				<input type = "hidden" id = "request-type" name = "request-type" value = '<c:out value="${list.requestType}"/>'/>
				<input type = "hidden" id = "admin-id" name = "admin-id" value = '${list.adminId}'/>
				<input type = "hidden" id = "corp-tax-no" name = "corp-tax-no" value = '${list.corpTaxNo}'/>
				<input type = "hidden" id = "email" name = "email" value = '${list.email}'/>
			</tr>
			</tr>
			<table>
				<a href="javascript:goSubmit();"> 제출하기 </a>
			</table>
			<!-- 아이디 찾기 분기 분 -->
			<c:if test="${!empty(list)}">

			</c:if>
			<c:if test="${empty(list)}">

			</c:if>
			<!-- 아이디 찾기 분기 끝 -->

		</table>
	</form>
</body>
</html>

