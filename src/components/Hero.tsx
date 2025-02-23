'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-[--primary-color] mb-5 font-mono"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-[--white] text-5xl md:text-7xl font-bold mb-4"
        >
          Ankur Dixit.
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-[--text-color] text-4xl md:text-6xl font-bold mb-8"
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-[--text-color] max-w-xl mb-12 text-lg"
        >
          I&apos;m a software gandu engineer specializing in building exceptional digital experiences.
          Currently, I&apos;m focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a href="#work" className="button text-lg px-8 py-4 inline-block">
            Check out my work!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 