<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="euc-kr"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet" type="text/css"
	href="/Modules/BPHome/css/default.css" />

<title>더존페이 계정 찾기</title>
<style type='text/css'>
<!--
body {
	overflow-y: auto;
	overflow-x: hidden;
}

table.tbl_type1 {
	clear: both;
	width: 100%;
	align: center;
	margin: 3px 3px 3px 3px;
	border-collapse: collapse;
	border-top: 1px solid #BEB49B;
	border-bottom: 1px solid #BEB49B;
	border-right: 1px solid #CCC;
	line-height: 16px;
}

table.tbl_type1 th, table.tbl_type1 td {
	border-top: 1px solid #CCC;
	border-left: 1px solid #CCC;
	border-right: 1px solid #CCC;
	text-align: left;
	margin: 3px 3px 3px 3px;
}

table.tbl_type1 th {
	padding: 7px 10px 3px 10px;
	font-size: 11px;
	color: #49453A;
	font-weight: bold;
	letter-spacing: -1px;
	background: #D8EDFC;
}

table.tbl_type1 td.head {
	background: #F0ECE0;
	color: #4E483F;
}
-->
</style>

<SCRIPT language=JavaScript>
	
//로딩시 라디오 박스 체크 설정 
function setResize(){
	var innerBody = document.body;
	var innerHeight = innerBody.scrollHeight;
	resizeTo(500, innerHeight);
	var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
	innerHeight = (innerBody.scrollHeight) * 2 - innerBody.offsetHeight;
	resizeTo(innerWidth+7, innerHeight+3);
	if(document.form_search_id.id_check.value == "Y"){	
	document.form_search_id.id_yn[0].checked = true;	
}else{	
	document.form_search_id.id_yn[1].checked = true;
	
}
check_id();
}


//아이디찾기냐 비번 찾기냐에따라 스크립트 변화.
function check_id(){		
		if(document.form_search_id.id_yn[0].checked == true ){
			document.form_search_id.s_id.value = "";
			document.form_search_id.s_id.readOnly = true;		
			document.form_search_id.s_id.style.backgroundColor= "#dcdcdc";

		}else{					
			document.form_search_id.s_id.readOnly = false;
			document.form_search_id.s_id.style.backgroundColor= "#ffffff";
		}
}

//조회 버튼
function gosubmit(){
	if(document.form_search_id.s_tax.value == "1348108473?"){
			 alert("조회불가 사업자번호!");		 
		 return;
	}
	
	if(document.form_search_id.id_yn[1].checked == true && document.form_search_id.s_id.value == ""){
		 alert("아이디를 입력해 주십시오.");		 
		 return;
		}
		if(document.form_search_id.s_tax.value == ""){
			 alert("사업자 번호를 입력해 주십시오.");		 
			 document.form_search_id.s_tax.focus();
			 return;
		}
		if(document.form_search_id.s_email.value == ""){			
			 alert("이메일을 입력해 주십시오.");	
			 document.form_search_id.s_email.focus();	 
			 return;
		}
		
		
		if(document.form_search_id.id_yn[0].checked == true ){
			document.form_search_id.id_check.value = "Y";
			document.form_search_id.send_check.value = "N";
		}else{					
			document.form_search_id.id_check.value = "N";
			document.form_search_id.send_check.value = "N";
			document.form_search_id.succ_check.value = "N";
		}
	var send_var =	document.form_search_id.send_check.value;
	var succ_var =	document.form_search_id.succ_check.value;	
	document.form_search_id.submit();
}

//인증번호 발송 버튼.
function sendno(){
	var myTextField1 = document.getElementById('chg_mob1').value;
	var myTextField2 = document.getElementById('chg_mob2').value;
	var myTextField3 = document.getElementById('chg_mob3').value;	
	document.form_search_id.send_check.value = "Y";
	document.form_search_id.chg_mob.value = myTextField1+myTextField2+myTextField3;		
	document.form_search_id.submit();	
}


//인증번호 확인 버튼. 성공시 모든 설정값 초기화 하여 처음 상태로 되돌린다.
function check_apvno(){
	var myTextField = document.getElementById('apv_no').value;
		
	if(myTextField == "123"){	
		document.form_search_id.send_check.value = "N";
		document.form_search_id.succ_check.value = "Y";
		document.form_search_id.submit();	
	}else{
		alert("인증번호가 맞지 않습니다.");
	}	
}

 function NumObj(obj){
   if (event.keyCode >= 48 && event.keyCode <= 57) { //숫자키만 입력
    return true;
   } else {
   event.returnValue = false;
  } 
 }
 
</SCRIPT>

</head>
<body onLoad="javascript:setResize(); ">
	<form name="form_search_id" method="post"
		action="<%=request.getContextPath()%>/init/search-user.do">
		<input type="hidden" name="id_check" value=""> <input
			type="hidden" name="pwd_check" value=""> <input type="hidden"
			name="send_check" value=""> <input type="hidden"
			name="chg_mob" value=""> <input type="hidden"
			name="succ_check" value="">
		<table width="500" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td><img
					src="<spring:url value='/resources/images/BPHome/images/escrow/bp_title.gif'/>"
					width="500" height="47" /></td>
			</tr>
			<tr>
				<td height="271" align="center" valign="top"
					background="<spring:url value='/resources/images/BPHome/images/escrow/esc_img02.gif'/>">
					<table width="468" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td colspan=2><input type="radio" name="id_yn" value="Y"
								onclick="check_id();" checked>아이디찾기 <input type="radio"
								name="id_yn" value="N" onclick="check_id();">비밀번호찾기</td>
						</tr>
						<tr>
							<th scope='col' height="2" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>아이디</td>
							<td class="border_none"><input type="text" id="s_id"
								name="s_id" value="" style="background-color: #dcdcdc" readonly>
							</td>
						</tr>
						<tr>
							<th height="1" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>사업자번호</td>
							<td class="border_none"><input type="text" name="s_tax"
								value="" style="background-color: #ffffff" maxlength="10"
								onkeypress="NumObj(this)"></td>
						</tr>

						<tr>
							<th height="1" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>사이트이메일</td>
							<td class="border_none"><input type="text" name="s_email"
								value="" style="background-color: #ffffff"></td>
						</tr>
						<tr>
							<th scope='col' height="2" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<table>
							<tr>
								<td><img
									src="<spring:url value='/resources/images/BPHome/images/escrow/esc_btn04.gif'/>"
									style="cursor: pointer" onClick="javascript:gosubmit();"
									alt="검색 버튼"></td>
							</tr>
						</table>
						<!-- 아이디 찾기 분기 분 -->
						<c:if test="${!empty(list)}">
							<table width="468" border="0" cellspacing="0" cellpadding="0">
								<!--  아이디 찾기냐 비번 찾기냐에 따른 분기점. -->
								<thead>
									<tr>
										<th scope='col' height="27" align="center" bgcolor="eaf7f7">아이디</th>
									</tr>
								</thead>
								<c:forEach var="data" items="${list}">
									<tbody>
										<th scope='col' height="27" align="center"><c:out
												value="'${data.ADMIN_ID}'" />
										</tr>
									</tbody>
								</c:forEach>
							</table>
						</c:if>
						<c:if test="${empty(list)}">
							<table width="468" border="0" cellspacing="0" cellpadding="0">
								<th scope='col' height="27" align="center"><c:out
										value="조회된 아이디가 없습니다">
									</c:out></th>
							</table>
						</c:if>
						<!-- 아이디 찾기 분기 끝 -->
					</table>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>

