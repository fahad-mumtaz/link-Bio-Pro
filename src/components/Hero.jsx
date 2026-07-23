import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BarChart3, Mail } from 'lucide-react';

const themes = {
  cyberpunk: { bg: 'from-purple-950 via-slate-950 to-pink-950', border: 'border-purple-800/40', accent: 'from-brand-purple to-brand-pink' },
  midnight: { bg: 'from-slate-950 to-black', border: 'border-slate-700/40', accent: 'from-slate-600 to-slate-700' },
  glass: { bg: 'from-blue-950 via-slate-950 to-slate-950', border: 'border-blue-800/40', accent: 'from-blue-600 to-cyan-600' },
  sunset: { bg: 'from-amber-950 via-slate-950 to-red-950', border: 'border-amber-800/40', accent: 'from-amber-500 to-red-500' },
};

const Hero = () => {
  const [activeTheme, setActiveTheme] = useState('cyberpunk');
  const theme = themes[activeTheme];

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden px-4">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute -top-20 right-0 w-[700px] h-[700px] rounded-full bg-brand-pink/8 blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-blue/8 blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
              <span>⚡ Next-Gen Link Builder for Elite Creators</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Unleash Your Bio Link.{' '}
              <span className="gradient-text">Captured & Amplified.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
            >
              Stop routing followers to static, dead-end pages. BioPro is a premium micro-page builder that auto-captures emails, tracks every event, and converts 3× better than basic link tools.
            </motion.p>

            {/* URL claim form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md"
            >
              <form
                className="flex flex-col sm:flex-row gap-3 p-1.5 bg-dark-800/80 border border-white/10 rounded-2xl shadow-2xl focus-within:border-brand-purple/40 transition-colors"
                onSubmit={(e) => { e.preventDefault(); }}
              >
                <div className="flex items-center flex-1 px-3">
                  <span className="text-gray-500 font-medium select-none text-sm">biopro.to/</span>
                  <input
                    type="text"
                    placeholder="yourname"
                    className="bg-transparent border-0 focus:ring-0 focus:outline-none w-full text-white font-semibold text-sm placeholder-gray-600 pl-0.5"
                  />
                </div>
                <button type="submit" className="bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold py-3 px-6 rounded-xl hover:brightness-110 transition-all duration-200 text-sm whitespace-nowrap">
                  Claim My Page
                </button>
              </form>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs text-gray-500 pl-2">
                {['Free Forever Plan', 'Setup in 60s', '0% Commission'].map(t => (
                  <div key={t} className="flex items-center">
                    <span className="text-brand-emerald mr-1">✓</span> {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center space-x-4 pt-4 border-t border-white/5"
            >
              <div className="flex -space-x-3">
                {[
                  'photo-1534528741775-53994a69daeb',
                  'photo-1507003211169-0a1dd7228f2d',
                  'photo-1494790108377-be9c29b29330',
                  'photo-1500648767791-00dcc994a43e',
                ].map((id) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt="Creator"
                    className="w-9 h-9 rounded-full border-2 border-dark-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Join 28,482+ Elite Creators</p>
                <p className="text-xs text-gray-500">Migrating from Linktree & Beacons daily</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right — Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Glow aura */}
            <div className="absolute inset-0 rounded-full glow-overlay blur-3xl scale-90 z-0" />

            <div className="relative w-full max-w-[320px] z-10">
              {/* Theme selector tabs */}
              <div className="flex items-center bg-dark-900/80 border border-white/10 p-1 rounded-2xl mb-4 gap-1">
                {Object.keys(themes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTheme(key)}
                    className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all duration-200 capitalize ${
                      activeTheme === key
                        ? 'bg-brand-purple text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              {/* Phone frame */}
              <div className={`w-full h-[560px] rounded-[2rem] border-4 ${theme.border} bg-black overflow-hidden relative shadow-2xl transition-all duration-500`}>
                {/* Screen background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg} transition-all duration-500`} />

                {/* Phone screen content */}
                <div className="absolute inset-0 overflow-y-auto no-scrollbar p-5 flex flex-col items-center z-10">
                  {/* Status bar */}
                  <div className="w-full flex justify-between items-center text-white/40 text-[10px] mb-5">
                    <span>9:41</span>
                    <div className="w-14 h-3.5 bg-black/30 rounded-full" />
                    <span>LTE ▌</span>
                  </div>

                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-full p-[2px] bg-gradient-to-r ${theme.accent} shadow-lg mb-3`}>
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-1">Alex Rivera</h3>
                  <p className="text-xs text-gray-400 mb-6 text-center">Elite Creative Strategist & Educator</p>

                  {/* Links */}
                  <div className="w-full space-y-3 mb-5">
                    <div className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                      🎥 Creator Masterclass V3.0
                    </div>
                    <div className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                      📘 Free Ebook: 0 → 10k Followers
                    </div>
                  </div>

                  {/* Lead capture card */}
                  <div className={`w-full bg-gradient-to-br ${theme.accent} p-[1px] rounded-2xl`}>
                    <div className="bg-black/60 backdrop-blur rounded-2xl p-4 space-y-3">
                      <p className="text-xs font-bold text-white">💌 Join Private Newsletter</p>
                      <p className="text-[10px] text-gray-300">Weekly growth tips & creator templates.</p>
                      <input type="email" placeholder="Your email..." className="w-full px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-[11px] text-white focus:outline-none" />
                      <button className={`w-full py-2 bg-gradient-to-r ${theme.accent} text-white font-bold rounded-lg text-[11px]`}>
                        Join Circle →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -top-4 -left-10 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl p-3 w-44 animate-float-slow"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-brand-purple/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Real-time Analytics</p>
                    <p className="text-[9px] text-gray-400 leading-tight">Watch traffic grow live</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -top-4 -right-10 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl p-3 w-44 animate-float-fast"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-brand-pink/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Auto Lead Capture</p>
                    <p className="text-[9px] text-gray-400 leading-tight">Collects emails automatically</p>
                  </div>
                </div>
              </motion.div>

              {/* Live indicator */}
              <div className="absolute -bottom-5 -right-5 bg-dark-800 border border-white/10 px-3 py-2 rounded-2xl shadow-xl flex items-center space-x-2 animate-float-slow z-20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald" />
                </span>
                <p className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">Live Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
