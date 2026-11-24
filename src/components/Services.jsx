import { ArrowUpRight, Code2, Cloud, Workflow, ShieldCheck, Gauge, LifeBuoy } from 'lucide-react';

const services = [
  {
    n: '01', cls: 'svc-1', icon: Code2,
    title: 'Website Development',
    desc: 'Blazing-fast, pixel-perfect websites crafted to captivate visitors, rank on Google, and convert browsers into paying customers.',
    tags: ['Business websites', 'Landing pages', 'Web applications', 'E-commerce'],
  },
  {
    n: '02', cls: 'svc-2', icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Practical, cost-smart cloud setup and migration on AWS or any major platform — keeping your workloads online, secure and future-proof.',
    tags: ['AWS setup', 'Hosting & DNS', 'Cloud migration', 'SSL & Security'],
  },
  {
    n: '03', cls: 'svc-3', icon: Workflow,
    title: 'DevOps & Automation',
    desc: 'Ship faster and sleep better. We build repeatable CI/CD pipelines, Docker deployments, and automation workflows tailored to your stack.',
    tags: ['CI/CD pipelines', 'Docker deployment', 'GitHub Actions', 'Automation'],
  },
  {
    n: '04', cls: 'svc-4', icon: ShieldCheck,
    title: 'Care & Maintenance',
    desc: 'Your digital presence, always healthy. We handle updates, security patches, backups and ongoing technical support so you stay focused.',
    tags: ['Updates & fixes', 'Backups', 'Security scans', 'Technical support'],
  },
  {
    n: '05', cls: 'svc-5', icon: Gauge,
    title: 'UI/UX & Optimization',
    desc: 'Delight users with thoughtful, mobile-first interfaces and boost performance scores — faster loads, better accessibility, higher conversions.',
    tags: ['UI/UX design', 'Mobile-first', 'Core Web Vitals', 'Accessibility'],
  },
  {
    n: '06', cls: 'svc-6', icon: LifeBuoy,
    title: 'Technical Consultation',
    desc: 'Unsure where to start? Get a clear, honest roadmap for your website, cloud infrastructure, or deployment challenge — no jargon.',
    tags: ['Project planning', 'Tech guidance', 'Architecture review', 'Roadmapping'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Technology that{' '}
              <span className="gradient-text">moves you forward.</span>
            </h2>
          </div>
          <p>
            From your first website to a smarter cloud deployment workflow,
            we turn complex technology into clear business results.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <article className={`service-card ${s.cls}`} key={s.n}>
              <div className="service-top">
                <span>{s.n}</span>
                <div className="service-icon-wrap">
                  <s.icon size={22} />
                </div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tag-list">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href="#contact" className="card-arrow" aria-label={`Ask about ${s.title}`}>
                <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
