package arindahills.lab1.aop.aspect;

import arindahills.lab1.domain.ExceptionRecord;
import arindahills.lab1.repository.ExceptionRepository;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Aspect
@Component
public class ExceptionLoggingAspect {

    @Autowired
    private ExceptionRepository exceptionRepository;

    @AfterThrowing(pointcut = "within(arindahills.lab1.controller..*)", throwing = "ex")
    public void logException(JoinPoint joinPoint, Throwable ex) {
        ExceptionRecord record = new ExceptionRecord();
        record.setTransactionId(UUID.randomUUID().toString());
        record.setDate(LocalDate.now());
        record.setTime(LocalTime.now());
        record.setPrinciple("staticUser"); // Replace with actual user principle later
        record.setOperation(joinPoint.getSignature().toShortString());
        record.setExceptionType(ex.getClass().getSimpleName());

        exceptionRepository.save(record);
    }
}
