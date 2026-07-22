import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, DollarSign } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: 0,
      yearlyPrice: 0,
      billing: '/forever',
      features: [
        'Unlimited Links',
        'Basic Analytics (7 days)',
        '3 Templates',
        'BioPro Branding',
      ],
      limitations: [
        'Max 1,000 page views/month',
        'Community support only',
      ],
      buttonText: 'Start for Free',
      buttonStyle: 'outlined',
      featured: false,
    },
    {
      name: 'Elite Pro',
      price: 12,
      yearlyPrice: 115, // $12 * 12 * 0.8 (20% discount)
      billing: '/month',
      features: [
        'Everything in Starter',
        'Remove BioPro Branding',
        'Custom Domains',
        'Email Capture (up to 5,000 leads/month)',
        'Advanced Analytics (90 days)',
        'Infinite Themes & Customization',
        'A/B Testing (2 variants)',
        'Priority Email Support',
        'Integration with 1 email tool',
      ],
      buttonText: 'Go Pro Now',
      buttonStyle: 'primary',
      featured: true,
      badge: 'MOST POPULAR',
    },
    {
      name: 'Creator Hub',
      price: 29,
      yearlyPrice: 278, // $29 * 12 * 0.8 (20% discount)
      billing: '/month',
      features: [
        'Everything in Pro',
        'Unlimited Email Captures',
        'Team Collaboration (up to 5 members)',
        '0% Sales Commission',
        'Priority Live Chat Support',
        'API Access',
        'White Label for Clients',
        'Advanced Analytics (1 year history)',
        'Unlimited A/B Tests',
        'All Email Tool Integrations',
        'Custom CSS',
        'Dedicated Account Manager',
      ],
      buttonText: 'Go Unlimited',
      buttonStyle: 'outlined',
      featured: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="section-padding bg-gradient-to-br from-white to-purple-50">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Pricing That Scales With You
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Start for free, upgrade when you're ready for the big leagues
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${
                plan.featured
                  ? 'lg:scale-105 z-10'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className={`relative h-full rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}>
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-5xl font-bold ${
                    plan.featured ? 'text-white' : 'text-gray-900'
                  }`}>
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </div>
                  <div className={`text-sm ${
                    plan.featured ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {plan.billing}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.featured ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${
                        plan.featured ? 'text-white' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations && (
                  <div className="space-y-2 mb-6">
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <span className={`text-xs ${
                          plan.featured ? 'text-white/60' : 'text-gray-500'
                        }`}>
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.buttonStyle === 'primary'
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : plan.featured
                    ? 'bg-white/20 text-white hover:bg-white/30 border-2 border-white'
                    : 'btn-outline'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-gray-600">
            All plans include SSL, 99.9% uptime, and GDPR compliance
          </p>
          <button className="text-primary font-medium hover:text-purple-700 transition-colors">
            Compare all features →
          </button>
          
          {/* Money-back guarantee */}
          <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            💯 30-Day Money-Back Guarantee - No Questions Asked
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
