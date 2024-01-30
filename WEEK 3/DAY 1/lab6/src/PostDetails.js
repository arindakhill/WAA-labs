import React from 'react';

function PostDetails({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <p>This is the content in the post...</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
  