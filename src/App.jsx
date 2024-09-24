 
import './components/StarshipCard.css';
import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard.jsx';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  // Fetch initial data
  useEffect(() => {
    async function fetchStarships() {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData.results);
      setNextPage(starshipsData.next);  // Store the next page URL
    }
    fetchStarships();
  }, []);

  // Function to load the next page
  const loadMoreStarships = async () => {
    if (!nextPage) return; // If there's no next page, do nothing
    const res = await fetch(nextPage);
    const data = await res.json();
    setStarships([...starships, ...data.results]);  // Append new starships
    setNextPage(data.next);  // Update the next page URL
  };

  return (
    <div className="app">
      <h1>Starships</h1>
      <div className="starship-list">
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
      {nextPage && (
        <button className="load-more" onClick={loadMoreStarships}>
          Load More Starships
        </button>
      )}
    </div>
  );
};

export default App;
