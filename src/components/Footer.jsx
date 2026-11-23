import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Github } from 'lucide-react';
export default function Footer(){return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Link to="/" className="brand"><img src="/logo.svg" alt=""/><span>CloudPixel<span className="brand-light"> Technologies</span></span></Link><p>Building digital experiences.<br/>Powering businesses with cloud technology.</p></div><div className="footer-col"><b>Explore</b><a href="/#services">Services</a><a href="/#work">Our Work</a><a href="/#pricing">Pricing</a><Link to="/about">About us</Link></div><div className="footer-col"><b>Get in touch</b><a href="/#contact">Start a project <ArrowUpRight size={14}/></a><Link to="/privacy">Privacy policy</Link><a href="mailto:hello@cloudpixel.example">Email us</a></div><div className="footer-social"><b>Follow along</b><div><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="GitHub"><Github/></a></div><small>Replace social links before launch.</small></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CloudPixel Technologies. All rights reserved.</span><span>Build. Innovate. Deploy.</span></div></div></footer>}
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
