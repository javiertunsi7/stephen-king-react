import React, { useState, useEffect } from 'react';
import stephenKingService from '../services/stephenKingService';
import '../styles/BooksTable.css';

const BooksTable = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAllBooks();
  }, []);

  const loadAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await stephenKingService.getAllBooks();
      setBooks(data);
    } catch (err) {
      setError('No se pudieron cargar los libros de la API.');
    } finally {
      setLoading(false);
    }
  };

  const formatVillains = (villains) => {
    if (!villains || villains.length === 0) return 'Sin villanos';
    return villains.map((v) => v.name).join(', ');
  };

  const formatNotes = (notes) => {
    if (!notes || notes.length === 0) return 'Sin notas';
    return notes.join(', ');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando todos los libros...</p>
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
    <div id="books">
      <h2><b>Libros de Stephen King</b></h2>
      <div className="table-container">
        <div className="table-scroll">
          <table id="booksTable">
            <thead>
              <tr>
                <th>Año</th>
                <th>Título</th>
                <th>Editorial</th>
                <th>Páginas</th>
                <th>Villanos</th>
                <th>Nominaciones</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.Year}</td>
                  <td>{book.Title}</td>
                  <td>{book.Publisher}</td>
                  <td>{book.Pages}</td>
                  <td>{formatVillains(book.villains)}</td>
                  <td>{formatNotes(book.Notes)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksTable;