package arindahills.lab1.service;

import arindahills.lab1.domain.User;
import arindahills.lab1.domain.dto.response.PostDto;
import arindahills.lab1.domain.dto.response.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> findAll();

    UserDto findById(long id);

    void save(UserDto u);

    List<PostDto> findAllPosts(long id);
    List<UserDto> findUsersWithMoreThanOnePost();
}
