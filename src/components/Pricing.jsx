import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for beginners who want a clean link page.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceLabel: 'Free forever',
    features: [
      { text: 'Unlimited Bio Links', ok: true },
      { text: '3 Page Themes', ok: true },
      { text: 'Basic 7-Day Analytics', ok: true },
      { text: 'Remove BioPro Branding', ok: false },
      { text: 'Custom CNAME Domain', ok: false },
      { text: 'Email Lead Gating', ok: false },
    ],
    cta: 'Start Free',
    ctaStyle: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
    featured: false,
  },
  {
    name: 'Elite Pro',
    desc: 'For serious creators who want leads & deep insights.',
    monthlyPrice: 12,
    yearlyPrice: 9,
    features: [
      { text: 'Everything in Starter', ok: true },
      { text: 'Remove BioPro Branding', ok: true },
      { text: 'CNAME Custom Domains', ok: true },
      { text: 'Email Lead Gating (5k/mo)', ok: true },
      { text: 'Advanced 90-Day Analytics', ok: true },
      { text: 'Dedicated Account Manager', ok: false },
    ],
    cta: 'Start 14-Day Free Trial',
    ctaStyle: 'bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:brightness-110 shadow-lg shadow-brand-purple/20',
    featured: true,
  },
  {
    name: 'Business Hub',
    desc: 'For teams, brands and agencies that need full power.',
    monthlyPrice: 29,
    yearlyPrice: 22,
    features: [
      { text: 'Everything in Pro', ok: true },
      { text: 'Unlimited Lead Captures', ok: true },
      { text: '5 Team Member Logins', ok: true },
      { text: 'Dedicated Account Manager', ok: true },
      { text: 'Priority Live Chat Support', ok: true },
      { text: 'Custom Onboarding Call', ok: true },
    ],
    cta: 'Start Hub Plan',
    ctaStyle: 'bg-white/5 hover:bg-white/10 border border-white/10 text-white',
    featured: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" ref={ref} className="section-padding px-4 bg-dark-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold tracking-wider">
            <span>💎 PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Simple Pricing for Growth-Focused Brands
          </h2>
          <p className="text-lg text-gray-400">Upgrade or cancel anytime. No hidden fees.</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-dark-900 border border-white/10 p-1 rounded-2xl gap-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${!yearly ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${yearly ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Yearly · Save 20%
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map(({ name, desc, monthlyPrice, yearlyPrice, priceLabel, features, cta, ctaStyle, featured }, i) => {
            const price = yearly ? yearlyPrice : monthlyPrice;
            const period = priceLabel || `/${yearly ? 'mo (billed yearly)' : 'month'}`;

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glow-card rounded-3xl p-8 flex flex-col justify-between relative ${
                  featured ? 'ring-1 ring-brand-purple/40 lg:-translate-y-4 shadow-2xl shadow-brand-purple/10' : ''
                }`}
              >
                {featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-[10px] font-extrabold text-white uppercase tracking-widest whitespace-nowrap">
                    ✦ Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">{name}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-heading font-extrabold text-white">
                      {price === 0 ? '$0' : `$${price}`}
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{period}</span>
                  </div>

                  <hr className="border-white/5" />

                  <ul className="space-y-3">
                    {features.map(({ text, ok }) => (
                      <li key={text} className={`flex items-center space-x-3 text-sm ${ok ? 'text-gray-300' : 'text-gray-600'}`}>
                        {ok
                          ? <Check className="w-4 h-4 text-brand-purple flex-shrink-0" />
                          : <X className="w-4 h-4 text-gray-700 flex-shrink-0" />
                        }
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button className={`w-full py-4 font-semibold rounded-xl transition-all duration-200 text-sm ${ctaStyle}`}>
                    {cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
