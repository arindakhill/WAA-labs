package arindahills.lab1.security;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

public class SecureKeyGenerator {
    public static void main(String[] args) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512); // Generates a secure random key
        String base64Key = java.util.Base64.getEncoder().encodeToString(key.getEncoded());

        System.out.println("Secure key: " + base64Key);
    }
}
