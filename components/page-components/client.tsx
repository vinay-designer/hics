import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { typography } from "../../utils/ typography"; // Fixed spacing in import path

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

// Vibrant color palette matching KeyFocusSection
const colors = {
  purple: '#6366F1', // Indigo
  blue: '#2DD4BF',   // Teal
  green: '#22C55E',  // Emerald
  yellow: '#FBBF24', // Amber
  orange: '#ff712a', // Brand orange
  coral: 'rgb(255, 191, 179)', // Soft coral
  sky: 'rgb(173, 216, 230)', // Light sky blue
};

// Client logos for the marquee
const clients = [
  { name: "Customer 1", logo: "/page-components/aic.png" },
  { name: "Customer 2", logo: "/page-components/bvh.jpg" },
  { name: "Customer 3", logo: "/page-components/dairy.jpg" },
  { name: "Customer 4", logo: "/page-components/ihis.png" },
  { name: "Customer 5", logo: "/page-components/sp-g.jpg" },
  { name: "Customer 6", logo: "/page-components/zp.jpg" },
  { name: "Customer 9", logo: "/page-components/ihh_logo.jpg" },
  { name: "Customer 7", logo: "/page-components/saint.jpg" },
  { name: "Customer 8", logo: "/page-components/st-a.jpg" },
  { name: "Customer 10", logo: "/page-components/jhfg.jpeg" },
  { name: "Customer 11", logo: "/page-components/kfc.png" },
  { name: "Customer 12", logo: "/page-components/ktph-logo.svg" },
  { name: "Customer 13", logo: "/page-components/nuh.png" },
  { name: "Customer 14", logo: "/page-components/panasonic.png" },
  { name: "Customer 15", logo: "/page-components/pizzahut.png" },
  { name: "Customer 16", logo: "/page-components/pngwing.png" },
  { name: "Customer 17", logo: "/page-components/rec-solar-logo.jpg" },
  { name: "Customer 18", logo: "/page-components/ren-ci-logo.png" },
  { name: "Customer 19", logo: "/page-components/sembcorp.png" },
  { name: "Customer 20", logo: "/page-components/stlogistics.jpg" },
  { name: "Customer 21", logo: "/page-components/thk.jpg" },
];

const SmoothMarquee = ({ children, direction = 'left', speed = 25, className = '' }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [childrenArray, setChildrenArray] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      // Get the actual width of the content
      const width = containerRef.current.scrollWidth;
      setContainerWidth(width);

      // Create the array of children for continuous scrolling
      const childArray = React.Children.toArray(children);
      setChildrenArray([...childArray, ...childArray]);
    }

    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.scrollWidth;
        setContainerWidth(width);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  // Don't render anything until we have measurements
  if (containerWidth === 0) {
    return (
      <div ref={containerRef} className={`flex ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? [-containerWidth / 2, 0] : [0, -containerWidth / 2],
        }}
        transition={{
          duration: containerWidth / (speed * 5), // Slower, smoother movement
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex"
        ref={containerRef}
      >
        {childrenArray.map((item, idx) => (
          <div key={idx} className="flex shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
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

  const clientItems = clients.map((client, index) => (
    <div
      key={index}
      className="relative mx-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="min-w-[180px] h-20 bg-white shadow-sm rounded-xl p-16 flex items-center justify-center border border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
      >
        <img
          loading='lazy'
          src={client.logo}
          alt={client.name}
          className="h-16 w-auto object-contain"
        />
      </motion.div>
    </div>
  ));

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-blue-50"
    >
      {/* Background matching Hero section */}
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          {/* Header using KeyFocusSection styling */}
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-block ${typography.accent} ${typography.buttonText} px-6 py-2 rounded-full text-sm bg-orange-50 mb-8`}
              >
                Our Valued Partners
              </motion.span>

              <motion.h2 
                className={`${typography.h2} mb-8 bg-gradient-to-r from-indigo-600 via-orange-500 to-teal-500 bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="inline-block">Trusted by Industry Leaders</span>
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
                <p className={typography.subtitle1}>Partnering for Success</p>
                <motion.div 
                  className="h-1 w-20 rounded-full bg-gradient-to-l from-teal-500 to-transparent"
                  animate={isInView ? { scaleX: [0, 1] } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={`${typography.bodyLarge} max-w-2xl mx-auto mb-16`}
              >
                Proudly serving distinguished organizations across Southeast Asia, delivering exceptional SAP solutions that drive business transformation.
              </motion.p>
            </motion.div>
          </div>

          {/* Single smooth marquee */}
          <div className="relative py-4">

            <SmoothMarquee direction="left" speed={10}>
              {clientItems}
            </SmoothMarquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;