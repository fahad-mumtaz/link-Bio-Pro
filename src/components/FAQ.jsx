import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does email lead gating work?',
    a: 'Email gating lets you lock specific download links or content. When a visitor clicks the link, a premium email capture modal appears. Once they register, they get instant access to the gated content — fully automated.',
  },
  {
    q: 'Can I use a custom CNAME domain?',
    a: 'Yes! With our Pro and Hub plans, you can configure your DNS records and point a CNAME to BioPro. We handle SSL certification automatically. Setup takes under 5 minutes.',
  },
  {
    q: 'Are there any commissions on sales or tips?',
    a: 'Zero. BioPro charges 0% fees on all checkouts, tips, or bookings made through your bio page. You keep 100% of your digital revenue (minus standard Stripe processing fees).',
  },
  {
    q: 'How does the analytics tracking work?',
    a: 'Our event tracking captures click timestamps, geographic data (country/city), device type (mobile, desktop), browser, OS, and conversion states. All data is available in your real-time dashboard with export support.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. You can upgrade, downgrade, or cancel inside the billing panel at any time. Cancellations take effect at the end of your current billing period, reverting your account to the Free tier.',
  },
  {
    q: 'Does BioPro integrate with my email marketing tool?',
    a: 'Yes — we natively integrate with Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, Drip, Brevo, and more via Zapier webhooks or direct API connections.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" ref={ref} className="section-padding px-4">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-semibold tracking-wider">
            <span>💬 HELP DESK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">Everything you need to know before getting started.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-dark-900/60 backdrop-blur border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/3 transition-colors"
              >
                <span className="font-heading font-semibold text-white text-sm md:text-base pr-6">{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-purple flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
