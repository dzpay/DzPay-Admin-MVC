/**  
 *   
 *   작성자    : soon il. kim
 *   작성일자 : 2004년 9월 23일
 */
 
 
function Navigation(pageno)
{
		document.frm.page_no.value=pageno;
		frm.submit();
}
 
 
function Go_Info(mnu_no) {
	
	var winl = (screen.width - 800) / 2; 
    var wint = (screen.height - 800) / 2;
	
	winOpts = 'status=0, scrollbars=yes,resizable=0,top='+wint+',left='+winl+', menubar=no, width=830, height=800' ;
	sfile = "./ADSPASPFrame.jsp?"+mnu_no;
	winObj = window.open(sfile, "InfoWin", winOpts) ;
	
}
 
 
function selectDate(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.ctrt_s_dt.value  = cur.year + cur.month + cur.date + "000000"; 
				               //2005.09.23 수정 deadlines
				               //document.form1.ctrt_e_dt.value  = "99991231235959";	
				           break;
				case '2':  document.form1.ctrt_e_dt.value  = cur.year+cur.month +cur.date + "235959";	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

function selectDate2(type)
	{
		url = "../../common/ADCalendar.jsp"; //common/Calender.jsp
		cur = showModalDialog(url, window, "scroll:auto; status:no;" + "dialogLeft: 0px; dialogTop: 0px; dialogWidth:310px; dialogHeight:310px");

		if(cur != null)
		{
			switch (type)
			{
				case '1':  document.form1.start_dt.value  = cur.year + cur.month + cur.date + "000000"; 
				               document.form1.end_dt.value   = "99991231235959";	break;
				case '2':  document.form1.end_dt.value  = cur.year +cur.month +cur.date  + "235959";;	break;
				
				default : alert("System Error!!");	break;
			}
		}
}

function viewManager(no, code) {
	window.open("/Modules/System/Manager/ADACManagerView.jsp?mnu_no="+no+"&code="+code, "ADACManagerView", 'resize=no, scrollbars=yes ,height=400, width=850,location=no,directory=no,toolbar=no');	
}


function EditCharge( admin_id )
{
	var para ;
	
	mktid = document.form2.mktid.value ;
	mnu_no = document.form2.mnu_no.value ;
	mkt_type = document.form2.mkt_type.value ;
	
	para = "mktid="+mktid+"&mnu_no="+mnu_no+"&mkt_type="+mkt_type+"&admin_id="+admin_id ;
	
	
	if(para.length > 4) 
	{
		url = "./ADSPASPManagerInfoEdit.jsp?" + para ; 
		var comp_search = window.open(url,'window','left=250,top=250,width=750,height=300');
		comp_search.moveTo(100,20);
		comp_search.focus();
	}
	else
	{
		alert("정보가 바르지 않습니다.");
	}
}


//================================================//

// Object의 Value가  있는지 확인
function isEmpty(obj)
{
   var inputStr = obj.value;
   var i;	
   for ( i = 0 ; i < inputStr.length ; i++ )
   {
      if ( inputStr.substring( i, i+1 ) != " " )
         return false;
   }
   return true;
}
// Error Message를 보여주고 Error가 난 Field로 Focusing한다
function ErrMsg( obj, msg ) {
    alert( msg );
    obj.focus();
    obj.select();
    return false;
}

// Error Message를 보여주고 Error가 난 Field로 Focusing한다..select fieldtl select()에러가 남 그래서...
function ErrMsg2( obj, msg ) {
    alert( msg );
    obj.focus();
    //obj.select();
    return false;
}

function checkPasswd(obj1, obj2)
{
	var pw1 = obj1.value;
	var pw2 = obj2.value;
	
	if ( pw1 != pw2 )
		return ( ErrMsg( obj1, "입력된 두 비밀번호가 일치하지 않습니다." ) );

	if ( pw1.length < 4 )
		return ( ErrMsg( obj1, "비밀번호는 4자리 이상입니다." ) );
		
	return true;
}
// Object의 Value가 숫자인지 확인
function isDigit(obj)
{
    inputStr = obj.value;
    var i;
    if(inputStr.length == 0)
    	return false;
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (oneChar < "0" || oneChar > "9")
              return false;
    }
    return true;
}

