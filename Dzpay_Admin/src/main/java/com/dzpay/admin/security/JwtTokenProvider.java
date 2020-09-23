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

    // ��ū ��ȿ�ð� 30��
    private long tokenValidTime = 60 * 30 * 1000L;
    
    @Resource(name = "customUserDetailService")
    private CustomUserDetailService userDetailsService;

    // JWT ��ū ����
    public String createToken(String userPk, String userRole, List<String> roles) throws UnsupportedEncodingException {
        Claims claims = Jwts.claims().setSubject(userPk); // JWT payload �� ����Ǵ� ��������
        claims.put("role", userRole);	// ���� �߿� (���� ����)
        claims.put("roles", roles); // ������ key / value ������ ����ȴ�.
        Date now = new Date();
        String token = Jwts.builder()
                .setClaims(claims) // ���� ����
                .setIssuedAt(now) // ��ū ���� �ð� ����
                .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))  // ����� ��ȣȭ �˰����, ����
                .compact();
        System.out.println(token);
        return token.trim();
    }

    // JWT ��ū���� ���� ���� ��ȸ
    public Authentication getAuthentication(String token) throws ExpiredJwtException, UsernameNotFoundException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // ��ū���� ȸ�� ���� ����
    public String getUserPk(String token) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {      
    	return Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(token).getBody().getSubject();
    }

    // ��ū���� ȸ�� ���� ����
    public String getUserRole(String token) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {
    	System.out.println(token);
        return (String) Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(token).getBody().get("role");
    }
    
    // Request�� Header���� token ���� �����ɴϴ�. "X-AUTH-TOKEN" : "TOKEN��'
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

    // JWT ��ū ����
    public String updateToken(String userPk, String userRole, List<String> roles) throws UnsupportedEncodingException {
    	 Claims claims = Jwts.claims().setSubject(userPk); // JWT payload �� ����Ǵ� ��������
         claims.put("role", userRole);	// ���� �߿� (���� ����)
         claims.put("roles", roles); // ������ key / value ������ ����ȴ�.
         Date now = new Date();
         return Jwts.builder()
                 .setClaims(claims) // ���� ����
                 .setIssuedAt(now) // ��ū ���� �ð� ����
                 .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                 .signWith(SignatureAlgorithm.HS256, secretKey.getBytes("UTF-8"))  // ����� ��ȣȭ �˰���, ����
                 .compact();
    }
  
    
    /* ��ū�� ��ȿ�� + �������� Ȯ��
     * 0 : ���� ó��
     * 1 : ��ȿ�Ⱓ ���� 
     * 2 : ���� Ȥ�� ���� ���� 
     */ 
    @SuppressWarnings("unchecked")
	public int validateToken(String jwtToken) throws UnsupportedEncodingException {
    	System.out.println(DatatypeConverter.printHexBinary(secretKey.getBytes("UTF-8")));
        try {
        	// ����Ű�� ��ȣȭ�ϴ� ����
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey.getBytes("UTF-8")).parseClaimsJws(jwtToken);
            return 0;
        } 
        catch(ExpiredJwtException e) {
        	return 1;
        }
        catch (SignatureException e) {
			e.printStackTrace();
			System.out.println("���� ����");
        }
        catch(ArrayIndexOutOfBoundsException e) 
        {
			e.printStackTrace();
			System.out.println("�ε��� ���� �ʰ�");
        }
        catch(MalformedJwtException e) {
        	e.printStackTrace();
        	System.out.println("�߸��� ����");
        }
        catch(Exception e) {
        }
        return 2;
    }
}

