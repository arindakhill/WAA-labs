import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost, fetchPostById } from '../services/PostService';
import { PostContext } from '../PostContext';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { refreshPosts } = useContext(PostContext);
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    fetchPostById(postId)
      .then(response => {
        setPost({
          title: response.data.title,
          content: response.data.content,
          author: response.data.author
        });
      })
      .catch(error => console.error('Error fetching post details:', error));
  }, [postId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    updatePost(postId, post)
      .then(() => {
        setIsPending(false);
        refreshPosts(); // assuming this updates the global posts state
        navigate("/"); // redirect to the dashboard or posts list
      })
      .catch(error => {
        setIsPending(false);
        console.error('Error updating post:', error);
      });
  };

  return (
    <div className="create">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} className="editPostForm">
        <label>Post Title: </label>
        <input
          name="title"
          type="text"
          required
          value={post.title}
          onChange={handleChange}
        />

        <label>Post Content: </label>
        <textarea
          name="content"
          required
          value={post.content}
          onChange={handleChange}
        ></textarea>

        <label>Post Author: </label>
        <input
          name="author"
          type="text"
          required
          value={post.author}
          onChange={handleChange}
        />

        {!isPending && <button>Update Post</button>}
        {isPending && <button disabled>Updating post...</button>}
      </form>
    </div>
  );
};

export default EditPost;
