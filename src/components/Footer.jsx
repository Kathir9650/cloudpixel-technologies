import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

const socials = [
  { icon: Linkedin, label: 'LinkedIn',  href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Github,    label: 'GitHub',    href: '#' },
  { icon: Twitter,   label: 'Twitter',   href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src="/logo.svg" alt="" />
              <span>CloudPixel<span className="brand-light"> Technologies</span></span>
            </Link>
            <p>
              Building pixel-perfect digital experiences.<br />
              Powering businesses with scalable cloud technology.<br />
              Your success is our mission.
            </p>
            <div className="footer-social" style={{ marginTop: 20 }}>
              <div>
                {socials.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
              <small>Connect with us — links live before launch.</small>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <b>Services</b>
            <a href="/#services">Website Development</a>
            <a href="/#services">Cloud Solutions</a>
            <a href="/#services">DevOps & Automation</a>
            <a href="/#services">UI/UX & Optimization</a>
            <a href="/#services">Care & Maintenance</a>
          </div>

          {/* Company */}
          <div className="footer-col">
            <b>Company</b>
            <Link to="/about">About us</Link>
            <a href="/#work">Our Work</a>
            <a href="/#pricing">Pricing</a>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <b>Get in touch</b>
            <a href="/#contact">Start a project <ArrowUpRight size={13} /></a>
            <a href="mailto:hello@cloudpixel.example">Email us</a>
            <a href={`https://wa.me/919000000000`} target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CloudPixel Technologies. All rights reserved.</span>
          <span>BUILD · INNOVATE · DEPLOY</span>
        </div>
      </div>
    </footer>
  );
}
