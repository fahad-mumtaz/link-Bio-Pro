import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Zap } from 'lucide-react';

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer ref={ref} className="border-t border-white/5 bg-dark-950">
      {/* CTA Band */}
      <div className="container-custom py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative text-center max-w-3xl mx-auto space-y-8"
        >
          <div className="absolute inset-0 rounded-3xl glow-overlay blur-3xl scale-75 opacity-40 pointer-events-none" />

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-semibold tracking-wider">
            <span>🚀 GET STARTED FREE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight relative z-10">
            Build Your Elite Bio Page in{' '}
            <span className="gradient-text">60 Seconds.</span>
          </h2>

          <p className="text-lg text-gray-400 relative z-10">
            No credit card required. Free forever plan. Upgrade anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="#sandbox"
              onClick={(e) => { e.preventDefault(); document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold py-4 px-8 rounded-xl text-base shadow-xl shadow-brand-purple/20 hover:brightness-110 transition-all duration-200 group"
            >
              <span>Claim Your Free Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sandbox"
              onClick={(e) => { e.preventDefault(); document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-xl text-base transition-all duration-200"
            >
              <span>See Live Demo</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="container-custom pb-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12 border-t border-white/5 pt-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-pink p-[1.5px]">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-brand-purple" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">BioPro</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              The premium link-in-bio platform built for serious content creators who want real results and real data.
            </p>
            <div className="flex space-x-3">
              {[
                { name: 'X', href: '#' },
                { name: 'IG', href: '#' },
                { name: 'YT', href: '#' },
              ].map(({ name, href }) => (
                <a key={name} href={href} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Product', links: ['Features', 'Playground', 'Integrations', 'Roadmap', 'Changelog'] },
            { title: 'Resources', links: ['Blog', 'Creator Guides', 'Help Center', 'Webinars', 'Status'] },
            { title: 'Company', links: ['About', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2025 BioPro Inc. All rights reserved.</p>
          <p className="text-xs text-gray-600 flex items-center space-x-1">
            <span>Made with</span>
            <span className="text-brand-pink">♥</span>
            <span>for elite creators worldwide.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
