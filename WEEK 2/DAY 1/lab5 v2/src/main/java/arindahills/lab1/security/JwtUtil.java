package arindahills.lab1.security;

import arindahills.lab1.exception.InvalidTokenException;
import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtUtil {

    private final String secretKey = "UVs0fleuEW+uivbiIv/n0dSWZtc+byJ/BCdC+1Z76qmAjQ/8607LJZxZVt87ah99Z69TMlyCQLVzdbO5xnFmKw=="; // Replace with your secret key
    private final long accessTokenValidity = 86400000; // 24 hours
    private final long refreshTokenValidity = 864000000; // 240 hours

    // Method to validate JWT token
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            // Log and handle the exception
            throw new InvalidTokenException("Ivalid Access token");
           // return false;
        }
    }

    // Method to validate Refresh Token specifically
    public boolean validateRefreshToken(String token) {
        try {
            Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(token).getBody();
            return !claims.containsKey("roles"); // Refresh token does not contain roles
        } catch (JwtException | IllegalArgumentException e) {
            throw new InvalidTokenException("Ivalid token");
           // return false;
        }
    }

    // Method to extract email from JWT token
    public String extractEmail(String token) {
        System.out.println(getClaims(token).getSubject());
        return getClaims(token).getSubject();
    }

    // Method to extract roles from JWT token
    public List<String> extractRoles(String token) {
        System.out.println(getClaims(token).get("roles", List.class));
        return getClaims(token).get("roles", List.class);

    }

    private Claims getClaims(String token) {
        System.out.println( Jwts.parser()
                .setSigningKey(secretKey.getBytes())
                .parseClaimsJws(token)
                .getBody()
                .toString()
        );


        return Jwts.parser()
                .setSigningKey(secretKey.getBytes())
                .parseClaimsJws(token)
                .getBody();


    }

    // Method to generate access token
    public String generateAccessToken(String userEmail, List<String> roles) {
        return generateToken(userEmail, roles, accessTokenValidity);
    }

    // Method to generate refresh token
    public String generateRefreshToken(String userEmail) {
        return generateToken(userEmail, null, refreshTokenValidity);
    }

    private String generateToken(String userEmail, List<String> roles, long durationMillis) {
        Claims claims = Jwts.claims().setSubject(userEmail);
        if (roles != null) {
            claims.put("roles", roles);
        }

        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + durationMillis;
        Date exp = new Date(expMillis);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(nowMillis))
                .setExpiration(exp)
                .signWith(SignatureAlgorithm.HS512, secretKey.getBytes())
                .compact();
    }


    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }



}
