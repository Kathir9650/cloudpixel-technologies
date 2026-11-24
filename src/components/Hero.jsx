import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Play, Code2, Cloud, Workflow, Sparkles, Check, Copy, Terminal, Shield, Zap
} from 'lucide-react';

const stats = [
  { val: '50+', label: 'Projects Delivered' },
  { val: '99.99%', label: 'Infrastructure Uptime' },
  { val: '3.5x', label: 'Faster Deployments' },
  { val: '24/7', label: 'Engineers on Call' },
];

const codeSnippets = {
  cloud: {
    filename: 'infrastructure.tf',
    lang: 'terraform',
    code: `# AWS Automated Cloud Infrastructure
module "cloudpixel_cluster" {
  source           = "cloudpixel/enterprise/aws"
  version          = "3.4.0"
  region           = "ap-south-1"
  auto_scaling     = true
  min_nodes        = 3
  max_nodes        = 24
  cdn_cache_policy = "ultra-speed"
  ssl_certificate  = "auto-renew"
}

output "status" {
  value = "Ready · Zero Downtime Active"
}`,
  },
  devops: {
    filename: 'deploy-pipeline.yml',
    lang: 'yaml',
    code: `# Automated CI/CD Release Engine
name: Production Deployment
on: [push to main]

jobs:
  build-and-ship:
    runs-on: cloudpixel-fast-runners
    steps:
      - uses: actions/checkout@v4
      - name: Security & Vulnerability Scan
        run: npm run audit:security
      - name: Dockerize & Push to ECR
        run: docker build -t app:v2.4 .
      - name: Zero-Downtime Rollout
        run: kubectl rollout restart deploy/web`,
  },
  frontend: {
    filename: 'AppArchitecture.tsx',
    lang: 'typescript',
    code: `// CloudPixel Next-Gen Web Experience
import { definePlatform } from '@cloudpixel/core';

export const EnterpriseSite = definePlatform({
  performance: 'sub-second',
  seo: '100/100',
  interactivity: '60fps-smooth',
  designSystem: 'obsidian-cyber',
  security: 'enterprise-hardened',
});`,
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('cloud');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            ENTERPRISE DIGITAL STUDIO · WEB · CLOUD · DEVOPS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Engineering bold ideas into{' '}
            <span className="gradient-text">digital masterworks.</span>
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From high-conversion web applications to battle-hardened AWS cloud architecture and automated CI/CD pipelines — CloudPixel Technologies is your elite engineering partner for rapid, scalable digital growth.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a className="btn btn-primary" href="#contact">
              <Sparkles size={16} /> Start Your Project <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-ghost" href="#work">
              <Play size={14} fill="currentColor" /> View Case Studies
            </a>
          </motion.div>

          {/* Proof row */}
          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <div className="proof-avatars">
              <span>CP</span>
              <span>AWS</span>
              <span>VCL</span>
            </div>
            <p>
              <b>Trusted by ambitious founders & tech leads</b><br />
              Sub-second response times · Zero-downtime reliability · 100% IP ownership.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right Interactive Terminal Window ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="visual-window">
            {/* Terminal Header */}
            <div className="window-top">
              <div className="window-dots">
                <i /><i /><i />
              </div>
              
              {/* Interactive Tabs */}
              <div className="terminal-tabs">
                <button
                  className={`terminal-tab ${activeTab === 'cloud' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cloud')}
                >
                  <Cloud size={12} /> terraform.tf
                </button>
                <button
                  className={`terminal-tab ${activeTab === 'devops' ? 'active' : ''}`}
                  onClick={() => setActiveTab('devops')}
                >
                  <Workflow size={12} /> pipeline.yml
                </button>
                <button
                  className={`terminal-tab ${activeTab === 'frontend' ? 'active' : ''}`}
                  onClick={() => setActiveTab('frontend')}
                >
                  <Code2 size={12} /> App.tsx
                </button>
              </div>

              <button
                className="terminal-copy-btn"
                onClick={handleCopy}
                title="Copy code"
                aria-label="Copy snippet"
              >
                {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Panel */}
            <div className="code-panel">
              <pre className="code-pre">
                <code>{codeSnippets[activeTab].code}</code>
              </pre>

              <div className="code-status">
                <span className="code-status-active">
                  <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                  CLUSTER ONLINE · 99.99% UPTIME
                </span>
                <span className="code-status-meta">
                  <Zap size={11} /> 12ms LATENCY
                </span>
              </div>
            </div>
          </div>

          {/* Floating interactive badges */}
          <div className="float-card float-top">
            <span className="float-icon">
              <Shield size={18} />
            </span>
            <div>
              <b>Enterprise Cloud Security</b>
              <small>Zero-trust · Automated SSL · AWS VPC</small>
            </div>
          </div>

          <div className="float-card float-bottom">
            <span className="float-icon cloud-icon">
              <Zap size={18} />
            </span>
            <div>
              <b>Sub-Second Web Speed</b>
              <small>99+ Google Core Web Vitals score</small>
            </div>
          </div>

          <div className="visual-caption">
            <Workflow size={13} /> CLOUDPIXEL ENGINE · BUILD · INNOVATE · DEPLOY
          </div>
        </motion.div>
      </div>

      <div className="hero-glow" />
    </section>
  );
}
