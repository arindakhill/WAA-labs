// src/components/AddPost.js
import React, { useState, useContext } from 'react';
import { addPost } from '../services/PostService';
import { PostContext } from '../PostContext';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({ title: '', author: '', content: '' });
  const { refreshPosts } = useContext(PostContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPost(newPost);
      setNewPost({ title: '', author: '', content: '' });
      refreshPosts();
      navigate("/");
      
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
<div className="create">

    <form onSubmit={handleSubmit} className="addPostForm">
      <input
        name="title"
        value={newPost.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="author"
        value={newPost.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <textarea
        name="content"
        value={newPost.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <button type="submit">Add Post</button>
    </form>
    </div>
  );
};

export default AddPost;
