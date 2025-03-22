'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import {
  ArrowRight, Check, Database, Cloud, Shield, Cpu, Code, Settings,
  Network, Lock, GraduationCap, Zap, Users, Globe, Smartphone,
  GitBranch, Activity, BrainCircuit, Search, ArrowUpCircle
} from 'lucide-react';

// Types
export interface SolutionFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  results?: string[];
}

export interface SolutionContent {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: SolutionFeature[];
  keyPoints: string[];
  technologies?: string[];
  caseStudy?: CaseStudy;
  image?: string;
}

interface SolutionTemplateProps {
  content: SolutionContent;
}

const iconMap = {
  Database, Cloud, Shield, Cpu, Code, Settings, Network,
  Lock, GraduationCap, Zap, Users, Globe, Smartphone, GitBranch,
  Activity, BrainCircuit, Search
} as const;

type IconName = keyof typeof iconMap;

// Geometric pattern background
const GeometricBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create geometric elements group
    const elementsGroup = new THREE.Group();
    scene.add(elementsGroup);
    
    const orangeColor = new THREE.Color('#ff712a');
    const blueColor = new THREE.Color('#4682B4');
    
    // Create diamond shapes using BufferGeometry for better performance
    const createDiamond = (size: number, color: THREE.Color, opacity: number, position: THREE.Vector3) => {
      const vertices = new Float32Array([
        0, size, 0,   // top
        size, 0, 0,   // right
        0, -size, 0,  // bottom
        -size, 0, 0,  // left
        0, 0, size,   // front
        0, 0, -size   // back
      ]);
      
      const indices = [
        0, 1, 4,  // top-right-front
        0, 4, 3,  // top-front-left
        0, 3, 5,  // top-left-back
        0, 5, 1,  // top-back-right
        2, 1, 4,  // bottom-right-front
        2, 4, 3,  // bottom-front-left
        2, 3, 5,  // bottom-left-back
        2, 5, 1   // bottom-back-right
      ];
      
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        wireframe: Math.random() > 0.5
      });
      
      const diamond = new THREE.Mesh(geometry, material);
      diamond.position.copy(position);
      diamond.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      return diamond;
    };
    
    // Create a pattern of diamonds
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 0.5 + 0.2;
      const color = i % 2 === 0 ? orangeColor : blueColor;
      const opacity = Math.random() * 0.08 + 0.02; // Very subtle opacity
      
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 5 - 15 // Push back for subtle effect
      );
      
      const diamond = createDiamond(size, color, opacity, position);
      elementsGroup.add(diamond);
    }
    
    // Add some additional subtle circles
    for (let i = 0; i < 20; i++) {
      const radius = Math.random() * 0.8 + 0.2;
      const segments = 32;
      const geometry = new THREE.CircleGeometry(radius, segments);
      
      // Alternate between orange and blue with low opacity
      const color = i % 2 === 0 ? orangeColor : blueColor;
      const material = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true, 
        opacity: Math.random() * 0.07 + 0.01,
        side: THREE.DoubleSide
      });
      
      const circle = new THREE.Mesh(geometry, material);
      
      // Position in 3D space, further back
      circle.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 5 - 20
      );
      
      // Random rotation
      circle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      elementsGroup.add(circle);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle rotation of the entire group
      elementsGroup.rotation.x += 0.0003;
      elementsGroup.rotation.y += 0.0004;
      
      renderer.render(scene, camera);
    };

    animate();

    // Window resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Mouse movement creates subtle parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      elementsGroup.rotation.x = mouseY * 0.05;
      elementsGroup.rotation.y = mouseX * 0.05;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-blue-50" />;
};

// Innovative feature card with interactive elements
const InnovativeFeatureCard: React.FC<{ feature: SolutionFeature; index: number }> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  const IconComponent = feature.icon && iconMap[feature.icon as IconName] 
    ? iconMap[feature.icon as IconName] 
    : Settings;

  const variants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 }
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring", 
        stiffness: 100 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full relative"
      style={{
        perspective: "1000px"
      }}
    >
      <div className={`h-full transition-all duration-700 transform-gpu ${isHovered ? 'scale-105' : 'scale-100'}`}>
        {/* Main card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transform-gpu">
          {/* Top accent arc */}
          <div className="w-full h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500" />
          
          <div className="p-6 flex-grow flex flex-col">
            {/* Icon with animated background */}
            <div className="mb-5 relative">
              <div className={`w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-orange-500' : ''}`}>
                <IconComponent size={24} className={`transition-colors duration-500 ${isHovered ? 'text-white' : 'text-orange-500'}`} />
              </div>
              
              {/* Animated background circle on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 rounded-full bg-orange-300"
                    style={{ 
                      transformOrigin: "center",
                      zIndex: -1
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 flex-grow">
              {feature.description}
            </p>
            
            {/* Animated learn more indicator */}
            <div className="mt-4 overflow-hidden">
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: isHovered ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="flex items-center text-orange-500 font-medium"
              >
                <span className="mr-2">Learn more</span>
                <ArrowRight size={16} />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Reflection effect */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-blue-50/30 backdrop-blur-sm transform scale-y-[-0.3] translate-y-full opacity-30 rounded-b-2xl" />
      </div>
    </motion.div>
  );
};

