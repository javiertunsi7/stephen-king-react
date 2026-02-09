import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const { image, Title, Year, Publisher, ISBN } = book;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={image}
        className="card-img-top"
        alt={`Portada de ${Title}`}
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/300x450/8b0000/ffffff?text=${encodeURIComponent(Title)}`;
        }}
      />
      <div className="card-body">
        <h4 className="card-title">{Title}</h4>
        <h5 className="card-year">{Year}</h5>
        <h5 className="card-text">{Publisher}</h5>
        <h5 className="card-text">{ISBN}</h5>
      </div>
    </div>
  );
};

export default BookCard;