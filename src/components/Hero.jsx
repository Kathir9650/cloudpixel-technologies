import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Code2, Cloud, Workflow } from 'lucide-react';
import { ArrowUpRight, Play, Code2, Cloud, Workflow, Sparkles, Star } from 'lucide-react';
const stats = [
  { val: '50+', label: 'Projects Delivered' },
  { val: '100%', label: 'Client Satisfaction' },
  { val: '3x', label: 'Faster Deployments' },
  { val: '24/7', label: 'Support Available' },
];
export default function Hero() {
  return <section className="hero section-pad">
    <div className="hero-grid container">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}><span className="pulse-dot"/> DIGITAL STUDIO · WEB · CLOUD · DEVOPS</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.1}}>We turn bold ideas into <span className="gradient-text">digital reality.</span></motion.h1>
        <motion.p className="hero-lead" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2}}>Beautiful websites. Smarter cloud infrastructure. Reliable deployments. One technology partner to help your business move forward.</motion.p>
        <motion.div className="hero-buttons" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}}><a className="btn btn-primary" href="#contact">Start a project <ArrowUpRight size={18}/></a><a className="btn btn-ghost" href="#services"><Play size={16}/> Explore services</a></motion.div>
        <div className="hero-proof"><div className="proof-avatars"><span>W</span><span>C</span><span>D</span></div><p><b>Built around your goals</b><br/>Clear communication. Practical solutions.</p></div>
      </div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}}>
        <div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="visual-window"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>cloudpixel / launch</span><span className="live-label">● LIVE CONCEPT</span></div>
          <div className="code-panel"><div className="code-line muted">01&nbsp; // Your next chapter starts here</div><div className="code-line"><span className="code-purple">const</span> <span className="code-blue">future</span> = {'{'}</div><div className="code-line indent"><span className="code-cyan">design</span>: <span className="code-green">'remarkable'</span>,</div><div className="code-line indent"><span className="code-cyan">cloud</span>: <span className="code-green">'scalable'</span>,</div><div className="code-line indent"><span className="code-cyan">delivery</span>: <span className="code-green">'reliable'</span></div><div className="code-line">{'}'};</div><div className="code-line muted code-gap">02&nbsp; // Let's build something meaningful.</div><div className="code-status"><span>✓ Ready to build</span><span>● Connected</span></div></div>
  return (
    <section className="hero section-pad">
      <div className="hero-grid container">
        {/* ── Left Copy ── */}
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="pulse-dot" />
            DIGITAL STUDIO · WEB · CLOUD · DEVOPS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
          >
