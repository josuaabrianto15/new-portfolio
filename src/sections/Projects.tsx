import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { projectsData } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const projects = [
    {
      ...projectsData.simtoko,
      category: t('proj.simtoko.category'),
      problem: t('proj.simtoko.problem'),
      solution: t('proj.simtoko.solution'),
      role: t('proj.simtoko.role'),
    },
    {
      ...projectsData.ruangbelajar,
      category: t('proj.ruang.category'),
      problem: t('proj.ruang.problem'),
      solution: t('proj.ruang.solution'),
      role: t('proj.ruang.role'),
    },
    {
      ...projectsData.igun,
      category: t('proj.igun.category'),
      problem: t('proj.igun.problem'),
      solution: t('proj.igun.solution'),
      role: t('proj.igun.role'),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section-padding bg-bg-secondary overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-mono text-sm text-accent-crimson mb-4">{t('proj.title')}</h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-text-primary">
            {t('proj.headline')}
          </h3>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 mb-6 text-text-secondary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <span className="font-mono text-xs uppercase">{language === 'en' ? 'Scroll to explore' : 'Geser untuk melihat'}</span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[600px] snap-center"
              >
                <div className="bg-bg-primary border border-border-subtle h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden group">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-crimson transition-colors" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-bg-primary/90 backdrop-blur-sm border border-accent-amber">
                      <p className="font-mono text-xs text-accent-amber uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-display text-3xl font-bold text-text-primary mb-4">
                      {project.title}
                    </h4>

                    <div className="mb-4">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-2">{t('proj.problem')}</p>
                      <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-2">{t('proj.solution')}</p>
                      <p className="font-body text-sm text-text-primary leading-relaxed line-clamp-3">
                        {project.solution}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-2">{t('proj.role')}</p>
                      <p className="font-body text-sm text-text-primary">{project.role}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-2">{t('proj.stack')}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-bg-secondary border border-border-subtle font-mono text-xs text-text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      {/* SimToko has both web and mobile */}
                      {project.title === 'SimToko' ? (
                        <>
                          <motion.a
                            href={project.links.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-accent-crimson text-text-primary font-mono text-xs text-center hover:bg-accent-crimson/80 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Web →
                          </motion.a>
                          <motion.a
                            href={project.links.mobile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 border border-text-primary text-text-primary font-mono text-xs text-center hover:bg-text-primary hover:text-bg-primary transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Mobile →
                          </motion.a>
                        </>
                      ) : (
                        <>
                          {project.links.demo && (
                            <motion.a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-3 bg-accent-crimson text-text-primary font-mono text-xs text-center hover:bg-accent-crimson/80 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {language === 'en' ? 'Live Demo →' : 'Demo Langsung →'}
                            </motion.a>
                          )}
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${project.links.demo ? 'flex-1' : 'w-full'} px-4 py-3 border border-text-primary text-text-primary font-mono text-xs text-center hover:bg-text-primary hover:text-bg-primary transition-colors`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {t('proj.code')}
                          </motion.a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-8 w-8 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-8 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Projects
