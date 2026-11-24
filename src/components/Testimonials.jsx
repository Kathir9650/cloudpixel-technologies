import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote:
      'CloudPixel completely modernized our cloud architecture on AWS with zero downtime. Our CI/CD deployment cycle dropped from 45 minutes to under 4 minutes, and cloud hosting costs decreased by 38%.',
    author: 'David Vance',
    role: 'Chief Technology Officer',
    company: 'DataSphere Global',
    metric: '38% Cost Reduction',
    avatar: 'D',
  },
  {
    quote:
      'The speed and polish of the web application they engineered for us blew our investors away. Our conversion rate jumped +210% in the first month post-launch. Pixel perfection is not just their name—it is their standard.',
    author: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Omnia Commerce',
    metric: '+210% Conversion Rate',
    avatar: 'E',
  },
  {
    quote:
      'Working with CloudPixel was refreshing. Direct communication, crystal-clear milestones, transparent pricing, and zero technical debt. They are our trusted long-term engineering partner.',
    author: 'Rajesh Menon',
    role: 'Head of Digital Strategy',
    company: 'FinEdge Solutions',
    metric: '100% On-Time Delivery',
    avatar: 'R',
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx((activeIdx + 1) % testimonials.length);

  const t = testimonials[activeIdx];

  return (
    <section className="section-pad testimonials-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CLIENT REVIEWS & SOCIAL PROOF</span>
            <h2>Proven results that{' '}
              <span className="gradient-text">speak for themselves.</span>
            </h2>
          </div>
          <p>
            Here is what engineering leaders and founders say about building with CloudPixel Technologies.
          </p>
        </div>

        <div className="testimonial-card-hero">
          <div className="testimonial-card-glow" />
          <div className="testimonial-card-inner">
            <div className="testimonial-top">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="testimonial-verified">
                  <CheckCircle2 size={14} color="#10b981" /> Verified Client Review
                </span>
              </div>
              <div className="testimonial-metric-pill">
                {t.metric}
              </div>
            </div>

            <Quote size={40} className="testimonial-quote-icon" />

            <p className="testimonial-quote-text">"{t.quote}"</p>

            <div className="testimonial-footer">
              <div className="testimonial-author-box">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <h4 className="testimonial-author-name">{t.author}</h4>
                  <p className="testimonial-author-role">{t.role} · <span>{t.company}</span></p>
                </div>
              </div>

              <div className="testimonial-controls">
                <button onClick={prev} className="testimonial-btn" aria-label="Previous testimonial">
                  <ChevronLeft size={20} />
                </button>
                <span className="testimonial-counter">
                  0{activeIdx + 1} / 0{testimonials.length}
                </span>
                <button onClick={next} className="testimonial-btn" aria-label="Next testimonial">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client trust stat badges */}
        <div className="trust-stats-grid">
          <div className="trust-stat-box">
            <h4>99.98%</h4>
            <p>Guaranteed Infrastructure Uptime</p>
          </div>
          <div className="trust-stat-box">
            <h4>&lt; 1.2s</h4>
            <p>Average Global Page Load Speed</p>
          </div>
          <div className="trust-stat-box">
            <h4>100%</h4>
            <p>Code Handover & Documentation</p>
          </div>
          <div className="trust-stat-box">
            <h4>24/7</h4>
            <p>Continuous Monitoring & Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
