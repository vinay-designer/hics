import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import PortfolioBackground from '../../animations/homepage/portfolio-background';
import Image from 'next/image';

const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const isInView = useInView(portfolioRef, { once: true, margin: "-100px" });

  const portfolioItems = [
    {
      title: "Enterprise Solutions",
      description: "Complete digital transformation for enterprise systems",
      category: "Enterprise",
      image: "/page-components/enterprise.jpg"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture and migration",
      category: "Cloud",
      image: "/page-components/cloud.jpg"
    },
    {
      title: "Security Systems",
      description: "Advanced cybersecurity implementations",
      category: "Security",
      image: "/page-components/security.avif"
    },
    {
      title: "IoT Platform",
      description: "Connected device management solutions",
      category: "IoT",
      image: "/page-components/iot.avif"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-screen">
      <PortfolioBackground />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black opacity-80" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-[#ff712a]/10 backdrop-blur-xl px-6 py-2 rounded-full border border-[#ff712a]/20">
              <h3 className="text-[#ff712a] font-medium">FEATURED PORTFOLIO</h3>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
              Impactful projects,
            </span>
            <span className="block mt-2">every time</span>
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 rounded-lg blur-xl opacity-50" />
            <p className="relative text-gray-400 text-lg backdrop-blur-xl p-6 rounded-lg">
              A showcase of our commitment to delivering top-tier, innovative digital solutions.
              Our commitment to quality and excellence is unparalleled.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={portfolioRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-xl">
                <div className="relative h-[400px] transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    loading='lazy' 
                    fill
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <Button
                      variant="outline"
                      className="border-[#ff712a] text-[#ff712a] hover:bg-[#ff712a] hover:text-white transition-colors duration-300"
                    >
                      PORTFOLIO DETAILS
                    </Button>
                  </div>

                  {/* Animated corner accents */}
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  >
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
                  </motion.div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-[1px] rounded">
                  <div className="bg-black px-4 py-1 rounded backdrop-blur-xl">
                    <span className="text-white font-medium">{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff712a]/20 to-transparent rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#ff712a]/10 to-transparent pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#ff9500]/10 to-transparent pointer-events-none blur-3xl" />
      </div>
    </section>
  );
};

export default PortfolioSection;