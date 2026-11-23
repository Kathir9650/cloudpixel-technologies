import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Pricing from '../components/Pricing.jsx';
import Process from '../components/Process.jsx';
import Contact from '../components/Contact.jsx';
import { ArrowUpRight } from 'lucide-react';
export default function Home(){return <main><Hero/><div className="trust-strip"><div className="container trust-inner"><span>YOUR DIGITAL PARTNER</span><b>Thoughtful design</b><i/><b>Practical technology</b><i/><b>Reliable delivery</b></div></div><Services/><Portfolio/><Process/><Pricing/><section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's make it <span className="gradient-text">happen.</span></h2></div><a className="btn btn-primary" href="#contact">Talk to our team <ArrowUpRight/></a></div></section><Contact/></main>}
