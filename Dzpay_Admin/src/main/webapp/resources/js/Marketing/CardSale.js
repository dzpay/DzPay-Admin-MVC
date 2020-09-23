function Input_Card_Info(code) {
   
     window.open("ADMKCardSaleInput.jsp?mnu_no="+code, "ADMKCardSaleInput", 'resize=no, scrollbars=yes ,height=400, width=450,location=no,directory=no,toolbar=no');

}

function Main_News() {
   
     window.open("ADMKCardSaleGenerate.jsp", "ADMKCardSaleGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADMKCardSaleGenerate.jsp";
	document.form1.submit();
 
}


function Delete_Card_Info() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADMKCardSaleDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}


String.prototype.trim = function() {

	return this.replace(/(^\s*)|(\s*$)/gi, "");

}

function isNumber(num) {
	var value = num.replace(/[0-9]/g, "");
	if (value == "") {
		return true;
	} else {
		return false;
	}
}

function Save_Card_Info() {   // 카드 내용 저장

	document.form1.card_nm.value = document.form1.card_nm.value.trim();
	document.form1.price.value = document.form1.price.value.trim();
	document.form1.url.value = document.form1.url.value.trim();

	if(document.form1.card_nm.value == "" ) {
		alert("카드이름을 입력하세요.");
		document.form1.card_nm.focus();
	}
	else if(document.form1.price.value == "" ) {
		alert("카드 가격을 입력하세요.");
		document.form1.price.focus();
	}
	else if(! isNumber(document.form1.price.value) ) {
		alert("카드 가격을 숫자로 입력하세요.");
		document.form1.price.value = "";
		document.form1.price.focus();
	}
	else if(document.form1.url.value == "" ) {
		alert("이동할 주소를 입력하세요.");
		document.form1.url.focus();
	}
	else if(document.form1.card_img.value == "" ) {
		alert("이미지를 등록하세요.");
	}
	else{

		document.form1.action="ADMKCardSaleInputAction.jsp";
		document.form1.submit();
	}
}