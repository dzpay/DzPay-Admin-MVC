<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<%
	String kind = "";

	// request �� Read
	if (request.getParameter("kind")       != null ) { 
		kind  = request.getParameter("kind");
	}
%>
<html>
<head>
<title>Mall ������Ȳ</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<style type="text/css">
    A:link     {color:#001058; text-decoration:none}
    A:visited  {color:#001058; text-decoration:none}
    A:active   {color:yellow; text-decoration:none}
    A:hover    {font-size: 9pt; text-decoration:none; Color:blue}
	font       {font-family: "����"; font-size: 9pt; }
    td         {font-family: "����"; font-size: 9pt; }
	.inputtext {font: 9pt ����; COLOR:#000000; BORDER:1x solid #666666}
	select     {font: 9pt ����; COLOR:#222222; BORDER:0x solid #778899}
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
							<b><font color="#397677">Mall ����</b><br></font>
							<font color="#006699"> �� �Ʒ��� �������̺��� �ش��ϴ� �����ڵ带 �������ּ���.</font>
						</td>
              			<td width="340" height="40">&nbsp;</td>
					</tr>
					<tr> 
              			<td width="340" height="40" valign="top"> 
                			<table width="340" border="1" align="center" cellpadding="0" cellspacing="1">
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="54" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>������</b></font>
                    				</td>
                    				<td width="39" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>����<br>�ڵ�</b></font>
                    				</td>
                    				<td width="235" bgcolor="#E1E1E1" height="32" align="center"> 
                      					<font color="#585858"><b>����</b></font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td rowspan="3" height="18" width="54" align="center"> 
                      					<font color="#333333">���ھ�</font>
                    				</td>
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1010','ȣ��')">1010</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">ȣ��</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1020','�ܵ�')">1020</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">�ܵ�</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                    				<td width="39" height="18" align="center"> 
                      					<font color="#333333"><a href="javascript:send_form('1030','����,��Ÿ')">1030</a></font>
                    				</td>
                    				<td width="235" height="18" align="left"> 
                      					<font color="#333333">����,��Ÿ</font>
                    				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="3" height="18" width="54" align="center"> 
                  					  	<font color="#333333">���� </font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('1110','�װ���')">1110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">�װ���</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('1120','���������')">1120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">���������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('1130','��ӹ���,ö��,������,�ý�,����ī,��Ÿ�������')">1130</a></font>
                  					</td>
                  					<td width="235" height="30" align="left"> 
                  					  	<font color="#333333">��ӹ���,ö��,������,�ý�,����ī,<br>��Ÿ�������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">����<br>��ǰ</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2010','������ǰ,��������')">2010</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">������ǰ,��������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2020','��������ǰ,�ｺ�ⱸ,��ⱸ,���,����')">2020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��������ǰ,�ｺ�ⱸ,��ⱸ,���,����</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3">
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2030','������')">2030</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">������</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2040','�ǾƳ�,���ھǱ�,����,�������,�������')">2040</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">�ǾƳ�,���ھǱ�,����,�������,�������</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2050','�������Ǹ�,������,��Ÿ������ǰ')">2050</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">�������Ǹ�,������,��Ÿ������ǰ</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">����<br>����</font>
                  				  	</td>
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('2100','����,ī����,��Ű��,������,�״Ͻ���,������,�ｺŬ��,����Ÿ��,��Ÿ��������')">2100</a></font>
                  				  	</td>
                  				  	<td width="235" height="33" align="left"> 
                  				  		<font color="#333333">����,ī����,��Ű��,������,�״Ͻ���,<br>������,�ｺŬ��,����Ÿ��,��Ÿ��������</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">��ȭ<br>��<br>���</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2210','�̼�ǰ �� ��ȭ,��Ʈ��ǰ,���ڱ�,ȭ��')">2210</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�̼�ǰ �� ��ȭ,��Ʈ��ǰ,���ڱ�,ȭ��</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2220','�����,��������ǰ')">2220</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�����,��������ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2230','ȭ��')">2230</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">ȭ��</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('2240','�ֿϵ���,�ֿϿ�ǰ')">2240</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�ֿϵ���,�ֿϿ�ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('2250','��ȭ��̱�Ÿ')">2250</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��ȭ��̱�Ÿ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">����</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('3000','�Ϲݰ���,ö������,��Ÿ����')">3000</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">�Ϲݰ���,ö������,��Ÿ����</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">������ǰ</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3100','������ǰ,�ÿ����,��Ÿ������ǰ')">3100</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">������ǰ,�ÿ����,��Ÿ������ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  					  	<font color="#333333">�ֹ�뱸</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3200','�ֹ�뱸,�ֹ��ı�,������,��Ÿ�ֹ�뱸')">3200</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�ֹ�뱸,�ֹ��ı�,������,��Ÿ�ֹ�뱸</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">����<br>�Ǹ���</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3300','������,LPG�����,��ź�Ǹ�,�����Ǹ�,��Ÿ����')">3300</a></font>
                  					</td>
                  					<td width="235" height="33" align="left"> 
                  						<font color="#333333">������,LPG�����,��ź�Ǹ�,�����Ǹ�,<br>��Ÿ����</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">������ǰ</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3400','�޶�,DP&E,��Ÿ������ǰ')">3400</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">ī�޶�,DP&amp;E,��Ÿ������ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�߰�ǰ</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('3500','�����߰�ǰ')">3500</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�����߰�ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="8" height="18" width="54" align="center"> 
                  						<font color="#333333">�����<br>����</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4010','��ȭ��')">4010</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��ȭ��</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4020','����������')">4020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">����������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4030','������,���۸���,������')">4030</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">������,���۸���,������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4040','���Ƹ���,��������,�鼼��')">4040</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">���Ƹ���,��������,�鼼��</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4050','�󰡰�ǰ�Ǹ���,������ǰ������')">4050</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">�󰡰�ǰ�Ǹ���,������ǰ������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  					  	<font color="#333333"><a href="javascript:send_form('4060','����Ǹž�')">4060</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">����Ǹž�</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4070','��ǰ��,����ī��,��ȭī��')">4070</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��ǰ��,����ī��,��ȭī��</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4080','��Ÿ�����')">4080</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��Ÿ�����</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="4" height="18" width="54" align="center"> 
                  					  	<font color="#333333">�����<br>�񿵸�</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4110','�����������ü�')">4110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  					  	<font color="#333333">�����������ü�</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4120','��������������')">4120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��������������</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4130','�����������')">4130</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"> 
                  				  		<font color="#333333">�����������</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4190','��Ÿ�񿵸�����')">4190</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"> 
                  						<font color="#333333">��Ÿ�񿵸�����</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">�Ƿ�</font>
                  				  	</td>
                  				  	<td width="39" height="18" align="center"> 
                  				  	  	<font color="#333333"><a href="javascript:send_form('4200','�⼺��,���ƾƵ���,��ǰ��,�����Ǹ�,���㺹,��Ÿ�Ƿ�')">4200</a></font>
                  				  	</td>
                  				  	<td width="235" height="30"> 
                  				  	  	<font color="#333333">�⼺��,���ƾƵ���,��ǰ��,�����Ǹ�,<br>���㺹,��Ÿ�Ƿ�</font>
                  				  	</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td width="54" height="18" align="center"> 
	                  					<font color="#333333">����</font>
	                  				</td>
	                  				<td width="39" height="18" align="center"> 
	                  					<font color="#333333"><a href="javascript:send_form('4300','�ʰ�.����,ī��Ʈ,Ŀư,õ��,����,ħ��.������,ȥ��������,��Ÿ����')">4300</a></font>
	                  				</td>
	                  				<td width="235" height="30"> 
	                  					<font color="#333333">�ʰ�.����,ī��Ʈ,Ŀư,õ��,����,ħ��.<br>������,ȥ��������,��Ÿ����</font>
	                  				</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="6" height="18" align="center"> 
                  						<font color="#333333">�ź�<br>��ȭ</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4410','����,�׼�����')">4410</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">����,�׼����� </font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4420','�ͱݼ�,�ð�')">4420</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">�ͱݼ�,�ð�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4430','�Ȱ�')">4430</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">�Ȱ�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('4440','��ȭ,�Ź�,���ǰ��')">4440</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">��ȭ,�Ź�,���ǰ��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4450','���ο�ǰ,���ο�ȭ')">4450</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">���ο�ǰ,���ο�ȭ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="39" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('4490','��Ÿ��ȭ')">4490</a></font>
                  				  	</td>
                  				  	<td width="235" height="18" align="left"><font color="#333333">��Ÿ��ȭ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td rowspan="6" height="18" width="54" align="center"> 
	                  				  	<font color="#333333">����<br>����</font>
	                  				</td>
	                  				<td width="39" height="18" align="center"> 
	                  					<font color="#333333"><a href="javascript:send_form('5010','����')">5010</a></font>
	                  				</td>
	                  				<td width="235" height="18" align="left"><font color="#333333">����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5020','���ǹ��μ⹰')">5020</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">���ǹ��μ⹰</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5030','�������������Ǹ�')">5030</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">�������������Ǹ�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5040','������ǰ,�ϱ���ǰ')">5040</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">������ǰ,�ϱ���ǰ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5050','���б�����')">5050</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">���б�����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5060','��Ÿ��������')">5060</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">��Ÿ��������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="5" height="18" width="54" align="center"> 
                  						<font color="#333333">�п�</font>
                  					</td>
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5110','�ܱ����п�')">5110</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">�ܱ����п�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5120','�ڵ����п�')">5120</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">�ڵ����п�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5130','��ǻ���п�')">5130</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">��ǻ���п�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5140','��.ü�ɰ��п�')">5140</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">��.ü�ɰ��п�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="39" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('5150','��Ÿ�������')">5150</a></font>
                  					</td>
                  					<td width="235" height="18" align="left"><font color="#333333">��Ÿ�������</font></td>
                  				</tr>
                			</table>
              			</td>
              			<td width="340" height="40" valign="top"> 
                			<table width="340" border="1" align="center" cellpadding="0" cellspacing="1">
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" bgcolor="#E1E1E1" height="18" align="center"> 
                  						<font color="#585858"><b>������</b></font>
                  					</td>
                  					<td width="38" bgcolor="#E1E1E1" height="18" align="center"> 
                  						<font color="#585858"><b>����<br>�ڵ�</b></font>
                  					</td>
                  					<td width="236" bgcolor="#E1E1E1" height="18 align="center""> 
                  						<font color="#585858"><b>����</b></font>
                  					</td>
                  				</tr>                  				
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�繫���</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('5210','��ǻ��,�繫��OA���,��ű��,��Ÿ �繫��ǰ')">5210</a></font>
                  					</td>
                  					<td width="236" height="30" align="left"> 
                  						<font color="#333333">��ǻ��,�繫��OA���,��ű��,<br>��Ÿ �繫��ǰ</font>
                  					</td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�ڵ���<br>�Ǹ�</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6000','��������Ǹ�,�߰��ڵ����Ǹ�,�����ڵ���,�̷����Ǹ�,��Ÿ���')">6000</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">��������Ǹ�,�߰��ڵ����Ǹ�,�����ڵ���,�̷����Ǹ�,��Ÿ���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�ڵ���<br>����</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6100','�ڵ�����Ƽ,Ÿ�̾�,��ǰ �� ����,��������,ī���׸���,��Ÿ�ڵ�������')">6100</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">�ڵ�����Ƽ,Ÿ�̾�,��ǰ �� ����,��������,ī���׸���,��Ÿ�ڵ�������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">����</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('6200','������,���غ���,��Ÿ����')">6200</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">������,���غ���,��Ÿ����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7100','���պ���,�ѹ溴��,ġ������,��Ÿ����')">7100</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">���պ���,�ѹ溴��,ġ������,��Ÿ����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">�ǿ�</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7200','�ǿ�,���ǿ�,ġ���ǿ�,��Ÿ�ǿ�')">7200</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�ǿ�,���ǿ�,ġ���ǿ�,��Ÿ�ǿ�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�౹</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('7300','�౹,�Ѿ��')">7300</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�౹,�Ѿ��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
	                  				<td width="54" height="18" align="center"> 
	                  				  	<font color="#333333">��Ÿ<br>�Ƿ���</font>
	                  				</td>
	                  				<td width="38" height="18" align="center">
	                  					<font color="#333333"><a href="javascript:send_form('7400','�����,���ິ��,�ǰ�����,��Ÿ�Ƿ��� �� ��Ÿ�Ƿ���')">7400</a></font>
	                  				</td>
	                  				<td width="236" height="30"><font color="#333333">�����,���ິ��,�ǰ�����,��Ÿ�Ƿ��� <br>�� ��Ÿ�Ƿ���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">��������</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('7500','�̿��,�̿����,ȭ��ǰ,��Ÿ')">7500</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�Ǻι̿��,�̿����,ȭ��ǰ,��Ÿ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td rowspan="2" height="18" width="54" align="center"> 
                  						<font color="#333333">�ַ�</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8110','�ַ�(��ǰ������)')">8110</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�ַ�(��ǰ������)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8120','�ַ�(��ǰ������)')">8120</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�ַ�(��ǰ������)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="3" height="18" width="54" align="center"> 
                  				  	<font color="#333333">����<br>��ǰ<br></font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8210','��.��.���깰,��깰����ǰ,�õ�����Ǹ�,����')">8210</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">��.��.���깰,��깰����ǰ,<br>�õ�����Ǹ�,����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8220','�̰��')">8220</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�̰��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('8290','��Ÿ�����ǰ')">8290</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">��Ÿ�����ǰ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="2" height="18" width="54" align="center"> 
                  				  		<font color="#333333">�ǰ�<br>��ǰ</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8310','�λ�,ȫ��')">8310</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�λ�,ȫ��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8320','�ǰ���ǰ,�ǰ��ɾ�,�����,���,�罿���⽺,��Ÿ�ǰ���ǰ')">8320</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">�ǰ���ǰ,�ǰ��ɾ�,�����,���,<br>�罿���⽺,��Ÿ�ǰ���ǰ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="2" height="18" width="54" align="center"> 
                  				  	 	<font color="#333333">����<br>����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8410','���Ϸ�,����,����,����� �����ǰ')">8410</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">���Ϸ�,����,����,����� �����ǰ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('8420','����ⱸ,����Ʈ,����,���׸�������,')">8420</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">����ⱸ,����Ʈ,����,���׸�������,��Ÿ��������<br>��Ÿ��������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="17" height="18" width="54" align="center"> 
                  				  		<font color="#333333">�뿪<br>����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9111','����.��ȹ����,�̺�Ʈ')">9111</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����.��ȹ����,�̺�Ʈ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9112','���ʼ��񽺾�')">9112</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">���ʼ��񽺾�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9120','���� �� â���,ȭ�����')">9120</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">���� �� â���,ȭ�����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9121','�繫����,����Ϻ�,����ȸ,�Ŀ���')">9121</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�繫����,����Ϻ�,����ȸ,�Ŀ���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  	<font color="#333333"><a href="javascript:send_form('9122','��������,���Ǻм�����,���ͳݹ��,�����Ǵ�������,�¶�����������')">9122</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">��������,���Ǻм�����,���ͳݹ��,<br>�����Ǵ�������,�¶�����������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9123','����ȸ�輭��')">9123</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����ȸ�輭��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9124','��������')">9124</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">��������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9125','���α���')">9125</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">���α���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9130','�ε����߰�')">9130</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�ε����߰�</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9140','����Ʈ����,������(Ȩ������),����ַ��,����ַ��')">9140</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">����Ʈ����,������(Ȩ������),����ַ��,����ַ��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9150','������ݴ��༭��')">9150</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">������ݴ��༭��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9160','�ΰ���ż���,�ε����߰�������,�̸��ϼ���,�����븮����,��������')">9160</a></font>
                  				  	</td>
                  				  	<td width="236" height="30"><font color="#333333">�ΰ���ż���,�ε����߰�������,�̸��ϼ���,�����븮����,��������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9171','CATV')">9171</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">CATV</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9172','����ȣ���')">9172</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">����ȣ���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9173','�̵���ſ��')">9173</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�̵���ſ��</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9180','���<(B TO C),(C TO C)>')">9180</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">���&lt;(B TO C),(C TO C)&gt;</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9190','��Ÿ�뿪����')">9190</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">��Ÿ�뿪����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="6" height="18" width="54" align="center"> 
                  				  		<font color="#333333">ȸ����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9210','��������')">9210</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">��������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9220','�ڵ�������,�繫����')">9220</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�ڵ�������,�繫����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9230','��ü��赵��,�н���,������,���б���,�����н�,���¼�����,��������Ʈ,����')">9230</a></font>
                  					</td>
                  					<td width="236" height="30"><font color="#333333">��ü��赵��,�н���,������,���б���,<br>�����н�,���¼�����,��������Ʈ,����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9240','�ǰ���ǰ')">9240</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�ǰ���ǰ </font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9250','�ܵ�ȸ������,ȸ������,ȸ����')">9250</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�ܵ�ȸ������,ȸ������,ȸ����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9290','��Ÿ')">9290</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">��Ÿ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">���</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9300','����,���,���,����,��Ÿ�������')">9300</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����,���,���,����,��Ÿ�������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">������</font>
                  					</td>
                  					<td width="38" height="18" align="center">
                  						<font color="#333333"><a href="javascript:send_form('9400','������,��Ÿ')">9400</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">������,��Ÿ</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  		<font color="#333333">����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center">
                  				  		<font color="#333333"><a href="javascript:send_form('9500','����')">9500</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="54" height="18" align="center"> 
                  						<font color="#333333">�Һα���</font>
                  					</td>
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9600','�Һα���')">9600</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">�Һα���</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="54" height="18" align="center"> 
                  				  	  	<font color="#333333">����</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9700','����')">9700</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="3" height="18" width="54" align="center"> 
                  				  		<font color="#333333">����<br>���θ�</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9910','��ǰ��(����ǰ)')">9910</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">��ǰ��(����ǰ)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9920','���ռ��θ�(��ǰ������)')">9920</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">���ռ��θ�(��ǰ�� ����)</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  					<td width="38" height="18" align="center"> 
                  						<font color="#333333"><a href="javascript:send_form('9930','���ռ��θ�(��ǰ������)')">9930</a></font>
                  					</td>
                  					<td width="236" height="18"><font color="#333333">���ռ��θ�(��ǰ�� ����)</font></td>
                  				</tr>                  
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td rowspan="4" height="18" width="54" align="center"> 
                  				  		<font color="#333333">�������<br>�񿵸�<br>��ü</font>
                  				  	</td>
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9940','�������')">9940</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">�������</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9941','����')">9941</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">����</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9942','NGO')">9942</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">NGO</font></td>
                  				</tr>
                  				<tr bordercolor="#E3E3E3"> 
                  				  	<td width="38" height="18" align="center"> 
                  				  		<font color="#333333"><a href="javascript:send_form('9943','��Ÿ')">9943</a></font>
                  				  	</td>
                  				  	<td width="236" height="18"><font color="#333333">��Ÿ</font></td>
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

