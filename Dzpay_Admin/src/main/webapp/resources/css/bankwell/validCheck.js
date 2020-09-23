// validation data type
var valString 		= "string";
var valInt 				= "int";
var valFloat 			= "float";
var valDate 			= "date";
var valAlphaNum	= "alphaNum";
var valPhone		= "phone";
var valEmail 			= "email";
var valPrice 			= "price";

// valid data check
function validData(checkStr, dataType, checkNull, checkLen, lessThanLen, moreThanLen, name, errMsg)
{
	// null data check
	if ( checkNull.length != 0 && (isNull(checkStr) || isAllSpace(checkStr)) )
	{
		alert(name + "을(를) 입력하세요.");
		return false;
	} 

	// data type별 validation
	if (dataType == valInt)
	{
		if ( !(isNumeric(checkStr)) ) 
		{
			alert(name + "을(를) 숫자로 입력하세요.");
			return false;
		} 
	}
	else if (dataType == valFloat)
	{
		if ( !(isFloat(checkStr)) ) 
		{
			alert(errMsg);
			return false;
		} 
	}
	else if (dataType == valDate)
	{
		if ( !(isNumeric(checkStr)) ) 
		{
			alert(name + "을(를) 숫자로 입력하세요.");
			return false;
		} 
		else if ( !(isDate(checkStr)) ) 
		{
			alert(errMsg);
			return false;
		}
	}
	else if (dataType == valAlphaNum)
	{
		if ( !(isAlphaNumeric(checkStr)) ) 
		{
			alert(name + "을(를) 영문/숫자 조합으로 입력하세요.");
			return false;
		} 
	}
	else if (dataType == valPhone)
	{
		if ( !(isPhone(checkStr)) ) 
		{
			alert(name + "을(를) 숫자와 '-' 조합으로 입력하세요.");
			return false;
		} 
	}	
	else if (dataType == valEmail)
	{
		if ( !(isEmail(checkStr)) ) 
		{
			alert(errMsg);
			return false;
		} 
	}
	else if (dataType == valPrice)
	{
		if ( !(isPrice(checkStr)) ) 
		{
			alert(errMsg);
			return false;
		} 
	}
	
	// data length check
	if (checkLen.length != 0 && checkStr.length != eval(checkLen))
	{
		alert(name + "을(를) " + checkLen + " 자리로 입력하세요.");
		return false;
	} 
	
	// less than length check
	if (lessThanLen.length != 0 && checkStr.length > eval(lessThanLen))
	{
		alert(name + "을(를) " + lessThanLen + " 자리 이내로 입력하세요.");
		return false;
	} 
	
	// more than length check
	if (moreThanLen.length != 0 && checkStr.length < eval(moreThanLen))
	{
		alert(name + "을(를) " + moreThanLen + " 자리 이상으로 입력하세요.");
		return false;
	} 
		
	return true;
}	

// Null check
function isNull(checkStr)
{
	if (checkStr != null && checkStr.length != 0) 
	{
		return false;
	}

	return true;
}

// Alphabet & number check
function isAlphaNumeric(checkStr)
{
//	var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$^*()_\+-=||{}[]:;<>?/\\";
	var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	return true;
}

// Numeric number check
function isNumeric(checkStr)
{
	var checkOK = "0123456789";
	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	return true;
}

// Floating number check
function isFloat(checkStr)
{
	var checkOK = "0123456789.";
	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	if (i == 1 && checkStr.charAt(0) == '.') 
	{
		return false;
	}
	
	return true;
}

// Alphabet check
function isAlpha(checkStr)
{
	var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	return true;
}

// Phone number check
function isPhone(checkStr)
{
	var checkOK = "0123456789-";
	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	return true;
}

// Email number check
function isEmail(checkStr) 
{
	for (i = 0; i < checkStr.length; i++) 
	{
                // Daum Online우표제 대응 script added By Acme3411
/*
	var where = checkStr.substr(checkStr.indexOf("@")+1,checkStr.length-1)
    if(where=="hanmail.net" || where=="daum.net") {
		alert("다음 온라인 우표제 실시로 hanmail.net이나 daum.net은 등록하실 수 없습니다!");
		return false;
	}
*/
		ch = checkStr.charAt(i);
		if (ch == '@') 
		{
			return true;
		}
	}
	
	return false;
}

