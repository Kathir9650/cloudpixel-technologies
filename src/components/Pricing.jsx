import { Check, ArrowUpRight, Zap, Star, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Launch',
    icon: Zap,
    iconColor: 'var(--accent-2)',
    price: '₹4,999',
    sub: 'starting from',
    desc: 'The perfect digital launchpad for a new or small business that wants a professional online presence fast.',
    items: [
      'Up to 3 beautifully designed pages',
      'Fully responsive, mobile-first design',
      'Contact form & WhatsApp button',
      'On-page SEO foundation',
      'One deployment included',
      'Handover with documentation',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    icon: Star,
    iconColor: '#c084fc',
    price: '₹9,999',
    sub: 'starting from',
    desc: 'More room to tell your story, generate more enquiries, and make a lasting impression on every visitor.',
    items: [
      'Up to 5 pages with custom visual direction',
      'Smooth animations & micro-interactions',
      'Contact form + WhatsApp integration',
      'Google Analytics setup',
      'Blog or portfolio section',
      'Deployment + 30-day support',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    icon: Crown,
    iconColor: '#f59e0b',
    price: '₹19,999+',
    sub: 'starting from',
    desc: 'A fully tailored digital experience for ambitious businesses with advanced functionality and performance needs.',
    items: [
      'Up to 10 pages with custom design system',
      'Advanced animations & interactions',
      'Custom features & integrations',
      'Performance & Core Web Vitals optimization',
      'Cloud deployment guidance',
      'Priority support — 60 days',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad section-alt">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h2>Choose your{' '}
              <span className="gradient-text">next step.</span>
            </h2>
          </div>
          <p>Clear starting prices. Every project is scoped around your goals, content and required features.</p>
        </div>

        <div className="pricing-grid">
          {plans.map(p => (
            <article className={`price-card ${p.featured ? 'featured' : ''}`} key={p.name}>
              {p.featured && <span className="popular-badge">⭐ MOST POPULAR</span>}

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: p.featured ? 'rgba(192,132,252,0.15)' : 'rgba(124,58,237,0.1)',
                  display: 'grid', placeItems: 'center', color: p.iconColor,
                }}>
                  <p.icon size={20} />
                </div>
                <span className="price-plan-name">{p.name} Plan</span>
              </div>

              <div className="price-amount">{p.price}</div>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: -4, marginBottom: 8 }}>{p.sub}</p>
              <p>{p.desc}</p>
              <div className="price-divider" />
              <ul>
                {p.items.map(i => (
                  <li key={i}><Check size={15} />{i}</li>
                ))}
              </ul>
              <a
                className={p.featured ? 'btn btn-primary' : 'btn btn-outline'}
                href="#contact"
              >
                Get started <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          ⓘ &nbsp;Prices shown are indicative starting rates in INR, not a binding quote. Domain registration, 
          hosting fees, paid third-party services, applicable taxes, extra revision rounds, and any work 
          outside the agreed scope may cost extra. Final scope and pricing are always confirmed in writing before work begins.
        </p>
      </div>
    </section>
  );
}
