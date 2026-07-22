import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Globe, Shield, Smartphone, Target, Link2, BarChart3, Palette, Mail } from 'lucide-react';

const PlatformFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized delivery through global CDN for sub-100ms load times',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'White-labeled pages and pixel-perfect branding',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'SSL encryption and GDPR compliance built-in',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: '90% of traffic is mobile - we\'re designed for it',
    },
    {
      icon: Target,
      title: 'A/B Testing',
      description: 'Test headlines, buttons, and layouts to maximize conversions',
    },
    {
      icon: Link2,
      title: 'Unlimited Links',
      description: 'From 1 link to 10,000 - our infrastructure scales with you',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Watch traffic grow with pixel-perfect conversion tracking',
    },
    {
      icon: Palette,
      title: 'Infinite Themes',
      description: 'Access exclusive themes crafted by top designers',
    },
    {
      icon: Mail,
      title: 'Email Tools',
      description: 'Integrate with every major email platform seamlessly',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Everything You Need, Nothing You Don't
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
