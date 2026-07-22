import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import DemoVideo from './components/DemoVideo';
import TemplatesShowcase from './components/TemplatesShowcase';
import KeyFeatures from './components/KeyFeatures';
import PlatformFeatures from './components/PlatformFeatures';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Integrations from './components/Integrations';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import CookieConsent from './components/CookieConsent';
import ScrollProgress from './components/ScrollProgress';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      
      // Show floating CTA after scrolling past hero
      setShowFloatingCTA(scrollTop > 600);
    };

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress progress={scrollProgress} />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProblemStatement />
        <Solution />
        <HowItWorks />
        <DemoVideo />
        <TemplatesShowcase />
        <KeyFeatures />
        <PlatformFeatures />
        <UseCases />
        <Testimonials />
        <ComparisonTable />
        <Pricing />
        <FAQ />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Interactive Elements */}
      {showExitIntent && (
        <ExitIntentPopup onClose={() => setShowExitIntent(false)} />
      )}
      
      {showCookieConsent && (
        <CookieConsent onClose={() => setShowCookieConsent(false)} />
      )}
      
      {showFloatingCTA && <FloatingCTA />}
    </div>
  );
}

export default App;
