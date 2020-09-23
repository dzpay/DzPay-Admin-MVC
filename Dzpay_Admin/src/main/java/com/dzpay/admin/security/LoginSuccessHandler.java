package com.dzpay.admin.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

public class LoginSuccessHandler implements AuthenticationSuccessHandler {

	private RequestCache requestCache = new HttpSessionRequestCache();
	private RedirectStrategy redirectStratgy = new DefaultRedirectStrategy();

	private String loginidname;
	private String defaultUrl;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		System.out.println("-- success login handler ...");
		System.out.println(authentication.getPrincipal());
		clearAuthentiationAttributes(request);

		String token = authentication.getPrincipal().toString();
		
		// spring 3.1 ��Ű ���� ���� �Ұ���
		// java�ܿ��� �ذ�������
		// secure ���� 
		response.addHeader("Set-Cookie",  "X-AUTH-TOKEN="+token+";  path=/dzpay; SameSite=None; HttpOnly");
		resultRedirectStrategy(request, response, authentication);
	}

	public String getLoginidname() {
		return loginidname;
	}

	public void setLoginidname(String loginidname) {
		this.loginidname = loginidname;
	}

	public String getDefaultUrl() {
		return defaultUrl;
	}

	public void setDefaultUrl(String defaultUrl) {
		this.defaultUrl = defaultUrl;
	}

	// ��� �������̵� �α��� ���� �ÿ�
	// ��û ĳ�ÿ� ����Ǿ� �ִ� �������� �̵�
	protected void resultRedirectStrategy(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		SavedRequest savedRequest = requestCache.getRequest(request, response);

		if (savedRequest != null) {
			String targetUrl = savedRequest.getRedirectUrl();
			redirectStratgy.sendRedirect(request, response, targetUrl);
		} else {
			redirectStratgy.sendRedirect(request, response, defaultUrl);
		}

	}

	// �α��� ���� ���� ���� �����
	protected void clearAuthentiationAttributes(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null)
			return;
		session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
	}

}