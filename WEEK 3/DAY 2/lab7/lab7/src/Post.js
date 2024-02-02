

import React from 'react';

import "./App.css";

const Post = ({post, selectPost, activePost})=>{
const isActive = post.id === activePost;
const postClass = isActive?'post active-post':'post';



  return(
    <div className='post' onClick={()=>selectPost(post.id)}>
      <p>ID:{post.id}</p>
      <h3>Title: {post.title}</h3>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default Post;
