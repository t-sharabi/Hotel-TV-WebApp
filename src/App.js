import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import IPTV from './components/IPTV';
import RoomService from './components/RoomService';
import Invoice from './components/Invoice';
import Amenities from './components/Amenities';
import SpaAndGym from './components/SpaAndGym';
import WatchTV from './components/WatchTV';
import Navbar from './components/Navbar';

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
        <Route path="/watch-tv" element={<WatchTV />} />
      </Routes>
    </Router>
  );
}

export default App;
