package arindahills.lab1.controller;

import arindahills.lab1.aop.annotation.ExecutionTime;
import arindahills.lab1.domain.dto.CommentDto;
import arindahills.lab1.domain.dto.PostDto;
import arindahills.lab1.domain.dto.UserDto;
import arindahills.lab1.service.CommentService;
import arindahills.lab1.service.PostService;
import arindahills.lab1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    PostService postService;
    @Autowired
    CommentService commentService;
    @GetMapping
    public List<UserDto> findAll(){
        return userService.findAll();
    }
    @GetMapping("/{id}")
    @ExecutionTime
    public UserDto findById(@PathVariable long id){
        return userService.findById(id);
    }

    @PostMapping
    @ExecutionTime
    public void save(@RequestBody UserDto u){
        userService.save(u);
    }

    @GetMapping("/{id}/posts")
    @ExecutionTime
    public List<PostDto> findAllPosts(@PathVariable long id){
        return userService.findAllPosts(id);

    }

    @GetMapping("/with-moreThan-one-post")
    @ExecutionTime
    public List<UserDto>  findUsersWithMoreThanOnePost(){
        return userService.findUsersWithMoreThanOnePost();
    }

    @GetMapping("/with-moreThan-{count}-posts")
    @ExecutionTime
    public List<UserDto>  findUsersWithMoreThanNumberOfPosts(@PathVariable int count){
        return userService.findUsersWithMoreThanNumberOfPosts(count);
    }

    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable long id){
        userService.delete(id);
    }


    @GetMapping("/filter")
    @ExecutionTime
    public List<UserDto> findAllByAuthorWith(@RequestParam String text){
        return userService.findAllByAuthorWith(text);
    }

    @GetMapping ("/{userId}/posts/{postId}/comments/{commentId}")
    public ResponseEntity<CommentDto> getCommentForPostOfUser(
            @PathVariable Long userId,
            @PathVariable Long postId,
            @PathVariable Long commentId
    ){
       CommentDto commentDto = commentService.getCommentForPostOfUser(userId,postId,commentId);
       return ResponseEntity.ok(commentDto);
    }
}
