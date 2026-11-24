import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    q: 'How does CloudPixel handle projects from initiation to deployment?',
    a: 'We operate in 4 agile milestones: Discovery & Architecture, Interactive Prototyping & Design, Agile Development & Testing, and Production Launch with Documentation. You receive direct access to a dedicated lead engineer and weekly demo builds so you have complete transparency.',
  },
  {
    q: 'Can you migrate or optimize our existing cloud infrastructure without downtime?',
    a: 'Yes. We specialize in zero-downtime migrations to AWS and modern cloud platforms. We use blue-green deployments, canary releases, and automated rollbacks to guarantee your existing traffic and revenue streams are never interrupted.',
  },
  {
    q: 'What is your technology stack and why do you use it?',
    a: 'We build with modern, high-performance tools: React, Next.js, and TypeScript on the frontend; Python and Node.js for backend APIs; AWS, Docker, and Kubernetes for scalable containerized hosting. This stack delivers sub-second load times, bank-grade security, and effortless scaling.',
  },
  {
    q: 'What does your pricing structure and payment schedule look like?',
    a: 'We believe in 100% transparency. Our project packages start with clear, fixed milestones (typically 40% kickoff, 30% milestone review, 30% handover). We provide a detailed scope document before any payment so there are never hidden fees or surprise invoices.',
  },
  {
    q: 'Do you offer ongoing maintenance, monitoring, and technical support after launch?',
    a: 'Absolutely. Every project includes complimentary post-launch support (30 to 60 days depending on package). We also offer dedicated ongoing Care & Maintenance plans for automated backups, 24/7 uptime monitoring, security patching, and on-demand feature upgrades.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = idx => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-pad faq-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Everything you need to{' '}
              <span className="gradient-text">know before starting.</span>
            </h2>
          </div>
          <p>
            Have questions about timelines, infrastructure, or pricing? Here are the answers to our most frequent enquiries.
          </p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div className={`faq-item ${isOpen ? 'active' : ''}`} key={f.q}>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    <HelpCircle size={18} className="faq-icon" />
                    {f.q}
                  </span>
                  <span className={`faq-chevron ${isOpen ? 'open' : ''}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-footer-cta">
          <p>Still have a specific question about your project?</p>
          <a href="#contact" className="btn btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
            Ask our engineers directly <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
