package arindahills.lab1.domain.dto.response;

import arindahills.lab1.domain.Post;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    long id;
    String name;
    //List<Post> posts;
}
