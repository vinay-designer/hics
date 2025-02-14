import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { Rocket, Zap, Target, Laptop } from "lucide-react";
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      lines: { line: THREE.Line; initialRotation: { x: number; y: number; z: number }; rotationSpeed: { x: number; y: number; z: number } }[] = [];
    let animationFrameId: number;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create multiple line geometries
      for (let i = 0; i < 50; i++) {
        const geometry = new THREE.BufferGeometry();
        const points = [];

        // Create curved lines
        for (let j = 0; j < 100; j++) {
          const x = (Math.random() - 0.5) * 20;
          const y = (Math.random() - 0.5) * 20;
          const z = (Math.random() - 0.5) * 20;
          points.push(new THREE.Vector3(x, y, z));
        }

        geometry.setFromPoints(points);

        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color(1, 0.44, 0.16), // #ff712a
          transparent: true,
          opacity: 0.3 + Math.random() * 0.5
        });

        const line = new THREE.Line(geometry, material);
        lines.push({
          line,
          initialRotation: {
            x: Math.random() * Math.PI,
            y: Math.random() * Math.PI,
            z: Math.random() * Math.PI
          },
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.002,
            y: (Math.random() - 0.5) * 0.002,
            z: (Math.random() - 0.5) * 0.002
          }
        });
        scene.add(line);
      }

      camera.position.z = 30;
    };

    interface MouseMoveEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (event: MouseMoveEvent): void => {
      const mouseX: number = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY: number = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      lines.forEach((lineObj) => {
        lineObj.line.rotation.x += lineObj.rotationSpeed.x;
        lineObj.line.rotation.y += lineObj.rotationSpeed.y;
        lineObj.line.rotation.z += lineObj.rotationSpeed.z;
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.3 }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroWithFeatures = () => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Next-Gen Solutions",
      description: "Pushing boundaries with innovative tech",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for peak performance",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Focus",
      description: "Targeted solutions for your needs",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Smart Systems",
      description: "Intelligent automated workflows",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundAnimation />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />

      <div className="container mx-auto px-4 mt-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-20 space-y-8"
          >
            <div className="space-y-2">
              <div className="text-5xl md:text-7xl font-bold text-white mb-4">
                <AnimatedText text="POWER UP" delay={0.2} />
              </div>
              <div className="space-y-0">
                <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff712a] to-[#ff9500] leading-tight">
                  <AnimatedText text="YOUR BUSINESS" delay={0.4} />
                </div>
                <div className="text-2xl font-light text-[#ffa763] leading-tight mt-4">
                  <AnimatedText text="Innovate • Transform • Succeed" delay={0.6} />
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-lg max-w-xl"
            >
              Break through limitations with our cutting-edge solutions.
              We transform businesses into industry leaders through
              innovative technology and strategic implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-[#ff712a] to-[#ff9500] hover:from-[#ff9500] hover:to-[#ff712a] text-white px-8 py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105"
              >
                GET STARTED
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#ff712a] text-[#ff712a] hover:bg-[#ff712a] hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                EXPLORE MORE
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative pt-20"
          >
            <div className="relative z-10">
              <div className="w-full h-[500px] overflow-hidden relative rounded-lg">
                <div className="absolute inset-0 bg-black/40" />
                <img
                  src="/api/placeholder/800/800"
                  alt="Future Technology"
                  className="relative z-10 w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                {/* Animated corners */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-0 left-0 h-px bg-[#ff712a]"
                />
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 64, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute top-0 left-0 w-px bg-[#ff712a]"
                />
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute bottom-0 right-0 h-px bg-[#ff712a]"
                />
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 64, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="absolute bottom-0 right-0 w-px bg-[#ff712a]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-1 relative z-20 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="relative group transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-black/40 backdrop-blur-sm p-8 relative z-10 h-full border-r border-[#ff712a]/10 last:border-r-0 group-hover:bg-black/60 transition-all duration-300">
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative z-10 w-full h-full flex items-center justify-center text-white bg-black/40 rounded-lg p-3 group-hover:text-[#ff712a] transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-white text-center group-hover:text-[#ff712a] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroWithFeatures;