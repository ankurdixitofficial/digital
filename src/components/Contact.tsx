'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    } catch (_error) {
    /* eslint-enable @typescript-eslint/no-unused-vars */
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/Ankurdixitofficial', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com/in/ankurdixitofficial', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com/devankurdixit', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:ankurdixitofficial@email.com', label: 'Email' },
  ];

  return (
    <motion.div
      className="container mx-auto px-6 py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div 
        variants={itemVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="text-lg mb-12">
          I&apos;m currently looking for new opportunities. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <motion.form 
          onSubmit={handleSubmit} 
          variants={itemVariants}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 mb-12 bg-[var(--snow)] p-8 rounded-lg border-2 border-[var(--madder)] shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[var(--snow)] rounded-lg px-4 py-3 border border-[var(--madder)] focus:outline-none focus:ring-2 focus:ring-[var(--madder)] text-[var(--madder)]"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[var(--snow)] rounded-lg px-4 py-3 border border-[var(--madder)] focus:outline-none focus:ring-2 focus:ring-[var(--madder)] text-[var(--madder)]"
              />
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full bg-[var(--snow)] rounded-lg px-4 py-3 border border-[var(--madder)] focus:outline-none focus:ring-2 focus:ring-[var(--madder)] text-[var(--madder)]"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-[var(--madder)] text-[var(--snow)] rounded-lg hover:bg-[var(--madder-light)] transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.div>
        </motion.form>

        {submitStatus === 'success' && (
          <motion.p 
            variants={itemVariants}
            viewport={{ once: false, amount: 0.3 }}
            className="text-green-600 mb-6"
          >
            Message sent successfully!
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p 
            variants={itemVariants}
            viewport={{ once: false, amount: 0.3 }}
            className="text-red-600 mb-6"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}

        <motion.div
          variants={itemVariants}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-8 mt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--madder)] hover:text-[var(--madder-light)] transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
