// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
        <h1>Homepage</h1>

        <ul className="list">
            <li className="i-one"><Link to="/books">Books</Link></li>
            <li className="i-two"><Link to="/add-book">Add Book</Link></li>
            <li className="i-three"><Link to="/selected-books">Selected Books</Link></li>
        </ul>
    </div>
  )
}

export default Homepage;
