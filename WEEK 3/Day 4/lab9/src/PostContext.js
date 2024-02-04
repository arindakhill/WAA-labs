// src/PostContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchPosts } from './services/PostService'; // Ensure the path is correct

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const refreshPosts = async () => {
    try {
      const response = await fetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  // Provide both posts and selectedPostId in the context value
  const contextValue = {
    posts,
    refreshPosts,
    selectedPostId,
    setSelectedPostId
  };

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
};
