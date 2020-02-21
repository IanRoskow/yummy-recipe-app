import React from 'react';
import './FavoriteButton.css';

export default function FavoriteButton({ setFavorite, id, selected }) {
  const select = selected ? 'select' : null;
  return (
    <button
      onClick={() => setFavorite(id)}
      className={`favorite-button ${select}`}
    >
      <i className='fa fa-star fa-2x'></i>
    </button>
  );
}
