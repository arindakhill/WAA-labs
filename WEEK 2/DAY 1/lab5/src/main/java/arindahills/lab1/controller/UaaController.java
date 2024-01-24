package arindahills.lab1.controller;

import arindahills.lab1.model.LoginRequest;
import arindahills.lab1.model.LoginResponse;
import arindahills.lab1.model.RefreshTokenRequest;
import arindahills.lab1.service.UaaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/authenticate")
@CrossOrigin
public class UaaController {
    private final UaaService uaaService;

    public UaaController(UaaService uaaService) {
        this.uaaService = uaaService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        var loginResponse = uaaService.login(loginRequest);
        return ResponseEntity.ok().body(loginResponse);
    }

    @PostMapping("/refreshToken")
    public LoginResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest){
        return uaaService.refreshToken(refreshTokenRequest);
    }


}
