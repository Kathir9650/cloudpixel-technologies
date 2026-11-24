import { MessageCircle, ClipboardList, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01', title: 'Discover',
    desc: 'We dive deep into your business, your audience, and your goals — asking the right questions to fully understand what success looks like for you.',
    icon: MessageCircle,
    color: 'rgba(124,58,237,0.15)', iconColor: 'var(--accent-1)',
  },
  {
    num: '02', title: 'Plan',
    desc: 'We agree on a detailed scope, realistic timeline, clear deliverables and transparent pricing — no surprises, ever.',
    icon: ClipboardList,
    color: 'rgba(6,182,212,0.15)', iconColor: 'var(--accent-2)',
  },
  {
    num: '03', title: 'Create',
    desc: 'We design, build and share progress at every milestone — keeping you in the loop and incorporating your feedback as we go.',
    icon: Palette,
    color: 'rgba(249,115,22,0.15)', iconColor: 'var(--accent-3)',
  },
  {
    num: '04', title: 'Launch',
    desc: 'We test rigorously, deploy smoothly, and hand over the project with full documentation — then stay available for any post-launch support.',
    icon: Rocket,
    color: 'rgba(16,185,129,0.15)', iconColor: 'var(--accent-4)',
  },
];

export default function Process() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>A clear path from{' '}
              <span className="gradient-text">idea to launch.</span>
            </h2>
          </div>
          <p>No confusing jargon. Just focused collaboration, clear milestones, and results you can be proud of.</p>
        </div>

        <div className="process-grid">
          {steps.map(s => (
            <div className="process-step" data-num={s.num} key={s.num}>
              <div className="process-icon" style={{ background: s.color, color: s.iconColor }}>
                <s.icon size={22} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
