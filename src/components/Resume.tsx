'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
        duration: 0.5,
      },
    },
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
          RESUME
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-[var(--snow)] rounded-lg shadow-xl p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-[var(--madder)]">My Resume</h3>
              <div className="flex gap-4">
                <motion.a
                  href="/assets/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--madder)] text-[var(--snow)] rounded-md hover:bg-[var(--madder-light)] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload />
                  Download PDF
                </motion.a>
                <motion.a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-[var(--madder)] text-[var(--madder)] rounded-md hover:bg-[var(--madder)] hover:text-[var(--snow)] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                  Open PDF
                </motion.a>
              </div>
            </div>

            <div className="w-full aspect-[1/1.4] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="/assets/resume.pdf"
                className="w-full h-full"
                title="Resume PDF Viewer"
              />
            </div>
          </motion.div>
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

export default Resume; 