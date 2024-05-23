// src/components/IPTV.js
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

const channels = [
  { id: 1, name: 'Info Channel' },
  { id: 2, name: 'CNN International' },
  { id: 3, name: 'BBC World News' },
  { id: 4, name: 'Das Erste' },
  { id: 5, name: 'RAI 1' },
  { id: 6, name: 'Rai 4' },
  { id: 7, name: 'Rai 2' },
  { id: 8, name: 'France 24' },
  { id: 9, name: 'Al Jazeera' },
  { id: 10, name: 'NHK World' },
];

function IPTV() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
    console.log(`Selected channel: ${channel.name}`);
  };

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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" gutterBottom>
          Channel Category: <span style={{ color: 'red' }}>All</span>
        </Typography>
        <Typography variant="h6" gutterBottom>
          14:50
        </Typography>
      </Box>
      <Box sx={{ maxHeight: '60vh', overflowY: 'auto', ml: 1 }}>
        <List>
          {channels.map((channel, index) => (
            <ListItem
              button
              key={channel.id}
              onClick={() => handleSelectChannel(channel)}
              sx={{
                backgroundColor: selectedChannel && selectedChannel.id === channel.id ? 'red' : 'rgba(255, 255, 255, 0.8)',
                color: selectedChannel && selectedChannel.id === channel.id ? 'white' : 'black',
                mb: 1,
                borderRadius: '4px',
                height: '50px', // Adjust the height
                width: '300px', // Adjust the width to make it smaller
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Space between number and text
                padding: '0 10px', // Padding inside the box
                marginLeft: '0px', // Adjust left margin to align under the text
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  width: '30px', // Adjust the width of the number box
                  textAlign: 'center',
                }}
              >
                {index + 1}
              </Typography>
              <ListItemText primary={channel.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px' }}
            onClick={() => console.log('TV Guide')}
          >
            TV Guide
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px' }}
            onClick={() => console.log('Category')}
          >
            Category
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px' }}
            onClick={() => console.log('Audio')}
          >
            Audio
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px' }}
            onClick={() => console.log('Subtitle')}
          >
            Subtitle
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IPTV;
