import { ShieldCheck, Lock, Eye, Database, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="subpage">
      <section className="subpage-hero section-pad">
        <div className="container legal-copy">
          <span className="eyebrow">LEGAL &amp; COMPLIANCE</span>
          <h1>Privacy <span className="gradient-text">Policy.</span></h1>
          <p className="subpage-lead">
            Effective Date: November 2026 · CloudPixel Technologies
          </p>

          <div className="privacy-highlight-box">
            <Lock size={20} color="var(--accent-1)" />
            <p>
              CloudPixel Technologies is committed to protecting your privacy and handling all client and visitor data with enterprise-grade security and complete transparency.
            </p>
          </div>

          <h3>1. Information We Collect</h3>
          <p>
            When you engage with our website, request a consultation, or submit an enquiry through our contact forms, we may collect the following details:
          </p>
          <ul>
            <li><b>Contact Information:</b> Full name, email address, telephone number, and company name.</li>
            <li><b>Project Brief Details:</b> Service interests, project timeline, budget specifications, and requirements described in your message.</li>
            <li><b>Technical Telemetry:</b> IP address, browser type, device information, and interaction timestamps (used solely for security audit logs and bot defense).</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We process collected information exclusively for legitimate business purposes:
          </p>
          <ul>
            <li>To review, evaluate, and respond to your service enquiries and project briefs.</li>
            <li>To prepare formal project scopes, architectural proposals, and milestone contracts.</li>
            <li>To provide technical support, maintenance updates, and ongoing client communication.</li>
            <li>To protect our infrastructure against cyber attacks, fraudulent submissions, and unauthorized access.</li>
          </ul>

          <h3>3. Data Protection &amp; Confidentiality</h3>
          <p>
            We strictly enforce technical and operational security controls to safeguard your proprietary data:
          </p>
          <ul>
            <li><b>Zero Data Selling:</b> We will never sell, lease, or monetize your contact or project information to third parties.</li>
            <li><b>Encryption:</b> All communications and submissions are encrypted in transit using industry-standard TLS 1.3 cryptographic protocols.</li>
            <li><b>Mutual Non-Disclosure:</b> All client discussions, business concepts, and technical architectures are treated as strictly confidential under customary NDA practices.</li>
          </ul>

          <h3>4. Third-Party Infrastructure Providers</h3>
          <p>
            Our website and backend services utilize reputable global cloud infrastructure providers (including AWS, Vercel, and Cloudflare) to ensure high availability, CDN caching, and resilient database storage. These providers operate under rigorous SOC 2 and ISO 27001 compliance standards.
          </p>

          <h3>5. Cookies and Analytics</h3>
          <p>
            We may utilize privacy-focused analytics cookies to evaluate traffic patterns and optimize site performance. You can adjust your browser settings to decline or clear cookies at any time without affecting your ability to browse our services.
          </p>

          <h3>6. Contact Our Data Protection Team</h3>
          <p>
            If you have questions, feedback, or data requests regarding this Privacy Policy, please contact our team directly:
          </p>
          <p style={{ marginTop: 12 }}>
            <b>CloudPixel Technologies</b><br />
            Email: <a href="mailto:contact@cloudpixeltechnologies.com" style={{ color: 'var(--accent-1)' }}>contact@cloudpixeltechnologies.com</a><br />
            WhatsApp: +91 96505 15004
          </p>
        </div>
      </section>
    </main>
  );
}
