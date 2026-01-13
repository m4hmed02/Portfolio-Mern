import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Blur */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 right-0 w-80 h-80 bg-accent/5 rounded-full blur-lg opacity-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-accent mx-auto"
            />
          </div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern, responsive web applications. With a strong foundation in React, Node.js, and cloud technologies, I transform ideas into digital solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development started 2+ years ago, and since then, I've worked with diverse teams and industries, delivering high-quality products that users love.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I am currently studying BSCS (expected 2027).
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in building scalable applications and user-friendly interfaces that solve real-world problems. My focus is on clean code, best practices, and continuous learning in the ever-evolving tech landscape.
              </p>

              {/* Quick Facts */}
              <motion.div
                variants={itemVariants}
                className="space-y-3 pt-8 border-t border-secondary mt-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span className="text-gray-300">
                    <strong>Location:</strong> Islamabad, Pakistan
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span className="text-gray-300">
                    <strong>Email:</strong> 2704muhammadahmed@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span className="text-gray-300">
                    <strong>Phone:</strong> +92 3115168949
                  </span>
                </div>
              </motion.div>
            </motion.div>


            {/* Image/Avatar */}
            <motion.div
              variants={itemVariants}
              className="relative group flex justify-center items-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative bg-secondary/50 backdrop-blur border border-accent/30 rounded-3xl p-6 flex items-center justify-center overflow-hidden">
                <motion.img
                  src="/profile.png"
                  alt="Muhammad Ahmed"
                  animate={{ rotate: [0, 1, -1, 0], scale: [1, 1.01, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-64 h-72 sm:w-80 sm:h-80 rounded-2xl object-cover object-top shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
