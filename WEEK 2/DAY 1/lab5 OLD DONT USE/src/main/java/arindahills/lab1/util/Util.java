package arindahills.lab1.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Util {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String[] names = {"Arinda", "Esther", "Ethan", "Hansel"};

        for (String name : names) {
            String password = encoder.encode("123"); // Replace "password" with the actual password you want to encode
            System.out.println("Encoded password for " + name + ": " + password);
        }
    }
}
