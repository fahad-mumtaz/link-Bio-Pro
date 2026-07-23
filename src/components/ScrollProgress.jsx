import React from 'react';

const ScrollProgress = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-dark-800">
      <div
        className="h-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue transition-all duration-150 ease-out shadow-[0_0_12px_rgba(168,85,247,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
