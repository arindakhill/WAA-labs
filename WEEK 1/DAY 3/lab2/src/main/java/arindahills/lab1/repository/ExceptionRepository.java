package arindahills.lab1.repository;

import arindahills.lab1.domain.ExceptionRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExceptionRepository extends JpaRepository<ExceptionRecord, Long> {
}
