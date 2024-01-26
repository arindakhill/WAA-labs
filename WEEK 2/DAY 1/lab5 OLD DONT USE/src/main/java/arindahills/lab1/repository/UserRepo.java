package arindahills.lab1.repository;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    @Query("select u.posts from User u where u.id = :userId")
List<Post> findPostsByUserId(@Param("userId") long UserId);


    @Query("SELECT u FROM User u JOIN u.posts p GROUP BY u HAVING COUNT(p) > 1")
        List<User> findUsersWithMoreThanOnePost();

    @Query("SELECT u FROM User u WHERE SIZE (u.posts) > :count")
    List<User> findUsersWithMoreThanNumberOfPosts(@Param("count") int count);

    @Query("SELECT DISTINCT u FROM User u JOIN FETCH u.posts p WHERE p.title = :title")
    List<User> findAllByAuthorWith(@Param("title") String title);


    @Query("SELECT p FROM User u JOIN u.posts p WHERE u.id = :userId AND p.id = :postId")
    Optional<Post> findPostOfUserById(@Param("userId") Long userId, @Param("postId") Long postId);

    User findByEmail(String username);
}
