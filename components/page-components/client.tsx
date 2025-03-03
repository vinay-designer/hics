import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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

// Client logos for the marquee
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

const ClientSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-blue-50 overflow-hidden">
      {/* HIGH INTENSITY animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        <motion.div
          animate={{
            y: [15, -15, 15],
            scale: [1.05, 1, 1.05],
            opacity: [0.6, 0.5, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/40 to-transparent blur-2xl"
        ></motion.div>
        
        {/* Small floating elements with increased size and opacity */}
        <motion.div
          animate={{
            x: [-10, 10, -10],
            y: [-10, 10, -10],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-1/5 w-12 h-12 rounded-full bg-gradient-to-br from-orange-300/40 to-transparent"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [10, -10, 10],
            y: [10, -10, 10],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-1/5 w-10 h-10 rounded-full bg-gradient-to-br from-blue-300/40 to-transparent"
        ></motion.div>
        
        {/* Floating dots with increased size, count, and opacity */}
        {[...Array(10)].map((_, i) => {
          const isLeft = i % 2 === 0;
          const xPosition = isLeft ? `${10 + (i % 5) * 15}%` : `${70 - (i % 5) * 15}%`;
          const yPosition = `${10 + (i * 8)}%`;
          const size = 3 + (i % 4);
          
          return (
            <motion.div
              key={i}
              animate={{
                y: [-15, 15, -15],
                x: isLeft ? [-8, 8, -8] : [8, -8, 8],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{ 
                backgroundColor: isLeft ? colorScheme.orange.main : colorScheme.sky.main,
                top: yPosition,
                left: xPosition,
                width: `${size}px`,
                height: `${size}px`,
              }}
              className="absolute rounded-full opacity-70"
            />
          );
        })}
        
        {/* Light trails effect with increased width and opacity */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: 100, 
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeOut"
          }}
          className="absolute top-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          style={{ transform: "rotate(-45deg) scale(2.5)" }}
        />
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ 
            x: -100, 
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeOut",
            delay: 2
          }}
          className="absolute bottom-1/3 w-28 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          style={{ transform: "rotate(45deg) scale(2.5)" }}
        />
        
        {/* Second set of light trails for more activity */}
        <motion.div
          initial={{ x: -50, y: 100, opacity: 0 }}
          animate={{ 
            x: 50, 
            y: 0,
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeOut",
            delay: 1
          }}
          className="absolute top-2/3 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
          style={{ transform: "rotate(-30deg) scale(2)" }}
        />
        
        <motion.div
          initial={{ x: 50, y: 0, opacity: 0 }}
          animate={{ 
            x: -50, 
            y: 100,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeOut",
            delay: 2.5
          }}
          className="absolute top-1/4 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
          style={{ transform: "rotate(30deg) scale(2)" }}
        />
        
        {/* Orbital rings with increased size and opacity */}
        <div className="absolute left-1/4 top-1/3">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-40 h-40 rounded-full border-2 border-orange-200/40 relative"
          >
            <motion.div 
              className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-orange-400/60"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ transform: 'translateX(-50%)' }}
            />
          </motion.div>
        </div>
        
        <div className="absolute right-1/4 bottom-1/4">
          <motion.div
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-32 h-32 rounded-full border-2 border-blue-200/40 relative"
          >
            <motion.div 
              className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-blue-400/60"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transform: 'translateX(-50%)' }}
            />
          </motion.div>
        </div>
        
        {/* Additional orbital accent */}
        <div className="absolute left-2/3 top-2/3">
          <motion.div
            animate={{
              rotate: [0, 180, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="w-24 h-24 rounded-full border-2 border-orange-300/30 relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300/40 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Section Title with animations */}
      <div className="container mx-auto mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Our Clients</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-600 max-w-2xl mx-auto"
          >
            Trusted by leading organizations to deliver exceptional SAP solutions.
          </motion.p>
        </motion.div>
        
        {/* Decorative elements around the heading */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-8 right-1/4 w-20 h-20 border border-orange-200/30 rounded-full"
          style={{ transformOrigin: 'center center' }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 left-1/4 w-6 h-6 bg-orange-100/20 rounded-full blur-sm"
        />
      </div>

      {/* CLEAN Client Logos Marquee */}
      <div className="relative">
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-20 py-12"
        >
          {clients.map((client, index) => {
            // Animation delay for staggered entry
            const animDelay = index * 0.07;
            
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    delay: animDelay,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300
                  }
                }}
                whileHover={{ 
                  scale: 1.12,
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    duration: 0.25
                  }
                }}
                className="flex-shrink-0"
              >
                {/* Clean logo with simple animations */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientSection;