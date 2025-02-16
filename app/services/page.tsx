// app/services/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '../../data/service';
import { Database, Cloud, Shield, Cpu, Users, Code, Settings } from 'lucide-react';

const iconMap = {
  Database,
  Cloud,
  Shield,
  Cpu,
  Users,
  Code,
  Settings,
};

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              Our Services
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-[#ff712a] mt-4 mx-auto max-w-[200px]"
              />
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to your business needs. From SAP implementations 
              to cybersecurity, we deliver excellence in every service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {Object.entries(servicesData).map(([category, services]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8
                          hover:border-[#ff712a]/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-lg bg-[#ff712a]/10 
                                flex items-center justify-center text-[#ff712a]">
                    {React.createElement(iconMap[category as keyof typeof iconMap] || Database, { size: 32 })}
                  </div>
                  
                  <h2 className="text-2xl font-bold capitalize">
                    {category.replace('-', ' ')} Services
                  </h2>
                  
                  <div className="space-y-2">
                    {Object.entries(services).map(([service, data]) => (
                      <Link
                        key={service}
                        href={`/services/${category}/${service}`}
                        className="block text-gray-300 hover:text-[#ff712a] transition-colors py-1"
                      >
                        {data.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today to learn more about how we can help your organization 
              achieve its goals with our expertise and solutions.
            </p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#ff712a] rounded-lg hover:bg-[#ff9500] 
                         transition-colors inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}