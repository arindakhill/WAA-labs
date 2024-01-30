import React from 'react'

function Post({id, title, author}){
    return(
        <div className="post">
            <p>Id:{id}</p>
            <p>Title:{title}</p>
            <p>Author:{author}</p>
        </div>
    );
}

export default Post;