import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-8">
            READY TO GROW?
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start Building Your Audience Today
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join 12,847 creators who've already transformed their link-in-bio into a growth engine. Free to start, easy to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center group">
              Claim Your Free Page
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-200">
              Talk to Our Team
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Setup in 60 seconds
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
