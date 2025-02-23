import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Workflow, Shield, Sparkles, ArrowRight, Check } from 'lucide-react';

const TransformSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "System Management",
      description: "End-to-end IT operations management enabling focused business growth and streamlined processes.",
      features: [
        "24/7 System Monitoring & Support",
        "Automated Incident Response",
        "Performance Optimization",
        "Capacity Planning"
      ],
      color: "#8B5CF6" // Modern purple
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Service Excellence",
      description: "ITIL-certified expertise in strategy, design, and operations for optimal performance.",
      features: [
        "ITIL Best Practices",
        "Service Level Agreements",
        "Change Management",
        "Continuous Improvement"
      ],
      color: "#F59E0B" // Modern amber
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "Cutting-edge solutions driving digital transformation and business innovation.",
      features: [
        "Cloud Solutions Integration",
        "AI & ML Implementation",
        "Digital Workflow Design",
        "Innovation Consulting"
      ],
      color: "#10B981" // Vibrant teal
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      {/* Checkered Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,250,251,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(249,250,251,0.8)_2px,transparent_2px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-orange-50/30"
      />

      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1 rounded-full text-sm font-medium text-gray-900 bg-gradient-to-r from-purple-200 to-indigo-200">
              Digital Transformation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
                Operations
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5 }}
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}10`, color: feature.color }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base mb-6">{feature.description}</p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: feature.color }} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                variant="outline"
                className="w-full rounded-lg text-gray-900 hover:text-white transition-all duration-300"
                style={{ borderColor: feature.color }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ backgroundColor: feature.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.03 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;