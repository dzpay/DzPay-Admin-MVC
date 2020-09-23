package com.dzpay.admin.common.dao.post;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.post.TbletcPost;

@Repository("etcPostDao")
public class EtcPostDao extends AbstractDAO{
	
	public List<TbletcPost> selectPost(String word) throws Exception{
		List<TbletcPost> res = selectList("TbletcPostMapper_SQL.selectPost", word);
		return (res == null)? null : res;
	}
	
}