// positive number check
function isPositive( chekStr )
{
	if ( parseFloat(chekStr) > 0 )
	{
		return true;
	}
	else
	{
		return false;
	}
}

// All Space String Check
function isAllSpace(checkStr) 
{
	for (i = 0; i < checkStr.length; i++) 
	{
		ch = checkStr.charAt(i);
		if (ch != ' ') 
		{
			return false;
		}
	}
	
	return true;
}

// Price check
function isPrice(checkStr)
{
	var checkOK = "0123456789.,";
	var len = checkStr.length;
	var strs = checkStr.split(".");
	var n = 0;
	
  	if (len == 1 && (checkStr.charAt(0) == '.' || checkStr.charAt(0) == ',')) 
  	{
		return false;
	}
	
 	if (checkStr.charAt(0) == '.' || checkStr.charAt(0) == ',' || checkStr.charAt(len - 1) == ',') 
 	{
		return false;
	}
	
 	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	if (strs.length > 2) 
	{
		return false;
	}
	
	if (strs.length > 1 && strs[1].length > 2) 
	{
		return false;
	}	
	
	for (k = 0; k < strs[0].length; k++)
	{
		if (strs[0].charAt(k) != ',') 
		{
			n++;
		}
	}
	
	return (n <= 7)? (true) : (false);
}

// Quantity check
function isQuantity(checkStr)
{
	var checkOK = "0123456789,";
	var len = checkStr.length;
	var n = 0;
	
	if (checkStr.charAt(0) == ',' || checkStr.charAt(len - 1) == ',') 
	{
		return false;
	}
 	
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);
		if (ch != ',') 
		{
			n++;
		}
		
		for (j = 0;  j < checkOK.length;  j++)
		{
			if (ch == checkOK.charAt(j)) 
			{
				break;
			}
		}
		if (j == checkOK.length)
		{
			return false;
			break;
		}
	}
	
	return (n <= 9)? (true) : (false);
}

// Date setting for fromDate vs toDate comparison check   
function isDate(value) 
{ 
	var     year  = value.substring(0,4); 
	var     month = value.substring(4,6); 
	var     day   = value.substring(6,8); 
	return ( isYYYY(year) && isMM(month) && isDD(year,month,day) ); 
} 	

// fromDate vs toDate comparison check
function Compare(Fd,Td)
{
	if ((isDate(Fd) == true) && (isDate(Td) == true)) 
	{    		
		if (Fd > Td) 
		{
			return false;
		} 
		else 
		{
			return true;
		}
	} 
	else 
	{
		return true;
	}
}	

// Year check	
function isYYYY(value) 
{ 
	return ( (value.length == 4) && (isNumeric(value)) && (eval(value) > 1900) ); 
} 

// Month check	
function isMM(value) 
{ 
	return ( (value.length > 0) && (isNumeric(value)) && (0 < eval(value)) && (eval(value) < 13) ); 
}
 
