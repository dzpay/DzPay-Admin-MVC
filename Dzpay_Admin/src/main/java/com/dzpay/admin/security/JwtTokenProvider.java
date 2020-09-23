package com.dzpay.admin.security;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

@Data
@Component
public class JwtTokenProvider {

    private static final String secretKey = "skypg";

    // 토큰 유효시간 30분
    private long tokenValidTime = 60 * 30 * 1000L;
    
    @Resource(name = "customUserDetailService")
    private CustomUserDetailService userDetailsService;

    // JWT 토큰 생성
    public String createToken(String userPk, String userRole, List<String> roles) throws UnsupportedEncodingException {
        Claims claims = Jwts.claims().setSubject(userPk); // JWT payload 에 저장되는 정보단위
        claims.put("role", userRole);	// 가장 중요 (최종 권한)
        claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
        Date now = new Date();
        String token = Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))  // 사용할 암호화 알고리즘과, 서명
                .compact();
        System.out.println(token);
        return token.trim();
    }

    // JWT 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token) throws ExpiredJwtException, UsernameNotFoundException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // 토큰에서 회원 정보 추출
    public String getUserPk(String token) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {      
    	return Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(token).getBody().getSubject();
    }

    // 토큰에서 회원 정보 추출
    public String getUserRole(String token) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {
    	System.out.println(token);
        return (String) Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(token).getBody().get("role");
    }
    
    // Request의 Header에서 token 값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN값'
    public String resolveToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
	        for(Cookie cookie : cookies) {
	        	if(cookie.getName().equals("X-AUTH-TOKEN")) {
	        		return cookie.getValue();
	        	}
	        }
        }
        return null;
    }

    // JWT 토큰 생성
    public String updateToken(String userPk, String userRole, List<String> roles) throws UnsupportedEncodingException {
    	 Claims claims = Jwts.claims().setSubject(userPk); // JWT payload 에 저장되는 정보단위
         claims.put("role", userRole);	// 가장 중요 (최종 권한)
         claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
         Date now = new Date();
         return Jwts.builder()
                 .setClaims(claims) // 정보 저장
                 .setIssuedAt(now) // 토큰 발행 시간 정보
                 .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                 .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))  // 사용할 암호화 알고리즘, 서명
                 .compact();
    }
  
    
    /* 토큰의 유효성 + 만료일자 확인
     * 0 : 정상 처리
     * 1 : 유효기간 만료 
     * 2 : 서명 혹은 길이 오류 
     */ 
    @SuppressWarnings("unchecked")
	public int validateToken(String jwtToken) throws UnsupportedEncodingException {
    	System.out.println(DatatypeConverter.printHexBinary(secretKey.getBytes("UTF-8")));
        try {
        	// 서명키로 복호화하는 과정
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(jwtToken);
            return 0;
        } 
        catch(ExpiredJwtException e) {
        	return 1;
        }
        catch (SignatureException e) {
			e.printStackTrace();
			System.out.println("서명 오류");
        }
        catch(ArrayIndexOutOfBoundsException e) 
        {
			e.printStackTrace();
			System.out.println("인덱스 범위 초과");
        }
        catch(MalformedJwtException e) {
        	e.printStackTrace();
        	System.out.println("잘못된 형식");
        }
        catch(Exception e) {
        }
        return 2;
    }
}

