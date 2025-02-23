'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Settings, Wrench, Power } from 'lucide-react';

const ProcessSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const processSteps = [
    {
      icon: <Brain className="w-10 h-10" />,
      number: "01",
      title: "Discovery",
      description: "Understanding client goals and requirements through detailed consultation and analysis."
    },
    {
      icon: <Settings className="w-10 h-10" />,
      number: "02",
      title: "Strategy",
      description: "Crafting a comprehensive plan and technical approach tailored to your needs."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      number: "03",
      title: "Development",
      description: "Building robust solutions with cutting-edge technologies and best practices."
    },
    {
      icon: <Power className="w-10 h-10" />,
      number: "04",
      title: "Launch",
      description: "Deploying the final product with thorough testing and ongoing support."
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative py-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,250,251,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(249,250,251,0.8)_2px,transparent_2px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/20 via-transparent to-indigo-100/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-orange-100 to-indigo-100 px-6 py-2 rounded-full border border-orange-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600 font-medium">
                WORK PROCESS
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600">
                Seamless Process
              </span>
              <span className="block mt-2 text-gray-900">Stellar Solutions</span>
            </h2>
            
            <p className="text-gray-600 text-lg">
              Find out how we transform your ideas into digital solutions through our efficient 
              and proven work process methodology.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-orange-200 via-indigo-200 to-orange-200 transform -translate-y-1/2" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg
                           transition-all duration-500 group-hover:-translate-y-2 h-full overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-indigo-50 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-100 to-indigo-100 mb-6 flex items-center justify-center group-hover:from-orange-200 group-hover:to-indigo-200 transition-colors duration-300">
                    <div className="text-orange-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-10 text-orange-600">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Animated Borders */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange-600 to-transparent"
                    animate={{ 
                      scaleX: [0, 1], 
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-indigo-600 to-transparent"
                    animate={{ 
                      scaleX: [0, 1], 
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                  />
                </div>
              </div>

              {/* Connection Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-2xl text-orange-600 opacity-40"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;