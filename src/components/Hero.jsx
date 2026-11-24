import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Code2, Cloud, Workflow, Sparkles, Star } from 'lucide-react';

const stats = [
  { val: '50+', label: 'Projects Delivered' },
  { val: '100%', label: 'Client Satisfaction' },
  { val: '3x', label: 'Faster Deployments' },
  { val: '24/7', label: 'Support Available' },
];

export default function Hero() {
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
            We craft bold ideas into{' '}
            <span className="gradient-text">digital masterpieces.</span>
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >
            From stunning websites to rock-solid cloud infrastructure — CloudPixel Technologies
            is your end-to-end technology partner, turning vision into reality with precision
            and passion.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
          >
            <a className="btn btn-primary" href="#contact">
              <Sparkles size={16} /> Start a project <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-ghost" href="#services">
              <Play size={15} fill="currentColor" /> Explore services
            </a>
          </motion.div>

          {/* Proof row */}
          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
          >
            <div className="proof-avatars">
              <span>W</span><span>C</span><span>D</span>
            </div>
            <p>
              <b>Trusted by growing businesses</b><br />
              Clear communication. Practical solutions. Zero fluff.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .55 }}
          >
            {stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right Visual ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: .92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .9, delay: .2 }}
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="visual-window">
            <div className="window-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>cloudpixel / studio</span>
              <span className="live-label"><span className="pulse-dot" style={{ width: 6, height: 6 }} /> LIVE BUILD</span>
            </div>
            <div className="code-panel">
              <div className="code-line muted">{'// 🚀 Your next chapter starts here'}</div>
              <div className="code-line" style={{ marginTop: 10 }}>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">cloudpixel</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-cyan">design</span>:{' '}
                <span className="code-green">'pixel-perfect'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-cyan">cloud</span>:{' '}
                <span className="code-green">'always-on'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-cyan">delivery</span>:{' '}
                <span className="code-orange">'lightning-fast'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-cyan">support</span>:{' '}
                <span className="code-green">'24 / 7'</span>
              </div>
              <div className="code-line">{'};'}</div>
              <div className="code-line muted code-gap">{'// ✅ Ready. Let\'s build something amazing.'}</div>
              <div className="code-status">
                <span>✓ Build successful</span>
                <span>⬡ Connected · India</span>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card float-top">
            <span className="float-icon"><Code2 size={19} /></span>
            <div>
              <b>Web Experiences</b>
              <small>Designed to convert &amp; engage</small>
            </div>
          </div>
          <div className="float-card float-bottom">
            <span className="float-icon cloud-icon"><Cloud size={20} /></span>
            <div>
              <b>Cloud Powered</b>
              <small>Scalable · Secure · Reliable</small>
            </div>
          </div>
          <div className="visual-caption">
            <Workflow size={14} /> BUILD · INNOVATE · DEPLOY
          </div>
        </motion.div>
      </div>

      <div className="hero-glow" />
    </section>
  );
}
