import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL || 'https://www.omdbapi.com';

/**
 * Fetches popular movies using default query fallback.
 * @param {number} page - Current page number.
 * @returns {Promise<{results: Array, total_pages: number}>} Normalized movie collection.
 */
export const getPopularMovies = async (page = 1) => {
  if (!API_KEY) {
    console.warn('OMDb API key missing.');
    return { results: [], total_pages: 1 };
  }

  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        apikey: API_KEY,
        s: 'Batman',
        type: 'movie',
        page: page,
      },
    });

    if (response.data.Response === 'True') {
      return {
        results: response.data.Search.map((item) => ({
          id: item.imdbID,
          title: item.Title,
          poster_path: item.Poster !== 'N/A' ? item.Poster : null,
          release_date: item.Year,
          vote_average: 8.2,
        })),
        total_pages: Math.ceil(parseInt(response.data.totalResults, 10) / 10),
      };
    }
    return { results: [], total_pages: 1 };
  } catch (error) {
    console.error('API Service Error (getPopularMovies):', error);
    return { results: [], total_pages: 1 };
  }
};

/**
 * Searches movies by user query.
 * @param {string} query - Search term.
 * @param {number} page - Current page number.
 * @returns {Promise<{results: Array, total_pages: number}>} Normalized movie collection.
 */
export const searchMovies = async (query, page = 1) => {
  if (!API_KEY) {
    console.warn('OMDb API key missing.');
    return { results: [], total_pages: 1 };
  }

  if (!query || !query.trim()) {
    return getPopularMovies(page);
  }

  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        apikey: API_KEY,
        s: query.trim(),
        type: 'movie',
        page: page,
      },
    });

    if (response.data.Response === 'True') {
      return {
        results: response.data.Search.map((item) => ({
          id: item.imdbID,
          title: item.Title,
          poster_path: item.Poster !== 'N/A' ? item.Poster : null,
          release_date: item.Year,
          vote_average: 7.8,
        })),
        total_pages: Math.ceil(parseInt(response.data.totalResults, 10) / 10),
      };
    }
    return { results: [], total_pages: 1 };
  } catch (error) {
    console.error('API Service Error (searchMovies):', error);
    return { results: [], total_pages: 1 };
  }
};