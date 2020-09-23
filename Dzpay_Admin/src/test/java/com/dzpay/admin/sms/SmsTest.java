package com.dzpay.admin.sms;

import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dzpay.admin.common.dao.auth.account.OfficeAdminDao;
import com.dzpay.admin.common.dao.sms.MsgQueueDao;
import com.dzpay.admin.common.dto.sms.MsgQueue;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/resources/config/spring/context-*.xml"})
public class SmsTest {
	
	@Resource(name = "officeAdminDao")
	OfficeAdminDao officeAdminDao;
	
	
	@Test
	public void test() throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("corpId", "1348108473");
		map.put("email", "ksm77@duzon.com");
		
		List<Map<String, Object>> res = officeAdminDao.selectByCorpIdAndEmail(map);
		
		System.out.println(res.toString());
	}
}
