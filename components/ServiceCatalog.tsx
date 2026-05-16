'use client';

export function ServiceCatalog() {
  const categories = [
    {
      title: '🌐 Frontend Development',
      services: [
        { name: 'Landing Page', price: '$500' },
        { name: 'Corporate Website (5-10 pages)', price: '$1,200' },
        { name: 'Dashboard / Admin Panel', price: '$2,500' },
        { name: 'Progressive Web App (PWA)', price: '$3,000' },
        { name: 'Figma to Code Conversion', price: '$800' },
        { name: 'Responsive HTML/CSS Template', price: '$400' },
      ],
    },
    {
      title: '⚙️ Backend Development',
      services: [
        { name: 'REST API (Node.js/Python/Django)', price: '$1,500' },
        { name: 'Database Design (PostgreSQL/MySQL/MongoDB)', price: '$800' },
        { name: 'Authentication System (JWT + OAuth)', price: '$1,000' },
        { name: 'Payment Integration (Stripe/Paystack/Flutterwave/Korapay)', price: '$1,200' },
        { name: 'Admin CMS', price: '$2,000' },
        { name: 'GraphQL API', price: '$2,000' },
      ],
    },
    {
      title: '📱 Full Stack Applications',
      services: [
        { name: 'MVP (Minimum Viable Product)', price: '$3,500' },
        { name: 'SaaS Platform (multi-tenant + subscriptions)', price: '$6,500' },
        { name: 'E-commerce Store', price: '$4,000' },
        { name: 'Social Media / Community App', price: '$8,000' },
        { name: 'Marketplace Platform', price: '$10,000' },
        { name: 'Booking / Reservation System', price: '$3,500' },
        { name: 'Learning Management System (LMS)', price: '$7,000' },
        { name: 'Real Estate Listing Platform', price: '$5,000' },
        { name: 'Job Board Platform', price: '$4,500' },
      ],
    },
    {
      title: '📲 Mobile Development',
      services: [
        { name: 'React Native App (iOS + Android)', price: '$5,000' },
        { name: 'Flutter App', price: '$5,500' },
        { name: 'iOS Native (Swift)', price: '$6,000' },
        { name: 'Android Native (Kotlin)', price: '$6,000' },
        { name: 'Mobile App Maintenance', price: '$500/month' },
      ],
    },
    {
      title: '🛡️ Cybersecurity',
      services: [
        { name: 'Website Security Audit', price: '$500' },
        { name: 'Penetration Testing', price: '$1,500' },
        { name: 'SSL/HTTPS Setup', price: '$200' },
        { name: 'DDoS Protection Setup', price: '$300' },
        { name: 'GDPR / Compliance Check', price: '$800' },
        { name: 'Bug Bounty Program Setup', price: '$2,000' },
        { name: 'Source Code Security Review', price: '$1,200' },
        { name: 'Cloud Security Assessment (AWS/GCP)', price: '$1,000' },
        { name: 'Security Headers & Hardening', price: '$400' },
      ],
    },
    {
      title: '🤖 AI & Automation',
      services: [
        { name: 'ChatGPT Chatbot Integration', price: '$1,500' },
        { name: 'AI Content Generation Tool', price: '$2,500' },
        { name: 'Web Scraper / Data Extractor', price: '$800' },
        { name: 'Lead Scoring System (AI)', price: '$3,000' },
        { name: 'Recommendation Engine', price: '$4,000' },
        { name: 'Image Recognition API', price: '$3,000' },
        { name: 'Sentiment Analysis Tool', price: '$2,500' },
      ],
    },
    {
      title: '🔧 DevOps & Infrastructure',
      services: [
        { name: 'Cloud Hosting Setup (AWS/GCP/DigitalOcean)', price: '$500' },
        { name: 'CI/CD Pipeline (GitHub Actions/GitLab)', price: '$1,000' },
        { name: 'Server Monitoring & Alerts', price: '$300/month' },
        { name: 'Database Backup & Recovery', price: '$400/month' },
        { name: 'Docker Containerization', price: '$600' },
        { name: 'Kubernetes Setup', price: '$2,000' },
        { name: 'Load Balancer Configuration', price: '$700' },
      ],
    },
    {
      title: '🛒 E‑commerce & CMS',
      services: [
        { name: 'WooCommerce Store', price: '$1,500' },
        { name: 'Shopify Customization', price: '$1,200' },
        { name: 'Custom WordPress Theme', price: '$1,000' },
        { name: 'Headless CMS (Sanity/Contentful)', price: '$2,500' },
        { name: 'Subscription Box Platform', price: '$4,000' },
      ],
    },
    {
      title: '🛠️ Maintenance & Support',
      services: [
        { name: 'Hourly Development', price: '$50/hour' },
        { name: 'Monthly Retainer (10 hours)', price: '$450/month' },
        { name: 'Monthly Retainer (20 hours)', price: '$850/month' },
        { name: 'Monthly Retainer (40 hours)', price: '$1,600/month' },
        { name: 'Emergency Bug Fix (24-hour response)', price: '$300' },
        { name: 'Website Migration', price: '$500' },
      ],
    },
    {
      title: '🧩 Custom & Miscellaneous',
      services: [
        { name: 'API Integration (third-party)', price: '$600–$2,000' },
        { name: 'Webhook Setup', price: '$300' },
        { name: 'Email Marketing Integration (Mailchimp/SendGrid)', price: '$400' },
        { name: 'Analytics Dashboard', price: '$800' },
        { name: 'File Upload & Management System', price: '$600' },
        { name: 'Real-time Chat Feature', price: '$1,500' },
        { name: 'Video Call Integration (Zoom/WebRTC)', price: '$2,000' },
        { name: 'Export Reports (PDF/CSV/Excel)', price: '$500' },
        { name: 'Multi-language Support (i18n)', price: '$800' },
        { name: 'Dark/Light Mode Toggle', price: '$300' },
      ],
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Service Catalog
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Complete Tech Solutions
          </h3>
          <p className="text-lg text-slate-400">
            From Frontend to Cybersecurity, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex justify-between items-start gap-4">
                    <span className="text-slate-300 text-sm leading-tight">{service.name}</span>
                    <span className="text-cyan-400 font-mono text-xs font-bold whitespace-nowrap bg-cyan-400/10 px-2 py-1 rounded">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🏆 Why ELCODERS (by EL VERSE ECOSYSTEM)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>12+ MVPs delivered in 2024 — 3 are now funded.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>4‑week MVP delivery or first week free.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>100% code ownership — no lock-in, no traps.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>Flat project pricing — no hourly surprises.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>Free 2‑week post‑launch support.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-500">✅</span>
                    <span>Backed by EL ACCESS, ELSPACE, ELITES & NEXEL.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
