'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillsByCategory = {
    'Programming Languages': ['PYTHON', 'C++'],
    'Web Technologies': ['HTML5', 'CSS', 'JAVASCRIPT'],
    'Frameworks': ['BOOTSTRAP', 'TAILWIND'],
    'Database': ['SQL', 'MYSQL WORKSTATION', 'MONGODB'],
    'Operating System': ['WINDOWS', 'LINUX', 'ANDROID'],
    'Tools': ['PLAYWRIGHT', 'SELENIUM', 'BEAUTIFULSOUP', 'FIGMA', 'WORDPRESS', 'WIX']
  };

  return (
    <>
      {/* Page Divider */}
      <div className="relative w-full py-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-48 h-[4px] bg-[var(--madder)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--madder)] opacity-50 blur-sm"></div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-4xl font-bold mb-16"
        >
          MY SKILLS
        </motion.h2>

        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              className="relative"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold text-[var(--madder)] mb-6 text-center"
              >
                {category}
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-[var(--madder)]/20 rounded-lg blur-xl group-hover:bg-[var(--madder)]/30 transition-all duration-300"></div>
                    <div className="relative bg-[var(--navy)] border border-[var(--madder)]/20 rounded-lg p-4 h-full flex items-center justify-center text-center group-hover:border-[var(--madder)]/40 transition-all duration-300">
                      <p className="text-[var(--snow)] text-sm font-medium">{skill}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Page Divider */}
      <div className="relative w-full py-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-48 h-[4px] bg-[var(--madder)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--madder)] opacity-50 blur-sm"></div>
        </div>
      </div>
    </>
  );
};

export default Skills; 