'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FooterBackground from '../../animations/homepage/footer-background';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="pt-20 pb-8 relative overflow-hidden bg-black">
      <FooterBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="block">
              <Image loading='lazy' height={10} width={100} className="h-10 w-auto object-contain" src="/page-components/hics-light.png" alt="HICS Logo" />
            </Link>
            <p className="text-gray-300">
              A leading technology solutions provider specializing in SAP Healthcare, Cloud Infrastructure, Cyber Security, Microsoft Dynamics, and IoT across multiple industries.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className="p-2 rounded-lg text-orange-500 hover:bg-orange-500/20 
                      hover:text-orange-400 transition-colors duration-300"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
                CONTACT INFO
              </span>
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  HICS TECHNOLOGIES PTE. LTD.
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  +65 6809 7118
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  info@hics.com.sg
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
                NEWSLETTER
              </span>
            </h3>
            <div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full bg-white text-black border border-orange-500/10 rounded-xl px-4 py-3 
                   placeholder-gray-500 focus:outline-none focus:border-orange-500 
                    transition-colors"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                    bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500
                    text-white rounded-lg px-4"
                >
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-gray-300 mt-4">
                Sign up for our newsletter to get latest updates.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-orange-500/10 flex flex-col md:flex-row justify-between 
            items-center gap-4"
        >
          <div className="flex items-center gap-6">
            {['Terms of Use', 'Privacy Policy'].map((item, index) => (
              <Link
                key={index}
                href={item === 'Terms of Use' ? '/terms' : '/privacy'}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group"
              >
                <span>{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400
                  group-hover:w-full transition-all duration-300"/>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300"
          >
            © {new Date().getFullYear()} HICS. All rights reserved.
          </motion.div>
        </motion.div>

        {/* Animated corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden opacity-20">
          <motion.div
            className="w-[2px] h-full bg-gradient-to-b from-orange-500 to-transparent absolute top-0 left-8"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-full h-[2px] bg-gradient-to-r from-orange-500 to-transparent absolute top-8 left-0"
            animate={{ left: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden opacity-20">
          <motion.div
            className="w-[2px] h-full bg-gradient-to-t from-orange-400 to-transparent absolute bottom-0 right-8"
            animate={{ bottom: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-full h-[2px] bg-gradient-to-l from-orange-400 to-transparent absolute bottom-8 right-0"
            animate={{ right: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;