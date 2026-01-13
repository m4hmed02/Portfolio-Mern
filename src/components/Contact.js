import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-lg opacity-30"
      />

      <div className="max-w-4xl mx-auto relative z-10">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Have a project in mind? Let's discuss how we can work together.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto mt-6"
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {[
              {
                icon: Mail,
                title: 'Email',
                value: '2704muhammadahmed@gmail.com',
                link: 'mailto:2704muhammadahmed@gmail.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+92 3115168949',
                link: 'tel:+923115168949',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Islamabad, Pakistan',
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="mt-1">
                  <contact.icon className="text-accent group-hover:text-blue-400 transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                  <p className="text-gray-400 group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div className="pt-8 border-t border-secondary">
              <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent transition-colors text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent transition-colors text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-blue-400 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/50 disabled:opacity-70 transition-all"
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
