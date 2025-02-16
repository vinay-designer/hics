'use client';
import React from 'react';
import { motion } from "framer-motion";
import { Globe, Target, Rocket, Users, Building2, Server, Shield, Zap, Award, Clock, CheckCircle, Heart, Code, Lightbulb } from "lucide-react";
import AboutBackground from '../../animations/about/about-background';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const underlineAnimation = {
    initial: { width: "0%" },
    animate: { width: "100%" },
    transition: { duration: 0.8, delay: 0.2 }
  };

  const offerings = [
    { 
      icon: <Server className="w-8 h-8" />,
      title: "SAP Healthcare",
      description: "Comprehensive SAP healthcare implementation expertise for modern healthcare facilities"
    },
    { 
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber Security",
      description: "Advanced security solutions to protect your digital assets and infrastructure"
    },
    { 
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Robust SAP infrastructure solutions for both public and private cloud environments"
    },
    { 
      icon: <Zap className="w-8 h-8" />,
      title: "Microsoft Dynamics",
      description: "Cutting-edge enterprise business solutions and IoT integration services"
    }
  ];

  const industries = [
    "Healthcare", "Life Sciences", "Retail", "Utilities", 
    "Shipping", "Logistics", "Transportation", "Manufacturing"
  ];

  const achievements = [
    {
      icon: <Heart className="w-6 h-6" />,
      stat: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Code className="w-6 h-6" />,
      stat: "500+",
      label: "Deployments"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      stat: "24/7",
      label: "Support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AboutBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-7xl font-bold mb-6">
              <span className="block">Innovating</span>
              <span className="block text-[#ff712a] relative">
                Since 2015
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Leading the digital transformation in Singapore's healthcare sector and beyond, 
              delivering cutting-edge solutions for tomorrow's challenges.
            </p>
            <div className="flex justify-center gap-8 text-gray-300 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff712a] mb-2">8+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff712a] mb-2">100+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff712a] mb-2">50+</div>
                <div>Happy Clients</div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-4"
            >
              <button className="px-8 py-3 bg-[#ff712a] text-white rounded-lg hover:bg-[#ff9500] transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-[#ff712a] text-white rounded-lg hover:bg-[#ff712a]/10 transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-start"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="space-y-6 text-white">
              <div className="relative inline-block">
                <h2 className="text-5xl font-bold text-[#ff712a]">
                  Our Story
                </h2>
                <motion.div
                  variants={underlineAnimation}
                  className="h-1 bg-[#ff712a] mt-2"
                />
              </div>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  HICS was founded in 2015 with a clear vision: to revolutionize healthcare IT in Singapore. 
                  Initially focusing on SAP healthcare implementations across public and private sector hospitals, 
                  we've grown to become a comprehensive technology solutions provider.
                </p>
                <p>
                  Known formally as "Healthcare IT Consultants Singapore" and fondly as "HICS", we've built our 
                  reputation on the pillars of client centricity and delivery excellence.
                </p>
                <p>
                  Today, our expertise spans across SAP Healthcare, cloud infrastructure, cybersecurity, and 
                  innovative IoT solutions. We've successfully expanded our services while maintaining our core 
                  commitment to healthcare excellence.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and a deep 
                  understanding of the evolving healthcare landscape. We're proud to have played a crucial role 
                  in Singapore's healthcare digital transformation journey.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 gap-6"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-4 text-white"
                >
                  <Target className="w-12 h-12 text-[#ff712a]" />
                  <h3 className="text-2xl font-bold">Vision</h3>
                  <p className="text-gray-300">
                    "Empowering businesses through innovative technology solutions, delivering exceptional customer service, 
                    and fostering long-term partnerships for growth and success."
                  </p>
                </motion.div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-4 text-white"
                >
                  <Rocket className="w-12 h-12 text-[#ff712a]" />
                  <h3 className="text-2xl font-bold">Mission</h3>
                  <p className="text-gray-300">
                    "Our mission is to provide innovative and reliable IT solutions that empower businesses to achieve 
                    their goals and thrive in today's digital landscape."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ff712a]">{achievement.stat}</div>
                    <div className="text-gray-300">{achievement.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 relative bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-[#ff712a]">
                Our Expertise
              </h2>
              <motion.div
                variants={underlineAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="h-1 bg-[#ff712a] mt-2"
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6
                            transition-all duration-300">
                  <div className="space-y-4 text-white">
                    <div className="w-16 h-16 rounded-lg bg-[#ff712a]/10 
                                flex items-center justify-center text-[#ff712a] group-hover:text-[#ff9500]">
                      {offering.icon}
                    </div>
                    <h3 className="text-xl font-bold">{offering.title}</h3>
                    <p className="text-gray-300">{offering.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-[#ff712a]">
                Industries We Serve
              </h2>
              <motion.div
                variants={underlineAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="h-1 bg-[#ff712a] mt-2"
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6
                            transition-all duration-300">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-lg bg-[#ff712a]/10 
                                flex items-center justify-center text-[#ff712a] group-hover:text-[#ff9500]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-semibold group-hover:text-[#ff712a]">
                      {industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-[#ff712a]">
                Our Value Proposition
              </h2>
              <motion.div
                variants={underlineAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="h-1 bg-[#ff712a] mt-2"
              />
            </div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We deliver exceptional value through our commitment to innovation, 
              expertise, and customer success.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeIn}
              className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6"
            >
              <div className="space-y-4 text-white">
                <Users className="w-12 h-12 text-[#ff712a]" />
                <h3 className="text-xl font-bold">Personalized Service</h3>
                <p className="text-gray-300">
                  Tailored solutions and dedicated support for each client's unique needs and challenges. 
                  Our team works closely with you to understand your specific requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6"
            >
              <div className="space-y-4 text-white">
                <Award className="w-12 h-12 text-[#ff712a]" />
                <h3 className="text-xl font-bold">Industry Excellence</h3>
                <p className="text-gray-300">
                  Recognized expertise in healthcare IT and enterprise solutions across Asia. 
                  Our track record speaks to our commitment to excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6"
            >
              <div className="space-y-4 text-white">
                <CheckCircle className="w-12 h-12 text-[#ff712a]" />
                <h3 className="text-xl font-bold">Proven Track Record</h3>
                <p className="text-gray-300">
                  Consistent delivery of high-quality solutions with measurable business impact. 
                  We pride ourselves on delivering results that exceed expectations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Value Proposition Content */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              At HICS, we combine technical expertise with deep industry knowledge to deliver solutions 
              that drive real business value. Our commitment to excellence, innovation, and customer 
              success has made us a trusted partner for organizations across Asia.
            </p>
            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-[#ff712a] text-white rounded-lg hover:bg-[#ff9500] transition-colors"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border border-[#ff712a] text-white rounded-lg hover:bg-[#ff712a]/10 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;