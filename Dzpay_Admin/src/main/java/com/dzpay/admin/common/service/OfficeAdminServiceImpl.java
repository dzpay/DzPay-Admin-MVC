package com.dzpay.admin.common.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dzpay.admin.common.dao.auth.account.OfficeAdminDao;
import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.utils.RandomUtils;

@Service("officeAdminService")
public class OfficeAdminServiceImpl implements OfficeAdminService {
	Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "officeAdminDao")
	private OfficeAdminDao officeAdminDao;

	@Resource(name = "randomUtils")
	private RandomUtils randomUtils;
	
	@Inject
    private Md5PasswordEncoder pe;
    
	@Override
	public TblofficeAdmin selectAdmin(String admId) throws Exception {
		return officeAdminDao.selectOfficeAdmin(admId);
	}

	@Override
	public boolean insertAdmin(TblofficeAdmin vo) throws Exception {
		return officeAdminDao.insertOfficeAdmin(vo);
	}

	@Override
	public TblofficeAdmin selectAdmin_ByAdminIdAndAdminPwd(TblofficeAdmin vo) throws Exception {
		return officeAdminDao.selectOfficeAdmin_ByAdminIdAndAdminPwd(vo);
	}

	// 아이디 찾기
	// xx*******
	@Override
	public List<Map<String, Object>> selectByCorpTaxIdAndEmail(Map<String, Object> map) throws Exception {
		return (List<Map<String, Object>>) officeAdminDao.selectByCorpIdAndEmail(map);
	}

	@Override
	// param : adminId, Email, Corp_Tax_NO
	public Map<String, Object> registAuthCode(Map<String, Object> map) throws Exception {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Map<String, Object> tp = officeAdminDao.selectByCorpIdAndEmailAndId(map);
		if (tp == null) {
			System.out.println("존재하지 않는 계정");
			return null;
		} else {
			// 인증 코드 생성
			String authCode = randomUtils.getRandomAuthcode(5);

			// 대 소문자 주의
			String phoneNumber = (String) tp.get("PHONENUMBER");

			System.out.println(authCode);
			System.out.println(phoneNumber);

			/////////////////////////////////////
			// 인증코드 데이터베이스 저장//
			/////////////////////////////////////

			map.put("secretCode", authCode);
			map.put("phoneNumber", phoneNumber);

			boolean saveResult = officeAdminDao.insertAuthCode(map);

			///////////////////////////////////////////////
			// SMS 전송 테이블 삽입///////////////////
			///////////////////////////////////////////////

			map.put("requestType", "인증코드");

			boolean sendResult = officeAdminDao.insertSmsByForgetId(map);

			System.out.println("authCode : " + map.get("secretCode"));
			System.out.println("phoneNumber : " + map.get("phoneNumber"));

			map.remove("authCode");
			map.remove("secretCode");

			if (saveResult && sendResult) {
				// map을 전달하여 인증 페이지로 이동하자
				return map;
			} else {
				return null;
			}
		}
	}

	@Override
	// param : 7
	public boolean doAuth(Map<String, Object> map) throws Exception {
		Map<String, Object> res = officeAdminDao.doAuth(map);
		try {
			if (res.get("RESULT").equals("SUCC-AUTHCODE") || res.get("RESULT") == "SUCC-AUTHCODE"){
				return true;
			} else {
				return false;
			}
		} catch (NullPointerException ntp) {
			return false;
		}
	}
	
	public boolean generateTempPassword(Map<String, Object> map) throws Exception{
		boolean genPwdResult = false;
		boolean sendResult = false;
		
		String generatedPassword = randomUtils.getRandomPassword(10);
        String encodedPw = pe.encodePassword(generatedPassword, map.get("admin-id"));
        
        System.out.println(map.toString());
        
		map.put("newEncodedPassword", encodedPw);
		map.put("requestType", "임시 비밀번호");
		map.put("secretCode", generatedPassword);
		map.put("adminId", map.get("admin-id"));
		map.put("phoneNumber", map.get("phone-number"));
		
		genPwdResult = officeAdminDao.updateAdminPassword(map);
		sendResult =  officeAdminDao.insertSmsByForgetId(map);
		
		return (genPwdResult && sendResult)? true : false;
	}
}