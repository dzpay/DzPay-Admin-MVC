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
	
	// ���̵� ã��
	@SuppressWarnings("unchecked")
	public List<Map<String, Object>> selectByCorpIdAndEmail(Map<String, Object> map){
		return (List<Map<String, Object>>)selectList("TblofficeAdminMapper_SQL.selectByCorpIdAndEmail", map);
	}
	
	// ��й�ȣ ã�� Ȥ�� Ư�� ������ �����ϴ��� ��ȸ
	// return phoneNumber
	@SuppressWarnings("unchecked")
	public Map<String, Object> selectByCorpIdAndEmailAndId(Map<String, Object> map) {
		return (Map<String, Object>) selectOne("TblofficeAdminMapper_SQL.selectByCorpIdAndEmailAndId", map);
	}
	
	// SMS �۽� ���� (�����ڵ�, �ӽú�й�ȣ �߱�)
	public boolean insertSmsByForgetId(Map<String, Object> map) {
		int res = (int) insert("TblofficeAdminMapper_SQL.insertSmsByForgetId", map);
		return (res != 1)? false : true;
	}
	
	// �ӽ� ��й�ȣ �߱����� ���� �н����� ����
	public boolean updateAdminPassword(Map<String, Object> map) {
		int res = (int) update("TblofficeAdminMapper_SQL.updateAdminPassword", map);
		return (res == 1)? true : false;
	}
	
	// SMS ���� �޽��� �����ڵ� ����
	public boolean insertAuthCode(Map<String, Object> map) {
		int res = (int) insert("TblofficeAdminMapper_SQL.insertAuthCode", map);
		return (res != 1)? false : true;
	}
	
	// SMS ���� �޽��� �����ڵ� ����
	@SuppressWarnings("unchecked")
	public Map<String, Object> doAuth(Map<String, Object> map) {
		return (Map<String, Object>) selectOne("TblofficeAdminMapper_SQL.doAuth", map);
	}
	
}
