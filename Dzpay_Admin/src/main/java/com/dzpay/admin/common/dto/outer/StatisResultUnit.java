package com.dzpay.admin.common.dto.outer;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class StatisResultUnit {

	// 결제 건수, 결제 금액
	private String tradeCount;
	private Object tradeMoney;

	// 취소 건수, 취소 금액
	private String cancelCount;
	private Object cancelMoney;

	public void setAll(String tradeCount, Object tradeMoney, String cancelCount, Object cancelMoney) {
		this.tradeCount = tradeCount;
		this.tradeMoney = tradeMoney;
		this.cancelCount = cancelCount;
		this.cancelMoney = cancelCount;
	}

	public String getTradeCount() {
		return tradeCount;
	}

	public void setTradeCount(String tradeCount) {
		this.tradeCount = tradeCount;
	}

	public Object getTradeMoney() {
		return tradeMoney;
	}

	public void setTradeMoney(Object tradeMoney) {
		this.tradeMoney = tradeMoney;
	}

	public String getCancelCount() {
		return cancelCount;
	}

	public void setCancelCount(String cancelCount) {
		this.cancelCount = cancelCount;
	}

	public Object getCancelMoney() {
		return cancelMoney;
	}

	public void setCancelMoney(Object cancelMoney) {
		this.cancelMoney = cancelMoney;
	}

	public void convert(List<Map<String, Object>> map) {
		Iterator<String> iteratorKey = map.get(0).keySet().iterator();
		while(iteratorKey.hasNext()) {
			String key = iteratorKey.next();
			String value = (String) map.get(0).get(key);
		}
		this.tradeCount = (String) map.get(0).get("CNT");
		this.tradeMoney = (String) map.get(0).get("MONY");
		if (map.size() < 2)
			return;
		else {
			this.cancelCount = (String) map.get(1).get("CNT");
			this.cancelMoney = (String) map.get(1).get("MONY");

		}
	}
}