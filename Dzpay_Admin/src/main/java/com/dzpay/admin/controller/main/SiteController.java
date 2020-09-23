package com.dzpay.admin.controller.main;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/site")
public class SiteController {

	@RequestMapping(value = "/main", method = {RequestMethod.GET, RequestMethod.POST})
	public String mainPage(Model model, HttpServletResponse response) {
		return "site";
	}
	
	
}
