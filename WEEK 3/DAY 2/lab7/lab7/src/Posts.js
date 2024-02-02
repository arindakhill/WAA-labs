// import React, {useEffect, useState, userState} from "react";
// import Post from "./Post";
// import axios from 'axios'


// const Posts = ({ onSelectPost, activePost }) => {
//   // // Sample data for posts
//   // const postData = [
//   //   { id: 1, title: 'Data Structures and Algorithms', author: 'Prof. E. Maxwell' },
//   //   { id: 2, title: 'Introduction to Machine Learning', author: 'Dr. S. Johansson' },
//   //   { id: 3, title: 'Advanced Database Systems', author: 'Dr. T. Ruano' },
//   //   { id: 4, title: 'Operating Systems Design', author: 'Prof. U. Ricci' }
//   // ]

//   const [posts, setPosts] = useState([]);

//   useEffect(()=>{
//     axios.get('http://localhost:8080/api/v1/posts')
//     .then(response=>setPosts(response.data))
//     .catch(error=>console.error("There was an error fetching the post",error))

//   },[])
  

//   return (
//     <div className="postsContainer">
//       {posts.map((post) => (
//         // <div onClick={() => onSelectPost(post)} key={post.id}>
//         <Post
//           key={post.id}
//           post = {post}
//           onSelectPost={onSelectPost}
//           activePost={activePost}
//         />
//         // </div>
//       ))}
//     </div>
//   );
// };

// export default Posts;

//v2
// import React, { useState, useEffect } from 'react';
// import { fetchPosts } from './services/PostService';
// import PostDetails from './PostDetails';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const refreshPosts = () => {
//     fetchPosts()
//       .then(response => setPosts(response.data))
//       .catch(error => console.error('Error fetching posts:', error));
//   };

//   useEffect(() => {
//     refreshPosts();
//   }, []);

//   return (
//     <div className='postsContainer'>
//       {posts.map(post => (
//         <div key={post.id} onClick={() => setSelectedPost(post)}>
//           <h3>{post.title}</h3>
//           <p>Author: {post.author}</p>
//         </div>
//       ))}
//       {selectedPost && <PostDetails post={selectedPost} refreshPosts={refreshPosts} />}
//     </div>
//   );
// };

// export default Posts;

//v3
import React from 'react';
import Post from './Post';
 
const Posts = ({posts, selectPost, activePost})=>{
  return(
    <div className='postsContainer'>
      {
        posts.map(post=>(
          <Post key={post.id}   post={post} selectPost={()=>selectPost(post)} activePost={activePost}/>
        ))
      }
    </div>
  )
}

export default Posts;