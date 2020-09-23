<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<%
	String kind = "";

	// request 값 Read
	if (request.getParameter("kind")       != null ) { 
		kind  = request.getParameter("kind");
	}
%>
<html>
<head>
<title>Mall 업종현황</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<style type="text/css">
    A:link     {color:#001058; text-decoration:none}
    A:visited  {color:#001058; text-decoration:none}
    A:active   {color:yellow; text-decoration:none}
    A:hover    {font-size: 9pt; text-decoration:none; Color:blue}
	font       {font-family: "굴림"; font-size: 9pt; }
    td         {font-family: "굴림"; font-size: 9pt; }
	.inputtext {font: 9pt 돋움; COLOR:#000000; BORDER:1x solid #666666}
	select     {font: 9pt 돋움; COLOR:#222222; BORDER:0x solid #778899}
</style>
<%	if ("apply".equals(kind)) { %>
<script language="javascript">
<!--
	function send_form(code) {
		opener.document.apply.corp_ind_cd.value = code;
		self.close();
	}
//-->
</script>
<%	} else if ("corp".equals(kind)) {%>
<script language="javascript">
<!--
	function send_form(code) {
		opener.document.corp.corp_ind_cd.value = code;
		self.close();
	}
//-->
</script>
<%	} else if ("corp_r".equals(kind)) {%>
<script language="javascript">
<!--
	function send_form(code) {
		opener.document.corp_r.corp_ind_cd.value = code;
		self.close();
	}
//-->
</script>
<%	} %>
</head>
<body bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="1"> 
	<table width="700" border="0" cellspacing="0" cellpadding="0" height="100%">
  		<tr>
			<td>
				<table width="690" border="0" cellspacing="0" cellpadding="0"> 
					<tr>
						<td width="340" height="40">
							<b><font color="#397677">Mall 업종</b><br></font>
							<font color="#006699"> → 아래의 업종테이블에서 해당하는 업종코드를 선택해주세요.</font>
						</td>
              			<td width="340" height="40">&nbsp;</td>
					</tr>
					<tr> 
              			<td width="340" height="40" valign="top"> 
                			<table width="340" border="1" align="center" cellpadding="0" cellspacing="1">
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="54" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>몰형태</b></font>
                    				</td>
                    				<td width="39" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>업종<br>코드</b></font>
                    				</td>
                    				<td width="235" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>내용</b></font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td rowspan="3" height="18" width="54" align="center"> 
                      					<font color="#333333">숙박업</font>
                    				</td>
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1010','호텔')">1010</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">호텔</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1020','콘도')">1020</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">콘도</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1030','여관,기타')">1030</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">여관,기타</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="3" height="18" width="54" align="center"> 
                  					  	<font color="#333333">여행 </font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('1110','항공사')">1110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">항공사</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('1120','관광여행사')">1120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">관광여행사</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('1130','고속버스,철도,여객선,택시,렌터카,기타교통수단')">1130</a></font>
                  					</td>
                  					<td width="235" height="30" align="left"> 
                  					  	<font color="#333333">고속버스,철도,여객선,택시,렌터카,<br>기타교통수단</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">레져<br>용품</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2010','골프용품,골프퍼터')">2010</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">골프용품,골프퍼터</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2020','스포츠용품,헬스기구,운동기구,등산,낚시')">2020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">스포츠용품,헬스기구,운동기구,등산,낚시</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3">
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2030','총포류')">2030</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">총포류</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2040','피아노,전자악기,음반,영상관련,음향장비')">2040</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">피아노,전자악기,음반,영상관련,음향장비</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2050','테이프판매,비디오점,기타음반제품')">2050</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">테이프판매,비디오점,기타음반제품</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">레져<br>업소</font>
                  				  	</td>
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2100','골프,카지노,스키장,볼링장,테니스장,수영장,헬스클럽,레져타운,기타레져업소')">2100</a></font>
                  				  	</td>
                  				  	<td width="235" height="33" align="left"> 
                  				  		<font color="#333333">골프,카지노,스키장,볼링장,테니스장,<br>수영장,헬스클럽,레져타운,기타레져업소</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">문화<br>및<br>취미</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2210','미술품 및 판화,아트상품,도자기,화랑')">2210</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">미술품 및 판화,아트상품,도자기,화랑</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2220','물고기,수족관용품')">2220</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">물고기,수족관용품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2230','화원')">2230</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">화원</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('2240','애완동물,애완용품')">2240</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">애완동물,애완용품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2250','문화취미기타')">2250</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">문화취미기타</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">가구</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('3000','일반가구,철제가구,기타가구')">3000</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">일반가구,철제가구,기타가구</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">전기제품</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3100','가전제품,냉열기기,기타전기제품')">3100</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">가전제품,냉열기기,기타전기제품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  					  	<font color="#333333">주방용구</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3200','주방용구,주방용식기,정수기,기타주방용구')">3200</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">주방용구,주방용식기,정수기,기타주방용구</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">연료<br>판매점</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3300','주유소,LPG취급점,연탄판매,유류판매,기타연료')">3300</a></font>
                  					</td>
                  					<td width="235" height="33" align="left"> 
                  						<font color="#333333">주유소,LPG취급점,연탄판매,유류판매,<br>기타연료</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">광학제품</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3400','메라,DP&E,기타광학제품')">3400</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">카메라,DP&amp;E,기타광학제품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">중고품</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3500','각종중고품')">3500</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">각종중고품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="8" height="18" width="54" align="center"> 
                  						<font color="#333333">유통업<br>영리</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4010','백화점')">4010</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">백화점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4020','대형할인점')">4020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">대형할인점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4030','편의점,슈퍼마켓,연쇄점')">4030</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">편의점,슈퍼마켓,연쇄점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4040','보훈매장,복지매장,면세점')">4040</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">보훈매장,복지매장,면세점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4050','농가공품판매점,옹협식품전문점')">4050</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">농가공품판매점,옹협식품전문점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4060','통신판매업')">4060</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">통신판매업</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4070','상품권,선불카드,전화카드')">4070</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">상품권,선불카드,전화카드</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4080','기타유통업')">4080</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">기타유통업</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="4" height="18" width="54" align="center"> 
                  					  	<font color="#333333">유통업<br>비영리</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4110','공무원복지시설')">4110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">공무원복지시설</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4120','단위농협연쇄점')">4120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">단위농협연쇄점</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4130','농수축협직판')">4130</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">농수축협직판</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4190','기타비영리유통')">4190</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">기타비영리유통</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">의류</font>
                  				  	</td>
                  				  	<td width="39" height="18" align="center"> 
                  				  	  	<font color="#333333"><a href="javascript:send_form('4200','기성복,유아아동복,양품점,내의판매,맞춤복,기타의류')">4200</a></font>
                  				  	</td>
                  				  	<td width="235" height="30"> 
                  				  	  	<font color="#333333">기성복,유아아동복,양품점,내의판매,<br>맞춤복,기타의류</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td width="54" height="18" align="center"> 
	                  					<font color="#333333">직물</font>
	                  				</td>
	                  				<td width="39" height="18" align="center"> 
	                  					<font color="#333333"><a href="javascript:send_form('4300','옷감.직물,카페트,커튼,천막,지물,침구.수예점,혼수전문점,기타직물')">4300</a></font>
	                  				</td>
	                  				<td width="235" height="30"> 
	                  					<font color="#333333">옷감.직물,카페트,커튼,천막,지물,침구.<br>수예점,혼수전문점,기타직물</font>
	                  				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="6" height="18" align="center"> 
                  						<font color="#333333">신변<br>잡화</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4410','가방,액세서리')">4410</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">가방,액세서리 </font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4420','귀금속,시계')">4420</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">귀금속,시계</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4430','안경')">4430</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">안경</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4440','제화,신발,기념품점')">4440</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">제화,신발,기념품점</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4450','성인용품,성인영화')">4450</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">성인용품,성인영화</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4490','기타잡화')">4490</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">기타잡화</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td rowspan="6" height="18" width="54" align="center"> 
	                  				  	<font color="#333333">서적<br>문구</font>
	                  				</td>
	                  				<td width="39" height="18" align="center"> 
	                  					<font color="#333333"><a href="javascript:send_form('5010','서적')">5010</a></font>
	                  				</td>
	                  				<td width="235" height="18" align="left"><font color="#333333">서적</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5020','출판및인쇄물')">5020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">출판및인쇄물</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5030','교육용테이프판매')">5030</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">교육용테이프판매</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5040','문구용품,완구용품')">5040</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">문구용품,완구용품</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5050','과학기자재')">5050</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">과학기자재</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5060','기타서적문구')">5060</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">기타서적문구</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">학원</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5110','외국어학원')">5110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">외국어학원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5120','자동차학원')">5120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">자동차학원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5130','컴퓨터학원')">5130</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">컴퓨터학원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5140','예.체능계학원')">5140</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">예.체능계학원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5150','기타교육기관')">5150</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">기타교육기관</font></td>
                  				</tr>
                			</table>
              			</td>
              			<td width="340" height="40" valign="top"> 
                			<table width="340" border="1" align="center" cellpadding="0" cellspacing="1">
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" bgcolor="#E1E1E1" height="18" align="center"> 
                  						<font color="#585858"><b>몰형태</b></font>
                  					</td>
                  					<td width="38" bgcolor="#E1E1E1" height="18" align="center"> 
                  						<font color="#585858"><b>업종<br>코드</b></font>
                  					</td>
                  					<td width="236" bgcolor="#E1E1E1" height="18 align="center""> 
                  						<font color="#585858"><b>내용</b></font>
                  					</td>
                  				</tr>                  				
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">사무통신</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('5210','컴퓨터,사무용OA기기,통신기기,기타 사무용품')">5210</a></font>
                  					</td>
                  					<td width="236" height="30" align="left"> 
                  						<font color="#333333">컴퓨터,사무용OA기기,통신기기,<br>기타 사무용품</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">자동차<br>판매</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6000','국산신차판매,중고자동차판매,수입자동차,이륜차판매,기타운송')">6000</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">국산신차판매,중고자동차판매,수입자동차,이륜차판매,기타운송</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">자동차<br>정비</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6100','자동차시티,타이어,부품 및 정비,중장비수리,카인테리어,기타자동차서비스')">6100</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">자동차시티,타이어,부품 및 정비,중장비수리,카인테리어,기타자동차서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">보험</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6200','생명보험,손해보험,기타보험')">6200</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">생명보험,손해보험,기타보험</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">병원</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7100','종합병원,한방병원,치과병원,기타병원')">7100</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">종합병원,한방병원,치과병원,기타병원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">의원</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7200','의원,한의원,치과의원,기타의원')">7200</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">의원,한의원,치과의원,기타의원</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">약국</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('7300','약국,한약방')">7300</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">약국,한약방</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td width="54" height="18" align="center"> 
	                  				  	<font color="#333333">기타<br>의료기관</font>
	                  				</td>
	                  				<td width="38" height="18" align="center">
	                  					<font color="#333333"><a href="javascript:send_form('7400','조산원,가축병원,건강진단,기타의료기관 및 기타의료기기')">7400</a></font>
	                  				</td>
	                  				<td width="236" height="30"><font color="#333333">조산원,가축병원,건강진단,기타의료기관 <br>및 기타의료기기</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">보건위생</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7500','미용실,미용재료,화장품,기타')">7500</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">피부미용실,미용재료,화장품,기타</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="2" height="18" width="54" align="center"> 
                  						<font color="#333333">주류</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8110','주류(상품권제외)')">8110</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">주류(상품권제외)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8120','주류(상품권포함)')">8120</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">주류(상품권포함)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="3" height="18" width="54" align="center"> 
                  				  	<font color="#333333">음료<br>식품<br></font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8210','농.축.수산물,농산물가공품,냉동어류판매,버섯')">8210</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">농.축.수산물,농산물가공품,<br>냉동어류판매,버섯</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8220','미곡상')">8220</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">미곡상</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8290','기타음료식품')">8290</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">기타음료식품</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="2" height="18" width="54" align="center"> 
                  				  		<font color="#333333">건강<br>식품</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8310','인삼,홍삼')">8310</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">인삼,홍삼</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8320','건강식품,건강케어,농축액,녹용,사슴엑기스,기타건강식품')">8320</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">건강식품,건강케어,농축액,녹용,<br>사슴엑기스,기타건강식품</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="2" height="18" width="54" align="center"> 
                  				  	 	<font color="#333333">건축<br>자제</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8410','보일러,펌프,샷시,건축용 요업제품')">8410</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">보일러,펌프,샷시,건축용 요업제품</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8420','조명기구,페인트,유리,인테리어전문,')">8420</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">조명기구,페인트,유리,인테리어전문,기타건축자재<br>기타건축자재</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="17" height="18" width="54" align="center"> 
                  				  		<font color="#333333">용역<br>서비스</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9111','광고.기획전문,이벤트')">9111</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">광고.기획전문,이벤트</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9112','가례서비스업')">9112</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">가례서비스업</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9120','보관 및 창고업,화물운송')">9120</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">보관 및 창고업,화물운송</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9121','사무서비스,행사등록비,선교회,후원금')">9121</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">사무서비스,행사등록비,선교회,후원금</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  	<font color="#333333"><a href="javascript:send_form('9122','정보서비스,증권분석정보,인터넷방송,금융권대출정보,온라인정보제공')">9122</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">정보서비스,증권분석정보,인터넷방송,<br>금융권대출정보,온라인정보제공</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9123','법률회계서비스')">9123</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">법률회계서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9124','조세서비스')">9124</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">조세서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9125','구인구직')">9125</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">구인구직</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9130','부동산중계')">9130</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">부동산중계</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9140','소프트웨어,도매인(홈페이지),영상솔루션,기업솔루션')">9140</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">소프트웨어,도매인(홈페이지),영상솔루션,기업솔루션</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9150','공공요금대행서비스')">9150</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">공공요금대행서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9160','부가통신서비스,부동산중개수수료,이메일서비스,세무대리서비스,교육서비스')">9160</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">부가통신서비스,부동산중개수수료,이메일서비스,세무대리서비스,교육서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9171','CATV')">9171</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">CATV</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9172','무선호출기')">9172</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">무선호출기</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9173','이동통신요금')">9173</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">이동통신요금</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9180','경매<(B TO C),(C TO C)>')">9180</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">경매&lt;(B TO C),(C TO C)&gt;</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9190','기타용역서비스')">9190</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">기타용역서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="6" height="18" width="54" align="center"> 
                  				  		<font color="#333333">회원제</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9210','레져업소')">9210</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">레져업소</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9220','자동차서비스,사무서비스')">9220</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">자동차서비스,사무서비스</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9230','고시수험도서,학습지,월간지,어학교재,어학학습,강좌수수료,교육사이트,참고서')">9230</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">고시수험도서,학습지,월간지,어학교재,<br>어학학습,강좌수수료,교육사이트,참고서</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9240','건강식품')">9240</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">건강식품 </font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9250','콘도회원모집,회원모집,회원권')">9250</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">콘도회원모집,회원모집,회원권</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9290','기타')">9290</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">기타</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">농업</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9300','농기계,비료,사료,종자,기타농업관련')">9300</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">농기계,비료,사료,종자,기타농업관련</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">기계공구</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9400','기계공구,기타')">9400</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">기계공구,기타</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">게임</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9500','게임')">9500</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">게임</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">할부금융</font>
                  					</td>
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9600','할부금융')">9600</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">할부금융</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  	  	<font color="#333333">복권</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9700','복권')">9700</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">복권</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="3" height="18" width="54" align="center"> 
                  				  		<font color="#333333">종합<br>쇼핑몰</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9910','명품관(수입품)')">9910</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">명품관(수입품)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9920','종합쇼핑몰(상품권제외)')">9920</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">종합쇼핑몰(상품권 제외)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9930','종합쇼핑몰(상품권포함)')">9930</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">종합쇼핑몰(상품권 포함)</font></td>
                  				</tr>                  
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="4" height="18" width="54" align="center"> 
                  				  		<font color="#333333">종교기관<br>비영리<br>단체</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9940','종교기관')">9940</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">종교기관</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9941','정당')">9941</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">정당</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9942','NGO')">9942</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">NGO</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9943','기타')">9943</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">기타</font></td>
                  				</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>

