import React, { useState } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import moviesData from './data/movies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = (query) => {
    const filteredMovies = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const fetchMovieDetails = (movieId) => {
    const movie = moviesData.find(movie => movie.id === movieId);
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>Movie Database Explorer</h1>
      <SearchBar onSearch={searchMovies} />
      <div className="container">
        <MovieList movies={movies} onMovieSelect={fetchMovieDetails} />
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
