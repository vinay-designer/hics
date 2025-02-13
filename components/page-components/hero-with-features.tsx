import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BadgeCheck, Tags, Boxes, MessageSquare } from "lucide-react";
import FloatingBackground from './foating-background';


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
        
        {/* New Healthcare Icons */}
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
        
        {/* New Tech Icons */}
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
        <g id="data-analytics-icon">
          <path d="M2,12 H12 M4,12 V8 M7,12 V4 M10,12 V6" 
            stroke="currentColor" strokeWidth="1"/>
          <circle cx="4" cy="8" r="0.5" fill="currentColor"/>
          <circle cx="7" cy="4" r="0.5" fill="currentColor"/>
          <circle cx="10" cy="6" r="0.5" fill="currentColor"/>
        </g>
        
        {/* SAP Related Icons */}
        <g id="sap-cube-icon">
          <path d="M7,2 L12,5 L7,8 L2,5 L7,2 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M2,5 V9 L7,12 V8 L2,5" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M7,8 V12 L12,9 V5 L7,8" fill="none" stroke="currentColor" strokeWidth="1"/>
        </g>
        <g id="database-icon">
          <path d="M4,3 C4,2 10,2 10,3 M4,3 V11 C4,12 10,12 10,11 V3" 
            fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M4,7 C4,8 10,8 10,7" fill="none" stroke="currentColor" strokeWidth="1"/>
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

// Background Elements Component
const BackgroundElements = () => {
    const elements = [
      { icon: 'dna-icon', positions: ['top-20 left-20', 'bottom-40 right-1/4'] },
      { icon: 'pulse-icon', positions: ['top-40 right-40', 'bottom-1/4 left-1/4'] },
      { icon: 'hospital-icon', positions: ['top-1/4 right-1/3', 'bottom-20 left-20'] },
      { icon: 'microscope-icon', positions: ['top-1/3 left-40', 'bottom-1/3 right-1/3'] },
      { icon: 'medical-data-icon', positions: ['top-1/2 right-20', 'bottom-40 left-1/3'] },
      { icon: 'cloud-secure-icon', positions: ['top-60 left-1/4', 'bottom-1/4 right-20'] },
      { icon: 'network-icon', positions: ['top-32 right-1/4', 'bottom-60 left-40'] },
      { icon: 'data-analytics-icon', positions: ['top-1/3 right-40', 'bottom-32 right-1/4'] },
      { icon: 'sap-cube-icon', positions: ['top-40 left-1/3', 'bottom-1/3 left-20'] },
      { icon: 'database-icon', positions: ['top-20 right-20', 'bottom-20 right-1/3'] }
    ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

const HeroWithFeatures = () => {
  const features = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Ensuring the highest standards in every project",
    },
    {
      icon: <Tags className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Best value for your investment",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Expert professionals at your service",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Excellent Support",
      description: "24/7 dedicated customer service",
    },
  ];

  return (
    <div className="relative bg-[#0a0118] min-h-screen overflow-hidden">
      {/* Background SVG Definitions */}
      <BackgroundSVGs />
      
      {/* Animated Background Elements */}
      <BackgroundElements />

      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4  mt-[40px] relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-20 space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Leading Healthcare
              </h1>
              <div className="space-y-0">
                <span className="block text-4xl md:text-5xl font-light text-cyan-400 leading-tight">
                  Technology
                </span>
                <span className="block text-4xl md:text-5xl font-light text-cyan-400 leading-tight">
                  Solutions!
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-base max-w-xl">
              Since 2015, we've been Singapore's trusted partner for SAP Healthcare, 
              Cloud Infrastructure, and Cyber Security solutions. Empowering healthcare 
              through innovation.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-base"
              >
                GET FREE QUOTE
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/5 px-8 py-6 text-base"
              >
                OUR SERVICES
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pt-20"
          >
            <div className="relative z-10">
              <div className="w-full h-[500px] overflow-hidden relative">
                {/* Neon border effect */}
                <div className="absolute inset-0 p-[1px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500">
                  <div className="absolute inset-0 bg-[#0a0118]" />
                </div>
                <img
                  src="/api/placeholder/800/800"
                  alt="Digital Solutions"
                  className="relative z-10 w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -z-10 -inset-2 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-4 relative z-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-[#0f0627] p-8 relative group overflow-hidden border-r border-purple-900/20 last:border-r-0"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 relative">
                  {/* Icon with glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-75 blur-sm" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroWithFeatures;