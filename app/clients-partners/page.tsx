'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  Building2, Users, Star, Award, CheckCircle, ArrowRight, 
  Briefcase, Globe, Handshake, Shield, Server, Database, 
  Cloud, Code, Heart, Zap, Target, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientsPartnersBackground from '../../animations/clients-partners/clients-partners-background';

const StatisticCard = ({ icon, value, label }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg p-6 hover:border-[#ff712a] transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-[#ff712a]/10 flex items-center justify-center text-[#ff712a]">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#ff712a]">{value}</div>
        <div className="text-gray-400">{label}</div>
      </div>
    </div>
  </motion.div>
);

const ClientsAndPartnersPage = () => {
  const [activePartnerCategory, setActivePartnerCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');
  
  const heroStats = [
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Active Clients" },
    { icon: <Star className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Industry Awards" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Countries Served" }
  ];

  const partnerCategories = [
    { id: 'all', name: 'All Partners' },
    { id: 'technology', name: 'Technology' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  const industries = [
    'Healthcare', 'Life Sciences', 'Research', 'Government'
  ];

  const partners = [
    {
      name: "SAP",
      category: "technology",
      expertise: "Healthcare Solutions",
      logo: "/api/placeholder/200/100",
      description: "Strategic partner for healthcare implementations",
      achievements: [
        "100+ Joint Implementations",
        "Certified Solution Partner",
        "Innovation Award 2024"
      ],
      services: [
        "SAP Healthcare",
        "Enterprise Solutions",
        "Digital Transformation"
      ]
    },
    {
      name: "Microsoft",
      category: "technology",
      expertise: "Cloud Infrastructure",
      logo: "/api/placeholder/200/100",
      description: "Premier cloud and enterprise solutions partner",
      achievements: [
        "Azure Expert MSP",
        "Gold Partner Status",
        "Cloud Excellence Award"
      ],
      services: [
        "Azure Cloud",
        "Microsoft 365",
        "Dynamics 365"
      ]
    },
    {
      name: "Deloitte",
      category: "consulting",
      expertise: "Healthcare Consulting",
      logo: "/api/placeholder/200/100",
      description: "Strategic consulting and implementation partner",
      achievements: [
        "Global Healthcare Leader",
        "Digital Transformation Expert",
        "Industry Pioneer Award"
      ],
      services: [
        "Strategy Consulting",
        "Digital Health",
        "Process Optimization"
      ]
    },
    {
      name: "Cisco",
      category: "technology",
      expertise: "Network Solutions",
      logo: "/api/placeholder/200/100",
      description: "Leading network infrastructure partner",
      achievements: [
        "Master Networking Partner",
        "Security Excellence",
        "Innovation Leader"
      ],
      services: [
        "Network Infrastructure",
        "Security Solutions",
        "IoT Integration"
      ]
    }
  ];

  const clients = [
    {
      name: "Singapore General Hospital",
      industry: "Healthcare",
      region: "Singapore",
      logo: "/api/placeholder/200/100",
      description: "Complete digital transformation journey partner",
      solutions: [
        "SAP Healthcare Implementation",
        "Cloud Infrastructure",
        "Security Solutions"
      ],
      results: [
        "30% Operational Efficiency Increase",
        "99.9% System Uptime",
        "24/7 Support Coverage"
      ],
      testimonial: {
        quote: "HICS has been instrumental in our digital transformation journey. Their expertise in healthcare IT solutions is unmatched.",
        author: "Director of Technology",
        position: "Singapore General Hospital"
      }
    },
    {
      name: "National University Hospital",
      industry: "Healthcare",
      region: "Singapore",
      logo: "/api/placeholder/200/100",
      description: "Strategic technology transformation partner",
      solutions: [
        "Enterprise System Integration",
        "Data Analytics Platform",
        "Digital Workflow Optimization"
      ],
      results: [
        "40% Reduction in Processing Time",
        "100% Digital Records Integration",
        "Real-time Analytics Implementation"
      ],
      testimonial: {
        quote: "The expertise and dedication of the HICS team have helped us achieve our digital transformation goals ahead of schedule.",
        author: "Chief Information Officer",
        position: "National University Hospital"
      }
    },
    {
      name: "Parkway Hospitals",
      industry: "Healthcare",
      region: "Southeast Asia",
      logo: "/api/placeholder/200/100",
      description: "Regional healthcare solutions provider",
      solutions: [
        "Multi-facility System Integration",
        "Cross-border Data Management",
        "Telehealth Platform Implementation"
      ],
      results: [
        "Regional System Standardization",
        "45% Improvement in Data Access",
        "Enhanced Patient Experience"
      ],
      testimonial: {
        quote: "HICS's regional expertise has been crucial in standardizing our systems across multiple facilities while maintaining excellence in service.",
        author: "Regional IT Director",
        position: "Parkway Hospitals"
      }
    }
  ];

  const successMetrics = [
    {
      icon: <Target className="w-6 h-6" />,
      value: "100%",
      label: "Project Completion Rate"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "Support Coverage"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "500+",
      label: "System Integrations"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: "95%",
      label: "Client Retention"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ClientsPartnersBackground />
      
      {/* Hero Section with Enhanced Visual Elements */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff712a] to-[#ff9500] rounded-3xl blur-xl opacity-50" />
              <div className="relative h-full bg-black/50 rounded-3xl p-6 backdrop-blur-xl border border-[#ff712a]/10 flex items-center justify-center">
                <Handshake className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-white"
              >
                Building Trust Through
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="block text-[#ff712a]"
              >
                Excellence
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              At HICS, we believe in forging lasting partnerships that drive innovation 
              and transformation. Our network of trusted clients and strategic partners 
              spans across Southeast Asia, enabling us to deliver exceptional value and 
              sustainable growth.
            </motion.p>

            {/* Hero Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-[#ff712a]/10 text-[#ff712a]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#ff712a]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center gap-6"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                         hover:from-[#ff9500] hover:to-[#ff712a] text-white px-8 py-6 text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Partnerships
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#ff712a] text-[#ff712a] hover:bg-[#ff712a] hover:text-white 
                         px-8 py-6 text-lg transition-all duration-300"
              >
                View Success Stories
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Partner Showcase Section */}
      <section className="py-24 relative bg-black/40">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="bg-[#ff712a]/10 backdrop-blur-xl px-6 py-2 rounded-full border border-[#ff712a]/20">
                <h3 className="text-[#ff712a] font-medium">STRATEGIC PARTNERSHIPS</h3>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-[#ff712a]">Industry Leaders</span>
              <span className="text-white"> United</span>
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto">
              We collaborate with global technology leaders and industry pioneers to deliver 
              cutting-edge solutions that drive innovation and transformation.
            </p>
          </motion.div>

          {/* Partner Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActivePartnerCategory(category.id)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activePartnerCategory === category.id
                    ? 'bg-[#ff712a] text-white border-[#ff712a]'
                    : 'border-[#ff712a]/20 text-gray-400 hover:border-[#ff712a] hover:text-[#ff712a]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

        {/* Partners Grid */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partners
              .filter(partner => activePartnerCategory === 'all' || partner.category === activePartnerCategory)
              .map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 
                               rounded-lg p-6 transition-all duration-300 hover:border-[#ff712a]">
                    {/* Partner Logo */}
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-white/5">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover opacity-75 transition-all duration-300 
                                 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Partner Info */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ff712a] 
                                   transition-colors">{partner.name}</h3>
                        <span className="px-3 py-1 text-xs font-medium text-[#ff712a] bg-[#ff712a]/10 
                                     rounded-full">{partner.expertise}</span>
                      </div>
                      
                      <p className="text-gray-400 text-sm">{partner.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[#ff712a]">Key Achievements</h4>
                        <ul className="space-y-1">
                          {partner.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-[#ff712a]" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2">
                        {partner.services.map((service, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-black/20 border border-[#ff712a]/10 
                                     rounded-full text-gray-400"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#ff712a]/20 
                                   to-transparent rounded-lg" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="bg-[#ff712a]/10 backdrop-blur-xl px-6 py-2 rounded-full border border-[#ff712a]/20">
                <h3 className="text-[#ff712a] font-medium">SUCCESS STORIES</h3>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">Transforming</span>
              <span className="text-[#ff712a]"> Healthcare</span>
            </h2>
            
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how we've helped leading healthcare institutions across Southeast Asia 
              achieve their digital transformation goals through innovative solutions and 
              dedicated support.
            </p>
          </motion.div>

          {/* Industry Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-[#ff712a] text-white border-[#ff712a]'
                    : 'border-[#ff712a]/20 text-gray-400 hover:border-[#ff712a] hover:text-[#ff712a]'
                }`}
              >
                {industry}
              </button>
            ))}
          </motion.div>

          {/* Client Success Stories Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {clients
              .filter(client => client.industry === selectedIndustry)
              .map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 
                               rounded-lg transition-all duration-300 hover:border-[#ff712a]">
                    {/* Client Logo */}
                    <div className="relative aspect-video overflow-hidden rounded-t-lg bg-white/5">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-cover opacity-75 transition-all duration-300 
                                 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Client Info */}
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ff712a] 
                                   transition-colors mb-2">{client.name}</h3>
                        <p className="text-gray-400 text-sm">{client.description}</p>
                      </div>

                      {/* Solutions Implemented */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#ff712a]">Solutions Implemented</h4>
                        <ul className="space-y-2">
                          {client.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-[#ff712a] mt-1 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Results */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#ff712a]">Key Results</h4>
                        <ul className="space-y-2">
                          {client.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-[#ff712a] mt-1 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="relative p-4 bg-black/20 rounded-lg border border-[#ff712a]/10">
                        <div className="absolute -top-3 -left-2 text-[#ff712a] transform -rotate-12">
                          <svg
                            className="w-8 h-8 opacity-50"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                          </svg>
                        </div>
                        <blockquote className="text-sm text-gray-400 italic mb-2">
                          {client.testimonial.quote}
                        </blockquote>
                        <div className="text-sm">
                          <span className="text-[#ff712a] font-medium">
                            {client.testimonial.author}
                          </span>
                          <span className="text-gray-500"> • {client.testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 relative bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {successMetrics.map((metric, index) => (
              <StatisticCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-gray-300 mb-8">
              Join our network of successful healthcare institutions and technology partners. 
              Let's work together to achieve your digital transformation goals.
            </p>
            <motion.div
              className="flex justify-center gap-6"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                         hover:from-[#ff9500] hover:to-[#ff712a] text-white px-8 py-6 text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#ff712a] text-[#ff712a] hover:bg-[#ff712a] hover:text-white 
                         px-8 py-6 text-lg transition-all duration-300"
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientsAndPartnersPage;