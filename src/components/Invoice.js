// src/components/Invoice.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Invoice() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Invoice
      </Typography>
      <Typography variant="h6" color="textSecondary">
        View your current charges and invoice details.
      </Typography>
    </Box>
  );
}

export default Invoice;
