// app/services/[category]/[service]/not-found.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-white flex items-center justify-center">
      <div className="text-center px-4 py-16 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <Search className="w-24 h-24 text-[#ff712a]" />
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold">
            <span className="text-[#ff712a]">404</span> - Service Not Found
          </h1>
          
          <p className="text-gray-300 max-w-md mx-auto">
            The service you're looking for might have been moved or no longer exists. 
            Please check our available services below.
          </p>

          <div className="grid gap-6 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="px-8 py-4 bg-[#ff712a] rounded-lg hover:bg-[#ff9500] 
                         transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                View All Services
              </Link>
            </motion.div>

            <div className="p-6 bg-black/40 backdrop-blur-sm border border-[#ff712a]/10 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Popular Services</h2>
              <div className="grid gap-2">
                <Link 
                  href="/services/sap/consulting"
                  className="text-gray-300 hover:text-[#ff712a] transition-colors"
                >
                  SAP Consulting
                </Link>
                <Link 
                  href="/services/microsoft/azure"
                  className="text-gray-300 hover:text-[#ff712a] transition-colors"
                >
                  Azure Management
                </Link>
                <Link 
                  href="/services/security/iam"
                  className="text-gray-300 hover:text-[#ff712a] transition-colors"
                >
                  Identity and Access Management
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}