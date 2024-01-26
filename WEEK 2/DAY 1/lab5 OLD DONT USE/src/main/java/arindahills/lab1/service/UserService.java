package arindahills.lab1.service;

import arindahills.lab1.domain.dto.PostDto;
import arindahills.lab1.domain.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> findAll();

    UserDto findById(long id);

    void save(UserDto u);

    List<PostDto> findAllPosts(long id);
    List<UserDto> findUsersWithMoreThanOnePost();

    List<UserDto> findUsersWithMoreThanNumberOfPosts(int count);

    void delete(long id);

    List<UserDto> findAllByAuthorWith(String title);
}
