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
		alert(name + "��(��) �Է��ϼ���.");
		return false;
	} 

	// data type�� validation
	if (dataType == valInt)
	{
		if ( !(isNumeric(checkStr)) ) 
		{
			alert(name + "��(��) ���ڷ� �Է��ϼ���.");
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
			alert(name + "��(��) ���ڷ� �Է��ϼ���.");
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
			alert(name + "��(��) ����/���� �������� �Է��ϼ���.");
			return false;
		} 
	}
	else if (dataType == valPhone)
	{
		if ( !(isPhone(checkStr)) ) 
		{
			alert(name + "��(��) ���ڿ� '-' �������� �Է��ϼ���.");
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
		alert(name + "��(��) " + checkLen + " �ڸ��� �Է��ϼ���.");
		return false;
	} 
	
	// less than length check
	if (lessThanLen.length != 0 && checkStr.length > eval(lessThanLen))
	{
		alert(name + "��(��) " + lessThanLen + " �ڸ� �̳��� �Է��ϼ���.");
		return false;
	} 
	
	// more than length check
	if (moreThanLen.length != 0 && checkStr.length < eval(moreThanLen))
	{
		alert(name + "��(��) " + moreThanLen + " �ڸ� �̻����� �Է��ϼ���.");
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
                // Daum Online��ǥ�� ���� script added By Acme3411
/*
	var where = checkStr.substr(checkStr.indexOf("@")+1,checkStr.length-1)
    if(where=="hanmail.net" || where=="daum.net") {
		alert("���� �¶��� ��ǥ�� �ǽ÷� hanmail.net�̳� daum.net�� ����Ͻ� �� �����ϴ�!");
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
{ //�ֹε�Ϲ�ȣ üũ��ƾ
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
{ //�̸��� üũ��ƾ
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
{ // ����üũ��ƾ
	var count=0;

	while(true){
		var b=Btemp.substring(count,count+1);
		if (b != " ") break;
		++count;
	}
	return count;
}

function length_check(Ltemp)
{ // ����üũ��ƾ
	var temp_length = Ltemp.length;
	return temp_length;      
}

function onlyNumber() 
{ // ����üũ��ƾ
	if((event.keyCode<48)||(event.keyCode>57))
		event.returnValue=false;
}
function chkchar(nn)
{ // ����üũ��ƾ-�ѱ۸����(�ѱ��̸� true)
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
{ // ����üũ��ƾ-���ڸ����(���ڰ� �ƴϸ� true)
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
{ // ����� ��Ϲ�ȣ üũ��ƾ
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
{//�Է��� ������� ���Ἲ üũ
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
	if(text_check(ff.name01, 10, 1, 0, "��� �� �� ���")) return;
	if(text_check(ff.name02, 10, 2, 0, "��� ���")) return;
	if(text_check(ff.name03, 10, 3, 0, "���ڸ� ���")) return;
	if(text_check(ff.name04, 10, 4, 0, "�ѱ۸� ���")) return;
	if(text_check(ff.name05, 10, 5, 0, "����� ���ڸ� ���")) return;
	if(text_check(ff.name06, 40, 6, 0, "�̸��� ���ĸ� ���")) return;
	if(text_check(ff.name07, 13, 7, 0, "��ȭ��ȣ(xxx-xxxx-xxxx) ���ĸ� ���")) return;
	if(text_check(ff.name08, 13, 8, 0, "�ֹε�Ϲ�ȣ(xxxxxxxxxxxxx) ���ĸ� ���")) return;
	if(text_check(ff.name09, 10, 9, 0, "����ڵ�Ϲ�ȣ(xxxxxxxxxx) ���ĸ� ���")) return;

	alert("ok");
}
*/
var    _intValue   = '0123456789';
var    _upperValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var    _lowerValue = 'abcdefghijklmnopqrstuvwxyz';
var    dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var    _etcValue   = '~`!@#$%%^&*()-_=+\|[{]};:\'\",<.>/?';
//-------------------------------------------------------------------
// ���ڷ� ������ ���ڿ��ΰ��� üũ�ϴ� �Լ�
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
//�̱� quote������ ���Ͻ�Ű�� �Լ�.
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
// �����ΰ��� üũ�ϴ� �Լ�
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
//	param 3 : mode (� �ʵ�üũ�� �� ���ΰ�?)
//	param 4 : flag (����üũ�� �� ���ΰ�?)
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
		validateorMessageBox(msg, 0, " : �ʼ� ���� �׸��Դϴ�.");
		return true;
	}

	return false;
}

function select_check(input, msg) {

	if(!hasSelected(input)) {
		validateorMessageBox(msg, 0, " : �ʼ� ���� �׸��Դϴ�.");
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
		validateorMessageBox(msg, 1, "Ư�����ڴ� ����Ҽ� �����ϴ�.");
		input.focus();
		return true;
	}
	if(ok) {
		validateorMessageBox(msg, 2, " : �ʼ� �Է� �׸��Դϴ�.");
		input.focus();
		return true;
	}

	if(getByteLength(value) > length) {
		validateorMessageBox(msg, 3, " : �ʵ� ���̰� �ʰ��߽��ϴ�.");
		input.value="";
		input.focus();
		return true;
	}

	switch(mode) {

		case 1 :
			break;
		case 2 :
			if (!isAlphabet(value)) {
				validateorMessageBox(msg, 4, " : �ʵ忣 ��� ���˴ϴ�");
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 3 :
			if (!isNumber(value)) {
				validateorMessageBox(msg, 5, " : �ʵ忣 ���ڸ� ���˴ϴ�");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 4 :
			if (isHan(value)) {
				validateorMessageBox(msg, 6, " : �ʵ忣 �ѱ۸� ���˴ϴ�");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 5 :
			if (!isAlphaNum(value)) {
				validateorMessageBox(msg, 7, " : �ʵ忣 ������ ���ڸ� ���˴ϴ�");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 6 :
			if (!isValidEmail(value)) {
				validateorMessageBox(msg, 8, " : �̸��� ������ Ʋ�Ƚ��ϴ�.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 7 :
			if (!isValidPhone(value)) {
				validateorMessageBox(msg, 9, " : ��ȭ��ȣ ������ Ʋ�Ƚ��ϴ�.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 8 :
			if (resnoCheck(value)) {
				validateorMessageBox(msg, 10, " : �ֹε�Ϲ�ȣ�� Ʋ�Ƚ��ϴ�.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 9 :
			if (noCheck(value)) {
				validateorMessageBox(msg, 11, " : ����ڵ�Ϲ�ȣ�� Ʋ�Ƚ��ϴ�.");			
				input.value="";
				input.focus();
				return true;
			}
			break;
		case 10 :
			if ((!isAlphaNumExtraChar(value)) || (!isExtraChar(value)))
			{
				validateorMessageBox(msg, 12, " : �ʵ忣 �����ڿ� ����, �ּ� �ϳ� �̻��� Ư������(~!@#$%^&*?)�� �ʿ��մϴ�");			
				input.value="";
				input.focus();
				return true;
			}

			break;
	}

	return false;
	
}




/**
 * �Է°��� Ư�� ����(chars)�� �ִ��� üũ
 * Ư�� ���ڸ� ������� ������ �� �� ���
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("�̸� �ʵ忡�� Ư�� ���ڸ� ����� �� �����ϴ�.");
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
 * �Է°��� Ư�� ����(chars)������ �Ǿ��ִ��� üũ
 * Ư�� ���ڸ� ����Ϸ� �� �� ���
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("������ �ʵ忡�� A,B,O ���ڸ� ����� �� �ֽ��ϴ�.");
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
 * �Է°��� ���ĺ����� üũ
 * �Ʒ� isAlphabet() ���� isNumComma()������ �޼ҵ尡
 * ���� ���̴� ��쿡�� var chars ������ 
 * global ������ �����ϰ� ����ϵ��� �Ѵ�.
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
 * �Է°��� ���ĺ� �빮������ üũ
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ� �ҹ������� üũ
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ڸ� �ִ��� üũ
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ�,���ڷ� �Ǿ��ִ��� üũ
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ�,���ڰ� �ƴ��� üũ
 */
function isHan(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsChars(input,chars);
}

/**
 * �Է°��� ����,���(-)�� �Ǿ��ִ��� üũ
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ����,�޸�(,)�� �Ǿ��ִ��� üũ
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
* �Է°��� Ư�����ڰ� �ִ��� üũ
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
 * �Է°��� ����ڰ� ������ ���� �������� üũ
 * �ڼ��� format ������ �ڹٽ�ũ��Ʈ�� 'regular expression'�� ����
 */
function isValidFormat(input,format) {
    if (input.search(format) != -1) {
        return true; //�ùٸ� ���� ����
    }
    return false;
}


/**
 * �Է°��� �̸��� �������� üũ
 * ex) if (!isValidEmail(form.email)) {
 *         alert("�ùٸ� �̸��� �ּҰ� �ƴմϴ�.");
 *     }
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

/**
 * �Է°��� ��ȭ��ȣ ����(����-����-����)���� üũ
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

/**
 * �Է°��� ����Ʈ ���̸� ����
 * ex) if (getByteLength(title) > 100) {
 *         alert("������ �ѱ� 50��(���� 100��) �̻� �Է��� �� �����ϴ�.");
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
 * �Է°����� �޸��� ���ش�.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/**
 * ���õ� ������ư�� �ִ��� üũ
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
 * ���õ� üũ�ڽ��� �ִ��� üũ
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
 * �Է°��� �����̽� �̿��� �ǹ��ִ� ���� �ִ��� üũ
 * �ؽ�Ʈ �ڽ��� �Էµ� ���� �ִ����� üũ�Ҷ� ����.
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
        return true;
    }
    return false;
}
		