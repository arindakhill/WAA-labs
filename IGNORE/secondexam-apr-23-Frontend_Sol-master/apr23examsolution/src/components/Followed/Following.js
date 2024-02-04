import React, { useContext, useRef, useState } from 'react';
import './Followed.css';
import Followed from './Followed';
import { SelectedBooks } from '../../context/SelectedBooks';


const Following = (props) => {

    // const catParam = useRef(".");

    const [titleSearchState, setTitleSearchState] = useState("");
    const { selectedStudents } = useContext(SelectedBooks);

    const followingList = selectedStudents.map(postId => {
        return <Followed id={postId} key={postId} cat={titleSearchState} />;
    }
    );
    return (
        <div>
            <label>&nbsp;&nbsp;&nbsp;Filter by Title: </label>
            <input type="text"
                label={'category'}
                name={'category'}
                onChange={e => setTitleSearchState(e.target.value)}
                value={titleSearchState}
            />

            <center><h1>Selected Books</h1> </center>
            {followingList}
        </div>
    );

}

export default Following;