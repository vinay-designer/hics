'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { solutionsData } from '../../data/solutions';
import { 
  FileText, 
  Users, 
  Key, 
  Activity, 
  ArrowRight 
} from 'lucide-react';

// Map of solution slugs to icons
const iconMap = {
  "eforms": FileText,
  "queue-management": Users,
  "sso": Key,
  "fall-detection": Activity,
};

export default function SolutionsPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              Our Solutions
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-orange-500 mt-4 mx-auto max-w-[200px]"
              />
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Innovative, adaptable solutions designed to solve real-world challenges and 
              transform your business operations for enhanced efficiency and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {Object.entries(solutionsData).map(([slug, solution]) => {
              const IconComponent = iconMap[slug as keyof typeof iconMap] || Activity;
              
              return (
                <motion.div
                  key={slug}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl opacity-0 group-hover:opacity-70 blur-lg transition-all duration-300" />
                  <Link href={`/solutions/${slug}`} className="block h-full">
                    <div className="relative h-full bg-white border border-orange-200/30 rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-300">
                      <div className="space-y-6">
                        <div className="w-16 h-16 rounded-lg bg-orange-100 
                                      flex items-center justify-center text-orange-500
                                      group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                          <IconComponent size={32} />
                        </div>
                        
                        <h2 className="text-2xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                          {solution.title}
                        </h2>
                        
                        <p className="text-gray-600">
                          {solution.description}
                        </p>

                        <div className="flex items-center text-orange-500 font-medium">
                          <span>Learn more</span>
                          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 mb-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 border border-orange-200/30 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-blue-100/50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full transform translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full transform -translate-x-1/4 translate-y-1/4" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Contact us today to learn more about how our innovative solutions can help
                your organization achieve its goals and overcome challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 
                           transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 
                           transition-colors inline-flex items-center gap-2"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}