package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.post.TbletcPost;

public interface TbletcPostMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLETC_POST
     *
     * @mbg.generated Thu Sep 03 15:14:22 KST 2020
     */
    int insert(TbletcPost record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.TBLETC_POST
     *
     * @mbg.generated Thu Sep 03 15:14:22 KST 2020
     */
    List<TbletcPost> selectAll();
    
    // ������ȣ ã�� 
    List<TbletcPost> selectPost();
    
}