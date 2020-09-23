/*
 * written by : rojae
 * description : API ���� ��� ��Ȳ ����
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
 * api ���� ���� ��� ��Ȳ�� ���� ���� �� ��� ����
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

		// ���̵� ã��
		if (adminId.equals("") || adminId == null) {
			list = officeAdminService.selectByCorpTaxIdAndEmail(map);
		}
		// ��й�ȣ ã��
		else {
			map.put("adminId", adminId);
			param = officeAdminService.registAuthCode(map);
			if (param == null) {
				out.println(
						"<script>alert('�����ڵ� �߱޿� �����Ͽ����ϴ�. �ٽ� �õ����ּ���'); location.href='/dzpay/init/search-user.do';</script> ");
				out.flush();
			} else {
				ModelAndView authPage = new ModelAndView("login/auth"); // page controller -> init/search-user/auth.do
				authPage.addObject("msg", "�����ڵ� �߱޿� �����߽��ϴ�. �����ڵ带 �Է��ϼ���");
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
		// �����ڵ� �˻� ������
		if (map.get("auth-code").equals("") || map.get("auth-code") == "") {
			mav.setViewName("/login/auth");
			return mav;
		}
		// ���� �ڵ� �˻� �ܰ�
		else {
			boolean okAuth = officeAdminService.doAuth(map);
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();

			if (okAuth) {
				// view �缳��
				mav.setViewName("/login/one-time-password");
				mav.addObject("list", map);
				// �ӽú�й�ȣ ����, sms ����
				boolean tempPwdRes = officeAdminService.generateTempPassword(map);
				if (tempPwdRes)
					return mav;
				else
					new Exception();
			} else {
				out.println(
						"<script>alert('�����ڵ� ���� Ʋ�Ƚ��ϴ�. �ٽ� �õ����ּ���'); location.href='/dzpay/init/search-user.do';</script> ");
				out.flush();
			}
			// ������ �� ���� ����
			return null;
		}
	}

	// ������ �̵� ��, �ߺ� �α��� �߰�
	@RequestMapping(value = "/init/login/session-over", method = { RequestMethod.POST, RequestMethod.GET })
	public void sessionOver(HttpServletResponse response, HttpServletRequest request) throws Exception {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		// spring security session-management�� ���ؼ� ����
		out.println("<script>alert('�ܺ� �α��� �õ��� �߰��߽��ϴ�. ���� �α׾ƿ��� �����մϴ�.'); location.href='/dzpay/init/login.do';</script>  ");
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
