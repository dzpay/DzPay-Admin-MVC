package com.dzpay.admin.mapper;

import java.util.List;

import com.dzpay.admin.common.dto.sms.MsgQueue;

public interface MsgQueueMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.MSG_QUEUE
     *
     * @mbg.generated Thu Sep 10 09:54:32 KST 2020
     */
    int deleteByPrimaryKey(Long mseq);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.MSG_QUEUE
     *
     * @mbg.generated Thu Sep 10 09:54:32 KST 2020
     */
    int insert(MsgQueue record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.MSG_QUEUE
     *
     * @mbg.generated Thu Sep 10 09:54:32 KST 2020
     */
    MsgQueue selectByPrimaryKey(Long mseq);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.MSG_QUEUE
     *
     * @mbg.generated Thu Sep 10 09:54:32 KST 2020
     */
    List<MsgQueue> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table SKYPG.MSG_QUEUE
     *
     * @mbg.generated Thu Sep 10 09:54:32 KST 2020
     */
    int updateByPrimaryKey(MsgQueue record);
}