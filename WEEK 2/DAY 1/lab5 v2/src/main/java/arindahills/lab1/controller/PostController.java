package arindahills.lab1.controller;

import arindahills.lab1.aop.annotation.ExecutionTime;
import arindahills.lab1.domain.dto.PostDto;
import arindahills.lab1.repository.PostRepo;
import arindahills.lab1.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/v1/posts")

public class PostController {
    @Autowired
    PostService postService;

    @Autowired
    PostRepo postRepo;
@GetMapping
@ExecutionTime
public List<PostDto> findAll(){
    //System.out.println(posts);

    return postService.findAll();

}

@GetMapping("/{id}")
@ExecutionTime
public ResponseEntity<PostDto> getById(@PathVariable("id") long id){
    PostDto postDto = postService.findById(id);
    return ResponseEntity.ok(postDto);
}

@PostMapping
@ExecutionTime
public void save(@RequestBody PostDto p){
    postService.save(p);
}

@DeleteMapping("/{id}")
@ExecutionTime
    public void delete(@PathVariable("id") int id){
    postService.delete(id);
}
@PutMapping("/{id}")
@ExecutionTime
    public void update(@PathVariable("id") int id, @RequestBody PostDto p){
    postService.update(id,p);
}

@GetMapping("/filter")
@ExecutionTime
public List<PostDto>findAllByAuthorWith(@RequestParam String text){
    return postService.findAllByAuthorWith(text);
}

@GetMapping("/title/{title}")
@ExecutionTime
    public  List<PostDto>findAllByTitle(@PathVariable("title") String title){
    return postService.findAllByTitle(title);
}

}
