import { ArrowUpRight, Target, Lightbulb, Handshake, Shield, Cpu, Award, Users, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'We treat every line of code, infrastructure configuration, and UI interaction with meticulous attention to detail. No sloppy shortcuts, no unmaintainable hacks.',
  },
  {
    icon: Cpu,
    title: 'Cloud-Native Architecture',
    desc: 'Everything we engineer is built to scale gracefully. We leverage automated containerization, serverless microservices, and modern CDNs for sub-second performance.',
  },
  {
    icon: Handshake,
    title: 'Radical Transparency',
    desc: 'Clear scopes, fixed timelines, predictable milestone pricing, and open communication. You have full visibility into your code repository from day one.',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    desc: 'From zero-trust IAM roles to automated SSL, security patch monitoring, and regular vulnerability scanning, client data protection is non-negotiable.',
  },
];

const teamStats = [
  { val: '50+', label: 'Successful Deployments' },
  { val: '99.99%', label: 'Infrastructure Uptime Record' },
  { val: '100%', label: 'Client Retention Rate' },
  { val: '< 24h', label: 'Average SLA Response Time' },
];

export default function About() {
  return (
    <main className="subpage">
      {/* ── Subpage Hero ── */}
      <section className="subpage-hero section-pad">
        <div className="container">
          <span className="eyebrow">ABOUT CLOUDPIXEL TECHNOLOGIES</span>
          <h1>
            We believe technology should make ambitious progress <span className="gradient-text">feel inevitable.</span>
          </h1>
          <p className="subpage-lead">
            CloudPixel Technologies is a specialized digital engineering studio. We partner with ambitious founders, growing businesses, and modern enterprises to design, build, and deploy world-class web applications, cloud infrastructure, and automated DevOps systems.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 28 }}>
            <a className="btn btn-primary" href="/#contact">
              Initiate Project Discussion <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-ghost" href="/#work">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Impact Stats Strip ── */}
      <section style={{ background: 'var(--bg-card)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="stats-strip">
            {teamStats.map(s => (
              <div className="stat-item" key={s.label}>
                <h3>{s.val}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy & Core Values ── */}
      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR CORE PRINCIPLES</span>
              <h2>Built on principles that{' '}
                <span className="gradient-text">guarantee excellence.</span>
              </h2>
            </div>
            <p>
              We are not just agency vendors. We act as your fractional CTO and senior engineering squad, obsessed with your real business outcomes.
            </p>
          </div>

          <div className="about-cards-grid">
            {values.map(v => (
              <article className="about-value-card" key={v.title}>
                <div className="about-value-icon">
                  <v.icon size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Clients Choose Us ── */}
      <section className="section-pad section-alt">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <span className="eyebrow">THE CLOUDPIXEL ADVANTAGE</span>
              <h2>Why ambitious teams choose to build with us.</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: 16, lineHeight: 1.8 }}>
                The agency world is filled with bloated teams, endless meetings, and outsourced black boxes. CloudPixel was founded on a different model: a nimble team of elite engineers and product designers who work directly with you.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: 14, lineHeight: 1.8 }}>
                Every build receives rigorous architectural reviews, automated testing, and comprehensive handover documentation. When you work with us, you retain 100% intellectual property ownership of your codebase and cloud infrastructure.
              </p>
            </div>

            <div className="about-checklist-box">
              <h3>What you can always expect:</h3>
              <ul className="about-checklist">
                {[
                  'Zero technical debt with clean, typed codebases',
                  'Sub-second page speeds verified by Core Web Vitals',
                  'Multi-environment setups (Staging & Production)',
                  'Automated CI/CD pipelines on GitHub Actions',
                  'Direct communication via Slack or WhatsApp',
                  'Post-launch warranty & comprehensive training',
                ].map(item => (
                  <li key={item}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
