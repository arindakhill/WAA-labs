package arindahills.lab1.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
