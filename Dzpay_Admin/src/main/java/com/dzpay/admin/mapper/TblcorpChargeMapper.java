package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.mall.TblcorpCharge;

public interface TblcorpChargeMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table SKYPG.TBLCORP_CHARGE
	 * @mbg.generated  Thu Sep 10 09:33:36 KST 2020
	 */
	int insert(TblcorpCharge record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table SKYPG.TBLCORP_CHARGE
	 * @mbg.generated  Thu Sep 10 09:33:36 KST 2020
	 */
	List<TblcorpCharge> selectAll();
}