package com.dzpay.admin.common.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dzpay.admin.common.dao.auth.mall.ApplyChargeDao;
import com.dzpay.admin.common.dao.auth.mall.ApplyRegistDao;
import com.dzpay.admin.common.dto.mall.TblapplyCharge;
import com.dzpay.admin.common.dto.mall.TblapplyRegist;

@Service("applyRegistService")
public class ApplyRegistServiceImpl implements ApplyRegistService {

	@Resource(name = "applyRegistDao")
	ApplyRegistDao applyRegistDao;

	@Resource(name = "applyChargeDao")
	ApplyChargeDao applyChargeDao;
	
	@Override
	public boolean applyRegist(TblapplyRegist vo, List<TblapplyCharge> list) throws Exception {
		boolean res = applyRegistDao.insertApplyRegist(vo);
		System.out.println("list size" + list.size());
		if(res && applyChargeDao.insertApplyCharge(list)){
			return true;
		}
		return false;
	}
	

}
