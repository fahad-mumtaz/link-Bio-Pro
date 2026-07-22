import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const KeyFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Email Intercept That Actually Converts',
      description: 'High-converting exit-intent popups, customizable email gates, GDPR-compliant forms, lead magnet delivery, and integrations with all major email platforms.',
      stat: '28% average email capture rate (industry avg: 8%)',
      imagePosition: 'left',
    },
    {
      title: 'Analytics That Tell the Full Story',
      description: 'Real-time traffic monitoring, click tracking per link, geographic data, device breakdown, referral source tracking, and conversion funnel visualization.',
      stat: 'Track everything, optimize everything',
      imagePosition: 'right',
    },
    {
      title: 'Your Brand, Always',
      description: 'Custom domains, white-labeled pages, SSL certificates included, and CDN for sub-100ms load times.',
      stat: 'Look professional, build trust',
      imagePosition: 'left',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Engineered for Success
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Every pixel is designed to drive action, build trust, and grow your digital empire.
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="order-2">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Feature Mockup</div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {feature.description.split(', ').map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 border-l-4 border-primary p-4 rounded-lg">
                  <p className="text-purple-700 font-medium">
                    {feature.stat}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
