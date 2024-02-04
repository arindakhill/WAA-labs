import axios from "axios";
import { useEffect, useState, Fragment, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { SelectedBooks } from "../context/SelectedBooks";
import Author from "./Author";
import './BookDetails.css';

const BookDetails = (props) => {

    const params = useParams();
    const navigate = useNavigate();

    const [bookDetail, setBookDetail] = useState({});
    const { selectedStudents, setSelectedStudents } = useContext(SelectedBooks);

    console.log(selectedStudents.includes(params.id));
    console.log(params.id)
    console.log(selectedStudents)

    useEffect(
        () => {
            console.log(params.id)
            if (params.id) {
                axios.get('http://localhost:8080/api/v1/books/' + params.id)
                    .then(response => {
                        setBookDetail(response.data)
                    })
                    .catch(err => console.log(err.message))
            }
        }, [params.id])

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/books/' + id)
            .then(response => {
                navigate('/books')
            })
            .catch(err => {
                console.error(err);
            })
    }


    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let bookDetailsDisplay = null;
    if (params.id && bookDetail) {

        bookDetailsDisplay = (
            <div className="ProductDetail">
                <div >
                    <div>
                        <h3> Book Details </h3>
                    </div>
                    Title: {bookDetail.title}<br />
                    ISBN: {bookDetail.isbn}
                    <div >
                        Price: {bookDetail.price}
                        <br />

                        <div style={{ textAlign: "left" }}>
                            {space} {bookDetail.authors == null ? "Please add authors" : "Authors"} <br />
                            {bookDetail.authors != null ? bookDetail.authors.map(a => {
                                return <Author name={a.name} />
                            }) : null}
                        </div>
                    </div>


                </div>

                <button onClick={() => { deleteButtonClicked(params.id) }}> Delete </button>

                <br />
                <br />
                <div>
                    {
                        selectedStudents.includes(params.id)
                            ?
                            <button onClick={() => {
                                let removedPost = selectedStudents;
                                removedPost.splice(removedPost.indexOf(params.id), 1);
                                setSelectedStudents([...removedPost]);
                            }}>
                                Unselect </button>
                            :
                            <button onClick={() => {
                                setSelectedStudents([...selectedStudents, params.id]);
                            }}>
                                Select </button>}
                </div>
                
                
                    <div className="Spec" >
                        <button onClick={() => { navigate("/books"); }}> Back</button>
                    </div>
                </div>
        );
    }

    return bookDetailsDisplay;



}

export default BookDetails;