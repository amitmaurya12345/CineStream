import React, { useEffect, useState, useCallback } from 'react';
import { getPopularMovies, searchMovies } from '../services/omdb';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import MoodMatcher from '../components/MoodMatcher';
import { useDebounce } from '../hooks/useDebounce';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const Home = ({ isFavorite, toggleFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchMoviesData = useCallback(async (query, pageNum) => {
    setLoading(true);
    try {
      const data = query.trim() 
        ? await searchMovies(query, pageNum)
        : await getPopularMovies(pageNum);

      setTotalPages(data.total_pages || 1);
      setMovies((prev) => (pageNum === 1 ? data.results : [...prev, ...data.results]));
    } catch (err) {
      console.error("Error executing fetchMoviesData:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPage(1);
    fetchMoviesData(debouncedSearchTerm, 1);
  }, [debouncedSearchTerm, fetchMoviesData]);

  const handleAIMovieFound = (movieTitle) => {
    setSearchTerm(movieTitle);
  };

  const handleLoadMore = useCallback(() => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMoviesData(debouncedSearchTerm, nextPage);
    }
  }, [page, totalPages, debouncedSearchTerm, fetchMoviesData]);

  const loaderRef = useInfiniteScroll(handleLoadMore, page < totalPages, loading);

  return (
    <div className="page-container">
      <div className="search-controls-wrapper">
        <MoodMatcher onAIMovieFound={handleAIMovieFound} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {movies.length === 0 && !loading ? (
        <p className="empty-state">No movies found matching criteria.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              isFav={isFavorite ? isFavorite(movie.id) : false}
              onToggleFav={toggleFavorite}
            />
          ))}
        </div>
      )}

      <div ref={loaderRef} className="infinite-loader">
        {loading && <p>Loading additional movies...</p>}
      </div>
    </div>
  );
};

export default Home;
