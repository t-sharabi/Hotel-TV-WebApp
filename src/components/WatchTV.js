// src/components/WatchTV.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WatchTV() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 4,
        minHeight: '100vh',
        backgroundImage: 'url(/landing-page.jpg)', // Ensure the image is in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Watch TV
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: 300,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => navigate('/iptv')}
          >
            <Box
              component="img"
              src="/live-tv-icon.png" // Ensure you have an appropriate icon for Live TV
              alt="Live TV"
              sx={{ width: '50%', height: '50%', mb: 1 }}
            />
            <Typography variant="h6">Live TV</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: 300,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => navigate('/movies')}
          >
            <Box
              component="img"
              src="/movies-icon.png" // Ensure you have an appropriate icon for Movies
              alt="Movies"
              sx={{ width: '50%', height: '50%', mb: 1 }}
            />
            <Typography variant="h6">Movies</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: 300,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => navigate('/series')}
          >
            <Box
              component="img"
              src="/series-icon.png" // Ensure you have an appropriate icon for Series
              alt="Series"
              sx={{ width: '50%', height: '50%', mb: 1 }}
            />
            <Typography variant="h6">Series</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WatchTV;
