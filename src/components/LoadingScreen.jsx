import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('Initializing Core Engine...');

  useEffect(() => {
    const stages = [
      { at: 15, text: 'Initializing Core Engine...' },
      { at: 35, text: 'Calibrating Design Matrix...' },
      { at: 65, text: 'Connecting Cloud & DevOps Pipelines...' },
      { at: 85, text: 'Optimizing Pixel Rendering...' },
      { at: 100, text: 'Experience Ready · Welcome' },
    ];

    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds total for optimal snappy delight

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      for (let i = stages.length - 1; i >= 0; i--) {
        if (pct >= stages[i].at) {
          setStageText(stages[i].text);
          break;
        }
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Background ambient glows & cyber grid */}
      <div className="preloader-grid" />
      <div className="preloader-glow-1" />
      <div className="preloader-glow-2" />

      {/* Main Container */}
      <div className="preloader-content">
        {/* Animated Hologram Logo Mark */}
        <div className="preloader-logo-wrap">
          <div className="preloader-ring-outer" />
          <div className="preloader-ring-inner" />
          <motion.div
            className="preloader-logo-core"
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))',
                'drop-shadow(0 0 30px rgba(6, 182, 212, 0.8))',
                'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/logo.svg" alt="CloudPixel" className="preloader-logo-img" />
          </motion.div>
        </div>

        {/* Brand Title */}
        <div className="preloader-brand">
          <h1 className="preloader-title">
            CLOUD<span className="preloader-title-highlight">PIXEL</span>
          </h1>
          <span className="preloader-badge">TECHNOLOGIES · STUDIO</span>
        </div>

        {/* Progress Bar & Numerical Counter */}
        <div className="preloader-progress-wrap">
          <div className="preloader-progress-track">
            <motion.div
              className="preloader-progress-fill"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            >
              <span className="preloader-progress-glow-head" />
            </motion.div>
          </div>
          <div className="preloader-meta">
            <span className="preloader-stage-text">
              <span className="preloader-dot" />
              {stageText}
            </span>
            <span className="preloader-percent">{progress}%</span>
          </div>
        </div>

        {/* Cyber Telemetry Status Ticker */}
        <div className="preloader-telemetry">
          <div className="telemetry-item">
            <span className="telemetry-label">REGION</span>
            <span className="telemetry-val">GLOBAL · AP-SOUTH</span>
          </div>
          <div className="telemetry-sep">/</div>
          <div className="telemetry-item">
            <span className="telemetry-label">STATUS</span>
            <span className="telemetry-val" style={{ color: '#10b981' }}>OPERATIONAL</span>
          </div>
          <div className="telemetry-sep">/</div>
          <div className="telemetry-item">
            <span className="telemetry-label">ENCRYPTION</span>
            <span className="telemetry-val">TLS 1.3 · HTTP/3</span>
          </div>
        </div>
      </div>

      {/* Quick skip button */}
      <button
        className="preloader-skip"
        onClick={() => onComplete && onComplete()}
        aria-label="Skip Loading Screen"
      >
        Skip ➔
      </button>
    </motion.div>
  );
}
