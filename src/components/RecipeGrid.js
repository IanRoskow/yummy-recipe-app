import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid({
  recipes,
  setFavorite,
  filtered,
  search,
  sort
}) {
  const filteredRecipes = filtered
    ? [...recipes.filter(recipe => recipe.favorite === true)]
    : [...recipes];

  const searchRecipes =
    search !== ''
      ? [
          ...filteredRecipes.filter(
            recipe =>
              recipe.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        ]
      : [...filteredRecipes];

  let sortRecipes = [];
  if (sort === '') {
    sortRecipes = [...searchRecipes];
  } else if (sort === 'rating') {
    sortRecipes = [
      ...searchRecipes.sort((a, b) => {
        return b[sort] - a[sort];
      })
    ];
  } else {
    sortRecipes = [
      ...searchRecipes.sort((a, b) => {
        return a[sort] - b[sort];
      })
    ];
  }

  const recipeCards = sortRecipes.map(recipe => (
    <RecipeCard key={recipe.id} recipe={recipe} setFavorite={setFavorite} />
  ));
  return <div style={gridStyle}>{recipeCards}</div>;
}

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  maxWidth: '1400px',
  margin: '50px auto'
};
