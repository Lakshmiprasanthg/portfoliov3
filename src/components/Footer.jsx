import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent-emerald/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10 lg:ml-72 lg:pr-8">

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© {currentYear} Lakshmiprasanth G</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and discipline
              </span>
            </div>

            {/* Quote */}
            <div className="text-sm text-gray-500 font-mono italic">
              "Code is poetry written for machines to understand"
            </div>
          </div>
        </motion.div>

        {/* Subtle Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            Designed with clarity • Developed with intent • Deployed with confidence
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
