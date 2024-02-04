import React, { useRef, useState, useEffect } from 'react'
import Book from './Book';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Books = () => {

    const catParam = useRef();
    const titleParam = useRef();
    const mipParam = useRef();
    const mapParam = useRef();

    const navigate = useNavigate();

    const [flag, setFlag] = useState(false);

    const [booksState, setBooksState] = useState(
        [
            

        ]
    );

    const filterHandler = () => {
        setFlag(!flag)
    }
    const fetchProducts = () => {

        axios.get('http://localhost:8080/api/v1/books', {
            params: {
                category: catParam.current.value,
                title: titleParam.current.value,
                minPrice: mipParam.current.value,
                maxPrice: mapParam.current.value,
            }
        })
            .then(response => {
                setBooksState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    useEffect(() => {
        fetchProducts()
    },
        [flag])

    const books = booksState.map(s => {
        return (

            <Link to={`${s.isbn}`} key={s.isbn} >
                <Book title={s.title} price={s.price} isbn={s.isbn}/>
            </Link>


        )
    });


    return (
        <div className="Product">
            <div className="Product">
                <label>Filter: </label>


                <label>&nbsp;&nbsp;&nbsp;Category: </label>
                <input ref={catParam} type="text"
                    label={'category'}
                    name={'category'}
                />
                <label>&nbsp;&nbsp;&nbsp;Title: </label>
                <input ref={titleParam} type="text"
                    label={'title'}
                    name={'title'}
                />
                <label>&nbsp;&nbsp;&nbsp;Min_Price: </label>
                <input ref={mipParam} type="text"
                    label={'minPrice'}
                    name={'minPrice'}
                />
                <label>&nbsp;&nbsp;&nbsp;Max_Price: </label>
                <input ref={mapParam} type="text"
                    label={'maxPrice'}
                    name={'maxPrice'}
                />

                <button onClick={filterHandler} > Filter</button><br />
            </div>

            <br />
            <div className='Product'>
                {books}
            </div>
            <br />

            <div style={{ display: "block" }}>
                <div className="Spec" >
                    <button onClick={() => { navigate("/homepage"); }}> Back</button>
                </div>
            </div>
        </div>
    )
}

export default Books