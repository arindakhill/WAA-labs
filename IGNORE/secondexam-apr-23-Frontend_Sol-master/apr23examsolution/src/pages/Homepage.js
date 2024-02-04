import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>Homepage

<ul class="list">
    <li class="i-one"><Link to="/books" >Books </Link></li>
    <li class="i-two"><Link to="/add-book" >Add Book</Link></li>
    <li class="i-three"><Link to="/selected-books" >Selected Books</Link></li>
</ul>
    </div>
  )
}

export default Homepage