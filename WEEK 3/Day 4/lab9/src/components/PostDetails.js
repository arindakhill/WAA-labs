// src/components/PostDetails.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, deletePost } from '../services/PostService';
import Comment from './Comment'; // Assuming you have a Comment component
import EditPost from './EditPost'; // Assuming you have an EditPost component
import { PostContext } from '../PostContext'; // Assuming you're using context for post operations
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
const navigate = useNavigate();


  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false); // Assuming you want to control edit mode
  const { postId } = useParams();
  const { refreshPosts } = useContext(PostContext); // Use context if available or define function

  useEffect(() => {
    if (postId) {
      fetchPostById(postId)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.error('Error fetching post details:', error);
        });
    }
  }, [postId]);

  // Define or import these functions based on your app logic
  const handleEditClick = () => setEditing(true);
  const finishEditing = () => setEditing(false);
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postId)
        .then(() => {
          alert('Post deleted successfully');
        refreshPosts();
          navigate("/");
          
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
    }
  };

  if (!post) return <div>Loading post details...</div>;

  return (
    <div className='post-details'>
 
 <h2 style={{
            color:"white",
            backgroundColor:'black',
            borderRadius:'8px'

        }}>{post.title}</h2>
      <p>ID:{post.id}</p>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
     


{/* Render Comments */}
<div className="comments-section">

<h2 style={{
          color:"white",
          backgroundColor:'#f1356d',
          borderRadius:'8px',
         

      }}>Comments</h2>


        {post.comments && post.comments.map(comment => (
          <Comment key={comment.id}  id={comment.id} name={comment.name} />
        ))   
        
        
        }
      </div>


      {editing && <EditPost post={post} refreshPosts={refreshPosts} setEditing={setEditing} finishEditing={finishEditing} />}

      <div className='button-row'>

      <button className='edit-button' onClick={()=>handleEditClick()}> Edit</button>
      <button className='delete-button' onClick={handleDelete}>Delete</button>

      </div>
     

    </div>
  );
};

export default PostDetails;
