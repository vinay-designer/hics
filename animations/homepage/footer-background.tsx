'use client'
import React from 'react';
import { motion } from 'framer-motion';

const FooterBackground = () => {
  // Generate grid points for line anchors (invisible)
  const generateLines = () => {
    interface Point {
      id: string;
      x: string;
      y: string;
    }
    interface Line {
      id: string;
      x1: string;
      y1: string;
      x2: string;
      y2: string;
      delay: number;
    }
    const lines: Line[] = [];
    const cols = 8;
    const rows = 3;
    
    // Create points grid
    const points: Point[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({
          id: `point-${i}-${j}`,
          x: `${(i + 1) * (100 / (cols + 1))}%`,
          y: `${(j + 1) * (100 / (rows + 1))}%`
        });
      }
    }

    // Create lines between points
    points.forEach((point, i) => {
      points.slice(i + 1).forEach((nextPoint, j) => {
        const distance = Math.hypot(
          parseFloat(point.x) - parseFloat(nextPoint.x),
          parseFloat(point.y) - parseFloat(nextPoint.y)
        );
        
        // Only create lines between points that are close enough
        if (distance < 30) {
          lines.push({
            id: `line-${i}-${j}`,
            x1: point.x,
            y1: point.y,
            x2: nextPoint.x,
            y2: nextPoint.y,
            delay: (i + j) * 0.1
          });
        }
      });
    });

    return lines;
  };

  const lines = generateLines();

  const lineVariants = {
    initial: { 
      pathLength: 0, 
      opacity: 0 
    },
    animate: (delay: number) => ({
      pathLength: [0, 1, 1, 0],
      opacity: [0, 0.2, 0.2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
        times: [0, 0.4, 0.6, 1]
      }
    })
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Animated lines */}
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            initial="initial"
            animate="animate"
            custom={line.delay}
            variants={lineVariants}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9500" />
            <stop offset="100%" stopColor="#ff712a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle background glow effect */}
      <motion.div
        className="absolute w-full h-full top-0 left-0"
        animate={{
          background: [
            'radial-gradient(800px at 0% 0%, rgba(255,113,42,0.02) 0%, transparent 70%)',
            'radial-gradient(800px at 100% 100%, rgba(255,113,42,0.02) 0%, transparent 70%)',
            'radial-gradient(800px at 0% 100%, rgba(255,113,42,0.02) 0%, transparent 70%)',
            'radial-gradient(800px at 100% 0%, rgba(255,113,42,0.02) 0%, transparent 70%)',
            'radial-gradient(800px at 0% 0%, rgba(255,113,42,0.02) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default FooterBackground;