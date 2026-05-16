'use client';

import { useState } from 'react';
import { AnimatedLoader } from './ui/AnimatedLoader';

const WHATSAPP_BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER || "2348123456789";

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+234',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'reply'>('idle');
  const [autoReply, setAutoReply] = useState('');

  const countryCodes = [
    { code: '+1', country: 'USA & Canada' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+86', country: 'China' },
    { code: '+91', country: 'India' },
    { code: '+55', country: 'Brazil' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+31', country: 'Netherlands' },
    { code: '+47', country: 'Norway' },
    { code: '+46', country: 'Sweden' },
    { code: '+41', country: 'Switzerland' },
    { code: '+43', country: 'Austria' },
    { code: '+45', country: 'Denmark' },
    { code: '+358', country: 'Finland' },
    { code: '+353', country: 'Ireland' },
    { code: '+372', country: 'Estonia' },
    { code: '+371', country: 'Latvia' },
    { code: '+370', country: 'Lithuania' },
    { code: '+48', country: 'Poland' },
    { code: '+420', country: 'Czechia' },
    { code: '+421', country: 'Slovakia' },
    { code: '+36', country: 'Hungary' },
    { code: '+40', country: 'Romania' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+385', country: 'Croatia' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+30', country: 'Greece' },
    { code: '+357', country: 'Cyprus' },
    { code: '+90', country: 'Turkey' },
    { code: '+20', country: 'Egypt' },
    { code: '+212', country: 'Morocco' },
    { code: '+216', country: 'Tunisia' },
    { code: '+213', country: 'Algeria' },
    { code: '+27', country: 'South Africa' },
    { code: '+234', country: 'Nigeria' },
    { code: '+254', country: 'Kenya' },
    { code: '+233', country: 'Ghana' },
    { code: '+256', country: 'Uganda' },
    { code: '+255', country: 'Tanzania' },
    { code: '+230', country: 'Mauritius' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+974', country: 'Qatar' },
    { code: '+965', country: 'Kuwait' },
    { code: '+973', country: 'Bahrain' },
    { code: '+968', country: 'Oman' },
    { code: '+92', country: 'Pakistan' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+60', country: 'Malaysia' },
    { code: '+65', country: 'Singapore' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+66', country: 'Thailand' },
    { code: '+84', country: 'Vietnam' },
    { code: '+82', country: 'South Korea' },
    { code: '+64', country: 'New Zealand' },
    { code: '+507', country: 'Panama' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+1-876', country: 'Jamaica' },
    { code: '+1-809', country: 'Dominican Republic' },
    { code: '+52', country: 'Mexico' },
    { code: '+56', country: 'Chile' },
    { code: '+51', country: 'Peru' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+54', country: 'Argentina' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
  ];

  const services = [
    'Web App Development',
    'Mobile App Development',
    'MVP (Minimum Viable Product)',
    'AI/ML Solutions',
    'Cybersecurity Services',
    'SaaS Platform',
    'Full Stack Development',
    'UI/UX Design',
    'Cloud/DevOps',
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateAutoReply = (name: string, serviceQuery: string) => {
    const serviceKeywords = [
      { keys: ["mvp", "minimum viable product"], price: "$3,500 - $5,000 depending on scope", detail: "MVP in 4 weeks flat price start $3,500" },
      { keys: ["penetration", "pentest", "security audit"], price: "$500 - $1,500", detail: "Cybersecurity: audit from $500, pentest $1,500" },
      { keys: ["react native", "mobile app", "flutter", "ios", "android"], price: "$5,000+", detail: "Cross-platform or native apps — starting $5k" },
      { keys: ["saas", "saas platform", "subscription"], price: "$6,500", detail: "Full SaaS with multi-tenancy & billing" },
      { keys: ["frontend", "landing page", "corporate website", "dashboard"], price: "$500 - $2,500", detail: "Frontend & dashboards tailored" },
      { keys: ["backend", "api", "database", "auth"], price: "$800 - $1,500", detail: "APIs, auth, DB design flat rates" },
      { keys: ["ecommerce", "shopify", "woocommerce"], price: "$1,200 - $4,000", detail: "E‑commerce & CMS solutions" },
      { keys: ["ai", "chatbot", "chatgpt", "automation"], price: "$1,500+", detail: "AI integration & custom automation" },
      { keys: ["devops", "docker", "kubernetes", "cicd"], price: "$500 - $2,000", detail: "DevOps & infrastructure setup" },
      { keys: ["maintenance", "retainer", "hourly"], price: "$50/hour or $450+/mo", detail: "Support retainers & emergency fixes" },
      { keys: ["compliance", "gdpr", "bug bounty"], price: "$800 - $2,000", detail: "Compliance / bug bounty program" },
    ];

    let estimatedPrice = "custom quote (negotiable)";
    let matchedDetail = "We'll provide exact estimate after brief chat.";
    let lowerQuery = serviceQuery.toLowerCase();

    for (let entry of serviceKeywords) {
      for (let kw of entry.keys) {
        if (lowerQuery.includes(kw)) {
          estimatedPrice = entry.price;
          matchedDetail = entry.detail;
          break;
        }
      }
      if (estimatedPrice !== "custom quote (negotiable)") break;
    }

    return `✅ AUTO-REPLY from ELCODERS (EL VERSE ECOSYSTEM)

Hi ${name}, thanks for booking a consultation!
📌 Your interest: "${serviceQuery}"
📅 Preferred: ${formData.date} at ${formData.time}
💰 Estimated price range: ${estimatedPrice}
🛠️ Details: ${matchedDetail}

🎯 Why choose ELCODERS:
• 4-week MVP delivery • 100% code ownership • Flat project pricing • Free 2‑week support
• Part of EL VERSE (ELITES, ELSPACE, EL ACCESS, NEXEL)

🔁 Next step: Click the WhatsApp button below to confirm your slot and continue negotiation with our dev team.
💳 Korapay link: https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv

— ELCODERS team | we build, you scale.`;
  };

  const handleSendRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.service || !formData.phone) return;

    setStatus('loading');

    try {
        // Capture lead data on server
        await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    } catch (error) {
        console.error('Failed to save booking:', error);
    }

    setTimeout(() => {
      const reply = generateAutoReply(formData.name, formData.service);
      setAutoReply(reply);
      setStatus('reply');
    }, 1500);
  };

  const redirectToWhatsApp = () => {
    let message = `Hello ELCODERS team! I just booked a consultation.\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.countryCode}${formData.phone}\n`;
    message += `Service: ${formData.service}\n`;
    message += `Schedule: ${formData.date} @ ${formData.time}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `\n(I'd like to confirm this consultation and discuss the estimated pricing/timeline.)`;

    const waUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-900/80 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📅 Book Your Consultation
            </h3>
            <p className="text-slate-400 mb-8">
              Schedule a call with our team. We'll auto-reply with a summary and then redirect you to WhatsApp.
            </p>

            {status === 'idle' && (
              <form onSubmit={handleSendRequest} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g., John Doe"
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/3">
                        <label htmlFor="countryCode" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                        Code
                        </label>
                        <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition"
                        >
                        {countryCodes.map(c => (
                            <option key={c.code} value={c.code}>{c.code} ({c.country})</option>
                        ))}
                        </select>
                    </div>
                    <div className="w-2/3">
                        <label htmlFor="phone" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                        Phone Number
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="800 000 0000"
                        className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                        />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={today}
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Project Brief / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition transform"
                >
                  📩 Confirm & Continue to WhatsApp
                </button>
              </form>
            )}

            {status === 'loading' && (
              <div className="py-20">
                <AnimatedLoader />
              </div>
            )}

            {status === 'reply' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-slate-800 border-l-4 border-cyan-500 p-6 rounded-xl">
                  <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                    <span>📩</span> IN-APP AUTO-REPLY (ELCODERS)
                  </h4>
                  <pre className="text-slate-300 font-sans whitespace-pre-wrap text-sm leading-relaxed">
                    {autoReply}
                  </pre>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={redirectToWhatsApp}
                    className="flex-1 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20ba5a] transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    <span>💬</span> Confirm on WhatsApp →
                  </button>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-slate-800 text-slate-400 rounded-xl font-bold hover:bg-slate-700 transition"
                  >
                    ✖ Dismiss
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
