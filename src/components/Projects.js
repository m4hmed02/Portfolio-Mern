import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Store with Admin Panel',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard for managing products, orders, and customers.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/m4hmed02/Ecommerce-Store-With-Admin-Panel',
      github: 'https://github.com/m4hmed02/Ecommerce-Store-With-Admin-Panel',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-lg opacity-30"
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Explore some of my recent work and side projects
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto mt-6"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden border border-secondary hover:border-accent/50 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Background */}
              <div className="relative bg-secondary/50 backdrop-blur p-8 h-full flex flex-col z-10">
                {/* Icon */}
                <motion.div
                  animate={hoveredId === project.id ? { scale: 1.2, y: -10 } : { scale: 1, y: 0 }}
                  className="text-6xl mb-4 transition-transform"
                >
                  {project.image}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-secondary">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent/20 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent/20 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in seeing more?</p>
          <motion.a
            href="https://github.com/m4hmed02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-blue-400 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
