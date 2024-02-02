import React, { useState, useRef} from 'react';
import { addPost } from './services/PostService';

const AddPost = ({ refreshPosts }) => {
const titleRef = useRef();
const authorRef = useRef();
const contentRef = useRef();


//const [post, setPost] = useState({ title: '', author: '', content: '' });


// const handleChange = (e)=>{
//     const{name, value} = e.target;
//     setPost(prevPost => ({...prevPost,[name]:value}));
// };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newPost = { title, author, content };
    const post={
      title:titleRef.current.value,
      author:authorRef.current.value,
      content:contentRef.current.value
    };

    if(!post.title || !post.author || !post.content){
        alert('All fields are required');
        return;
    }

    try{
        await addPost(post);
        alert('post added successfully');
       // setPost({ title: '', author: '', content: '' });//reset form
       titleRef.current.value="";
       authorRef.current.value="";
       contentRef.current.value="";
        refreshPosts();// update the list of posts
    } catch(error){
        console.error("Failed to add post",error);
    }
    

  };

  return (
    <form onSubmit={handleSubmit} className='addPostForm'>
      <input type="text" placeholder="Title" name="title" ref={titleRef}  required />
      <input type="text" placeholder="Author" name='author' ref={authorRef}  required/>
      <textarea placeholder="Content" name='content' ref={contentRef} ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
