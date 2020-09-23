
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function loginCheck() {
   if(document.managerLoginForm.id.value == "") {
	alert("회원 아이디를 입력하세요.");
	document.managerLoginForm.id.focus();
	return;
   }
   if(document.managerLoginForm.password.value == "") {
	alert("패스워드를 입력하세요.");
	document.managerLoginForm.password.focus();
	return;
   }

   document.managerLoginForm.method = "post";
   document.managerLoginForm.submit();
}


function login() {
    if(event.keyCode == 13) {
	  loginCheck();
    }
}

function mallApply() {
     window.open("http://localhost:8080/dzpay/terms/service-request.do", "FRSA_apply", 'resize=no, scrollbars=yes ,height=700, width=760,location=no,directory=no,toolbar=no');
}


function setCookie (name, value, expires) {
  document.cookie = name + "=" + escape (value) +
    "; path=/; expires=" + expires.toGMTString();
}

function getCookie(Name) {
  var search = Name + "="
  if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // 쿠키가 존재하면
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset)
      // 쿠키 값의 마지막 위치 인덱스 번호 설정
      if (end == -1)
        end = document.cookie.length
      return unescape(document.cookie.substring(offset, end))
    }
  }
  return "";
}
function saveid(form) {
  var expdate = new Date();
  // 기본적으로 30일동안 기억하게 함. 일수를 조절하려면 * 30에서 숫자를 조절하면 됨
  if (form.checksaveid.checked)
    expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30); // 30일
  else
    expdate.setTime(expdate.getTime() - 1); // 쿠키 삭제조건
   
    setCookie("saveid", form.admin_id.value, expdate);
}
function getid(form) {
  form.checksaveid.checked = ((form.id.value = getCookie("saveid")) != "");
}

function doBlink() {
  var blink = document.all.tags("BLINK")
  for (var i=0; i < blink.length; i++)
     blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : ""
}

function startBlink() 
{
 if (document.all)
  setInterval("doBlink()",200)
}
function Input_QNA() {
     window.open("/Modules/CS/Join/ADCSCSInput.jsp", "ADCSCSInput_POP", 'resize=no, scrollbars=yes ,height=550, width=750,location=no,directory=no,toolbar=no');
}

function NAVER_AD() {
     window.open("http://www.bluepay.co.kr/popup/pop_naver.html", "naver_event", 'resize=yes, resizable=yes, scrollbars=yes ,height=850, width=612,location=no,directory=no,toolbar=no');
}

function View_News(code) {
	window.open("/Modules/Marketing/NEWS/FRMKNewsView.jsp?mnu_no=CB000009&code="+code, "FRMKNewsView", 'resize=no, scrollbars=yes ,height=650, width=1050,location=no,directory=no,toolbar=no');
}

function Auth_Phone() {
     window.open("/Modules/Phone/Auth/ADPH_Phone_Auth.jsp?chk=Y", "ADPH_Phone_Auth", 'resize=no, scrollbars=yes ,height=250, width=550,location=no,directory=no,toolbar=no');
}

function Trade_Phone() {
     window.open("/Modules/Trade/Mob/ADSA_Main_Trade_Mob.jsp", "ADSA_Main_Trade", 'resize=no, scrollbars=yes ,height=630, width=700,location=no,directory=no,toolbar=no');
}

function Search_id_pass() {
     window.open("http://localhost:8080/dzpay/init/search-user.do", "AD_Search", 'resize=no, scrollbars=yes ,height=400, width=400,location=no,directory=no,toolbar=no');
}

function access_terms() {
     window.open("http://localhost:8080/dzpay/terms/access-term.do", "AD_Search", 'resize=no, scrollbars=yes ,height=500, width=600,location=no,directory=no,toolbar=no');
}

function privacy_policy() {
     window.open("http://localhost:8080/dzpay/terms/privacy-term.do", "AD_Search", 'resize=no, scrollbars=yes ,height=600, width=750,location=no,directory=no,toolbar=no');
}

function billing_policy() {
     window.open("http://localhost:8080/dzpay/terms/billing-term.do", "AD_Search", 'resize=no, scrollbars=yes ,height=600, width=750,location=no,directory=no,toolbar=no');
}

function viewPayment() {
     window.open("http://localhost:8080/dzpay/terms/payment-history.do", "AD_Search", 'resize=no, scrollbars=yes ,height=510, width=700,location=no,directory=no,toolbar=no');
}

function checkEscrow() {
     window.open("http://localhost:8080/dzpay/terms/escrow-banner.do", "AD_Search", 'resize=no, scrollbars=yes ,height=540, width=650,location=no,directory=no,toolbar=no');
}


