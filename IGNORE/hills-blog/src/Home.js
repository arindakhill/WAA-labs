import React from 'react'


import useFetch from './UseFetch';
import BlogList from './BlogList';

const Home = () => {

const{data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

// const handleDelete=(id)=>{
//     const newBlogs = blogs.filter((blog)=> blog.id !== id)
//     setBlogs(newBlogs);
// }


//use effect





    return ( 
        <div className="home">

            {error && <div>{error}</div>}

          {isPending && <div>loading...</div>}  
       {blogs && <BlogList blogs={blogs} title = "All Posts" />} 
       {/* <BlogList blogs={blogs.filter((blog)=> blog.author.includes('mario'))} title = "Mario's blogs" handleDelete={handleDelete}/>*/}


        </div>
    );
        
}
 
export default Home;