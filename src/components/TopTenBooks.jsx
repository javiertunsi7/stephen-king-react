import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import stephenKingService from '../services/stephenKingService';
import '../styles/TopTenBooks.css';

const TopTenBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTopTenBooks();
  }, []);

  const loadTopTenBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await stephenKingService.getTopTenBooks();
      setBooks(data);
    } catch (err) {
      setError('No se pudieron cargar los libros.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando los mejores libros...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container alert alert-danger">
        {error}
      </div>
    );
  }

  return (
    <div className="pageContent" id="top-ten">
      <main>
        <div className="wrapper">
          <h2 className="titleData">
            <b>Los 10 mejores libros de Stephen King</b>
          </h2>
          <div id="dataSection" className="cardsData">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopTenBooks;