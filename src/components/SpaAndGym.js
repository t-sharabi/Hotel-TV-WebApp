// src/components/SpaAndGym.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

function SpaAndGym() {
  return (
    <Box
      sx={{
        p: 4,
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/spa-image.png" // Replace with the actual path to the Spa image
                alt="Spa"
                sx={{ width: '600px', height: 'auto' }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '200px' }}
                onClick={() => console.log('Book Spa')}
              >
                Book Your Time
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/gym-image.jpg" // Replace with the actual path to the Gym image
                alt="Gym"
                sx={{ width: '500px', height: 'auto' }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '200px' }}
                onClick={() => console.log('Book Gym')}
              >
                Book Your Time
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SpaAndGym;
