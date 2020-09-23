// Object의 Value가 비어있는지 확인
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
/*
    inputStr = obj.value;
    var i;
    if(inputStr.length == 0)
    	return false;
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (i==0){
          if (oneChar > "0" && oneChar < "9"){                           
          }             
          else
          if (oneChar == '-'){
          
          }
          else{
              return false;
          }
         }
         else{
          if (oneChar < "0" || oneChar > "9"){
              return false;              
          }
         }
    }
    return true;
 */
}

// Object의 Value가 숫자인지 확인
function isDigitMinus(obj)
{

    inputStr = obj.value;
    var i;
    if(inputStr.length == 0)
    	return false;
    	
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (i==0){
          if (oneChar > "0" && oneChar <= "9"){                           
          
          }             
          else
          if (oneChar == "-"){
          
          }
          else{          
              return false;
          }
         }
         else{
          if (oneChar < "0" || oneChar > "9"){
          
              return false;              
          }
         }
    }
    return true;
}

function isDigitValue(value)
{
    inputStr = value;
    var i;
    if(inputStr.length == 0){
    	return false;
    }
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (oneChar < "0" || oneChar > "9"){
              return false;
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


function isLowHigh(obj, low, high) {

	var inputStr = obj.value;
	var i;
	
	if ( isEmpty(obj) )
		return false;
	if(inputStr.length < low )	
		return false;
	if(inputStr.length > high )	
		return false;
		
    return true;
}

function isOneMonth( value1, value2 ) {

    var year1 = value1.substring(0,4);
    var month1 = value1.substring(4,6);
    var day1   = value1.substring(6,8);
    
    var year2 = value2.substring(0,4);
    var month2 = value2.substring(4,6);
    var day2   = value2.substring(6,8);   
    
    var frday = new Date(year1, month1, day1);     
    var today = new Date(year2, month2, day2);    
    
    var days = Math.ceil((today-frday)/24/60/60/1000);    

    if ( days > 31 ){
        return false;
    }
    else{
        return true;
    }

}

function isOneDay( value1, value2 ) {

    var year1 = value1.substring(0,4);
    var month1 = value1.substring(4,6);
    var day1   = value1.substring(6,8);
    
    var year2 = value2.substring(0,4);
    var month2 = value2.substring(4,6);
    var day2   = value2.substring(6,8);   
    
    var frday = new Date(year1, month1, day1);     
    var today = new Date(year2, month2, day2);    
    var days = Math.ceil((today-frday)/24/60/60/1000);    

    if ( days > 1 ){
        return false;
    }
    else{
        return true;
    }

}

function checkSSN(ssn1,ssn2) {

    if ( isEmpty(ssn1) ) 
       return ( ErrMsg( ssn1, "주민번호를 입력해 주세요." ) );
    
    else if ( isEmpty(ssn2) ) 
       return ( ErrMsg( ssn2, "주민번호를 입력해 주세요." ) );
    
    else if ( !isDigit( ssn1 ) ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
    
    else if ( ssn1.value.length != 6 ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
       
    else if ( !isDigit( ssn2 ) ) 
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );
    
    else if ( ssn2.value.length != 7 ) 
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );
       
    else if ( ssn2.value.charAt(0) != '1' && ssn2.value.charAt(0) != '2' && ssn2.value.charAt(0) != '3' && ssn2.value.charAt(0) != '4' )
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );
       
    //else if ( !isDateSSN( ssn1.value, ssn2.value.charAt(0) ) )
    //   return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
       
    else if ( !check_SSNO(ssn1, ssn2) ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
                                                               
    else
       return true;
}

function check_SSNO(ssn1, ssn2)
{  
  var str_f_num = ssn1.value;
  var str_l_num = ssn2.value;

		var i3=0
  		for (var i=0;i<str_f_num.length;i++)
  		{
      			var ch1 = str_f_num.substring(i,i+1);
      			if (ch1<'0' || ch1>'9') { i3=i3+1 }
  		}
  		if ((str_f_num == '') || ( i3 != 0 ))
  		{
    			return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
  		}
  
		  var i4=0
		  for (var i=0;i<str_l_num.length;i++)
		  {
		      var ch1 = str_l_num.substring(i,i+1);
		      if (ch1<'0' || ch1>'9') { i4=i4+1 }
		  }
		  if ((str_l_num == '') || ( i4 != 0 ))
		  {
			    return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }

		  if(str_f_num.substring(0,1) < 4)
		  {
			   return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }

		  if(str_l_num.substring(0,1) > 2)
		  {
			   return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }

		  if((str_f_num.length > 7) || (str_l_num.length > 8))
		  {
			   return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }

		  if ((str_f_num == '72') || ( str_l_num == '18'))
		  {

		    return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }
   
		  var f1=str_f_num.substring(0,1)
		  var f2=str_f_num.substring(1,2)
		  var f3=str_f_num.substring(2,3)
		  var f4=str_f_num.substring(3,4)
		  var f5=str_f_num.substring(4,5)
		  var f6=str_f_num.substring(5,6)
		  var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7
		  var l1=str_l_num.substring(0,1)
		  var l2=str_l_num.substring(1,2)
		  var l3=str_l_num.substring(2,3)
		  var l4=str_l_num.substring(3,4)
		  var l5=str_l_num.substring(4,5)
		  var l6=str_l_num.substring(5,6)
		  var l7=str_l_num.substring(6,7)
		  hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5
		  hap=hap%11
		  hap=11-hap
		  hap=hap%10
		  if (hap != l7) 
		  {
		    return (ErrMsg( ssn1,"주민등록 번호를 바르게 입력해주십시요." ));
		  }

		  return true; 

}

function com_no_ck( ls_epno )
{

	var i, sum , li_y, epno_chk ;
	var li_chkvalue = new Array(1,3,7,1,3,7,1,3,5);
	
	sum = 0;

	for(i = 0 ; i < 9; i++)
	{
		sum	=	sum + ( ls_epno.substring( i, i+1) * li_chkvalue[i] );
	}
	

	sum = sum + ( (ls_epno.substring( 8, 9) * 5)/10 );
	
	sum = Math.floor(sum);
	li_y = sum % 10;

	if( li_y == 0 )
		epno_chk	=	0;
	else
		epno_chk 	=	10 - li_y;

	if ( epno_chk == ls_epno.substring( 9, 10) )
		return true;
	else
		return false;

}

// Object의 Value가 숫자인지 확인
function isDigitZip(obj)
{
    inputStr = obj.value;
    var i;
    if(inputStr.length == 0)
    	return false;
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (oneChar < "0" || oneChar > "9" ){
         	if(oneChar != "-" )
              	return false;
         }
    }
    return true;
}

// Object의 Value가 실수인지 확인
function isFloat(obj)
{
    inputStr = obj.value;
    var i;
    var j = 0;
    var k = 0;
    if(inputStr.length == 0)
    	return false;
    	
    for ( i = 0; i < inputStr.length; i++){
         var oneChar = inputStr.charAt(i)
         if (oneChar = "."){
             if (j == 0){
             	j = 1;
             }
             else {
             	return false;
             }
         }
         else
         if (oneChar < "0" || oneChar > "9"){
              return false;         
         }
    }
    return true;
}

function isDateSSN( value,bit )
{
    var year = value.substring(0,2);
    var month = value.substring(2,4);
    var day   = value.substring(4,6);
    
    if ( checkMonth( month ) && checkDaySSN( year, month, day, bit ) )
        return true;
    else
       return false;
       
}
function checkMonth( value )
{
    if ( parseInt( value ) <= 0  || parseInt( value ) > 12  )
        return false;
    else
        return true;
}

function checkDaySSN( yy, mm, value, bit )
{
    var yyyy = null;
    var monthDD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var im = parseInt(mm) - 1;
    
    if ( bit == "1" || bit == "2" ) 
        yyyy = parseInt( "19" + yy );
    else 
        yyyy = parseInt( "20" + yy );
        
    if( ( (yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0) )
        monthDD[1] = 29;
    
    if( parseInt( value ) <= 0 || parseInt( value ) > monthDD[im] )
        return false;
    else
        return true;
}

function isDate( value ) {

    if (!isDigitValue( value ))
        return false;
   
    if (value.length != 8)
        return false;
    
    var year = value.substring(0,4);
    var month = value.substring(4,6);
    var day   = value.substring(6,8);
    
    if (month >= 10){   
    }
    else{
         month = value.substring(5,6);
    }       
    
    if (day >= 10){
    }
    else{
         day = value.substring(7,8);
    }    
    
    if ( parseInt( year ) >= 1900  && checkMonth( month ) && checkDay( year, month, day ) )
        return true;
    else
       return false;

}

function isMonth( value ) {

    if (!isDigitValue( value ))
        return false;
   
    if (value.length > 2)
        return false;                    
    
    var month = value;
    
    if (month >= 10){   
    }
    else{
        if (value.length == 2){
           month = value.substring(1,2);
        }
        else{
           month = value.substring(0,1);
        }
    }      
    
    if (checkMonth( month ))
        return true;
    else
       return false;
}

function checkDay( yyyy, mm, dd )
{
	
	  if (!isDigitValue(yyyy))  
	      return false;	
	  if (!isDigitValue(mm))  
	      return false;	
	  if (!isDigitValue(dd))  
	      return false;

    var day = dd;
    
    if (day >= 10){   
    }
    else{
        if (dd.length == 2){
           day = dd.substring(1,2);
        }
        else{
           day = dd.substring(0,1);
        }
    }   	      
    
    dd = day;	  
	  
    var monthDD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var im = parseInt(mm) - 1;
    
    if( ( (yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0) )
        monthDD[1] = 29;
    
    if( parseInt( dd ) <= 0 || parseInt( dd ) > monthDD[im] )
        return false;
    else
        return true;
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
/*
function Left(e) {

    if (navigator.appName == 'Netscape' && (e.which == 1 || e.which == 2))
        return false;
    else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 1 || event.button == 2)) {
        alert("Telec을 이용해 주셔서 감사 합니다.");
        return false;
    }
    return true;
}

document.onmousedown=Left;

if (document.layers) {
    window.captureEvents(Event.MOUSEDOWN);
    window.onmousedown=Left;
}
*/


//---------------------------------------------------------------------
//   새로 추가한 부분
// ====================================================================
//   System    : EBIZPRO
//   Subsystem : COMMON JAVASCRIPT
//   Version   : 1.0
// ====================================================================
//   File Name : public.js
//   Desc.     : 기존에 사용한 public.js에 덧붙임
// ====================================================================
//   Copyrights ⓒ 2003 - 2003   Telec Co., Ltd.
//   All Rights Reserved
//   Date      : 2003.06.20(FRI)
//   Author    : Ra SeungBok, return_bok@telec.co.kr
// ====================================================================
//   Modifier
//   [01] 2003.06.20 : 라승복 (return_bok@telec.co.kr)
// ====================================================================


//******************************
// Pop-UP 창 생성
//******************************
function makePop(url, x, y, pop_name) {
	var winopts = "width=" + x + " height=" + y + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes";
	window.open(url, pop_name, winopts);
}

function makePop(url, x, y, pop_name, scroll) {
	var winopts = "width=" + x + " height=" + y + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=" + scroll + ",resizable=yes";
	var popup = window.open(url, pop_name, winopts);
	popup.focus();
}

function makePop_none(url, x, y, pop_name) {
	var winopts = "width=" + x + " height=" + y + "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no";
	window.open(url, pop_name, winopts);
}

function makePop_T(url, x, y, pop_name, scroll) {
	var winopts = "width=" + x + " height=" + y + "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=" + scroll + ",resizable=yes";
	window.open(url, pop_name, winopts);
}

function makeNew_win(url ) {	
	if(url.substring(0 ,7) != "http://"){
	url = "http://"+url;
}
	window.open(url);
}

//*********************
//숫자만 받기위한 체크
//*********************
function alphanum(name)
{
	for (var i = 0; i < name.length; i++) {
		if ((name.charAt(i) < '0') || (name.charAt(i) > '9')) return false;
	}
	return true;
}

//**********************************************
//정확한 날짜인지 체크
//해당달의 마지막 날짜가 30일인지 31일인지 체크
//**********************************************
function isDate_bok(yyyy, mm, dd)
{
	yyyy = parseInt(yyyy, 10);
	mm = parseInt(mm, 10);
	dd = parseInt(dd, 10);
	d = new Date(yyyy, mm - 1, dd);
	if(d == "NaN") return false;
	if(yyyy == d.getFullYear() && mm == d.getMonth() + 1 && dd == d.getDate()) return true;
	return false;
}

//************************************
// 날짜가 YYYYMMDD 형식에 맞는지 체크
//************************************
function isYYYYMMDD(v_date)
{
	if(v_date.length != 8) return false;
	if(!alphanum(v_date)) return false;
	if(!(isDate(v_date.substr(0, 4), v_date.substr(4, 2), v_date.substr(6, 2)))) return false;
	if( v_date.substr(0, 4) < 1995 || v_date.substr(0, 4) > 2999 ) return false;
	return true;
}

//************************************
// 날짜가 YYYYMM 형식에 맞는지 체크
//************************************
function isYYYYMM(v_date)
{
	if(v_date.length != 6) return false;
	if(!alphanum(v_date)) return false;
	if( parseInt(v_date.substr(4, 2),10)<0 || parseInt(v_date.substr(4, 2),10)>12 ) return false;
	if( v_date.substr(0, 4) < 1995 || v_date.substr(0, 4) > 2999 ) return false;
	return true;
}

//**********************
// 정수 데이터인지 검사
//**********************
function isFixedNumber(strNo)
{
	if(strNo.length == 0) return false;
	if(strNo.lastIndexOf('-') > 0) return false;
	if(strNo.lastIndexOf('-') == 0 && strNo.length == 1) return false;
	for(i = strNo.lastIndexOf('-') + 1; i < strNo.length; i++)
		if(strNo.charAt(i) < '0' || strNo.charAt(i) > '9') return false;
	return true;
}

//**********************
// 실수 데이터인지 검사
//**********************
function isRealNumber(strNo)
{
	if(strNo.length == 0) return false;
	if(strNo.lastIndexOf('-') > 0) return false;
	if(strNo.lastIndexOf('-') == 0) {
		if(strNo.length == 1) return false;
		if(strNo.lastIndexOf('.') == 1 && strNo.length == 2) return false;
	} else {
		if(strNo.lastIndexOf('.') == 0 && strNo.length == 1) return false;
	}
	if(strNo.indexOf('.') != strNo.lastIndexOf('.')) return false;

	for(i = strNo.lastIndexOf('-') + 1; i < strNo.length; i++)
		if((strNo.charAt(i) < "0" || strNo.charAt(i) > "9") && strNo.charAt(i) != "." ) return false;
	return true;
}

//**********************
// FormatNumber 검사
//**********************
function isFormatNumber(strNo)
{
	if(strNo.length == 0) return false;
	if(strNo.lastIndexOf("-") > 0) return false;
	if(strNo.lastIndexOf('-') == 0) {
		if(strNo.length == 1) return false;
		if(strNo.lastIndexOf('.') == 1 && strNo.length == 2) return false;
	} else {
		if(strNo.lastIndexOf('.') == 0 && strNo.length == 1) return false;
	}
	if(strNo.indexOf(".") != strNo.lastIndexOf(".")) return false;

	var commaIndex = 0;
	for(i = strNo.lastIndexOf('-') + 1; i < strNo.length; i++) {
		if(strNo.charAt(i) < "0" || strNo.charAt(i) > "9") {
			if(strNo.charAt(i) == ",") {
				if(i == 0 || commaIndex == -1 || (i > 4 && commaIndex == 0)) return false;
				else if(commaIndex == 0 || commaIndex + 4 == i) commaIndex = i;
				else return false;
			} else if(strNo.charAt(i) == ".") {
				if(commaIndex == 0 || commaIndex + 4 == i) commaIndex = -1;
				else return false;
			} else return false;
		} else if(commaIndex > 0 && commaIndex + 4 == i) return false;
	}
	if(commaIndex > 0 && commaIndex + 4 != strNo.length) return false;
	return true;
}

//**********************
// 문자열을 정수로 변환
//**********************
function toInteger(strNo)
{
	if(!alphanum(strNo)) return;
	var rValue = 0;
	for(i = strNo.length - 1, weight = 1; i >= 0; i--, weight *= 10) {
		switch (strNo.charAt(i))
		{
		case '9': rValue += (weight * 9); break;
		case '8': rValue += (weight * 8); break;
		case '7': rValue += (weight * 7); break;
		case '6': rValue += (weight * 6); break;
		case '5': rValue += (weight * 5); break;
		case '4': rValue += (weight * 4); break;
		case '3': rValue += (weight * 3); break;
		case '2': rValue += (weight * 2); break;
		case '1': rValue += weight; break;
		default:
		}
	}
	return rValue;
}

//**********************
// 현재날짜보다 큰지 체크
//**********************
function nowDate(v_date) 
{
	var intYear;
	var intMonth;
	var intDate

	today = new Date();

	intYear = today.getYear();
	intMonth = today.getMonth() + 1;
	intDate = today.getDate();

	strDate = "" + intYear;
	
	if(intMonth < 10) strDate += "0" + intMonth;
	else strDate += intMonth;
	if(intDate < 10) strDate += "0" + intDate;
	else strDate += intDate;
	
	if(v_date <= strDate) return true;
	else return false;
}

//**********************
// 현재날짜보다 같거나 작은지 
//**********************
function nowDateLess(v_date) 
{
	var intYear;
	var intMonth;
	var intDate

	today = new Date();

	intYear = today.getYear();
	intMonth = today.getMonth() + 1;
	intDate = today.getDate();

	strDate = "" + intYear;
	
	if(intMonth < 10) strDate += "0" + intMonth;
	else strDate += intMonth;
	if(intDate < 10) strDate += "0" + intDate;
	else strDate += intDate;
	
	if(v_date >= strDate) return true;
	else return false;
}


//*************************************
// 현재날짜기준으로 부터 한달범위 인지 체크
//*************************************
function pastMonthCheck(v_date) 
{
	var intYear;
	var intMonth;
	var intDate

	today = new Date();
	intYear = today.getYear();
	intMonth = today.getMonth();
	intDate = today.getDate();

	pastMonth = new Date(intYear, (parseInt(intMonth)-1), intDate);
	
	intYear = pastMonth.getYear();
	intMonth = pastMonth.getMonth() + 1;
	intDate = pastMonth.getDate();

	strDate = "" + intYear;

	if(intMonth < 10) strDate += "0" + intMonth;
	else strDate += intMonth;
	if(intDate < 10) strDate += "0" + intDate;
	else strDate += intDate;
	
	if(v_date > strDate) return true;
	else return false;
}


//************************************
// 날짜 조건 데이타 항목에 날짜 셋팅하기
//  (from : 어제날짜, to : 오늘날짜)
//************************************
function todaySetting() {
	var intYear;
	var intMonth;
	var intDate

	today = new Date();
	intYear = today.getYear();
	intMonth = today.getMonth() + 1;
	intDate = today.getDate();

	strDate = "" + intYear;

	if(intMonth < 10) strDate += "0" + intMonth;
	else strDate += intMonth;
	
	if(intDate < 10) strDate += "0" + intDate;
	else strDate += intDate;

	return strDate;
}

function yesterdaySetting() {
	var intYear;
	var intMonth;
	var intDate

	today = new Date();
	intYear = today.getYear();
	intMonth = today.getMonth() + 1;
	intDate = today.getDate()-1;

	strDate = "" + intYear;

	if(intMonth < 10) strDate += "0" + intMonth;
	else strDate += intMonth;
	
	if(intDate < 10) strDate += "0" + intDate;
	else strDate += intDate;

	return strDate;
}


//-----------------------------------------------------------------------------
//2003.08.29 새로운 주민등록번호 체그 SCRIPT

function neo_check_ssn(ssn1,ssn2)
{
    if ( isEmpty(ssn1) ) 
       return ( ErrMsg( ssn1, "주민번호를 입력해 주세요." ) );
    
    else if ( isEmpty(ssn2) ) 
       return ( ErrMsg( ssn2, "주민번호를 입력해 주세요." ) );
    
    else if ( !isDigit( ssn1 ) ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
    
    else if ( ssn1.value.length != 6 ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
       
    else if ( !isDigit( ssn2 ) ) 
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );
    
    else if ( ssn2.value.length != 7 ) 
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );
       
    else if ( ssn2.value.charAt(0) != '1' && ssn2.value.charAt(0) != '2' && ssn2.value.charAt(0) != '3' && ssn2.value.charAt(0) != '4' )
       return ( ErrMsg( ssn2, "올바른 주민번호를 입력해 주세요." ) );

	else if ( !lic_num_check(ssn1, ssn2) ) 
       return ( ErrMsg( ssn1, "올바른 주민번호를 입력해 주세요." ) );
                                                               
    else
       return true;
}

function lic_num_check(ssn1, ssn2)
{
    //주민번호 체크
    m = Array(6);
    n = Array(7);
    var lic1 , lic2, lictot, licave;

	var str_f_num = ssn1.value;
	var str_l_num = ssn2.value;

    if(str_f_num.length != 6 || str_l_num.length != 7)
    {
        return false ;
    }

    lic1 = str_f_num;
    lic2 = str_l_num;
    //각각 i,j번째 문자열을 추출하여 정수형으로 형변환 하여 배열에 넣는다

    for(var i=0; i < 6; i++)
    {
        m[i] = parseInt(lic1.charAt(i)) ;
    }
    for(var j=0; j < 7;j++)
    {
        n[j] = parseInt(lic2.charAt(j)) ;
    }

    lictot = (m[0]*2)+(m[1]*3)+(m[2]*4)+(m[3]*5)+(m[4]*6)+(m[5]*7) +
            (n[0]*8)+(n[1]*9)+(n[2]*2)+(n[3]*3)+(n[4]*4)+(n[5]*5);
    licave = 11 - (lictot % 11) ;

    if(licave ==  11)
    { licave = 1; }
    else if(licave == 10)
    { licave = 0; }

    if(n[6] != licave)
    {
        return false ;
    }
    else
    {
                return true;
        }
}



function Escrow_View (escrow_id, pay_type, site_cd, trade_no, mnu_no) {
		var w = 850;
		var h = 650;
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2;
		winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=yes,status=no,menubar=no,resizable=no,location=no,directory=no,toolbar=no';

		window.open("/Modules/Trade/Escrow/ADES_Escrow_View.jsp?escrow_id="+escrow_id+"&escrow_paytype="+pay_type+"&site_cd="+site_cd+"&escrow_trade_no="+trade_no+"&mnu_no="+mnu_no, "Escrow_View", winprops);
		
}


function goCorp_View_Sale(cd) {
	
       var parm = "?check_flag="+cd+"&corptype=CK20";
      
	  if(cd == "CORP"){
		   parm = parm + "&search_kind=2" ;
	  }else{
		   parm = parm + "&search_kind=4" ;
	  }

        url = "/Modules/common/ADShopInfo_Sale.jsp"+parm;

       	var winopts   = "width=400,height=350,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no";
	   	var popWindow = window.open(url,'ADShopInfo_Sale', winopts);	                    		
} 


//업체코드 사이트코드 찾아서 집어넣기 창 호출 - 준호 -
function goCorp_View_trade(cd, formname) {
	
       var parm = "?check_flag="+cd+"&corptype=CK20";
      
	  if(cd == "CORP"){
		   parm = parm + "&search_kind=2&formname="+formname ;
	  }else{
		   parm = parm + "&search_kind=4&formname="+formname ;
	  }

        url = "/Modules/common/ADShopInfo_Trade.jsp"+parm;

       	var winopts   = "width=400,height=350,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no";
	   	var popWindow = window.open(url,'ADShopInfo_Sale', winopts);	                    		
} 


  

//날짜 선택 달력 스크립트 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	function selectDate(type,form)
		{			  
			  
			  var cal = Calendar.setup({
          onSelect: function(cal) { cal.hide() },
          showTime: true,
          fdow : parseInt(0, 10),
          showTime : false,    
          animation : false        
      });					
				switch (type)
				{
					case '1':   cal.manageFields("fr_cal", form, "%Y%m%d");
								   break;
					case '2':   cal.manageFields("to_cal", form, "%Y%m%d");		
									 break;
					case '3':   cal.manageFields(type, form, "%Y%m%d");
								   break;
					case '4':   cal.manageFields(type, form, "%Y%m%d");		
					         break;
				}
			
	}
	

/*
 * 여러개의 달력을 사용할 경우 사용하자.
 * compId : 달력컴포넌트ID
 * form	  : 해당 form
 */
function selectDates(compId,form){
	var cal = Calendar.setup({
	    onSelect: function(cal) { cal.hide() },
	    showTime: true,
	    fdow : parseInt(0, 10),
	    showTime : false,    
	    animation : false
    });
    
    cal.manageFields(compId, form, "%Y%m%d");
}
	
	
	