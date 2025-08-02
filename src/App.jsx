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

function App() {
  const location = useLocation();
  const pageRef = useRef();
  const navbarRef = useRef();

  // Animate page content on route change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, [location]);

  // Animate navbar on mount (top-down slide)
  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="bg-primary">
      <div ref={navbarRef}>
        <Navbar />
      </div>

      <main ref={pageRef}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
