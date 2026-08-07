import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'cinestream_favorites';

/**
 * Custom hook managing synchronized LocalStorage favorite movies state.
 * @returns {{favorites: Array, toggleFavorite: Function, isFavorite: Function}}
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse favorites from localStorage:', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to sync favorites to localStorage:', e);
    }
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      return exists ? prev.filter((item) => item.id !== movie.id) : [...prev, movie];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((item) => item.id === movieId);
  };

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;