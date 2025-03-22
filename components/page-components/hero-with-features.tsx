import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { typography } from '../../utils/ typography'; // Import our typography system

// Using the color scheme from the original component
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

const carouselContent = [
  {
    title: "OutThink OutPerform",
    subtitle: "We make SAP work for you",
    content: "Let's be real—SAP is SAP. There are a zillion others who implement SAP just like we do. But here's the thing: while everyone implements SAP, we OutThink and OutPerform by actually solving problems. We don't just follow a playbook; we stand in your shoes, feel your frustrations, and then make SAP work for you.",
    image: "/page-components/hero.png"
  },
  {
    title: "Customer Success Stories",
    subtitle: "Real solutions for real problems",
    content: "Take one of our customers, for example. They needed a simple way to monitor system performance but didn't want the cost or complexity of full-blown tools like SAP ALM or Datadog. Instead of pushing them toward an expensive solution they didn't need, we built them a custom dashboard that gave them exactly what they wanted—quick insights, at a glance.",
    image: "/page-components/hero.png"
  },
  {
    title: "Our Approach",
    subtitle: "Beyond the playbook",
    content: "We're not your typical \"small, dedicated team\" that just ticks boxes. We're a nimble band of SAP problem-solvers who throw out the cookie-cutter playbook. We go beyond SAP when needed. We embed ourselves in your project—right in the thick of it—partnering with you from day one.",
    image: "/page-components/hero.png"
  }
];

// Client logos for the marquee - extracted from the partners section
const clients = [
  { name: "AIC", logo: "/page-components/aic.jpg" },
  { name: "BVH", logo: "/page-components/bvh.jpg" },
  { name: "Dairy", logo: "/page-components/dairy.jpg" },
  { name: "IHIS", logo: "/page-components/ihis.jpg" },
  { name: "SPG", logo: "/page-components/sp-g.jpg" },
  { name: "ZP", logo: "/page-components/zp.jpg" },
  // Duplicates to ensure continuous flow
  { name: "AIC", logo: "/page-components/aic.jpg" },
  { name: "BVH", logo: "/page-components/bvh.jpg" },
  { name: "Dairy", logo: "/page-components/dairy.jpg" },
  { name: "IHIS", logo: "/page-components/ihis.jpg" },
  { name: "SPG", logo: "/page-components/sp-g.jpg" },
  { name: "ZP", logo: "/page-components/zp.jpg" }
];

const HeroCarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 py-20 overflow-hidden">
        {/* Enhanced Background Animation Elements with more color throughout */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 opacity-20 blur-3xl"></div>
          
          {/* Additional color elements in the corners */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full bg-gradient-to-br from-orange-300/10 to-orange-100/5"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-tl-full bg-gradient-to-tl from-blue-300/10 to-blue-100/5"></div>
          
          {/* Animated floating elements on sides of the screen */}
          {/* Left side floating elements */}
          <motion.div
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-12 top-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent"
          ></motion.div>
          
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 bottom-1/3 w-24 h-24 rounded-lg bg-gradient-to-tr from-orange-400/10 to-transparent"
            style={{ transform: "rotate(15deg)" }}
          ></motion.div>
          
          {/* Right side floating elements */}
          <motion.div
            animate={{
              y: [20, -40, 20],
              rotate: [0, -15, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-20 top-1/3 w-32 h-32 rounded-full bg-gradient-to-bl from-blue-300/15 to-transparent"
          ></motion.div>
          
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [10, -10, 10],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-24 bottom-1/4 w-36 h-36 rounded-lg bg-gradient-to-tl from-orange-300/15 to-transparent"
            style={{ transform: "rotate(-15deg)" }}
          ></motion.div>
          
          {/* Floating dots on sides */}
          {[...Array(8)].map((_, i) => {
            // Alternate positions between left and right sides
            const isLeft = i % 2 === 0;
            const xPosition = isLeft ? `${10 + (i % 4) * 5}%` : `${85 - (i % 4) * 5}%`;
            const yPosition = `${15 + (i * 10)}%`;
            const size = 4 + (i % 3) * 2;
            
            return (
              <motion.div
                key={i}
                animate={{
                  y: [-15, 15, -15],
                  x: [-10, 10, -10],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 7 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.7,
                }}
                style={{ 
                  backgroundColor: isLeft ? colorScheme.orange.main : colorScheme.sky.main,
                  top: yPosition,
                  left: xPosition,
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                className="absolute rounded-full"
              />
            );
          })}
          
          {/* Shooting stars/lines that occasionally appear on sides */}
          <motion.div
            initial={{ x: -100, y: 100, opacity: 0 }}
            animate={{ 
              x: 100, 
              y: -100, 
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 7,
              ease: "easeOut"
            }}
            className="absolute left-[5%] top-1/4 w-20 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            style={{ transform: "rotate(-45deg) scale(2)" }}
          />
          
          <motion.div
            initial={{ x: 100, y: 200, opacity: 0 }}
            animate={{ 
              x: -100, 
              y: 100, 
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 15,
              ease: "easeOut",
              delay: 5
            }}
            className="absolute right-[5%] top-1/3 w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{ transform: "rotate(45deg) scale(2)" }}
          />
          
          {/* Main Circle */}
          <motion.div
            animate={{
              x: [-20, 20, -20],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundColor: colorScheme.orange.main }}
            className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20"
          />

          {/* Square */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundColor: colorScheme.peach.main }}
            className="absolute top-40 right-40 w-24 h-24 opacity-20"
          />

          {/* Small Circle */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 6,
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
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundColor: colorScheme.sky.main }}
            className="absolute top-1/4 left-1/3 w-8 h-8 opacity-20"
          />

          <motion.div
            animate={{
              x: [-15, 15, -15],
              rotate: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundColor: colorScheme.lavender.main }}
            className="absolute bottom-1/3 right-1/3 w-20 h-10 opacity-20"
          />
        </div>

        {/* Floating elements that extend beyond the container on both sides */}
        <div className="container mx-auto relative z-10">
          {/* Left side floating decorative elements */}
          <div className="absolute -left-40 top-1/4 z-0">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="w-64 h-64 rounded-full border border-orange-200 opacity-50 relative"
            >
              <motion.div 
                className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-orange-300"
                animate={{
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ 
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </motion.div>
          </div>
          
          {/* Right side floating decorative elements */}
          <div className="absolute -right-32 bottom-1/4 z-0">
            <motion.div
              animate={{
                rotate: [0, -360]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-56 h-56 relative"
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-blue-300"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transform: 'translateX(-50%)' }}
              />
              <motion.div 
                className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-orange-300"
                animate={{ opacity: [0.7, 0.4, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-blue-300"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ transform: 'translateX(-50%)' }}
              />
              <motion.div 
                className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-orange-400"
                animate={{ opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
              <div className="w-full h-full rounded-full border border-blue-200 opacity-40"></div>
            </motion.div>
          </div>
          

          {/* Main Carousel with enhanced background */}
          <div className="px-6 relative z-10 mt-20">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-sm min-h-[80vh]">
              {/* Additional background elements inside the carousel */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-full bg-gradient-to-bl from-orange-200/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-tr-full bg-gradient-to-tr from-blue-200/20 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,113,42,0.03)_0%,transparent_60%)]"></div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {carouselContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === activeSlide ? 'w-10 bg-orange-500' : 'w-3 bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Text Content with enhanced decorative elements */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                      {/* Decorative accent */}
                      <div className="absolute top-12 left-12 w-12 h-3 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full opacity-70"></div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-6 relative"
                      >
                        <div>
                          {/* Updated with typography system */}
                          <h2 className={`${typography.subtitle1} ${typography.accent} mb-2 tracking-wide`}>
                            {carouselContent[activeSlide].subtitle}
                          </h2>
                          <div className="relative inline-block">
                            {/* Updated with typography system */}
                            <h1 className={typography.h1}>
                              <span className={typography.gradient}>
                                {carouselContent[activeSlide].title}
                              </span>
                            </h1>
                            <div className="absolute -bottom-1 left-0 w-1/2 h-1.5 bg-orange-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Updated with typography system */}
                        <p className={typography.bodyLarge}>
                          {carouselContent[activeSlide].content.split(' ').map((word, i) => {
                            // Highlight every 10th word or important keywords
                            const keywords = ['outthink', 'outperform', 'SAP', 'problem-solvers', 'solutions', 'partnering'];
                            const lowercaseWord = word.toLowerCase().replace(/[^a-z]/g, '');
                            
                            if (keywords.includes(lowercaseWord)) {
                              return (
                                <span key={i} className={`font-semibold ${typography.accent}`}>
                                  {word}{' '}
                                </span>
                              );
                            }
                            return <span key={i}>{word}{' '}</span>;
                          })}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Image with background elements - INCREASED SIZE WITHOUT ZOOM OUT */}
                    <motion.div 
                      className="hidden lg:flex items-center justify-center p-0 relative overflow-visible"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      style={{ minHeight: '500px' }}
                    >
                      {/* Decorative background elements for image side */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-full"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,113,42,0.05)_0%,transparent_50%)]"></div>
                      
                      <img 
                        src={carouselContent[activeSlide].image} 
                        alt={carouselContent[activeSlide].title}
                        className="w-full h-full object-contain max-w-4xl max-h-96"
                        style={{ transform: 'scale(1.2)' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarouselSection;