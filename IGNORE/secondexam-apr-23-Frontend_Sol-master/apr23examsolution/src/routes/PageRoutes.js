import React from 'react'
import Homepage from '../pages/Homepage'
import Books from '../components/Books'
import { Routes, Route , Navigate} from 'react-router-dom';
import BookDetails from '../components/BookDetails';
import AddBook from '../components/AddBook';
import Missing from '../components/Missing';
import Following from '../components/Followed/Following';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />

            <Route path="books" element={<Books />} />
            <Route path="books/:id" element={<BookDetails />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="rd" element={<Navigate replace to="/selected-books" />} />
            <Route path="selected-books" element={<Following />} />
            <Route path="*" element={<Missing />} />
        </Routes>
    )
}

export default PageRoutes