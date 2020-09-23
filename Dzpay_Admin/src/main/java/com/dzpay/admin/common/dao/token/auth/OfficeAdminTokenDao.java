package com.dzpay.admin.common.dao.token.auth;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.token.auth.TblofficeAdminToken;

@Repository("officeAdminTokenDao")
public class OfficeAdminTokenDao extends AbstractDAO{

	// 토큰 조회
	public TblofficeAdminToken selectBySitecodeAndAccessToken(Map<String, Object> map) throws Exception{
		TblofficeAdminToken token = (TblofficeAdminToken) selectOne("TblofficeAdminTokenMapper_SQL.selectBySitecodeAndAccessToken", map);
		if(token == null) {
			System.out.println("not found token");
			return null;
		}
		return token;
	}
	
	// 토큰 조회
	public TblofficeAdminToken selectByAdminidAndSitecode(Map<String, Object> map) throws Exception{
		System.out.println(map.toString());
		TblofficeAdminToken token = (TblofficeAdminToken) selectOne("TblofficeAdminTokenMapper_SQL.selectByAdminidAndSitecode", map);
		if(token == null) {
			System.out.println("not found token");
			return null;
		}
		return token;
	}
	
		
	// 토큰 삽입
	public boolean insertToken(TblofficeAdminToken vo) {
		int res = (int) insert("TblofficeAdminTokenMapper_SQL.insert", vo);
		return (res == 1)? true : false;
	}
	
	// 토큰 업데이트
	public boolean updateOfficeAdminToken(Map<String, Object> map) throws Exception{
		int res = (int) update("TblofficeAdminTokenMapper_SQL.updateByAdminidAndSitecode", map);
		return (res == 1)? true : false;
	}
	
	// 하위 가맹점 조회
	public List<Map<String, Object>> selectAdminSite(String sitecode){
		return null;
	}
}
