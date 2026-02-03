import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (B.E)',
      field: 'Computer Science and Engineering',
      institution: 'Priyadarshini Engineering College',
      university: 'Anna University',
      location: 'Vaniyambadi, Tamil Nadu, India',
      duration: 'November 2022 - May 2026',
      cgpa: '8.1',
      maxCgpa: '10.0',
      highlights: [
        'Specialized in Data Structures, Algorithms, and System Design',
        'Completed advanced courses in Web Development and Database Management',
        'Active participant in technical clubs and coding competitions',
        'Strong foundation in software engineering principles'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Technologies',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]" />
      
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
            <GraduationCap className="w-8 h-8 text-accent-blue" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <p className="text-gray-400 text-lg font-mono">
            Academic foundation for engineering excellence
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Degree Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-accent-blue/10 border border-accent-blue/30 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-accent-blue" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-accent-blue font-semibold">{edu.field}</p>
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="space-y-1 ml-0 lg:ml-[60px]">
                      <p className="text-lg font-semibold text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-400">{edu.university}</p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-mono text-gray-500 mb-3">KEY_HIGHLIGHTS</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-accent-blue mt-1">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* CGPA Card */}
                  <div className="glass-card p-6 bg-accent-blue/5 border-accent-blue/30 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-accent-blue" />
                      <span className="text-sm font-mono text-gray-400">CGPA</span>
                    </div>
                    <div className="text-4xl font-bold font-mono text-accent-blue mb-1">
                      {edu.cgpa}
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      out of {edu.maxCgpa}
                    </div>
                  </div>

                  {/* Key Courses */}
                  <div className="glass-card p-6 bg-surface-light/50">
                    <h4 className="text-sm font-mono text-gray-500 mb-4">
                      CORE_COURSES
                    </h4>
                    <div className="space-y-2">
                      {edu.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 bg-surface border border-border rounded text-xs font-mono text-gray-400"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications/Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="glass-card p-6 text-center hover:border-accent-emerald/30 transition-all">
            <div className="text-3xl font-bold font-mono text-accent-emerald mb-2">
              4
            </div>
            <div className="text-sm text-gray-400">Years of Study</div>
          </div>
          <div className="glass-card p-6 text-center hover:border-accent-blue/30 transition-all">
            <div className="text-3xl font-bold font-mono text-accent-blue mb-2">
              20+
            </div>
            <div className="text-sm text-gray-400">Core CS Courses</div>
          </div>
          <div className="glass-card p-6 text-center hover:border-purple-500/30 transition-all">
            <div className="text-3xl font-bold font-mono text-purple-400 mb-2">
              Top 10%
            </div>
            <div className="text-sm text-gray-400">Class Ranking</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
