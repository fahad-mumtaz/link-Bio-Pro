import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Palette, BarChart3 } from 'lucide-react';

const Solution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Mail,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Email Intercept',
      description: 'Capture leads with high-converting exit-intent popups and email gates. Visitors submit emails before seeing your links.',
      stat: 'Avg. 28% conversion rate',
    },
    {
      icon: Palette,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Signature Themes',
      description: 'Access exclusive themes crafted by top-tier product designers. Unlimited customization, unlimited themes.',
      stat: '50+ premium templates',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Deep Analytics',
      description: 'Go beyond clicks. Track unique visitors, device mix, geodata, referral sources, and full conversion funnels.',
      stat: 'Real-time dashboard',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600">
      <div className="container-custom">
        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-white mb-6">
            BioPro Solves Everything
          </h2>
          <p className="text-body-large text-white/90 leading-relaxed">
            The only link-in-bio tool engineered for serious growth
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-card font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {feature.description}
              </p>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  {feature.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
