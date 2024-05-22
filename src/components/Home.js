// src/components/Home.js
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
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
      <Typography variant="h2" gutterBottom>
        Welcome to Yafour Resort Hotel
      </Typography>
      <Typography variant="h6" color="inherit" gutterBottom>
        Experience seamless access to all hotel services and entertainment right from your smart TV.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button
            component={Link}
            to="/watch-tv"
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/watch-tv-icon.png"
              alt="Watch TV"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Watch TV
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/screen-sharing-icon.png"
              alt="Screen Sharing"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Screen Sharing
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/radio-channels-icon.png"
              alt="Radio Channels"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Radio Channels
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/room-service"
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/room-service-icon.png"
              alt="Room Service"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Room Service
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/spa-and-gym"
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/spa-and-gym-icon.png"
              alt="Spa and Gym"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Spa and Gym
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/invoice"
            variant="contained"
            sx={{
              width: 150,
              height: 150,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'none',
              borderRadius: '10px',
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
              color: 'black',
            }}
          >
            <Box
              component="img"
              src="/invoice-icon.png"
              alt="Check Your Invoice"
              sx={{ width: '50%', height: '50%' }}
            />
            <Typography variant="button" display="block">
              Check Your Invoice
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
