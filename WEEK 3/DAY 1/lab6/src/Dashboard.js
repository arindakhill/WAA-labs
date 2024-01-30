import React, {useState} from 'react'
import Posts from './Posts';

function Dashboard(){
    const [posts, setPosts] = useState([
        { id: 111, title: 'Happiness', author: 'John' },
        { id: 112, title: 'MIU', author: 'Dean' },
        { id: 113, title: 'Enjoy Life', author: 'Jasmine' }

    ]);

const [title, setTitle] = useState(posts[0].title);


const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const updateTitle = ()=>{
    const updatedPosts = [...posts];
    updatedPosts[0].title = title;
    setPosts(updatedPosts);

  }

  return (
    <div>
        <Posts posts={posts}/>
        <input type="text" value={title} onChange={handleTitleChange}/>
        <button onClick={updateTitle}>Change name</button>
    </div>
  );
}
export default Dashboard;