// Day check	
function isDD(yyyy, mm, value)
{ 
	var result = false; 
	var monthDD = new month_array(31,28,31,30,31,30,31,31,30,31,30,31); 
	var index = eval(mm) - 1; 
	if (value.length != 2)   
	{
		return false; 
	}
	if (!isNumeric(value))    
	{
		return false; 
	}
	if (((yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0))
	{ 
		monthDD[1] = 29; 	
	} 
		
	var dd = eval(value); 
		
	if ((0 < dd) && (dd <= monthDD[index]))     
	{
		result = true; 
	}
		
	return result; 
}

// Month array for day check
function month_array(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) 
{
	this[0] = m0;
	this[1] = m1;
	this[2] = m2;
	this[3] = m3;
	this[4] = m4;
	this[5] = m5;
	this[6] = m6;
	this[7] = m7;
	this[8] = m8;
	this[9] = m9;
	this[10] = m10;
	this[11] = m11;
}


function resnoCheck(it) 
{ //주민등록번호 체크루틴
	IDtot = 0;
	IDAdd="234567892345";

	for(i=0;i<12;i++) {
		IDtot=IDtot+parseInt(it.substring(i,i+1))*parseInt(IDAdd.substring(i,i+1));
	}
	
	IDtot=11-(IDtot%11);

	if(IDtot==10) {
		IDtot=0;
	}
	else if(IDtot==11) {
		IDtot=1;
	}

	if(parseInt(it.substring(12,13))!=IDtot) return true;
} 
function emailCheck(ss)
{ //이메일 체크루틴
	var strEmail = ss;

	if(strEmail.indexOf("@") < 2) {
		return true;
	}
	else if(strEmail.substring(strEmail.indexOf("@")+1, strEmail.length).length == 0) {
		return true;
	}
	else if(strEmail.substring(strEmail.indexOf("@")+1, strEmail.length).indexOf(".") < 2) {
		return true;
	}
}

function blank_check(Btemp)
{ // 공백체크루틴
	var count=0;

	while(true){
		var b=Btemp.substring(count,count+1);
		if (b != " ") break;
		++count;
	}
	return count;
}

function length_check(Ltemp)
{ // 길이체크루틴
	var temp_length = Ltemp.length;
	return temp_length;      
}

function onlyNumber() 
{ // 숫자체크루틴
	if((event.keyCode<48)||(event.keyCode>57))
		event.returnValue=false;
}
function chkchar(nn)
{ // 문자체크루틴-한글만허용(한글이면 true)
	var t,len;
		len = 0;
		for(i=0;i<nn.length;i++){
			if((escape(nn.charAt(i)).length>4)||
				(!((nn.charAt(i)>='a'&&nn.charAt(i)<='z')||
				(nn.charAt(i)>='A'&&nn.charAt(i)<='Z')||
				(nn.charAt(i)>='0'&&nn.charAt(i)<='9')))){
				return true;
				}
		}	
	return false;
}
function chknum(nn)
{ // 숫자체크루틴-숫자만허용(숫자가 아니면 true)
	var t,len;
		len = 0;
		for(i=0;i<nn.length;i++){
			if(nn.charAt(i)>='0'&&nn.charAt(i)<='9'){
				return false;
			}
		}	
	return true;
}
function noCheck(ss)
{ // 사업자 등록번호 체크루틴
	var menno,no,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c9_1,c9_2,c ;

	menno = ss;

	c1 = menno.substring(0,1);
	c2 = menno.substring(1,2);
	c3 = menno.substring(2,3);
	c4 = menno.substring(3,4);
	c5 = menno.substring(4,5);
	c6 = menno.substring(5,6);
	c7 = menno.substring(6,7);
	c8 = menno.substring(7,8);
	c9 = menno.substring(8,9);
	c10 = menno.substring(9,10);


	c1 = c1 * 1;
	c1 = c1 % 10 ;

	c2 = c2 * 3;
	c2 = c2 % 10 ;

	c3 = c3 * 7;
	c3 = c3 % 10 ;

	c4 = c4 * 1;
	c4 = c4 % 10 ;

	c5 = c5 * 3;
	c5 = c5 % 10 ;

	c6 = c6 * 7;
	c6 = c6 % 10 ;

	c7 = c7 * 1;
	c7 = c7 % 10 ;

	c8 = c8 * 3;
	c8 = c8 % 10 ;

	c9 = c9 * 5 ;
	c9_2 = c9 % 10 ;
	c9_1 = c9-c9_2 ;
	c9_1 = c9_1 / 10 ;

	no = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9_1 + c9_2 ;

	no=(no%10);

	no=(10-no) % 10 ;

	if(no != c10) { return true; }
	else { return false; }
}

function calendar_chk(year,month,day)
{//입력한 년월일의 무결성 체크
	var chk = false;

	if(month == 1) {
		if(day > 31) chk = true;
	}
	else if(month == 2) {
		if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
			if(day > 29) chk = true;
		}
		else {
			if(day > 28) chk = true;
		}
	}
	else if(month == 3) {
		if(day > 31) chk = true;
	}
	else if(month == 4) {
		if(day > 30) chk = true;
	}
	else if(month == 5) {
		if(day > 31) chk = true;
	}
	else if(month == 6) {
		if(day > 30) chk = true;
	}
	else if(month == 7) {
		if(day > 31) chk = true;
	}
	else if(month == 8) {
		if(day > 31) chk = true;
	}
	else if(month == 9) {
		if(day > 30) chk = true;
	}
	else if(month == 10) {
		if(day > 31) chk = true;
	}
	else if(month == 11) {
		if(day > 30) chk = true;
	}
	else if(month == 12) {
		if(day > 31) chk = true;
	}

	return chk;
}
		

		
		
		
/*
function go_check()
{
	var ff = document.myform;
	if(text_check(ff.name01, 10, 1, 0, "모든 값 다 허용")) return;
	if(text_check(ff.name02, 10, 2, 0, "영어만 허용")) return;
	if(text_check(ff.name03, 10, 3, 0, "숫자만 허용")) return;
	if(text_check(ff.name04, 10, 4, 0, "한글만 허용")) return;
	if(text_check(ff.name05, 10, 5, 0, "영어와 숫자만 허용")) return;
	if(text_check(ff.name06, 40, 6, 0, "이메일 형식만 허용")) return;
	if(text_check(ff.name07, 13, 7, 0, "전화번호(xxx-xxxx-xxxx) 형식만 허용")) return;
	if(text_check(ff.name08, 13, 8, 0, "주민등록번호(xxxxxxxxxxxxx) 형식만 허용")) return;
	if(text_check(ff.name09, 10, 9, 0, "사업자등록번호(xxxxxxxxxx) 형식만 허용")) return;

	alert("ok");
}
*/
var    _intValue   = '0123456789';
var    _upperValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var    _lowerValue = 'abcdefghijklmnopqrstuvwxyz';
var    dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var    _etcValue   = '~`!@#$%%^&*()-_=+\|[{]};:\'\",<.>/?';
//-------------------------------------------------------------------
// 숫자로 구성된 문자열인가를 체크하는 함수
//-------------------------------------------------------------------
function check_digit(comp)
{
    var    i;
    var    str =  new String(comp.value);
    for(i=0;i<str.length;i++)
        if(!IsInt(str.charAt(i)))
            return false;
    return true;
}
//싱글 quote들어오면 리턴시키는 함수.
function singleQuote(obj) {
	var txt		= obj.value;
	for(i=0; i<txt.length; i++){
		if(txt.substring(i,i+1)=='\''){
 			return false;
 		}
 	}
	return true;
}
//-------------------------------------------------------------------
// 숫자인가를 체크하는 함수
//-------------------------------------------------------------------
function IsInt(value) {
    var   j;
    for(j=0;j<_intValue.length;j++)
        if(value == _intValue.charAt(j)) {
            return true;
        }
    return false;
}
//---------------------------------------------------------
//	param 1 : document.[formName].[inputName]
//	param 2 : maxLength
//	param 3 : mode (어떤 필드체크를 할 것인가?)
//	param 4 : flag (공백체크를 할 것인가?)
//	param 5 : alert Message
//---------------------------------------------------------
var globalMessages = null;

