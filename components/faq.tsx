'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What if I don&apos;t have 1 hour of work every single day?',
      answer: 'Hours roll over! Scout plan rolls over 7 days. Squad plan rolls over 14 days. CTO plan rolls over 30 days. Bank unused hours for bigger sprints whenever you need them.',
    },
    {
      question: 'What tech stacks do you work with?',
      answer: 'Frontend: React, Next.js, Vue, Angular, TypeScript, Tailwind CSS, Astro. Backend: Node.js, Python, Django, Flask, Laravel, Java, Go. Databases: PostgreSQL, MongoDB, MySQL, Firebase. Cloud: AWS, Azure, Google Cloud, Vercel, Netlify. Mobile: React Native, Flutter, Swift. Specializations: Web Apps, Mobile Apps, AI/ML, Cybersecurity, Full Stack Apps, Blockchain.',
    },
    {
      question: 'How does payment work?',
      answer: 'We invoice daily at midnight UTC with a card on file. Pause or cancel anytime from your dashboard. No contracts or hidden fees. You&apos;re never locked in.',
    },
    {
      question: 'What&apos;s the catch with the discount?',
      answer: 'No catch. We want you to experience daily velocity risk-free. The discount applies to your first week. You can cancel anytime, and standard rates apply after that. Everything is transparent at checkout.',
    },
    {
      question: 'Is ELCODERS a freelancer or agency?',
      answer: 'ELCODERS is a dedicated development arm (sub-startup) of EL VERSE TECHNOLOGIES. You get full agency processes (QA, Code Review, Project Management) with freelancer flexibility (pause daily, no lock-in). We deliver Web Apps, Mobile Apps, AI/ML, Cybersecurity, Full Stack Development, Azure, and Blockchain solutions.',
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, absolutely. Upgrade or downgrade with just 1 day notice. Unused rollover hours transfer with you when you change plans.',
    },
    {
      question: 'Do you offer discounts for nonprofits or startups?',
      answer: 'Yes! We have a Founders Program. Book an Enterprise call and mention "EL VERSE Impact" to get extended trial periods and special startup rates.',
    },
    {
      question: 'What services does ELCODERS offer?',
      answer: 'We offer Web Apps, Mobile Apps, AI/ML Solutions, Cybersecurity Services, Full Stack Applications, Azure Cloud Infrastructure, Blockchain Development, UI/UX Design, API Development, Cloud Migration, and DevOps Support.',
    },
    {
      question: 'How do I book a consultation?',
      answer: 'Scroll to the "Book Your Consultation" section and click the button to connect with us on WhatsApp. We&apos;ll assist you in scheduling your appointment directly on the chat. You can also message us at https://wa.link/x7p0yz.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments via Korapay, Stripe, Coinbase, Paystack, and Flutterwave. All payments are secure and encrypted. You can also book a call to discuss custom payment arrangements.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Have questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/50 transition"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <span
                  className={`text-cyan-400 text-xl flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-700/30 border-t border-slate-700">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
