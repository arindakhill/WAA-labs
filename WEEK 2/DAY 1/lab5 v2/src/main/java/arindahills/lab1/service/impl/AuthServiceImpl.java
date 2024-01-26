package arindahills.lab1.service.impl;

import arindahills.lab1.exception.InvalidTokenException;
import arindahills.lab1.model.LoginRequest;
import arindahills.lab1.model.LoginResponse;
import arindahills.lab1.model.RefreshTokenRequest;
import arindahills.lab1.security.JwtUtil;
import arindahills.lab1.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
//@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthServiceImpl(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    public LoginResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        User user = (User) authentication.getPrincipal();
        String username = user.getUsername();
        List<String> roles = user.getAuthorities().stream()
                .map(grantedAuthority -> grantedAuthority.getAuthority())
                .collect(Collectors.toList());

        String accessToken = jwtUtil.generateAccessToken(username, roles);
        String refreshToken = jwtUtil.generateRefreshToken(username);

        return new LoginResponse(accessToken, refreshToken);
    }

    @Override
    public LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        // Validate the refresh token
        if (jwtUtil.validateRefreshToken(refreshTokenRequest.getRefreshToken())) {
            // Extract username and generate a new access token
            String username = jwtUtil.extractEmail(refreshTokenRequest.getRefreshToken());
            String newAccessToken = jwtUtil.generateAccessToken(username, Collections.emptyList());
            return new LoginResponse(newAccessToken, refreshTokenRequest.getRefreshToken());
        } else {
            // Handle invalid refresh token case
            // Here, throw a custom exception to indicate invalid refresh token
            throw new InvalidTokenException("Refresh Token is invalid or expired.");
        }
    }
}
