package arindahills.lab1.aop.aspect;

import arindahills.lab1.domain.Logger;
import arindahills.lab1.repository.LoggerRepository;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import arindahills.lab1.aop.annotation.ExecutionTime;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Aspect
@Component
public class ExecutionTimeAspect {

    @Autowired
    private LoggerRepository loggerRepository;

    @Around("@annotation(arindahills.lab1.aop.annotation.ExecutionTime)")
   // @Around("@ExecutionTime")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object proceed = joinPoint.proceed();

        long executionTime = System.currentTimeMillis() - start;

        Logger logger = new Logger();
        logger.setTransactionId(UUID.randomUUID().toString());
        logger.setDate(LocalDate.now());
        logger.setTime(LocalTime.now());


        //  record.setPrinciple("staticUser"); // Replace with actual user principle later
        //Get authentication object from the security context
        // Fetch the authenticated user's username
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            logger.setPrinciple(currentUserName);
        } else {
            logger.setPrinciple("Anonymous");
        }


        logger.setOperation(joinPoint.getSignature().toShortString() + " executed in " + executionTime + "ms");

        loggerRepository.save(logger);

        return proceed;
    }
}
