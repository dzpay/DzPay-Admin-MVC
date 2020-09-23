package com.dzpay.admin.security;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dzpay.admin.common.dao.auth.account.OfficeAdminDao;
import com.dzpay.admin.common.dao.token.auth.OfficeAdminTokenDao;
import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

@Service("customUserDetailService")
public class CustomUserDetailService implements UserDetailsService {

	@Resource(name = "officeAdminDao")
	private OfficeAdminDao officeAdminDao;

	@Resource(name = "officeAdminTokenDao")
	private OfficeAdminTokenDao officeAdminTokenDao;
	
	@Override
	public TblofficeAdmin loadUserByUsername(String id) throws UsernameNotFoundException {
		TblofficeAdmin vo = new TblofficeAdmin();
		//TblofficeAdminToken hasToken = new TblofficeAdminToken();
		
		try {
			vo = officeAdminDao.selectOfficeAdmin(id);
			//HashMap<String, Object> map = new HashMap<String, Object>();

			if(vo == null) {
				throw new UsernameNotFoundException(id);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return vo;
	}

}