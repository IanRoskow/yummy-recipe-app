import React from 'react';
import './FavoriteFilter.css';

export default function FavoriteFilter({ changeFiltered, filtered }) {
  const select = filtered ? 'selected' : null;
  return (
    <button className={`favorite-filter ${select}`} onClick={changeFiltered}>
      Favorites
    </button>
  );
}
