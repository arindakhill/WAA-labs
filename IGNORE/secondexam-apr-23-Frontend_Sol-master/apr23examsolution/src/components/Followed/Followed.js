import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Followed.css';
import { SelectedBooks } from '../../context/SelectedBooks';
import { useNavigate, redirect } from 'react-router';

const Followed = (props) => {



    const { selectedStudents, setSelectedStudents } = useContext(SelectedBooks);


    const [postCall, setPostCall] = useState({
        title:""
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios('http://localhost:8080/api/v1/books/' + props.id)
            .then(response => {
                setPostCall(response.data);
            })
    }, [props]);



    const unfollowPostHandler = () => {
        let removedPost = selectedStudents;
        removedPost.splice(removedPost.indexOf(props.id), 1);
        setSelectedStudents(removedPost);
        navigate("/rd");
    

    };
    // props.cat===""?true:postCall.title.includes(props.cat)
    console.log(props.cat==="" );
    console.log(props.cat );
    console.log("CHECK!!!!!!")
    let post;
    if (props.id != null && props.cat===""?true:postCall.title.includes(props.cat)) {
        
        post = (
            <div className="Followed">
                <h1>{postCall.isbn}</h1>
                <p>{postCall.title}</p>
                <div className="Edit">
                    <button onClick={unfollowPostHandler} className="Delete">Unselect</button>
                </div>
            </div>
        );
    }


    return post;
}

export default Followed;
