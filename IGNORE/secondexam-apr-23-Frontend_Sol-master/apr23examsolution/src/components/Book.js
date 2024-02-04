import React from 'react'

const Book = (props) => {

    return (
        <article className="Content" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.price}</div>

            </div>
        </article>
    );
}

export default Book