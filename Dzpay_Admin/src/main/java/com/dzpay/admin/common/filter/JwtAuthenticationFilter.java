package com.dzpay.admin.common.filter;

import java.io.IOException;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import com.dzpay.admin.common.dao.token.auth.OfficeAdminTokenDao;
import com.dzpay.admin.security.JwtTokenProvider;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JwtAuthenticationFilter extends AbstractAuthenticationProcessingFilter {
	
	protected JwtAuthenticationFilter(AuthenticationManager manager, String defaultFilterProcessesUrl) {
		super("/admin/main.do");
		setFilterProcessesUrl("/admin/main.do");
		setAuthenticationManager(manager);
	}

	@Resource(name = "jwtTokenProvider")
	private JwtTokenProvider jwtTokenProvider;

	@Resource(name = "officeAdminTokenDao")
	private OfficeAdminTokenDao officeAdminTokenDao;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		String token = null;
		int status;
		
		Cookie[] cookies = req.getCookies();

		if (cookies != null) {

			boolean hasToken = false;

			for (Cookie cookie : cookies) {
				// 인증토큰 탐색
				if ("X-AUTH-TOKEN".equals(cookie.getName())) {
					System.out.println("[Token filter]--\n{X-AUTH-TOKEN}의 값 : " + cookie.getValue());
					token = cookie.getValue();
					hasToken = true;

					status = jwtTokenProvider.validateToken(token);
					
					// 토큰 만료
					// 이전 토큰 삭제
					if (status == 1) {
						cookie.setMaxAge(0);
						res.addCookie(cookie);

						System.out.println("[Token Filter]-- 토큰이 만료되었습니다 . 업데이트를 진행합니다...");
						String[] split_string = token.split("\\.");
						String base64EncodedHeader = split_string[0];
						String base64EncodedBody = split_string[1];
						// String base64EncodedSignature = split_string[2];

						ObjectMapper mapper = new ObjectMapper();

						Encoder encoder = Base64.getEncoder();
						Decoder decoder = Base64.getDecoder();

						String body = new String(decoder.decode(base64EncodedBody));
						Map<String, String> bodyMap = mapper.readValue(body, Map.class);
						Map<String, Object> map = new HashMap<String, Object>();

						String adminId = bodyMap.get("sub");
						String role = bodyMap.get("role");
						String newToken = jwtTokenProvider.updateToken(adminId, role, null);

						System.out.println(map);
						map.put("adminid", adminId);
						map.put("sitecode", role);
						map.put("accesstoken", newToken);
						System.out.println(map);

						// 데이터베이스 토큰 업데이트
						try {
							officeAdminTokenDao.updateOfficeAdminToken(map);
						} catch (Exception e) {
							e.printStackTrace();
						}

						res.addHeader("Set-Cookie",
								"X-AUTH-TOKEN=" + newToken + "; secure; path=/dzpay; SameSite=None; HttpOnly");
						System.out.println("[Token Filter]-- 업데이트를 성공적이르 마쳤습니다..");
					}
					// 토큰 오류
					else if(status == 2) {
						res.sendRedirect("/dzpay/init/login.do");
					}
					// 허용 가능한 토큰
					else if(status == 0){
						System.out.println("[Token filter]-- 허용되는 토큰 통과");
						
						// 해당 아래 부분을 추가하게 되면
						// 스프링 내부 인증 객체에 토큰을 추가하게 되어
						// 로그아웃 이후의 인증에도 인증 통과가 이루어질 수 있다.
						
						//Authentication authentication = jwtTokenProvider.getAuthentication(token);
						//SecurityContextHolder.getContext().setAuthentication(authentication);
					}
				}
			}
			if (!hasToken) {
				// X-AUTH-TOKEN이 존재하지 않아 인증을 진행하지 못함
				// redirect 고안


				// 인증되지 않았지만 필터에 의해서
				// 로그인 페이지로 이동하지 않는 URI들
				if (!req.getRequestURI().equals("/dzpay/") && !req.getRequestURI().contains("/init/")
						&& !req.getRequestURI().contains("/terms/") && !req.getRequestURI().contains("/resources/")
						&& !req.getRequestURI().contains("/mall/")) {
					System.out.println("[Token Filter]-- 비인증 ");
					System.out.println(req.getRequestURI());
					res.sendRedirect("/dzpay/init/login.do");
				}
			}
		}

		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Methods", "POST");
		res.setHeader("Access-Control-Max-Age", "3600");
		res.setHeader("Access-Control-Allow-Headers", "x-requested-with");

		chain.doFilter(request, res);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException, IOException, ServletException {
		System.out.println("!!");
		return null;
	}


}
