import { Cpu, Cloud, Code, Database, Server, Terminal, Shield, Zap } from 'lucide-react';

const technologies = [
  { name: 'React', category: 'Frontend', icon: Code, highlight: '#61dafb' },
  { name: 'Next.js', category: 'Fullstack', icon: Zap, highlight: '#ffffff' },
  { name: 'TypeScript', category: 'Language', icon: Code, highlight: '#3178c6' },
  { name: 'AWS Cloud', category: 'Infrastructure', icon: Cloud, highlight: '#ff9900' },
  { name: 'Docker', category: 'Containers', icon: Server, highlight: '#2496ed' },
  { name: 'Kubernetes', category: 'Orchestration', icon: Cpu, highlight: '#326ce5' },
  { name: 'CI/CD Pipelines', category: 'DevOps', icon: Terminal, highlight: '#10b981' },
  { name: 'Node.js', category: 'Backend', icon: Server, highlight: '#68a063' },
  { name: 'Python', category: 'Backend & AI', icon: Terminal, highlight: '#3776ab' },
  { name: 'PostgreSQL', category: 'Database', icon: Database, highlight: '#336791' },
  { name: 'Tailwind CSS', category: 'Styling', icon: Code, highlight: '#38bdf8' },
  { name: 'Zero-Trust Security', category: 'Security', icon: Shield, highlight: '#06b6d4' },
];

export default function TechStack() {
  return (
    <div className="tech-stack-section">
      <div className="container">
        <div className="tech-stack-header">
          <span className="eyebrow">ENGINEERING ARSENAL</span>
          <p className="tech-stack-subtitle">
            Engineered with modern, battle-tested technologies for sub-second speeds and 99.99% uptime.
          </p>
        </div>

        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {/* Double the list for infinite seamless marquee loop */}
            {[...technologies, ...technologies].map((t, idx) => (
              <div className="tech-badge" key={`${t.name}-${idx}`}>
                <span className="tech-badge-icon" style={{ color: t.highlight }}>
                  <t.icon size={16} />
                </span>
                <span className="tech-badge-name">{t.name}</span>
                <span className="tech-badge-cat">{t.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
