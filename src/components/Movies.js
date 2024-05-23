// src/components/Movies.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Movies() {
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
        Movies
      </Typography>
      <Box
        sx={{
          width: '80%',
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          p: 2,
          borderRadius: 2,
        }}
      >
        <video width="100%" controls>
          <source src="/DEEPBLUE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
}

export default Movies;
