<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
<title>�������� ������ �ý���</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<link rel="stylesheet"
	href="<spring:url value='/resources/css/ebizpro_css.css'/>"
	type="text/css" />
<script language="JavaScript"
	src="<spring:url value='/resources/js/public.js'/>" charset="euc-kr"></script>
<script language="JavaScript"
	src="<spring:url value='/resources/js/apply/mallApply.js'/>"
	charset="euc-kr"></script>

</head>
<BODY LEFTMARGIN="0" TOPMARGIN="0">

	<form id="apply" name="apply" method=post
		action="<%=request.getContextPath()%>/mall/apply/act.do">
		<input type="hidden" name="corp_reg_gubn" value="RH01"> <input
			type="hidden" name="make_type" value="ME01">
		<!-- ��ü���� ME01:�ű�, ME02: ����ں��� -->
		<input type="hidden" name="corp_package_yn" value="N">
		<!-- ��Ű����û���� N:�̽�û, Y: ��û -->
		<input type="hidden" name="corp_status" value="CU01">
		<!-- ����û���±��� 1:����, 2:����, 3:��Ÿ, 4:�Ϸ�, 9:���� -->
		<input type="hidden" name="corp_old_id" value="">
		<!-- ����ں����� ��ü�ڵ� -->
		<input type="hidden" name="corp_reg_yn" value="N">
		<!-- ��ü��ϱ��� N:�̵��, Y:��� -->
		<input type="hidden" name="site_reg_yn" value="N">
		<!-- ����Ʈ��ϱ��� N:�̵��, Y:��� -->
		<input type="hidden" name="chg_list" value="">
		<!-- ���������-��ü -->
		<input type="hidden" name="chg_list1" value="">
		<!-- ���������-��� -->
		<input type="hidden" name="chg_list2" value="">
		<!-- ���������-��� -->
		<input type="hidden" name="chg_list3" value="">
		<!-- ���������-���� -->
		<input type="hidden" name="chg_list4" value="">
		<!-- ���������-�� -->
		<input type="hidden" name="login_chk" value=""> <input
			type="hidden" name="cont_comments_ck" value=""> <input
			type="hidden" name="escrow_yn" value="N"> <input
			type="hidden" name="pg_type" value="PG99">
		<!--PG ���� PG01  ����������/PG02 �¶���/PG03 �����-->

		<table WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="0">
			<TR>
				<TD width="10"></td>
				<TD STYLE="PADDING-LEFT: 15PX">
					<TABLE WIDTH="98%" BORDER="0" CELLPADDING="5" CELLSPACING="0"
						BGCOLOR="#FFFFFF">
						<TR>
							<TD>

								<table width="650" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td colspan="3"
											background="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"><img
											src="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"
											width="1" height="1"></td>
									</tr>
									<tr>
										<td width="6" bgcolor="209B2B"><img
											src="<spring:url value='/resources/images/image/sale/sale28_icon.gif'/>"
											width="6" height="30"></td>
										<td width="6">&nbsp;</td>
										<td class="sub"><b><font color="1B8525">DUZON
													PAY ���� ���Խ�û��</b></td>
									</tr>
									<tr>
										<td colspan="3"
											background="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"><img
											src="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"
											width="1" height="1"></td>
									</tr>
								</table> <br> <B>�� �� �� �� �� �� (����ڵ������ ��Ȯ������)</B>

								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;��ȣ��</td>
										<td><input type="text" name="corp_sang_ho" value=""
											class="box" size="20" maxlength="40"></td>
										<td bgcolor="#EFEFEF">&nbsp;���θ���</td>
										<td><input type="text" name="corp_name" value=""
											class="box" size="20" maxlength="40"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����ڹ�ȣ</td>
										<td><input type="text" name="corp_tax_no" value=""
											class="box" size="11" maxlength="10">&nbsp;(���ڸ��Է�)</td>
										<td bgcolor="#EFEFEF">&nbsp;���ι�ȣ</td>
										<td><input type="text" name="corp_no" value=""
											class="box" size="13" maxlength="13">&nbsp;(���ڸ��Է�)</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;��ǥ�ڸ�</td>
										<td><input type="text" name="corp_own_name" value=""
											class="box" size="12" maxlength="12"></td>

										<input type="hidden" name="corp_own_no1" value="999999"
											class="box" size="6" maxlength="6"> - &nbsp;
										<input type="hidden" name="corp_own_no2" value="9999999"
											class="box" size="7" maxlength="7">

										<input type="hidden" name="corp_own_no" value="">
										<td></td>
										<td></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;��ǥ�� �ڵ���</td>
										<td colspan=3><select name="corp_own_mob1">
												<!--<option value="">����</option>-->
												<option value="010">010</option>
												<!--<option value="011">011</option>
	    		<option value="017">017</option>
	    		<option value="016">016</option>
	    		<option value="018">018</option>
	    		<option value="019">019</option>-->
										</select> - <input type="text" name="corp_own_mob2" value=""
											class="box" size="3" maxlength="4"> - <input
											type="text" name="corp_own_mob3" value="" class="box"
											size="3" maxlength="4"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;������ּ�</td>
										<td colspan="3"><input type="text" id="corp_zipcode"
											name="corp_zipcode" value="" class="box" size="6"
											OnClick="javascript:goZip('1');" readonly>&nbsp;<a
											href="javascript:goZip('1');"><IMG
												SRC="<spring:url value='/resources/images/images/BtnPost.gif'/>"
												ONCLICK="javascript:goZip('1');" WIDTH="72" HEIGHT="18"
												BORDER="0" ALIGN="ABSMIDDLE"></a>&nbsp; <input type="text"
											id="corp_addr1" name="corp_addr1" value="" class="box"
											size="45" maxlength="30"><br> <input type="text"
											id="corp_addr2" name="corp_addr2" value="" class="box"
											size="45" maxlength="30"></td>
									</tr>
									<input type="hidden" name="corp_own_zipcode" value=""
										class="box" size="6" OnClick="javascript:goZip();" readonly>
									<input type="hidden" name="corp_own_addr1" value="" class="box"
										size="45">
									<br>
									<input type="hidden" name="corp_own_addr2" value="" class="box"
										size="45" maxlength="30">
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;�������ּ�</td>
										<td colspan="3"><input type="text"
											name="corp_post_zipcode" value="" class="box" size="6"
											OnClick="javascript:goZip('2');" readonly>&nbsp;<a
											href="javascript:goZip('2');"><IMG
												SRC="<spring:url value='/resources/images/images/BtnPost.gif'/>"
												ONCLICK="javascript:goZip('2');" WIDTH="72" HEIGHT="18"
												BORDER="0" ALIGN="ABSMIDDLE"></a>&nbsp; <input type="text"
											name="corp_post_addr1" value="" class="box" size="45"><br>
											<input type="text" name="corp_post_addr2" value=""
											class="box" size="45" maxlength="30"> <input
											type="checkbox" name="addr_chk1"
											OnClick="JavaScript:samePost('1')">������ּҿ͵���</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;��ǥ��ȣ</td>
										<td>(������ȣ����, ���ڸ��Է�)<br> <input type="text"
											name="corp_tel1" value="" class="box" size="4" maxlength="4">
											- <input type="text" name="corp_tel2" value="" class="box"
											size="4" maxlength="4"> - <input type="text"
											name="corp_tel3" value="" class="box" size="4" maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�ѽ���ȣ</td>
										<td>(������ȣ����, ���ڸ��Է�)<br> <input type="text"
											name="corp_fax1" value="" class="box" size="4" maxlength="4">
											- <input type="text" name="corp_fax2" value="" class="box"
											size="4" maxlength="4"> - <input type="text"
											name="corp_fax3" value="" class="box" size="4" maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;��ǥ�̸���</td>
										<td><input type="text" name="corp_email" value=""
											class="box" size="30" maxlength="50"></td>
										<td bgcolor="#EFEFEF">&nbsp;���θ�URL</td>
										<td>http://&nbsp;<input type="text" name="corp_url"
											value="" class="box" size="30" maxlength="60">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����Ʈ�Ұ�</td>
										<td><input type="text" name="site_desc" value=""
											class="box" size="30" maxlength="50"></td>
										<td bgcolor="#EFEFEF">&nbsp;�����ڵ�</td>
										<td><input type="text" name="corp_ind_cd" value=""
											class="box" size="4" maxlength=4> <a
											href="javascript:makePop_T('http://localhost:8080/dzpay/mall/business-code.do?kind=apply','716','600','corp_ind_popup','yes');">
												<IMG
												SRC="<spring:url value='/resources/images/images/BtnCode.gif'/>"
												ONCLICK="javascript:makePop_T('http://localhost:8080/dzpay/mall/business-code.do?kind=apply','716','600','corp_ind_popup','yes');"
												WIDTH="72" HEIGHT="18" BORDER="0" ALIGN="ABSMIDDLE">
										</a></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td><input type="text" name="corp_biz" value=""
											class="box" size="20" maxlength="30"></td>
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td><input type="text" name="corp_item" value=""
											class="box" size="20" maxlength="30"></td>
									</tr>
									<input type="hidden" name="ecommerce_no" value="" class="box"
										size="20">
								</table> <br> <B>�� ����� ���� </B><font color="#FF0000"> (�ͻ��� �ش�
									����ڸ� �ݵ�� 1�� �̻� ����� �ֽø� �������࿡ ������ �˴ϴ�)</font>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;�������<br>
											&nbsp;(�ʼ��׸�) <input type="hidden" name="chg_type1"
											value="CH01">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;��&nbsp;&nbsp;&nbsp;��</td>
										<td>&nbsp;<input type="text" name="contact_chg_nm"
											value="" class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;����ó</td>
										<td>&nbsp; <input type="text" name="contact_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="contact_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="contact_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�޴���</td>
										<td>&nbsp; <select name="contact_chg_mob1">
												<!--<option value="">����</option>-->
												<option value="010">010</option>
												<!--<option value="011">011</option>
	    		<option value="017">017</option>
	    		<option value="016">016</option>
	    		<option value="018">018</option>
	    		<option value="019">019</option>-->
										</select> - <input type="text" name="contact_chg_mob2" value=""
											class="box" size="3" maxlength="4"> - <input
											type="text" name="contact_chg_mob3" value="" class="box"
											size="3" maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td>&nbsp; <select name='job_grp1'>
												<option value="">����</option>
												<option value='JB01'>���</option>
												<option value='JB02'>�븮</option>
												<option value='JB03'>����</option>
												<option value='JB04'>����</option>
												<option value='JB05'>����</option>
												<option value='JB06'>��</option>
												<option value='JB07'>����</option>
												<option value='JB08'>��ǥ�̻�</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�̸���</td>
										<td colspan=3>&nbsp;<input type="text"
											name="contact_chg_email" value="" class="box" size="32"
											maxlength="50"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;�������� <input
											type="hidden" name="chg_type2" value="CH02">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;��&nbsp;&nbsp;&nbsp;��</td>
										<td>&nbsp;<input type="text" name="dev_chg_nm" value=""
											class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;����ó</td>
										<td>&nbsp; <input type="text" name="dev_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="dev_chg_tel2" value="" class="box" size="3"
											maxlength="4"> - <input type="text"
											name="dev_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>	
										<td bgcolor="#EFEFEF">&nbsp;�޴���</td>
										<td>&nbsp; <select name="dev_chg_mob1">
												<!--<option value="">����</option>-->
												<option value="010">010</option>
												<!--<option value="011">011</option>
	    		<option value="017">017</option>
	    		<option value="016">016</option>
	    		<option value="018">018</option>
	    		<option value="019">019</option>-->
										</select> - <input type="text" name="dev_chg_mob2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="dev_chg_mob3" value="" class="box" size="3"
											maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td>&nbsp; <select name='job_grp2'>
												<option value="">����</option>
												<option value='JB01'>���</option>
												<option value='JB02'>�븮</option>
												<option value='JB03'>����</option>
												<option value='JB04'>����</option>
												<option value='JB05'>����</option>
												<option value='JB06'>��</option>
												<option value='JB07'>����</option>
												<option value='JB08'>��ǥ�̻�</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�̸���</td>
										<td colspan=3>&nbsp;<input type="text"
											name="dev_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk1"
											OnClick="JavaScript:goChg('1')">�� ����ڿ� ����
										</td>
									</tr>
									<tr bgcolor="#FFFFFF" bgcolor="#EFEFEF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;�������� <input
											type="hidden" name="chg_type3" value="CH03">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;��&nbsp;&nbsp;&nbsp;��</td>
										<td>&nbsp;<input type="text" name="sale_chg_nm" value=""
											class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;����ó</td>
										<td>&nbsp; <input type="text" name="sale_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="sale_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="sale_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�޴���</td>
										<td>&nbsp; <select name="sale_chg_mob1">
												<!--<option value="">����</option>-->
												<option value="010">010</option>
												<!--<option value="011">011</option>
	    		<option value="017">017</option>
	    		<option value="016">016</option>
	    		<option value="018">018</option>
	    		<option value="019">019</option>-->
										</select> - <input type="text" name="sale_chg_mob2" value=""
											class="box" size="3" maxlength="4"> - <input
											type="text" name="sale_chg_mob3" value="" class="box"
											size="3" maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td>&nbsp; <select name='job_grp3'>
												<option value="">����</option>
												<option value='JB01'>���</option>
												<option value='JB02'>�븮</option>
												<option value='JB03'>����</option>
												<option value='JB04'>����</option>
												<option value='JB05'>����</option>
												<option value='JB06'>��</option>
												<option value='JB07'>����</option>
												<option value='JB08'>��ǥ�̻�</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�̸���</td>
										<td colspan=3>&nbsp;<input type="text"
											name="sale_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk2"
											OnClick="JavaScript:goChg('2')">�� ����ڿ� ����

										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;������ <input
											type="hidden" name="chg_type4" value="CH04">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;��&nbsp;&nbsp;&nbsp;��</td>
										<td>&nbsp;<input type="text" name="customer_chg_nm"
											value="" class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;����ó</td>
										<td>&nbsp; <input type="text" name="customer_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="customer_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="customer_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�޴���</td>
										<td>&nbsp; <select name="customer_chg_mob1">
												<!--<option value="">����</option>-->
												<option value="010">010</option>
												<!--<option value="011">011</option>
	    		<option value="017">017</option>
	    		<option value="016">016</option>
	    		<option value="018">018</option>
	    		<option value="019">019</option>-->
										</select> - <input type="text" name="customer_chg_mob2" value=""
											class="box" size="3" maxlength="4"> - <input
											type="text" name="customer_chg_mob3" value="" class="box"
											size="3" maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;����</td>
										<td>&nbsp; <select name='job_grp4'>
												<option value="">����</option>
												<option value='JB01'>���</option>
												<option value='JB02'>�븮</option>
												<option value='JB03'>����</option>
												<option value='JB04'>����</option>
												<option value='JB05'>����</option>
												<option value='JB06'>��</option>
												<option value='JB07'>����</option>
												<option value='JB08'>��ǥ�̻�</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;�̸���</td>
										<td colspan=3>&nbsp;<input type="text"
											name="customer_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk3"
											OnClick="JavaScript:goChg('3')">�� ����ڿ� ����

										</td>
									</tr>
								</table> <br> <B>�� �� �� �� �� (���� ����� ���޵� �����̴� ��Ȯ�� �Է¿��)</B>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;��������</td>
										<td>
											<div class="select_type" style="width: 150px;">
												<select name="bank">
													<option value="BK03">�������</option>
													<option value="BK04">��������</option>
													<option value="BK07">����</option>
													<option value="BK11">����</option>
													<option value="BK20">�츮����</option>
													<option value="BK26">��������</option>
													<option value="BK27">��Ƽ����</option>
													<option value="BK31">�뱸����</option>
													<option value="BK32">�λ�����</option>
													<option value="BK34">��������</option>
													<option value="BK37">��������</option>
													<option value="BK71">��ü��</option>
													<option value="BK81">�ϳ�����</option>
													<option value="BK23">���Ĵٵ���Ÿ������</option>
												</select>
											</div>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;���¹�ȣ</td>
										<td><input type="text" name="site_deposit_no" value=""
											class="box" size="15" maxlength="20"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;�����ָ�</td>
										<td colspan=3><input type="text" name="site_deposit_name"
											value="" class="box" size="30" maxlength="40"></td>
									</tr>
								</table> <br> <B>�� �ý������� - ���� ������ �����ǰ�� ���� ������ü�� �Է����ֽʽÿ�.</B>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;���� ��ü��</td>
										<td><input type="text" name="host_nm" value="" size="15"
											maxlength="20" class="box"> <input type="hidden"
											name="host_id" value="" size="15" maxlength="20" class="box">
											<IMG
											SRC="<spring:url value='/resources/images/images/BtnSearch.gif'/>"
											ONCLICK="javascript:goHost();" WIDTH="33" HEIGHT="18"
											BORDER="0" ALIGN="ABSMIDDLE"> <font color="#FF0000">
												(�˻��� ������ü�� ���°��� ������ü���� �Է����ֽʽÿ�)</font></td>
									</tr>
								</table> <br> <B>�� ���̵� : </B>

								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;���̵�</td>
										<td><input type="text" name="cont_comments" value=""
											size="23" maxlength="23" class="box"> <a
											href="javascript:id_check()">�ߺ��˻�</a></td>
									</tr>
								</table>




								</form>
								<table width="650" cellspacing="1" cellpadding="3" border=0>
									<TR>
										<TD ALIGN="CENTER">��û���� �����Ǹ� ������ ����ڴԲ� ������ �帰 �� �����
											�����մϴ�.<br> <br>
										</TD>
									</TR>

									<tr align=center>
										<td><IMG
											SRC="<spring:url value='/resources/images/images/ServiceBtnConfirm.gif'/>"
											ONCLICK="javascript:goSubmit();" WIDTH="102" HEIGHT="23"
											BORDER="0" ALIGN="ABSMIDDLE"></td>
									</tr>
								</table>

							</TD>
						</TR>
					</TABLE>
				</TD>
			</TR>
		</TABLE>
	</form>
	<iframe width="0" height="0" name="JusoInfo_POP" style="display: none;"></iframe>
</body>
</html>