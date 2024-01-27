package arindahills.lab1.controller;

import arindahills.lab1.aop.annotation.ExecutionTime;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/diagnostics")

public class TestController {
    @GetMapping("/test-exception")
    @ExecutionTime
    public void testException() {
        throw new RuntimeException("Test Exception diagnostics");
    }

}
