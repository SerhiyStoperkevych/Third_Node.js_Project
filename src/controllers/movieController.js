const path = require('path');
const moviesData = require(path.join(__dirname, '../data/movies.json'));

const searchMovies = (req, res) => {
  const { query } = req.query;
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredMovies);
};

const getMovieDetails = (req, res) => {
  const { id } = req.params;
  const movie = moviesData.find(movie => movie.id === parseInt(id));
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};
