import React from 'react';

function MovieList({ movies, onMovieSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieSelect(movie.id)}>
          <img src={`images/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title} ({movie.release_date.substring(0, 4)})</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
