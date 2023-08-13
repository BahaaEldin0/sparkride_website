import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import other page components
import Captains from './pages/Captains';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import SocialResponsibility from './pages/SocialResponsibility';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/captains" element={<Captains />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/social" element={<SocialResponsibility />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Router>
  );
}

export default App;
