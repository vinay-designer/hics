'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Link from 'next/link';
import * as THREE from 'three';
import {
  ArrowRight, Check, Server, Shield, Database, Cloud,
  Cpu, Code, Settings, Network, Lock, GraduationCap,
  MoveRight, Zap, Users, ArrowUpCircle, ChevronRight,
  ArrowUpRight, BrainCircuit, Clock, Globe, Smartphone,
  GitBranch, Activity, CheckSquare, AlertTriangle, 
  RefreshCw, ClipboardList, ClipboardCheck, Search,
  HelpCircle, Key, Play, Briefcase, AppWindow,
  BarChart, Download, LineChart, UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types
export interface ServiceFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  results?: string[];
}

export interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  keyPoints: string[];
  technologies?: string[];
  caseStudy?: CaseStudy;
  image?: string;
}

interface ServiceTemplateProps {
  content: ServiceContent;
  category: string;
}

const iconMap = {
  Database, Cloud, Shield, Cpu, Code, Settings, Network,
  Lock, GraduationCap, MoveRight, Zap, Users, Server,
  ArrowRight, ArrowUpCircle, ChevronRight, ArrowUpRight,
  BrainCircuit, Clock, Globe, Smartphone, GitBranch,
  Activity, CheckSquare, AlertTriangle, RefreshCw,
  ClipboardList, ClipboardCheck, Search, HelpCircle,
  Key, Play, Briefcase, AppWindow, BarChart,
  Download, LineChart, UserPlus,
} as const;

type IconName = keyof typeof iconMap;

// Three.js Background Component
const AnimatedBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#ff712a',
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#ff712a] origin-left z-50"
      style={{ scaleX }}
    />
  );
};

interface FeatureCardProps {
  feature: ServiceFeature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const IconComponent = feature.icon && iconMap[feature.icon as IconName] 
    ? iconMap[feature.icon as IconName] 
    : Settings;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateZ: 1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff712a]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-full bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff712a]/5 rounded-full transform translate-x-16 -translate-y-16" />
        <div className="space-y-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a] group-hover:bg-[#ff712a]/20"
          >
            <IconComponent size={24} />
          </motion.div>
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ content, category }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <AnimatedBackground />
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
              <motion.h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl font-bold mb-6"
              >
                {content.title}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-[#ff712a] mt-4 mx-auto max-w-[200px]"
                />
              </motion.h1>
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl text-[#ff712a] mb-6"
              >
                {content.subtitle}
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                {content.description}
              </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <motion.section className="py-16 relative" style={{ y }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden"
            >
              <img
                src={content.image}
                alt="Service details"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff712a]/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: content.longDescription }}
              />

              <div className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
                <div className="space-y-4">
                  {content.keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <Check className="w-6 h-6 text-[#ff712a] mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 relative bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-[#ff712a] mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {content.technologies && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Technologies & Tools</h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-[#ff712a] mx-auto"
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 113, 42, 0.3)"
                  }}
                  className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-4 text-center hover:border-[#ff712a]/30 transition-all duration-300"
                >
                  <span className="text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {content.caseStudy && (
        <section className="py-16 relative bg-black/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src="/api/placeholder/700/500"
                  alt="Case study visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff712a]/5 to-transparent" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Case Study</h2>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#ff712a]">
                      {content.caseStudy.title}
                    </h3>
                    <p className="text-gray-300">
                      {content.caseStudy.description}
                    </p>
                    {content.caseStudy.results && (
                      <div className="mt-6 space-y-2">
                        <h4 className="text-xl font-bold">Key Results</h4>
                        <ul className="space-y-2">
                          {content.caseStudy.results.map((result, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="flex-shrink-0"
                              >
                                <ArrowRight className="w-5 h-5 text-[#ff712a] mt-1" />
                              </motion.div>
                              <span className="text-gray-300">{result}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Call to Action Section with Image Background */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#ff712a]/10 to-transparent rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#ff9500]/10 to-transparent rounded-full"
          />
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/api/placeholder/1920/1080"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                Ready to Get Started?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Contact us today to learn more about how we can help your organization
              achieve its goals with our {content.title} solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Primary CTA Button */}
              <Button
                asChild
                className="group px-8 py-6 bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                         hover:from-[#ff9500] hover:to-[#ff712a] transition-all 
                         duration-300 flex items-center gap-2 text-lg relative
                         overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>

              {/* Secondary CTA Button */}
              <Button
                asChild
                variant="outline"
                className="group px-8 py-6 border-[#ff712a] text-white 
                         hover:bg-[#ff712a]/10 transition-all duration-300 
                         flex items-center gap-2 text-lg relative
                         overflow-hidden"
              >
                <Link href="/about">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff712a]/0 to-[#ff712a]/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-[#ff712a] via-[#ff9500] to-[#ff712a]" />
    </div>
  );
};

export default ServiceTemplate;