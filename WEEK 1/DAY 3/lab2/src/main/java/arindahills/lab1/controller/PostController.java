package arindahills.lab1.controller;

import arindahills.lab1.domain.dto.response.PostDto;
import arindahills.lab1.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/v1/posts")

public class PostController {
    @Autowired
    PostService postService;
@GetMapping
public List<PostDto> findAll(){
    //System.out.println(posts);

    return postService.findAll();

}

@GetMapping("/{id}")
public PostDto getById(@PathVariable("id") long id){
    return postService.findById(id);
}

@PostMapping
public void save(@RequestBody PostDto p){
    postService.save(p);
}

@DeleteMapping("/{id}")
    public void delete(@PathVariable("id") int id){
    postService.delete(id);
}
@PutMapping("/{id}")
    public void update(@PathVariable("id") int id, @RequestBody PostDto p){
    postService.update(id,p);
}

@GetMapping("/filter")
public List<PostDto>findAllByAuthorWith(@RequestParam String text){
    return postService.findAllByAuthorWith(text);
}



}
