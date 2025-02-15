'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Globe, Target, Rocket, Users, Building2, Clock, Server, Shield, Zap } from "lucide-react";
import AboutBackground from '../../animations/about/about-background';

const AboutPage = () => {
  const industries = [
    "Healthcare", "Life Sciences", "Retail", "Utilities", 
    "Shipping", "Logistics", "Transportation"
  ];

  const offerings = [
    { 
      icon: <Server className="w-6 h-6" />,
      title: "SAP Healthcare",
      description: "Specialized solutions for healthcare sector"
    },
    { 
      icon: <Shield className="w-6 h-6" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions"
    },
    { 
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Public and private cloud solutions"
    },
    { 
      icon: <Zap className="w-6 h-6" />,
      title: "Microsoft Dynamics",
      description: "Enterprise business solutions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <AboutBackground />
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-7xl font-bold">
                  <span className="block text-white">Innovating</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                    Since 2015
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Leading the digital transformation in Singapore's healthcare sector and beyond
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Story Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                      Our Story
                    </span>
                  </h2>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      HICS was founded in 2015 with a clear focus on SAP healthcare implementation
                      in Singapore's public and private sector hospitals. Inspired by government
                      initiatives to leverage technology for quality, affordable healthcare, we
                      set out to become a leading healthcare solution provider.
                    </p>
                    <p>
                      Originally known as "Healthcare IT Consultants Singapore", we built our
                      foundation on client centricity and delivery excellence. Today, as HICS
                      Technologies, we continue to expand our expertise across multiple domains.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-8">
                  <div className="flex-1 relative h-24 bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 rounded-lg p-4">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-[#ff712a]" />
                      <div>
                        <div className="text-sm text-gray-400">Founded</div>
                        <div className="text-xl font-bold text-white">2015</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative h-24 bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 rounded-lg p-4">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-center gap-4">
                      <Globe className="w-6 h-6 text-[#ff712a]" />
                      <div>
                        <div className="text-sm text-gray-400">Global Presence</div>
                        <div className="text-xl font-bold text-white">3 Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision & Mission Cards */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-px">
                        <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Vision</h3>
                    </div>
                    <p className="text-gray-400">
                      "Empowering businesses through innovative technology solutions,
                      delivering exceptional customer service, and fostering long-term
                      partnerships for growth and success."
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-px">
                        <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-gray-400">
                      "Our mission is to provide innovative and reliable IT solutions that
                      empower businesses to achieve their goals and thrive in today's
                      digital landscape."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-20 bg-[#080808]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                  Our Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive solutions across multiple domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6
                                transition-all duration-300 group-hover:bg-[#ff712a]/5">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        {offering.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{offering.title}</h3>
                      <p className="text-sm text-gray-400">{offering.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                  Industries We Serve
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6
                                transition-all duration-300 group-hover:bg-[#ff712a]/5">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <span className="text-white group-hover:text-[#ff712a] transition-colors duration-300">
                        {industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-[#080808]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                  Global Presence
                </span>
              </h2>
              <p className="text-xl text-gray-400">Our team of professionals add value from</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {['Singapore', 'Philippines', 'India'].map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8
                                transition-all duration-300 group-hover:bg-[#ff712a]/5">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-px">
                        <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#ff712a] transition-colors duration-300">
                        {location}
                      </h3>
                      <p className="text-gray-400">
                        Technical Excellence Center
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-12"
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                  Our Value Proposition
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Personalized Service</h3>
                        <p className="text-gray-400">
                          Providing tailored solutions and exceptional service experience for our clients
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Azure Expertise</h3>
                        <p className="text-gray-400">
                          Proven experience in managing SAP workloads on Microsoft Azure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Cloud Innovation</h3>
                        <p className="text-gray-400">
                          Leveraging cloud technologies to enable effective digital transformation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Quality Focus</h3>
                        <p className="text-gray-400">
                          Delivering cost-effective solutions with the highest degree of quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;