package arindahills.lab1.domain.dto;

import arindahills.lab1.domain.Post;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    long id;
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    //private List<PostDto> posts;
}
