package com.dzpay.admin.controller.sample;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dzpay.admin.common.dao.auth.account.OfficeAdminDao;
import com.dzpay.admin.common.dto.account.TblofficeAdmin;
import com.dzpay.admin.common.service.SampleService;
import com.dzpay.admin.security.CustomUserDetailService;

@Controller
public class SampleController {
	Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "sampleService")
	private SampleService sampleService;

	@Resource(name = "customUserDetailService")
	private CustomUserDetailService customUserDetailService;
	
	@Resource(name = "officeAdminDao")
	OfficeAdminDao officeAdminDao;
	
	@RequestMapping(value = "/test.do")
	public ModelAndView openSampleBoardList(Map<String, Object> commandMap) throws Exception {
		TblofficeAdmin vo = customUserDetailService.loadUserByUsername("rojae");
		
		System.out.println(vo.getAdminGpNo());
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("corpTaxNo", "1348108473");
		map.put("email", "ksm77@duzon.com");
		
		List<Map<String, Object>> res = officeAdminDao.selectByCorpIdAndEmail(map);
		System.out.println(res.size());
		System.out.println(res.toString());
		log.debug("TEST");
		ModelAndView mv = new ModelAndView("/test/list");
		List<Map<String, Object>> list = sampleService.selectBoardList(commandMap);
		mv.addObject("home", list);
		return mv;
	}	

}
