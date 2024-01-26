package arindahills.lab1.repository;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostRepo extends JpaRepository<Post, Long> {

    @Query("select p from Post p where p.author LIKE %:author%")
    public List<Post> findAllByAuthorContaining(@Param("author") String author);

    List<Post> findAllByAuthor(String author);

   // @Query("SELECT DISTINCT u FROM User u JOIN FETCH u.posts p WHERE p.title = :title")
    List<Post>findAllByTitle( String title);


}
