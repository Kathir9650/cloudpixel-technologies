import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Phone, Clock, DollarSign, Shield } from 'lucide-react';

const EMAIL    = 'contact@cloudpixeltechnologies.com';
const WHATSAPP = '919650515004';

const methods = [
  {
    icon: Mail,
    label: 'EMAIL US DIRECTLY',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
  },
  {
    icon: MessageCircle,
    label: 'INSTANT WHATSAPP CHAT',
    value: '+91 96505 15004 (Available 24/7)',
    link: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi CloudPixel Technologies, I would like to discuss a project.')}`,
    external: true,
  },
  {
    icon: MapPin,
    label: 'GLOBAL REACH',
    value: 'Serving clients across India, North America, Europe & APAC',
    link: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '₹10,000 - ₹25,000',
    timeline: 'Within 2-4 weeks',
    message: '',
    website: '', // honeypot for spam bots
  });

  const [status, setStatus] = useState('');
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const whatsappMessage = () =>
    `Hi CloudPixel Technologies! I would like to enquire about your services.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone || 'Not provided'}\n*Service:* ${form.service}\n*Budget:* ${form.budget}\n*Timeline:* ${form.timeline}\n*Project Details:* ${form.message}`;

  const sendWhatsApp = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in your name, email and project details first.');
      return;
    }
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage())}`, '_blank', 'noopener,noreferrer');
  };

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const base = import.meta.env.VITE_API_URL || '';
      const res  = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('API unavailable');
      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'Website Development',
        budget: '₹10,000 - ₹25,000',
        timeline: 'Within 2-4 weeks',
        message: '',
        website: '',
      });
    } catch {
      const subject = encodeURIComponent(`Project Enquiry: ${form.service} (${form.name})`);
      const body    = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nProject details:\n${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus('Could not reach backend API — opening your email client directly.');
    }
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-wrap">

        {/* ── Left Column ── */}
        <div className="contact-copy">
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>Your next breakthrough begins with a <span className="gradient-text">hello.</span></h2>
          <p>
            Ready to build a high-converting web platform or scale your cloud infrastructure? Fill out the brief and our principal engineers will respond within 24 hours.
          </p>

          {methods.map(m => (
            <div className="contact-method" key={m.label}>
              <span><m.icon size={18} /></span>
              <div>
                <small>{m.label}</small>
                {m.link
                  ? <a href={m.link} target={m.external ? '_blank' : undefined} rel="noreferrer">{m.value}</a>
                  : <b>{m.value}</b>
                }
              </div>
            </div>
          ))}

          {/* Trust badges */}
          <div className="contact-trust">
            {[
              'Guaranteed 24-hr reply',
              'Strict NDA protected',
              'Zero hidden costs',
              'Direct engineer consultation',
            ].map(t => (
              <span key={t} className="trust-badge">
                <CheckCircle2 size={13} /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right Form ── */}
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <h3>Initiate Project Brief</h3>
            <p>Tell us about your requirements, timeline, and goals.</p>
          </div>

          {/* Honeypot field (hidden from humans, catches bots) */}
          <div style={{ display: 'none' }}>
            <label>Leave this empty <input name="website" value={form.website} onChange={update} /></label>
          </div>

          <div className="form-row-2">
            <label>Your Name *
              <input required name="name" value={form.name} onChange={update} placeholder="e.g. Alex Morgan" />
            </label>
            <label>Email Address *
              <input required type="email" name="email" value={form.email} onChange={update} placeholder="alex@company.com" />
            </label>
          </div>

          <div className="form-row-2">
            <label>Phone / WhatsApp
              <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91 98765 43210" />
            </label>
            <label>Primary Service Needed
              <select name="service" value={form.service} onChange={update}>
                <option>Website Development</option>
                <option>Cloud / AWS Infrastructure</option>
                <option>DevOps &amp; CI/CD Automation</option>
                <option>UI/UX &amp; Web Performance</option>
                <option>Care &amp; Maintenance</option>
                <option>Custom Enterprise Solution</option>
              </select>
            </label>
          </div>

          <div className="form-row-2">
            <label>Estimated Budget
              <select name="budget" value={form.budget} onChange={update}>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹25,000</option>
                <option>₹25,000 - ₹50,000</option>
                <option>₹50,000+ (Custom Enterprise)</option>
              </select>
            </label>
            <label>Desired Launch Window
              <select name="timeline" value={form.timeline} onChange={update}>
                <option>Urgent (&lt; 2 weeks)</option>
                <option>Standard (2-4 weeks)</option>
                <option>Flexible (1-2 months)</option>
                <option>Ongoing / Retainer</option>
              </select>
            </label>
          </div>

          <label>Project Details &amp; Objectives *
            <textarea
              required
              rows={4}
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Describe your project, key goals, target audience, and any technical preferences..."
            />
          </label>

          <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending'
              ? 'Transmitting brief…'
              : <><Send size={15} /> Send Project Enquiry</>
            }
          </button>

          <button className="btn whatsapp-submit" type="button" onClick={sendWhatsApp}>
            <MessageCircle size={17} /> Direct WhatsApp Enquiry
          </button>

          {status === 'success' && (
            <p className="form-status">
              <CheckCircle2 size={16} /> Thank you! Your brief has been received. Our team will review and reply within 24 hours.
            </p>
          )}
          {status && status !== 'sending' && status !== 'success' && (
            <p className="form-status" style={{ color: '#38bdf8' }}>{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
