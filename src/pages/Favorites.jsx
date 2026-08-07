import React from 'react';
import MovieCard from '../components/MovieCard';

export const Favorites = ({ favorites, isFavorite, toggleFavorite }) => {
  return (
    <div className="page-container">
      <div className="page-content-wrapper">
        <h2 className="page-title">My Favorite Movies</h2>

        {favorites.length === 0 ? (
          <div className="empty-state">
            <h3>No favorite movies saved yet.</h3>
            <p>Click the heart icon on any movie card to add it to your personal watchlist.</p>
          </div>
        ) : (
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFav={isFavorite(movie.id)}
                onToggleFav={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;