import {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('')
    const[author, setAuthor] = useState('ethan')
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true)
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }
        ).then(()=>alert('New post added'))

        
        .then(()=>{
            setTitle('')
            setAuthor('ethan')
            setBody('')
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        });

       
    }



  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <label>Blog Body: </label>
        <textarea type="text" required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>

        <label>Blog Author: </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value='mario'>ethan</option>
                    <option value='hillary'>hansel</option>
                </select> 


               {!isPending && <button>Add post</button>} 
               {isPending && <button disabled>Adding post...</button>} 
      </form>
    
  
    </div>
  );
};

export default Create;
