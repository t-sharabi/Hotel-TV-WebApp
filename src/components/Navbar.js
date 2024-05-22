// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hotel Landing Page
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/iptv">
            IPTV
          </Button>
          <Button color="inherit" component={Link} to="/room-service">
            Room Service
          </Button>
          <Button color="inherit" component={Link} to="/spa-and-gym">
            Spa and Gym
          </Button>
          <Button color="inherit" component={Link} to="/invoice">
            Invoice
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
