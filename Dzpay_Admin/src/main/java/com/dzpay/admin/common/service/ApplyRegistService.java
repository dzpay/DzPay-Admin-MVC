package com.dzpay.admin.common.service;

import java.util.List;

import com.dzpay.admin.common.dto.mall.TblapplyCharge;
import com.dzpay.admin.common.dto.mall.TblapplyRegist;


public interface ApplyRegistService {
	boolean applyRegist(TblapplyRegist vo1, List<TblapplyCharge> list) throws Exception;

}
