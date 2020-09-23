<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=euc-kr">
<script language="JavaScript" src="<spring:url value='/resources/js/default.js'/>" type="text/javascript"></script> 

<title>더존페이 관리자 시스템</title>
</head>
<body bgcolor="white" text="black" link="blue" vlink="purple" alink="red" topmargin="0" leftmargin="0">
<!-- 중복되는 아이디 -->
<c:if test = "${flag eq 'fail'}">
<table border="0" cellpadding="0" cellspacing="0" width="380">
<form name="form1" method="post">
   <tr>
        <td width="380" colspan="3" height="80" background="<spring:url value='/resources/images/common/image/id_IMG01.gif'/>">
        </td>
    </tr>
    <tr>
        <td width="30" background="<spring:url value='/resources/images/common/image/id_IMG03.gif'/>">
        </td>
        <td width="318">
            <table border="0" cellpadding="0" cellspacing="0" width="318">
                <tr>
                    <td width="318" colspan="2" style="font-family:굴림체; font-size:9pt;" align="center">
                        입력하신 <font color="navy"><c:out value="${adminId}"/></font>는<br>이미 등록되어있는  아이디 입니다.<br>다른아이디를 입력후 검사해 주십시요<br>&nbsp;
                    </td>
                </tr>
                <tr>
                    <td width="182" align="right">
                        <input type="text" name="admin_id" size="13" value="<c:out value="${adminId}"/>" style="font-family:굴림체; font-size:9pt;" > 
                    </td>
                    <td width="136" valign="bottom">&nbsp;
					  <a href="javascript:idCheck()">
					    <img src="<spring:url value='/resources/images/common/image/search_01icon.gif'/>" width="43" height="18" border="0">
					  </a>
	                </td>
                </tr>
                <tr>
                    <td width="318" colspan="2">
                    </td>
                </tr>
            </table>
        </td>
        <td width="34" background="<spring:url value='/resources/images/common/image/id_IMG04.gif'/>">
            <img src="<spring:url value='/resources/images/common/image/id_IMG04.gif'/>" width="34" height="18" border="0">
        </td>
    </tr>
    <tr>
        <td width="380" colspan="3">
            <img src="<spring:url value='/resources/images/common/image/id_IMG02.gif'/>" width="380" height="42" border="0">
        </td>
    </tr>
</form>
</table>
</c:if>
<!-- 등록 가능한 계정 -->
<c:if test = "${flag eq 'succ'}">
	<form name=form1 method=post>
	<table border="0" cellpadding="0" cellspacing="0" width="380">
	    <tr>
	        <td width="380" colspan="3">
	            <p><img src="<spring:url value='/resources/images/common/image/id_IMG01.gif'/>" width="380" height="80" border="0"></p>
	        </td>
	    </tr>
	    <tr>
	        <td width="28" background="<spring:url value='/resources/images/common/image/id_IMG03.gif'/>"/>
	            <p><img src="<spring:url value='/resources/images/common/image/id_IMG03.gif'/>" width="28" height="17" border="0"></p>
	        </td>
	        <td width="318">
	            <table border="0" cellpadding="0" cellspacing="0" width="318">
	                <tr>
	                    <td width="318">
	                        <p style="font-family:굴림체; font-size:9pt;" align="center">
				<br>입력하신 <font color="navy"><c:out value="${adminId}"/></font>는  
				사용가능한 ID 입니다<br>&nbsp;</p>
	                    </td>
	                </tr>
	                <tr>
	                    <td width="318">
	                        <p align="center"><a href="javascript:setUesrID('<c:out value="${adminId}"/>','ok')"><img src="<spring:url value='/resources/images/common/image/search_02icon.gif'/>" width="43" height="18" border="0"></a></p>
	                    </td>
	                </tr>
	                <tr>
	                    <td width="318">
	                        <p>&nbsp;</p>
	                    </td>
	                </tr>
	            </table>
	        </td>
	        <td width="34" background="<spring:url value='/resources/images/common/image/id_IMG04.gif'/>"/>
	            <p><img src="<spring:url value='/resources/images/common/image/id_IMG04.gif'/>" width="34" height="18" border="0"></p>
	        </td>
	    </tr>
	    <tr>
	        <td width="380" colspan="3">
	            <p><img src="<spring:url value='/resources/images/common/image/id_IMG02.gif'/>" width="380" height="42" border="0"></p>
	        </td>
	    </tr>
	</table>
	</form>
	
</c:if>

</body>
</html>
