<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
	
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>[��������]�ְ������ ������</title>
<link rel="stylesheet"
	href="<spring:url value='/resources/css/master/default.css'/>"
	type="text/css" />
<script language="JavaScript"
	src="<spring:url value='/resources/js/master/default.js'/>"
	charset="euc-kr"></script>
</head>
<body>
	<center>
		<h1>�ְ� ������ ����</h1>
	</center>
	<div>
		<center>
			<h2>������ ���� ������ �Դϴ�</h2>
		</center>
	</div>
	<form id="admin-form" name="admin-form" method="post"
		action="<%=request.getContextPath()%>/admin/master/user.do">
		<h5>��Ÿ�� �������ּ���</h5>
		<label class="legend">���̵�</label> <input name="id" type="text">

		<label class="legend">�н�����</label> <input name="password"
			type="password"> <label class="legend">�׷�</label> <select
			name="admin_gp_no">
			<option value="">����</option>
			<option value="READONLY">�б� ����</option>
			<option value="SITE">����Ʈ</option>
			<option value="SITE_EDI">����Ʈ EDI</option>
			<option value="HOST">ȣ��Ʈ</option>
			<option value="WEHAGO">���ϰ�</option>
			<option value="BW_DEV">������</option>
			<option value="ADMIN">�ְ� ������</option>
		</select> <label class="legend">������ �̸�</label> <input name="admin_nm"
			type="text"> <label class="legend">������ ���</label> <input
			name="sub_dept" type="text" placeholder="�������"> <label
			class="legend">��� �о�</label> <select name="job_tit">
			<option value="">����</option>
			<option value="JB01">��� �����</option>
			<option value="JB02">���� �����</option>
			<option value="JB03">���� �����</option>
			<option value="JB04">������ �����</option>
		</select> <label class="legend">�̸���</label> <input name="email" type="text">

		<label class="legend">ȸ�� ��ȣ</label> <input name="comp_no" type="text">

		<label class="legend">����� ��ȣ</label> <input name="mob_no" type="text">

		<label class="legend">�ѽ� ��ȣ </label> <input name="fax_no" type="text">

		<label class="legend">����Ʈ �ڵ�</label> <input name="site_cd" type="text">

		<label class="legend">ȸ�� �ڵ�</label> <input name="corp_cd" type="text"
			placeholder="MK000000"> <label class="legend">��ȸ ����</label> <select
			name="view_type">
			<option value="">����</option>
			<option value="V001">�����</option>
			<option value="V002">������</option>
			<option value="V003">�ְ� ������</option>
		</select> <input type="button" class="button" id="btn-submit" onclick="enrollAdmin()" value="������ ����">
	</form>
</body>
</html>