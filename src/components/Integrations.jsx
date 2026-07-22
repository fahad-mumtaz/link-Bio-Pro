import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Integrations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    { name: 'Mailchimp', category: 'email' },
    { name: 'ConvertKit', category: 'email' },
    { name: 'Google Analytics', category: 'analytics' },
    { name: 'Stripe', category: 'payment' },
    { name: 'Zapier', category: 'automation' },
    { name: 'Calendly', category: 'scheduling' },
    { name: 'ActiveCampaign', category: 'email' },
    { name: 'Facebook Pixel', category: 'analytics' },
    { name: 'TikTok Pixel', category: 'analytics' },
    { name: 'Klaviyo', category: 'email' },
    { name: 'SendGrid', category: 'email' },
    { name: 'Webhooks', category: 'automation' },
  ];

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
            Integrates With Your Favorite Tools
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Connect BioPro to your existing workflow seamlessly
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <div className="text-gray-400 text-xs text-center">
                  {integration.name}
                </div>
              </div>
              <p className="text-center text-sm font-medium text-gray-700">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-primary font-semibold">
            + Connect with 5,000+ apps via Zapier
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
