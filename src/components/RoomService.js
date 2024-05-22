// src/components/RoomService.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

function RoomService() {
  const [formData, setFormData] = useState({
    roomNumber: '',
    serviceRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8069/api/room_service', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting room service request:', error);
    }
  };

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
        Room Service
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="roomNumber"
          label="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          name="serviceRequest"
          label="Service Request"
          value={formData.serviceRequest}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit Request
        </Button>
      </form>
    </Box>
  );
}

export default RoomService;
