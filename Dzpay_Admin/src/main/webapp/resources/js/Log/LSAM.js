function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}

// �˻����ǿ� ���� ������ �˻�
function Send_Search()
{
  
	var datesplit;

	if (document.form1.date_from.value.length > 0) {
		/* 20050929 deadlines ����
		datesplit = document.form1.date_from.value.split("-");

		if (date_formate_yyyymmdd_check(document.form1.date_from.value) == '-1')
		{
			alert('yyyy-mm-dd ���������� �Է��Ͽ��ּ���.\nex) 2004/01/01');
			document.form1.date_from.focus();
			return;
		}
		
		for ( var i = 0; i < datesplit.length ; i++ )
		{
			if (number_check(datesplit[i]) == '-1')
			{
				alert('��ġ�� �Է��Ͽ��ּ���.');
			    document.form1.date_from.focus();
			    return;
				break;
			}
			
		}

		if (date_number_yyyymmdd_check(datesplit[0],datesplit[1],datesplit[2]) == '-1')
		{
			alert('��ġ�� �Է��Ͽ� �ּ���.');
			document.form1.date_from.focus();
			return;
		}
		*/
		if (document.form1.date_from.value.length != 8) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_from.focus();
			return;			
		}
		if (document.form1.date_to.value.length != 8) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_to.focus();
			return;			
		}
		if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('��¥�� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.');
			document.form1.date_from.focus();
			return;			
		}
	}
	
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

//��¥ ���� �޷� ��ũ��Ʈ
function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.date_from.value  = cur.year + cur.month + cur.date; 
				               //2005.09.23 ���� deadlines
				               //document.form1.date_to.value  = cur.year + cur.month + cur.date;	
				           break;
				case '2':  document.form1.date_to.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

function Navigation(pageno)
{
		document.form1.page_no.value=pageno;
		form1.submit();
}

function view(mnu_no, hsm_seq) {
	window.open('ADLGHSMLogView.jsp?mnu_no=' + mnu_no + '&hsm_seq=' + hsm_seq,'HSMLog','resize=no, scrollbars=yes ,height=500, width=450,location=no,directory=no,toolbar=no');
}