// Object의 Value가 숫자인지 확인
function isDigitDot(obj)
{
    inputStr = obj.value;
    var i;
    if(inputStr.length == 0)
    	return false;
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
		 
         if (oneChar < "0" || oneChar > "9") {
			 if (oneChar == ".")
			 {
				  continue;
			 } else {
				  return false;
			 }
		 }
             
    }
    return true;
}

function isAlphaNumeric(obj) {
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	var inputStr = obj.value;
	var i;
	
	
	if ( isEmpty(obj) )
		return false;
		
	for ( i = 0 ; i< inputStr.length ; i++ )
	{
		var oneChar = inputStr.charAt(i);
		
		for ( j = 0 ;  j < str.length ; j++){
			if (oneChar == str.charAt(j)) break;
     			if (j+1 == str.length)	return false;
     		}
     	}
     	return true;
}


//================================================//
function CheckSubmit( type )
{
	var tmpFormat ;

	if (document.form1.RegAdminCheck.value == "N")
    {
		alert("정산 담당자가 등록되어있지 않습니다. \n정산담당자를 등록후 수정하여 주십시요.");
		return false
    }

	result = isEmpty(document.form1.mkt_nm);
	if(result) return ErrMsg( document.form1.mkt_nm , "회사명을 입력하십시요");
	
	result = isEmpty(document.form1.post_no);
	if(result )	return ErrMsg( document.form1.post_no , "우편번호를 바르게 입력하십시요" );
	result = isEmpty(document.form1.mkt_addr2);
	if(result )	return ErrMsg( document.form1.mkt_addr2 , "주소를 바르게 입력하십시요" );

	if( type ==1) {
		result = isDigit(document.form1.mkt_tax_no1);
		if(!result )	return ErrMsg( document.form1.mkt_tax_no1 , "사업자등록번호를 바르게 입력하십시요" );
		result = isDigit(document.form1.mkt_tax_no2);
		if(!result )	return ErrMsg( document.form1.mkt_tax_no2 , "사업자등록번호를 바르게 입력하십시요" );
		result = isDigit(document.form1.mkt_tax_no1);
		if(!result )	return ErrMsg( document.form1.mkt_tax_no3 , "사업자등록번호를 바르게 입력하십시요" );

		tmpFormat = document.form1.mkt_tax_no1.value + document.form1.mkt_tax_no2.value + document.form1.mkt_tax_no3.value ;
		if(tmpFormat.length != 10 )	return  ErrMsg( document.form1.mkt_tax_no1 , "사업자등록번호(10자리)를 바르게 입력하십시요" );
		
		result = isEmpty(document.form1.mkt_own_nm);
		if(result )	return ErrMsg( document.form1.mkt_own_nm , "대표자명을 바르게 입력하십시요" );
		result = isEmpty(document.form1.bank);
		if(result )	return ErrMsg2( document.form1.bank , "은행을 바르게 선택하십시요" );
		
	}
	
	result = isEmpty(document.form1.admin_nm) ;
	if (result) return ErrMsg(document.form1.admin_nm, "담당자 이름를 입력하십시요");

	if ( type == 1)	{
		result = isEmpty(document.form1.admin_gp_no) ;
		if (result) return ErrMsg2(document.form1.admin_gp_no, "권한을 설정하여 주세요");
	}
    result = isEmpty(document.form1.admin_id) ;
	if (result) return ErrMsg(document.form1.admin_id, "아이디를 입력하십시요");
	result = isEmpty(document.form1.admin_pwd) ;
	if (result) return ErrMsg(document.form1.admin_pwd, "비밀번호를 입력하십시요");
	result = isEmpty(document.form1.email) ;
	if (result) return ErrMsg(document.form1.email, "메일주소를 입력하십시요");
    

}

