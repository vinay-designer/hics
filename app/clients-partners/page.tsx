'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  Handshake, Building2, Users, Code, Heart,
  Award, Globe, Shield, CheckCircle, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { typography } from "../../utils/ typography";
import Link from 'next/link';

const SmoothMarquee = ({ children, direction = 'left', speed = 25, className = '' }: { children: React.ReactNode; direction?: 'left' | 'right'; speed?: number; className?: string }) => {
  const [duplicated, setDuplicated] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      const duplicatesNeeded = Math.ceil((window.innerWidth * 2) / width) + 2;
      setDuplicated(Array(duplicatesNeeded).fill(children));
    }

    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        const duplicatesNeeded = Math.ceil((window.innerWidth * 2) / width) + 2;
        setDuplicated(Array(duplicatesNeeded).fill(children));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        ref={containerRef}
        animate={{
          x: direction === 'left' ? [-containerWidth, 0] : [0, -containerWidth],
        }}
        transition={{
          duration: containerWidth / speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex"
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="flex shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientPartnersPage = () => {
  // Partners data from the original file
  const partners = [
    {
      name: "ts",
      logo: "/page-components/t-s.jpg",
      color: "#ff712a"
    },
    {
      name: "Lumen",
      logo: "/page-components/lumen.jpg",
      color: "#ff9500"
    },
    {
      name: "capgemini",
      logo: "/page-components/capgemini.png",
      color: "#ff712a"
    },
    {
      name: "abdream",
      logo: "/page-components/abdream.png",
      color: "#ff9500"
    },
    {
      name: "infosys",
      logo: "/page-components/infosys_logo.svg.png",
      color: "#ff712a"
    },
    {
      name: "crayon-seeklogo",
      logo: "/page-components/crayon-seeklogo.png",
      color: "#ff9500"
    },
    {
      name: "tcs",
      logo: "/page-components/tcs_logo.png",
      color: "#ff712a"
    },
  ];

  // Clients data from the original file
  const clients = [
    { name: "Customer 1", logo: "/page-components/aic.jpg" },
    { name: "Customer 2", logo: "/page-components/bvh.jpg" },
    { name: "Customer 3", logo: "/page-components/dairy.jpg" },
    { name: "Customer 4", logo: "/page-components/ihis.jpg" },
    { name: "Customer 5", logo: "/page-components/sp-g.jpg" },
    { name: "Customer 6", logo: "/page-components/zp.jpg" },
    { name: "Customer 7", logo: "/page-components/saint.jpg" },
    { name: "Customer 8", logo: "/page-components/st-a.jpg" }
  ];

  // Client testimonials for the page
  const testimonials = [
    {
      quote: "HICS has been instrumental in our digital transformation journey. Their expertise in SAP Healthcare solutions has significantly improved our operational efficiency.",
      company: "Leading Hospital Group",
      position: "Chief Information Officer"
    },
    {
      quote: "The team at HICS brought both technical expertise and industry knowledge to our project, delivering results that exceeded our expectations.",
      company: "Regional Healthcare Provider",
      position: "Director of Operations"
    },
    {
      quote: "Working with HICS has transformed how we manage our IT infrastructure. Their support team is responsive, knowledgeable, and always goes the extra mile.",
      company: "Medical Research Institute",
      position: "Head of Technology"
    }
  ];

  // Success stories for the partnership section
  const successStories = [
    {
      title: "Healthcare Digital Transformation",
      description: "Implemented end-to-end SAP healthcare solutions for a leading hospital network, improving patient care coordination and operational efficiency.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Cloud Migration Excellence",
      description: "Successfully migrated critical systems to cloud infrastructure for a major pharmaceutical company, enhancing security and reducing operational costs.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Integrated Security Framework",
      description: "Developed a comprehensive cybersecurity framework for a healthcare data management company, ensuring compliance with international standards.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  // Creating partner items for the marquee
  const partnerItems = partners.map((partner, index) => (
    <div
      key={index}
      className="relative mx-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-md rounded-xl p-5 border border-orange-100 hover:border-orange-300 transition-all duration-300"
      >
        <img
          loading='lazy'
          src={partner.logo}
          alt={partner.name}
          className="w-48 h-32 object-contain"
        />
      </motion.div>
    </div>
  ));

  // Creating client items for the marquee
  const clientItems = clients.map((client, index) => (
    <div
      key={index}
      className="relative mx-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="min-w-[180px] h-20 bg-white shadow-sm rounded-xl p-4 flex items-center justify-center border border-orange-100 hover:border-orange-300 transition-all duration-300"
      >
        <img
          loading='lazy'
          src={client.logo}
          alt={client.name}
          className="h-10 w-auto object-contain"
        />
      </motion.div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated lines */}
        <motion.div
          className="absolute h-[200vh] w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent rotate-[30deg] -translate-x-1/2 left-1/4 top-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            top: ["-100vh", "100vh"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute h-[200vh] w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent rotate-[30deg] -translate-x-1/2 left-3/4 top-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            top: ["-100vh", "100vh"]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />

        {/* Moving circles */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-orange-200 opacity-30"
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
          className="absolute w-96 h-96 rounded-full border border-blue-200 opacity-30"
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

        {/* Corner gradients with enhanced visibility */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-50 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50 to-transparent opacity-80"></div>
      </div>

      {/* Rest of the component code... */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden z-10">
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
                <Handshake className="w-12 h-12 text-orange-500" />
              </div>
            </motion.div>

            <h1 className={typography.h1}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-gray-800"
              >
                Our Clients and
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`block ${typography.accent}`}
              >
                Partners
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`${typography.subtitle1} mt-6 mb-8 mx-auto max-w-3xl`}
            >
              Celebrate the collaborations that drive innovation and excellence in everything we do
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className={`${typography.body} mx-auto max-w-3xl bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-orange-200/30 shadow-sm`}
            >
              <p className="mb-4">
                Welcome to our Clients page, where we celebrate the individuals and organizations that have trusted us
                to help them achieve their goals. At our company, we believe that our success is directly linked to
                the success of our clients.
              </p>
              <p>
                We've worked with top quality technology partners and System Integrators for several years, and have
                the privilege of serving some of the elite customers in Southeast Asia. We are grateful for the trust
                and confidence that our clients place in us, and we look forward to continuing to build lasting partnerships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={typography.overline}>Our Network</span>
            <h2 className={typography.h2}>
              Technology <span className={typography.accent}>Partners</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-4"></div>
            <p className={`${typography.body} mt-6 max-w-2xl mx-auto`}>
              Collaborating with industry leaders to deliver innovative solutions that drive business value
            </p>
          </motion.div>

          {/* Partners Marquee */}
          <div className="relative py-8">
            <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            <SmoothMarquee direction="left" speed={30}>
              {partnerItems}
            </SmoothMarquee>
          </div>

          {/* Partnership Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100">
              <h3 className={typography.h3}>The Power of Strategic Partnerships</h3>
              <p className={`${typography.body} mt-4`}>
                We believe in strategic partnerships and partner ecosystem because we can form win-win alliances
                and make our customers happy with stronger engagement models. Our partnerships are built on trust,
                shared values, and a commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24 relative bg-gradient-to-b from-white to-orange-50 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={typography.overline}>Success Stories</span>
            <h2 className={typography.h2}>
              Client <span className={typography.accent}>Achievements</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-4"></div>
            <p className={`${typography.body} mt-6 max-w-2xl mx-auto`}>
              Transforming businesses through innovative technology solutions and exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white border border-orange-100 rounded-lg p-6 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center ${typography.accent}`}>
                      {story.icon}
                    </div>
                    <h3 className={typography.h4}>{story.title}</h3>
                    <p className={typography.bodySmall}>{story.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={typography.overline}>Our Clients</span>
            <h2 className={typography.h2}>
              Trusted by <span className={typography.accent}>Industry Leaders</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-4"></div>
            <p className={`${typography.body} mt-6 max-w-2xl mx-auto`}>
              Proudly serving distinguished organizations across Southeast Asia
            </p>
          </motion.div>

          {/* Clients Double Marquee */}
          <div className="space-y-12">
            <div className="relative py-4">
              <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

              <SmoothMarquee direction="left" speed={35}>
                {clientItems.slice(0, 4)}
              </SmoothMarquee>
            </div>

            <div className="relative py-4">
              <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

              <SmoothMarquee direction="right" speed={30}>
                {clientItems.slice(4)}
              </SmoothMarquee>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-orange-50 z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={typography.overline}>Client Voices</span>
            <h2 className={typography.h2}>
              What Our <span className={typography.accent}>Clients Say</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full relative">
                  <div className="absolute -top-6 left-8 text-orange-500 text-7xl opacity-20">"</div>
                  <div className="bg-white border border-orange-100 rounded-lg p-8 shadow-sm h-full relative z-10">
                    <div className="space-y-6">
                      <p className={typography.bodyLarge}>"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.company}</p>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="py-24 relative z-10 bg-gradient-to-r from-orange-50/50 to-blue-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className={typography.overline}>Our Approach</span>
            <h2 className={typography.h2}>
              Building <span className={typography.accent}>Lasting Relationships</span>
            </h2>
            <div className="h-px w-16 bg-orange-500 mx-auto mt-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-xl p-10 shadow-md">
              <div className={`space-y-6 ${typography.bodyLarge}`}>
                <p className="text-center">
                  That's why we work tirelessly to provide personalized service and tailored solutions that meet
                  the unique needs of each of our clients. Our commitment to excellence has made us a trusted
                  partner for organizations across Asia.
                </p>

                <div className="h-px w-full bg-orange-100 my-6"></div>

                <p className="text-center font-medium text-gray-700">
                  We focus on end-to-end service strategy, service design, service transition, service operations
                  and continual service improvement that is managed by certified ITIL consultants who focus only
                  on meeting customer defined service level agreements.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-6 border border-orange-200"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-orange-200">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <p>We help customers with not just implementation but by managing their systems end to end</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-6 border border-blue-200"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-blue-200">
                        <CheckCircle className="w-6 h-6 text-blue-500" />
                      </div>
                      <p>Allowing our customers to rest the worry on IT operations and focus more on their business process improvements</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-6 border border-orange-200"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-orange-200">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <p>Building strategic partnerships that create win-win alliances for all stakeholders</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-b from-orange-50 to-white z-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={typography.h2}>
              Ready to <span className={typography.accent}>Join Our Network?</span>
            </h2>
            <p className={`${typography.body} mt-6 mb-12 max-w-2xl mx-auto`}>
              If you're interested in learning more about our services or would like to discuss how we can help
              you achieve your goals, please get in touch. We look forward to exploring how we can work together.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Updated Contact Us Button with Link to Contact Page and Form Section */}
              <Link href="/contact#contactForm" passHref>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg transition-all duration-300 px-10 py-6 text-lg rounded-lg"
                >
                  <span className="flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientPartnersPage;