package com.dzpay.admin.common.dao.auth.account;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.account.TblofficeAdmin;


@Repository("officeAdminDao")
public class OfficeAdminDao extends AbstractDAO{
	
	public TblofficeAdmin selectOfficeAdmin(String adminCompId) throws Exception{
		TblofficeAdmin res = (TblofficeAdmin) selectOne("TblofficeAdminMapper_SQL.selectOne", adminCompId);
		return (res == null)? null : res;
	}
	
	public boolean insertOfficeAdmin(TblofficeAdmin vo) throws Exception{
		int res = (int) insert("TblofficeAdminMapper_SQL.insert", vo);
		return (res != 1)? false : true;
	}
	
	public TblofficeAdmin selectOfficeAdmin_ByAdminIdAndAdminPwd(TblofficeAdmin vo) throws Exception{
		TblofficeAdmin res = (TblofficeAdmin) selectOne("TblofficeAdminMapper_SQL.selectOneByAdminIdAndAdminPwd", vo);
		return (res == null)? null : res;
	}
	
	// 아이디 찾기
	@SuppressWarnings("unchecked")
	public List<Map<String, Object>> selectByCorpIdAndEmail(Map<String, Object> map){
		return (List<Map<String, Object>>)selectList("TblofficeAdminMapper_SQL.selectByCorpIdAndEmail", map);
	}
	
	// 비밀번호 찾기 혹은 특정 계정이 존재하는지 조회
	// return phoneNumber
	@SuppressWarnings("unchecked")
	public Map<String, Object> selectByCorpIdAndEmailAndId(Map<String, Object> map) {
		return (Map<String, Object>) selectOne("TblofficeAdminMapper_SQL.selectByCorpIdAndEmailAndId", map);
	}
	
	// SMS 송신 서비스 (인증코드, 임시비밀번호 발급)
	public boolean insertSmsByForgetId(Map<String, Object> map) {
		int res = (int) insert("TblofficeAdminMapper_SQL.insertSmsByForgetId", map);
		return (res != 1)? false : true;
	}
	
	// 임시 비밀번호 발급으로 인한 패스워드 변경
	public boolean updateAdminPassword(Map<String, Object> map) {
		int res = (int) update("TblofficeAdminMapper_SQL.updateAdminPassword", map);
		return (res == 1)? true : false;
	}
	
	// SMS 문자 메시지 인증코드 생성
	public boolean insertAuthCode(Map<String, Object> map) {
		int res = (int) insert("TblofficeAdminMapper_SQL.insertAuthCode", map);
		return (res != 1)? false : true;
	}
	
	// SMS 문자 메시지 인증코드 인증
	@SuppressWarnings("unchecked")
	public Map<String, Object> doAuth(Map<String, Object> map) {
		return (Map<String, Object>) selectOne("TblofficeAdminMapper_SQL.doAuth", map);
	}
	
}
