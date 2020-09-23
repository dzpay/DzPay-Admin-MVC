<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
<title>더존페이 관리자 시스템</title>
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
		<!-- 업체구분 ME01:신규, ME02: 사업자변경 -->
		<input type="hidden" name="corp_package_yn" value="N">
		<!-- 패키지신청여부 N:미신청, Y: 신청 -->
		<input type="hidden" name="corp_status" value="CU01">
		<!-- 몰신청상태구분 1:접수, 2:보류, 3:기타, 4:완료, 9:삭제 -->
		<input type="hidden" name="corp_old_id" value="">
		<!-- 사업자변경전 업체코드 -->
		<input type="hidden" name="corp_reg_yn" value="N">
		<!-- 업체등록구분 N:미등록, Y:등록 -->
		<input type="hidden" name="site_reg_yn" value="N">
		<!-- 사이트등록구분 N:미등록, Y:등록 -->
		<input type="hidden" name="chg_list" value="">
		<!-- 담당자정보-전체 -->
		<input type="hidden" name="chg_list1" value="">
		<!-- 담당자정보-계약 -->
		<input type="hidden" name="chg_list2" value="">
		<!-- 담당자정보-기술 -->
		<input type="hidden" name="chg_list3" value="">
		<!-- 담당자정보-정산 -->
		<input type="hidden" name="chg_list4" value="">
		<!-- 담당자정보-고객 -->
		<input type="hidden" name="login_chk" value=""> <input
			type="hidden" name="cont_comments_ck" value=""> <input
			type="hidden" name="escrow_yn" value="N"> <input
			type="hidden" name="pg_type" value="PG99">
		<!--PG 종류 PG01  비인증수기/PG02 온라인/PG03 모바일-->

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
													PAY 서비스 가입신청서</b></td>
									</tr>
									<tr>
										<td colspan="3"
											background="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"><img
											src="<spring:url value='/resources/images/image/sale/sale_dot_icon.gif'/>"
											width="1" height="1"></td>
									</tr>
								</table> <br> <B>◎ 사 업 자 정 보 (사업자등록증의 정확한정보)</B>

								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;상호명</td>
										<td><input type="text" name="corp_sang_ho" value=""
											class="box" size="20" maxlength="40"></td>
										<td bgcolor="#EFEFEF">&nbsp;쇼핑몰명</td>
										<td><input type="text" name="corp_name" value=""
											class="box" size="20" maxlength="40"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;사업자번호</td>
										<td><input type="text" name="corp_tax_no" value=""
											class="box" size="11" maxlength="10">&nbsp;(숫자만입력)</td>
										<td bgcolor="#EFEFEF">&nbsp;법인번호</td>
										<td><input type="text" name="corp_no" value=""
											class="box" size="13" maxlength="13">&nbsp;(숫자만입력)</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;대표자명</td>
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
										<td bgcolor="#EFEFEF">&nbsp;대표자 핸드폰</td>
										<td colspan=3><select name="corp_own_mob1">
												<!--<option value="">선택</option>-->
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
										<td bgcolor="#EFEFEF">&nbsp;사업장주소</td>
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
										<td bgcolor="#EFEFEF">&nbsp;수령지주소</td>
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
											OnClick="JavaScript:samePost('1')">사업장주소와동일</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;대표번호</td>
										<td>(지역번호포함, 숫자만입력)<br> <input type="text"
											name="corp_tel1" value="" class="box" size="4" maxlength="4">
											- <input type="text" name="corp_tel2" value="" class="box"
											size="4" maxlength="4"> - <input type="text"
											name="corp_tel3" value="" class="box" size="4" maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;팩스번호</td>
										<td>(지역번호포함, 숫자만입력)<br> <input type="text"
											name="corp_fax1" value="" class="box" size="4" maxlength="4">
											- <input type="text" name="corp_fax2" value="" class="box"
											size="4" maxlength="4"> - <input type="text"
											name="corp_fax3" value="" class="box" size="4" maxlength="4">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;대표이메일</td>
										<td><input type="text" name="corp_email" value=""
											class="box" size="30" maxlength="50"></td>
										<td bgcolor="#EFEFEF">&nbsp;쇼핑몰URL</td>
										<td>http://&nbsp;<input type="text" name="corp_url"
											value="" class="box" size="30" maxlength="60">
										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;사이트소개</td>
										<td><input type="text" name="site_desc" value=""
											class="box" size="30" maxlength="50"></td>
										<td bgcolor="#EFEFEF">&nbsp;업종코드</td>
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
										<td bgcolor="#EFEFEF">&nbsp;업태</td>
										<td><input type="text" name="corp_biz" value=""
											class="box" size="20" maxlength="30"></td>
										<td bgcolor="#EFEFEF">&nbsp;종목</td>
										<td><input type="text" name="corp_item" value=""
											class="box" size="20" maxlength="30"></td>
									</tr>
									<input type="hidden" name="ecommerce_no" value="" class="box"
										size="20">
								</table> <br> <B>◎ 담당자 정보 </B><font color="#FF0000"> (귀사의 해당
									담당자를 반드시 1명 이상 등록해 주시면 업무진행에 도움이 됩니다)</font>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;계약담당자<br>
											&nbsp;(필수항목) <input type="hidden" name="chg_type1"
											value="CH01">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;성&nbsp;&nbsp;&nbsp;함</td>
										<td>&nbsp;<input type="text" name="contact_chg_nm"
											value="" class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;연락처</td>
										<td>&nbsp; <input type="text" name="contact_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="contact_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="contact_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;휴대폰</td>
										<td>&nbsp; <select name="contact_chg_mob1">
												<!--<option value="">선택</option>-->
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
										<td bgcolor="#EFEFEF">&nbsp;직위</td>
										<td>&nbsp; <select name='job_grp1'>
												<option value="">선택</option>
												<option value='JB01'>사원</option>
												<option value='JB02'>대리</option>
												<option value='JB03'>과장</option>
												<option value='JB04'>차장</option>
												<option value='JB05'>부장</option>
												<option value='JB06'>상무</option>
												<option value='JB07'>전무</option>
												<option value='JB08'>대표이사</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;이메일</td>
										<td colspan=3>&nbsp;<input type="text"
											name="contact_chg_email" value="" class="box" size="32"
											maxlength="50"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;기술담당자 <input
											type="hidden" name="chg_type2" value="CH02">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;성&nbsp;&nbsp;&nbsp;함</td>
										<td>&nbsp;<input type="text" name="dev_chg_nm" value=""
											class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;연락처</td>
										<td>&nbsp; <input type="text" name="dev_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="dev_chg_tel2" value="" class="box" size="3"
											maxlength="4"> - <input type="text"
											name="dev_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>	
										<td bgcolor="#EFEFEF">&nbsp;휴대폰</td>
										<td>&nbsp; <select name="dev_chg_mob1">
												<!--<option value="">선택</option>-->
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
										<td bgcolor="#EFEFEF">&nbsp;직위</td>
										<td>&nbsp; <select name='job_grp2'>
												<option value="">선택</option>
												<option value='JB01'>사원</option>
												<option value='JB02'>대리</option>
												<option value='JB03'>과장</option>
												<option value='JB04'>차장</option>
												<option value='JB05'>부장</option>
												<option value='JB06'>상무</option>
												<option value='JB07'>전무</option>
												<option value='JB08'>대표이사</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;이메일</td>
										<td colspan=3>&nbsp;<input type="text"
											name="dev_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk1"
											OnClick="JavaScript:goChg('1')">위 담당자와 동일
										</td>
									</tr>
									<tr bgcolor="#FFFFFF" bgcolor="#EFEFEF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;정산담당자 <input
											type="hidden" name="chg_type3" value="CH03">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;성&nbsp;&nbsp;&nbsp;함</td>
										<td>&nbsp;<input type="text" name="sale_chg_nm" value=""
											class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;연락처</td>
										<td>&nbsp; <input type="text" name="sale_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="sale_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="sale_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;휴대폰</td>
										<td>&nbsp; <select name="sale_chg_mob1">
												<!--<option value="">선택</option>-->
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
										<td bgcolor="#EFEFEF">&nbsp;직위</td>
										<td>&nbsp; <select name='job_grp3'>
												<option value="">선택</option>
												<option value='JB01'>사원</option>
												<option value='JB02'>대리</option>
												<option value='JB03'>과장</option>
												<option value='JB04'>차장</option>
												<option value='JB05'>부장</option>
												<option value='JB06'>상무</option>
												<option value='JB07'>전무</option>
												<option value='JB08'>대표이사</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;이메일</td>
										<td colspan=3>&nbsp;<input type="text"
											name="sale_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk2"
											OnClick="JavaScript:goChg('2')">위 담당자와 동일

										</td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td rowspan="2" bgcolor="#EFEFEF">&nbsp;고객응대 <input
											type="hidden" name="chg_type4" value="CH04">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;성&nbsp;&nbsp;&nbsp;함</td>
										<td>&nbsp;<input type="text" name="customer_chg_nm"
											value="" class="box" size="10" maxlength="12"></td>
										<td bgcolor="#EFEFEF">&nbsp;연락처</td>
										<td>&nbsp; <input type="text" name="customer_chg_tel1"
											value="" class="box" size="3" maxlength="4"> - <input
											type="text" name="customer_chg_tel2" value="" class="box"
											size="3" maxlength="4"> - <input type="text"
											name="customer_chg_tel3" value="" class="box" size="3"
											maxlength="4">
										</td>
										<td bgcolor="#EFEFEF">&nbsp;휴대폰</td>
										<td>&nbsp; <select name="customer_chg_mob1">
												<!--<option value="">선택</option>-->
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
										<td bgcolor="#EFEFEF">&nbsp;직위</td>
										<td>&nbsp; <select name='job_grp4'>
												<option value="">선택</option>
												<option value='JB01'>사원</option>
												<option value='JB02'>대리</option>
												<option value='JB03'>과장</option>
												<option value='JB04'>차장</option>
												<option value='JB05'>부장</option>
												<option value='JB06'>상무</option>
												<option value='JB07'>전무</option>
												<option value='JB08'>대표이사</option>
										</select>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;이메일</td>
										<td colspan=3>&nbsp;<input type="text"
											name="customer_chg_email" value="" class="box" size="32"
											maxlength="50"> &nbsp;&nbsp;&nbsp; <input
											type="checkbox" name="chg_chk3"
											OnClick="JavaScript:goChg('3')">위 담당자와 동일

										</td>
									</tr>
								</table> <br> <B>◎ 결 제 정 보 (차후 대금이 지급될 통장이니 정확히 입력요망)</B>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;결제은행</td>
										<td>
											<div class="select_type" style="width: 150px;">
												<select name="bank">
													<option value="BK03">기업은행</option>
													<option value="BK04">국민은행</option>
													<option value="BK07">수협</option>
													<option value="BK11">농협</option>
													<option value="BK20">우리은행</option>
													<option value="BK26">신한은행</option>
													<option value="BK27">씨티은행</option>
													<option value="BK31">대구은행</option>
													<option value="BK32">부산은행</option>
													<option value="BK34">광주은행</option>
													<option value="BK37">전북은행</option>
													<option value="BK71">우체국</option>
													<option value="BK81">하나은행</option>
													<option value="BK23">스탠다드차타드은행</option>
												</select>
											</div>
										</td>
										<td bgcolor="#EFEFEF">&nbsp;계좌번호</td>
										<td><input type="text" name="site_deposit_no" value=""
											class="box" size="15" maxlength="20"></td>
									</tr>
									<tr bgcolor="#FFFFFF">
										<td bgcolor="#EFEFEF">&nbsp;예금주명</td>
										<td colspan=3><input type="text" name="site_deposit_name"
											value="" class="box" size="30" maxlength="40"></td>
									</tr>
								</table> <br> <B>◎ 시스템정보 - 상위 벤더가 있으실경우 상위 벤더업체를 입력해주십시오.</B>
								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;벤더 업체명</td>
										<td><input type="text" name="host_nm" value="" size="15"
											maxlength="20" class="box"> <input type="hidden"
											name="host_id" value="" size="15" maxlength="20" class="box">
											<IMG
											SRC="<spring:url value='/resources/images/images/BtnSearch.gif'/>"
											ONCLICK="javascript:goHost();" WIDTH="33" HEIGHT="18"
											BORDER="0" ALIGN="ABSMIDDLE"> <font color="#FF0000">
												(검색한 벤더업체가 없는경우는 벤더업체명을 입력해주십시오)</font></td>
									</tr>
								</table> <br> <B>◎ 아이디 : </B>

								<table width="650" cellspacing="1" cellpadding="3" border=0
									bgcolor="#CCCCCC">
									<tr bgcolor="#FFFFFF">
										<td width=126 bgcolor="#EFEFEF">&nbsp;아이디</td>
										<td><input type="text" name="cont_comments" value=""
											size="23" maxlength="23" class="box"> <a
											href="javascript:id_check()">중복검사</a></td>
									</tr>
								</table>




								</form>
								<table width="650" cellspacing="1" cellpadding="3" border=0>
									<TR>
										<TD ALIGN="CENTER">신청서가 접수되면 가맹점 담당자님께 연락을 드린 후 계약을
											진행합니다.<br> <br>
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