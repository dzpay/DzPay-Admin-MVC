<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>������ ��û ���</title>
<script type="text/javascript">
	function applyResult(flag, detail){
		if(detail == 'error'){
			alert('�ý��ۿ� ��ְ� �߻��Ͽ����ϴ�\n���� ���ϳ��� �ذ��ϰڽ��ϴ�\n�����մϴ�');
		}
		if(flag == 'succ'){
			alert('������ ��Ͽ� �����Ͽ����ϴ�\n�ִ��� ���� ���ϳ��� �����帮�ڽ��ϴ�.\n�����մϴ�');
		}
		else{
			alert('������ ��Ͽ� �����Ͽ����ϴ�\n������ Ȯ���Ͽ��ּ���');
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
		������ ��� ���� - ���̵� �ߺ�
	</c:if>
	<c:if test="${flag eq 'succ'}">
		������ ��� ����
	</c:if>
	<c:if test="${detail eq 'error'}">
		�ý��ۿ� ������ �ֽ��ϴ�.
		tel) xxx-xxxx-xxxx
	</c:if>
	-->
</body>
</html>