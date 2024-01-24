package arindahills.lab1.security;


import arindahills.lab1.domain.User;
import arindahills.lab1.repository.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userDetailsService")
@Transactional
public class AwesomeUserDetailsService implements UserDetailsService {

    private final UserRepo userRepo;

    public AwesomeUserDetailsService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(username);

        var userDetails = new AwesomeUserDetails(user);
       // System.out.println(userDetails.getAuthorities().getClass());
        //System.out.println(userDetails.getUsername());
        //System.out.println(userDetails.getPassword());
        return userDetails;
    }

}
