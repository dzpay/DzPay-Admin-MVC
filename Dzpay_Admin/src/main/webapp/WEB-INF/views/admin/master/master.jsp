<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
	
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>[더존페이]최고관리자 페이지</title>
<link rel="stylesheet"
	href="<spring:url value='/resources/css/master/default.css'/>"
	type="text/css" />
<script language="JavaScript"
	src="<spring:url value='/resources/js/master/default.js'/>"
	charset="euc-kr"></script>
</head>
<body>
	<center>
		<h1>최고 관리자 전용</h1>
	</center>
	<div>
		<center>
			<h2>관리자 계정 생성기 입니다</h2>
		</center>
	</div>
	<form id="admin-form" name="admin-form" method="post"
		action="<%=request.getContextPath()%>/admin/master/user.do">
		<h5>오타에 주의해주세요</h5>
		<label class="legend">아이디</label> <input name="id" type="text">

		<label class="legend">패스워드</label> <input name="password"
			type="password"> <label class="legend">그룹</label> <select
			name="admin_gp_no">
			<option value="">선택</option>
			<option value="READONLY">읽기 전용</option>
			<option value="SITE">사이트</option>
			<option value="SITE_EDI">사이트 EDI</option>
			<option value="HOST">호스트</option>
			<option value="WEHAGO">위하고</option>
			<option value="BW_DEV">개발자</option>
			<option value="ADMIN">최고 관리자</option>
		</select> <label class="legend">관리자 이름</label> <input name="admin_nm"
			type="text"> <label class="legend">관리자 담당</label> <input
			name="sub_dept" type="text" placeholder="계약담당자"> <label
			class="legend">담당 분야</label> <select name="job_tit">
			<option value="">선택</option>
			<option value="JB01">계약 담당자</option>
			<option value="JB02">개발 담당자</option>
			<option value="JB03">정산 담당자</option>
			<option value="JB04">고개응대 담당자</option>
		</select> <label class="legend">이메일</label> <input name="email" type="text">

		<label class="legend">회사 번호</label> <input name="comp_no" type="text">

		<label class="legend">모바일 번호</label> <input name="mob_no" type="text">

		<label class="legend">팩스 번호 </label> <input name="fax_no" type="text">

		<label class="legend">사이트 코드</label> <input name="site_cd" type="text">

		<label class="legend">회사 코드</label> <input name="corp_cd" type="text"
			placeholder="MK000000"> <label class="legend">조회 레벨</label> <select
			name="view_type">
			<option value="">선택</option>
			<option value="V001">사용자</option>
			<option value="V002">관리자</option>
			<option value="V003">최고 관리자</option>
		</select> <input type="button" class="button" id="btn-submit" onclick="enrollAdmin()" value="관리자 생성">
	</form>
</body>
</html>