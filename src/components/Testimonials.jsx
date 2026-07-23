import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Sofia Chen',
    handle: '@sofia.creates',
    role: 'Lifestyle Creator · 480K YouTube',
    avatar: 'photo-1494790108377-be9c29b29330',
    text: 'Switched from Linktree to BioPro and immediately saw a 4× jump in email signups. The lead gating feature alone made it worth it — I grew my list by 3,400 subscribers in 2 weeks.',
    stat: '3,400 leads in 2 weeks',
  },
  {
    name: 'Marcus Webb',
    handle: '@marcuswebb',
    role: 'Digital Course Creator',
    avatar: 'photo-1507003211169-0a1dd7228f2d',
    text: "BioPro's analytics tell me exactly which link converts best so I can optimize. The custom domain was icing on the cake — my page now looks 100% branded and pro.",
    stat: '2.3× link CTR uplift',
  },
  {
    name: 'Priya Nair',
    handle: '@priyacooks',
    role: 'Food Blogger & Chef Coach',
    avatar: 'photo-1534528741775-53994a69daeb',
    text: "I have all my free recipe PDFs behind a lead gate on BioPro. My email list hit 10,000 in 6 months without any ad spend. Setup took literally 15 minutes.",
    stat: '10K subs in 6 months',
  },
  {
    name: 'Derek Austin',
    handle: '@derekdesigns',
    role: 'Freelance Brand Designer',
    avatar: 'photo-1500648767791-00dcc994a43e',
    text: 'The quality of my client inquiries improved significantly after I set up my BioPro page. It feels premium and positions me as an expert before the first conversation.',
    stat: '+67% quality lead rate',
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding px-4 bg-dark-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold tracking-wider">
            <span>⭐ CREATOR LOVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Results Speak for Themselves
          </h2>
          <p className="text-lg text-gray-400">
            Thousands of creators have ditched dead-end bio links and upgraded to BioPro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map(({ name, handle, role, avatar, text, stat }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glow-card rounded-3xl p-8 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">"{text}"</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt={name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-purple/20"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">{stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
