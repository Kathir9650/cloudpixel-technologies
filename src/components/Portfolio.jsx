import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

const categories = ['All Projects', 'Web Applications', 'Cloud Architecture', 'DevOps & CI/CD'];

const projects = [
  {
    type: 'WEB PLATFORM · SAAS',
    category: 'Web Applications',
    title: 'ApexCloud Analytics Dashboard',
    desc: 'An enterprise real-time observability platform engineered for multi-cloud monitoring, live telemetry metrics, and sub-50ms query response times.',
    metrics: '+340% User Engagement',
    label: '01',
    tech: ['React 18', 'TypeScript', 'Tailwind', 'WebSockets', 'Vite'],
    previewUi: {
      tag: 'LIVE PRODUCTION APP',
      stat1: '4.8M req/s',
      stat2: '0.01% error',
      accent: '#3b82f6',
    },
  },
  {
    type: 'CLOUD MIGRATION · ENTERPRISE',
    category: 'Cloud Architecture',
    title: 'Aegis Global Infrastructure Migration',
    desc: 'Seamless zero-downtime migration of high-throughput workloads to AWS ECS & Aurora, incorporating auto-scaling clusters and zero-trust IAM policies.',
    metrics: '38% Cloud Cost Savings',
    label: '02',
    tech: ['AWS ECS', 'Terraform', 'Docker', 'PostgreSQL', 'CloudFront'],
    previewUi: {
      tag: 'AWS MULTI-REGION',
      stat1: '99.999% SLA',
      stat2: '0s downtime',
      accent: '#06b6d4',
    },
  },
  {
    type: 'DEVOPS AUTOMATION · PIPELINE',
    category: 'DevOps & CI/CD',
    title: 'HyperSpeed Automated Release Engine',
    desc: 'End-to-end containerized CI/CD pipeline reducing build and deploy cycle times from 45 minutes to 3.5 minutes with automated rollback safety nets.',
    metrics: '12x Faster Releases',
    label: '03',
    tech: ['GitHub Actions', 'Kubernetes', 'Docker', 'Prometheus', 'Helm'],
    previewUi: {
      tag: 'GIT-OPS AUTOMATION',
      stat1: '3.5m build',
      stat2: '100% tests pass',
      accent: '#10b981',
    },
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filtered = activeCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="section-pad section-alt">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PORTFOLIO & CASE STUDIES</span>
            <h2>Proven engineering{' '}
              <span className="gradient-text">masterpieces.</span>
            </h2>
          </div>
          <p>
            Explore selected production systems and digital experiences engineered by CloudPixel Technologies for market leaders.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="portfolio-filter-row">
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map(p => (
            <article className="project-card" key={p.label}>
              {/* Visual Card Showcase Window */}
              <div className="project-art-container">
                <div className="project-art-header">
                  <span className="project-window-dots">
                    <span /><span /><span />
                  </span>
                  <span className="project-window-tag">{p.previewUi.tag}</span>
                  <span className="project-label-id">#{p.label}</span>
                </div>

                <div className="project-mockup-body">
                  <div className="project-mockup-dash">
                    <div className="dash-sidebar">
                      <div className="dash-avatar" />
                      <div className="dash-bar" />
                      <div className="dash-bar" style={{ width: '60%' }} />
                      <div className="dash-bar" style={{ width: '80%' }} />
                    </div>
                    <div className="dash-main">
                      <div className="dash-top-metrics">
                        <div className="metric-box">
                          <span className="metric-lbl">THROUGHPUT</span>
                          <span className="metric-num" style={{ color: p.previewUi.accent }}>
                            {p.previewUi.stat1}
                          </span>
                        </div>
                        <div className="metric-box">
                          <span className="metric-lbl">ERROR RATE</span>
                          <span className="metric-num" style={{ color: '#10b981' }}>
                            {p.previewUi.stat2}
                          </span>
                        </div>
                      </div>
                      <div className="dash-graph-preview">
                        <div className="graph-bar bar-1" />
                        <div className="graph-bar bar-2" />
                        <div className="graph-bar bar-3" />
                        <div className="graph-bar bar-4" />
                        <div className="graph-bar bar-5" />
                        <div className="graph-bar bar-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-art-metric-badge">
                  <TrendingUp size={13} color="#10b981" />
                  <span>{p.metrics}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <span className="eyebrow">{p.type}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="tag-list" style={{ marginTop: 16 }}>
                  {p.tech.map(t => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <a href="#contact" className="project-cta-link">
                    Request Similar Architecture <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
