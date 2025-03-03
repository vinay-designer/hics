'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 pt-20 pb-10 overflow-hidden">
      {/* Background light lines passing at borders */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal light lines */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ 
            x: '200%', 
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"
        />
        
        <motion.div
          initial={{ x: '200%', opacity: 0 }}
          animate={{ 
            x: '-100%', 
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-2/4 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        />
        
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ 
            x: '200%', 
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 12,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"
        />
        
        {/* Vertical light lines */}
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ 
            y: '200%', 
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatDelay: 14,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"
        />
        
        <motion.div
          initial={{ y: '200%', opacity: 0 }}
          animate={{ 
            y: '-100%', 
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 16,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute left-2/4 h-full w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"
        />
        
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ 
            y: '200%', 
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 12,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute left-3/4 h-full w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"
        />
      </div>

      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-blue-400 to-orange-500 absolute top-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
          {/* Column 1: Company Info */}
          <div className="md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image height={10} width={100} className="h-10 w-auto object-contain" src="/page-components/hics-dark.png" alt="HICS Logo" />
            </Link>
            
            <p className="text-gray-600 mb-8 pr-4">
              A leading technology solutions provider specializing in SAP, Cloud Infrastructure, Cyber Security, Microsoft Dynamics, and IoT across multiple industries.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2 mt-1 rounded-lg bg-gradient-to-br from-orange-50 to-blue-50">
                  <span className="text-orange-600">
                    <MapPin className="w-5 h-5" />
                  </span>
                </div>
                <div>
                  <span className="text-gray-700 font-medium block">
                    HICS TECHNOLOGIES PTE. LTD.
                  </span>
                  <span className="text-gray-500 text-sm block">
                    2 Changi Business Park Ave 1, Singapore 486015
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-50 to-blue-50">
                  <span className="text-orange-600">
                    <Phone className="w-5 h-5" />
                  </span>
                </div>
                <span className="text-gray-700">
                  +65 6809 7118
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-50 to-blue-50">
                  <span className="text-orange-600">
                    <Mail className="w-5 h-5" />
                  </span>
                </div>
                <span className="text-gray-700">
                  info@hics.com.sg
                </span>
              </div>
              
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-blue-50 hover:from-orange-100 hover:to-blue-100 transition-colors inline-block">
                  <Linkedin className="text-orange-500 w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
          
          {/* All service sections in properly aligned columns */}
          
          {/* Column 2: SAP & Broadcom Services */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-800">SAP Services</h3>
              <ul className="space-y-3">
                {[
                  { title: "SAP Consulting", path: "/services/sap/consulting" },
                  { title: "SAP on Azure", path: "/services/sap/azure" },
                  { title: "SAP on AWS", path: "/services/sap/aws" },
                  { title: "S/4HANA Migration", path: "/services/sap/s4hana" }
                ].map((service, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <Link href={service.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                      {service.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-800">Broadcom</h3>
              <ul className="space-y-3">
                {[
                  { title: "Automic", path: "/services/broadcom/automic" },
                  { title: "Clarity", path: "/services/broadcom/clarity" }
                ].map((service, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <Link href={service.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                      {service.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 3: Microsoft & Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-800">Microsoft</h3>
              <ul className="space-y-3">
                {[
                  { title: "Azure Management", path: "/services/microsoft/azure" },
                  { title: "MS Dynamics 365", path: "/services/microsoft/dynamics" },
                  { title: "Power Platform", path: "/services/microsoft/power-platform" },
                  { title: "Office365", path: "/services/microsoft/office365" }
                ].map((service, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <Link href={service.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                      {service.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/about" },
                  { title: "Clients & Partners", path: "/clients-partners" },
                  { title: "Contact Us", path: "/contact" }
                ].map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <Link href={link.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Column 4: Managed Services & Security */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-6 text-gray-800">Managed Services</h3>
                <ul className="space-y-3">
                  {[
                    { title: "App & Infra Management", path: "/services/managed/infrastructure" },
                    { title: "ITSM Implementation", path: "/services/managed/itsm" },
                    { title: "Level 1 Helpdesk", path: "/services/managed/helpdesk" }
                  ].map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <Link href={service.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                        {service.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-6 text-gray-800">Security & Other</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Identity & Access Mgmt", path: "/services/security/iam" },
                    { title: "VAPT", path: "/services/security/vapt" },
                    { title: "SAST and DAST", path: "/services/security/sast-dast" },
                    { title: "IoT Solutions", path: "/services/iot/bespoke" },
                    { title: "Staff Augmentation", path: "/services/staff-augmentation" }
                  ].map((service, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <Link href={service.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                        {service.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 mt-16 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} HICS Technologies. All rights reserved.</p>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Terms</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;