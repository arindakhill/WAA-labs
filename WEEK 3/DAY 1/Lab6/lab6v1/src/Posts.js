import React from "react";
import Post from "./Post";

const Posts = ({ onSelectPost, activePost }) => {
  // Sample data for posts
  const postData = [
    { id: 1, title: 'Data Structures and Algorithms', author: 'Prof. E. Maxwell' },
    { id: 2, title: 'Introduction to Machine Learning', author: 'Dr. S. Johansson' },
    { id: 3, title: 'Advanced Database Systems', author: 'Dr. T. Ruano' },
    { id: 4, title: 'Operating Systems Design', author: 'Prof. U. Ricci' }
  ]
  

  return (
    <div className="postsContainer">
      {postData.map((post) => (
        // <div onClick={() => onSelectPost(post)} key={post.id}>
        <Post
          key={post.id}
          {...post}
          onSelectPost={onSelectPost}
          activePost={activePost}
        />
        // </div>
      ))}
    </div>
  );
};

export default Posts;
