import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, Terminal as TerminalIcon } from 'lucide-react';

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    { text: 'lp@portfolio:~$ whoami', delay: 0 },
    { text: '> Lakshmiprasanth G', delay: 1000, isOutput: true },
    { text: '> Full-Stack Web Developer', delay: 1500, isOutput: true },
    { text: 'lp@portfolio:~$ cat role.txt', delay: 2500 },
    { text: '> Building scalable web applications with MERN stack', delay: 3500, isOutput: true },
    { text: 'lp@portfolio:~$ status', delay: 4500 },
    { text: '> Available for opportunities', delay: 5500, isOutput: true, highlight: true },
    { text: 'lp@portfolio:~$ _', delay: 6500, isCursor: true }
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, lines[currentLine].delay);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  const metrics = [
    { value: '8.1', label: 'CGPA', icon: '📊' },
    { value: '3+', label: 'PROJECTS', icon: '🚀' },
    { value: '1+', label: 'INTERNSHIP', icon: '💼' },
    { value: '99%', label: 'UPTIME', icon: '⚡' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Lakshmiprasanthg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lakshmiprasanth-g-62708026a', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=lp589304@gmail.com&su=Portfolio%20Inquiry', label: 'Email' },
    { icon: Phone, href: 'tel:+916383118447', label: 'Phone' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-32 md:py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 lg:ml-72 lg:pr-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-6 border-accent-emerald/20">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <TerminalIcon className="w-4 h-4 text-accent-emerald" />
                <span className="text-sm font-mono text-gray-400">system.terminal</span>
                <div className="flex gap-1.5 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-2 min-h-[300px]">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      line.isOutput 
                        ? line.highlight 
                          ? 'text-accent-emerald ml-4 font-semibold' 
                          : 'text-gray-400 ml-4'
                        : line.isCursor
                        ? 'text-accent-emerald animate-pulse'
                        : 'text-accent-blue'
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 7, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border"
              >
                <a
                  href="/Lakshmiprasanth G.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-accent-emerald text-black font-semibold rounded-lg hover:bg-accent-emerald/90 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue/10 transition-all duration-300"
                >
                  Let's Connect
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7.5, duration: 0.5 }}
                className="flex gap-4 mt-6"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-lg hover:border-accent-emerald/50 hover:bg-accent-emerald/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-accent-emerald transition-colors" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Metrics & Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-6xl font-bold mb-4"
              >
                I build{' '}
                <span className="text-gradient">robust systems</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                Full-Stack Web Developer specializing in MERN stack architecture, 
                scalable backend APIs, and high-performance React applications. 
                I focus on clean code, system reliability, and user-centric design.
              </motion.p>
            </div>

            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                  className="metric-card hover:border-accent-emerald/50 transition-all duration-300"
                >
                  <span className="text-2xl mb-2">{metric.icon}</span>
                  <span className="text-2xl font-bold font-mono text-accent-emerald">
                    {metric.value}
                  </span>
                  <span className="text-xs text-gray-500 font-mono mt-1">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-mono text-gray-500 mb-4">PRIMARY_STACK</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'MongoDB', 'Express', 'PostgreSQL', 'Python', 'REST APIs', 'Git'].map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
