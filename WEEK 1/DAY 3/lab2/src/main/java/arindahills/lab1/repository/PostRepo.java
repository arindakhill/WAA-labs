package arindahills.lab1.repository;

import arindahills.lab1.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PostRepo extends JpaRepository<Post, Long> {

    @Query("select p from Post p where p.author LIKE %:author%")
    public List<Post> findAllByAuthorContaining(@Param("author") String author);

    List<Post> findAllByAuthor(String author);



}
