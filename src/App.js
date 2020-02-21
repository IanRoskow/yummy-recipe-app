import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import { getRecipes } from './api/Yummy';
import './App.css';

function App() {
  const [feed, setFeed] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const favorites = window.localStorage.getItem('favorites')
      ? window.localStorage.getItem('favorites').split(',')
      : [];

    const fetchData = async () => {
      const response = await getRecipes();
      //Map the confusing api object to my clean and pretty object
      const newMapping = response.map(recipe => {
        const favorite = favorites.includes(recipe.content.details.globalId)
          ? true
          : false;
        const newRecipe = {
          id: recipe.content.details.globalId,
          image: recipe.display.images[0],
          name: recipe.display.displayName,
          rating: recipe.content.details.rating,
          time: recipe.content.details.totalTime,
          favorite,
          link: recipe.display.source.sourceRecipeUrl,
          totalTime: recipe.content.details.totalTimeInSeconds
        };

        return newRecipe;
      });
      setFeed(newMapping);
    };
    fetchData();
  }, []);

  const setFavorite = id => {
    const newFeed = feed.map(recipe => {
      const newRecipe = JSON.parse(JSON.stringify(recipe));
      if (newRecipe.id === id) newRecipe.favorite = !newRecipe.favorite;
      return newRecipe;
    });
    const favorites = newFeed
      .filter(recipe => recipe.favorite)
      .map(recipe => recipe.id);
    setFeed(newFeed);
    window.localStorage.setItem('favorites', favorites);
  };

  const changeFiltered = () => {
    setFiltered(!filtered);
  };

  const changeSearch = term => {
    setSearch(term);
  };

  const changeSort = term => {
    setSort(term);
  };

  const recipeGrid =
    feed.length !== 0 ? (
      <RecipeGrid
        recipes={feed}
        filtered={filtered}
        setFavorite={setFavorite}
        search={search}
        sort={sort}
      />
    ) : null;

  return (
    <div className='App'>
      <Header
        changeFiltered={changeFiltered}
        filtered={filtered}
        changeSearch={changeSearch}
        changeSort={changeSort}
      />
      {recipeGrid}
    </div>
  );
}

export default App;
