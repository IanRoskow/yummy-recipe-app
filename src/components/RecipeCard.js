import React from 'react';
import FavoriteButton from './layout/FavoriteButton/FavoriteButton';

export default function RecipeCard({ recipe, setFavorite }) {
  return (
    <div style={container}>
      <FavoriteButton
        selected={recipe.favorite}
        setFavorite={setFavorite}
        id={recipe.id}
      />
      <div style={imageContainer}>
        <img style={image} src={recipe.image} alt={`A ${recipe.name}`}></img>
      </div>
      <h4>{recipe.name}</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>{`Rating: ${recipe.rating}`}</div>
        <div>{`Total Time: ${recipe.time}`}</div>
      </div>
      <div style={{ padding: '10px 5px 20px' }}>
        <a href={recipe.link} target='_blank' rel='noopener noreferrer'>
          Go to the Recipe!
        </a>
      </div>
    </div>
  );
}

const container = {
  width: '350px',
  border: '2px solid #ccc',
  textAlign: 'center',
  margin: '40px 0 0',
  position: 'relative'
};

const imageContainer = {
  overflow: 'hidden',
  height: '200px',
  position: 'relative'
};
const image = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  left: '0',
  top: '50%',
  transform: 'translate(0, -50%)'
};
