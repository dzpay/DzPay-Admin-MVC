package com.dzpay.admin.common.dao.auth.mall;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.mall.TblapplyCharge;

@Repository("applyChargeDao")
public class ApplyChargeDao extends AbstractDAO{
	public boolean insertApplyCharge(List<TblapplyCharge> list) throws Exception{
		for(int i = 0; i < list.size(); i++) {
			System.out.println(i +":"+ list.get(i).getChgType());
			int res = (int) insert("TblapplyChargeMapper_SQL.insert", list.get(i));
			System.out.println("do...");
			if(res == 1) {
				System.out.println("succ" + i);
				continue;
			}
			else {
				System.out.println("fail" + i);
				return false;
			}
		}
		System.out.println("clear");
		return true;
	}
	
	public TblapplyCharge selectApplyRegist(String contComments) {
		TblapplyCharge vo = (TblapplyCharge) selectOne("TblapplyChargeMapper_SQL.select", contComments);
		return vo;
	}
}