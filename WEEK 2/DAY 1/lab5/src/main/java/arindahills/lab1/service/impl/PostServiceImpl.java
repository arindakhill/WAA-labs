package arindahills.lab1.service.impl;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.User;
import arindahills.lab1.domain.dto.PostDto;
import arindahills.lab1.exception.RecordNotFoundException;
import arindahills.lab1.repository.PostRepo;
import arindahills.lab1.repository.UserRepo;
import arindahills.lab1.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    UserRepo userRepo;
    public List<PostDto> findAll(){
        return postRepo.findAll()
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }


    public PostDto findById(long id){
        return modelMapper.map(postRepo.findById(id), PostDto.class);
    }

    public void save(PostDto p){
        // Get the username of the authenticated user
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // Find the user entity based on the username (assuming the username is unique)
        User user = userRepo.findByEmail(email);


        Post post = modelMapper.map(p,Post.class);


        // Set the user to the post
        post.setUser(user);

        postRepo.save(post);
    }

    public void delete(long id){
        Post post = postRepo.findById(id)
                .orElseThrow(()-> new RecordNotFoundException("Post with id: " + id + " not found"));
        postRepo.delete(post);
    }

    public void update(int id, PostDto p){
        Post post = modelMapper.map(p, Post.class);
        postRepo.save(post);
    }


   public List<PostDto> findAllBy(String author){
        return postRepo.findAllByAuthor(author)
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }

    public List<PostDto>findAllByAuthorWith(String text){
        return postRepo.findAllByAuthorContaining(text)
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }

public  List<PostDto>findAllByTitle(String title){
        return postRepo.findAllByTitle(title)
                .stream()
                .map(post -> modelMapper.map(post,PostDto.class))
                .collect(Collectors.toList());
}


}