function setGlobalMessages(messages) {
	globalMessages = messages;
}

function validateorMessageBox(msg, msgIndex, msgDefault) {
	var fullmsg = msg;
	if (globalMessages != null && globalMessages != "undefined")
		fullmsg += globalMessages[msgIndex];
	else
		fullmsg += msgDefault;

	alert(fullmsg);
}

function radio_check(input, msg) {

	if(!hasCheckedRadio(input)) {
		validateorMessageBox(msg, 0, " : 필수 선택 항목입니다.");
		return true;
	}

	return false;
}

function select_check(input, msg) {

	if(!hasSelected(input)) {
		validateorMessageBox(msg, 0, " : 필수 선택 항목입니다.");
		return true;
	}

	return false;
}
function text_check(input,length,mode,flag,msg)
{
	var value = input.value;
	var ok = false;

	if(flag == 1) {
		if(length_check(value) == blank_check(value)) {
			ok = true;
		}
	}
	if( !singleQuote(input) ){
		validateorMessageBox(msg, 1, "특수문자는 사용할수 없습니다.");
		input.focus();
		return true;
	}
	if(ok) {
		validateorMessageBox(msg, 2, " : 필수 입력 항목입니다.");
		input.focus();
		return true;
	}

	if(getByteLength(value) > length) {
		validateorMessageBox(msg, 3, " : 필드 길이가 초과했습니다.");
		input.value="";
		input.focus();
		return true;
	}

	switch(mode) {

		case 1 :
			break;
		case 2 :
			if (!isAlphabet(value)) {
				validateorMessageBox(msg, 4, " : 필드엔 영어만 허용됩니다");
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 3 :
			if (!isNumber(value)) {
				validateorMessageBox(msg, 5, " : 필드엔 숫자만 허용됩니다");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 4 :
			if (isHan(value)) {
				validateorMessageBox(msg, 6, " : 필드엔 한글만 허용됩니다");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 5 :
			if (!isAlphaNum(value)) {
				validateorMessageBox(msg, 7, " : 필드엔 영문과 숫자만 허용됩니다");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 6 :
			if (!isValidEmail(value)) {
				validateorMessageBox(msg, 8, " : 이메일 형식이 틀렸습니다.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 7 :
			if (!isValidPhone(value)) {
				validateorMessageBox(msg, 9, " : 전화번호 형식이 틀렸습니다.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 8 :
			if (resnoCheck(value)) {
				validateorMessageBox(msg, 10, " : 주민등록번호가 틀렸습니다.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 9 :
			if (noCheck(value)) {
				validateorMessageBox(msg, 11, " : 사업자등록번호가 틀렸습니다.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 10 :
			if ((!isAlphaNumExtraChar(value)) || (!isExtraChar(value)))
			{
				validateorMessageBox(msg, 12, " : 필드엔 영문자와 숫자, 최소 하나 이상의 특수문자(~!@#$%^&*?)가 필요합니다");			
				input.value="";
				input.focus();
				return true;
			}

			break;
	}

	return false;
	
}




/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.length; inx++) {
       if (chars.indexOf(input.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.length; inx++) {
       if (chars.indexOf(input.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/**
 * 입력값이 알파벳인지 체크
 * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
 * 자주 쓰이는 경우에는 var chars 변수를 
 * global 변수로 선언하고 사용하도록 한다.
 * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 *     var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
 *     var number    = "0123456789";
 *     function isAlphaNum(input) {
 *         var chars = uppercase + lowercase + number;
 *         return containsCharsOnly(input,chars);
 *     }
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자가 아닌지 체크
 */
function isHan(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsChars(input,chars);
}

/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
* 입력값에 특수문자가 있는지 체크
*/
function isExtraChar(input) {
	var chars = "~!@#$%^&*?";
	return containsChars(input, chars);
}

function isAlphaNumExtraChar(input) {
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";
	return containsCharsOnly(input, chars);
}
/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}


/**
 * 입력값이 이메일 형식인지 체크
 * ex) if (!isValidEmail(form.email)) {
 *         alert("올바른 이메일 주소가 아닙니다.");
 *     }
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * 입력값의 바이트 길이를 리턴
 * ex) if (getByteLength(title) > 100) {
 *         alert("제목은 한글 50자(영문 100자) 이상 입력할 수 없습니다.");
 *     }
 * Author : Wonyoung Lee
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.length; inx++) {
        var oneChar = escape(input.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        }
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

function hasSelected(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].selected && (input[inx].value != '')) return true;
        }
    } else {
        if (input.selected) return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 * 텍스트 박스에 입력된 값이 있는지를 체크할때 적당.
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}
		