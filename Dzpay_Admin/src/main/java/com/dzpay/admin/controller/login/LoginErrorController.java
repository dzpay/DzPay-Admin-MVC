package com.dzpay.admin.controller.login;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/error/login")
public class LoginErrorController {

	@RequestMapping(value = "/accessDenied", method = {RequestMethod.GET, RequestMethod.POST})
	public String mainPage(Model model, HttpServletResponse response) {
		return "/login/accessDenied";
	}
	
	
}

