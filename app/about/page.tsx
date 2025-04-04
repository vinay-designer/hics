'use client';
import React from 'react';
import { motion } from "framer-motion";
import { Globe, Target, Rocket, Users, Building2, Server, Shield, Zap, Award, CheckCircle, Heart, Code, Lightbulb } from "lucide-react";
import { typography } from "../../utils/ typography";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const offerings = [
    { 
      icon: <Server className="w-6 h-6 md:w-7 md:h-7" />,
      title: "SAP Healthcare",
      description: "Comprehensive SAP healthcare implementation expertise for modern healthcare facilities"
    },
    { 
      icon: <Shield className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Cyber Security",
      description: "Advanced security solutions to protect your digital assets and infrastructure"
    },
    { 
      icon: <Globe className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Cloud Infrastructure",
      description: "Robust SAP infrastructure solutions for both public and private cloud environments"
    },
    { 
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
      title: "Microsoft Dynamics",
      description: "Cutting-edge enterprise business solutions and IoT integration services"
    }
  ];

  const industries = [
    { 
      name: "Healthcare",
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Transforming patient care with integrated health systems"
    },
    { 
      name: "Life Sciences",
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Accelerating research and development workflows"
    },
    { 
      name: "Retail",
      icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Enhancing customer experience and inventory management"
    },
    { 
      name: "Utilities",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Optimizing resource allocation and distribution"
    },
    { 
      name: "Shipping",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Streamlining global logistics and cargo operations"
    },
    { 
      name: "Logistics",
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      description: "End-to-end supply chain visibility and optimization"
    },
    { 
      name: "Transportation",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Enhancing mobility solutions and fleet management"
    },
    { 
      name: "Manufacturing",
      icon: <Server className="w-5 h-5 md:w-6 md:h-6" />,
      description: "Automating production and improving quality control"
    }
  ];

  const achievements = [
    {
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      stat: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      stat: "10+",
      label: "Deployments"
    },
    {
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
      stat: "24/7",
      label: "Support"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced background animations - modified for better mobile experience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated lines - Reduced visibility on mobile */}
        <motion.div 
          className="absolute h-[200vh] w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent rotate-[30deg] -translate-x-1/2 left-1/4 top-0 opacity-30 md:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0], // Reduced opacity for mobile
            top: ["-100vh", "100vh"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute h-[200vh] w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent rotate-[30deg] -translate-x-1/2 left-3/4 top-0 opacity-30 md:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0], // Reduced opacity for mobile
            top: ["-100vh", "100vh"]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        
        {/* Moving circles - Hidden on small screens */}
        <motion.div 
          className="hidden sm:block absolute w-64 h-64 rounded-full border border-orange-200 opacity-20 md:opacity-30"
          style={{ 
            background: "radial-gradient(circle, rgba(255,113,42,0.1) 0%, rgba(255,255,255,0) 70%)"
          }}
          initial={{ x: "-30%", y: "20%" }}
          animate={{ 
            y: ["20%", "60%", "20%"],
            x: ["-30%", "-10%", "-30%"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="hidden sm:block absolute w-96 h-96 rounded-full border border-blue-200 opacity-20 md:opacity-30"
          style={{ 
            background: "radial-gradient(circle, rgba(66,153,225,0.1) 0%, rgba(255,255,255,0) 70%)"
          }}
          initial={{ x: "70%", y: "60%" }}
          animate={{ 
            y: ["60%", "20%", "60%"],
            x: ["70%", "50%", "70%"],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating elements - Reduced for mobile */}
        {[...Array(4)].map((_, i) => { // Reduced from 8 to 4 for mobile
          const size = 5 + (i * 2); // Smaller size for mobile
          const isOrange = i % 2 === 0;
          const color = isOrange ? "#ff712a" : "#4299E1";
          const initialX = isOrange ? -30 - (i * 5) : 130 + (i * 5); // Adjusted positioning
          const initialY = 20 + (i * 5);
          
          return (
            <motion.div 
              key={`float-${i}`}
              className="absolute rounded-full opacity-10 sm:opacity-20"
              style={{ 
                width: size,
                height: size,
                border: `1px solid ${color}`,
                left: `${initialX}%`,
                top: `${initialY}%`
              }}
              animate={{ 
                y: [0, -15, 0], // Reduced movement for mobile
                x: isOrange ? [0, 10, 0] : [0, -10, 0], // Reduced movement for mobile
                opacity: [0.1, 0.2, 0.1] // Lower opacity for mobile
              }}
              transition={{ 
                duration: 10 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          );
        })}
        
        {/* Dynamic path animations - Hidden on very small screens */}
        <svg className="absolute inset-0 w-full h-full hidden xs:block">
          <motion.path
            d="M 0,100 Q 200,150 400,100 T 800,100"
            fill="none"
            stroke="#ff712a"
            strokeWidth="0.5"
            strokeOpacity="0.1" // Reduced for mobile
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.1, 0], // Reduced for mobile
              y: [300, 200, 300]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M 800,200 Q 600,250 400,200 T 0,200"
            fill="none"
            stroke="#4299E1"
            strokeWidth="0.5"
            strokeOpacity="0.1" // Reduced for mobile
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.1, 0], // Reduced for mobile
              y: [400, 500, 400]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </svg>
        
        {/* Corner gradients - Maintained but reduced */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 bg-gradient-to-bl from-orange-50 to-transparent opacity-50 sm:opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 sm:w-1/3 sm:h-1/3 bg-gradient-to-tr from-blue-50 to-transparent opacity-50 sm:opacity-80"></div>
      </div>

      {/* Hero Section - Adjusted for mobile with proper top spacing */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-24 md:pt-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className={typography.overline}>Est. 2015</span>
              <h1 className={typography.h1}>
                <span className="block text-gray-800">We make</span>
                <span className={`block ${typography.accent}`}>SAP work for you</span>
              </h1>
            </div>
            
            <p className={`${typography.subtitle1} mx-auto max-w-3xl`}>
              Leading the digital transformation in Singapore's healthcare sector and beyond, 
              delivering cutting-edge solutions for tomorrow's challenges.
            </p>
            
            <div className={`mt-4 md:mt-6 ${typography.body} mx-auto max-w-3xl`}>
              <p className="mb-4">
                At HICS, we understand that every organization faces unique challenges in today's rapidly evolving 
                technological landscape. Our team of SAP experts works closely with you to design and implement 
                solutions that address your specific needs, enhance operational efficiency, and drive innovation.
              </p>
              <p>
                From initial consultation to ongoing support, we're committed to your success at every step. 
                Our deep industry knowledge, technical expertise, and proven methodologies ensure seamless 
                integration and optimal performance of your SAP systems.
              </p>
            </div>
            
            <div className="flex justify-center pt-6 md:pt-8">
              <div className="grid grid-cols-3 gap-4 md:gap-12">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.2) }}
                  >
                    <div className={`${typography.accent} mb-2`}>{achievement.icon}</div>
                    <div>
                      <div className="text-xl md:text-2xl font-light text-gray-800">{achievement.stat}</div>
                      <div className={typography.caption}>{achievement.label}</div>
                    </div>
                  </motion.div>
                ))}
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Adjusted for mobile */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:mx-24 relative bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block">
                  <span className={typography.overline}>Our Journey</span>
                  <h2 className={typography.h2}>
                    The <span className={typography.accent}>HICS</span> Story
                  </h2>
                  <div className="h-px w-16 bg-orange-500 mt-3 md:mt-4"></div>
                </div>
                
                <div className={`space-y-3 md:space-y-4 ${typography.bodyLarge}`}>
                  <p>
                    HICS was founded in 2015 with a clear vision: to revolutionize healthcare IT in Singapore. 
                    Initially focusing on SAP healthcare implementations across public and private sector hospitals, 
                    we've grown to become a comprehensive technology solutions provider.
                  </p>
                  <p>
                    Known formally as "Healthcare IT Consultants Singapore" and fondly as "HICS", we've built our 
                    reputation on client centricity and delivery excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-4 md:gap-6"
            >
              <div className={`space-y-3 md:space-y-4 ${typography.bodyLarge}`}>
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="border-l-2 border-orange-500 pl-3 md:pl-4 py-2">
                  <h3 className={typography.h4}>Vision</h3>
                  <p className={typography.body}>
                    Empowering businesses through innovative technology solutions and exceptional service.
                  </p>
                </div>
                
                <div className="border-l-2 border-orange-500 pl-3 md:pl-4 py-2">
                  <h3 className={typography.h4}>Mission</h3>
                  <p className={typography.body}>
                    Provide reliable IT solutions that empower businesses to thrive in today's digital landscape.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Adjusted for mobile */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className={typography.overline}>What We Do</span>
            <h2 className={typography.h2}>
              Our <span className={typography.accent}>Expertise</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-3 md:mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white border border-gray-100 rounded-lg p-4 md:p-6 transition-all duration-300 shadow-sm hover:shadow">
                  <div className="space-y-3 md:space-y-4">
                    <div className={typography.accent}>
                      {offering.icon}
                    </div>
                    <h3 className={typography.h4}>{offering.title}</h3>
                    <p className={typography.bodySmall}>{offering.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Adjusted for mobile */}
      <section className="py-16 md:py-32 relative bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-16"
          >
            <div className="text-center">
              <span className={typography.overline}>Our Focus</span>
              <h2 className={typography.h2}>
                Industries <span className={typography.accent}>We Serve</span>
              </h2>
              <div className="h-px w-16 bg-orange-500 mx-auto mt-3 md:mt-4"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-1.5 md:h-2 bg-gradient-to-r from-orange-300 to-orange-500"></div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="mr-3 md:mr-4 text-orange-500 bg-orange-50 p-2 md:p-3 rounded-lg">
                      {industry.icon}
                    </div>
                    <h3 className={`${typography.h4} text-lg md:text-xl`}>{industry.name}</h3>
                  </div>
                  <p className={typography.bodySmall}>
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Adjusted for mobile */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className={typography.overline}>Why Choose Us</span>
            <h2 className={typography.h2}>
              Our <span className={typography.accent}>Value Proposition</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-3 md:mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-100 rounded-lg p-4 md:p-6 shadow-sm"
            >
              <div className="space-y-3 md:space-y-4">
                <div className={typography.accent}>
                  <Users className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={typography.h4}>Personalized Service</h3>
                <p className={typography.bodySmall}>
                  Tailored solutions and dedicated support for each client's unique needs and challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-lg p-4 md:p-6 shadow-sm"
            >
              <div className="space-y-3 md:space-y-4">
                <div className={typography.accent}>
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={typography.h4}>Industry Excellence</h3>
                <p className={typography.bodySmall}>
                  Recognized expertise in healthcare IT and enterprise solutions across Asia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-100 rounded-lg p-4 md:p-6 shadow-sm"
            >
              <div className="space-y-3 md:space-y-4">
                <div className={typography.accent}>
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={typography.h4}>Proven Track Record</h3>
                <p className={typography.bodySmall}>
                  Consistent delivery of high-quality solutions with measurable business impact.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className={`${typography.body} max-w-2xl mx-auto`}>
              At HICS, we combine technical expertise with deep industry knowledge to deliver solutions 
              that drive real business value. Our commitment to excellence has made us a trusted partner for organizations across Asia.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;