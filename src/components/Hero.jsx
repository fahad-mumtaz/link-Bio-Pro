import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BarChart3, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden pt-20 lg:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            >
              🚀 NEXT-GEN BIO LINKS FOR ELITE CREATORS
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-hero lg:text-hero font-bold text-gray-900 mb-6 leading-tight"
            >
              Turn Your Bio Link Into a{' '}
              <span className="gradient-text">Lead Generation Machine</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body-large text-gray-600 mb-8 leading-relaxed"
            >
              Stop losing followers to dead link pages. BioPro captures emails automatically, tracks every click, and converts 3x better than basic link tools.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Free Forever Plan
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                No Credit Card Required
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Setup in 60 Seconds
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="btn-primary group flex items-center justify-center">
                Start Free - No Credit Card
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                See Live Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-small text-gray-500"
            >
              Join <span className="font-semibold text-gray-700">12,847</span> creators already growing with BioPro
            </motion.p>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-72 h-[600px] lg:w-80 lg:h-[640px] animate-float">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute inset-3 bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* Profile Content */}
                    <div className="flex flex-col items-center px-6 py-8 text-white">
                      {/* Profile Picture */}
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                      </div>

                      {/* Name and Title */}
                      <h3 className="text-xl font-bold mb-1">Alex Rivera</h3>
                      <p className="text-sm opacity-90 mb-8">Elite Content Strategist</p>

                      {/* Links */}
                      <div className="w-full space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center font-medium">
                          Download My Guide
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center font-medium">
                          Latest YouTube Video
                        </div>
                        <div className="bg-white text-purple-600 rounded-xl px-4 py-3 text-center font-bold">
                          JOIN PRIVATE CIRCLE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 - Analytics */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-8 -left-8 lg:-left-12 bg-white rounded-xl shadow-xl p-4 w-48 lg:w-56"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Real-time Analytics</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Watch traffic grow with pixel-perfect tracking
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Email Capture */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-8 -right-8 lg:-right-12 bg-white rounded-xl shadow-xl p-4 w-48 lg:w-56"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Auto Lead Capture</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Collect emails automatically before visitors see your links
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0"
      >
        <div className="container-custom">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-100">
            <p className="text-center text-sm text-gray-600 mb-3">Trusted by creators from:</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Instagram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">TikTok</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">YouTube</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
