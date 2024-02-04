// src/routes/PageRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksList from '../components/BooksList';
import BookDetails from '../components/BookDetails';
import AddBook from '../components/AddBook'; // Assuming you have this component
import Homepage from '../components/Homepage'; // Assuming you have this component
// ... import other components

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/:isbn" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
      {/* Define other routes as needed */}
    </Routes>
  );
};

export default PageRoutes;
