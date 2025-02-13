import React from 'react';
import { motion } from 'framer-motion';

const BackgroundSVGs = () => (
  <svg width="0" height="0" className="hidden">
    <defs>
      {/* Original Icons */}
      <g id="dna-icon">
        <path d="M3,3 Q8,8 3,13 M3,3 Q-2,8 3,13 M3,6 Q6,8 3,10 M3,6 Q0,8 3,10" 
          fill="none" stroke="currentColor" strokeWidth="1"/>
      </g>
      <g id="pulse-icon">
        <path d="M0,8 L3,8 L5,3 L7,13 L9,8 L12,8" 
          fill="none" stroke="currentColor" strokeWidth="1"/>
      </g>
      <g id="hospital-icon">
        <path d="M2,12 V5 H12 V12" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M6,2 H8 V4 H10 V6 H8 V8 H6 V6 H4 V4 H6 Z" fill="currentColor"/>
      </g>
      <g id="microscope-icon">
        <circle cx="8" cy="3" r="1.5" fill="none" stroke="currentColor"/>
        <path d="M8,4.5 V7 M6,7 H10 M7,7 V12 M9,7 V12" 
          fill="none" stroke="currentColor" strokeWidth="1"/>
      </g>
      <g id="medical-data-icon">
        <rect x="2" y="2" width="10" height="10" rx="1" 
          fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M4,5 H10 M4,7 H8 M4,9 H9" 
          stroke="currentColor" strokeWidth="1"/>
      </g>
      <g id="cloud-secure-icon">
        <path d="M3,8 C3,4 8,4 8,6 C11,6 11,10 8,10 H4 C2,10 2,8 3,8" 
          fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="6" cy="8" r="1" fill="currentColor"/>
        <path d="M6,8 V9.5" stroke="currentColor" strokeWidth="1"/>
      </g>
      <g id="network-icon">
        <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
        <circle cx="3" cy="3" r="1" fill="currentColor"/>
        <circle cx="11" cy="3" r="1" fill="currentColor"/>
        <circle cx="3" cy="11" r="1" fill="currentColor"/>
        <circle cx="11" cy="11" r="1" fill="currentColor"/>
        <path d="M7,7 L3,3 M7,7 L11,3 M7,7 L3,11 M7,7 L11,11" 
          stroke="currentColor" strokeWidth="0.5"/>
      </g>
    </defs>
  </svg>
);

type FloatingElementProps = { 
    icon: string;   
    className: string;
  }

const FloatingElement = ({ icon, className }: FloatingElementProps) => {
  const randomDuration = () => 15 + Math.random() * 20;
  const randomDelay = () => -Math.random() * 20;

  return (
    <motion.div
      className={`absolute text-purple-500/10 ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: randomDuration(),
        repeat: Infinity,
        delay: randomDelay(),
        ease: "linear"
      }}
    >
      <svg width="40" height="40" viewBox="0 0 14 14">
        <use href={`#${icon}`} />
      </svg>
    </motion.div>
  );
};

const FloatingBackground = () => {
  const elements = [
    { icon: 'dna-icon', positions: ['top-20 left-20', 'bottom-40 right-1/4', 'top-1/2 left-1/3', 'bottom-1/4 right-1/3'] },
    { icon: 'pulse-icon', positions: ['top-40 right-40', 'bottom-1/4 left-1/4', 'top-3/4 right-1/3', 'bottom-1/2 left-1/2'] },
    { icon: 'hospital-icon', positions: ['top-1/4 right-1/3', 'bottom-20 left-20', 'top-2/3 right-1/4', 'bottom-3/4 left-1/3'] },
    { icon: 'microscope-icon', positions: ['top-1/3 left-40', 'bottom-1/3 right-1/3', 'top-3/4 left-1/4', 'bottom-1/2 right-1/2'] },
    { icon: 'medical-data-icon', positions: ['top-1/2 right-20', 'bottom-40 left-1/3', 'top-1/4 right-1/2', 'bottom-2/3 left-1/4'] },
    { icon: 'cloud-secure-icon', positions: ['top-60 left-1/4', 'bottom-1/4 right-20', 'top-2/3 left-1/2', 'bottom-3/4 right-1/4'] },
    { icon: 'network-icon', positions: ['top-32 right-1/4', 'bottom-60 left-40', 'top-3/4 right-1/3', 'bottom-1/3 left-1/2'] }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <BackgroundSVGs />
      {elements.map((element, i) => (
        element.positions.map((position, j) => (
          <FloatingElement
            key={`${i}-${j}`}
            icon={element.icon}
            className={position}
          />
        ))
      ))}
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
};

export default FloatingBackground;