import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';

import Home from './pages/Home';
import Services from './pages/Services';
import MyWork from './pages/MyWork';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScroolToTop'; // <-- Import it here
import ServiceDetailPage from './pages/ServiceDetail';

function App() {

  return (
    <div className="bg-primary relative">
      <ScrollToTop /> {/* Scroll to top on route change */}

        <Navbar />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
