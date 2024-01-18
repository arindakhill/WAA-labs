package arindahills.lab1.service;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.dto.response.PostDto;

import java.util.List;

public interface PostService {
    public List<PostDto> findAll();

    public PostDto getById(int id);

    public void save(PostDto p);

    public void delete(int id);

    public void update(int id, PostDto p);


    List<PostDto> findAllBy(String author);

    List<PostDto>findAllByAuthorWith(String text);
}
