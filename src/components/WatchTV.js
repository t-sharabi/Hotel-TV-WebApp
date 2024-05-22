// src/components/WatchTV.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { fetchMovies, playMovie } from '../synologyService';

function WatchTV() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movieList = await fetchMovies();
      setMovies(movieList);
    };
    loadMovies();
  }, []);

  const handlePlayMovie = async (movieId) => {
    const movieData = await playMovie(movieId);
    window.location.href = movieData.stream_url; // Adjust based on actual response
  };

  return (
    <Box
      sx={{
        p: 4,
        textAlign: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(/landing-page.jpg)', // Ensure the image is in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Current Movies
      </Typography>
      <List>
        {movies.map((movie) => (
          <ListItem button key={movie.id} onClick={() => handlePlayMovie(movie.id)}>
            <ListItemText primary={movie.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default WatchTV;
