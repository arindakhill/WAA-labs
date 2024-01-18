package arindahills.lab1.repository.impl;

import arindahills.lab1.domain.Post;
import arindahills.lab1.exception.RecordNotFoundException;
import arindahills.lab1.repository.PostRepo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class PostRepoImpl implements PostRepo {

    public static List<Post> posts;
    private static int postId = 3;
    static {
        posts = new ArrayList<>();


        Post p1 = new Post(1,"Post 1","content 1","Arinda Hills");
        Post p2 = new Post(2,"Post 2","content 2","Esther EP");
        posts.add(p1);
        posts.add(p2);
    }





    public List<Post> findAll(){
        return posts;
    }

    public Optional<Post> getById(int id){
        return posts
                .stream()
                .filter(l -> l.getId() == id)
                .findFirst();
    }

    public void save(Post p){
        p.setId(postId);
        postId++;
        posts.add(p);
    }

    public void delete(int id){
        var post =posts
                .stream()
                .filter(l -> l.getId() == id)
                .findFirst().get();
        posts.remove(post);
    }

    public void update(int id, Post p){
        Post toUpdate = getById(id).orElseThrow(()-> new RecordNotFoundException("Post with id " + id + " not found"));
        toUpdate.setTitle(p.getTitle());
        toUpdate.setContent(p.getContent());
        toUpdate.setAuthor(p.getAuthor());
    }


    public List<Post> findAllBy(String author){
        return posts
                .stream()
                .filter(p->p.getAuthor().equals(author))
                .collect(Collectors.toList());
    }

   public List<Post>findAllByAuthorWith(String text){
        return posts
                .stream()
                .filter(p->p.getAuthor().contains(text))
                .collect(Collectors.toList());
   }





}
