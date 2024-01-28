package arindahills.lab1.service.impl;

import arindahills.lab1.exception.DiagnosticTestException;
import arindahills.lab1.service.TestService;
import org.springframework.stereotype.Service;

@Service
public class TestServiceImpl implements TestService {
    @Override
    public void performExceptionTest() throws DiagnosticTestException {
        throw new DiagnosticTestException("Diagnostics Test Exception under way");
    }
}
