package com.dzpay.admin.common.dao.host;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.host.TblhostInfo;

@Repository("hostInfoDao")
public class HostInfoDao extends AbstractDAO{

	public List<TblhostInfo> selectHost(String word) throws Exception{
		List<TblhostInfo> res = selectList("TblhostInfoMapper_SQL.selectHost", word);
		return (res == null)? null : res;
	}

}
