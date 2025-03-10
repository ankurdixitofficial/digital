'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Replace motion components with m components
const MotionDiv = m.div;
const MotionH2 = m.h2;
const MotionA = m.a;

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
      title: 'PythoGraphy - Personal Blog Platform',
      description: 'Developed a dynamic personal blog using React for a responsive frontend and MongoDB for a scalable backend, enabling users to create, edit, and view posts with seamless data management and an engaging user interface.',
      tech: ['React', 'MongoDB', 'Node.js', 'Express', 'CSS'],
      github: 'https://github.com/ankurdixitofficial/PythoGraphy',
      external: 'https://pythography.ankurdixit.live/',
      image: '/assets/blog-project.jpg',
    },
    {
      title: 'Haventure - Real Estate Platform',
      description: 'Built a real estate platform using the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS for a modern, responsive design, allowing users to browse, list, and manage properties with an intuitive interface.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com',
      external: 'https://project.com',
      image: '/assets/real-estate-project.jpg',
    },
    {
      title: 'Web Scraping Tools',
      description: 'Created efficient web scraping tools with Playwright and Selenium for browser automation, and BeautifulSoup for HTML parsing, to extract and process data from websites accurately for various analytical purposes.',
      tech: ['Python', 'Playwright', 'Selenium', 'BeautifulSoup'],
      github: 'https://github.com',
      external: 'https://project.com',
      image: '/assets/scraping-project.jpg',
    },
    {
      title: 'TalRec - AI-Powered Resume Screening Tool',
      description: 'Developing an AI-powered resume screening tool using Python for data processing and MongoDB for storing candidate data, enabling automated filtering and ranking of resumes based on job requirements.',
      tech: ['Python', 'MongoDB', 'Machine Learning', 'NLP'],
      github: 'https://github.com',
      external: 'https://project.com',
      image: '/assets/resume-project.jpg',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <MotionDiv 
        className="container mx-auto px-6 pt-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MotionH2 
          variants={itemVariants}
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl font-bold mb-8"
        >
          Featured Projects
        </MotionH2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.1 }}
              className="relative grid md:grid-cols-12 gap-8 items-center"
            >
              {/* Project Image */}
              <MotionDiv 
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
              </MotionDiv>

              {/* Project Info */}
              <MotionDiv
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
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <MotionA
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--madder)] hover:text-[var(--madder-light)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub size={20} />
                  </MotionA>
                  <MotionA
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--madder)] hover:text-[var(--madder-light)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiExternalLink size={20} />
                  </MotionA>
                </div>
              </MotionDiv>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </LazyMotion>
  );
};

export default Work; 
