import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 lg:left-72 right-0 z-30 px-4 py-4 lg:px-8 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-blue/10 border border-accent-blue/30 rounded-lg">
            <Code2 className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <span className="font-bold text-xl font-mono text-accent-blue">LP</span>
            <p className="text-xs text-gray-400 hidden sm:block">Full-Stack Web Developer</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="hidden md:flex items-center gap-2">
          {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="px-3 py-1.5 text-xs font-mono bg-surface border border-border rounded-lg text-gray-400 hover:border-accent-blue/30 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Performance Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden lg:flex items-center gap-2 glass-card px-3 py-2 bg-accent-blue/5 border-accent-blue/20"
        >
          <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="text-xs text-gray-400">
            Performance: <span className="text-accent-blue font-mono font-semibold">99/100</span>
          </span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
