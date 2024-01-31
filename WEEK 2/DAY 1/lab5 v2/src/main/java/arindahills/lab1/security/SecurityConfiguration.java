package arindahills.lab1.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebSecurity
@Configuration
@EnableWebMvc
public class SecurityConfiguration {

    @Autowired
    private JwtTokenFilter jwtTokenFilter;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    CustomAuthenticationEntryPoint customAuthenticationEntryPoint;

    @Autowired
    CustomExceptionHandler customExceptionHandler;

    @Autowired
    CustomAccessDeniedHandler customAccessDeniedHandler;


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF protection
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Use stateless session
                .and()
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers("/api/v1/posts/**").permitAll() // Allow all requests to the authentication endpoint


//                        .requestMatchers(HttpMethod.GET,"/api/v1/diagnostics/**").hasRole("ADMIN")
//
//                        .requestMatchers(HttpMethod.GET,"/api/v1/posts").hasRole("ADMIN")
//                        .requestMatchers(HttpMethod.GET,"/api/v1/posts/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.POST,"/api/v1/posts/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.PUT,"/api/v1/posts/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.DELETE,"/api/v1/posts/**").hasRole("USER")
//
//                        .requestMatchers(HttpMethod.GET,"/api/v1/users/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.POST,"/api/v1/users/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.PUT,"/api/v1/users/**").hasRole("ADMIN")
//                        .requestMatchers(HttpMethod.DELETE,"/api/v1/users/**").hasRole("USER")
//
//                        .requestMatchers(HttpMethod.GET,"/api/v1/comments/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.POST,"/api/v1/comments/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.PUT,"/api/v1/comments/**").hasRole("USER")
//                        .requestMatchers(HttpMethod.DELETE,"/api/v1/comments/**").hasRole("USER")
//
//
                        .anyRequest().authenticated() // All other requests must be authenticated
                )
              // .formLogin(formLogin->formLogin.failureHandler((AuthenticationFailureHandler) customExceptionHandler))
                .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class) // Add the JWT Token Filter
                .exceptionHandling()
                    .authenticationEntryPoint(customAuthenticationEntryPoint)
                    .accessDeniedHandler(customAccessDeniedHandler);
                ;


        return http.build();
    }

    // Password encoder bean
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
