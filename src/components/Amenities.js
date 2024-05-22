// src/components/Amenities.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Amenities() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Amenities
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Request additional amenities and services.
      </Typography>
    </Box>
  );
}

export default Amenities;
