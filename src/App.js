import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import Footer from './pages/Footer';

// Halaman wisata
import PulauPahawang1D from './pages/wisata/PulauPahawang1D';
import PulauWayang1D from './pages/wisata/PulauWayang1D';
import PrivateTrip from './pages/PrivateTrip';
import DetailWisata from './components/template1';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/private-trip" element={<PrivateTrip />} />

        {/* Routing wisata */}
        <Route path="/wisata/pulau-pahawang-1d" element={<PulauPahawang1D />} />
        <Route path="/wisata/pulau-wayang-1d" element={<PulauWayang1D />} />
        <Route path="/wisata/detail-wisata" element={<DetailWisata />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
