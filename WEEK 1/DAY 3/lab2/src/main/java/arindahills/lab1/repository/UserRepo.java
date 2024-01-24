package arindahills.lab1.repository;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long> {
    @Query("select u.posts from User u where u.id = :userId")
List<Post> findPostsByUserId(@Param("userId") long UserId);


    @Query("SELECT u FROM User u JOIN u.posts p GROUP BY u HAVING COUNT(p) > 1")
        List<User> findUsersWithMoreThanOnePost();


}
