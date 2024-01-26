package arindahills.lab1.service;

import arindahills.lab1.domain.dto.CommentDto;

import java.util.List;

public interface CommentService {
    public List<CommentDto> findAllCommentDtos();
    public CommentDto findCommentDtoById(long id);
    public void delete(long id);
    void update(long id, CommentDto commentDto);
   void  save(CommentDto commentDto);

    CommentDto addCommentToPost(long postId, CommentDto commentDto);
    CommentDto getCommentForPostOfUser(Long userId, Long postId, Long commentId);
}
