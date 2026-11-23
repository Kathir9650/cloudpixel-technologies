import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Pricing from '../components/Pricing.jsx';
import Process from '../components/Process.jsx';
import Contact from '../components/Contact.jsx';
import { ArrowUpRight } from 'lucide-react';
export default function Home(){return <main><Hero/><div className="trust-strip"><div className="container trust-inner"><span>YOUR DIGITAL PARTNER</span><b>Thoughtful design</b><i/><b>Practical technology</b><i/><b>Reliable delivery</b></div></div><Services/><Portfolio/><Process/><Pricing/><section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's make it <span className="gradient-text">happen.</span></h2></div><a className="btn btn-primary" href="#contact">Talk to our team <ArrowUpRight/></a></div></section><Contact/></main>}
import { ArrowUpRight, TrendingUp, Users, Globe, Clock } from 'lucide-react';
const stats = [
  { val: '50+',  label: 'Projects Delivered', icon: TrendingUp },
  { val: '100%', label: 'Client Satisfaction', icon: Users },
  { val: '15+',  label: 'Countries Served',    icon: Globe },
  { val: '24/7', label: 'Support Available',    icon: Clock },
];
const partners = [
  'Thoughtful design',
  'Practical technology',
  'Reliable delivery',
  'Transparent pricing',
  'On-time launches',
];
export default function Home() {
  return (
    <main>
      <Hero />
      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container trust-inner">
          <span>YOUR DIGITAL PARTNER</span>
          {partners.map((p, i) => (
            <React.Fragment key={p}>
              <b>{p}</b>
              {i < partners.length - 1 && <i />}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Stats strip */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="stats-strip">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
