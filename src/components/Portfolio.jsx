import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    type: 'BUSINESS WEBSITE · CONCEPT',
    title: 'Local business, elevated.',
    desc: 'A clean, conversion-focused website concept for a growing local business — built for trust, speed and mobile-first engagement.',
    tone: 'project-blue',
    label: '01',
    tech: ['React', 'Tailwind', 'AWS'],
  },
  {
    type: 'CLOUD DEPLOYMENT · DEMO',
    title: 'From code to cloud.',
    desc: 'A fully automated deployment workflow showing how a modern web project moves from Git commit to a scalable cloud host in minutes.',
    tone: 'project-purple',
    label: '02',
    tech: ['Docker', 'GitHub Actions', 'EC2'],
  },
  {
    type: 'E-COMMERCE · CONCEPT',
    title: 'A smoother way to shop.',
    desc: 'A storefront concept that puts product discovery first — seamless mobile shopping, fast checkout, and intuitive navigation.',
    tone: 'project-green',
    label: '03',
    tech: ['Next.js', 'Stripe', 'Vercel'],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="section-pad section-alt">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED CONCEPTS</span>
            <h2>Good ideas deserve{' '}
              <span className="gradient-text">great execution.</span>
            </h2>
          </div>
          <p>
            A preview of the kind of digital experiences we create. These are concept
            examples showcasing our approach — not completed client projects.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map(p => (
            <article className={`project-card ${p.tone}`} key={p.label}>
              <div className="project-art">
                <span className="project-number">{p.label}</span>
                <div className="art-shape shape-a" />
                <div className="art-shape shape-b" />
                <div className="art-ui">
                  <div /><div /><div /><div />
                </div>
                <span className="art-caption">CLOUDPIXEL / STUDIO</span>
              </div>
              <div className="project-info">
                <span className="eyebrow">{p.type}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-list" style={{ marginTop: 14 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#contact">
                  Build something similar <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
