import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewProduct.css';

const AddBook = (props) => {

    const newProductForm = useRef();

    const navigate = useNavigate();

    const makeAuthorArray = (authors) => {
        let arr = authors.split(" ");
        return arr.map(a => {
            return {name:a}
        })
    }
    const StudentHandler = (e) => {
        e.preventDefault();
        const form = newProductForm.current;
        const data = {
            title: form['title'].value,
            price: form['price'].value,
            category: {"name":form['category'].value},
            authors: makeAuthorArray(form['authors'].value)
        };

        console.log(data);
        axios.post('http://localhost:8080/api/v1/books', data)
            .then(data => {
                navigate('/books');
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <div className="NewProduct">

            <form ref={newProductForm} onSubmit={StudentHandler}>
                <h1>Add a Book</h1>

                <label>Title</label>
                <input type="text"
                    label={'title'}
                    name={'title'}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />

                <label>Category</label>
                <input type="text"
                    label={'category'}
                    name={'category'}
                />

                <label>Author/s</label>
                <input type="text"
                    label={'authors'}
                    name={'authors'}
                />
                <button>Add Book </button>
            </form>

        </div>
    );

}

export default AddBook;