package com.dzpay.admin.common.dto.outer;

import java.util.ArrayList;

public class StatisResultDto extends StatisResultUnit {

	// result.get(0) = ���� ���� �Ǽ�, ���� �ݾ�, ���� ��� �Ǽ�, ��� �ݾ�

	ArrayList<StatisResultUnit> list = new ArrayList<StatisResultUnit>();

	public void bind(StatisResultUnit unit) {
		list.add(unit);
	}

	// max i = 2
	public StatisResultUnit get(int i) throws Exception {
		if (i > 2) {
			new NullPointerException();
			return null;
		}
		return list.get(i);
	}

	public String toString() {
		String res = "{";
		for (StatisResultUnit unit : list) {
			res += unit.getTradeCount() + "=" + unit.getTradeMoney() + "," + unit.getCancelCount() + "="
					+ unit.getCancelMoney();
		}
		res += "}";
		
		return res;
	}
}
