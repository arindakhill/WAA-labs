package arindahills.lab1.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    long id;
    String title;
    String content;
    String author;
}
