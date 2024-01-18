package arindahills.lab1.service.impl;

import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.dto.response.PostDto;
import arindahills.lab1.exception.RecordNotFoundException;
import arindahills.lab1.repository.PostRepo;
import arindahills.lab1.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    ModelMapper modelMapper;
    public List<PostDto> findAll(){
        return postRepo.findAll()
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }


    public PostDto getById(int id){
        return modelMapper.map(postRepo.getById(id), PostDto.class);
    }

    public void save(PostDto p){
        Post post = modelMapper.map(p,Post.class);
        postRepo.save(post);
    }

    public void delete(int id){
        Post post = postRepo.getById(id)
                .orElseThrow(()-> new RecordNotFoundException("Post with id: " + id + " not found"));
        postRepo.delete(id);
    }

    public void update(int id, PostDto p){
        Post post = modelMapper.map(p, Post.class);
        postRepo.update(id, post);
    }


   public List<PostDto> findAllBy(String author){
        return postRepo.findAllBy(author)
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }

    public List<PostDto>findAllByAuthorWith(String text){
        return postRepo.findAllByAuthorWith(text)
                .stream()
                .map(post -> modelMapper.map(post, PostDto.class))
                .collect(Collectors.toList());
    }




}
