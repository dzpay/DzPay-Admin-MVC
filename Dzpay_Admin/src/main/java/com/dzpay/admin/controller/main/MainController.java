package com.dzpay.admin.controller.main;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.annotation.Resource;
import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.service.OfficeAdminService;

@Controller
@RequestMapping("/admin")
public class MainController {

	@Resource(name = "officeAdminService")
	OfficeAdminService officeAdminService;

	@Inject
	private Md5PasswordEncoder pe;

	@RequestMapping(value = "/main", method = { RequestMethod.GET, RequestMethod.POST })
	public String mainPage(Model model, @CookieValue(value="X-AUTH-TOKEN", required= false) Cookie token, HttpServletRequest request, HttpServletResponse response) {
		if(token != null) {
			response.addCookie(token);
			System.out.println("get token : " + token.getValue());
		}
		return "main";
	}

	@RequestMapping(value = "/master", method = { RequestMethod.GET, RequestMethod.POST })
	public String masterPage(Model model, HttpServletRequest request, HttpServletResponse response) {
		return "/admin/master/master";
	}

	// 최고 관리자 계정 생성기
	@RequestMapping(value = "/master/user", method = {RequestMethod.POST})
	public void enrollUser(
			@RequestParam String id,
			@RequestParam String password,
			@RequestParam String admin_gp_no,
			@RequestParam String admin_nm,
			@RequestParam String sub_dept,
			@RequestParam String job_tit,
			@RequestParam String email,
			@RequestParam String comp_no,
			@RequestParam String mob_no,
			@RequestParam String fax_no,
			@RequestParam String site_cd,
			@RequestParam String corp_cd,
			@RequestParam String view_type
			, Model model, HttpServletResponse response, HttpServletRequest request) throws Exception {
		
		TblofficeAdmin auth = (TblofficeAdmin) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		TblofficeAdmin vo = new TblofficeAdmin(); 
        String encodedPw = pe.encodePassword((String) password, admin_nm);

		vo.setAdminId(id);
        vo.setAdminPwd(encodedPw);
		vo.setAdminGpNo(admin_gp_no);
		vo.setAdminNm(admin_nm);
		vo.setSubDept(sub_dept);
		vo.setJobTit(job_tit);
		vo.setEmail(email);
		vo.setCompTel(comp_no);
		vo.setMobTel(mob_no);
		vo.setFaxTel(fax_no);
		vo.setSiteCd(site_cd);
		vo.setCorpId(corp_cd);
		vo.setViewType(view_type);
		
		// 고정 값
		Calendar calendar = Calendar.getInstance();
        java.util.Date date = calendar.getTime();
        
		vo.setUseYn("Y");
		vo.setRegDt(date);
		vo.setShopType("ZZ01");
		vo.setChurchYn("N");
		
		vo.setRegId(auth.getAdminId());
		vo.setAdminType(auth.getAdminType());
        
		boolean canEnroll = (officeAdminService.selectAdmin(vo.getAdminId()) == null)?
				true : false;	
		
		response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        
		if(canEnroll) {
			if(officeAdminService.insertAdmin(vo))
				out.println("<script>alert('가맹점 관리자 계정 등록에 성공했습니다'); history.go(-1);</script>");
			else
				out.println("<script>alert('가맹점 관리자 계정 등록에 실패했습니다'); history.go(-1);</script>");
			out.flush();
		}
		else {
			out.println("<script>alert('중복되는 아이디입니다'); history.go(-1);</script>");
			out.flush();
		}
	}

}
