import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Github, Twitter, Mail, MessageCircle, MapPin } from 'lucide-react';

const socials = [
  { icon: Linkedin, label: 'LinkedIn',  href: 'https://linkedin.com' },
  { icon: Twitter,   label: 'Twitter/X', href: 'https://x.com' },
  { icon: Github,    label: 'GitHub',    href: 'https://github.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="brand">
              <div className="brand-logo-frame">
                <img src="/logo.svg" alt="CloudPixel Technologies" />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-main">CloudPixel</span>
                <span className="brand-sub">TECHNOLOGIES</span>
              </div>
            </Link>
            <p>
              Engineering pixel-perfect digital experiences, resilient cloud infrastructures, and automated DevOps workflows for ambitious businesses worldwide.
            </p>
            <div className="footer-social" style={{ marginTop: 24 }}>
              <div>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <small>Connect with our engineering &amp; design squad.</small>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer-col">
            <b>Solutions</b>
            <a href="/#services">Website & Web App Development</a>
            <a href="/#services">AWS Cloud Infrastructure</a>
            <a href="/#services">CI/CD & DevOps Automation</a>
            <a href="/#services">UI/UX & Core Web Vitals</a>
            <a href="/#services">24/7 Care & Maintenance</a>
            <a href="/#services">Technical Architecture Review</a>
          </div>

          {/* Studio Column */}
          <div className="footer-col">
            <b>Studio</b>
            <Link to="/about">About CloudPixel</Link>
            <a href="/#work">Selected Case Studies</a>
            <a href="/#pricing">Transparent Pricing</a>
            <Link to="/privacy">Privacy & Terms</Link>
          </div>

          {/* Direct Contact Column */}
          <div className="footer-col">
            <b>Direct Enquiries</b>
            <a href="mailto:contact@cloudpixeltechnologies.com">
              <Mail size={13} style={{ display: 'inline', marginRight: 4 }} />
              contact@cloudpixeltechnologies.com
            </a>
            <a href="https://wa.me/919650515004" target="_blank" rel="noreferrer">
              <MessageCircle size={13} style={{ display: 'inline', marginRight: 4 }} />
              +91 96505 15004 (WhatsApp)
            </a>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
              <MapPin size={13} style={{ display: 'inline', marginRight: 4 }} />
              New Delhi, India · Global Remote
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CloudPixel Technologies. All rights reserved.</span>
          <span>ENTERPRISE ARCHITECTURE · CLOUD · DEV OPS · WEB</span>
        </div>
      </div>
    </footer>
  );
}
