import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

const BlogDetails = () => {

const {id} = useParams()
const {data:blog,error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleDelete=()=>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
        method:'DELETE'
    }).then(()=>{
        alert('post deleted');
        history.push('/')
    })
}


    return (  
        <div className="blog-details">
            {isPending && <div> Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleDelete}>delete post</button>
                    <Link to={`/edit/${blog.id}`}
                    style={{ 
                        background: 'blue', 
                        color: 'white', 
                        padding: '6px', 
                        borderRadius: '8px', 
                        marginLeft: '10px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        cursor: 'pointer'
                      }}
                    
                    
                    >Edit post</Link>

                </article>
            
            )}
           

        </div>
    );
}
 
export default BlogDetails;