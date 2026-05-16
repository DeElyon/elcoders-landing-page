'use client';

import { useState } from 'react';
import { AnimatedLoader } from './ui/AnimatedLoader';

const WHATSAPP_BUSINESS_NUMBER = "234XXXXXXXXX"; // Replace with real number

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'reply'>('idle');
  const [autoReply, setAutoReply] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

Hi ${name}, thanks for your interest in our tech services!
📌 Your request: "${serviceQuery}"
💰 Estimated price range: ${estimatedPrice}
🛠️ Details: ${matchedDetail}

🎯 Why choose ELCODERS:
• 4-week MVP delivery • 100% code ownership • Flat project pricing • Free 2‑week support
• Part of EL VERSE (ELITES, ELSPACE, EL ACCESS, NEXEL)

🔁 Next step: Click the WhatsApp button below to continue negotiation with our dev team. We'll answer timeline, discounts, and custom requirements.
(You can also pay deposit via Korapay before or after negotiation.)
💳 Korapay link: https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv

— ELCODERS team | we build, you scale.`;
  };

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.service) return;

    setStatus('loading');

    // Simulate processing
    setTimeout(() => {
      const reply = generateAutoReply(formData.name, formData.service);
      setAutoReply(reply);
      setStatus('reply');
    }, 1500);
  };

  const redirectToWhatsApp = () => {
    let message = `Hello ELCODERS team! I just submitted an in-app request.\n`;
    message += `Name: ${formData.name}\n`;
    message += `Service(s) interested in: ${formData.service}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `\n(After auto-reply, I'd like to negotiate pricing for the above services. Please share final estimate & timeline.)`;

    const waUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="booking" className="py-20 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-900/80 backdrop-blur border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📨 Capture Your Request
            </h3>
            <p className="text-slate-400 mb-8">
              Fill the brief form below. We'll auto-reply with your service summary & pricing confirmation, then redirect you to WhatsApp for further negotiation.
            </p>

            {status === 'idle' && (
              <form onSubmit={handleSendRequest} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Which service(s) interest you?
                    </label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      placeholder="e.g., MVP, Penetration Testing, React Native app"
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Michael Ade"
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition transform"
                >
                  📩 Send Request & Continue to WhatsApp
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
                    <span>💬</span> Continue to WhatsApp for negotiation →
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

        {/* Footer info from HTML */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <p className="text-white font-bold mb-2 flex items-center gap-2">
                    <span>💳</span> Secure Payment via Korapay
                </p>
                <a
                    href="https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv"
                    target="_blank"
                    className="text-cyan-400 hover:underline break-all"
                >
                    https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv
                </a>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center">
                <p className="text-slate-400">
                    📞 <strong>Need custom quote / bundle discount?</strong><br/>
                    Use the request form above → get auto-reply → then direct WhatsApp negotiation.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
