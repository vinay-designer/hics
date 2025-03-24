'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Building2, Globe, 
  Briefcase, Users, Code, Heart, MessageSquare,
  Send, CheckCircle, ArrowRight, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { typography } from '../../utils/ typography';
import ContactBackground from '../../animations/contact/contact-background';
import ContactForm from './contact-form';

const ContactPage = () => {
  const [selectedOffice, setSelectedOffice] = useState<'singapore' | 'philippines' | 'india'>('singapore');
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    console.log('Form submitted successfully!');
    // You can add additional logic here after successful form submission
  };

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === '#contactForm') {
      // Scroll to the form section
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const offices = {
    singapore: {
      name: "Singapore Headquarters",
      address: "9 Tampines Grande, 02-11",
      area: "Asia Green, Singapore 528735",
      phone: "+65 6932 2988",
      email: "sg@hics.com",
      coordinates: {
        lat: 1.3522,
        lng: 103.9454
      },
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      teams: ["Technology Solutions", "Healthcare IT", "Cloud Services"]
    },
    philippines: {
      name: "Philippines Office",
      address: "30th Floor Yuchengco Tower, RCBC Plaza",
      area: "6819 Ayala Avenue, Makati City",
      phone: "+63 9178767714",
      email: "ph@hics.com",
      coordinates: {
        lat: 14.5577,
        lng: 121.0150
      },
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      teams: ["System Integration", "Support Services"]
    },
    india: {
      name: "India Office",
      address: "Jain Sadguru Images Capital Park, 502B",
      area: "Capital Pk Rd, Madhapur, Hyderabad, Telangana 500081",
      phone: "+91 9063427434",
      email: "in@hics.com",
      coordinates: {
        lat: 17.4482,
        lng: 78.3874
      },
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      teams: ["Enterprise Solutions", "Digital Transformation"]
    }
  };

  const departments = [
    {
      name: "Technology Solutions",
      description: "For inquiries about our enterprise technology solutions and implementations",
      email: "info@hics.com.sg",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Healthcare IT",
      description: "Specialized healthcare technology solutions and consulting",
      email: "careers@hics.com.sg",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Career Opportunities",
      description: "Join our team of innovators and technology experts",
      email: "info@hics.com.sg",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      name: "Partnership Inquiries",
      description: "Explore strategic partnership opportunities",
      email: "info@hics.com.sg",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const careerPerks = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Work with international clients and partners across Southeast Asia"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Cutting-edge Tech",
      description: "Access to the latest technologies and continuous learning opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Join a diverse team of passionate technology professionals"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and comprehensive benefits package"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success. We're committed to delivering exceptional value and results."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through continuous learning and development opportunities."
    },
    {
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and fostering a supportive, inclusive environment."
    }
  ];

  // Google Maps API Key - Replace with your actual key
  const googleMapsApiKey = "AIzaSyDFL1JO3oGUm1zSTv70TIr4TFBHvl34RvQ";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        {/* Three.js Background */}
        <div className="absolute inset-0 z-0">
          <ContactBackground />
        </div>
        
        {/* Lighter, more transparent overlay to let animation show through better */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/40 z-1" />
        
        {/* Additional animated elements for hero section */}
        <div className="absolute inset-0 overflow-hidden z-1 pointer-events-none">
          {/* Large gradient orbs */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent blur-3xl"
          />
          
          <motion.div
            animate={{
              y: [20, -20, 20],
              scale: [1.05, 1, 1.05],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 left-[20%] w-96 h-96 rounded-full bg-gradient-to-tr from-blue-300/20 to-transparent blur-3xl"
          />
          
          {/* Animated rings */}
          <div className="absolute left-[10%] top-[30%]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-40 h-40 rounded-full border-2 border-orange-200/20 relative"
            >
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500/40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          <div className="absolute right-[15%] bottom-[20%]">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-64 h-64 rounded-full border border-blue-200/20 relative"
            >
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/40"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          {/* Floating particles */}
          {Array.from({ length: 8 }).map((_, idx) => (
            <motion.div
              key={`particle-${idx}`}
              className="absolute rounded-full"
              style={{
                width: 4 + (idx % 4) * 2,
                height: 4 + (idx % 4) * 2,
                backgroundColor: idx % 2 === 0 ? '#ff712a' : '#4299E1',
                opacity: 0.4,
                left: `${20 + (idx * 8)}%`,
                top: `${15 + ((idx * 7) % 50)}%`
              }}
              animate={{
                y: [0, -30, 0],
                x: idx % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 10 + idx * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5
              }}
            />
          ))}
          
          {/* Animated lines/trails */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ 
              x: "200%", 
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 7,
              ease: "easeOut"
            }}
            className="absolute top-1/4 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{ transform: "rotate(-30deg)" }}
          />
          
          <motion.div
            initial={{ x: "200%", opacity: 0 }}
            animate={{ 
              x: "-100%", 
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 9,
              ease: "easeOut",
              delay: 3
            }}
            className="absolute bottom-1/3 w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{ transform: "rotate(20deg)" }}
          />
          
          {/* Corner accent gradients */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Decorative Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl blur-xl opacity-30" />
              <div className="relative h-full bg-white/90 rounded-3xl p-6 backdrop-blur-xl border border-orange-300/30 flex items-center justify-center shadow-md">
                <MessageSquare className="w-12 h-12 text-orange-500" />
              </div>
            </motion.div>

            <h1 className={typography.h1}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-gray-800"
              >
                Let's Build Something
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`block ${typography.accent}`}
              >
                Extraordinary
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`${typography.bodyLarge} mt-6 mb-12`}
            >
              Join us in our mission to transform healthcare technology across Southeast Asia. 
              Whether you're looking to partner, explore career opportunities, or discuss your 
              next project, we're here to help you succeed.
            </motion.p>

            {/* Minimal Magic Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center mt-8"
            >
              <div className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-orange-300/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <button 
                  onClick={scrollToForm}
                  className="relative px-10 py-4 rounded-full border border-orange-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-gray-800">
                    <Send className="w-5 h-5 text-orange-500 group-hover:translate-y-[-2px] transition-transform duration-500" />
                    <span className="font-medium">Message Us</span>
                    <motion.div
                      animate={{
                        y: [0, 2, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    </motion.div>
                  </div>
                  
                  {/* Minimal underline animation */}
                  <motion.div 
                    className="absolute bottom-3 left-1/2 h-px bg-orange-500"
                    initial={{ width: 0, x: "-50%" }}
                    whileHover={{ width: "50%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-24 relative bg-blue-50/50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="bg-orange-100 px-6 py-2 rounded-full border border-orange-200">
                <h3 className={`${typography.overline} ${typography.accent}`}>OUR LOCATIONS</h3>
              </div>
            </div>
            
            <h2 className={typography.h2}>
              <span className="text-gray-800">Visit Our</span>
              <span className={typography.accent}> Offices</span>
            </h2>
            
            <p className={`${typography.body} mt-6 max-w-2xl mx-auto`}>
              With offices strategically located across Southeast Asia, we're well-positioned 
              to serve our clients and partners throughout the region.
            </p>
          </motion.div>

          {/* Office Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(offices).map(([key, office]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
                onClick={() => setSelectedOffice(key as 'singapore' | 'philippines' | 'india')}
              >
                <div className={`h-full bg-white/80 backdrop-blur-sm border rounded-lg p-6 cursor-pointer 
                              transition-all duration-300 ${
                                selectedOffice === key 
                                  ? 'border-orange-500 shadow-md' 
                                  : 'border-orange-200/30 hover:border-orange-500 hover:shadow-md'
                              }`}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`${typography.h4} group-hover:text-orange-500 
                                   transition-colors`}>{office.name}</h3>
                        <p className={typography.caption}>{office.area}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-orange-100 flex items-center 
                                   justify-center text-orange-500 group-hover:scale-110 
                                   transition-transform duration-300 ${
                                     selectedOffice === key ? 'scale-110' : ''
                                   }`}>
                        <Building2 className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        {office.address}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-orange-500" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-orange-500" />
                        {office.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {office.hours}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-sm font-semibold ${typography.accent}`}>Teams</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.teams.map((team, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-orange-50 border border-orange-200 
                                     rounded-full text-gray-600"
                          >
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 border border-gray-800 rounded-xl overflow-hidden">
              {/* Standard Google Maps iframe using satellite view */}
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${offices[selectedOffice].address.replace(/ /g, "+")},+${offices[selectedOffice].area.replace(/ /g, "+")}&zoom=16&maptype=satellite`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className={typography.h2}>
                  <span className={typography.accent}>Get in Touch</span>
                </h2>
                <p className={typography.body}>
                  Ready to start your digital transformation journey? Fill out the form 
                  below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Replace the old form with the new ContactForm component */}
              <ContactForm onSuccess={handleFormSuccess} />
            </motion.div>

            {/* Department Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className={typography.h2}>
                  <span className="text-gray-800">Our</span>
                  <span className={typography.accent}> Departments</span>
                </h2>
                <p className={typography.body}>
                  Get in touch with the right team to help you achieve your goals.
                </p>
              </div>

              <div className="grid gap-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-orange-200/30 
                                 rounded-lg p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center 
                                     justify-center text-orange-500 group-hover:scale-110 
                                     transition-transform duration-300">
                          {dept.icon}
                        </div>
                        <div>
                          <h3 className={`${typography.h4} group-hover:text-orange-500 
                                     transition-colors`}>{dept.name}</h3>
                          <p className={`${typography.bodySmall} mt-1`}>{dept.description}</p>
                          <a
                            href={`mailto:${dept.email}`}
                            className="text-orange-500 text-sm mt-2 inline-block hover:underline"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;