function CheckSubmit_Chg( type )
{
	var tmpFormat ;

	result = isEmpty(document.form1.admin_gp_no);
	if(result )	return ErrMsg2( document.form1.admin_gp_no , "권한설정를 바르게 선택하십시요" );

	result = isEmpty(document.form1.admintype);
	if(result )	return ErrMsg2( document.form1.admintype , "업무선택를 바르게 선택하십시요" );

	result = isEmpty(document.form1.admin_id);
	if(result )	return ErrMsg( document.form1.admin_id , "아이디을 바르게 입력하십시요" );

	result = isEmpty(document.form1.admin_pwd);
	if(result )	return ErrMsg( document.form1.admin_pwd , "비밀번호을 바르게 입력하십시요" );

	//result = checkPasswd(document.form1.admin_pwd, document.form1.admin_pwd2) ;
	//if(!result )	return false ;

	result = isEmpty(document.form1.jobgrp);
	if(result )	return ErrMsg( document.form1.jobgrp , "직함을 바르게 입력하십시요" );

	result = isEmpty(document.form1.admin_nm);
	if(result )	return ErrMsg( document.form1.admin_nm , "담당자명을 바르게 입력하십시요" );

	result = isEmpty(document.form1.email);
	if(result )	return ErrMsg( document.form1.email , "이메일을 바르게 입력하십시요" );


	result = isDigit(document.form1.comp_tel1);
	if(!result )	return ErrMsg( document.form1.comp_tel1 , "담당자 연락처를 바르게 입력하십시요" );

	result = isDigit(document.form1.comp_tel2);
	if(!result )	return ErrMsg( document.form1.comp_tel2 , "담당자 연락처를 바르게 입력하십시요" );

	result = isDigit(document.form1.comp_tel3);
	if(!result )	return ErrMsg( document.form1.comp_tel3 , "담당자 연락처를바르게 입력하십시요" );

}


