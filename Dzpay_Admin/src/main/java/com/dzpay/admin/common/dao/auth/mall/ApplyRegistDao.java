package com.dzpay.admin.common.dao.auth.mall;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.mall.TblapplyRegist;

@Repository("applyRegistDao")
public class ApplyRegistDao extends AbstractDAO{
	public boolean insertApplyRegist(TblapplyRegist vo) throws Exception{
		int res =  (int) insert("TblapplyRegistMapper_SQL.insert", vo);
		if(res != 1) {
			return false;
		}
		return true;
	}
	
	public TblapplyRegist selectApplyRegist(String contComments) {
		TblapplyRegist vo = (TblapplyRegist) selectOne("TblapplyRegistMapper_SQL.selectOne", contComments);
		return vo;
	}
}
