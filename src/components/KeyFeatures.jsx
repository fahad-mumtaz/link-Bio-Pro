import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Mail, Globe, Plug } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-brand-purple" />,
    iconBg: 'bg-brand-purple/10 border-brand-purple/20',
    title: 'Real-Time Event & Conversion Funnels',
    description: 'Track every link click, geo-location, device model, and email capture event in live-updating dashboards with SVG charts.',
    span: 'md:col-span-2',
    visual: (
      <div className="w-full bg-dark-950/80 border border-white/5 rounded-2xl p-4 mt-auto">
        <div className="flex justify-between mb-3">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Weekly Conversions</p>
            <h4 className="text-xl font-bold text-white">+1,248 <span className="text-xs text-brand-emerald">(+38.2%)</span></h4>
          </div>
        </div>
        <svg viewBox="0 0 400 80" className="w-full">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,70 Q50,20 100,40 T200,10 T300,50 T400,5 L400,80 L0,80 Z" fill="url(#g1)" />
          <path d="M0,70 Q50,20 100,40 T200,10 T300,50 T400,5" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="200" cy="10" r="4" fill="#A855F7" />
          <circle cx="200" cy="10" r="8" fill="none" stroke="#A855F7" strokeWidth="1.5" className="animate-ping" />
        </svg>
      </div>
    ),
  },
  {
    icon: <Mail className="w-6 h-6 text-brand-pink" />,
    iconBg: 'bg-brand-pink/10 border-brand-pink/20',
    title: 'Auto Lead Gating',
    description: 'Lock premium downloads behind an email collector. Visitors register before accessing your content — hands free.',
    span: 'md:col-span-1',
    visual: (
      <div className="p-4 bg-dark-950/80 border border-white/5 rounded-2xl mt-auto space-y-2">
        <div className="flex items-center space-x-2 text-xs text-brand-pink font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
          <span>Lead gated</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full w-3/4" />
        <div className="h-2 bg-white/5 rounded-full w-1/2" />
        <div className="flex space-x-2 pt-2">
          <div className="h-7 bg-white/5 border border-white/10 rounded-lg flex-1" />
          <div className="h-7 bg-brand-pink rounded-lg w-8 flex items-center justify-center text-xs text-white">✓</div>
        </div>
      </div>
    ),
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-blue" />,
    iconBg: 'bg-brand-blue/10 border-brand-blue/20',
    title: 'Custom Domain CNAME',
    description: 'Point `links.yourbrand.com` to BioPro with automated CNAME configuration and instant free SSL.',
    span: 'md:col-span-1',
    visual: (
      <div className="p-4 bg-dark-950/80 border border-white/5 rounded-2xl mt-auto space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 font-mono">CNAME</span>
          <span className="text-brand-emerald font-semibold">● Active</span>
        </div>
        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
          <span className="text-[11px] text-white font-medium font-mono">links.mycreator.co</span>
        </div>
      </div>
    ),
  },
  {
    icon: <Plug className="w-6 h-6 text-brand-emerald" />,
    iconBg: 'bg-brand-emerald/10 border-brand-emerald/20',
    title: 'Full Integration Orbital Ecosystem',
    description: 'Sync captured subscribers directly into Mailchimp, ConvertKit, Zapier, or Google Sheets with zero delay.',
    span: 'md:col-span-2',
    visual: (
      <div className="w-full h-28 relative flex items-center justify-center mt-auto overflow-hidden">
        <div className="absolute w-44 h-44 rounded-full border border-white/5 animate-spin-slow flex items-center justify-center">
          {['Stripe', 'Mail', 'Slack', 'Zap'].map((label, i) => {
            const positions = ['top-0', 'bottom-0', 'left-0', 'right-0'];
            return (
              <div key={label} className={`absolute ${positions[i]} w-8 h-8 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-[9px] text-gray-300`}>
                {label}
              </div>
            );
          })}
        </div>
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-pink p-[1.5px] shadow-lg z-10">
          <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center text-xs font-bold text-white font-heading">B</div>
        </div>
      </div>
    ),
  },
];

const KeyFeatures = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="features" ref={ref} className="section-padding px-4">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-semibold tracking-wider">
            <span>🔥 THE FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            Packed with High-Converting Features Built to Scale
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Standard bio links lose 70% of potential leads. BioPro bridges the gap with a built-in email and metrics layer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ icon, iconBg, title, description, span, visual }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glow-card rounded-3xl p-8 flex flex-col space-y-6 ${span} overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${iconBg}`}>
                {icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-white">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
              {visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
