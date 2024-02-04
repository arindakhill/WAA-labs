
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import './BooksList.css';
import { Link, useNavigate } from 'react-router-dom';

const BooksList = () => {
const navigate = useNavigate();

    
  const [books, setBooks] = useState([]); // No need for a separate filteredBooks state
  const [filters, setFilters] = useState({
    category: '',
    title: '',
    minPrice: '',
    maxPrice: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks(); // Call fetchBooks when component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to fetch books with filters applied
  const fetchBooks = async (queryFilters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8080/api/v1/books', {
        params: queryFilters, // Pass filter values as query parameters
      });
      setBooks(response.data); // Set books with the response data
    } catch (err) {
      setError(`Error: ${err.response?.statusText || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  // Function to trigger a new fetch when filters are applied
  const applyFilters = () => {
    const queryFilters = {
      ...(filters.category && { category: filters.category }),
      ...(filters.title && { title: filters.title }),
      ...(filters.minPrice && { minPrice: filters.minPrice }),
      ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
    };
    fetchBooks(queryFilters); // Fetch books with the new query filters
  };

  return (
    <div>
      <div className="filter-container">
        {/* Filter input fields */}
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={filters.title}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          placeholder="Min Price"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <button onClick={applyFilters}>Filter</button>
      </div>
      {isLoading ? (
        <p>Loading books...</p> // Display a loading message while fetching books
      ) : error ? (
        <p>Error fetching books: {error}</p> // Display an error message if there was an error fetching books
      ) : (
        <div className="books-grid">
          {/* Map through filteredBooks to render Book components */}
          {books.map(s => (
             <Link to={`/books/${s.isbn}`} key={s.isbn} >
                 <Book title={s.title} price={s.price} isbn={s.isbn} />
            </Link>    
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