// Enhanced key point card with hover effect
const KeyPointCard: React.FC<{ point: string; index: number }> = ({ point, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform scale-105' : ''}`}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-blue-500" />
      <div className="p-5 flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-orange-500' : 'bg-orange-100'}`}>
            <Check className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-orange-500'}`} />
          </div>
        </div>
        <p className="text-gray-700">{point}</p>
      </div>
    </motion.div>
  );
};

// Animated tech badge with hover effects
const TechBadge: React.FC<{ tech: string; index: number }> = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 113, 42, 0.3)" }}
      className="py-2 px-4 bg-white rounded-lg border border-orange-100 shadow-sm hover:border-orange-200 transition-all duration-300"
    >
      <div className="flex items-center justify-center text-gray-700 font-medium">
        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
        {tech}
      </div>
    </motion.div>
  );
};

// Result card with animated counter
const ResultCard: React.FC<{ result: string; index: number }> = ({ result, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  
  // Extract percentage or number from the result string
  const numberMatch = result.match(/(\d+)%?/);
  const hasNumber = numberMatch && numberMatch[0];
  const displayNumber = hasNumber ? numberMatch[0] : '';
  const restText = hasNumber ? result.replace(displayNumber, '') : result;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500"
    >
      <div className="flex items-center">
        {hasNumber && (
          <div className="mr-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              className="text-3xl font-bold text-orange-500"
            >
              {displayNumber}
            </motion.span>
          </div>
        )}
        <p className="text-gray-700">{restText}</p>
      </div>
    </motion.div>
  );
};

// Main solution template
const SolutionTemplate: React.FC<SolutionTemplateProps> = ({ content }) => {
  // Element for tracking scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  return (
    <div className="relative overflow-hidden">
      {/* Geometric background */}
      {/* <GeometricBackground /> */}
      
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Hero Section with Centered Content */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-20">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          {/* Staggered reveal animation for title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              {content.title}
            </motion.h1>
            
            {/* Underline that matches service template style */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-1 bg-orange-500 mx-auto mb-6"
            />
            
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-orange-500 font-medium mb-6"
            >
              {content.subtitle}
            </motion.h2>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {content.description}
            </motion.p>
          </motion.div>
          
          {/* Abstract background graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-96 h-96 rounded-full border border-orange-200/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute w-64 h-64 rounded-full border border-blue-200/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute w-32 h-32 rounded-full border border-orange-200/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            
            {/* Animated dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-orange-500/20' : 'bg-blue-500/20'}`}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  x: Math.cos(i * Math.PI / 4) * 200, 
                  y: Math.sin(i * Math.PI / 4) * 200,
                  opacity: 0.8
                }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Overview Section with Key Points */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Overview content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-orange-100/50 rounded-full px-4 py-1.5 text-orange-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                Overview
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Solution Details</h2>
              
              <div className="prose prose-orange max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content.longDescription }}
              />
            </motion.div>
            
            {/* Key Points Grid */}
            <div className="space-y-4">
              <div className="inline-flex items-center bg-orange-100/50 rounded-full px-4 py-1.5 text-orange-600 text-sm font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                Key Highlights
              </div>
              
              <div className="grid gap-4">
                {content.keyPoints.map((point, index) => (
                  <KeyPointCard key={index} point={point} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Interactive Cards */}
      <section className="relative py-24 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-orange-100/50 rounded-full px-4 py-1.5 text-orange-600 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
              Features
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our solution enhances your business operations
            </p>
          </motion.div>
          
          {/* Innovative feature cards layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {content.features.map((feature, index) => (
              <InnovativeFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section - Floating Tags */}
      {content.technologies && (
        <section className="relative py-24 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-orange-100/50 rounded-full px-4 py-1.5 text-orange-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                Technologies
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Technologies & Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building with the latest technologies for optimal performance
              </p>
            </motion.div>
            
            {/* Tech tags cloud */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {content.technologies.map((tech, index) => (
                <TechBadge key={index} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Case Study Section - Results Cards */}
      {content.caseStudy && (
        <section className="relative py-24 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-orange-100/50 rounded-full px-4 py-1.5 text-orange-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                Case Study
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world impact of our solution
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  {content.caseStudy.title}
                </h3>
                
                <p className="text-gray-600 mb-2">
                  {content.caseStudy.description}
                </p>
              </motion.div>
              
              {/* Results grid */}
              {content.caseStudy.results && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.caseStudy.results.map((result, index) => (
                    <ResultCard key={index} result={result} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Floating "Back to Top" button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUpCircle size={24} />
        </motion.button>
      </motion.div>
      
      {/* Add CSS for perspective and 3D transforms */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default SolutionTemplate;