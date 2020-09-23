/*
 * written by : rojae
 * description : API 금일 통계 현황 서비스
 */
package com.dzpay.admin.controller;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.service.OfficeAdminService;
import com.dzpay.admin.security.CustomUserDetailService;

/**
 * api 서비스 금일 통계 현황판 결제 수단 별 통계 서비스
 */
@Controller
public class HomeController {

	@Resource(name = "officeAdminService")
	OfficeAdminService officeAdminService;

	@Resource(name = "customUserDetailService")
	CustomUserDetailService customeUserDetailService;

	@RequestMapping(value = "/init/login", method = { RequestMethod.GET })
	public String loginPage(Model model, HttpServletResponse response) {
		return "login/login";
	}
	
	@RequestMapping(value = "/init/login-fail", method = { RequestMethod.GET, RequestMethod.POST })
	public String loginFail(Model model) {
		return "login/fail";
	}

	@RequestMapping(value = "/init/search-user", method = { RequestMethod.GET })
	public String searchUserInfo(Model model) {
		return "login/search-user-info";
	}

	@RequestMapping(value = "/init/search-user", method = { RequestMethod.POST })
	public ModelAndView searchResult(@RequestParam(value = "s_tax") String corpTaxNo,
			@RequestParam(value = "s_email") String email,
			@RequestParam(value = "s_id", defaultValue = "", required = false) String adminId, Model model,
			HttpServletResponse response, HttpServletRequest request) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();

		ModelAndView mav = new ModelAndView("login/search-user-info");

		map.put("corpTaxNo", corpTaxNo);
		map.put("email", email);

		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Map<String, Object> param = new HashMap<String, Object>();
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		// 아이디 찾기
		if (adminId.equals("") || adminId == null) {
			list = officeAdminService.selectByCorpTaxIdAndEmail(map);
		}
		// 비밀번호 찾기
		else {
			map.put("adminId", adminId);
			param = officeAdminService.registAuthCode(map);
			if (param == null) {
				out.println(
						"<script>alert('인증코드 발급에 실패하였습니다. 다시 시도해주세요'); location.href='/dzpay/init/search-user.do';</script> ");
				out.flush();
			} else {
				ModelAndView authPage = new ModelAndView("login/auth"); // page controller -> init/search-user/auth.do
				authPage.addObject("msg", "인증코드 발급에 성공했습니다. 인증코드를 입력하세요");
				authPage.addObject("list", map);
				System.out.println(map.toString());
				return authPage;
			}
		}

		System.out.println(list.toString());

		mav.addObject("list", list);

		return mav;
	}

	@RequestMapping(value = "/init/search-user/auth", method = { RequestMethod.POST })
	public ModelAndView authCode(@RequestParam Map<String, Object> map, HttpServletResponse response,
			HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		System.out.println(map.toString());
		// 인증코드 검사 페이지
		if (map.get("auth-code").equals("") || map.get("auth-code") == "") {
			mav.setViewName("/login/auth");
			return mav;
		}
		// 인증 코드 검사 단계
		else {
			boolean okAuth = officeAdminService.doAuth(map);
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();

			if (okAuth) {
				// view 재설정
				mav.setViewName("/login/one-time-password");
				mav.addObject("list", map);
				// 임시비밀번호 생성, sms 전송
				boolean tempPwdRes = officeAdminService.generateTempPassword(map);
				if (tempPwdRes)
					return mav;
				else
					new Exception();
			} else {
				out.println(
						"<script>alert('인증코드 값이 틀렸습니다. 다시 시도해주세요'); location.href='/dzpay/init/search-user.do';</script> ");
				out.flush();
			}
			// 도달할 수 없는 영역
			return null;
		}
	}

	// 페이지 이동 시, 중복 로그인 발견
	@RequestMapping(value = "/init/login/session-over", method = { RequestMethod.POST, RequestMethod.GET })
	public void sessionOver(HttpServletResponse response, HttpServletRequest request) throws Exception {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		// spring security session-management에 의해서 도달
		out.println("<script>alert('외부 로그인 시도를 발견했습니다. 강제 로그아웃을 진행합니다.'); location.href='/dzpay/init/login.do';</script>  ");
		out.flush();
		return;
	}

	@RequestMapping(value = "/terms/access-term", method = RequestMethod.GET)
	public String accessTerm(Model model) {
		return "terms/accessTerm";
	}

	@RequestMapping(value = "/terms/privacy-term", method = RequestMethod.GET)
	public String privacyTerm(Model model) {
		return "terms/privacyTerm";
	}

	@RequestMapping(value = "/terms/billing-term", method = RequestMethod.GET)
	public String billingTerm(Model model) {
		return "terms/billingTerm";
	}

	@RequestMapping(value = "/terms/payment-history", method = RequestMethod.GET)
	public String paymentHistory(Model model) {
		return "terms/paymentHistory";
	}

	@RequestMapping(value = "/terms/escrow-banner", method = RequestMethod.GET)
	public String escrowBanner(Model model) {
		return "terms/escrowBanner";
	}

	@RequestMapping(value = "/terms/service-request", method = RequestMethod.GET)
	public String serviceRequest(Model model) {
		return "terms/serviceRequest";
	}

}
