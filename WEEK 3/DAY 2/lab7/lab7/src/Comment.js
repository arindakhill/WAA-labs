import React from "react";

// Renamed 'CommentItem' to avoid conflict with a global 'Comment' declaration.
const Comment = ({ id,name }) => {
  return (
    <div className="comment-item">


  

      <p className="comment-name">{id}:{name}</p>
    </div>
  );
};

export default Comment;