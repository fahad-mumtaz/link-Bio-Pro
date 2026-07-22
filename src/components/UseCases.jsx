import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Music, Briefcase, ShoppingBag } from 'lucide-react';

const UseCases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useCases = [
    {
      icon: Camera,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Instagram Influencers',
      description: 'Grow your email list while promoting sponsored content and affiliate products',
      example: 'Sarah grew her list to 15K in 3 months',
    },
    {
      icon: Music,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Musicians & Artists',
      description: 'Share your latest releases and build a fanbase with direct email access',
      example: 'Mike captured 2,500 emails from his tour announcement',
    },
    {
      icon: Briefcase,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Coaches & Consultants',
      description: 'Drive bookings, sell courses, and nurture leads automatically',
      example: 'Jessica booked 40+ coaching calls in one month',
    },
    {
      icon: ShoppingBag,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'E-commerce Brands',
      description: 'Promote products, collect customer emails, and boost sales',
      example: 'Brand X increased conversions by 3.2x',
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
            Built for Creators Like You
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`w-16 h-16 ${useCase.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <useCase.icon className={`w-8 h-8 ${useCase.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-700 font-medium text-sm">
                  {useCase.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
