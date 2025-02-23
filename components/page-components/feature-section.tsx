import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Shield } from 'lucide-react';

const features = [
  {
    title: "Digital Solutions",
    description: "Transform your business with cutting-edge digital solutions that drive innovation and growth.",
    icon: Brain,
    bgColor: "bg-blue-100",
  },
  {
    title: "Smart Analytics",
    description: "Leverage advanced data analytics to uncover valuable insights and make data-driven decisions.",
    icon: BarChart,
    bgColor: "bg-green-100",
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets with state-of-the-art security measures and 24/7 monitoring.",
    icon: Shield,
    bgColor: "bg-orange-100",
  },
];

const BoldFeatures = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className={`${feature.bgColor} p-8 rounded-xl flex items-center space-x-6`}
            >
              <feature.icon className="w-14 h-14 text-gray-900 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoldFeatures;