import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'Flutions Ind Pvt Ltd',
    role: 'Web Development Intern',
    type: 'Internship',
    duration: 'July 2024 - August 2024',
    location: 'Pernambut, Tamil Nadu, India',
    tags: ['React.js', 'UI Components', 'Agile', 'Git', 'REST APIs'],
    achievements: [
      {
        problem: 'Need for responsive, reusable React components across multiple client projects',
        action: 'Developed modular React.js UI component library with consistent design patterns and comprehensive documentation',
        impact: 'Reduced development time by 35% and improved code maintainability across 3+ projects',
        metrics: ['35% faster development', '3+ projects deployed', '100% reusability']
      },
      {
        problem: 'Complex state management and data flow in large-scale web applications',
        action: 'Implemented centralized state management using Context API and custom hooks architecture',
        impact: 'Eliminated prop drilling issues and improved application performance by 40%',
        metrics: ['40% performance boost', 'Zero state bugs', 'Scalable architecture']
      },
      {
        problem: 'Inefficient collaboration workflow slowing down sprint deliveries',
        action: 'Participated in daily Agile standups, sprint planning, and code reviews using Git workflow best practices',
        impact: 'Contributed to 100% on-time sprint delivery and improved team velocity',
        metrics: ['100% on-time delivery', 'Daily standups', 'Clean code reviews']
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10 lg:ml-72 lg:pr-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-8 h-8 text-accent-emerald" />
            <h2 className="text-4xl font-bold">Engineering Experience</h2>
          </div>
          <p className="text-gray-400 text-lg font-mono">
            Problem → Action → Impact
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 hover:border-accent-emerald/30 transition-all duration-300"
        >
          {/* Company Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 pb-6 border-b border-border">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-2xl font-bold text-accent-emerald mb-2">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                <span>{experience.company}</span>
                <span className="px-2 py-0.5 text-xs font-mono bg-accent-blue/20 text-accent-blue rounded">
                  {experience.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span key={index} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {experience.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-border hover:border-accent-emerald/50 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-emerald border-4 border-background" />
                
                <div className="space-y-4">
                  {/* Problem */}
                  <div className="glass-card p-4 bg-surface-light/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-mono bg-red-500/20 text-red-400 rounded">
                        PROBLEM
                      </span>
                    </div>
                    <p className="text-gray-300">{achievement.problem}</p>
                  </div>

                  {/* Action */}
                  <div className="glass-card p-4 bg-surface-light/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-mono bg-yellow-500/20 text-yellow-400 rounded">
                        ACTION
                      </span>
                    </div>
                    <p className="text-gray-300">{achievement.action}</p>
                  </div>

                  {/* Impact */}
                  <div className="glass-card p-4 bg-surface-light/50 border-accent-emerald/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 text-xs font-mono bg-accent-emerald/20 text-accent-emerald rounded">
                        IMPACT
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{achievement.impact}</p>
                    
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3">
                      {achievement.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 rounded-lg"
                        >
                          <ArrowRight className="w-3 h-3 text-accent-emerald" />
                          <span className="text-sm font-mono text-accent-emerald">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 glass-card p-6 bg-accent-emerald/5 border-accent-emerald/20"
        >
          <p className="text-sm text-gray-400 font-mono">
            <span className="text-accent-emerald font-semibold">Key Takeaway:</span> This internship
            strengthened my React.js fundamentals, collaborative development workflow, and problem-solving 
            approach in real-world production environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
