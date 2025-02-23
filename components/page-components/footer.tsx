'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Custom Wave Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-indigo-600 to-orange-600" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="block">
              <Image height={10} width={100} className="h-10 w-auto object-contain" src="/page-components/hics-dark.png" alt="HICS Logo" />
            </Link>
            <p className="text-gray-600 text-lg">
              A leading technology solutions provider specializing in SAP Healthcare, Cloud Infrastructure, Cyber Security, Microsoft Dynamics, and IoT across multiple industries.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-orange-50 to-indigo-50 hover:from-orange-100 hover:to-indigo-100 transition-colors group"
                >
                  <span className="text-orange-600 group-hover:text-orange-700 transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Section - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {[
                { icon: <MapPin />, text: "HICS TECHNOLOGIES PTE. LTD." },
                { icon: <Phone />, text: "+65 6809 7118" },
                { icon: <Mail />, text: "info@hics.com.sg" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="p-2 rounded-xl bg-gradient-to-br from-orange-50 to-indigo-50 group-hover:from-orange-100 group-hover:to-indigo-100 transition-colors">
                    <span className="text-orange-600">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section - Spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-orange-50 to-indigo-50 border-2 border-transparent focus:border-orange-200 outline-none transition-all"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-600 to-indigo-600 hover:opacity-90 rounded-lg p-2">
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Stay updated with our latest news and updates
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {['Terms', 'Privacy', 'Legal'].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} HICS Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;