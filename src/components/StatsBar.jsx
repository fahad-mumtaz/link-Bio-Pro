import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    creators: 0,
    links: 0,
    captureRate: 0,
    uptime: 0,
  });

  const targetCounts = {
    creators: 12847,
    links: 2400000,
    captureRate: 28,
    uptime: 99.9,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          creators: Math.floor(targetCounts.creators * easeOutQuart),
          links: Math.floor(targetCounts.links * easeOutQuart),
          captureRate: Math.floor(targetCounts.captureRate * easeOutQuart),
          uptime: parseFloat((targetCounts.uptime * easeOutQuart).toFixed(1)),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView]);

  const stats = [
    {
      id: 'creators',
      value: counts.creators.toLocaleString() + '+',
      label: 'Active Creators',
      prefix: '',
    },
    {
      id: 'links',
      value: (counts.links / 1000000).toFixed(1) + 'M+',
      label: 'Links Created',
      prefix: '',
    },
    {
      id: 'captureRate',
      value: counts.captureRate + '%',
      label: 'Avg. Email Capture Rate',
      prefix: '',
    },
    {
      id: 'uptime',
      value: counts.uptime + '%',
      label: 'Uptime',
      prefix: '',
    },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold gradient-text">
                  {stat.prefix}
                  {stat.value}
                </span>
              </div>
              <p className="text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
