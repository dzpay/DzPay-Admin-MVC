package com.dzpay.admin.common.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dzpay.admin.common.dao.host.HostInfoDao;
import com.dzpay.admin.common.dto.host.TblhostInfo;

@Service("hostInfoService")
public class HostInfoService {
	
	@Resource(name = "hostInfoDao")
	private HostInfoDao hostInfoDao;
	
	public List<TblhostInfo> selectHost(String word) throws Exception{
		List<TblhostInfo> list = hostInfoDao.selectHost(word);
		return (list == null)? null : list;
	}
}
