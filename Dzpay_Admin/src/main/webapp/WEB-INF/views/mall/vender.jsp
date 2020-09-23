<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<title>��� ã��</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet" href="<spring:url value='/resources/css/ebizpro_css.css'/>" type="text/css">
<script language="JavaScript">
	function onloadaction(){
	   document.form.word.focus();
	}

	function find_again() {
		if (document.form.word.value == ""){
			alert("��ü�̸��� ����ֽ��ϴ�.");
		} else {						
			document.form.submit();
		}
	}

	function host_select(host_nm, host_id) {				
		opener.host_setting(host_nm, host_id);
		window.close();
	}
</script>
</head>
<body leftmargin="5" topmargin="5" onLoad="JavaScript:onloadaction();">
	<form name="form" method="get" action="<%=request.getContextPath()%>/mall/vender.do?word=<c:out value="${word}"/>">
		<table width="340" cellspacing="0" cellpadding="0" border="0">
			<tr>
				<td colspan="2"><IMG SRC="<spring:url value='/resources/images/images/Arrow02.gif'/>"
					WIDTH="10" HEIGHT="15" ALIGN="ABSMIDDLE"><b><font
						color="006699">��� ��ü �˻�</font></b></td>
			</tr>
			<tr>
				<td>��ü�̸�: <input type="text" name="word" size="16"
					class="box" value="" placeholder = "�˻��� ��ü�� �Է��ϼ���"></td>
				<td><a href="javascript:find_again();"><img
						src="<spring:url value='/resources/images/image/sale/sale37_icon.gif'/>" border="0"></a></td>
			</tr>
			<tr>
				<td colspan="2">��ü�̸��� �Է��ϼ���. �� : ���̽�����</td>
			</tr>
		</table>
		
		<!-- �ʱ� ȭ�� -->
		<c:if test = "${word eq '' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				<tr bgcolor="#ebebeb">
					<td height="40" align=left>�˻��� : ��ü�̸��� �Է��ϼ���.</td>
				</tr>
			</table>
		</c:if>
		
		<!-- �˻� �� -->
		<c:if test = "${word eq 'search' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				</br>
				<tr bgcolor="#ebebeb">
					<td height="40" align=left>�˻��� : <c:out value="${word}"/></td>
				</tr>
			</table>
		</c:if>
		
		<!-- ��� ���� -->
		<c:if test = "${flag eq 'fail'}">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				</br>
				<tr bgcolor="#ebebeb">
					<td align=center>�ش��ϴ� ��ü������ �����ϴ�.<br>��ü�̸��� ��Ȯ�� �Է��� �ֽñ�
						�ٶ��ϴ�.
					</td>
				</tr>
			</table>
		</c:if>
		<!-- �˻� ��� -->
		<c:if test = "${flag eq 'succ' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
			<!-- �˻� ��� ��� -->
				<tr align=center>
					<td>���Ǿ�ü��</td>
				</tr>
				<!-- list ��� -->
				<c:forEach var = "data" items="${list}">
					<tr bgcolor="#ebebeb" align=center>
						<td><a href="JavaScript:host_select('<c:out value="${data.hostNm}"/>','<c:out value="${data.siteHostingId}"/>')">
								<c:out value="${data.hostNm}"/>
						</a><br></td>
					</tr>
				</c:forEach>
			</table>
		</c:if>
		
	</form>
</body>
</html>