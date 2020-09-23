package com.dzpay.admin.common.service;

import java.util.List;
import java.util.Map;

import com.dzpay.admin.common.dto.account.TblofficeAdmin;

public interface OfficeAdminService {
	TblofficeAdmin selectAdmin(String adminId) throws Exception;
	
	boolean insertAdmin(TblofficeAdmin vo) throws Exception;
	
	TblofficeAdmin selectAdmin_ByAdminIdAndAdminPwd(TblofficeAdmin vo) throws Exception;
	
	List<Map<String, Object>> selectByCorpTaxIdAndEmail(Map<String, Object> map) throws Exception;
	
	Map<String, Object> registAuthCode(Map<String, Object> map) throws Exception;

	boolean doAuth(Map<String, Object> map) throws Exception;
	
	boolean generateTempPassword(Map<String, Object> map) throws Exception;
}

