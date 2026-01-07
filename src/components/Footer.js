import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-primary border-t border-secondary relative overflow-hidden">
      {/* Background Blur */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-4">
              Muhammad Ahmed
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building amazing digital experiences with modern technologies and creative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Twitter', url: '#' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary border border-accent/30 flex items-center justify-center text-accent hover:border-accent transition-colors"
                  title={social.name}
                >
                  {social.name.charAt(0)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8 origin-left"
        />

        {/* Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm"
          >
            © {currentYear} All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <button onClick={() => {}} className="text-gray-400 hover:text-accent transition-colors text-sm bg-none border-none cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-gray-600">•</span>
            <button onClick={() => {}} className="text-gray-400 hover:text-accent transition-colors text-sm bg-none border-none cursor-pointer">
              Terms of Service
            </button>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#home"
            whileHover={{ y: -3 }}
            className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent text-sm hover:bg-accent/20 transition-colors"
          >
            ↑ Back to top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
