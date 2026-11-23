export default function Home() {
  return (
    <main>
      <Hero />
      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container trust-inner">
          <span>YOUR DIGITAL PARTNER</span>
          {partners.map((p, i) => (
            <React.Fragment key={p}>
              <b>{p}</b>
              {i < partners.length - 1 && <i />}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Stats strip */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="stats-strip">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <div style={{ color: 'var(--accent-1)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                  <s.icon size={20} />
                </div>
                <h3>{s.val}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      {/* CTA Band */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's make it <span className="gradient-text">happen.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 12, maxWidth: 460 }}>
              Join businesses that chose CloudPixel Technologies to build, grow and scale their digital presence.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <a className="btn btn-primary" href="#contact" style={{ fontSize: 15, padding: '16px 32px' }}>
              Talk to our team <ArrowUpRight size={18} />
            </a>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', width: '100%' }}>
              Free consultation · No commitment
            </span>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
