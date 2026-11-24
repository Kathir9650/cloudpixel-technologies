import React from 'react';
import Hero from '../components/Hero.jsx';
import TechStack from '../components/TechStack.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Pricing from '../components/Pricing.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';
import { ArrowUpRight, TrendingUp, Users, Globe, Clock, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { val: '50+',  label: 'Projects Delivered',   icon: TrendingUp },
  { val: '99.99%', label: 'Infrastructure Uptime', icon: ShieldCheck },
  { val: '18+',  label: 'Countries Served',      icon: Globe },
  { val: '24/7', label: 'Support & Monitoring',  icon: Clock },
];

const partners = [
  'Obsidian-tier design',
  'Cloud-native architecture',
  'Automated DevOps pipelines',
  'Transparent milestones',
  'Sub-second performance',
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container trust-inner">
          <span>YOUR STRATEGIC TECHNOLOGY PARTNER</span>
          {partners.map((p, i) => (
            <React.Fragment key={p}>
              <b>{p}</b>
              {i < partners.length - 1 && <i />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="home-stats-strip">
        <div className="container">
          <div className="stats-strip">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <div className="stat-icon-wrap">
                  <s.icon size={20} />
                </div>
                <h3>{s.val}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TechStack />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* High-Impact CTA Band */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">READY TO BUILD SOMETHING EXTRAORDINARY?</span>
            <h2>Let's turn your vision into <span className="gradient-text">market reality.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 14, maxWidth: 520, lineHeight: 1.7 }}>
              Partner with CloudPixel Technologies to engineer robust web platforms, automated cloud infrastructures, and digital systems that outperform expectations.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <a className="btn btn-primary" href="#contact" style={{ fontSize: 15, padding: '16px 36px' }}>
              Schedule Technical Consultation <ArrowUpRight size={18} />
            </a>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', width: '100%' }}>
              Free 30-min strategy session · Fixed-price proposal
            </span>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
