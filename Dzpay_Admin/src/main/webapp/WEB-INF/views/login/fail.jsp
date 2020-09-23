<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="euc-kr"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	request.setCharacterEncoding("euc-kr");	
%>
<title>더존페이 관리자 시스템</title>
<head>
<script type = "text/javascript">
	function failLogin(){
		alert('죄송합니다\n사용자 계정이나 비밀번호가 올바르지 않습니다\n재시도하십시오');
		location.href = "<%=request.getContextPath()%>/";
	}
</script>
</head>

<body onload = "failLogin()">
<!-- 
로그인에 실패하였습니다  로그인에 실패하였습니다  로그인에 실패하였습니다 
로그인에 실패하였습니다 로그인에 실패하였습니다 로그인에 실패하였습니다 
로그인에 실패하였습니다 로그인에 실패하였습니다 로그인에 실패하였습니다 로그인에 실패하였습니다 
로그인에 실패하였습니다 로그인에 실패하였습니다 로그인에 실패하였습니다 로그인에 실패하였습니다 
-->
</body>
</html>