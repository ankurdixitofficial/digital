'use client';

import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Skills', 'Work', 'Resume', 'Contact'];

  const getTextColor = () => {
    if (theme === 'dark') {
      return scrolled ? 'text-[var(--pale-taupe)]' : 'text-[var(--pale-taupe)]';
    }
    return scrolled ? 'text-[var(--madder)]' : 'text-[var(--snow)]';
  };

  const getHoverTextColor = () => {
    if (theme === 'dark') {
      return scrolled ? 'hover:text-[var(--madder-light)]' : 'hover:text-[var(--snow)]';
    }
    return scrolled ? 'hover:text-[var(--madder)]' : 'hover:text-[var(--snow)]';
  };

  return (
    <LazyMotion features={domAnimation}>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[var(--snow)] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="relative w-16 h-16 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/l3.png"
                    alt="RTHYMO Logo"
                    fill
                    className="object-contain !p-0 rounded-full"
                    style={{ background: 'transparent' }}
                    priority
                  />
                </div>
              </Link>
            </m.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {menuItems.map((item) => (
                <m.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`nav-link text-[15px] transition-colors ${getTextColor()} opacity-90 ${getHoverTextColor()}`}
                >
                  {item}
                </m.a>
              ))}
              
              {/* GitHub Stars */}
              <m.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`nav-link flex items-center gap-2 ${getTextColor()} opacity-90 ${getHoverTextColor()}`}
              >
                <FiGithub size={20} />
                <span>32.6k</span>
              </m.a>

              <ThemeToggle />

              <m.a
                href="#contact"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`px-4 py-2 rounded-md transition-colors ${
                  scrolled 
                    ? 'bg-[var(--madder)] text-[var(--snow)] hover:bg-[var(--madder-light)]' 
                    : 'bg-[var(--snow)] text-[var(--madder)] hover:bg-[var(--snow)]/90'
                }`}
              >
                Get in touch
              </m.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${getTextColor()} opacity-90 ${getHoverTextColor()} focus:outline-none`}
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-screen w-2/3 bg-[var(--madder)] md:hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item) => (
              <m.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="nav-link text-lg text-[var(--snow)]/90 hover:text-[var(--snow)] transition-colors"
              >
                {item}
              </m.a>
            ))}
            <m.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md bg-[var(--snow)] text-[var(--madder)] hover:bg-[var(--snow)]/90 transition-colors"
            >
              Get in touch
            </m.a>
          </div>
        </m.div>
      </nav>
    </LazyMotion>
  );
};

export default Navbar; 