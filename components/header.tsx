'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";


interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "Why HICS?", path: "/about" },
  {
    title: "Services",
    children: [
      {
        title: "SAP",
        children: [
          { title: "SAP Consulting", path: "/services/sap/consulting" },
          { title: "SAP on Azure", path: "/services/sap/azure" },
          { title: "SAP on AWS", path: "/services/sap/aws" },
          { title: "S/4HANA Migration", path: "/services/sap/s4hana" },
        ],
      },
      {
        title: "Microsoft",
        children: [
          { title: "Azure Management", path: "/services/microsoft/azure" },
          { title: "MS Dynamics 365 Business Central", path: "/services/microsoft/dynamics" },
          { title: "Power Platform", path: "/services/microsoft/power-platform" },
          { title: "Office365 Integrations", path: "/services/microsoft/office365" },
        ],
      },
      {
        title: "Broadcom",
        children: [
          { title: "Automic", path: "/services/broadcom/automic" },
          { title: "Clarity", path: "/services/broadcom/clarity" },
        ],
      },
      {
        title: "Managed Services",
        children: [
          { title: "Application & Infrastructure Management", path: "/services/managed/infrastructure" },
          { title: "ITSM Tools Implementation", path: "/services/managed/itsm" },
          { title: "Level 1 Helpdesk", path: "/services/managed/helpdesk" },
        ],
      },
      {
        title: "Cyber Security Solutions",
        children: [
          { title: "Identity and Access Management", path: "/services/security/iam" },
          { title: "VAPT", path: "/services/security/vapt" },
          { title: "SAST and DAST", path: "/services/security/sast-dast" },
        ],
      },
      {
        title: "Internet of Things",
        children: [
          { title: "Bespoke Solutions", path: "/services/iot/bespoke" },
        ],
      },
      {
        title: "Staff Augmentation",
        path: "/services/staff-augmentation"
      },
    ],
  },
  {
    title: "Solutions",
    children: [
      { title: "Digital Documentation (eForms)", path: "/solutions/eforms" },
      { title: "Queue Management System", path: "/solutions/queue-management" },
      { title: "Single Sign-on (SSO)", path: "/solutions/sso" },
      { title: "Intelligent Elderly Fall Detection", path: "/solutions/fall-detection" },
    ],
  },
  { title: "Clients & Partners", path: "/clients-partners" },
  { title: "Contact Us", path: "/contact" },
];


const DropdownMenu = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const isActive = (item: NavItem): boolean => {
    if (item.path) {
      if (item.path === '/') return pathname === item.path;
      return pathname.startsWith(item.path);
    }
    if (item.children) {
      return item.children.some(child => {
        if (child.path) return pathname.startsWith(child.path);
        return child.children ? isActive(child) : false;
      });
    }
    return false;
  };

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 100);
    setTimeoutId(id);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        {item.path ? (
          <Link
            href={item.path}
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive(item)
                ? 'text-orange-400'
                : 'text-gray-700 hover:text-orange-500'
            }`}
          >
            {item.title}
          </Link>
        ) : (
          <span className={`text-sm font-medium transition-colors duration-200 ${
            isActive(item) || isOpen ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
          }`}>
            {item.title}
          </span>
        )}
        {item.children && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'
            }`}
          />
        )}
      </div>

      {item.children && isOpen && (
        <div className={`absolute ${depth === 0 ? 'left-0' : 'left-full'} ${depth === 0 ? 'top-full' : 'top-0'} 
          min-w-[220px] bg-white/95 backdrop-blur-sm rounded-lg py-2 shadow-lg z-50`}>
          {item.children.map((child, index) => (
            <div key={index} className="relative group/item px-4 py-2 hover:bg-gray-50/50">
              {child.children ? (
                <DropdownMenu item={child} depth={depth + 1} />
              ) : (
                <Link
                  href={child.path || '#'}
                  className={`block text-sm ${
                    isActive(child)
                      ? 'text-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-200`}
                >
                  {child.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  const renderMobileItems = (items: NavItem[], depth = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`pl-${depth * 4}`}>
        {item.path ? (
          <Link
            href={item.path}
            className={`block py-2 text-sm font-medium ${
              isActive(item.path)
                ? 'text-orange-500'
                : 'text-gray-600 hover:text-orange-500'
            } transition-colors duration-200`}
            onClick={onClose}
          >
            {item.title}
          </Link>
        ) : (
          <div className="py-2">
            <span className="text-sm font-semibold text-orange-500">{item.title}</span>
            {item.children && (
              <div className="pl-4 mt-2">
                {renderMobileItems(item.children, depth + 1)}
              </div>
            )}
          </div>
        )}
      </div>
    ));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FFF5F5] z-50 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Image loading='lazy' height={10} width={120} className="h-10 w-auto" src="/page-components/hics-dark.png" alt="HICS Logo" />
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {renderMobileItems(navigation)}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation for the stamp text
  const textVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-1, 1, -1],
      transition: { 
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2.5,
      }
    },
  };

  // Animation variants for the sticky navigation
  const navVariants = {
    initial: { 
      y: 0,
      opacity: 1,
      scale: 1,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    sticky: { 
      y: 0,
      opacity: 1,
      scale: 1,
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgb(253 231 221)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(8px)'
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-40"
      >
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo - Increased size */}
            <Link href="/" className="flex items-center">
              <Image
                loading='lazy'
                height={12} width={150}
                className="h-12 w-auto"
                src="/page-components/hics-dark.png"
                alt="HICS Logo"
              />
            </Link>

            {/* Desktop Navigation - Centered with sticky capabilities */}
            <motion.div 
              initial="initial"
              animate={isSticky ? "sticky" : "initial"}
              variants={navVariants as any}
              transition={{ duration: 0.3 }}
              style={{ background: 'rgb(253 231 221)'}}
              className={`hidden text-white p-[16px] rounded-3xl lg:flex items-center gap-8 z-50 
                ${isSticky ? 'fixed top-5 left-1/2 -translate-x-1/2' : 'absolute left-1/2 -translate-x-1/2'}`}
            >
              {navigation.map((item, index) => (
                <DropdownMenu key={index} item={item} />
              ))}
            </motion.div>
            
            {/* Outthink Outperform Stamp - Visually striking design */}
            <div className="hidden lg:block">
              <div className="relative bg-white shadow-md border-l-4 border-orange-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-60"></div>
                <div className="px-3 py-2 relative">
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold tracking-tight text-sm">OutThink<span className="text-orange-500">.</span></span>
                    <span className="text-orange-500 font-bold tracking-tight text-sm">OutPerform<span className="text-orange-500">.</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </motion.header>
    </>
  );
};

export default Header;