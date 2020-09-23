package com.dzpay.admin.common.service.token.auth;

import java.util.Map;

import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

public interface OfficeAdminTokenService {
	public boolean insertToken(TblofficeAdminToken vo) throws Exception;

	public boolean updateToken(Map<String, Object> map) throws Exception;
	
	public TblofficeAdminToken selectTokenBySitecodeAndAccessToken(Map<String, Object> map) throws Exception;
	
	public TblofficeAdminToken authTokenBySitecodeAndAccessToken(Map<String, Object> map) throws Exception;
	
}
