import React from 'react'
import Post from './Post'

function Posts({posts}){
    return(
        <div className='posts'>
            {Posts.map(post=>(
                <Post key={post.id}{...post}/>

            ))}
        </div>
    )
}

export default Posts;