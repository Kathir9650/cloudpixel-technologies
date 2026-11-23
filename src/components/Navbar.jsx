import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.google?.translate?.TranslateElement) return;
    window.googleTranslateElementInit = () => new window.google.translate.TranslateElement(
      { pageLanguage: 'en', autoDisplay: false, includedLanguages: 'en,ta,hi,es,fr,de,ar,bn,zh-CN,ja,ko,pt,ru,it,ml,te,ur,id,tr,vi,th' },
      'google_translate_element'
    );
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    return () => {};
  }, []);
  const close = () => setOpen(false);
  return <header className="navbar">
    <div className="nav-inner container">
      <Link to="/" className="brand" onClick={close}><img src="/logo.svg" alt="" /><span>CloudPixel<span className="brand-light"> Technologies</span></span></Link>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <a href="/#services" onClick={close}>Services</a><a href="/#work" onClick={close}>Our Work</a><a href="/#pricing" onClick={close}>Pricing</a><Link to="/about" onClick={close}>About</Link><a href="/#contact" onClick={close}>Contact</a>
      </nav>
      <div className="nav-actions"><div id="google_translate_element" className="translate-box" aria-label="Choose Your language"></div><a className="nav-cta" href="/#contact">Let's talk Further <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></div>
    </div>
  </header>;
}
