package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.mall.TblapplyCharge;

public interface TblapplyChargeMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLAPPLY_CHARGE
     *
     * @mbg.generated Mon Sep 07 17:34:46 KST 2020
     */
    int insert(TblapplyCharge record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLAPPLY_CHARGE
     *
     * @mbg.generated Mon Sep 07 17:34:46 KST 2020
     */
    List<TblapplyCharge> selectAll();
}