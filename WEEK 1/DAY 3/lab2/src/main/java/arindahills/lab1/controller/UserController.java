package arindahills.lab1.controller;

import arindahills.lab1.domain.User;
import arindahills.lab1.domain.dto.response.PostDto;
import arindahills.lab1.domain.dto.response.UserDto;
import arindahills.lab1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping
    public List<UserDto> findAll(){
        return userService.findAll();
    }
    @GetMapping("/{id}")
    public UserDto findById(@PathVariable long id){
        return userService.findById(id);
    }

    @PostMapping
    public void save(@RequestBody UserDto u){
        userService.save(u);
    }

    @GetMapping("/{id}/posts")
    public List<PostDto> findAllPosts(@PathVariable long id){
        return userService.findAllPosts(id);

    }

    @GetMapping("/with-multiple-posts")
    public List<UserDto>  findUsersWithMoreThanOnePost(){
        return userService.findUsersWithMoreThanOnePost();
    }
}
