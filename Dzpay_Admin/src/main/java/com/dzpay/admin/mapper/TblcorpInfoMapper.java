package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.mall.TblcorpInfo;

public interface TblcorpInfoMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLCORP_INFO
     *
     * @mbg.generated Thu Sep 10 09:41:52 KST 2020
     */
    int insert(TblcorpInfo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLCORP_INFO
     *
     * @mbg.generated Thu Sep 10 09:41:52 KST 2020
     */
    List<TblcorpInfo> selectAll();
}