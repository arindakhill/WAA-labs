package arindahills.lab1.repository;

import arindahills.lab1.domain.Logger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoggerRepository extends JpaRepository<Logger, Long> {
}
