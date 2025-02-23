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
          </motion.div>
        </motion.div>
      ))}
    </div>
  </motion.div> 