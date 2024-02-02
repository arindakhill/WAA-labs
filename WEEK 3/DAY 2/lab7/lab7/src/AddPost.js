import React, { useState } from 'react';
import { addPost } from './services/PostService';

const AddPost = ({ refreshPosts }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [content, setContent] = useState('');

const [post, setPost] = useState({ title: '', author: '', content: '' });


const handleChange = (e)=>{
    const{name, value} = e.target;
    setPost(prevPost => ({...prevPost,[name]:value}));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newPost = { title, author, content };
    if(!post.title || !post.author || !post.content){
        alert('All fields are required');
        return;
    }

    try{
        await addPost(post);
        alert('post added successfully');
        setPost({ title: '', author: '', content: '' });//reset form
        refreshPosts();// update the list of posts
    } catch(error){
        console.error("Failed to add post",error);
    }
    
    
    // addPost(newPost)
    //   .then(() => {
    //     alert('Post added successfully');
    //     setTitle('');
    //     setAuthor('');
    //     setContent('');
    //     refreshPosts(); // Optionally, refresh the list of posts
    //   })
    //   .catch(error => console.error('Error adding post:', error));
  };

  return (
    <form onSubmit={handleSubmit} className='addPostForm'>
      <input type="text" placeholder="Title" name="title" value={post.title} onChange={handleChange} required />
      <input type="text" placeholder="Author" name='author' value={post.author} onChange={handleChange} required/>
      <textarea placeholder="Content" name='content' value={post.content} onChange={handleChange}></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
