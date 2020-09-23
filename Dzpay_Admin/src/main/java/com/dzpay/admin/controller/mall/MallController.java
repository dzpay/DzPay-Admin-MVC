package com.dzpay.admin.controller.mall;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.dzpay.admin.common.dto.host.TblhostInfo;
import com.dzpay.admin.common.dto.mall.TblapplyCharge;
import com.dzpay.admin.common.dto.mall.TblapplyRegist;
import com.dzpay.admin.common.service.ApplyRegistService;
import com.dzpay.admin.common.service.HostInfoService;
import com.dzpay.admin.common.service.OfficeAdminService;

@Controller
public class MallController {
	
	@Resource(name = "officeAdminService")
	OfficeAdminService officeAdminService;
	
	@Resource(name = "hostInfoService")
	HostInfoService hostInfoService;
	
	@Resource(name = "applyRegistService")
	ApplyRegistService applyRegistService;
	
	// 가맹점 신청 페이지
	@RequestMapping(value = "/mall/apply-doc", method = RequestMethod.GET)
	public String viewDoc(Model model) {
		return "/mall/mallApply";
	}
	
	// 사업장 주소
	@RequestMapping(value = "/mall/company-address", method = RequestMethod.GET)
	public String selCompAddress(Model model) {
		return "mall/selectAddress";
	}
		
	// 수령지 주소 조회
	@RequestMapping(value = "/mall/recv-address", method = RequestMethod.GET)
	public String selRecvAddress(Model model) {
		return "mall/selectAddress";
	}
	
	// 업종 코드 조회
	@RequestMapping(value = "/mall/business-code", method = RequestMethod.GET)
	public String selBizCode(Model model) {
		return "mall/selectBizCode";
	}
	
	// 벤더 업체
	@RequestMapping(value = "/mall/vender", method = RequestMethod.GET)
	public ModelAndView selVendor(@RequestParam(value = "word", required = false, defaultValue = "") String word, Model model
			, HttpServletResponse response, HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView("/mall/vender");
		
		// isInit을 통해 jsp에 
		// 초기 화면 혹은 검색 화면을 출력하자.
		String isInit = (word.length() == 0)? "init"  : "search";
		String flag = "fail";
		
		if(isInit.equals("search")) {
			List<TblhostInfo> list = hostInfoService.selectHost(word);
			flag = (list.size() == 0)? "fail"  : "succ";
			mav.addObject("flag", flag);
			mav.addObject("list", list);
		}
		mav.addObject("flag", flag);
		mav.addObject("isInit", isInit);

		return mav;
	}
	
	// 아이디 중복 체크
	@RequestMapping(value = "/mall/account-id", method = RequestMethod.GET)
	public ModelAndView checkId(@RequestParam("adminId") String adminId,
			Model model, HttpServletResponse response, HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView("/mall/IdOverLap");
		
		if(officeAdminService.selectAdmin(adminId) == null) {
			mav.addObject("flag", "succ");
			mav.addObject("adminId", adminId);
		}
		else {
			mav.addObject("flag", "fail");
			mav.addObject("adminId", adminId);
		}
		return mav;
	}
	
