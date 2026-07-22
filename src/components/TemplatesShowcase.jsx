import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const TemplatesShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Minimalist Frost',
      gradient: 'from-pink-400 to-pink-600',
      pattern: 'banana',
    },
    {
      id: 2,
      name: 'Gradient Pulse',
      gradient: 'from-blue-400 via-purple-500 to-purple-600',
      pattern: 'waves',
    },
    {
      id: 3,
      name: 'Dark Executive',
      gradient: 'from-gray-900 to-black',
      pattern: 'bubbles',
    },
    {
      id: 4,
      name: 'Glass Aesthetic',
      gradient: 'from-blue-400 to-cyan-500',
      pattern: 'glass',
    },
    {
      id: 5,
      name: 'Neon Nights',
      gradient: 'from-purple-900 to-pink-900',
      pattern: 'neon',
    },
    {
      id: 6,
      name: 'Pastel Dreams',
      gradient: 'from-purple-200 to-pink-200',
      pattern: 'pastel',
    },
    {
      id: 7,
      name: 'Bold Typography',
      gradient: 'from-gray-800 to-gray-900',
      pattern: 'typography',
    },
    {
      id: 8,
      name: 'Nature Zen',
      gradient: 'from-green-400 to-blue-500',
      pattern: 'nature',
    },
  ];

  const getPatternContent = (pattern) => {
    switch (pattern) {
      case 'banana':
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-20 bg-yellow-300 rounded-full transform rotate-45"></div>
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-full"></div>
          </div>
        );
      case 'bubbles':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
            <div className="absolute top-12 right-8 w-12 h-12 bg-pink-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-8 left-12 w-6 h-6 bg-blue-400 rounded-full opacity-50"></div>
          </div>
        );
      case 'glass':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 right-1/4 h-1/2 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
          </div>
        );
      case 'neon':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-pink-400 rounded-full"></div>
          </div>
        );
      case 'pastel':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-pink-300 rounded-full opacity-30"></div>
          </div>
        );
      case 'typography':
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-4xl font-bold">Aa</div>
          </div>
        );
      case 'nature':
        return (
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-600 opacity-30"></div>
            <div className="absolute bottom-1/3 left-1/4 w-8 h-16 bg-green-700 rounded-t-full opacity-40"></div>
            <div className="absolute bottom-1/3 right-1/3 w-6 h-12 bg-green-700 rounded-t-full opacity-40"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Design Without Limits
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Professionally designed templates that adapt to your brand personality. One click to apply, infinite ways to customize.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br ${template.gradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Pattern Content */}
                {getPatternContent(template.pattern)}
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Use Template
                  </button>
                </div>
              </div>
              
              {/* Template Name */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">{template.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors group">
            View All 50+ Themes
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplatesShowcase;
