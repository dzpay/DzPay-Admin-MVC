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

		// ��ϵ��� ���� �����
		if (tblofficeAdmin == null) {
			throw new UsernameNotFoundException(userId);
		}

		System.out.println("[����������-�����ͺ��̽�] ���̵� : " + tblofficeAdmin.getAdminId());
		try {
			System.out.println(
					"[����������-�����ͺ��̽�] ���� : " + new String(tblofficeAdmin.getAdminGpNo().getBytes("utf-8"), "euc-kr"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.out.println("[���� ������-�����ͺ��̽�] ��ȣ : " + tblofficeAdmin.getAdminPwd());
		System.out.println("[����������-�����ͺ��̽�] ��� : " + tblofficeAdmin.getAdminType());
		System.out.println("[���������� -�����] ���̵�: " + authToken.getName());
		System.out.println("[����������-�����] ��ȣ: " + authToken.getCredentials());
		
		// fail to login
		if (!matchPassword(tblofficeAdmin.getAdminPwd(), authToken.getCredentials(), userId)) {
			System.out.println("���̵� Ȥ�� ��й�ȣ ����");
			throw new BadCredentialsException("not matching username or password"); // error page
		}
		// succ to login
		else {
			// token process
			try {
				String accessToken = processToken(tblofficeAdmin, null);
				System.out.println("[���� ��ū] : " + accessToken);
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
		System.out.println("[����������-�����] ��ȣȭ�� ��ȣ :" + encodedPw);
		return password.equals(encodedPw);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
	}

	// ����� ���� Ȯ�� ��� ������ ��ū �߱�
	public String processToken(TblofficeAdmin adminData, List<String> etcData) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();
		TblofficeAdminToken tblofficeAdminToken = new TblofficeAdminToken();
		String newToken;

		map.put("adminid", adminData.getAdminId());
		map.put("sitecode", adminData.getSiteCd());

		// �α��� �� ������� ��ū�� �����ϴ°�?
		TblofficeAdminToken userToken = officeAdminTokenDao.selectByAdminidAndSitecode(map);
		map.clear();
		
		// �����ϴ� ���
		if (userToken != null) {
			// ��ȿ�Ⱓ  üũ
			int status = jwtTokenProvider.validateToken(userToken.getAccesstoken());
			// ����Ⱓ ���� ����
			if(status == 0){
				System.out.println("[���� ������-��ū]-- ���� ó���Ǿ����ϴ� ..");
				return userToken.getAccesstoken();
			}
			// ������Ʈ
			else if(status == 1){
				 System.out.println("[���� ������-��ū]-- ������Ʈ.. "+adminData.getAdminId()+"'�� ��ū:"+ userToken.getAccesstoken() +"...");
				 newToken = jwtTokenProvider.updateToken(adminData.getAdminId(), adminData.getAdminGpNo(), null);
				 
				 map.put("adminid", adminData.getAdminId());
				 map.put("sitecode", adminData.getSiteCd());
				 map.put("accesstoken", newToken);
				 
				 // �����ͺ��̽� ��ū ������Ʈ
				 officeAdminTokenDao.updateOfficeAdminToken(map);
				 return newToken;
			}
			// status == 2
			else {
				System.out.println("[���� ������-��ū]-- ��ū�� ������ �ֽ��ϴ� " + adminData.getAdminId()+"'�� ��ū:"+ userToken.getAccesstoken() +"...");
				throw new BadCredentialsException("��ū�� ������ �ֽ��ϴ�"); // error page
			}
		} 
		// �ű� ��ū ���
		else{
			System.out.println("[����������-��ū]-- ���� ���� ����Դϴ�...");
			
			List<String> list = new ArrayList<>();
			list.add(adminData.getAdminGpNo());
			list.add(adminData.getAdminNm());
			list.add(adminData.getAdminType());
			if(etcData != null)
				list.addAll(etcData);
			
			// ���̵� , ����, ��Ÿ ����
			newToken = jwtTokenProvider.createToken(adminData.getAdminId(), adminData.getAdminGpNo(), null);
			
			tblofficeAdminToken.setAccesstoken(newToken);
			tblofficeAdminToken.setAdminid(adminData.getAdminId());
			tblofficeAdminToken.setSitecode(adminData.getSiteCd());

			officeAdminTokenDao.insertToken(tblofficeAdminToken);
			
			return newToken;
		}
	}

}
