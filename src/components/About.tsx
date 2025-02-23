'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="heading flex items-center gap-2">
              About Me
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                As a dedicated developer, I am passionate about problem-solving and committed to excellence. 
                I bring strong analytical skills and a proactive approach to staying current with industry advancements, 
                readily adapting to any language or technology.
              </p>
              
              <h3 className="text-[--white] text-xl font-semibold mt-8">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[--primary-color] font-semibold">Bachelor of Technology in Information Technology</h4>
                  <p>Bengal College of Engineering and Technology (University- Makaut)</p>
                  <p>Current CGPA: 7.4</p>
                </div>
                <div>
                  <h4 className="text-[--primary-color] font-semibold">Intermediate XII</h4>
                  <p>Kendriya Vidyalaya AFS Thane with Computer Science</p>
                </div>
              </div>

              <h3 className="text-[--white] text-xl font-semibold mt-8">Languages</h3>
              <ul className="grid grid-cols-2 gap-2">
                {['English', 'Hindi', 'Marathi', 'Russian (Beginners)'].map((lang) => (
                  <li key={lang} className="flex items-center gap-2">
                    <span className="text-[--primary-color]">▹</span> {lang}
                  </li>
                ))}
              </ul>

              <h3 className="text-[--white] text-xl font-semibold mt-8">College Activities</h3>
              <ul className="list-disc list-inside space-y-2 text-[--text-color]">
                <li>Event Management Lead in Robonixx Club</li>
                <li>Governor - Member Of Codevision</li>
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInUp}
            className="relative group mx-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/assets/profile.jpg"
                alt="Ankur Dixit"
                fill
                className="rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
              <div className="absolute inset-0 border-2 border-[--primary-color] rounded-lg translate-x-5 translate-y-5 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 