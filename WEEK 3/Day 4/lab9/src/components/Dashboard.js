// src/components/Dashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { fetchPosts } from '../services/PostService';
import Posts from './Posts';
import AddPost from './AddPost';
import { Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../PostContext';

const Dashboard = () => {
  const {posts, setPosts} = useContext(PostContext);
 


  return (
   
<div className="post-list">
  <h1>Posts List</h1>
          
            {
                posts && posts.map((post)=>(
                    <div className='post-preview' key={post.id}>
                        <Link to={`/post-details/${post.id}`}>
                          <h2>ID:{post.id}</h2>
                        <h1>{post.title}</h1>
                        <p>Written by {post.author}</p>
                        </Link>                    
                    </div>
               ))
               };
  </div>


  
)};

export default Dashboard;
