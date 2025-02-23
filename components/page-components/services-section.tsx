import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Database, Laptop, Shield, Cloud, 
  Key, Lock, Radio, ArrowRight, 
  Sparkles, ArrowUpRight, CheckCircle 
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [hoveredFeature, setHoveredFeature] = useState<any>(null);

  const competencies = [
    { 
      icon: <Database className="w-6 h-6" />, 
      title: "SAP Implementation",
      description: "End-to-end enterprise solutions and integrations",
      metric: "100+ Deployments",
      color: "#6366F1"
    },
    { 
      icon: <Laptop className="w-6 h-6" />, 
      title: "Enterprise Applications",
      description: "Seamless system integration and management",
      metric: "99.9% Uptime",
      color: "#2DD4BF"
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Infrastructure Management",
      description: "Robust and scalable infrastructure solutions",
      metric: "24/7 Support",
      color: "#ff712a"
    },
    { 
      icon: <Cloud className="w-6 h-6" />, 
      title: "Microsoft Dynamics 365",
      description: "Complete business solution implementation",
      metric: "50+ Projects",
      color: "#6366F1"
    },
    { 
      icon: <Key className="w-6 h-6" />, 
      title: "Identity Management",
      description: "Secure access and authentication systems",
      metric: "1M+ Users",
      color: "#2DD4BF"
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      title: "Cybersecurity Solutions",
      description: "Advanced threat protection and monitoring",
      metric: "Zero Breaches",
      color: "#ff712a"
    },
    { 
      icon: <Radio className="w-6 h-6" />, 
      title: "Internet of Things",
      description: "Connected device solutions and platforms",
      metric: "500+ Devices",
      color: "#6366F1"
    }
  ];

  const cloudFeatures = [
    {
      title: "High Availability",
      description: "99.99% uptime guarantee with redundant systems",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#6366F1"
    },
    {
      title: "Disaster Recovery",
      description: "Robust backup and recovery solutions",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#2DD4BF"
    },
    {
      title: "AI Integration",
      description: "Smart automation and predictive analytics",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#ff712a"
    },
    {
      title: "Big Data Processing",
      description: "Scalable data processing and analytics",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#6366F1"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,250,251,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(249,250,251,0.8)_2px,transparent_2px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-indigo-600" />
              <span className="text-indigo-600 font-medium">Our Services</span>
              <div className="h-px w-8 bg-indigo-600" />
            </motion.div>

            <h2 className="text-6xl font-bold mb-6">
              <span className="text-gray-900">Core </span>
              <span className="bg-gradient-to-r from-[#ff712a] via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                Competencies
              </span>
            </h2>
            <p className="text-gray-600 text-xl">
              Empowering businesses through innovative solutions and expertise
            </p>
          </motion.div>
        </div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}10` }}
                  >
                    <div style={{ color: item.color }}>{item.icon}</div>
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff712a] transition-colors">
                        {item.title}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? 
                          { opacity: 1, x: 0 } : 
                          { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-5 h-5" style={{ color: item.color }} />
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: item.color }}>
                      <span>{item.metric}</span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={hoveredIndex === index ? { width: '2rem' } : { width: 0 }}
                        className="h-px"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: item.color }}
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === index ? { opacity: 0.03 } : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Migration Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-5xl font-bold mb-6">
              <span className="text-gray-900">Immediate Goal on </span>
              <span className="bg-gradient-to-r from-[#ff712a] to-indigo-600 bg-clip-text text-transparent">
                Cloud Migration
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's a migration to cloud or implementation in cloud, we can help you realize your digital transformation goals at great speed with our ready-to-deploy templates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}10` }}
                  >
                    <div style={{ color: feature.color }}>{feature.icon}</div>
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#ff712a] transition-colors">
                        {feature.title}
                      </h4>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredFeature === index ? 
                          { opacity: 1, x: 0 } : 
                          { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: feature.color }} />
                      </motion.div>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ backgroundColor: feature.color }}
                  initial={{ opacity: 0 }}
                  animate={hoveredFeature === index ? { opacity: 0.03 } : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-[#ff712a] to-indigo-600 text-white text-lg font-medium"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Start Your Cloud Journey 
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-[#ff712a] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;