function CheckSubmitFee( type )
{
	var tmpFormat ;

    dt = new Date();
    
	var month = new String(dt.getMonth()+1);
	if ( month.length == 1 )
	{
		month = "0" + month;
	}

	var date = new String(dt.getDate());
	if ( date.length == 1 )
	{
		date = "0" + date;
	}

	var hours = new String(dt.getHours());
	if ( hours.length == 1 )
	{
		hours = "0" + hours;
	}

	var minutes = new String(dt.getMinutes());
	if ( minutes.length == 1 )
	{
		minutes = "0" + minutes;
	}

	var seconds = new String(dt.getSeconds());
	if ( seconds.length == 1 )
	{
		seconds = "0" + seconds;
	}

	var now_dt= "" + dt.getYear() + month + date + hours+  minutes+ seconds;
  
	if( type == 2) {
		result = isEmpty(document.form1.feetype);
		if(result )	return ErrMsg2( document.form1.feetype , "정산항목 바르게 선택하십시요" );

		result = isEmpty(document.form1.fee_rate);
		if(result )	return ErrMsg2( document.form1.fee_rate , "수수료를 바르게 선택하십시요" );

	}
	else if( type == 1) {
		result = isEmpty(document.form1.acnt_charge_fee_rate);
		if(result )	return ErrMsg( document.form1.acnt_charge_fee_rate , "T머니일반충전을 바르게 입력하십시요" );
        result = isDigitDot(document.form1.acnt_charge_fee_rate);
		if(!result )	return ErrMsg2( document.form1.acnt_charge_fee_rate , "T머니일반충전을 바르게 입력하십시요" );
		//2004.12.6 추가 deadlines
		if(document.form1.acnt_charge_fee_rate.value > 100 )	return ErrMsg2( document.form1.acnt_charge_fee_rate , "T머니일반충전을 바르게 입력하십시오." ); 
		
		result = isEmpty(document.form1.milage_charge_fee_rate);
		if(result )	return ErrMsg( document.form1.milage_charge_fee_rate , "마일리지로충전을 바르게 입력하십시요" );
		result = isDigitDot(document.form1.milage_charge_fee_rate);
		if(!result )	return ErrMsg2( document.form1.milage_charge_fee_rate , "마일리지로충전을 바르게 입력하십시요" );
		
		//2004.12.6 추가 deadlines
		if(document.form1.milage_charge_fee_rate.value > 100 )	return ErrMsg2( document.form1.milage_charge_fee_rate , "마일리지로충전을 바르게 입력하십시오." ); 

		result = isEmpty(document.form1.point_trans_fee_rate);
		if(result )	return ErrMsg( document.form1.point_trans_fee_rate , "포인트전환을 바르게 입력하십시요" );
		result = isDigitDot(document.form1.point_trans_fee_rate);
		if(!result )	return ErrMsg2( document.form1.point_trans_fee_rate , "포인트전환을 바르게 입력하십시요" );
		
		//2004.12.6 추가 deadlines
		if(document.form1.point_trans_fee_rate.value > 100 )	return ErrMsg2( document.form1.point_trans_fee_rate , "포인트전환을 바르게 입력하십시오." ); 
	}
	else if( type == 3) {
		result = isEmpty(document.form1.add_fee_rate);
		if(result )	return ErrMsg( document.form1.add_fee_rate , "마일리지 적립 수수료을 바르게 입력하십시요" );
		result = isDigitDot(document.form1.add_fee_rate);
		if(!result )	return ErrMsg2( document.form1.add_fee_rate , "마일리지 적립 수수료을 바르게 입력하십시요" );

		result = isEmpty(document.form1.trans_fee_rate);
		if(result )	return ErrMsg( document.form1.trans_fee_rate , "마일리지 충전 수수료을 바르게 입력하십시요" );
		result = isDigitDot(document.form1.trans_fee_rate);
		if(!result )	return ErrMsg2( document.form1.trans_fee_rate , "마일리지 충전 수수료을 바르게 입력하십시요" );
	}
	
   
	result = isEmpty(document.form1.start_dt);
	if(result )	return ErrMsg( document.form1.start_dt , "시작일을 바르게 입력하십시요" );
    
	if (document.form1.start_dt.value < now_dt)
    {
		
		alert(" 현재 "+dt.getYear()+"년"+ month +"월"+ dt.getDate() +"일"+ dt.getHours()+"시"+  dt.getMinutes()+ "분"+ dt.getSeconds()+"초입니다.\n시작일은 현재시각 이후의 시각이여야 합니다.");
		return false;
    }
	result = isEmpty(document.form1.end_dt);
	
	if(result )	return ErrMsg( document.form1.end_dt , "종료일을 바르게 입력하십시요" );
    
	if (document.form1.start_dt.value > document.form1.end_dt.value)
	{
		alert("종료일이 시작일보다 작을 수 없습니다.");
		return false;
	}
    

}

function Sel_Indust(){
	url = "../Com/ADSPShopSelectindust.jsp?fistindust="+ document.form1.fistindust.value;
	var w_search = window.open(url,'w_search','left=250,top=250,width=450,height=265');	
}


function set_Indust(indust_code, indust_value ) {
	opener.set_Indust1(indust_code, indust_value);
	this.close();
}

function set_Indust1(indust_code, indust_value ) {
		document.form1.secondIndust.value = indust_code;
		document.form1.secondIndust_name.value = indust_value;
	
}




/*
* @ 자동으로 텍스트 폼 탭 넘기기
* @ 2004.11.12 deadlines 추가
*/
<!-- Begin 
var isNN = (navigator.appName.indexOf("Netscape")!=-1); 
function autoTab(input,len, e) { 
var keyCode = (isNN) ? e.which : e.keyCode; 
var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46]; 
if(input.value.length >= len && !containsElement(filter,keyCode)) { 
input.value = input.value.slice(0, len); 
input.form[(getIndex(input)+1) % input.form.length].focus(); 
input.form[(getIndex(input)+1) % input.form.length].select();
} 
function containsElement(arr, ele) { 
var found = false, index = 0; 
while(!found && index < arr.length) 
if(arr[index] == ele) 
found = true; 
else 
index++; 
return found; 
} 
function getIndex(input) { 
var index = -1, i = 0, found = false; 
while (i < input.form.length && index == -1) 
if (input.form[i] == input)index = i; 
else i++; 
return index; 
} 
return true; 
} 
//  End --> 
