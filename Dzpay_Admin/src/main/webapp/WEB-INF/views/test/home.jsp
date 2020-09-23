<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="euc-kr"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%
	request.setCharacterEncoding("euc-kr");	
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<link onfocus=this.blur();
	href="<spring:url value='/resources/css/default.css'/>"
	rel="stylesheet" type="text/css">

<style type="text/css">
.foot_in {
	clear: both;
	width: 620px;
	margin: 0 auto;
	overflow: hidden;
}
</style>

<script language="JavaScript"
	src="<spring:url value='/resources/js/login.js'/>"
	type="text/javascript"></script>

<title>더존페이 가맹점 등록</title>

</head>

<body
	onload="javascript:document.managerLoginForm.id.focus(); getid(document.managerLoginForm)">
	<form name="managerLoginForm" method="post"
		action="<%=request.getContextPath()%>/init/proc/login.do">
		<input type="hidden" name="login_check" value="Y">


		<table width="635" border="0" align="center" cellpadding="0"
			cellspacing="0">

			<tr>
				<td height="105" valign="top"></td>
			</tr>
			<tr>
				<td width="908"><img
					src="<spring:url value='/resources/images/card/images/top.jpg'/>">
				</td>
			</tr>

			<tr>
				<td valign="top"><img
					src="<spring:url value='/resources/images/card/images/login_top.gif'/>"></td>
			</tr>
			<tr>
				<td height="205" valign="top"
					background="<spring:url value='/resources/images/card/images/login_bg_new.gif'/>">

					<!------------------admin login start ------------------>
					<table width="71%" border="0" align="center" cellpadding="0"
						cellspacing="0">
						<tr>
							<td width="232" align="center" valign="top"><table
									width="211" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="214" height="34"></td>
									</tr>
									<tr align="right">
										<td><img
											src="<spring:url value='/resources/images/card/images/id.gif'/>"></td>
									</tr>
									<tr>
										<td height="27"></td>
									</tr>
									<tr>
										<td align="right" valign="top"><img
											src="<spring:url value='/resources/images/card/images/pw.gif'/>"></td>
									</tr>
								</table></td>
							<td width="219" height="130" valign="top"><table width="219"
									border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="246" height="30"></td>
									</tr>
									<tr>
										<td><table width="90%" border="0" cellspacing="0"
												cellpadding="0">
												<tr>
													<td width="147"><table width="147" height="47"
															border="0" cellpadding="0" cellspacing="0">
															<tr>
																<td width="147"><input name=id type="text"
																	size="21" class="box1"></td>
															</tr>
															<tr>
																<td height="3"><input type=checkbox
																	name=checksaveid onClick="saveid(this.form)">아이디
																	저장</td>
															</tr>
															<tr>
																<td><input name="password" type="PASSWORD"
																	size="21" class="box1" onKeyDown="login();"></td>
															</tr>
														</table></td>
													<td width="50"><a href="javascript:loginCheck();"><img
															src="<spring:url value='/resources/images/card/images/bt_login.gif'/>"
															border="0"></a></td>

												</tr>
											</table></td>
									</tr>
									<tr>
										<td height="8"></td>
									</tr>
									<tr>
										<td><a href="javascript:Search_id_pass();"><img
												src="<spring:url value='/resources/images/card/images/bt_id_search.gif'/>"></a></td>
									</tr>
								</table></td>
						</tr>
					</table> <!------------------admin login start ------------------>
				</td>
			</tr>
			<tr>
				<td valign="top"></td>
			</tr>
			<tr>
				<td height="25"></td>
			</tr>
			<tr>
				<td align="center" valign="top">
					<!------------------banner start------------------>
					<table width="630" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td align="right"><a href="javascript:REG_FEE();"><img
									src="<spring:url value='/resources/images/card/images/banner02_1.gif" align="absmiddle" border=0'/>"></a></td>
							<td align="right" width="165"><a
								href="javascript:Input_Apply();"><img
									src="<spring:url value='"/resources/images/card/images/banner01.gif" align="absmiddle" border=0'/>"></a></td>
						</tr>
					</table> <!------------------banner end------------------>
				</td>
			</tr>
		</table>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<div class="foot_in">
					<a href="javascript:access_terms();"> | 이용약관</a> <a
						href="javascript:privacy_policy();"><span
						style="color: #3E93CC;">| 개인정보취급방침</span></a> <a
						href="javascript:billing_policy();"><span
						style="color: #3E93CC;">| 통신과금서비스 이용약관</span></a> <a
						href="javascript:viewPayment();"><span style="color: #3E93CC;">|
							이용내역조회</span></a> <a href="javascript:checkEscrow();"><span
						style="color: #3E93CC;">| 에스크로베너</span></a>
				</div>
				<td align="center"><img
					src="<spring:url value='"/resources/images/card/images/login_bot.gif" align="absmiddle" border=0>'/>"></td>
			</tr>
			<table>
	</form>
</body>
</html>