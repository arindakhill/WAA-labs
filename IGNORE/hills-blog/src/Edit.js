import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8000/blogs/' + id)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      alert('Blog post updated');
      setIsPending(false);
      history.push('/blogs/' + id);
    });
  };

  return (
    <div className="create">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields similar to Create component, pre-filled with existing data */}

        <label>Blog Title: </label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <label>Blog Body: </label>
        <textarea type="text" required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>

        <label>Blog Author: </label>
                <select value={author} >
                    <option value='mario'>ethan</option>
                    <option value='hillary'>hansel</option>
                </select> 


               {!isPending && <button>Update post</button>} 
               {isPending && <button disabled>Updating post...</button>} 


      </form>
    </div>
  );
};

export default Edit;
