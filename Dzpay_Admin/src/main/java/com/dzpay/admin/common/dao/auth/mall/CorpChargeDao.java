package com.dzpay.admin.common.dao.auth.mall;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.mall.TblcorpCharge;

@Repository("corpChargeDao")
public class CorpChargeDao extends AbstractDAO{

	public boolean insertCorpCharge(TblcorpCharge vo) throws Exception{
		int res =  (int) insert("TblcorpChargeMapper_SQL.insert", vo);
		if(res != 1) {
			return false;
		}
		return true;
	}
	
	public List<TblcorpCharge> selectCorpChargeByCorpId(String corpId) {
		List<TblcorpCharge> list = selectList("TblcorpChargeMapper_SQL.selectCorpChargeByCorpId", corpId);
		return (list == null)? null : list;
	}
	
	public TblcorpCharge selectOne(Map<String, String> map) {
		TblcorpCharge vo = (TblcorpCharge) selectOne("TblcorpChargeMapper_SQL.selectOne", map);
		return (vo == null)? null : vo;
	}
}
