package com.dzpay.admin.common.dao.sms;

import org.springframework.stereotype.Repository;

import com.dzpay.admin.common.dao.AbstractDAO;
import com.dzpay.admin.common.dto.sms.MsgQueue;

@Repository("msgQueueDao")
public class MsgQueueDao extends AbstractDAO{
	public boolean insertMsgQueue(MsgQueue vo) throws Exception{
		int res =  (int) insert("TblMegQueue_SQL.insert", vo);
		if(res != 1) {
			return false;
		}
		return true;
	}
}
