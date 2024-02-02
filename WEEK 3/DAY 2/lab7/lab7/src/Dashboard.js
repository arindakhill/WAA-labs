// import React, { useState, useEffect } from "react";
// import Posts from "./Posts";
// import PostDetails from "./PostDetails";
// import axios from 'axios';

// const Dashboard = () => {
//   const [title, setTitle] = useState("");
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleInput = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleUpdate = () => {
//     console.log(`Updating title to ${title}`);
//     setTitle("");
//   };
//   const selectPost = (post) => {
//     console.log(post.id);
//     setSelectedPost(post);
//   };

//   return (
//     <div>
//       <Posts onSelectPost={selectPost} activePost={selectedPost?.id} />
//       <PostDetails post={selectedPost} />

//       <input
//         type="text"
//         value={title}
//         onChange={handleInput}
//         placeholder="Enter new title"
//       />
//       <button onClick={handleUpdate}>Update Title</button>
//     </div>
//   );
// };

// export default Dashboard;


// src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { fetchPosts } from '../services/PostService';
// import Posts from './Posts';
// import PostDetails from './PostDetails';
// import AddPost from './AddPost';

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   useEffect(() => {
//     fetchPosts().then(response => setPosts(response.data));
//   }, []);

//   return (
//     <div>
//       <AddPost onAdd={() => fetchPosts().then(response => setPosts(response.data))} />
//       <Posts posts={posts} onSelectPost={setSelectedPost} />
//       {selectedPost && <PostDetails postId={selectedPost} />}
//     </div>
//   );
// };

// export default Dashboard;


//version 2

// import React from 'react';
// import Posts from './Posts';
// import AddPost from './AddPost';

// const Dashboard = () => {
//   return (
//     <div>
//       <AddPost />
//       <Posts />
//     </div>
//   );
// };

// export default Dashboard;


//version 3

import React, { useState, useEffect } from 'react';
import { fetchPosts } from './services/PostService';
import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    refreshPosts();
  }, []);

  // Function to refresh the list of posts from the backend
  const refreshPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response.data); // Update the posts state with the fetched data
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to select a post and show its details
  const selectPost = (post) => {
    setSelectedPost(post);
  };


const handlePostAdded = ()=>{
  refreshPosts();
};


  return (
    <div>
      <AddPost refreshPosts={handlePostAdded} /> {/* AddPost component to add new posts */}
      <Posts posts={posts} selectPost={selectPost} />
      {selectedPost && <PostDetails post={selectedPost} refreshPosts={refreshPosts} />}
    </div>
  );
};

export default Dashboard;
