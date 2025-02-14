import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Laptop, Shield, Cloud, 
  Key, Lock, Radio, ArrowRight, 
  Sparkles, ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import ServicesBackground from './service-backgroound';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const competencies = [
    { 
      icon: <Database className="w-5 h-5" />, 
      title: "SAP Implementation",
      description: "End-to-end enterprise solutions and integrations",
      metric: "100+ Deployments"
    },
    { 
      icon: <Laptop className="w-5 h-5" />, 
      title: "Enterprise Applications",
      description: "Seamless system integration and management",
      metric: "99.9% Uptime"
    },
    { 
      icon: <Shield className="w-5 h-5" />, 
      title: "Infrastructure Management",
      description: "Robust and scalable infrastructure solutions",
      metric: "24/7 Support"
    },
    { 
      icon: <Cloud className="w-5 h-5" />, 
      title: "Microsoft Dynamics 365",
      description: "Complete business solution implementation",
      metric: "50+ Projects"
    },
    { 
      icon: <Key className="w-5 h-5" />, 
      title: "Identity Management",
      description: "Secure access and authentication systems",
      metric: "1M+ Users"
    },
    { 
      icon: <Lock className="w-5 h-5" />, 
      title: "Cybersecurity Solutions",
      description: "Advanced threat protection and monitoring",
      metric: "Zero Breaches"
    },
    { 
      icon: <Radio className="w-5 h-5" />, 
      title: "Internet of Things",
      description: "Connected device solutions and platforms",
      metric: "500+ Devices"
    }
  ];

  const cloudFeatures = [
    {
      title: "High Availability",
      description: "99.99% uptime guarantee with redundant systems",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Disaster Recovery",
      description: "Robust backup and recovery solutions",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "AI Integration",
      description: "Smart automation and predictive analytics",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Big Data Processing",
      description: "Scalable data processing and analytics",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];


  return (
    <section className="relative py-20 min-h-screen bg-black overflow-hidden">
      <ServicesBackground />
      
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#ff712a]/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#ff9500]/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Column - Core Competencies */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative">
                <Sparkles className="absolute -top-8 -left-8 w-16 h-16 text-[#ff712a]/30" />
                <h2 className="text-6xl font-bold">
                  <span className="bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                    Core
                  </span>
                  <span className="block mt-2 text-white">Competencies</span>
                  <span className="text-4xl text-[#ffa763]">of HICS</span>
                </h2>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-20 bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                  <span className="text-[#ffa763]">Excellence in Every Domain</span>
                </div>
              </div>

              <div className="space-y-4">
                {competencies.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative"
                  >
                    <div className="relative flex items-center gap-6 p-4 rounded-xl border border-transparent hover:border-[#ff712a]/20 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#ff712a]/10 to-[#ff9500]/10 text-[#ff712a]">
                        {item.icon}
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-[#ff712a] transition-colors">
                            {item.title}
                          </h3>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={hoveredIndex === index ? 
                              { opacity: 1, x: 0 } : 
                              { opacity: 0, x: -10 }
                            }
                            className="text-[#ff712a]"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex-shrink-0 text-right">
                        <span className="text-sm font-medium text-[#ff712a]">
                          {item.metric}
                        </span>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-[#ff712a]/5 to-transparent rounded-xl -z-10"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Cloud Migration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pt-24"
          >
            <div className="space-y-12">
              <div className="relative">
                <Cloud className="absolute -top-8 -right-8 w-16 h-16 text-[#ff712a]/30" />
                <h2 className="text-5xl font-bold">
                  <span className="text-white">Immediate Goal on</span>
                  <span className="block mt-2 bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                    Cloud Migration
                  </span>
                </h2>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-20 bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                  <span className="text-[#ffa763]">Transform with Confidence</span>
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether it's a migration to cloud or implementation in cloud, we can help you realize your digital transformation goals at great speed with our ready-to-deploy templates.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {cloudFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className="group relative"
                    >
                      <div className="relative p-6 rounded-xl border border-transparent hover:border-[#ff712a]/20 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 text-[#ff712a]">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-[#ff712a] transition-colors">
                              {feature.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={hoveredFeature === index ? { opacity: 1 } : { opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-r from-[#ff712a]/5 to-transparent rounded-xl -z-10"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative group mt-8">
                  <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#ff712a] to-[#ff9500] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      Start Your Cloud Journey
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;