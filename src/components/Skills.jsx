import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Wrench, Brain, Users, Lightbulb, Zap, Target } from 'lucide-react';
import { 
  SiPython, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiGit, SiGithub
} from 'react-icons/si';
import { FaCode, FaDatabase, FaPlug, FaBug } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Cpu,
      color: 'emerald',
      skills: [
        { name: 'Python', Icon: SiPython, color: '#3776AB', desc: 'Backend APIs, ML pipelines, data processing' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', desc: 'Frontend logic, Node.js servers, async operations' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', desc: 'Type-safe React apps, reducing runtime errors' },
        { name: 'SQL', Icon: FaDatabase, color: '#00758F', desc: 'Complex queries, joins, database optimization' }
      ]
    },
    {
      title: 'Core CS Fundamentals',
      icon: Brain,
      color: 'blue',
      skills: [
        { name: 'DSA', Icon: FaCode, color: '#10B981', desc: 'Algorithm design, time/space complexity analysis' },
        { name: 'OOP', Icon: FaCode, color: '#3B82F6', desc: 'Class hierarchies, design patterns, encapsulation' },
        { name: 'DBMS', Icon: Database, color: '#8B5CF6', desc: 'Normalization, indexing, transaction management' },
        { name: 'OS Basics', Icon: Cpu, color: '#EC4899', desc: 'Process scheduling, memory management concepts' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      color: 'purple',
      skills: [
        { name: 'React', Icon: SiReact, color: '#61DAFB', desc: 'Component architecture, state management, hooks' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF', desc: 'SSR, routing, API routes, performance optimization' },
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', desc: 'Server-side JavaScript, event-driven architecture' },
        { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF', desc: 'RESTful APIs, middleware, request handling' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'cyan',
      skills: [
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1', desc: 'Relational data modeling, stored procedures' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', desc: 'Document stores, aggregation pipelines' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', desc: 'Advanced queries, JSONB, full-text search' }
      ]
    },
    {
      title: 'Tools & Practices',
      icon: Wrench,
      color: 'orange',
      skills: [
        { name: 'Git', Icon: SiGit, color: '#F05032', desc: 'Version control, branching strategies, conflict resolution' },
        { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF', desc: 'Code collaboration, pull requests, CI/CD workflows' },
        { name: 'API Integration', Icon: FaPlug, color: '#10B981', desc: 'RESTful services, third-party integrations' },
        { name: 'Debugging', Icon: FaBug, color: '#EF4444', desc: 'Chrome DevTools, troubleshooting, error tracking' }
      ]
    },
    {
      title: 'Professional Skills',
      icon: Users,
      color: 'pink',
      skills: [
        { name: 'Adaptability', Icon: Zap, color: '#F59E0B', desc: 'Quick learning, flexible to new technologies and methods' },
        { name: 'Team Collaboration', Icon: Users, color: '#8B5CF6', desc: 'Agile workflows, code reviews, effective communication' },
        { name: 'Problem Solving', Icon: Lightbulb, color: '#10B981', desc: 'Analytical thinking, debugging complex issues' },
        { name: 'Attention to Detail', Icon: Target, color: '#3B82F6', desc: 'Code quality, thorough testing, documentation' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-accent-emerald to-green-400',
      blue: 'from-accent-blue to-blue-400',
      purple: 'from-purple-500 to-pink-500',
      cyan: 'from-cyan-500 to-teal-400',
      orange: 'from-orange-500 to-red-400',
      pink: 'from-pink-500 to-purple-400'
    };
    return colors[color] || colors.emerald;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto relative z-10 lg:ml-72 lg:pr-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Cpu className="w-8 h-8 text-accent-blue" />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          <p className="text-gray-400 text-lg font-mono">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-card p-6 glow-border hover:border-accent-blue/30"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${getColorClasses(category.color)} bg-opacity-20`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="grid gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.Icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card p-6 hover:border-accent-emerald/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg glass-card border border-accent-blue/30 backdrop-blur-xl bg-gradient-to-br from-accent-blue/10 to-accent-blue/5">
                          <SkillIcon className="w-6 h-6" style={{ color: skill.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-mono text-lg font-semibold text-gray-200">{skill.name}</h4>
                        </div>
                      </div>
                      <p className="text-base text-gray-400">{skill.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Radar Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-card p-8 bg-accent-blue/5 border-accent-blue/20"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold font-mono text-accent-blue mb-2">20+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-accent-blue mb-2">6</div>
              <div className="text-sm text-gray-400">Core Domains</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-purple-400 mb-2">MERN</div>
              <div className="text-sm text-gray-400">Stack Expertise</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-cyan-400 mb-2">Full-Stack</div>
              <div className="text-sm text-gray-400">Development</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
