'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.from('.hero-text', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text text-[--primary-color] mb-5 font-mono"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-text text-[--white] text-5xl md:text-7xl font-bold mb-4"
        >
          Ankur Dixit.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-text text-[--text-color] text-4xl md:text-6xl font-bold mb-8"
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-text text-[--text-color] max-w-xl mb-12 text-lg"
        >
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently, I&apos;m focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-text"
        >
          <a href="#work" className="button text-lg px-8 py-4">
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 