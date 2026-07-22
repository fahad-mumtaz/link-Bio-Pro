import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Mail } from 'lucide-react';

const ProblemStatement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: '❌',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Zero Lead Capture',
      description: 'Linktree and Beacons don\'t collect emails. You\'re losing thousands of potential subscribers.',
    },
    {
      icon: '📊',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Weak Analytics',
      description: 'Basic click counts aren\'t enough. You need device data, geo-tracking, and conversion funnels.',
    },
    {
      icon: '💸',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Revenue Commission',
      description: 'Beacons takes 5% of your sales. That\'s hundreds of dollars stolen from your pocket.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            THE PROBLEM
          </div>

          {/* Headline */}
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Basic Link Tools Are Leaving Money on the Table
          </h2>

          {/* Subtext */}
          <p className="text-body-large text-gray-600 leading-relaxed">
            Your followers click your link, visit your page, and leave. No email. No data. No relationship. You're sending traffic into a black hole.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`w-16 h-16 ${problem.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl">{problem.icon}</span>
              </div>
              <h3 className="text-card font-bold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
