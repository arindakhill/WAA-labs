package arindahills.lab1.service.impl;

import arindahills.lab1.domain.User;
import arindahills.lab1.domain.dto.PostDto;
import arindahills.lab1.domain.dto.UserDto;
import arindahills.lab1.repository.UserRepo;
import arindahills.lab1.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;
   public List<UserDto> findAll(){
       return userRepo.findAll()
                .stream()
                .map(user->modelMapper.map(user, UserDto.class))
                .collect(Collectors.toList());
    }
   public UserDto findById(long id){
    return modelMapper.map(userRepo.findById(id),UserDto.class);
   }
    public void save(UserDto u){
       User user = modelMapper.map(u,User.class);
       userRepo.save(user);
    }

    public List<PostDto> findAllPosts(long id){
       return userRepo.findPostsByUserId(id)
               .stream()
               .map(post -> modelMapper.map(post,PostDto.class))
               .collect(Collectors.toList());
    }

    public List<UserDto> findUsersWithMoreThanOnePost(){
       return userRepo.findUsersWithMoreThanOnePost()
               .stream()
               .map(user -> modelMapper.map(user,UserDto.class))
               .collect(Collectors.toList());
    }

   public List<UserDto> findUsersWithMoreThanNumberOfPosts(int count){
        return userRepo.findUsersWithMoreThanNumberOfPosts(count)
                .stream()
                .map(user -> modelMapper.map(user,UserDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(long id) {
        userRepo.deleteById(id);
    }


    public List<UserDto> findAllByAuthorWith(String title){
        return userRepo.findAllByAuthorWith(title)
                .stream()
                .map(user -> modelMapper.map(user,UserDto.class))
                .collect(Collectors.toList());
    }
}
