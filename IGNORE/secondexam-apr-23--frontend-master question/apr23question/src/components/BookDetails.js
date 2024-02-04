// BookDetails.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookDetails.css'; // Assuming you have a BookDetails.css file for styling

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const { isbn } = useParams(); // Get ISBN from the URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/books/${isbn}`);
        setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details');
      }
    };

    fetchBookDetails();
  }, [isbn]);

  const deleteBook = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/books/${isbn}`);
      navigate('/books'); // Navigate back to the books list after deletion
    } catch (err) {
      setError('Failed to delete the book');
    }
  };

  const selectBook = () => {
    // Here you would handle adding the book to a list of selected books
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="book-details">
      {error && <p className="error">{error}</p>}
      {book && (
        <>
          <h2>Book Details</h2>
          <p>Title: {book.title}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Price: {book.price}$</p>
          <h3>Authors</h3>
          <ul>
            {book.authors.map((author) => (
              <li key={author.id}>{author.name}</li>
            ))}
          </ul>
          <button onClick={deleteBook}>Delete</button>
          <button onClick={selectBook}>Select</button>
          <button onClick={goBack}>Back</button>
        </>
      )}
    </div>
  );
};

export default BookDetails;
