	function samePost( kind ) {
		if (kind == "1") {
			if (document.apply.addr_chk1.checked == true) {
				document.apply.corp_post_zipcode.value = document.apply.corp_zipcode.value;
				document.apply.corp_post_addr1.value   = document.apply.corp_addr1.value;
				document.apply.corp_post_addr2.value   = document.apply.corp_addr2.value;
			} else {
				document.apply.corp_post_zipcode.value = "";
				document.apply.corp_post_addr1.value   = "";
				document.apply.corp_post_addr2.value   = "";
			}
		} else if (kind == "2") {
			if (document.apply.addr_chk2.checked == true) {
				document.apply.corp_own_zipcode.value = document.apply.corp_zipcode.value;
				document.apply.corp_own_addr1.value   = document.apply.corp_addr1.value;
				document.apply.corp_own_addr2.value   = document.apply.corp_addr2.value;
			} else {
				document.apply.corp_own_zipcode.value = "";
				document.apply.corp_own_addr1.value   = "";
				document.apply.corp_own_addr2.value   = "";
			}
		}
	}
	function makePop_T(url, x, y, pop_name, scroll) {
	var winopts = "width=" + x + " height=" + y + "toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=" + scroll + ",resizable=yes";
	window.open(url, pop_name, winopts);
}
	function setUserID1(admin_id, ok) {
		  document.apply.cont_comments_ck.value = admin_id;
			document.apply.cont_comments.value = admin_id;
			document.apply.login_chk.value = ok;
	}
	function goZip(kind) {
       var url = "http://localhost:8080/dzpay/mall/post.do?kind="+kind;
       var winopts   = "width=360,height=350,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no";
	   var popWindow = window.open(url,'zip_search', winopts);
	}
	
	function syncData(kind, zip_cd, add1 )	{
		if (kind == "1") {
			document.apply.corp_zipcode.value = zip_cd;
			document.apply.corp_addr1.value   = add1;
			document.apply.corp_addr2.focus();
		} else if (kind == "2") {
			document.apply.corp_post_zipcode.value = zip_cd;
			document.apply.corp_post_addr1.value   = add1;
			document.apply.corp_post_addr2.focus();
		} else if (kind == "3") {
			document.apply.corp_own_zipcode.value = zip_cd;
			document.apply.corp_own_addr1.value   = add1;
			document.apply.corp_own_addr2.focus();
		}
	}
	function goPerson( ) {
	  if (document.apply.person_chk.checked == true) {
          alert("사업자가 아닌 개인일 경우 법인정보 대신 별도의 기본값이 들어값니다.");
		  document.apply.corp_tax_no.value = "5108100995";  // 사업자 번호
		  document.apply.corp_no.value = "1713110000708";		//법인번호
		  document.apply.ecommerce_no.value = "0000000000";  // 통신판매 번호
		  document.apply.corp_name.value = "개인밴더";  // 쇼핑몰 명
		  document.apply.site_desc.value = "개인밴더";  // 사이트 소개
		  document.apply.corp_url.value = "admin.mobipass.co.kr";  // 쇼핑몰 URL

		  document.apply.corp_tax_no.readOnly=true;
		  document.apply.corp_no.readOnly=true;
		  document.apply.ecommerce_no.readOnly=true;
		  document.apply.corp_name.readOnly=true;
		  document.apply.site_desc.readOnly=true;
		  document.apply.corp_url.readOnly=true;
		  document.apply.corp_sang_ho.focus();
	  }else{
          alert("개인이 아닌 사업자일 경우 모든 값을 정확히 입력해 주시기 바랍니다.");
		  document.apply.corp_tax_no.value = "";  // 사업자 번호
		  document.apply.corp_no.value = "";		//법인번호
		  document.apply.ecommerce_no.value = "";  // 통신판매 번호
		  document.apply.corp_name.value = "";  // 쇼핑몰 명
		  document.apply.site_desc.value = "";  // 사이트 소개
		  document.apply.corp_url.value = "";  // 쇼핑몰 URL

		  document.apply.corp_tax_no.readOnly=false;
		  document.apply.corp_no.readOnly=false;
		  document.apply.ecommerce_no.readOnly=false;
		  document.apply.corp_name.readOnly=false;
		  document.apply.site_desc.readOnly=false;
		  document.apply.corp_url.readOnly=false;
		  document.apply.corp_sang_ho.focus();
	  }

    }
	function goChg( kind ) {
		if (kind == "1") {
			if (document.apply.chg_chk1.checked == true) {
				document.apply.dev_chg_nm.value = document.apply.contact_chg_nm.value;
				document.apply.dev_chg_tel1.value   = document.apply.contact_chg_tel1.value;
				document.apply.dev_chg_tel2.value   = document.apply.contact_chg_tel2.value;
				document.apply.dev_chg_tel3.value   = document.apply.contact_chg_tel3.value;
				document.apply.dev_chg_mob1.value   = document.apply.contact_chg_mob1.value;
				document.apply.dev_chg_mob2.value   = document.apply.contact_chg_mob2.value;
				document.apply.dev_chg_mob3.value   = document.apply.contact_chg_mob3.value;
				document.apply.job_grp2.value   = document.apply.job_grp1.value;
				document.apply.dev_chg_email.value   = document.apply.contact_chg_email.value;
			} else {
				document.apply.dev_chg_nm.value = "";
				document.apply.dev_chg_tel1.value   = "";
				document.apply.dev_chg_tel2.value   = "";
				document.apply.dev_chg_tel3.value   = "";
				document.apply.dev_chg_mob1.value   = "";
				document.apply.dev_chg_mob2.value   = "";
				document.apply.dev_chg_mob3.value   = "";
				document.apply.job_grp2.value   = "";
				document.apply.dev_chg_email.value   = "";
			}
		} else if (kind == "2") {
			if (document.apply.chg_chk2.checked == true) {
				document.apply.sale_chg_nm.value = document.apply.contact_chg_nm.value;
				document.apply.sale_chg_tel1.value   = document.apply.contact_chg_tel1.value;
				document.apply.sale_chg_tel2.value   = document.apply.contact_chg_tel2.value;
				document.apply.sale_chg_tel3.value   = document.apply.contact_chg_tel3.value;
				document.apply.sale_chg_mob1.value   = document.apply.contact_chg_mob1.value;
				document.apply.sale_chg_mob2.value   = document.apply.contact_chg_mob2.value;
				document.apply.sale_chg_mob3.value   = document.apply.contact_chg_mob3.value;
				document.apply.job_grp3.value   = document.apply.job_grp1.value;
				document.apply.sale_chg_email.value   = document.apply.contact_chg_email.value;
			} else {
				document.apply.sale_chg_nm.value = "";
				document.apply.sale_chg_tel1.value   = "";
				document.apply.sale_chg_tel2.value   = "";
				document.apply.sale_chg_tel3.value   = "";
				document.apply.sale_chg_mob1.value   = "";
				document.apply.sale_chg_mob2.value   = "";
				document.apply.sale_chg_mob3.value   = "";
				document.apply.job_grp3.value   = "";
				document.apply.sale_chg_email.value   = "";
			}
		} else if (kind == "3") {
			if (document.apply.chg_chk3.checked == true) {
				document.apply.customer_chg_nm.value = document.apply.contact_chg_nm.value;
				document.apply.customer_chg_tel1.value   = document.apply.contact_chg_tel1.value;
				document.apply.customer_chg_tel2.value   = document.apply.contact_chg_tel2.value;
				document.apply.customer_chg_tel3.value   = document.apply.contact_chg_tel3.value;
				document.apply.customer_chg_mob1.value   = document.apply.contact_chg_mob1.value;
				document.apply.customer_chg_mob2.value   = document.apply.contact_chg_mob2.value;
				document.apply.customer_chg_mob3.value   = document.apply.contact_chg_mob3.value;
				document.apply.job_grp4.value   = document.apply.job_grp1.value;
				document.apply.customer_chg_email.value   = document.apply.contact_chg_email.value;
			} else {
				document.apply.customer_chg_nm.value = "";
				document.apply.customer_chg_tel1.value   = "";
				document.apply.customer_chg_tel2.value   = "";
				document.apply.customer_chg_tel3.value   = "";
				document.apply.customer_chg_mob1.value   = "";
				document.apply.customer_chg_mob2.value   = "";
				document.apply.customer_chg_mob3.value   = "";
				document.apply.job_grp4.value   = "";
				document.apply.customer_chg_email.value   = "";
			}
		}
	}

	function goHost() {
       url = "http://localhost:8080/dzpay/mall/vender.do"
       var winopts   = "width=360,height=350,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no";
	   var popWindow = window.open(url,'host_search', winopts);
	}
	
	function host_setting(host_nm, site_hosting_id ) {
		document.apply.host_id.value   = site_hosting_id;		
		document.apply.host_nm.value   = host_nm;
	}
	
	function goSubmit() {
		if(document.apply.login_chk.value != "ok"){
				alert("아이디 중복 검사를 하지 않았습니다." );
				return;
			}else{
		if(document.apply.cont_comments.value !=		document.apply.cont_comments_ck.value ){
				alert("아이디 중복 검사를 하지 않았습니다." );
				return;
			}
		}	
		
    	with (document.apply) {
			if ( corp_sang_ho.value == "") {
				alert("상호명을 바르게 입력하세요." );
				document.apply.corp_sang_ho.focus();
				return;
			}
			else if ( corp_name.value == "") {
				alert("쇼핑몰명을 바르게 입력하세요.");
				document.apply.corp_name.focus();
				return;
			}
			else if (isNaN(corp_tax_no.value)) {
				alert("사업자등록번호를 숫자로 입력하세요" );
				document.apply.corp_tax_no.focus();
				return;
			}
			else if (!(corp_tax_no.value.length == 10)) {
 				alert("사업자등록번호는 10자리 입니다." );
				document.apply.corp_tax_no.focus();
				return;
			}
			else if (!com_no_ck(corp_tax_no.value)) {
				alert("사업자등록번호를 정확히 입력하세요." );
				document.apply.corp_tax_no.focus();
				return;
			}
			else if ( corp_own_name.value == "") {
				alert("대표자명을 바르게 입력하세요." );
				document.apply.corp_own_name.focus();
				return;
			}
			else if( !( corp_own_mob1.value == "010" || corp_own_mob1.value == "011" ||
                        corp_own_mob1.value == "016" || corp_own_mob1.value == "017" ||
                        corp_own_mob1.value == "019" || corp_own_mob1.value == "018"))
            {
 				alert("대표자 휴대폰 종류를 선택하십시오.(010/011/016/017/018/019)" );
				document.apply.corp_own_mob1.focus();
				return;
            }
			else if (corp_own_mob2.value == "") {
 				alert("대표자 휴대폰번호를 적어주십시오." );
				document.apply.corp_own_mob2.focus();
				return;
			}
			else if (isNaN(corp_own_mob2.value)) {
 				alert("대표자 휴대폰번호를 숫자로 입력하십시오." );
				document.apply.corp_own_mob2.focus();
				return;
			}
			else if ( corp_own_mob2.value.lenght < 3) {
				alert("대표자 휴대폰번호를 확인하세요.");
				document.apply.corp_own_mob2.focus();
				return;
			}
			else if (corp_own_mob3.value == "") {
 				alert("휴대폰번호를 적어주십시오." );
				document.apply.corp_own_mob3.focus();
				return;
			}
			else if (isNaN(corp_own_mob3.value)) {
 				alert("휴대폰번호를 숫자로 입력하십시오." );
				document.apply.corp_own_mob3.focus();
				return;
			}
			else if ( corp_own_mob3.value.lenght < 3) {
				alert("대표자 휴대폰번호를 확인하세요.");
				document.apply.corp_own_mob3.focus();
				return;
			}
			else if (corp_zipcode.value == "" || corp_addr1.value == "" || corp_addr2.value == "" ) {
				alert("사업장 주소를 바르게 입력하세요.");
				document.apply.corp_addr1.focus();
				return;
			}
			else if (corp_tel1.value == "" || corp_tel2.value == "" || corp_tel3.value == "" ) {
				alert("대표 전화번호를 입력하세요.");

				if (corp_tel1.value == "") {
					document.apply.corp_tel1.focus();
				} else if (corp_tel2.value == "") {
					document.apply.corp_tel2.focus();
				} else if (corp_tel3.value == "") {
					document.apply.corp_tel3.focus();
				}

				return;
			}
			else if (isNaN(corp_tel1.value)) {
				alert("대표 전화번호를 숫자로 입력하세요.");
				document.apply.corp_tel1.focus();
				return;
			}
			else if (isNaN(corp_tel2.value)) {
				alert("대표 전화번호를 숫자로 입력하세요.");
				document.apply.corp_tel2.focus();
				return;
			}
			else if ( corp_tel2.value.lenght < 2) {
				alert("대표 전화번호(국번)를 확인하세요.");
				document.apply.corp_tel2.focus();
				return;
			}
			else if (isNaN(corp_tel3.value)) {
				alert("대표 전화번호를 숫자로 입력하세요.");
				document.apply.corp_tel3.focus();
				return;
			}
			else if ( corp_tel3.value.lenght < 3) {
				alert("대표 전화번호를 확인하세요.");
				document.apply.corp_tel3.focus();
				return;
			}
			else if (corp_fax1.value == "" || corp_fax2.value == "" || corp_fax3.value == "" ) {

				if (corp_fax1.value == "") {
					document.apply.corp_fax1.focus();
				} else if (corp_fax2.value == "") {
					document.apply.corp_fax2.focus();
				} else if (corp_fax3.value == "") {
					document.apply.corp_fax3.focus();
				}

				alert("팩스번호를 입력하세요.");
				return;
			}
			else if (isNaN(corp_fax1.value)) {
				alert("팩스번호를 숫자로 입력하세요.");
				document.apply.corp_fax1.focus();
				return;
			}
			else if (isNaN(corp_fax2.value)) {
				alert("팩스번호를 숫자로 입력하세요.");
				document.apply.corp_fax2.focus();
				return;
			}
			else if (isNaN(corp_fax3.value)) {
				alert("팩스번호를 숫자로 입력하세요.");
				document.apply.corp_fax3.focus();
				return;
			}
			else if ( corp_email.value == "") {
				alert("대표이메일을 입력하세요.");
				document.apply.corp_email.focus();
				return;
			}
			else if (site_desc.value == "") {
				alert("사이트소개를 15자이내로 입력하세요");
				document.apply.site_desc.focus();
				return;
			}
			else if( corp_ind_cd.value == "" ) {
				alert("업종코드를 선택하세요." );
				document.apply.corp_ind_cd.focus();
				return;
			}
			else if (corp_biz.value == "") {
				alert("사업자등록증의 업종을 입력하세요.");
				document.apply.corp_biz.focus();
				return;
			}
			else if (corp_item.value == "") {
				alert("사업자등록증의 종목을 입력하세요.");
				document.apply.corp_item.focus();
				return;
			}
			else if (corp_item.value == "") {
				alert("사업자등록증의 종목을 입력하세요.");
				document.apply.corp_item.focus();
				return;
			}
			else if (contact_chg_nm.value == "") {
				alert("계약담당자 이름을 입력하세요.");
				document.apply.contact_chg_nm.focus();
				return;
			}
			else if ( contact_chg_tel1.value  == "") {
				alert("계약담당자 전화번호(국번)을 입력하세요.");
				document.apply.contact_chg_tel1.focus();
				return;
			}
			else if ( contact_chg_tel1.value.lenght < 2) {
				alert("계약담당자 전화번호(국번)을 확인하세요.");
				document.apply.contact_chg_tel1.focus();
				return;
			}
			else if ( contact_chg_tel2.value  == "") {
				alert("계약담당자 전화번호(앞번)을 입력하세요.");
				document.apply.contact_chg_tel2.focus();
				return;
			}
			else if ( contact_chg_tel2.value.lenght < 3) {
				alert("계약담당자 전화번호(앞번)을 확인하세요.");
				document.apply.contact_chg_tel2.focus();
				return;
			}
			else if ( contact_chg_tel3.value  == "") {
				alert("계약담당자 전화번호(뒤번)을 입력하세요.");
				document.apply.contact_chg_tel3.focus();
				return;
			}
			else if ( contact_chg_tel3.value.lenght < 3) {
				alert("계약담당자 전화번호(뒷번)을 확인하세요.");
				document.apply.contact_chg_tel3.focus();
				return;
			}
			else if (isNaN(contact_chg_tel1.value)) {
				alert("계약담당자 전화번호를 숫자로 입력하세요.");
				document.apply.contact_chg_tel1.focus();
				return;
			}
			else if (isNaN(contact_chg_tel2.value)) {
				alert("계약담당자 전화번호를 숫자로 입력하세요.");
				document.apply.contact_chg_tel2.focus();
				return;
			}
			else if (isNaN(contact_chg_tel3.value)) {
				alert("계약담당자 전화번호를 숫자로 입력하세요.");
				document.apply.contact_chg_tel3.focus();
				return;
			}
			else if ( contact_chg_mob1.value == "" ) {
				alert("계약담당자 핸드폰종류를 입력하세요.");
				document.apply.contact_chg_mob1.focus();
				return;
			}
			else if( !( contact_chg_mob1.value == "010" || contact_chg_mob1.value == "011" ||
                        contact_chg_mob1.value == "016" || contact_chg_mob1.value == "017" ||
                        contact_chg_mob1.value == "019" || contact_chg_mob1.value == "018"))
            {
 				alert("휴대폰 종류를 선택하십시오.(010/011/016/017/018/019)" );
				document.apply.contact_chg_mob1.focus();
				return;
            }
			else if ( contact_chg_mob2.value == "" ) {
				alert("계약담당자 핸드폰번호를 입력하세요.");
				document.apply.contact_chg_mob2.focus();
				return;
			}
			else if ( contact_chg_mob3.value == "" ) {
				alert("계약담당자 핸드폰번호를 입력하세요.");
				document.apply.contact_chg_mob3.focus();
				return;
			}
			else if (isNaN(contact_chg_mob2.value)) {
				alert("계약담당자 핸드폰를 숫자로 입력하세요.");
				document.apply.contact_chg_tel2.focus();
				return;
			}
			else if (isNaN(contact_chg_mob3.value)) {
				alert("계약담당자 핸드폰를 숫자로 입력하세요.");
				document.apply.contact_chg_tel3.focus();
				return;
			}
			else if (job_grp1.value == "") {
				alert("계약담당자 직급을 선택하세요.");
				document.apply.job_grp1.focus();
				return;
			}
			else if (contact_chg_email.value == "") {
				alert("계약담당자 이메일을 입력하세요.");
				document.apply.contact_chg_email.focus();
				return;
			}
			else if (bank.value == "0000") {
				alert("결제은행을 선택하세요.");
				document.apply.bank.focus();
				return;
			}
			else if (site_deposit_no.value == "") {
				alert("계좌번호를 입력해주세요.");
				document.apply.site_deposit_no.focus();
				return;
			}
			else if (site_deposit_name.value == "") {
				alert("예금주명을 입력해주세요.");
				document.apply.site_deposit_name.focus();
				return;
			}

			if (contact_chg_nm.value != "") {
				chg_list1.value = chg_type1.value         + ":"
        	                    + contact_chg_nm.value    + ":"
 								+ contact_chg_tel1.value  + ":"
 								+ contact_chg_tel2.value  + ":"
 								+ contact_chg_tel3.value  + ":"
 								+ contact_chg_email.value + ":"
 								+ contact_chg_mob1.value  + ":"
 								+ contact_chg_mob2.value  + ":"
 								+ contact_chg_mob3.value  + ":"
 								+ job_grp1.value          + "|";
			}
			if (dev_chg_nm.value != "") {
				chg_list2.value = chg_type2.value     + ":"
        	                    + dev_chg_nm.value    + ":"
 								+ dev_chg_tel1.value  + ":"
 								+ dev_chg_tel2.value  + ":"
 								+ dev_chg_tel3.value  + ":"
 								+ dev_chg_email.value + ":"
 								+ dev_chg_mob1.value  + ":"
 								+ dev_chg_mob2.value  + ":"
 								+ dev_chg_mob3.value  + ":"
 								+ job_grp2.value      + "|";
			}
			if (sale_chg_nm.value != "") {
				chg_list3.value = chg_type3.value      + ":"
        	                    + sale_chg_nm.value    + ":"
 								+ sale_chg_tel1.value  + ":"
 								+ sale_chg_tel2.value  + ":"
 								+ sale_chg_tel3.value  + ":"
 								+ sale_chg_email.value + ":"
 								+ sale_chg_mob1.value  + ":"
 								+ sale_chg_mob2.value  + ":"
 								+ sale_chg_mob3.value  + ":"
 								+ job_grp3.value       + "|";
			}
			if (customer_chg_nm.value != "") {
				chg_list4.value = chg_type4.value          + ":"
        	                    + customer_chg_nm.value    + ":"
 								+ customer_chg_tel1.value  + ":"
 								+ customer_chg_tel2.value  + ":"
 								+ customer_chg_tel3.value  + ":"
 								+ customer_chg_email.value + ":"
 								+ customer_chg_mob1.value  + ":"
 								+ customer_chg_mob2.value  + ":"
 								+ customer_chg_mob3.value  + ":"
 								+ job_grp4.value           + "|";
			}

			chg_list.value = chg_list1.value
        	               + chg_list2.value
        	               + chg_list3.value
        	               + chg_list4.value;

			corp_own_no.value = corp_own_no1.value
        	                  + ""
 						      + corp_own_no2.value;
			
			document.apply.submit();
		}
	}
	
	function id_check() { // 회원 아이디가 사용 가능한지 체크
		const id = document.apply.cont_comments.value;
		if(id == "") {
			alert("회원 ID를 입력하세요.");
			document.apply.cont_comments.focus();
			return;
		}
		let url = "http://localhost:8080/dzpay/mall/account-id.do?adminId=" + document.apply.cont_comments.value ;
		
		var id_use = window.open(url, 'UserIDCheck','left=250,top=200,width=380,height=200');
		id_use.moveTo(360,20);
		id_use.focus();

}

function goPopup(){
	var pop = window.open("http://localhost:8080/dzpay/init/login.do","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 	
}


