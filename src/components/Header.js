import React, { useState } from 'react';
import FavoriteFilter from './layout/FavoriteFilter/FavoriteFilter';
let timeout = null;

export default function Header({
  changeFiltered,
  filtered,
  changeSearch,
  changeSort
}) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const onChange = e => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      changeSearch(value);
    }, 1000);
  };

  const onChangeSort = e => {
    const value = e.target.value;
    setSort(value);
    changeSort(value);
  };

  return (
    <div style={header}>
      <h2>Seasonal Recipes</h2>
      <FavoriteFilter changeFiltered={changeFiltered} filtered={filtered} />
      <div>
        <input value={search} onChange={onChange} placeholder='Search...' />
      </div>
      <div>
        <select id='sort' name='sort' value={sort} onChange={onChangeSort}>
          <option disabled value=''>
            {' '}
            -- select an option --{' '}
          </option>
          <option value='rating'>Rating</option>
          <option value='totalTime'>Time</option>
        </select>
      </div>
    </div>
  );
}

const header = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '20',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'rgba(200,200,200, .7)'
};
