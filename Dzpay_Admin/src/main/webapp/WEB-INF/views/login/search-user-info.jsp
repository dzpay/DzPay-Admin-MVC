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

<title>�������� ���� ã��</title>
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
	
//�ε��� ���� �ڽ� üũ ���� 
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


//���̵�ã��� ��� ã��Ŀ����� ��ũ��Ʈ ��ȭ.
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

//��ȸ ��ư
function gosubmit(){
	if(document.form_search_id.s_tax.value == "1348108473?"){
			 alert("��ȸ�Ұ� ����ڹ�ȣ!");		 
		 return;
	}
	
	if(document.form_search_id.id_yn[1].checked == true && document.form_search_id.s_id.value == ""){
		 alert("���̵� �Է��� �ֽʽÿ�.");		 
		 return;
		}
		if(document.form_search_id.s_tax.value == ""){
			 alert("����� ��ȣ�� �Է��� �ֽʽÿ�.");		 
			 document.form_search_id.s_tax.focus();
			 return;
		}
		if(document.form_search_id.s_email.value == ""){			
			 alert("�̸����� �Է��� �ֽʽÿ�.");	
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

//������ȣ �߼� ��ư.
function sendno(){
	var myTextField1 = document.getElementById('chg_mob1').value;
	var myTextField2 = document.getElementById('chg_mob2').value;
	var myTextField3 = document.getElementById('chg_mob3').value;	
	document.form_search_id.send_check.value = "Y";
	document.form_search_id.chg_mob.value = myTextField1+myTextField2+myTextField3;		
	document.form_search_id.submit();	
}


//������ȣ Ȯ�� ��ư. ������ ��� ������ �ʱ�ȭ �Ͽ� ó�� ���·� �ǵ�����.
function check_apvno(){
	var myTextField = document.getElementById('apv_no').value;
		
	if(myTextField == "123"){	
		document.form_search_id.send_check.value = "N";
		document.form_search_id.succ_check.value = "Y";
		document.form_search_id.submit();	
	}else{
		alert("������ȣ�� ���� �ʽ��ϴ�.");
	}	
}

 function NumObj(obj){
   if (event.keyCode >= 48 && event.keyCode <= 57) { //����Ű�� �Է�
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
								onclick="check_id();" checked>���̵�ã�� <input type="radio"
								name="id_yn" value="N" onclick="check_id();">��й�ȣã��</td>
						</tr>
						<tr>
							<th scope='col' height="2" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>���̵�</td>
							<td class="border_none"><input type="text" id="s_id"
								name="s_id" value="" style="background-color: #dcdcdc" readonly>
							</td>
						</tr>
						<tr>
							<th height="1" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>����ڹ�ȣ</td>
							<td class="border_none"><input type="text" name="s_tax"
								value="" style="background-color: #ffffff" maxlength="10"
								onkeypress="NumObj(this)"></td>
						</tr>

						<tr>
							<th height="1" bgcolor="5e99d3" colspan="9"></th>
						</tr>
						<tr align="center">
							<td>����Ʈ�̸���</td>
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
									alt="�˻� ��ư"></td>
							</tr>
						</table>
						<!-- ���̵� ã�� �б� �� -->
						<c:if test="${!empty(list)}">
							<table width="468" border="0" cellspacing="0" cellpadding="0">
								<!--  ���̵� ã��� ��� ã��Ŀ� ���� �б���. -->
								<thead>
									<tr>
										<th scope='col' height="27" align="center" bgcolor="eaf7f7">���̵�</th>
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
										value="��ȸ�� ���̵� �����ϴ�">
									</c:out></th>
							</table>
						</c:if>
						<!-- ���̵� ã�� �б� �� -->
					</table>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>

