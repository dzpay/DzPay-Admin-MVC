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

<title>임시 비밀번호 전송</title>
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
	alert('임시 비밀번호가 발송되었습니다. 로그인 후 비밀번호를 변경하시기 바랍니다');
	window.close();
}

</SCRIPT>

</head>
<body onLoad="javascript:setResize(); ">
	<form name="form_search_id" method="post"
		action="<%=request.getContextPath()%>/">
		<table width="500" height="150" border="0" cellspacing="0"
			cellpadding="0">
			<tr>
				<td><img
					src="<spring:url value='/resources/images/BPHome/images/escrow/bp_title.gif'/>"
					width="500" height="47" /></td>
			</tr>
			<tr>
			<tr align="center">
				<td>임시 비밀번호를 전송했습니다</td>
			</tr>

			<tr align="center">
				<td>다시 로그인 해주세요</td>
			</tr>
			<tr align="center">
				<td class="border_none"><input type="text" id="auth_code"
					name="auth-code" value="" style="background-color: #ffffff"></td>
			</tr>
		</table>
	</form>
</body>
</html>

