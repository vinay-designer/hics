import React, { useState, useRef } from 'react';
import { Monitor, Cloud, Signal, Users, ArrowUpRight, Database, Shield, Key, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { typography } from "../../utils/ typography"

const KeyFocusSection = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Vibrant color palette complementing orange (#ff712a)
  const colors = {
    purple: '#6366F1', // Indigo
    blue: '#2DD4BF',   // Teal
    green: '#22C55E',  // Emerald
    yellow: '#FBBF24', // Amber
    orange: '#ff712a', // Brand orange
    coral: 'rgb(255, 191, 179)', // Soft coral
    sky: 'rgb(173, 216, 230)', // Light sky blue
  };

  const items = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "RISE WITH SAP",
      description: "Transform your business with intelligent cloud solutions",
      color: colors.purple,
      gradient: "from-indigo-500/20 via-indigo-400/10 to-transparent"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SAP ON AZURE & AWS",
      description: "Leverage leading cloud platforms for optimal performance",
      color: colors.blue,
      gradient: "from-teal-500/20 via-teal-400/10 to-transparent"
    },
    {
      icon: <Signal className="w-12 h-12" />,
      title: "APPLICATION & INFRASTRUCTURE",
      description: "End-to-end management of your digital ecosystem",
      color: colors.green,
      gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "STAFF AUGMENTATION",
      description: "Expert professionals to strengthen your team",
      color: colors.yellow,
      gradient: "from-amber-500/20 via-amber-400/10 to-transparent"
    },    
    {
      icon: <Shield className="w-12 h-12" />,
      title: "INFRASTRUCTURE MANAGEMENT",
      description: "Robust and scalable infrastructure solutions",
      color: colors.coral,
      gradient: "from-rose-500/20 via-rose-400/10 to-transparent"
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "IDENTITY MANAGEMENT",
      description: "Secure access and authentication systems",
      color: colors.sky,
      gradient: "from-blue-500/20 via-blue-400/10 to-transparent"
    }
  ];

  // Create slide sets (4 items per slide)
  const slides = [
    [0, 1, 2, 3],   // First slide (items 0-3)
    [4, 5]    // Second slide (items 4-5)
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative background elements matching hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100/20 to-transparent blur-2xl"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [10, -10, 10],
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent blur-2xl"
        ></motion.div>
        
        {/* Floating elements like in hero */}
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
            y: [20, -40, 20],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-1/3 w-32 h-32 rounded-full bg-gradient-to-bl from-blue-300/15 to-transparent"
        ></motion.div>
        
        {/* Small floating dots */}
        {[...Array(6)].map((_, i) => {
          const isLeft = i % 2 === 0;
          const xPosition = isLeft ? `${10 + (i % 3) * 15}%` : `${70 - (i % 3) * 15}%`;
          const yPosition = `${15 + (i * 12)}%`;
          const size = 2 + (i % 3);
          
          return (
            <motion.div
              key={i}
              animate={{
                y: [-10, 10, -10],
                x: isLeft ? [-5, 5, -5] : [5, -5, 5],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{ 
                backgroundColor: isLeft ? colors.orange : colors.sky,
                top: yPosition,
                left: xPosition,
                width: `${size}px`,
                height: `${size}px`,
              }}
              className="absolute rounded-full opacity-40"
            />
          );
        })}
        
        {/* Light trails effect */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: 100, 
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut"
          }}
          className="absolute top-1/3 w-20 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"
          style={{ transform: "rotate(-45deg) scale(2)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-20"
        >
          {/* Header Section */}
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-block ${typography.accent} ${typography.buttonText} px-6 py-2 rounded-full text-sm bg-orange-50 mb-8`}
              >
                Our Areas of Excellence
              </motion.span>

              <motion.h2 
                className={`${typography.h2} mb-8 bg-gradient-to-r from-indigo-600 via-orange-500 to-teal-500 bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-block">Key Focus Areas</span>
              </motion.h2>

              <motion.div 
                className="flex items-center justify-center gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.div 
                  className="h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-transparent"
                  animate={isInView ? { scaleX: [0, 1] } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
                <p className={typography.subtitle1}>Driving Innovation Forward</p>
                <motion.div 
                  className="h-1 w-20 rounded-full bg-gradient-to-l from-teal-500 to-transparent"
                  animate={isInView ? { scaleX: [0, 1] } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className={`${typography.bodyLarge} max-w-3xl mx-auto`}>
                  We specialize in delivering cutting-edge enterprise solutions that drive digital transformation and business growth. Our comprehensive suite of services is designed to optimize your operations and enhance your competitive advantage.
                </p>
                <p className={`${typography.body} max-w-2xl mx-auto`}>
                  Through strategic partnerships with industry leaders and our deep technical expertise, we help organizations navigate their digital journey with confidence and precision.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Cards Carousel */}
          <div className="relative mx-auto max-w-7xl px-4">
            {/* Navigation Arrows */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 hover:bg-orange-50 transition-colors duration-300 text-gray-700 hover:text-orange-500 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button 
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 hover:bg-orange-50 transition-colors duration-300 text-gray-700 hover:text-orange-500 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            {/* Simple Carousel - Direct display of current slide */}
            <div className="px-8 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {slides[currentSlide].map((itemIndex) => {
                  const item = items[itemIndex];
                  return (
                    <div
                      key={`${currentSlide}-${itemIndex}`}
                      className="group relative"
                      onMouseEnter={() => setActiveIndex(itemIndex)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div
                        className="relative h-[380px] md:h-[420px] rounded-2xl p-6 bg-white/30 backdrop-blur-sm transition-all duration-500
                                  hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100"
                      >
                        {/* Top gradient bar */}
                        <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                                      group-hover:from-current group-hover:to-transparent transition-all duration-500"
                             style={{ color: item?.color }} />

                        <div className="relative h-full flex flex-col items-center justify-center text-center">
                          {/* Icon with background effect */}
                          <div 
                            className="relative mb-8 p-4"
                          >
                            <div className="absolute inset-0 bg-current opacity-5 rounded-xl transform rotate-6 transition-transform duration-500 group-hover:rotate-12"
                                 style={{ color: item?.color }} />
                            <div className="relative transition-transform duration-500 group-hover:scale-110">
                              <div className="text-current" style={{ color: item?.color }}>
                                {item?.icon}
                              </div>
                            </div>
                          </div>

                          {/* Title and description */}
                          <div className="space-y-4">
                            <h3 className={`${typography.h4} flex items-center justify-center gap-2 group-hover:text-current transition-colors duration-500`}
                                style={{ color: activeIndex === itemIndex ? item?.color : undefined }}>
                              {item?.title}
                              {/* <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                              </span> */}
                            </h3>

                            <p className={`${typography.body} group-hover:text-gray-700 transition-colors duration-500`}>
                              {item?.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom gradient bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-2xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                                      group-hover:from-transparent group-hover:to-current transition-all duration-500"
                             style={{ color: item?.color }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentSlide ? 'w-10 bg-orange-500' : 'w-3 bg-gray-300 hover:w-6 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center mt-12"
            >
              <Button 
                className={`bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg ${typography.buttonText} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-200/50`}
              >
                <span className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFocusSection;