package arindahills.lab1.domain;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String email;
    private String password;
    private String firstname;
    private String lastname;



    @OneToMany( cascade = CascadeType.ALL)
    @JoinColumn (name = "user_id")
    List<Post> posts;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable
    private List<Role> roles;

}
