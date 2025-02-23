'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const PortfolioSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                FEATURED PORTFOLIO
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
                Impactful Projects
              </span>
              <span className="block mt-2 text-gray-900">Innovative Solutions</span>
            </h2>
            
            <p className="text-gray-600 text-lg">
              Showcasing our commitment to excellence through transformative digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="relative h-[400px] transform group-hover:scale-105 transition-all duration-700">
                  <Image
                    loading='lazy' 
                    fill
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90 opacity-60 group-hover:opacity-80 transition-all duration-700" />

                  {/* Animated Borders */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange-500 to-transparent"
                      animate={{ 
                        scaleX: [0, 1], 
                        originX: [0, 0],
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-indigo-500 to-transparent"
                      animate={{ 
                        scaleX: [0, 1], 
                        originX: [1, 1],
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                      <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                      {item.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </h3>
                    <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                    {/* <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      View Details
                    </Button> */}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;