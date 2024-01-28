package arindahills.lab1.controller;

import arindahills.lab1.aop.annotation.ExecutionTime;
import arindahills.lab1.exception.DiagnosticTestException;
import arindahills.lab1.service.TestService;
import org.modelmapper.internal.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/diagnostics")

public class TestController {
    @Autowired
    TestService testService;
    @GetMapping("/test-exception")
    @ExecutionTime
    public void testException() throws DiagnosticTestException {
        testService.performExceptionTest();
        //System.out.println("I know im okay");
    }

}
