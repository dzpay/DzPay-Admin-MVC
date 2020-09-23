package com.dzpay.admin.common.dto.login.token;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class JwtDto {

	private Long id;

	private String sitecd;

	private String accessToken;

	private String refreshToken;

	private Date createdDate;

	private Date modifiedDate;

	public JwtDto() {

	}

	public JwtDto(Long id,  String sitecd, String accessToken, String refreshToken, Date createdDate,
			Date modifiedDate) {
		this.id = id;
		this.sitecd = sitecd;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.createdDate = new Date();
		this.modifiedDate = null;
	}

}

