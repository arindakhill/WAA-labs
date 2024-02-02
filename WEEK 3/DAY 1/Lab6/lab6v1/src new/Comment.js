// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.name}</p>
     
    </div>
  );
};

export default Comment;
