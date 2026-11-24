import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`app-content-wrapper ${loading ? 'preloading' : 'loaded'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />

        {/* Floating Quick Action Elements */}
        <div className="floating-actions">
          <a
            href="https://wa.me/919650515004?text=Hi%20CloudPixel%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="floating-btn floating-whatsapp"
            aria-label="Direct WhatsApp Chat"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle size={22} />
            <span className="floating-tooltip">Chat with us</span>
          </a>

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="floating-btn floating-top"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
