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
            {projects.map((project) => {
              const isRuangBelajar = project.title === 'RuangBelajar'
              const hasMany = isRuangBelajar
              
              return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[700px] snap-center group"
              >
                <div className="relative bg-gradient-to-br from-accent-crimson/5 via-bg-primary to-accent-amber/5 border border-border-subtle h-full flex flex-col overflow-hidden">
                  {/* Project showcase with multiple screenshots */}
                  <div className="relative p-6 min-h-[450px] bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary overflow-hidden">
                    {/* Background gradient blobs */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-crimson rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-amber rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Dynamic layout based on project */}
                    {hasMany ? (
                      // Layout for SimToko & RuangBelajar - balanced mosaic grid
                      <div className="relative flex gap-3 h-full">
                        {/* Left column - 3 screenshots stacked */}
                        <div className="flex-1 flex flex-col gap-3">
                          <motion.div
                            className="relative flex-1 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
                            whileHover={{ scale: 1.03 }}
                          >
                            <div className="relative h-full bg-bg-primary border-2 border-accent-crimson/30 rounded-lg overflow-hidden shadow-xl">
                              <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary border-b border-border-subtle">
                                <div className="flex gap-1.5">
                                  <div className="w-2 h-2 rounded-full bg-accent-crimson" />
                                  <div className="w-2 h-2 rounded-full bg-accent-amber" />
                                  <div className="w-2 h-2 rounded-full bg-text-secondary/50" />
                                </div>
                              </div>
                              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -inset-3 bg-gradient-to-r from-accent-crimson/20 to-accent-amber/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </motion.div>

                          {project.images[1] && (
                            <motion.div
                              className="relative flex-1 transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-amber/30 rounded-lg overflow-hidden shadow-lg">
                                <img src={project.images[1]} alt={`${project.title} - 2`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}

                          {project.images[2] && (
                            <motion.div
                              className="relative flex-1 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-crimson/30 rounded-lg overflow-hidden shadow-lg">
                                <img src={project.images[2]} alt={`${project.title} - 3`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Right column - 2-3 screenshots stacked */}
                        <div className="flex-1 flex flex-col gap-3">
                          {project.images[3] && (
                            <motion.div
                              className="relative flex-1 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-amber/30 rounded-lg overflow-hidden shadow-lg">
                                <img src={project.images[3]} alt={`${project.title} - 4`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}

                          {project.images[4] && (
                            <motion.div
                              className="relative flex-1 transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-crimson/30 rounded-lg overflow-hidden shadow-lg">
                                <img src={project.images[4]} alt={`${project.title} - 5`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}

                          {project.images[5] && (
                            <motion.div
                              className="relative flex-1 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-amber/30 rounded-lg overflow-hidden shadow-lg">
                                <img src={project.images[5]} alt={`${project.title} - 6`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Original 3-image layout for iGUN
                      <div className="relative grid grid-cols-12 gap-4 h-full">
                        <div className="col-span-7 relative">
                          <motion.div
                            className="relative h-full transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="relative h-full bg-bg-primary border-2 border-accent-crimson/30 rounded-lg overflow-hidden shadow-2xl">
                              <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary border-b border-border-subtle">
                                <div className="flex gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-accent-crimson" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-text-secondary/50" />
                                </div>
                              </div>
                              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent-crimson/20 to-accent-amber/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </motion.div>
                        </div>
                        <div className="col-span-5 flex flex-col gap-4">
                          {project.images[1] && (
                            <motion.div
                              className="relative flex-1 transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-amber/30 rounded-lg overflow-hidden shadow-xl">
                                <img src={project.images[1]} alt={`${project.title} - 2`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}
                          {project.images[2] && (
                            <motion.div
                              className="relative flex-1 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="relative h-full bg-bg-primary border border-accent-crimson/30 rounded-lg overflow-hidden shadow-xl">
                                <img src={project.images[2]} alt={`${project.title} - 3`} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Category badge - floating */}
                    <div className="absolute top-10 right-10 px-4 py-2 bg-accent-amber text-bg-primary font-mono text-xs uppercase tracking-wider shadow-lg transform -rotate-3 z-20">
                      {project.category}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-2 border-accent-crimson/20 rounded-lg transform rotate-12 z-0" />
                    <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-accent-amber/20 rounded-full z-0" />
                  </div>

                  {/* Content section */}
                  <div className="relative p-8 flex-1 flex flex-col bg-bg-primary">
                    <h4 className="font-display text-3xl font-bold text-text-primary mb-2 group-hover:text-accent-crimson transition-colors">
                      {project.title}
                    </h4>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-crimson to-accent-amber mb-6" />

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-mono text-xs text-accent-crimson uppercase mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent-crimson rounded-full" />
                          {t('proj.problem')}
                        </p>
                        <p className="font-body text-xs text-text-secondary leading-relaxed line-clamp-3">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-xs text-accent-amber uppercase mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent-amber rounded-full" />
                          {t('proj.solution')}
                        </p>
                        <p className="font-body text-xs text-text-secondary leading-relaxed line-clamp-3">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-bg-secondary border-l-2 border-accent-amber">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-1">{t('proj.role')}</p>
                      <p className="font-body text-sm text-accent-amber font-semibold">{project.role}</p>
                    </div>

                    <div className="mb-6">
                      <p className="font-mono text-xs text-text-secondary uppercase mb-2">{t('proj.stack')}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-accent-crimson/10 to-accent-amber/10 border border-accent-crimson/20 font-mono text-xs text-text-primary hover:border-accent-crimson transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 6 && (
                          <span className="px-2 py-1 font-mono text-xs text-text-secondary">
                            +{project.stack.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {project.title === 'SimToko' && 'web' in project.links && 'mobile' in project.links ? (
                        <>
                          <motion.a
                            href={project.links.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-accent-crimson to-accent-crimson/80 text-text-primary font-mono text-xs text-center uppercase tracking-wider hover:shadow-lg hover:shadow-accent-crimson/50 transition-all"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Web →
                          </motion.a>
                          <motion.a
                            href={project.links.mobile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 border-2 border-accent-amber text-accent-amber font-mono text-xs text-center uppercase tracking-wider hover:bg-accent-amber hover:text-bg-primary transition-all"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Mobile →
                          </motion.a>
                        </>
                      ) : (
                        <>
                          {'demo' in project.links && project.links.demo && (
                            <motion.a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-3 bg-gradient-to-r from-accent-crimson to-accent-crimson/80 text-text-primary font-mono text-xs text-center uppercase tracking-wider hover:shadow-lg hover:shadow-accent-crimson/50 transition-all"
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {language === 'en' ? 'Live Demo' : 'Demo'} →
                            </motion.a>
                          )}
                          {'github' in project.links && project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${'demo' in project.links && project.links.demo ? 'flex-1' : 'w-full'} px-4 py-3 border-2 border-accent-amber text-accent-amber font-mono text-xs text-center uppercase tracking-wider hover:bg-accent-amber hover:text-bg-primary transition-all`}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              GitHub →
                            </motion.a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
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
