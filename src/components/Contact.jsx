import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lp589304@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=lp589304@gmail.com&su=Portfolio%20Inquiry',
      color: 'emerald'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6383118447',
      href: 'tel:+916383118447',
      color: 'blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vaniyambadi, Tamil Nadu, India',
      href: null,
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakshmiprasanth-g-62708026a',
      username: '@lakshmiprasanth-g-62708026a'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Lakshmiprasanthg',
      username: '@Lakshmiprasanthg'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10 lg:ml-72 lg:pr-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg font-mono">
            Open to opportunities and technical discussions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 glow-border hover:border-accent-emerald/30 transition-all"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className={`p-3 rounded-lg bg-accent-${info.color}/10 border border-accent-${info.color}/30 group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-6 h-6 text-accent-${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-mono mb-1">
                          {info.label}
                        </div>
                        <div className="text-gray-300 font-mono group-hover:text-accent-emerald transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-accent-${info.color}/10 border border-accent-${info.color}/30`}>
                        <info.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-mono mb-1">
                          {info.label}
                        </div>
                        <div className="text-gray-300">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-mono text-gray-500 mb-4">
                CONNECT_ON_SOCIAL
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-accent-blue transition-colors" />
                    <div>
                      <div className="text-sm font-semibold text-gray-300 group-hover:text-accent-blue transition-colors">
                        {social.label}
                      </div>
                      <div className="text-xs text-gray-500 font-mono">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card p-6 bg-accent-emerald/5 border-accent-emerald/30"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-accent-emerald rounded-full animate-ping" />
                </div>
                <div>
                  <div className="text-sm font-mono text-accent-emerald font-semibold">
                    AVAILABLE FOR OPPORTUNITIES
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Full-time positions, internships, and freelance projects
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Actions & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Availability & Response Time */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                AVAILABILITY_STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent-emerald/10 border border-accent-emerald/30 rounded-lg">
                  <span className="text-base text-gray-300">Current Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    <span className="text-sm font-mono text-accent-emerald font-semibold">
                      Available
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border">
                  <span className="text-base text-gray-300">Response Time</span>
                  <span className="text-sm font-mono text-accent-blue font-semibold">
                    Within 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border">
                  <span className="text-base text-gray-300">Preferred Contact</span>
                  <span className="text-sm font-mono text-gray-400">
                    Email / LinkedIn
                  </span>
                </div>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="glass-card p-6 bg-accent-blue/5 border-accent-blue/20">
              <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                OPEN_TO
              </h3>
              <ul className="space-y-3">
                {[
                  'Full-time SDE opportunities',
                  'Freelance web development',
                  'Open source collaborations',
                  'Technical mentorship'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-base text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
