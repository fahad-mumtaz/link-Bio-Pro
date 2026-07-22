import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, Sparkles, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '1',
      icon: Link,
      title: 'Claim Your Username',
      description: 'Pick your unique link: biopro.com/yourname',
    },
    {
      number: '2',
      icon: Sparkles,
      title: 'Choose a Theme',
      description: 'Select from 50+ professionally designed templates',
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Add Links & Go Live',
      description: 'Add your links, enable email capture, and start growing',
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
          className="text-center mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Get Started in 3 Simple Steps
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="relative z-10 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto -mt-8">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-card font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Start Building Your Page
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
