function MileageDetail(_ktrsno, _tx_ymd, _tx_hms){
	var url = "./ADLGMileageDetail.jsp?ktrsno="+_ktrsno+"&tx_ymd="+_tx_ymd+"&tx_hms="+_tx_hms+"&mnu_no="+document.form1.mnu_no.value;
	window.open(url, "MileageLog", 'resize=no, scrollbars=yes ,height=600, width=450,location=no,directory=no,toolbar=no');
}


function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
		
}

// 검색조건에 따른 페이지 검색
function Send_Search()
{
  
	var datesplit;

	if (document.form1.date_from.value.length > 0) {
		/* 20050929 deadlines 수정
		datesplit = document.form1.date_from.value.split("-");

		if (date_formate_yyyymmdd_check(document.form1.date_from.value) == '-1')
		{
			alert('yyyy-mm-dd 의형식으로 입력하여주세요.\nex) 2004/01/01');
			document.form1.date_from.focus();
			return;
		}
		
		for ( var i = 0; i < datesplit.length ; i++ )
		{
			if (number_check(datesplit[i]) == '-1')
			{
				alert('수치를 입력하여주세요.');
			    document.form1.date_from.focus();
			    return;
				break;
			}
			
		}

		if (date_number_yyyymmdd_check(datesplit[0],datesplit[1],datesplit[2]) == '-1')
		{
			alert('수치를 입력하여 주세요.');
			document.form1.date_from.focus();
			return;
		}
		*/
		if (document.form1.date_from.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
		if (document.form1.date_to.value.length != 8) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_to.focus();
			return;			
		}
		if (document.form1.date_from.value > document.form1.date_to.value) {
			alert('날짜를 정확하게 입력하여 주세요.');
			document.form1.date_from.focus();
			return;			
		}
	}
	
	document.form1.method="post";
	document.form1.target="_self";
	document.form1.submit();
}

//날짜 선택 달력 스크립트
function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.date_from.value  = cur.year + cur.month + cur.date; 
				               //2005.09.23 수정 deadlines
				               //document.form1.date_to.value  = cur.year + cur.month + cur.date;	
				           break;
				case '2':  document.form1.date_to.value  = cur.year + cur.month + cur.date;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

// 마일리지 오류내용 적립처리
function adjustErrLog(){
	var cnt = 0;

	var obj = document.form2;

	var prt = window.opener.document.form1;

	var radio_val = "";

	for (var i=0; i<obj.logradio.length ; i++ ){
		if(obj.logradio[i].checked) {
			cnt++;
			radio_val = obj.logradio[i].value;
		}
	}

	if(eval(obj.logradio)){
		if(obj.logradio.checked){
			cnt++;
			radio_val = obj.logradio.value;
		}
	}

	if(cnt==0){
		alert("적립처리 대상을 선택하세요.");
		return;
	}

	var mtrsno = radio_val.split("|")[0];
	var ktrsno = radio_val.split("|")[1];
	var tx_ymd = radio_val.split("|")[2];
	var tx_hms = radio_val.split("|")[3];
	var card_no = radio_val.split("|")[4];
	var pop_flag = radio_val.split("|")[5];

	var add_mileage = radio_val.split("|")[6];
	var mktid = radio_val.split("|")[7];
	var point_mktid = radio_val.split("|")[8];
	var tx_time = tx_ymd+tx_hms;


	prt.trade_no.value = mtrsno;
	prt.ktrsno.value = ktrsno;
	prt.tx_ymd.value = tx_ymd;
	prt.tx_hms.value = tx_hms;
	prt.card_no.value = card_no;
	prt.pop_flag.value = pop_flag;


	prt.change_point.value = add_mileage;
	prt.mktid.value = mktid;
	prt.trans_mktid.value = point_mktid;
	prt.add_dt.value = tx_time;

	window.opener.closeFields();

	window.close();

}



function Go_PointHistory_Info(mnu_no,point_id) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=900, height=500' ;
	sfile = "/Modules/Point/Trans/ADPTTransHistoryView.jsp?mnu_no=" + mnu_no + "&point_id=" + point_id;
	winObj = window.open(sfile, "ADPTTransHistoryView", winOpts) ;
	
}