import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { useFavorites } from './hooks/useFavorites.js';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="app-wrapper">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        favoritesCount={favorites.length} 
      />

      {activeTab === 'home' ? (
        <Home isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      ) : (
        <Favorites 
          favorites={favorites} 
          isFavorite={isFavorite} 
          toggleFavorite={toggleFavorite} 
        />
      )}
    </div>
  );
}

export default App;