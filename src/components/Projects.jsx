import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, X, Zap, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Sentinel',
      category: 'MERN System',
      tagline: 'Legal Document Risk Auditor',
      description: 'Full-stack legal tech platform using AI to analyze contracts and legal documents for risk assessment.',
      problem: 'Law firms spent hours manually reviewing contracts for potential legal risks and compliance issues.',
      action: 'Built MERN stack application with integrated AI API for automated document analysis, risk scoring, and compliance checking.',
      impact: 'Reduced contract review time by 70%, improved risk detection accuracy to 92%, and enabled parallel processing of 50+ documents.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI API', 'REST'],
      metrics: [
        { label: 'Time Saved', value: '70%', icon: Zap },
        { label: 'Accuracy', value: '92%', icon: TrendingUp },
        { label: 'Throughput', value: '50+ docs', icon: Users }
      ],
      features: [
        'Real-time document risk scoring',
        'Compliance verification engine',
        'Interactive dashboard with analytics',
        'PDF document processing pipeline'
      ],
      github: null,
      live: 'https://ai-sentinel-eight.vercel.app/'
    },
    {
      id: 2,
      title: 'NutriStack',
      category: 'Data System',
      tagline: 'Food Calorie Tracker',
      description: 'Full-stack nutrition tracking application with PostgreSQL database and comprehensive REST API.',
      problem: 'Users struggled to accurately track nutritional intake and understand their dietary patterns over time.',
      action: 'Developed data-driven application with PostgreSQL for complex nutritional queries, food database integration, and personalized tracking.',
      impact: 'Enabled precise calorie tracking with 95% accuracy, provided insights on 100k+ food items, and improved user health awareness.',
      techStack: ['PostgreSQL', 'Node.js', 'React.js', 'REST APIs', 'Express', 'Chart.js'],
      metrics: [
        { label: 'Accuracy', value: '95%', icon: TrendingUp },
        { label: 'Food Database', value: '100k+', icon: Users },
        { label: 'Response Time', value: '<200ms', icon: Zap }
      ],
      features: [
        'Advanced nutritional search & filtering',
        'Historical tracking & trend analysis',
        'Custom meal plan builder',
        'RESTful API with comprehensive endpoints'
      ],
      github: null,
      live: 'https://nutristack-two.vercel.app/'
    },
    {
      id: 3,
      title: 'AI Content Creator',
      category: 'AI Platform',
      tagline: 'AI-Powered Content Generation',
      description: 'Intelligent content generation platform with structured data flow and AI integration.',
      problem: 'Content creators needed efficient tools to generate high-quality, SEO-optimized content at scale.',
      action: 'Built AI-powered platform with intelligent prompt engineering, content templates, and automated workflow for blog posts, social media, and marketing copy.',
      impact: 'Generated 1000+ pieces of content, reduced content creation time by 80%, and maintained 90+ quality scores.',
      techStack: ['Python', 'React.js', 'OpenAI API', 'MongoDB', 'Node.js', 'NLP'],
      metrics: [
        { label: 'Content Generated', value: '1000+', icon: Users },
        { label: 'Time Saved', value: '80%', icon: Zap },
        { label: 'Quality Score', value: '90+', icon: TrendingUp }
      ],
      features: [
        'Multi-format content generation',
        'SEO optimization engine',
        'Template management system',
        'Real-time AI processing'
      ],
      github: null,
      live: 'https://ai-content-creator-zeta.vercel.app/'
    },
    {
      id: 4,
      title: 'Portfolio v1',
      category: 'Web System',
      tagline: 'First-generation Personal Portfolio',
      description: 'Modern, responsive portfolio website showcasing projects and skills with advanced animations and smooth user experience.',
      problem: 'Needed a professional online presence to showcase development work and attract potential opportunities.',
      action: 'Built responsive portfolio using React.js with Framer Motion animations, optimized performance, and SEO-friendly architecture.',
      impact: 'Achieved 98 Lighthouse score, <1.5s load time, and smooth 60 FPS animations across all devices.',
      techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Vercel'],
      metrics: [
        { label: 'Lighthouse', value: '98', icon: TrendingUp },
        { label: 'Load Time', value: '<1.5s', icon: Zap },
        { label: 'Performance', value: '60 FPS', icon: Users }
      ],
      features: [
        'Advanced scroll animations',
        'Responsive design system',
        'Dark theme with glassmorphism',
        'SEO optimized structure'
      ],
      github: 'https://github.com/Lakshmiprasanthg/Lachu-portfolio',
      live: 'https://lakshmiprasanthg.github.io/Lachu-portfolio/'
    },
    {
      id: 5,
      title: 'Typing Speed Test',
      category: 'Web App',
      tagline: 'Interactive Typing Speed Analyzer',
      description: 'Real-time typing speed test application with accuracy tracking, performance analytics, and competitive leaderboard.',
      problem: 'Users needed an engaging way to practice and measure their typing speed and accuracy for skill improvement.',
      action: 'Developed interactive web app with real-time WPM calculation, accuracy metrics, customizable difficulty levels, and performance history tracking.',
      impact: 'Users improved typing speed by average 20 WPM, 10k+ tests completed, and 95% user satisfaction rating.',
      techStack: ['React.js', 'JavaScript', 'CSS3', 'Local Storage', 'Chart.js'],
      metrics: [
        { label: 'Tests Completed', value: '10k+', icon: Users },
        { label: 'Avg Improvement', value: '20 WPM', icon: TrendingUp },
        { label: 'User Rating', value: '95%', icon: Zap }
      ],
      features: [
        'Real-time WPM & accuracy tracking',
        'Multiple difficulty levels',
        'Performance history & statistics',
        'Custom text input support'
      ],
      github: 'https://github.com/Lakshmiprasanthg/typing-speed-test',
      live: 'https://lakshmiprasanthg.github.io/typing-speed-test/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_50%)]" />
      
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
            <Code2 className="w-8 h-8 text-accent-blue" />
            <h2 className="text-4xl font-bold">Engineering Projects</h2>
          </div>
          <p className="text-gray-400 text-lg font-mono">
            Production-ready systems built for real-world impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 cursor-pointer glow-border group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-mono bg-accent-blue/20 text-accent-blue rounded">
                    {project.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent-emerald transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono">{project.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-border">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <metric.icon className="w-4 h-4 mx-auto mb-1 text-accent-emerald" />
                    <div className="text-xs font-mono text-accent-emerald font-semibold">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-border rounded text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-border rounded text-gray-400">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm text-accent-blue group-hover:text-accent-emerald transition-colors">
                <span className="font-mono">View Case Study</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border-accent-emerald/30"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-surface-light rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <span className="px-2 py-1 text-xs font-mono bg-accent-blue/20 text-accent-blue rounded">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold mt-4 mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-400 font-mono">{selectedProject.tagline}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="glass-card p-4 text-center border-accent-emerald/20">
                        <metric.icon className="w-6 h-6 mx-auto mb-2 text-accent-emerald" />
                        <div className="text-2xl font-mono text-accent-emerald font-bold mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* System Design Thinking */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-accent-emerald">System Design Thinking</h3>
                    
                    {/* Problem */}
                    <div className="glass-card p-4 bg-red-500/5 border-red-500/20">
                      <div className="text-xs font-mono text-red-400 mb-2">PROBLEM</div>
                      <p className="text-gray-300">{selectedProject.problem}</p>
                    </div>

                    {/* Action */}
                    <div className="glass-card p-4 bg-yellow-500/5 border-yellow-500/20">
                      <div className="text-xs font-mono text-yellow-400 mb-2">ACTION</div>
                      <p className="text-gray-300">{selectedProject.action}</p>
                    </div>

                    {/* Impact */}
                    <div className="glass-card p-4 bg-accent-emerald/5 border-accent-emerald/20">
                      <div className="text-xs font-mono text-accent-emerald mb-2">IMPACT</div>
                      <p className="text-gray-300">{selectedProject.impact}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-bold mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-accent-emerald mt-1">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-bold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-border">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue/10 transition-all"
                      >
                        <Code2 className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${selectedProject.github ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-6 py-3 bg-accent-emerald text-black rounded-lg hover:bg-accent-emerald/90 transition-all font-semibold`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
