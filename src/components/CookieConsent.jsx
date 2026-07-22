import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              We use cookies to improve your experience. By continuing, you accept our{' '}
              <button className="text-primary hover:text-purple-700 underline">
                cookie policy
              </button>
              .
            </p>
            
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Learn More
              </button>
              <button
                onClick={onClose}
                className="btn-primary text-sm py-2 px-6"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
