import React, { useState } from 'react';
import { Star, Heart, Film, Play } from 'lucide-react';

export const MovieCard = ({ movie, isFav, onToggleFav }) => {
  const [imgError, setImgError] = useState(false);

  const rawPoster = movie?.poster_path;
  const hasValidPoster = rawPoster && rawPoster !== 'N/A' && !imgError;
  const releaseYear = movie?.release_date || 'N/A';

  return (
    <div className="movie-card">
      <div className="hd-badge">HD</div>

      {onToggleFav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFav(movie);
          }}
          className={`fav-btn ${isFav ? 'is-active' : ''}`}
        >
          <Heart size={18} color="#fff" fill={isFav ? '#fff' : 'transparent'} />
        </button>
      )}

      <div className="poster-wrapper">
        {hasValidPoster ? (
          <img
            src={rawPoster}
            alt={movie?.title || 'Movie'}
            loading="lazy"
            onError={() => setImgError(true)}
            className="poster-image"
          />
        ) : (
          <div className="poster-fallback">
            <Film size={42} color="#e50914" className="fallback-icon" />
            <span className="fallback-title">{movie?.title}</span>
            <span className="fallback-subtext">Poster Unavailable</span>
          </div>
        )}

        <div className="play-overlay">
          <div className="play-icon-circle">
            <Play size={24} fill="#fff" color="#fff" className="play-icon" />
          </div>
        </div>
      </div>

      <div className="card-details">
        <h3 className="card-title">{movie?.title}</h3>
        <div className="card-meta">
          <span>{releaseYear}</span>
          <span className="rating-badge">
            <Star size={13} fill="#f5c518" /> {movie?.vote_average || '7.5'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;