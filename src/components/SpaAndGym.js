// src/components/SpaAndGym.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function SpaAndGym() {
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
        Spa and Gym
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enjoy our state-of-the-art spa and gym facilities to relax and rejuvenate during your stay.
      </Typography>
    </Box>
  );
}

export default SpaAndGym;
