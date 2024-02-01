package arindahills.lab1.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // Skip JWT check for login requests or other non-protected endpoints
        if (!requiresAuthentication(request.getRequestURI())) {
           // System.out.println(!requiresAuthentication(request.getRequestURI()));
            filterChain.doFilter(request, response);
            return;
        }



        try {
            String token = extractJwtFromRequest(request);
            if (token != null && jwtUtil.validateToken(token)) {
                String userEmail = jwtUtil.extractEmail(token);

                List<SimpleGrantedAuthority> roles = jwtUtil.extractRoles(token).stream()
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userEmail, null, roles);
                SecurityContextHolder.getContext().setAuthentication(auth);
            } else {
                //Throw an AuthenticationException if the token is invalid
                throw new AuthenticationException("Invalid JWT Token") {
                };

            }
        }catch (AuthenticationException e){
            //Pass the exception to the exception handling mechanism
            throw e;
        }

        filterChain.doFilter(request, response);
    }

    private String extractJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }


    private boolean requiresAuthentication(String uri) {
        // Add logic here to determine if the request URI should be authenticated
        // For example, return false for login endpoint
       // System.out.println(!uri.startsWith("/api/v1/authenticate"));
        return !uri.startsWith("/api/v1/");
    }

}
