import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isTemplatesDropdownOpen, setIsTemplatesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BioPro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
                  onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  <span>Features</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isFeaturesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
                      onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        <a href="#email-capture" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Email Capture
                        </a>
                        <a href="#analytics" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Advanced Analytics
                        </a>
                        <a href="#custom-domains" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Custom Domains
                        </a>
                        <a href="#ab-testing" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          A/B Testing
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Templates Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsTemplatesDropdownOpen(true)}
                  onMouseLeave={() => setIsTemplatesDropdownOpen(false)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  <span>Templates</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {isTemplatesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setIsTemplatesDropdownOpen(true)}
                      onMouseLeave={() => setIsTemplatesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        <a href="#minimalist" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Minimalist Themes
                        </a>
                        <a href="#gradient" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Gradient Designs
                        </a>
                        <a href="#dark-mode" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Dark Mode Templates
                        </a>
                        <a href="#glass-morphism" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                          Glass Morphism
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Pricing
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary transition-colors font-medium">
                Log In
              </button>
              <button className="btn-primary text-sm">
                Claim Free Page
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">BioPro</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  <div className="py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Features</h3>
                    <div className="space-y-1">
                      <a href="#email-capture" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Email Capture
                      </a>
                      <a href="#analytics" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Advanced Analytics
                      </a>
                      <a href="#custom-domains" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Custom Domains
                      </a>
                      <a href="#ab-testing" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        A/B Testing
                      </a>
                    </div>
                  </div>

                  <div className="py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Templates</h3>
                    <div className="space-y-1">
                      <a href="#minimalist" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Minimalist Themes
                      </a>
                      <a href="#gradient" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Gradient Designs
                      </a>
                      <a href="#dark-mode" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Dark Mode Templates
                      </a>
                      <a href="#glass-morphism" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors">
                        Glass Morphism
                      </a>
                    </div>
                  </div>

                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-primary rounded-lg transition-colors font-medium"
                  >
                    Pricing
                  </button>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-gray-100 space-y-3">
                <button className="w-full text-gray-600 hover:text-primary transition-colors font-medium py-2">
                  Log In
                </button>
                <button className="btn-primary w-full text-sm">
                  Claim Free Page
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
