import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Code2, Cpu, GraduationCap, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: Code2, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: Cpu, href: '#skills' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-3 glass-card border-accent-emerald/30 hover:border-accent-emerald/50 transition-all"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-accent-emerald" />
        ) : (
          <Menu className="w-6 h-6 text-accent-emerald" />
        )}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 glass-card border-r border-accent-emerald/20 z-40 flex-col"
      >
        {/* Name/Brand Section */}
        <div className="p-8 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-3xl font-bold font-mono text-accent-emerald mb-2">LP</h1>
            <h2 className="text-xl font-semibold mb-1">Lakshmiprasanth G</h2>
            <p className="text-base text-gray-400">Full-Stack Web Developer</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="text-sm text-accent-emerald font-mono">Available</span>
            </div>
          </motion.div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`group relative flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-accent-emerald/10 border border-accent-emerald/50'
                    : 'border border-transparent hover:border-accent-emerald/30 hover:bg-accent-emerald/5'
                }`}
              >
                <item.icon
                  className={`w-6 h-6 transition-colors ${
                    activeSection === item.id
                      ? 'text-accent-emerald'
                      : 'text-gray-400 group-hover:text-accent-emerald'
                  }`}
                />
                <span
                  className={`text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-accent-emerald'
                      : 'text-gray-300 group-hover:text-accent-emerald'
                  }`}
                >
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.aside>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.nav
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-64 glass-card border-r border-accent-emerald/30 z-40 lg:hidden p-6"
            >
              {/* Header */}
              <div className="mb-8 mt-16">
                <h2 className="text-xl font-bold font-mono text-accent-emerald">LP</h2>
                <p className="text-xs text-gray-500 mt-1">Full-Stack Developer</p>
              </div>

              {/* Nav Items */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-accent-emerald/10 border border-accent-emerald/50 text-accent-emerald'
                        : 'border border-transparent hover:border-accent-emerald/30 text-gray-400 hover:text-accent-emerald'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-mono text-sm">{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-3 border-accent-emerald/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    <span className="text-sm text-gray-400 font-mono">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
