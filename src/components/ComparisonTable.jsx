import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, DollarSign } from 'lucide-react';

const ComparisonTable = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      feature: 'Email Capture Before Links',
      linktree: { value: '❌', color: 'text-red-500' },
      beacons: { value: '❌', color: 'text-red-500' },
      biopro: { value: '✅', color: 'text-green-500' },
    },
    {
      feature: 'Custom Domains',
      linktree: { value: '💰 $24/mo', color: 'text-gray-600' },
      beacons: { value: '💰 $15/mo', color: 'text-gray-600' },
      biopro: { value: '✅ Included ($12/mo)', color: 'text-green-500' },
    },
    {
      feature: 'A/B Testing',
      linktree: { value: '❌', color: 'text-red-500' },
      beacons: { value: '❌', color: 'text-red-500' },
      biopro: { value: '✅', color: 'text-green-500' },
    },
    {
      feature: 'Analytics Depth',
      linktree: { value: 'Basic clicks only', color: 'text-gray-600' },
      beacons: { value: 'Click tracking', color: 'text-gray-600' },
      biopro: { value: '✅ Full funnel + geo + device', color: 'text-green-500' },
    },
    {
      feature: 'Number of Themes',
      linktree: { value: '5 templates', color: 'text-gray-600' },
      beacons: { value: '8 templates', color: 'text-gray-600' },
      biopro: { value: '✅ 50+ unlimited', color: 'text-green-500' },
    },
    {
      feature: 'Sales Commission',
      linktree: { value: '0%', color: 'text-gray-600' },
      beacons: { value: '5% commission', color: 'text-red-500' },
      biopro: { value: '✅ 0% forever', color: 'text-green-500' },
    },
    {
      feature: 'Pro Plan Price',
      linktree: { value: '$9/mo', color: 'text-gray-600' },
      beacons: { value: '$15/mo', color: 'text-gray-600' },
      biopro: { value: '✅ $12/mo', color: 'text-green-500' },
    },
    {
      feature: 'White Label',
      linktree: { value: '❌', color: 'text-red-500' },
      beacons: { value: '💰 Extra cost', color: 'text-gray-600' },
      biopro: { value: '✅ Included', color: 'text-green-500' },
    },
    {
      feature: 'Support',
      linktree: { value: 'Email only', color: 'text-gray-600' },
      beacons: { value: 'Email', color: 'text-gray-600' },
      biopro: { value: '✅ Priority chat', color: 'text-green-500' },
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
            Why Creators Choose BioPro
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            See how we stack up against the competition
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-200">
                  Feature
                </th>
                <th className="text-center p-4 font-semibold text-gray-900 border-b-2 border-gray-200">
                  Linktree
                </th>
                <th className="text-center p-4 font-semibold text-gray-900 border-b-2 border-gray-200">
                  Beacons
                </th>
                <th className="text-center p-4 font-semibold text-white border-b-2 border-purple-600 bg-gradient-to-r from-purple-600 to-pink-600">
                  BioPro
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className={`p-4 text-center ${row.linktree.color}`}>
                    {row.linktree.value}
                  </td>
                  <td className={`p-4 text-center ${row.beacons.color}`}>
                    {row.beacons.value}
                  </td>
                  <td className={`p-4 text-center font-semibold ${row.biopro.color} bg-purple-50`}>
                    {row.biopro.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            All prices as of February 2026. Competitor features may change.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
