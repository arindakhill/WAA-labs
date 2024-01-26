package arindahills.lab1.service;

import arindahills.lab1.model.LoginRequest;
import arindahills.lab1.model.LoginResponse;
import arindahills.lab1.model.RefreshTokenRequest;

public interface AuthService {

    LoginResponse login(LoginRequest loginRequest);

    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);

    // Any other authentication-related methods you might require
}
