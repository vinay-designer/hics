import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FileText, Eye, Sparkles } from 'lucide-react';
import TransformBackground from '@/animations/homepage/transform-background';
import Image from 'next/image';

const HealthcareSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const solutions = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "DIGITIZE AND SECURE YOUR DOCUMENTS",
      description: "we have helped many customers to digitize their physical documents by implementing our specialized electronic form solutions with tailored workflows and digital signature capabilities.",
      image: "/page-components/healthcare1.webp",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "QUEUE MANAGEMENT SYSTEM",
      description: "Improve the experience of your patients by cutting down the queues at registration counters, Nursing stations, Consultations Rooms, Lab, Radiology and Pharmacies by choosing our intelligent QMS solutions which can be seamlessly integrated to any HICS system.",
      image: "/page-components/query.jpg",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "INNOVATE TECHNOLOGY",
      description: "Streamline your operational processes and enable your medical & operational team to enhance the patient care and minimize the risk of human errors by introducing the cutting-edge technologies",
      image: "/page-components/tech.jpg",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <TransformBackground key="healthcare-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <h2 className="text-8xl font-bold">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                  Healthcare
                </span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{
                    transform: `translateX(${(mousePosition.x / window.innerWidth) * 100 - 50}%)`,
                    transition: 'transform 0.2s',
                  }}
                />
              </span>
              <span className="block text-white mt-2">through HICS</span>
            </h2>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
              <p className="text-[#ffa763] text-xl">Next-gen healthcare solutions</p>
              <div className="h-px w-20 bg-gradient-to-r from-[#ff9500] to-[#ff712a]" />
            </div>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Side */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#ff712a] to-[#ff9500] p-[1px]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center text-[#ff712a]">
                        {solution.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {solution.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {solution.description}
                    </p>

                    <Button
                      variant="outline"
                      className="border-[#ff712a] text-[#ff712a] hover:bg-[#ff712a] hover:text-white transition-all duration-300"
                    >
                      Read More
                    </Button>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <motion.div 
                    className="relative rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-20`} />
                    <Image
                      loading='lazy'
                      height={400}
                      width={100}
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-[400px] object-cover"
                    />
                    
                    {/* Animated borders */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff712a] to-[#ff9500]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-[#ff9500] to-[#ff712a]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;