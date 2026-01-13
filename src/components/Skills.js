import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Framer Motion'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'],
      icon: '⚙️',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'GitHub Actions'],
      icon: '🛠️',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Leadership', 'Project Management', 'Mentoring', 'UX Awareness'],
      icon: '🧠',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-lg opacity-30"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto"
          />
        </motion.div>

        {/* Technologies Row (user-provided) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {['React','Node','Express','Next.js','Redux','HTML','CSS','JavaScript','Python','NestJS'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
              }}
              className="p-8 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border border-accent/20 hover:border-accent/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-secondary"
        >
          <h3 className="text-2xl font-bold mb-12">Proficiency Levels</h3>

          {[
            { name: 'React & Frontend', level: 95 },
            { name: 'Backend Development', level: 85 },
            { name: 'Full Stack Development', level: 90 },
            { name: 'DevOps & Deployment', level: 75 },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-gray-300">{skill.name}</span>
                <span className="text-accent font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
