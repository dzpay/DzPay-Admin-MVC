<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="euc-kr"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	request.setCharacterEncoding("euc-kr");	
%>
<title>�������� ������ �ý���</title>
<head>
<script type = "text/javascript">
	function failLogin(){
		alert('�˼��մϴ�\n����� �����̳� ��й�ȣ�� �ùٸ��� �ʽ��ϴ�\n��õ��Ͻʽÿ�');
		location.href = "<%=request.getContextPath()%>/";
	}
</script>
</head>

<body onload = "failLogin()">
<!-- 
�α��ο� �����Ͽ����ϴ�  �α��ο� �����Ͽ����ϴ�  �α��ο� �����Ͽ����ϴ� 
�α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� 
�α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� 
�α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� �α��ο� �����Ͽ����ϴ� 
-->
</body>
</html>