// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import IPTV from './components/IPTV';
import RoomService from './components/RoomService';
import SpaAndGym from './components/SpaAndGym';
import Invoice from './components/Invoice';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iptv" element={<IPTV />} />
          <Route path="/room-service" element={<RoomService />} />
          <Route path="/spa-and-gym" element={<SpaAndGym />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
