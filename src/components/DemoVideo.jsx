import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink } from 'lucide-react';

const DemoVideo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    // In a real implementation, this would open a modal or navigate to demo
    alert('Interactive demo would open here!');
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            See BioPro in Action
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Watch how creators are using BioPro to 10x their email list
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Dashboard Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-4">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg h-20"></div>
                    <div className="bg-white/20 rounded-lg h-20"></div>
                    <div className="bg-white/20 rounded-lg h-20"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg h-32"></div>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayDemo}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 text-purple-600 ml-1" />
              </div>
            </button>

            {/* Video Length */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              2:14
            </div>
          </div>
        </motion.div>

        {/* Alternative Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button 
            onClick={handlePlayDemo}
            className="inline-flex items-center text-primary font-semibold hover:text-purple-700 transition-colors group"
          >
            Launch Interactive Demo
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
