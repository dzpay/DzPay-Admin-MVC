package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.mall.TblsiteInfo;

public interface TblsiteInfoMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLSITE_INFO
     *
     * @mbg.generated Thu Sep 10 09:28:21 KST 2020
     */
    int insert(TblsiteInfo record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLSITE_INFO
     *
     * @mbg.generated Thu Sep 10 09:28:21 KST 2020
     */
    List<TblsiteInfo> selectAll();
}