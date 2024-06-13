import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, CircularProgress } from '@mui/material';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock data to be used when offline
    const mockData = [
      { title: 'Movie 1', description: 'Description 1', url: 'https://watchseriesx.to/movie/campton-manor-r343y' },
      { title: 'Movie 2', description: 'Description 2', url: '#' },
      { title: 'Movie 3', description: 'Description 3', url: '#' },
      { title: 'Movie 4', description: 'Description 4', url: '#' },
      { title: 'Movie 5', description: 'Description 5', url: '#' },
    ];

    const fetchMovies = async () => {
      try {
        // Simulate an API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMovies(mockData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching movies. Please try again later.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 4,
        textAlign: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Available Movies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                width: 200,
              }}
            >
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2">{movie.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => window.open(movie.url, '_blank')}
              >
                Watch Now
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
