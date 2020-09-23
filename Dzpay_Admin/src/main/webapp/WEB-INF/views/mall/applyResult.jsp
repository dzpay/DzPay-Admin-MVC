<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>가맹점 신청 결과</title>
<script type="text/javascript">
	function applyResult(flag, detail){
		if(detail == 'error'){
			alert('시스템에 장애가 발생하였습니다\n빠른 시일내에 해결하겠습니다\n감사합니다');
		}
		if(flag == 'succ'){
			alert('가맹점 등록에 성공하였습니다\n최대한 빠른 시일내에 연락드리겠습니다.\n감사합니다');
		}
		else{
			alert('가맹점 등록에 실패하였습니다\n내용을 확인하여주세요');
		}
	}
	
	window.onload = function(){
		applyResult('${flag}', '${detail}');
		location.href="<%=request.getContextPath()%>";
	}
	
</script>
</head>
<body>
	<!-- 
	<c:if test="${flag eq 'fail'}">
		가맹점 등록 실패 - 아이디 중복
	</c:if>
	<c:if test="${flag eq 'succ'}">
		가맹점 등록 성공
	</c:if>
	<c:if test="${detail eq 'error'}">
		시스템에 오류가 있습니다.
		tel) xxx-xxxx-xxxx
	</c:if>
	-->
</body>
</html>