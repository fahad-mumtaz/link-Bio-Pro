import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '28,482+', label: 'Active Creators', icon: '🚀' },
  { value: '4.1M+', label: 'Links Published', icon: '🔗' },
  { value: '31%', label: 'Avg. Email Capture Rate', icon: '📧' },
  { value: '99.9%', label: 'Platform Uptime SLA', icon: '⚡' },
];

const StatsBar = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 border-y border-white/5 bg-dark-900/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-4xl lg:text-5xl font-heading font-extrabold gradient-text mb-2">{value}</div>
              <p className="text-sm text-gray-400 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
