import { MessageCircle, ClipboardList, Palette, Rocket } from 'lucide-react';
const steps=[['01','Discover','We understand your business, audience and goals.',MessageCircle],['02','Plan','We agree on scope, timeline, deliverables and pricing.',ClipboardList],['03','Create','We design, build and share progress for your feedback.',Palette],['04','Launch','We test, deploy and hand over the project clearly.',Rocket]];
export default function Process(){return <section className="section-pad section-alt"><div className="container"><div className="section-heading"><div><span className="eyebrow">HOW WE WORK</span><h2>A clear path from <span className="gradient-text">idea to launch.</span></h2></div><p>No confusing process. Just focused collaboration and clear milestones.</p></div><div className="process-grid">{steps.map(([n,t,d,I])=><div className="process-step" key={n}><div className="process-icon"><I size={22}/><span>{n}</span></div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>}
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
