import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FileText, Eye, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HealthcareSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const solutions = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "DIGITIZE AND SECURE YOUR DOCUMENTS",
      description: "we have helped many customers to digitize their physical documents by implementing our specialized electronic form solutions with tailored workflows and digital signature capabilities.",
      image: "/page-components/healthcare1.webp",
      color: "#6366F1"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "QUEUE MANAGEMENT SYSTEM",
      description: "Improve the experience of your patients by cutting down the queues at registration counters, Nursing stations, Consultations Rooms, Lab, Radiology and Pharmacies by choosing our intelligent QMS solutions.",
      image: "/page-components/query.jpg",
      color: "#2DD4BF"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "INNOVATE TECHNOLOGY",
      description: "Streamline your operational processes and enable your medical & operational team to enhance the patient care and minimize the risk of human errors by introducing the cutting-edge technologies",
      image: "/page-components/tech.jpg",
      color: "#ff712a"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Unique Background Design */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute left-0 top-2/4 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full">
              Healthcare Solutions
            </span>
            <h2 className="text-7xl font-bold tracking-tight">
              <div className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#ff712a] via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Healthcare
                </span>
              </div>
              <span className="block text-4xl text-gray-600 mt-4 font-normal">through HICS</span>
            </h2>
          </motion.div>
        </div>

        {/* Solutions Section */}
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-4 rounded-2xl"
                      style={{ backgroundColor: solution.color }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        loading='lazy'
                        height={500}
                        width={800}
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-8`}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <div className="text-2xl" style={{ color: solution.color }}>
                      {solution.icon}
                    </div>
                  </div>

                  <div>
                    <motion.h3 
                      className="text-3xl font-bold mb-6 text-gray-900"
                      style={{ color: solution.color }}
                    >
                      {solution.title}
                    </motion.h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <Button
                    className="group relative overflow-hidden rounded-full px-8 py-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: solution.color,
                      color: 'white'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More 
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(90deg, ${solution.color}, ${solution.color}dd)`
                      }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;