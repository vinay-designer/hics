import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Brain, BarChart, Shield, Cloud } from 'lucide-react';
import ModernFeatures from './feature-section';

const contentSets = [
  {
    headline: "Start your digital transformation journey with us",
    subtext: "we make an impact, difference that you find is natural"
  },
  {
    headline: "Deal with intelligence by implementing the right solutions",
    subtext: "SAP, AWS, MICROSOFT, DATA ANALYTICS, RPA and more"
  },
  {
    headline: "Secure your IT today, Cybersecurity is continuous evolution",
    subtext: "Identity and Access Management, VAPT, PenTest and more"
  }
];

// Color scheme centered around brand color #ff712a (vibrant orange)
const colorScheme = {
  orange: {
    main: '#ff712a', // Brand color
    bg: 'from-orange-100/10 via-orange-50/5 to-transparent'
  },
  peach: {
    main: 'rgb(255, 218, 185)', // Soft peach complementing orange
    bg: 'from-orange-200/10 via-orange-100/5 to-transparent'
  },
  coral: {
    main: 'rgb(255, 191, 179)', // Soft coral complementing orange
    bg: 'from-rose-200/10 via-rose-100/5 to-transparent'
  },
  sky: {
    main: 'rgb(173, 216, 230)', // Light sky blue for contrast
    bg: 'from-blue-200/10 via-blue-100/5 to-transparent'
  },
  lavender: {
    main: 'rgb(230, 230, 250)', // Soft lavender for balance
    bg: 'from-purple-200/10 via-purple-100/5 to-transparent'
  }
};

// Reduced to 3 features with updated colors
const features = [
  {
    title: "Digital Solutions",
    description: "Transform your business with cutting-edge digital solutions that drive innovation and growth. Our comprehensive approach ensures seamless integration.",
    icon: Brain,
    color: { main: "#fff3ea", bg: colorScheme.orange.bg, text: 'text-orange-500' }
  },
  {
    title: "Smart Analytics",
    description: "Leverage advanced data analytics to uncover valuable insights and make data-driven decisions. Turn your data into actionable intelligence.",
    icon: BarChart,
    color: { main: "#e6e9ff", bg: colorScheme.peach.bg, text: 'text-orange-400' }
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets with state-of-the-art security measures. Our comprehensive security solutions safeguard your business 24/7.",
    icon: Shield,
    color: { main: "#fff8e1", bg: colorScheme.coral.bg, text: 'text-rose-500' }
  }
];

const PastelHeroSection = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % contentSets.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 relative pt-20">
      {/* Animation Container */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] overflow-hidden">
        {/* Main Circle */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: colorScheme.orange.main }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-70"
        />

        {/* Square */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundColor: colorScheme.peach.main }}
          className="absolute top-40 right-40 w-24 h-24 opacity-70"
        />

        {/* Small Circle */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: colorScheme.coral.main }}
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full"
        />

        {/* Additional Shapes */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: colorScheme.sky.main }}
          className="absolute top-1/4 left-1/3 w-8 h-8 opacity-60"
        />

        <motion.div
          animate={{
            x: [-15, 15, -15],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: colorScheme.lavender.main }}
          className="absolute bottom-1/3 right-1/3 w-20 h-10 opacity-60"
        />

        {/* Floating dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{ 
              backgroundColor: Object.values(colorScheme)[i % 5].main,
              top: `${20 + (i * 15)}%`,
              left: `${15 + (i * 18)}%`,
            }}
            className="absolute w-4 h-4 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div className="space-y-12">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block text-orange-500 font-medium px-4 py-1.5 rounded-full text-sm border border-orange-500/20"
            >
              Transform Your Business
            </motion.span>
            
            <div className="space-y-8">
              <motion.h1 className="text-6xl font-bold tracking-tight">
                <motion.span 
                  className="block text-gray-800 mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  POWER UP
                </motion.span>
                <motion.span 
                  className="block text-orange-500"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  YOUR BUSINESS
                </motion.span>
              </motion.h1>

              {/* Fixed height container for changing content */}
              <div className="h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSetIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl text-gray-700">
                      {contentSets[currentSetIndex].headline}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {contentSets[currentSetIndex].subtext}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Content change indicators */}
            <div className="flex gap-2 pt-4">
              {contentSets.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 w-8 rounded-full ${
                    index === currentSetIndex ? 'bg-orange-500' : 'bg-gray-200'
                  }`}
                  animate={{
                    scale: index === currentSetIndex ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            {/* Updated button container */}
            <div className="flex items-center space-x-4 pt-6">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-base font-medium rounded-md"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/5 px-6 py-2 text-base font-medium rounded-md"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/page-components/hero.svg"
                alt="Digital Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PastelHeroSection;