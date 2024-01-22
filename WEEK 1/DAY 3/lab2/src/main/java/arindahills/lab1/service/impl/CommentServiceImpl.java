package arindahills.lab1.service.impl;

import arindahills.lab1.domain.Comment;
import arindahills.lab1.domain.Post;
import arindahills.lab1.domain.User;
import arindahills.lab1.domain.dto.CommentDto;
import arindahills.lab1.exception.RecordNotFoundException;
import arindahills.lab1.repository.CommentRepo;
import arindahills.lab1.repository.PostRepo;
import arindahills.lab1.repository.UserRepo;
import arindahills.lab1.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<CommentDto> findAllCommentDtos() {
        List<Comment> comments = commentRepo.findAll();
        return comments.stream()
                .map(comment -> modelMapper.map(comment, CommentDto.class))
                .collect(Collectors.toList());
    }

    public CommentDto findCommentDtoById(long id) {
        Comment comment = commentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Comment not found"));
        return modelMapper.map(comment, CommentDto.class);
    }

    public void save(CommentDto commentDto) {
        commentRepo.save(modelMapper.map(commentDto, Comment.class));
    }

    public void update(long id, CommentDto commentDto) {
        Optional<Comment> optionalComment = commentRepo.findById(id);
        if (optionalComment.isPresent()) {
            Comment existingComment = optionalComment.get();
            existingComment.setName(commentDto.getName());

            Comment updatedComment = commentRepo.save(existingComment);
        } else {
            throw new RecordNotFoundException("comment with id " + id + " doesn't exist");
        }
    }

    public void delete(long id) {
        Comment comment = commentRepo.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Comment with id: " + id + " not found"));
        commentRepo.delete(comment);
    }


    public CommentDto addCommentToPost(long postId, CommentDto commentDto) {
        // Find the post by id
        Post post = postRepo.findById(postId)
                .orElseThrow(() -> new RecordNotFoundException("Post with id: " + postId + " not found"));

        // Map the DTO to an entity
        Comment comment = modelMapper.map(commentDto, Comment.class);

        // Associate the comment with the post
        post.getComments().add(comment);

        // Save the post in the database
        postRepo.save(post);

        // Map the saved comment back to a DTO and return it
        return commentDto;
    }

    public CommentDto getCommentForPostOfUser(Long userId, Long postId, Long commentId) {
        //check if user exits
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RecordNotFoundException("user with user id " + userId + " not found"));
        //check if posts exists and belongs to the user
        Post post = userRepo.findPostOfUserById(userId, postId)
                .orElseThrow(() -> new RecordNotFoundException("Post not found with id: " + postId + " for user: " + userId));


        // Check if the comment exists and belongs to the post
        Comment comment = commentRepo.findByIdAndPostId(commentId, postId)
                .orElseThrow(() -> new RecordNotFoundException(
                        "Comment not found with id: " + commentId + " for post: " + postId));

        // Map the comment entity to a CommentDto
        CommentDto commentDto = modelMapper.map(comment, CommentDto.class);

        return commentDto;

    }
}
