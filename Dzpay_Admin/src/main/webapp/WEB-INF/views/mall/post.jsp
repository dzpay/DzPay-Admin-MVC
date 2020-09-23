<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<title>우편번호 찾기</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet" href="<spring:url value='/resources/css/ebizpro_css.css'/>" type="text/css">
<script language="JavaScript">
	function onloadaction(){
	   document.zipform.strDong.focus();
	}

	function find_again() {
		if (document.zipform.strDong.value == ""){
			alert("동이름이 비어있습니다.");
		} else {						
			document.zipform.submit();
		}
	}

	function zip_select(kind, zip_cd, add1) {				
		opener.syncData(kind, zip_cd, add1);
		window.close();
	}
	
	
	function sendPost(){
		window.location.href="http://localhost:8080/dzpay/mall/post/search.do";
	}
	
</script>
</head>
<body leftmargin="0" topmargin="0" onLoad="JavaScript:onloadaction();">
	
	<!-- 
	kind : 1 -> 사업장 주소 
	kind : 2 -> 수령지 주소
	-->
	<form name="zipform" method="post"
		action="<%=request.getContextPath()%>
		/mall/post/search.do?kind=<c:out value="${kind}"/>">
	
	<input type="hidden" name="in_first" value="false">


<!-- 결과에 상관 없이 유지 -->
<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
	<TR> 
	<TD HEIGHT="30" VALIGN="BOTTOM" STYLE="PADDING-LEFT:15PX"><IMG SRC="<spring:url value='/resources/images/Arrow02.gif'/>" WIDTH="10" HEIGHT="15" ALIGN="ABSMIDDLE"><STRONG><FONT COLOR="0085CA" SIZE="2">우편번호찾기</FONT></STRONG></TD>
	</TR>
	<TR> 
	<TD>&nbsp;</TD>
	</TR>
	<TR> 
	
	<TD STYLE="PADDING-LEFT:15PX">
		<TABLE WIDTH="98%" BORDER="0" CELLPADDING="3" CELLSPACING="1" BGCOLOR="DDDDDD">
			<TR> 
			<TD BGCOLOR="EFEFEF"><font size=2>동/읍/면 이름 </font></TD>
		    <TD BGCOLOR="FFFFFF">
				<TABLE WIDTH="100%" BORDER=0>
					<TR>
					<TD><INPUT TYPE="TEXT" NAME="strDong" SIZE="16" CLASS="box"></TD>
					<TD>
						<button id = 'zipBtn' onclick="javascript:find_again()">
							<img src="<spring:url value='/resources/images/image/sale37_icon.gif'/>" BORDER="0">
						</button>
					</TD>
					</TR>
				</TABLE>

			</TD>
			</TR>
			<TR>
			<TD COLSPAN=3 BGCOLOR="FFFFFF" ALIGN="CENTER"><font size=2>동/읍/면 이름을 입력하세요.&nbsp;예)구로(동)</font></TD>
			</TR>
		</TABLE>
	</TD>
</TABLE>
<!-- END -->

<c:if test = "${flag eq 'fail'}">
<BR>
<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
	<TR> 
	<TD STYLE="PADDING-LEFT:15PX">
		<TABLE WIDTH="98%" BORDER="0" CELLPADDING="3" CELLSPACING="1" BGCOLOR="DDDDDD">
			<TR>
			<TD BGCOLOR="FFFFFF" ALIGN="CENTER"><font size=2>검색어 : 동/읍/면 이름을 입력하세요.</font></TD>
			</TR>
		</TABLE>
	</TD>
</TABLE>
</c:if>

<c:if test = "${flag eq 'succ' }">
<!-- 검색한 이후 출력-->
<BR>
<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
	<TR> 
	<TD STYLE="PADDING-LEFT:15PX">
		<TABLE WIDTH="98%" BORDER="0" CELLPADDING="3" CELLSPACING="1" BGCOLOR="DDDDDD">
			<TR>
			<TD BGCOLOR="FFFFFF" ALIGN="LEFT"><font size=2>검색어 : <c:out value="${word}"/></font></TD>
			</TR>
		</TABLE>
	</TD>
</TABLE>
</c:if>

<!-- 검색한 이후 결과 없음 -->
<c:if test = "${flag eq 'fail'}">
<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
	<TR> 
	<TD STYLE="PADDING-LEFT:15PX">
		<TABLE WIDTH="98%" BORDER="0" CELLPADDING="3" CELLSPACING="1" BGCOLOR="DDDDDD">
			<TR>
			<TD BGCOLOR="FFFFFF" ALIGN="CENTER"><font size=2>해당하는 주소가 없습니다.<br>주소를 정확히 입력해 주시기 바랍니다</font></TD>
			</TR>
		</TABLE>
	</TD>
</TABLE>
</c:if>

<!-- 검색 결과 출력 -->
<c:if test = "${flag eq 'succ' }">
<TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
	<!-- list 출력 -->
	<c:forEach var = "data" items="${list }">
		<TR> 
		<TD STYLE="PADDING-LEFT:15PX">
			<TABLE WIDTH="98%" BORDER="0" CELLPADDING="3" CELLSPACING="1" BGCOLOR="DDDDDD">
	           <TR WIDTH = "20%">
	           <TD BGCOLOR="FFFFFF" ALIGN="LEFT" >
	    		<font size=2><c:out value="${data.zipcode}"/></font>
			   </TD>
			   <TD WIDTH = "78%" BGCOLOR="FFFFFF" ALIGN="LEFT">
			   <A HREF="JavaScript:zip_select(
			   		<c:out value="'${kind}'"/>,
			   		<c:out value="'${data.zipcode}'"/>,
			   		<c:out value="'${data.sido}"/>
			   		<c:out value="${data.gugun}"/>
			   		<c:out value="${data.dong}'"/>
			   	);">
				  
				   <c:out value="${data.sido}"/>
				   <c:out value="${data.gugun}"/>
				   <c:out value="${data.dong}"/>
				   <c:out value="${data.bunji}"/>
			   </A><BR>
			   </TD>
	   		   </TR>
	
			</TABLE>
		</TD>
		</TR>
	</c:forEach>
</TABLE>
</c:if>

</form>
</body>
</html>