import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit = () =>
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
            includedLanguages: 'en,ta,hi,es,fr,de,ar,bn,zh-CN,ja,ko,pt,ru,it,ml,te,ur,id,tr,vi,th',
          },
          'google_translate_element'
        );
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={close}>
          <div className="brand-logo-frame">
            <img src="/logo.svg" alt="CloudPixel Technologies" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-main">CloudPixel</span>
            <span className="brand-sub">TECHNOLOGIES</span>
          </div>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a href="/#services" onClick={close}>Services</a>
          <a href="/#work" onClick={close}>Case Studies</a>
          <a href="/#pricing" onClick={close}>Pricing</a>
          <Link to="/about" onClick={close}>About Us</Link>
          <a href="/#contact" onClick={close}>Contact</a>
        </nav>

        <div className="nav-actions">
          <div id="google_translate_element" className="translate-box" aria-label="Translate Website" />
          <a className="nav-cta" href="/#contact" onClick={close}>
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
