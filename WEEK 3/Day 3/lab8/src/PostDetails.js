
import React ,{useState} from 'react';
import { deletePost } from './services/PostService';
import { updatePost } from './services/PostService';
import EditPost from './EditPost';
import Comment from './Comment';


const PostDetails = ({ post, refreshPosts }) => {



  //edit handler
  const [editing, setEditing] = useState(false);
  const handleEditClick=()=>{
    setEditing(true);
  };

  //when editing is done
  const finishEditing = ()=>{
    setEditing(false);
  }



//delete handler
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if(confirmDelete){
      deletePost(post.id)
      .then(() => {
        alert('Post deleted successfully');
        refreshPosts(); // Refresh the list of posts
        
      })
      .catch(error => console.error('Error deleting post:', error));
    }
  
  };

  if (!post) return <div>Select a post to view details</div>;

//Function to handle edit click
// const editClicked = (event)=>{
//   event.preventDefault();//prevent default form action
//   onEdit(post); //call the onedit function passed via props with the post
// }



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
          borderRadius:'8px'

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


