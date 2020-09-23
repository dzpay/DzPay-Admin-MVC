package com.dzpay.admin.security;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.dzpay.admin.common.dao.token.auth.OfficeAdminTokenDao;
import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

@Component(value = "customAuthenticationProvider")
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Resource(name = "customUserDetailService")
	private CustomUserDetailService customUserDetailService;

	@Resource
	private JwtTokenProvider jwtTokenProvider;

	@Resource(name = "officeAdminTokenDao")
	private OfficeAdminTokenDao officeAdminTokenDao;

	@Inject
	private Md5PasswordEncoder pe;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		UsernamePasswordAuthenticationToken authToken = (UsernamePasswordAuthenticationToken) authentication;

		String userId = authToken.getPrincipal().toString();
		System.out.println(userId);

		TblofficeAdmin tblofficeAdmin = new TblofficeAdmin();
		TblofficeAdminToken tblofficeAdminToken = new TblofficeAdminToken();

		tblofficeAdmin = customUserDetailService.loadUserByUsername(userId);

		// 등록되지 않은 사용자
		if (tblofficeAdmin == null) {
			throw new UsernameNotFoundException(userId);
		}

		System.out.println("[인증관리자-데이터베이스] 아이디 : " + tblofficeAdmin.getAdminId());
		try {
			System.out.println(
					"[인증관리자-데이터베이스] 권한 : " + new String(tblofficeAdmin.getAdminGpNo().getBytes("utf-8"), "euc-kr"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.out.println("[인증 관리자-데이터베이스] 암호 : " + tblofficeAdmin.getAdminPwd());
		System.out.println("[인증관리자-데이터베이스] 담당 : " + tblofficeAdmin.getAdminType());
		System.out.println("[인증관리자 -사용자] 아이디: " + authToken.getName());
		System.out.println("[인증관리자-사용자] 암호: " + authToken.getCredentials());
		
		// fail to login
		if (!matchPassword(tblofficeAdmin.getAdminPwd(), authToken.getCredentials(), userId)) {
			System.out.println("아이디 혹은 비밀번호 오류");
			throw new BadCredentialsException("not matching username or password"); // error page
		}
		// succ to login
		else {
			// token process
			try {
				String accessToken = processToken(tblofficeAdmin, null);
				System.out.println("[수신 토큰] : " + accessToken);
				tblofficeAdminToken.setAccesstoken(accessToken);
				tblofficeAdminToken.setAdminid(tblofficeAdmin.getAdminId());
				tblofficeAdminToken.setSitecode(tblofficeAdmin.getSiteCd());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		//System.out.println("Bean's Token : " + tblofficeAdminToken.getAccesstoken());
		//System.out.println("Bean's Admin Id : " + tblofficeAdminToken.getAdminid());
		//System.out.println("Bean's site code : " + tblofficeAdminToken.getSitecode());
		
		tblofficeAdminToken.setAccesstoken(tblofficeAdminToken.getAccesstoken().trim());
		
		@SuppressWarnings("unchecked")
		List<GrantedAuthority> authorities = (List<GrantedAuthority>) tblofficeAdmin.getAuthorities();

		return new UsernamePasswordAuthenticationToken(tblofficeAdminToken.getAccesstoken(), null, authorities);
	}

	private boolean matchPassword(String password, Object credentials, String inName) {
		String encodedPw = pe.encodePassword((String) credentials, inName);
		System.out.println("[인증관리자-사용자] 암호화된 암호 :" + encodedPw);
		return password.equals(encodedPw);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
	}

	// 사용자 계정 확인 통과 이후의 토큰 발급
	public String processToken(TblofficeAdmin adminData, List<String> etcData) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();
		TblofficeAdminToken tblofficeAdminToken = new TblofficeAdminToken();
		String newToken;

		map.put("adminid", adminData.getAdminId());
		map.put("sitecode", adminData.getSiteCd());

		// 로그인 한 사용자의 토큰이 존재하는가?
		TblofficeAdminToken userToken = officeAdminTokenDao.selectByAdminidAndSitecode(map);
		map.clear();
		
		// 존재하는 경우
		if (userToken != null) {
			// 유효기간  체크
			int status = jwtTokenProvider.validateToken(userToken.getAccesstoken());
			// 유료기간 문제 없음
			if(status == 0){
				System.out.println("[인증 관리자-토큰]-- 정상 처리되었습니다 ..");
				return userToken.getAccesstoken();
			}
			// 업데이트
			else if(status == 1){
				 System.out.println("[인증 관리자-토큰]-- 업데이트.. "+adminData.getAdminId()+"'의 토큰:"+ userToken.getAccesstoken() +"...");
				 newToken = jwtTokenProvider.updateToken(adminData.getAdminId(), adminData.getAdminGpNo(), null);
				 
				 map.put("adminid", adminData.getAdminId());
				 map.put("sitecode", adminData.getSiteCd());
				 map.put("accesstoken", newToken);
				 
				 // 데이터베이스 토큰 업데이트
				 officeAdminTokenDao.updateOfficeAdminToken(map);
				 return newToken;
			}
			// status == 2
			else {
				System.out.println("[인증 관리자-토큰]-- 토큰에 문제가 있습니다 " + adminData.getAdminId()+"'의 토큰:"+ userToken.getAccesstoken() +"...");
				throw new BadCredentialsException("토큰에 문제가 있습니다"); // error page
			}
		} 
		// 신규 토큰 등록
		else{
			System.out.println("[인증관리자-토큰]-- 최초 접근 등록입니다...");
			
			List<String> list = new ArrayList<>();
			list.add(adminData.getAdminGpNo());
			list.add(adminData.getAdminNm());
			list.add(adminData.getAdminType());
			if(etcData != null)
				list.addAll(etcData);
			
			// 아이디 , 권한, 기타 정보
			newToken = jwtTokenProvider.createToken(adminData.getAdminId(), adminData.getAdminGpNo(), null);
			
			tblofficeAdminToken.setAccesstoken(newToken);
			tblofficeAdminToken.setAdminid(adminData.getAdminId());
			tblofficeAdminToken.setSitecode(adminData.getSiteCd());

			officeAdminTokenDao.insertToken(tblofficeAdminToken);
			
			return newToken;
		}
	}

}
