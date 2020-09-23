package com.dzpay.admin.common.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dzpay.admin.common.dao.post.EtcPostDao;
import com.dzpay.admin.common.dto.post.TbletcPost;

@Service("etcPostService")
public class EtcPostService {
	
	@Resource(name = "etcPostDao")
	private EtcPostDao etcPostDao;
	
	public List<TbletcPost> selectPost(String word) throws Exception{
		List<TbletcPost> res = etcPostDao.selectPost(word);
		if(res == null) {
			return null;
		}
		else {
			return res;
		}
	}
}
