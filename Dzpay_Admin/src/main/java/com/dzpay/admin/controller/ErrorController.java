package com.dzpay.admin.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ErrorController {
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	public ModelAndView renderErrorPage(HttpServletRequest httpRequest) {
		System.out.println("errorController");

		String pageName = "";
		String errorMsg = "";
		String errorDetail = "";
		
		ModelAndView errorPage = new ModelAndView(pageName);

		int httpErrorCode = getErrorCode(httpRequest);

		switch (httpErrorCode) {
		case 400: {
			errorPage.setViewName("/error/400");
			errorMsg = "Http Error Code: 400. Bad Request";
			errorDetail = "잘못된 요청입니다  (bad Request)";
			break;
		}
		case 401: {
			errorPage.setViewName("/error/401");
			errorMsg = "Http Error Code: 401. Unauthorized";
			errorDetail = "자원 요청 에러입니다.  (Unauthrozed)";
			break;
		}
		case 403: {
			errorPage.setViewName("/error/403");
			errorMsg = "Http Error Code: 403. Access Denied";
			errorDetail = "엑세스가 거부되었습니다.  (Access Denied)";
			break;
		}
		case 404: {
			errorPage.setViewName("/error/404");
			errorMsg = "Http Error Code: 404. Resource not found";
			errorDetail = "자원을 찾을 수 없습니다.  (not found)";
			break;
		}
		case 500: {
			errorPage.setViewName("/error/500");
			errorMsg = "Http Error Code: 500. Internal Server Error";
			errorDetail = "서버에 문제가 발생하였습니다. 문제가 계속되면 고객센터에 문의해주시기 바랍니다.  (Internal Server Error)";
			break;
		}
		}
		errorPage.addObject("errorMsg", errorMsg);
		errorPage.addObject("errorDetail", errorDetail);

		return errorPage;
	}

	private int getErrorCode(HttpServletRequest httpRequest) {
		return (Integer) httpRequest.getAttribute("javax.servlet.error.status_code");
	}
}
