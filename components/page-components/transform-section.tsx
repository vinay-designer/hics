import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Workflow, Shield, Check } from "lucide-react";
import TransformBackground from './transform-background';

const TransformSection = () => {
  const [hoveredCard, setHoveredCard] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "System Management",
      description: "End-to-end IT operations management enabling focused business growth and streamlined processes.",
      features: [
        "24/7 System Monitoring & Support",
        "Automated Incident Response",
        "Performance Optimization",
        "Capacity Planning"
      ],
      stats: {
        value: "99.9%",
        label: "Uptime Guarantee"
      },
      detailedText: "Our comprehensive system management solution ensures your IT infrastructure operates at peak efficiency. We handle everything from routine maintenance to complex system integrations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Excellence",
      description: "ITIL-certified expertise in strategy, design, and operations for optimal performance.",
      features: [
        "ITIL Best Practices",
        "Service Level Agreements",
        "Change Management",
        "Continuous Improvement"
      ],
      stats: {
        value: "15+",
        label: "Years Experience"
      },
      detailedText: "Leverage our certified expertise to transform your IT service delivery. We implement industry-leading practices to ensure consistent, high-quality service outcomes."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation Hub",
      description: "Cutting-edge solutions driving digital transformation and business innovation.",
      features: [
        "Cloud Solutions Integration",
        "AI & ML Implementation",
        "Digital Workflow Design",
        "Innovation Consulting"
      ],
      stats: {
        value: "200+",
        label: "Projects Delivered"
      },
      detailedText: "Stay ahead of the curve with our innovation-focused solutions. We help you leverage emerging technologies to create competitive advantages and new opportunities."
    }
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-black">
      <TransformBackground />
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#ff712a]/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#ff9500]/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col gap-20">
          {/* Headline Section */}
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h2 className="text-8xl font-bold">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                    Transform
                  </span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                      transform: `translateX(${(mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 100 - 50}%)`,
                      transition: 'transform 0.2s',
                    }}
                  />
                </span>
                <span className="block text-white mt-2">Your Operations</span>
              </h2>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                <p className="text-[#ffa763] text-xl">Next-gen IT management</p>
                <div className="h-px w-20 bg-gradient-to-r from-[#ff9500] to-[#ff712a]" />
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full">
                  <motion.div 
                    className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8 h-full
                             transition-all duration-300 group-hover:bg-black/60"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Icon and Stats */}
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-px">
                          <div className="w-full h-full bg-black/60 rounded-lg flex items-center justify-center text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                            {feature.stats.value}
                          </div>
                          <div className="text-sm text-gray-400">{feature.stats.label}</div>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-[#ff712a] transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={hoveredCard === index ? 
                              { opacity: 1, x: 0 } : 
                              { opacity: 0, x: -10 }
                            }
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowUpRight className="w-5 h-5 text-[#ff712a]" />
                          </motion.div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Detailed Features */}
                      <div className="space-y-3">
                        <div className="h-px w-full bg-white/5" />
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#ff712a]" />
                            <span className="text-gray-400 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Additional Details */}
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.detailedText}
                      </p>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Subtle Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff712a] to-[#ff9500] opacity-0 
                                 group-hover:opacity-10 blur-lg transition-opacity duration-300 rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto w-full"
          >
            <Button 
              className="w-full bg-gradient-to-r from-[#ff712a] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ff712a] 
                         text-white py-8 text-xl rounded-xl transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 font-medium">
                START TRANSFORMATION
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff712a] to-[#ff9500] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;