package arindahills.lab1.service;

import arindahills.lab1.model.LoginRequest;
import arindahills.lab1.model.LoginResponse;
import arindahills.lab1.model.RefreshTokenRequest;

public interface UaaService {
    LoginResponse login(LoginRequest loginRequest);
    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
