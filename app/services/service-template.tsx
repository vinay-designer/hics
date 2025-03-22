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
import { typography } from '../../utils/ typography';

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

// Enhanced ThreeJS Background with shapes
const EnhancedBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated particles using our brand colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Use our brand orange color
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#ff712a',
      transparent: true,
      opacity: 0.6
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add decorative shapes
    // Torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: '#ff712a',
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, -5);
    scene.add(torus);
    
    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: '#4682B4',
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(4, -2, -3);
    scene.add(sphere);
    
    // Icosahedron
    const icosaGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const icosaMaterial = new THREE.MeshBasicMaterial({ 
      color: '#ff712a',
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosahedron.position.set(2, 3, -6);
    scene.add(icosahedron);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      
      // Rotate shapes
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.002;
      
      sphere.rotation.x += 0.002;
      sphere.rotation.y += 0.003;
      
      icosahedron.rotation.x += 0.001;
      icosahedron.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Mouse parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      torus.position.x = -3 + mouseX * 0.5;
      torus.position.y = 2 + mouseY * 0.5;
      
      sphere.position.x = 4 + mouseX * 0.3;
      sphere.position.y = -2 + mouseY * 0.3;
      
      icosahedron.position.x = 2 + mouseX * 0.2;
      icosahedron.position.y = 3 + mouseY * 0.2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

// Enhanced Scroll Progress Indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Decorative floating shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orange circle */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-orange-500/10"
        style={{ top: '10%', right: '5%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blue circle */}
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-blue-500/10"
        style={{ bottom: '15%', left: '10%' }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Orange donut */}
      <motion.div 
        className="absolute w-40 h-40 rounded-full border-[20px] border-orange-500/10"
        style={{ top: '30%', left: '15%' }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blue square */}
      <motion.div 
        className="absolute w-32 h-32 bg-blue-500/10 rounded-xl"
        style={{ bottom: '25%', right: '15%' }}
        animate={{
          rotate: [0, 20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,113,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,113,42,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '4rem 4rem' }}></div>
    </div>
  );
};

// Enhanced Feature Card component
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
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl opacity-0 group-hover:opacity-70 blur-lg transition-all duration-300" />
      <div className="relative h-full bg-white/90 border border-orange-200/30 rounded-2xl p-8 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full transform translate-x-16 -translate-y-16" />
        <div className="space-y-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300"
          >
            <IconComponent size={28} />
          </motion.div>
          <h3 className={`${typography.h3} group-hover:text-orange-500 transition-colors duration-300`}>{feature.title}</h3>
          <p className={`${typography.body} text-gray-600`}>{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ content, category }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 text-gray-800 overflow-hidden">
      <EnhancedBackground />
      <FloatingShapes />
      <ScrollProgress />

      {/* Hero Section - Single Column Centered */}
      <section className="relative min-h-screen flex items-center justify-center py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10 max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="px-6 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium uppercase tracking-wider">
                {category}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${typography.h1} text-5xl md:text-7xl`}
            >
              {content.title}
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-orange-500 mt-6 mb-6 mx-auto"
            />
            
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-2xl ${typography.accent} mb-8`}
            >
              {content.subtitle}
            </motion.h2>
            
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${typography.bodyLarge} max-w-3xl mx-auto mb-12 text-gray-600`}
            >
              {content.description}
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-8 py-6 text-lg">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <motion.section className="py-24 relative" style={{ y }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="w-20 h-1 bg-orange-500 mb-6" />
                <h2 className={typography.h2}>Our Approach</h2>
                <div
                  className={`prose prose-orange max-w-none ${typography.body} text-gray-600 mt-6`}
                  dangerouslySetInnerHTML={{ __html: content.longDescription }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-200/30 p-8 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-blue-100/50 rounded-2xl" />
              <div className="relative z-10">
                <h3 className={`${typography.h3} text-orange-500 mb-6`}>Key Highlights</h3>
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
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-orange-500" />
                      </div>
                      <p className={`${typography.body} text-gray-700`}>{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 relative bg-gradient-to-b from-white/80 to-blue-50/80">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-[30px] border-orange-200/50 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border-[40px] border-blue-200/50 transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto" />
            <h2 className={typography.h2}>Our Services</h2>
            <p className={`${typography.bodyLarge} text-gray-600 max-w-3xl mx-auto mt-4`}>
              Discover how our expert solutions can transform your business and drive success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {content.technologies && (
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto" />
              <h2 className={typography.h2}>Technologies & Tools</h2>
              <p className={`${typography.bodyLarge} text-gray-600 max-w-3xl mx-auto mt-4`}>
                We leverage cutting-edge technologies to deliver exceptional results
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {content.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(255, 113, 42, 0.4)"
                  }}
                  className="px-6 py-3 bg-white rounded-full border border-orange-200 text-orange-600 shadow-sm hover:bg-orange-50 transition-all duration-300"
                >
                  <span className="font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {content.caseStudy && (
        <section className="py-24 relative bg-gradient-to-b from-blue-50/80 to-white/80">
          <div className="absolute inset-0 overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/50 rounded-xl transform rotate-15" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-100/50 rounded-full" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto" />
              <h2 className={typography.h2}>Case Study</h2>
              <p className={`${typography.bodyLarge} text-gray-600 max-w-3xl mx-auto mt-4`}>
                See how we've helped our clients achieve exceptional results
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/api/placeholder/600/800"
                  alt="Case study visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm border border-orange-200/30 rounded-2xl p-8 shadow-xl"
              >
                <h3 className={`${typography.h3} text-orange-500 mb-6`}>{content.caseStudy.title}</h3>
                <p className={`${typography.body} text-gray-600 mb-8`}>
                  {content.caseStudy.description}
                </p>
                
                {content.caseStudy.results && (
                  <div>
                    <h4 className={`${typography.h4} mb-4`}>Key Results</h4>
                    <div className="space-y-4">
                      {content.caseStudy.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <span className={typography.body}>{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <motion.div 
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full"
          />
          <motion.div 
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 border border-orange-200/30 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-blue-100/50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full transform translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full transform -translate-x-1/4 translate-y-1/4" />
            
            <div className="relative z-10">
              <h2 className={`${typography.h2} text-orange-500 mb-6`}>Ready to Transform Your Business?</h2>
              <p className={`${typography.bodyLarge} text-gray-600 mb-10 max-w-3xl mx-auto`}>
                Let's collaborate to create innovative solutions that drive real results.
                Our expert team is ready to help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-8 py-6 text-lg"
                >
                  <span>Schedule a Demo</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Floating scroll-to-top button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button
          className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpCircle size={24} />
        </Button>
      </motion.div>

      {/* Add decorative grid pattern for background */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255, 113, 42, 0.15) 2px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default ServiceTemplate;