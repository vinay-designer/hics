// app/services/[category]/[service]/error.tsx
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <AlertTriangle className="w-20 h-20 text-[#ff712a]" />
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold text-[#ff712a]">
            Something Went Wrong
          </h1>
          
          <p className="text-gray-300 max-w-md mx-auto">
            We apologize for the inconvenience. Our team has been notified of this issue.
            You can try again or explore our other services.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="px-8 py-3 bg-[#ff712a] rounded-lg hover:bg-[#ff9500] 
                       transition-colors flex items-center justify-center gap-2"
            >
              Try Again
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="px-8 py-3 border border-[#ff712a] rounded-lg 
                         hover:bg-[#ff712a]/10 transition-colors flex items-center 
                         justify-center gap-2"
              >
                View All Services
              </Link>
            </motion.div>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-black/40 rounded-lg text-left">
              <p className="text-sm text-gray-400 font-mono">
                Error: {error.message}
              </p>
              {error.digest && (
                <p className="text-sm text-gray-400 font-mono mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}