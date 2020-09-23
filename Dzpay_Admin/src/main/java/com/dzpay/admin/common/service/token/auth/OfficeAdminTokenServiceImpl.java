package com.dzpay.admin.common.service.token.auth;

import java.util.Map;

import javax.annotation.Resource;

import com.dzpay.admin.common.dao.token.auth.OfficeAdminTokenDao;
import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

public class OfficeAdminTokenServiceImpl implements OfficeAdminTokenService{
	
	@Resource(name = "officeAdminTokenDao")
	OfficeAdminTokenDao officeAdminTokenDao;
	
	
	@Override
	public boolean insertToken(TblofficeAdminToken vo) throws Exception {
		return officeAdminTokenDao.insertToken(vo);
	}

	@Override
	public boolean updateToken(Map<String, Object> map) throws Exception {
		return officeAdminTokenDao.updateOfficeAdminToken(map);
	}

	@Override
	public TblofficeAdminToken selectTokenBySitecodeAndAccessToken(Map<String, Object> map) throws Exception {
		return officeAdminTokenDao.selectBySitecodeAndAccessToken(map);
	}

	@Override
	public TblofficeAdminToken authTokenBySitecodeAndAccessToken(Map<String, Object> map) throws Exception {
		// 
		String adminId = (String) map.get("adminId");
		String siteCode = (String) map.get("sitecode");
		
		return null;
	}
	
	

}
