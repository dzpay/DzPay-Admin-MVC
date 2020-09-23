
/**  ADManagerGroup.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */
function Search_Code() {
   
    document.form1.action="ADSTCode.jsp";
    document.form1.submit();
}

function Input_Code(code) {
   
     window.open("ADSTCodeInput.jsp?mnu_no="+code, "ADSTCodeInput", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');

}


function View_Code(no,code) {

	window.open("ADSTCodeView.jsp?mnu_no="+no+"&code="+code, "ADSTCodeView", 'resize=no, scrollbars=yes ,height=600, width=850,location=no,directory=no,toolbar=no');
}



function Delete_Code() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
	    document.form1.action="ADSTCodeDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}


/**  ADCodeInput.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */

function Save_Code() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.cd.value == "" ) {
			alert("그룹코드를 입력하세요.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("그룹 코드 명칭을 입력하세요.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("대분류변수코드를 입력하세요.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeInputAction.jsp";
			document.form1.submit();
   	    }
}


/**  ADCodeView.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */


function Update_Code() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.cd.value == "" ) {
			alert("그룹코드를 입력하세요.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("그룹 코드 명칭을 입력하세요.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("대분류변수코드를 입력하세요.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeUpdateAction.jsp";
			document.form1.submit();
   	    }
}



function Insert_Code(code, code2, code3) {
   
     window.open("ADSTCodeLowInput.jsp?cd_gp="+code+"&mnu_no="+code2+"&codemaster="+code3,"ADSTCodeLowInput", 'resize=no, scrollbars=yes ,height=350, width=850,location=no,directory=no,toolbar=no');

}

function View_LowCode(no,group,code) {

	window.open("ADSTCodeLowView.jsp?mnu_no="+no+"&cd_gp="+group+"&cd="+code, "ADSTCodeLowView", 'resize=no, scrollbars=yes ,height=350, width=850,location=no,directory=no,toolbar=no');
}


function Delete_LowCode() {
   var Message1 = '정말 삭제 하시겠습니까?';
   var Message2 = '관련된 모든 데이터는 모두 삭제됩니다. 그래도 삭제하시겠습니까?';
				
   if ( confirm(Message1) == 1 ) {
       if ( confirm(Message2) == 1 ) {
        document.form1.check.value = "L";  // L 로 check Flag 를 셋팅한다. 
	    document.form1.action="ADSTCodeDeleteAction.jsp";
		document.form1.submit();
      }else
	   alert('삭제를 취소하셨습니다');
	    
   }
  
}


/**  ADCodeLowInput.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 12일
 */


function Save_LowCode() {   // 하위 코드정보 추가

        if(document.form1.cd_tail.value == "" ) {
			alert("코드를 입력하세요.");
			document.form1.cd_tail.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("코드 명칭을 입력하세요.");
			document.form1.cd_nm.focus();
	//	}
		//else if(document.form1.codemaster.value == "") {
		//	alert("소분류변수코드를 입력하세요.");
		//	document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeLowInputAction.jsp";
			document.form1.submit();
   	    }
}


/**  ADCodeLowView.jsp Include Javascript
 *    작성자    : 황정현
 *    작성일자 : 2002년 3월 6일
 */


function Update_LowCode() {   // 작업그룹별 메뉴 리스트 추가

        if(document.form1.cd.value == "" ) {
			alert("코드를 입력하세요.");
			document.form1.cd.focus();
		}
		else if(document.form1.cd_nm.value == "") {
			alert("코드 명칭을 입력하세요.");
			document.form1.cd_nm.focus();
		}
		else if(document.form1.codemaster.value == "") {
			alert("소분류변수코드를 입력하세요.");
			document.form1.codemaster.focus();
		}else{
			document.form1.action="ADSTCodeLowUpdateAction.jsp";
			document.form1.submit();
   	    }
}



function generate_code(){

     window.open("ADSTCodeGenerate.jsp","ADSTCodeGenerate", 'resize=no, scrollbars=yes ,height=250, width=450,location=no,directory=no,toolbar=no');

}

function Generate(){

	document.form1.action="ADSTCodeGenerate.jsp";
	document.form1.submit();
 
}



function focus_cd(){

   document.form1.cd_tail.focus();
}

