'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Skills', 'Work', 'Resume', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#FCF7F8] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className={`text-3xl font-bold ${
              scrolled ? 'text-[#A31621]' : 'text-[#FCF7F8]'
            }`}>
              AD.
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-[15px] transition-colors ${
                  scrolled 
                    ? 'text-[#A31621]/90 hover:text-[#A31621]' 
                    : 'text-[#FCF7F8]/90 hover:text-[#FCF7F8]'
                }`}
              >
                {item}
              </motion.a>
            ))}
            
            {/* GitHub Stars */}
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-2 ${
                scrolled 
                  ? 'text-[#A31621]/90 hover:text-[#A31621]' 
                  : 'text-[#FCF7F8]/90 hover:text-[#FCF7F8]'
              }`}
            >
              <FiGithub size={20} />
              <span>32.6k</span>
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`px-4 py-2 rounded-md transition-colors ${
                scrolled 
                  ? 'bg-[#A31621] text-[#FCF7F8] hover:bg-[#A31621]/90' 
                  : 'bg-[#FCF7F8] text-[#A31621] hover:bg-[#FCF7F8]/90'
              }`}
            >
              Get in touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-[#A31621]/90 hover:text-[#A31621]' : 'text-[#FCF7F8]/90 hover:text-[#FCF7F8]'
              } focus:outline-none`}
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-screen w-2/3 bg-[#A31621] md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="text-lg text-[#FCF7F8]/90 hover:text-[#FCF7F8] transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-md bg-[#FCF7F8] text-[#A31621] hover:bg-[#FCF7F8]/90 transition-colors"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 