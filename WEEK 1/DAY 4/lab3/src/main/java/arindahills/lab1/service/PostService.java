package arindahills.lab1.service;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.dto.response.PostDto;

import java.util.List;

public interface PostService {
    public List<PostDto> findAll();

    public PostDto findById(long id);

    public void save(PostDto p);

    public void delete(long id);

    public void update(int id, PostDto p);


    List<PostDto> findAllBy(String author);

    List<PostDto>findAllByAuthorWith(String text);
    List<PostDto>findAllByTitle(String title);
}
