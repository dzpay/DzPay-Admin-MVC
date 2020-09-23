package com.dzpay.admin.common.dao.token.auth;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

@Repository("officeAdminTokenDao")
public class OfficeAdminTokenDao extends AbstractDAO{

	// ��ū ��ȸ
	public TblofficeAdminToken selectBySitecodeAndAccessToken(Map<String, Object> map) throws Exception{
		TblofficeAdminToken token = (TblofficeAdminToken) selectOne("TblofficeAdminTokenMapper_SQL.selectBySitecodeAndAccessToken", map);
		if(token == null) {
			System.out.println("not found token");
			return null;
		}
		return token;
	}
	
	// ��ū ��ȸ
	public TblofficeAdminToken selectByAdminidAndSitecode(Map<String, Object> map) throws Exception{
		System.out.println(map.toString());
		TblofficeAdminToken token = (TblofficeAdminToken) selectOne("TblofficeAdminTokenMapper_SQL.selectByAdminidAndSitecode", map);
		if(token == null) {
			System.out.println("not found token");
			return null;
		}
		return token;
	}
	
		
	// ��ū ����
	public boolean insertToken(TblofficeAdminToken vo) {
		int res = (int) insert("TblofficeAdminTokenMapper_SQL.insert", vo);
		return (res == 1)? true : false;
	}
	
	// ��ū ������Ʈ
	public boolean updateOfficeAdminToken(Map<String, Object> map) throws Exception{
		int res = (int) update("TblofficeAdminTokenMapper_SQL.updateByAdminidAndSitecode", map);
		return (res == 1)? true : false;
	}
	
	// ���� ������ ��ȸ
	public List<Map<String, Object>> selectAdminSite(String sitecode){
		return null;
	}
}
