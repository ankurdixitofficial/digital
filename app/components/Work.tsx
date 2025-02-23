'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/* eslint-disable react/jsx-no-undef */

const Work = () => {
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

  const projects = [
    {
      title: 'Personal Blog Website',
      description: 'Developed a dynamic personal blog using React for a responsive frontend and MongoDB for a scalable backend, enabling users to create, edit, and view posts with seamless data management and an engaging user interface.',
      tech: ['React', 'MongoDB', 'Node.js', 'Express', 'CSS'],
      github: 'https://github.com',
      external: 'https://project.com',
      image: '/assets/blog-project.jpg',
    },
    {
      title: 'Real Estate Website',
      description: 'Built a real estate platform using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS for a modern, responsive design, allowing users to browse, list, and manage properties with an intuitive interface.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com',
      external: 'https://project.com',
      image: '/assets/real-estate-project.jpg',
    },
  ];

  return (
    <motion.div 
      className="container mx-auto px-6 pt-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 
        variants={itemVariants}
        viewport={{ once: true, amount: 0.1 }}
        className="text-4xl font-bold mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid md:grid-cols-12 gap-8 items-center"
          >
            {/* Project Image */}
            <motion.div 
              className={`relative md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.1 }}
            >
              <p className="text-sm mb-2 text-[var(--madder)]">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <div className="bg-[var(--madder)] text-[var(--snow)] p-6 rounded-lg mb-4 backdrop-blur-sm shadow-lg">
                <p>{project.description}</p>
              </div>
              <ul className={`flex gap-4 mb-8 flex-wrap ${
                index % 2 === 1 ? 'md:justify-end' : ''
              }`}>
                {project.tech.map((tech) => (
                  <li key={tech} className="text-sm text-[var(--madder)]">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work; 