package arindahills.lab1.domain.dto;

import arindahills.lab1.domain.Post;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private long id;
    private String name;
   //private PostDto post;
}
