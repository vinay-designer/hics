'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Users, Building2, ArrowRight, CheckCircle, Sparkles, UserPlus, MessageSquare, FileCheck, Rocket, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('partner');

  useEffect(() => {
    setMounted(true);
  }, []);

  const partners = [
    { 
      name: "Microsoft",
      logo: "/page-components/microsoft.jpg",
      type: "Cloud Solutions",
      highlight: "Azure Cloud Excellence",
      color: "#00A4EF"
    },
    { 
      name: "IBM",
      logo: "/page-components/ibm.jpg",
      type: "Technology",
      highlight: "AI & Analytics Partner",
      color: "#1F70C1"
    },
    { 
      name: "Lumen",
      logo: "/page-components/lumen.jpg",
      type: "Infrastructure",
      highlight: "Network Solutions",
      color: "#FF7900"
    },
    // Duplicates for marquee
    { 
      name: "Microsoft",
      logo: "/page-components/microsoft.jpg",
      type: "Cloud Solutions",
      highlight: "Azure Cloud Excellence",
      color: "#00A4EF"
    },
    { 
      name: "IBM",
      logo: "/page-components/ibm.jpg",
      type: "Technology",
      highlight: "AI & Analytics Partner",
      color: "#1F70C1"
    },
    { 
      name: "Lumen",
      logo: "/page-components/lumen.jpg",
      type: "Infrastructure",
      highlight: "Network Solutions",
      color: "#FF7900"
    }
  ];

  const clients = [
    { name: "AIC", logo: "/page-components/aic.jpg", industry: "Finance", case: "Digital Transformation" },
    { name: "BVH", logo: "/page-components/bvh.jpg", industry: "Healthcare", case: "Cloud Migration" },
    { name: "Dairy", logo: "/page-components/dairy.jpg", industry: "Food", case: "IoT Implementation" },
    { name: "IHIS", logo: "/page-components/ihis.jpg", industry: "Technology", case: "Security Solutions" },
    { name: "SPG", logo: "/page-components/sp-g.jpg", industry: "Energy", case: "Data Analytics" },
    { name: "ZP", logo: "/page-components/zp.jpg", industry: "Retail", case: "E-commerce Platform" },
    // Duplicates for marquee
    { name: "AIC", logo: "/page-components/aic.jpg", industry: "Finance", case: "Digital Transformation" },
    { name: "BVH", logo: "/page-components/bvh.jpg", industry: "Healthcare", case: "Cloud Migration" },
    { name: "Dairy", logo: "/page-components/dairy.jpg", industry: "Food", case: "IoT Implementation" },
    { name: "IHIS", logo: "/page-components/ihis.jpg", industry: "Technology", case: "Security Solutions" },
    { name: "SPG", logo: "/page-components/sp-g.jpg", industry: "Energy", case: "Data Analytics" },
    { name: "ZP", logo: "/page-components/zp.jpg", industry: "Retail", case: "E-commerce Platform" }
  ];

  const achievements = [
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries Served" },
    { icon: <Building2 className="w-6 h-6" />, value: "200+", label: "Enterprise Clients" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Projects Delivered" },
  ];

  const partnerBenefits = [
    "Access to enterprise-grade solutions",
    "Dedicated partner success manager",
    "Joint marketing opportunities",
    "Technical enablement resources",
    "Priority support channels",
    "Regular business reviews"
  ];

  const processSteps = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Apply",
      description: "Submit your partnership application"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Connect",
      description: "Meet with our partnership team"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Onboard",
      description: "Complete partnership onboarding"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch",
      description: "Start your partnership journey"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "Global Systems Inc.",
      image: "/api/placeholder/80/80",
      quote: "The partnership has transformed our digital infrastructure, enabling us to scale rapidly and securely.",
      achievement: "200% Growth in 12 months"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Innovation",
      company: "Future Dynamics",
      image: "/api/placeholder/80/80",
      quote: "Their expertise in cloud solutions has been instrumental in our digital transformation journey.",
      achievement: "40% Cost Reduction"
    },
    {
      name: "David Park",
      role: "Security Director",
      company: "SecureNet",
      image: "/api/placeholder/80/80",
      quote: "The team's dedication to cybersecurity excellence has helped us build unshakeable trust.",
      achievement: "Zero Security Breaches"
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,250,251,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(249,250,251,0.8)_2px,transparent_2px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Main Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-orange-600" />
            <span className="text-orange-600 font-medium">Partnership Ecosystem</span>
            <div className="h-px w-8 bg-orange-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent">
              Building Success Together
            </span>
          </motion.h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our network of industry leaders and innovators shaping the future of technology
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="mb-20">
          <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-8"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-100 w-72 flex flex-col items-start gap-4 hover:border-orange-200 transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium text-gray-600 group-hover:text-orange-600 transition-colors">
                          {partner.type}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <p className="text-xs text-gray-500">{partner.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-orange-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-orange-600">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partner Benefits</h3>
            <p className="text-gray-600">Exclusive advantages of joining our partner network</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories and Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Success Stories
            </h3>
            <p className="text-gray-600">Hear from our partners and clients</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-100 group-hover:border-orange-200 transition-colors"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-orange-600">{testimonial.company}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-500/20 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-orange-600">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-600" />
                  {testimonial.achievement}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clients Marquee */}
          <div className="relative overflow-hidden py-6">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-12"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-white rounded-lg p-6 w-40 h-24 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {client.industry}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-indigo-50 to-orange-50 opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:20px_20px]" />
          
          <div className="relative rounded-2xl p-12">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Join our network of industry leaders and innovators. Let's create the future together.
              </p>
            </div>

            {/* Process Steps with Fixed Colors */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <div className="text-orange-600">{step.icon}</div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-orange-200 to-orange-100" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-orange-600 to-indigo-600 text-white px-8 py-6 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-orange-600/20 text-gray-900 px-8 py-6 rounded-xl font-medium hover:bg-orange-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  Learn More
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;