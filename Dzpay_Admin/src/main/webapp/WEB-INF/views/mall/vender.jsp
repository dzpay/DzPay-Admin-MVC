<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<title>밴더 찾기</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet" href="<spring:url value='/resources/css/ebizpro_css.css'/>" type="text/css">
<script language="JavaScript">
	function onloadaction(){
	   document.form.word.focus();
	}

	function find_again() {
		if (document.form.word.value == ""){
			alert("업체이름이 비어있습니다.");
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
						color="006699">밴더 업체 검색</font></b></td>
			</tr>
			<tr>
				<td>업체이름: <input type="text" name="word" size="16"
					class="box" value="" placeholder = "검색할 업체를 입력하세요"></td>
				<td><a href="javascript:find_again();"><img
						src="<spring:url value='/resources/images/image/sale/sale37_icon.gif'/>" border="0"></a></td>
			</tr>
			<tr>
				<td colspan="2">업체이름을 입력하세요. 예 : 나이스아이</td>
			</tr>
		</table>
		
		<!-- 초기 화면 -->
		<c:if test = "${word eq '' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				<tr bgcolor="#ebebeb">
					<td height="40" align=left>검색어 : 업체이름을 입력하세요.</td>
				</tr>
			</table>
		</c:if>
		
		<!-- 검색 함 -->
		<c:if test = "${word eq 'search' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				</br>
				<tr bgcolor="#ebebeb">
					<td height="40" align=left>검색어 : <c:out value="${word}"/></td>
				</tr>
			</table>
		</c:if>
		
		<!-- 결과 없음 -->
		<c:if test = "${flag eq 'fail'}">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
				</br>
				<tr bgcolor="#ebebeb">
					<td align=center>해당하는 업체정보가 없습니다.<br>업체이름을 정확히 입력해 주시기
						바랍니다.
					</td>
				</tr>
			</table>
		</c:if>
		<!-- 검색 결과 -->
		<c:if test = "${flag eq 'succ' }">
			<table cellspacing="0" cellpadding="0" border="0" width="340">
			<!-- 검색 결과 출력 -->
				<tr align=center>
					<td>총판업체명</td>
				</tr>
				<!-- list 출력 -->
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