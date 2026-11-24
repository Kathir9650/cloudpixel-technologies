import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

const EMAIL    = 'hello@cloudpixel.example';
const WHATSAPP = '919000000000';

const methods = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: EMAIL,
    link: `mailto:${EMAIL}`,
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: 'Chat with us on WhatsApp ↗',
    link: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi CloudPixel Technologies, I would like to discuss a project.')}`,
    external: true,
  },
  {
    icon: MapPin,
    label: 'WORKING WITH',
    value: 'Businesses across India & worldwide',
    link: null,
  },
];

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', service: 'Website Development', message: '' });
  const [status, setStatus] = useState('');
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const whatsappMessage = () =>
    `Hi CloudPixel Technologies! I would like to enquire about your services.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nProject details: ${form.message}`;

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
      setForm({ name: '', email: '', service: 'Website Development', message: '' });
    } catch {
      const subject = encodeURIComponent(`Project enquiry: ${form.service}`);
      const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus('Could not reach the server — your email app should open instead.');
    }
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-wrap">

        {/* ── Left ── */}
        <div className="contact-copy">
          <span className="eyebrow">LET'S BUILD TOGETHER</span>
          <h2>Your next big idea starts with a <span className="gradient-text">hello.</span></h2>
          <p>
            Tell us what you are planning. We'll get back to you within 24 hours to
            understand your project and suggest the best next step — no commitment required.
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
            {['Fast response', 'No commitment', 'Fixed-price quotes', '100% transparent'].map(t => (
              <span key={t} className="trust-badge">
                <CheckCircle2 size={13} /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Form ── */}
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <h3>Tell us about your project</h3>
            <p>Fill in the details, then choose how you'd like to send your enquiry.</p>
          </div>

          <label>Your name *
            <input required name="name" value={form.name} onChange={update} placeholder="Your full name" />
          </label>
          <label>Email address *
            <input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" />
          </label>
          <label>What do you need?
            <select name="service" value={form.service} onChange={update}>
              <option>Website Development</option>
              <option>Cloud / AWS Solutions</option>
              <option>DevOps &amp; Automation</option>
              <option>UI/UX &amp; Optimization</option>
              <option>Maintenance &amp; Support</option>
              <option>Technical Consultation</option>
              <option>Other</option>
            </select>
          </label>
          <label>Project details *
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell us about your goals, timeline, budget range and any technical requirements..."
            />
          </label>

          <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending'
              ? 'Sending…'
              : <><Send size={15} /> Submit enquiry</>
            }
          </button>
          <button className="btn whatsapp-submit" type="button" onClick={sendWhatsApp}>
            <MessageCircle size={17} /> Send via WhatsApp instead
          </button>

          {status === 'success' && (
            <p className="form-status"><CheckCircle2 size={16} /> Thanks! Your enquiry is received. We'll be in touch soon.</p>
          )}
          {status && status !== 'sending' && status !== 'success' && (
            <p className="form-status" style={{ color: '#f97316' }}>{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
