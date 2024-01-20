package arindahills.lab1.controller;

import arindahills.lab1.domain.Comment;
import arindahills.lab1.domain.dto.response.CommentDto;
import arindahills.lab1.domain.dto.response.PostDto;
import arindahills.lab1.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<CommentDto> findAll(){
        return commentService.findAllCommentDtos();
    }

    @GetMapping("/{id}")
   public CommentDto findById(@PathVariable long id){
       return commentService.findCommentDtoById(id);
   }

    @PostMapping
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto) {
        commentService.save(commentDto);
        return new ResponseEntity<>(commentDto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDto> updateComment(@PathVariable long id, @RequestBody CommentDto commentDto) {
        commentService.update(id, commentDto);
        return new ResponseEntity<>(commentDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable long id) {
        commentService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/posts/{postId}")
    public ResponseEntity<CommentDto> addCommentToPost(@PathVariable long postId, @RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(commentService.addCommentToPost(postId, commentDto), HttpStatus.CREATED);
    }


}
