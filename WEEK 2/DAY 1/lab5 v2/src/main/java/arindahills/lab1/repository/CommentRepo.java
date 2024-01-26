package arindahills.lab1.repository;

import arindahills.lab1.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CommentRepo extends JpaRepository<Comment, Long> {
    @Query("SELECT c FROM Comment c WHERE c.id = :commentId AND c.post.id = :postId")
    Optional<Comment> findByIdAndPostId(@Param("commentId") Long commentId, @Param("postId") Long postId);

}
