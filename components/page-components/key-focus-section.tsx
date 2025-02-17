'use client'
import React, { useState, useEffect } from 'react';
import { Monitor, Cloud, Signal, Users, ArrowUpRight } from 'lucide-react';
import TransformBackground from '@/animations/homepage/transform-background';

const KeyFocusSection = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const items = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "RISE WITH SAP",
      description: "Transform your business with intelligent cloud solutions"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SAP ON AZURE & AWS",
      description: "Leverage leading cloud platforms for optimal performance"
    },
    {
      icon: <Signal className="w-12 h-12" />,
      title: "APPLICATION & INFRASTRUCTURE",
      description: "End-to-end management of your digital ecosystem"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "STAFF AUGMENTATION",
      description: "Expert professionals to strengthen your team"
    }
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-black">
      <TransformBackground key="key-focus-bg" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col gap-20">
          {/* Headline Section */}
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="relative">
              <h2 className="text-8xl font-bold">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#ff712a] to-[#ff9500] bg-clip-text text-transparent">
                    Key Focus
                  </span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                      transform: `translateX(${typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth) * 100 - 50 : -50}%)`,
                      transition: 'transform 0.2s',
                    }}
                  />
                </span>
              </h2>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-[#ff712a] to-[#ff9500]" />
                <p className="text-[#ffa763] text-xl">Empowering businesses with expertise</p>
                <div className="h-px w-20 bg-gradient-to-r from-[#ff9500] to-[#ff712a]" />
              </div>
              
              {/* Added Description Text */}
              <div className="mt-12 space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                  We specialize in delivering cutting-edge enterprise solutions that drive digital transformation and business growth. Our comprehensive suite of services is designed to optimize your operations and enhance your competitive advantage.
                </p>
                <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
                  Through strategic partnerships with industry leaders and our deep technical expertise, we help organizations navigate their digital journey with confidence and precision.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-8 h-[400px] overflow-hidden
                            transition-all duration-500 hover:bg-black/60 group-hover:border-[#ff712a]/50">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center z-10">
                    <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff712a] to-[#ff9500] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="relative text-[#ff712a] group-hover:text-[#ff9500] transition-colors duration-500">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white transform transition-transform duration-500 group-hover:-translate-y-2 flex items-center gap-2 justify-center">
                      {item.title}
                      <ArrowUpRight className="w-5 h-5 text-[#ff712a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff712a] to-[#ff9500] opacity-0 
                               group-hover:opacity-10 blur-lg transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFocusSection;