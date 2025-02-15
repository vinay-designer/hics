import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Settings, Wrench, Power } from 'lucide-react';
import ProcessBackground from '../../animations/homepage/process-animation';

const ProcessSection = () => {
  const processRef = useRef(null);
  const isInView = useInView(processRef, { once: true, margin: "-100px" });

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

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <ProcessBackground />
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-[#ff712a]/10 backdrop-blur-xl px-6 py-2 rounded-full border border-[#ff712a]/20">
              <span className="text-[#ff712a] font-medium">WORK PROCESS</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
              Seamless process,
            </span>
            <span className="block mt-2 text-white">stellar solutions</span>
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 rounded-lg blur-xl opacity-50" />
            <p className="relative text-gray-400 text-lg backdrop-blur-xl p-6 rounded-lg">
              Find out how we transform your ideas into digital solutions through our efficient 
              and proven work process methodology.
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={processRef}
          className="grid md:grid-cols-4 gap-6 relative"
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff712a] to-[#ff9500] transform -translate-y-1/2 opacity-10" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-[#ff712a]/10
                           transition-all duration-300 group-hover:-translate-y-2 h-full overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff712a]/5 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-[1px] mb-6">
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center
                                text-[#ff712a] group-hover:text-[#ff9500] transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold bg-clip-text text-transparent 
                               bg-gradient-to-r from-[#ff712a]/10 to-[#ff9500]/10 group-hover:from-[#ff712a]/20 
                               group-hover:to-[#ff9500]/20 transition-all duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff712a] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Animated Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-[2px] h-full bg-gradient-to-b from-[#ff712a] to-transparent absolute top-0 left-6"
                    animate={{ top: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-full h-[2px] bg-gradient-to-r from-[#ff712a] to-transparent absolute top-6 left-0"
                    animate={{ left: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Connection Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20
                             items-center justify-center w-6 h-6 text-[#ff712a] group-hover:text-[#ff9500] 
                             transition-colors duration-300">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;