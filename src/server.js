const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRoutes);

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'data/images')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
