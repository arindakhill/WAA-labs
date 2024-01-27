package arindahills.lab1.aop.aspect;

import arindahills.lab1.domain.ExceptionRecord;
import arindahills.lab1.repository.ExceptionRepository;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Aspect
@Component
public class ExceptionLoggingAspect {

    @Autowired
    private ExceptionRepository exceptionRepository;

    @AfterThrowing(pointcut = "within(arindahills.lab1.controller..*) || within(arindahills.lab1.service..*)", throwing = "ex")
    public void logException(JoinPoint joinPoint, Throwable ex) {
        ExceptionRecord record = new ExceptionRecord();
        record.setTransactionId(UUID.randomUUID().toString());
        record.setDate(LocalDate.now());
        record.setTime(LocalTime.now());
      //  record.setPrinciple("staticUser"); // Replace with actual user principle later
        //Get authentication object from the security context
  //      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

//        if(authentication != null && authentication.getPrincipal() instanceof UserDetails){
//            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//            //Set the username of the authenticated user
//            record.setPrinciple(userDetails.getUsername());
//        } else{
//            //handle case where authentication information is not available
//            record.setPrinciple("Anonymous");
//        }



        // Fetch the authenticated user's username
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            record.setPrinciple(currentUserName);
        } else {
            record.setPrinciple("Anonymous");
        }


        record.setOperation(joinPoint.getSignature().toShortString());
        record.setExceptionType(ex.getClass().getSimpleName());

        exceptionRepository.save(record);
    }
}
