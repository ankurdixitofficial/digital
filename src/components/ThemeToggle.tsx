'use client';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

const MotionButton = motion.button;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionButton
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-[var(--madder)] p-1 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-[var(--snow)] flex items-center justify-center"
        initial={false}
        animate={{
          left: theme === 'light' ? '4px' : 'calc(100% - 28px)',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {theme === 'light' ? (
          <FiSun className="w-4 h-4 text-[var(--madder)]" />
        ) : (
          <FiMoon className="w-4 h-4 text-[var(--madder)]" />
        )}
      </motion.div>
      <div className="flex justify-between px-1">
        <FiSun className="w-4 h-4 text-[var(--snow)]" />
        <FiMoon className="w-4 h-4 text-[var(--snow)]" />
      </div>
    </MotionButton>
  );
};

export default ThemeToggle; 