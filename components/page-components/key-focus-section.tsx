import React, { useState, useRef } from 'react';
import { Monitor, Cloud, Signal, Users, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const KeyFocusSection = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Vibrant color palette complementing orange (#ff712a)
  const colors = {
    purple: '#6366F1', // Indigo
    blue: '#2DD4BF',   // Teal
    green: '#22C55E',  // Emerald
    yellow: '#FBBF24', // Amber
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
    }
  ];

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
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="absolute w-[500px] h-[500px] -right-40 -top-40 rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute w-[400px] h-[400px] -left-20 top-1/2 rounded-full bg-gradient-to-tr from-teal-100 via-emerald-50 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute w-[300px] h-[300px] right-20 bottom-0 rounded-full bg-gradient-to-tl from-amber-100 via-orange-50 to-transparent"
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
                className="inline-block text-indigo-600 font-medium px-6 py-2 rounded-full text-sm bg-indigo-50 mb-8"
              >
                Our Areas of Excellence
              </motion.span>

              <motion.h2 
                className="text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-orange-500 to-teal-500 bg-clip-text text-transparent"
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
                  className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-transparent"
                  animate={isInView ? { scaleX: [0, 1] } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
                <p className="text-gray-600 text-xl font-medium">Driving Innovation Forward</p>
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
                <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
                  We specialize in delivering cutting-edge enterprise solutions that drive digital transformation and business growth. Our comprehensive suite of services is designed to optimize your operations and enhance your competitive advantage.
                </p>
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                  Through strategic partnerships with industry leaders and our deep technical expertise, we help organizations navigate their digital journey with confidence and precision.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="group relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-[420px] rounded-2xl p-6 bg-white transition-all duration-500
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100"
                >
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                                group-hover:from-current group-hover:to-transparent transition-all duration-500"
                       style={{ color: item.color }} />

                  <div className="relative h-full flex flex-col items-center justify-center text-center">
                    {/* Icon with background effect */}
                    <motion.div 
                      className="relative mb-8 p-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="absolute inset-0 bg-current opacity-5 rounded-xl transform rotate-6 transition-transform duration-500 group-hover:rotate-12"
                           style={{ color: item.color }} />
                      <div className="relative transition-transform duration-500 group-hover:scale-110">
                        <div className="text-current" style={{ color: item.color }}>
                          {item.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Title and description */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 group-hover:text-current transition-colors duration-500"
                          style={{ color: activeIndex === index ? item.color : undefined }}>
                        {item.title}
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.span>
                      </h3>

                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-2xl bg-gradient-to-r from-transparent via-transparent to-transparent 
                                group-hover:from-transparent group-hover:to-current transition-all duration-500"
                       style={{ color: item.color }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFocusSection;