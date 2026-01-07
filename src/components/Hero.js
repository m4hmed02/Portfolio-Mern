import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
            ✨ Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
          <br />
          <span className="text-gray-200">& Creative Technologist</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I craft beautiful, responsive web experiences with modern technologies.
          Passionate about creating digital solutions that make a difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-accent-dark transition-colors"
          >
            View My Work <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '100%', label: 'Satisfaction' },
            { number: '5+', label: 'Years Exp' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
