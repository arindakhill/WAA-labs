import React from 'react'
import './Book.css';

const Book = (props) => {

    return (
        <div className="book-container" onClick={props.clicked}>
            <p>{props.title}</p>
            <div className="book-title">
                <br/>
                <div className="book-price">{props.price}$</div>
            </div>
        </div>
    );
}

export default Book