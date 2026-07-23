import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/30'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-pink p-[2px] shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-purple" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">BioPro</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Features Dropdown */}
              <div className="relative"
                onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
                onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  <span>Features</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isFeaturesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-56 bg-dark-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-2">
                        {[
                          { icon: '📧', label: 'Email Lead Gating' },
                          { icon: '📊', label: 'Real-time Analytics' },
                          { icon: '🌐', label: 'Custom Domains' },
                          { icon: '🔌', label: 'Integrations' },
                        ].map(({ icon, label }) => (
                          <a key={label} href="#features" className="flex items-center space-x-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-sm">
                            <span>{icon}</span>
                            <span>{label}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => scrollToSection('sandbox')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Playground</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</button>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">FAQ</a>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Log In</button>
              <button
                onClick={() => scrollToSection('sandbox')}
                className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink"></span>
                <span className="relative block px-6 py-2.5 rounded-full bg-dark-900 text-sm font-semibold text-white transition-all duration-200 group-hover:bg-transparent">
                  Claim Free Page
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-dark-900 border-l border-white/10 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                  <span className="font-heading font-bold text-lg text-white">BioPro</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                  {[
                    { label: 'Features', id: 'features' },
                    { label: 'Playground', id: 'sandbox' },
                    { label: 'Pricing', id: 'pricing' },
                    { label: 'FAQ', id: 'faq' },
                  ].map(({ label, id }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="p-6 border-t border-white/5 space-y-3">
                  <button className="w-full text-gray-400 hover:text-white py-3 font-medium transition-colors">
                    Log In
                  </button>
                  <button
                    onClick={() => scrollToSection('sandbox')}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold rounded-xl shadow-lg"
                  >
                    Claim Free Page
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
