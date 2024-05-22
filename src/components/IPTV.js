// src/components/IPTV.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function IPTV() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        IPTV
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Watch live TV channels and on-demand videos.
      </Typography>
    </Box>
  );
}

export default IPTV;
