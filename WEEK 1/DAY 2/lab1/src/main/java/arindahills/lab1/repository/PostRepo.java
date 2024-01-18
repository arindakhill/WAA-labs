package arindahills.lab1.repository;

import arindahills.lab1.domain.Post;

import java.util.List;
import java.util.Optional;

public interface PostRepo {
    public List<Post> findAll();

    public Optional<Post> getById(int id);

    public void save(Post p);

    public void delete(int id);

    public void update(int id, Post p);


  List<Post> findAllBy(String author);

    List<Post>findAllByAuthorWith(String text);
}
