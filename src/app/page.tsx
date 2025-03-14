'use client';

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative">
        <div className="bg-gradient-radial fixed inset-0 pointer-events-none"></div>
        <div className="relative z-10">
          {/* Hero section with Madder background */}
          <m.section 
            id="hero" 
            className="hero-section flex items-center min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Hero />
          </m.section>

          {/* About section with Snow background */}
          <m.section 
            id="about" 
            className="content-section py-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <About />
          </m.section>

          {/* Skills section with Snow background */}
          <m.section 
            id="skills" 
            className="content-section py-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Skills />
          </m.section>

          {/* Work section with Snow background */}
          <m.section 
            id="work" 
            className="content-section py-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Work />
          </m.section>

          {/* Resume section with Snow background */}
          <m.section 
            id="resume" 
            className="content-section py-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Resume />
          </m.section>

          {/* Contact section with Snow background */}
          <m.section 
            id="contact" 
            className="content-section py-10 md:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Contact />
          </m.section>

          {/* Scroll to top button */}
          <AnimatePresence>
            {showScrollButton && (
              <m.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-[var(--madder)] text-[var(--snow)] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--madder-light)] transition-colors z-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowUp size={24} />
              </m.button>
            )}
          </AnimatePresence>
        </div>
      </main>
    </LazyMotion>
  );
}
