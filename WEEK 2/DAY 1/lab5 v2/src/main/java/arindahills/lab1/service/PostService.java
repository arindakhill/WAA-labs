package arindahills.lab1.service;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.dto.CommentDto;
import arindahills.lab1.domain.dto.PostDto;

import java.util.List;

public interface PostService {
    public List<PostDto> findAll();

    public PostDto findById(long id);

    public PostDto save(PostDto p);

    public void delete(long id);

    public void update(int id, PostDto p);


    List<PostDto> findAllBy(String author);

    List<PostDto>findAllByAuthorWith(String text);
    List<PostDto>findAllByTitle(String title);

    List<CommentDto> findCommentsByPostId(Long id);
}
