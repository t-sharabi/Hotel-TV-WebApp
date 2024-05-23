// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IPTV from './components/IPTV';
import RoomService from './components/RoomService';
import Invoice from './components/Invoice';
import Amenities from './components/Amenities';
import SpaAndGym from './components/SpaAndGym';
import Movies from './components/Movies';
import WatchTV from './components/WatchTV'; // Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iptv" element={<IPTV />} />
        <Route path="/room-service" element={<RoomService />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/spa-and-gym" element={<SpaAndGym />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watch-tv" element={<WatchTV />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