	// 가맹점 가입 절차 서비스를 따로 만들어야 하지 않을까?
	// javascript 변수 문제로 인한 하드코딩
	@RequestMapping(value = "/mall/apply/act", method = RequestMethod.POST)
	public ModelAndView doApply(
			// @RequestParam(value = "corp_reg_dt") String corpRegDt, 날짜
			// contId 기본키
			// corpName  회사명
			@RequestParam(value = "corp_name", required = false) String corpName,
			@RequestParam(value = "corp_sang_ho", required = false) String corpSangHo,
			@RequestParam(value = "corp_tax_no", required = false) String corpTaxNo,	// 사업자 번호
			@RequestParam(value = "corp_no", required = false) String corpNo,			// 법인 번호
			@RequestParam(value = "corp_own_name", required = false) String corpOwnName,
			@RequestParam(value = "corp_zipcode", required = false) String corpZipcode,
			@RequestParam(value = "corp_addr1", required = false) String corpAddr1,
			@RequestParam(value = "corp_addr2", required = false) String corpAddr2,
			@RequestParam(value = "corp_own_zipcode", required = false) String corpOwnZipcode,
			@RequestParam(value = "corp_own_addr1", required = false) String corpOwnAddr1,
			@RequestParam(value = "corp_own_addr2", required = false) String corpOwnAddr2,
			@RequestParam(value = "corp_biz", required = false) String corpBiz,
			@RequestParam(value = "corp_item", required = false) String corpItem,
			@RequestParam(value = "corp_ind_cd", required = false) String corpIndCd,
			@RequestParam(value = "corp_post_zipcode", required = false) String corpPostZipcode,
			@RequestParam(value = "corp_post_addr1", required = false) String corpPostAddr1,
			@RequestParam(value = "corp_post_addr2", required = false) String corpPostAddr2,
			@RequestParam(value = "corp_tel1", required = false) String corpTel1,
			@RequestParam(value = "corp_tel2", required = false) String corpTel2,
			@RequestParam(value = "corp_tel3", required = false) String corpTel3,
			@RequestParam(value = "corp_fax1", required = false) String corpFax1,
			@RequestParam(value = "corp_fax2", required = false) String corpFax2,
			@RequestParam(value = "corp_fax3", required = false) String corpFax3,
			@RequestParam(value = "corp_own_mob1", required = false) String corpOwnMob1,
			@RequestParam(value = "corp_own_mob2", required = false) String corpOwnMob2,
			@RequestParam(value = "corp_own_mob3", required = false) String corpOwnMob3,
			@RequestParam(value = "corp_email", required = false) String corpEmail,
			@RequestParam(value = "corp_url", required = false) String corpUrl,
			@RequestParam(value = "bank", required = false) String siteBankCd,
			@RequestParam(value = "site_deposit_no", required = false) String siteDepositNo,
			@RequestParam(value = "site_deposit_name", required = false) String siteDepositName,
			@RequestParam(value = "host_id", required = false) String hostId,
			@RequestParam(value = "cont_comments", required = false) String contComments,
			@RequestParam(value = "corp_reg_yn", required = false) String corpRegYn,
			@RequestParam(value = "corp_old_id", required = false) String corpOldId,
			@RequestParam(value = "corp_reg_gubn", required = false) String corpRegGubn,
			@RequestParam(value = "corp_package_yn", required = false) String corpPackageYn,
			@RequestParam(value = "corp_status", required = false) String corpStatus,
			@RequestParam(value = "ecommerce_no", required = false) String ecommerceNo,
			@RequestParam(value = "escrow_yn", required = false) String escrowYn,
			@RequestParam(value = "site_reg_yn", required = false) String siteRegYn,
			@RequestParam(value = "site_desc", required = false) String siteDesc,
			@RequestParam(value = "make_type", required = false) String makeType,
			@RequestParam(value = "admin_reg_dt", required = false) String adminRegDt,
			@RequestParam(value = "admin_comp_id", required = false) String adminCompId,
			@RequestParam(value = "pg_type", required = false) String pgType,
			@RequestParam(value = "host_nm", required = false) String hostNm,
			
			// 기본적으로 데이터베이스에 null로 들어가는 값
			// temp_flg는 "C"로 설정 됌
			
			//@RequestParam(value = "corp_own_no", required = false) String corpOwnNo,
			//@RequestParam(value = "mem_no", required = false) String memNo,
			//@RequestParam(value = "corp_tel", required = false) String corpTel,
			//@RequestParam(value = "corp_fax", required = false) String corpFax,
			//@RequestParam(value = "corp_own_mob", required = false) String corpOwnMob,
			//@RequestParam(value = "temp_flg", required = false) String tempFlg,
			
			@RequestParam(value = "chg_type1", required = false) String chgType1,
			@RequestParam(value = "contact_chg_nm", required = false) String contactChgNm,
			@RequestParam(value = "contact_chg_tel1", required = false) String contactChgTel1,
			@RequestParam(value = "contact_chg_tel2", required = false) String contactChgTel2,
			@RequestParam(value = "contact_chg_tel3", required = false) String contactChgTel3,
			@RequestParam(value = "contact_chg_mob1", required = false) String contactChgMob1,
			@RequestParam(value = "contact_chg_mob2", required = false) String contactChgMob2,
			@RequestParam(value = "contact_chg_mob3", required = false) String contactChgMob3,
			@RequestParam(value = "job_grp1", required = false) String jobGrp1,
			@RequestParam(value = "contact_chg_email", required = false) String contactChgEmail,
			
			@RequestParam(value = "chg_type2", required = false) String chgType2,
			@RequestParam(value = "dev_chg_nm", required = false) String devChgNm,
			@RequestParam(value = "dev_chg_tel1", required = false) String devChgTel1,
			@RequestParam(value = "dev_chg_tel2", required = false) String devChgTel2,
			@RequestParam(value = "dev_chg_tel3", required = false) String devChgTel3,
			@RequestParam(value = "dev_chg_mob1", required = false) String devChgMob1,
			@RequestParam(value = "dev_chg_mob2", required = false) String devChgMob2,
			@RequestParam(value = "dev_chg_mob3", required = false) String devChgMob3,
			@RequestParam(value = "job_grp2", required = false) String jobGrp2,
			@RequestParam(value = "dev_chg_email", required = false) String devChgEmail,
			
			@RequestParam(value = "chg_type3", required = false) String chgType3,
			@RequestParam(value = "sale_chg_nm", required = false) String saleChgNm,
			@RequestParam(value = "sale_chg_tel1", required = false) String saleChgTel1,
			@RequestParam(value = "sale_chg_tel2", required = false) String saleChgTel2,
			@RequestParam(value = "sale_chg_tel3", required = false) String saleChgTel3,
			@RequestParam(value = "sale_chg_mob1", required = false) String saleChgMob1,
			@RequestParam(value = "sale_chg_mob2", required = false) String saleChgMob2,
			@RequestParam(value = "sale_chg_mob3", required = false) String saleChgMob3,
			@RequestParam(value = "job_grp3", required = false) String jobGrp3,
			@RequestParam(value = "sale_chg_email", required = false) String saleChgEmail,

			@RequestParam(value = "chg_type4", required = false) String chgType4,
			@RequestParam(value = "customer_chg_nm", required = false) String customerChgNm,
			@RequestParam(value = "customer_chg_tel1", required = false) String customerChgTel1,
			@RequestParam(value = "customer_chg_tel2", required = false) String customerChgTel2,
			@RequestParam(value = "customer_chg_tel3", required = false) String customerChgTel3,
			@RequestParam(value = "customer_chg_mob1", required = false) String customerChgMob1,
			@RequestParam(value = "customer_chg_mob2", required = false) String customerChgMob2,
			@RequestParam(value = "customer_chg_mob3", required = false) String customerChgMob3,
			@RequestParam(value = "job_grp4", required = false) String jobGrp4,
			@RequestParam(value = "customer_chg_email", required = false) String customerChgEmail,
			
			 Model model) throws Exception {
		
		ModelAndView mav = new ModelAndView("/mall/applyResult");
		TblapplyRegist vo = new TblapplyRegist();
		TblapplyCharge contactVo = new TblapplyCharge();
		TblapplyCharge devVo = new TblapplyCharge();
		TblapplyCharge saleVo = new TblapplyCharge();
		TblapplyCharge csVo = new TblapplyCharge();

		List<TblapplyCharge> list = new ArrayList<TblapplyCharge>();

		Calendar calendar = Calendar.getInstance();
        java.util.Date date = calendar.getTime();
        String today = (new SimpleDateFormat("yyyyMMddHHmmss").format(date));
            
		vo.setAdminCompId(adminCompId);
		vo.setAdminRegDt(null);
		vo.setContComments(contComments);
		vo.setContId(null);
		vo.setCorpAddr1(corpAddr1);
		vo.setCorpAddr2(corpAddr2);
		vo.setCorpBiz(corpBiz);
		vo.setCorpEmail(corpEmail);
		vo.setCorpFax1(corpFax1);
		vo.setCorpFax2(corpFax2);
		vo.setCorpFax3(corpFax3);
		vo.setCorpIndCd(corpIndCd);
		vo.setCorpItem(corpItem);
		vo.setCorpName(corpName);
		vo.setCorpNo(corpNo);
		vo.setCorpOldId(corpOldId);
		vo.setCorpOwnAddr1(corpOwnAddr1);
		vo.setCorpOwnAddr2(corpOwnAddr2);
		vo.setCorpOwnMob1(corpOwnMob1);
		vo.setCorpOwnMob2(corpOwnMob2);
		vo.setCorpOwnMob3(corpOwnMob3);
		vo.setCorpOwnName(corpOwnName);
		vo.setCorpOwnNo("9999999999999");
		vo.setCorpOwnZipcode(corpOwnZipcode.replace("-", ""));
		vo.setCorpPackageYn(corpPackageYn);
		vo.setCorpPostAddr1(corpPostAddr1);
		vo.setCorpPostAddr2(corpPostAddr2);
		vo.setCorpPostZipcode(corpPostZipcode.replace("-", ""));
		vo.setCorpRegDt(today); // 년월일시분초
		vo.setCorpRegGubn(corpRegGubn);
		vo.setCorpRegYn(corpRegYn);
		vo.setCorpSangHo(corpSangHo);
		vo.setCorpStatus(corpStatus);
		vo.setCorpTaxNo(corpTaxNo);
		vo.setCorpTaxNo(corpTaxNo);
		vo.setCorpTel1(corpTel1);
		vo.setCorpTel2(corpTel2);
		vo.setCorpTel3(corpTel3);
		vo.setCorpUrl(corpUrl);
		vo.setCorpZipcode(corpZipcode.replace("-", ""));
		vo.setEcommerceNo(ecommerceNo);
		vo.setEscrowYn(escrowYn);
		vo.setHostId(hostId);
		vo.setHostNm(hostNm);
		vo.setMakeType(makeType);
		vo.setPgType(pgType);
		vo.setSiteBankCd(siteBankCd);
		vo.setSiteDepositName(siteDepositName);
		vo.setSiteDepositNo(siteDepositNo);
		vo.setSiteDesc(siteDesc);
		vo.setSiteRegYn(siteRegYn);
		vo.setTempFlg("C");
		
		///////////////
		// 계약 담당자 ////
		/////////////
		if(contactChgEmail != null) {
			contactVo.setChgDesc("");				// 항상 null
			contactVo.setChgEmail(contactChgEmail);
			contactVo.setChgMob1(contactChgMob1);
			contactVo.setChgMob2(contactChgMob2);
			contactVo.setChgMob3(contactChgMob3);
			contactVo.setChgNm(contactChgNm);
			contactVo.setChgTel1(contactChgTel1);
			contactVo.setChgTel2(contactChgTel2);
			contactVo.setChgTel3(contactChgTel3);
			contactVo.setChgType(chgType1);
			contactVo.setJobGrd(jobGrp1);
			contactVo.setJobGrdNm("");			// 항상 null
			
			list.add(contactVo);
		}
		/////////////////////

		if(devChgEmail != null) {
			devVo.setChgDesc("");				// 항상 null
			devVo.setChgEmail(devChgEmail);
			devVo.setChgMob1(devChgMob1);
			devVo.setChgMob2(devChgMob2);
			devVo.setChgMob3(devChgMob3);
			devVo.setChgNm(devChgNm);
			devVo.setChgTel1(devChgTel1);
			devVo.setChgTel2(devChgTel2);
			devVo.setChgTel3(devChgTel3);
			devVo.setChgType(chgType2);
			devVo.setJobGrd(jobGrp2);
			devVo.setJobGrdNm("");			// 항상 null
			
			list.add(devVo);
		}
		///////////////////////

		if(saleChgEmail != null) {
			saleVo.setChgDesc("");				// 항상 null
			saleVo.setChgEmail(saleChgEmail);
			saleVo.setChgMob1(saleChgMob1);
			saleVo.setChgMob2(saleChgMob2);
			saleVo.setChgMob3(saleChgMob3);
			saleVo.setChgNm(saleChgNm);
			saleVo.setChgTel1(saleChgTel1);
			saleVo.setChgTel2(saleChgTel2);
			saleVo.setChgTel3(saleChgTel3);
			saleVo.setChgType(chgType3);
			saleVo.setJobGrd(jobGrp3);
			saleVo.setJobGrdNm("");			// 항상 null
			
			list.add(saleVo);
		}
		//////////////////////
		
		if(customerChgEmail != null) {
			csVo.setChgDesc("");				// 항상 null
			csVo.setChgEmail(customerChgEmail);
			csVo.setChgMob1(customerChgMob1);
			csVo.setChgMob2(customerChgMob2);
			csVo.setChgMob3(customerChgMob3);
			csVo.setChgNm(customerChgNm);
			csVo.setChgTel1(customerChgTel1);
			csVo.setChgTel2(customerChgTel2);
			csVo.setChgTel3(customerChgTel3);
			csVo.setChgType(chgType4);
			csVo.setJobGrd(jobGrp4);
			csVo.setJobGrdNm("");			// 항상 null
			
			list.add(csVo);
		}
		//////////////////////
		
		String flag = "fail";		// 아이디 중복임  (이전에 검사를 진행함에도)
		String detail = "error";	// 아이디 중복은 아니지만 시스템 오류
		
		System.out.println(vo.getContComments());
		
		boolean canApply = ((officeAdminService.selectAdmin(vo.getContComments())) == null)?
				true : false;
		
		// 등록을 할 수 있다
		if(canApply) {
			flag = "succ";
			boolean isDone = applyRegistService.applyRegist(vo, list);
			detail = (isDone)? "ok" : "error";
			mav.addObject("detail", detail);
			System.out.println("isDone " + isDone);
		}else {
			// 등록 불가능
			// 불가능 한 서비스  (아이디 중복)
		}
		
		mav.addObject("flag", flag);
		
		System.out.println("flag " + flag);
		
		return mav;
	}
}
