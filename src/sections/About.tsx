import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-padding bg-bg-secondary relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-mono text-sm text-accent-crimson mb-4">{t('about.title')}</h2>
          <div className="w-20 h-px bg-accent-crimson" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
        >
          {/* Photo Card - Smaller */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-[3/4] md:col-span-1 lg:col-span-3 overflow-hidden bg-bg-primary border border-border-subtle group"
          >
            <div className="absolute inset-0">
              <img
                src="/assets/images/josua-profile.jpg"
                alt="Josua Abrianto Harianja"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display text-xl font-bold text-text-primary">Josua Abrianto</p>
              <p className="font-mono text-xs text-accent-crimson">Software Engineer</p>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-5 p-6 bg-bg-primary border border-border-subtle"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {t('about.headline')}
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">
              {t('about.bio1')}
            </p>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {t('about.bio2')}
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-4 p-6 bg-bg-primary border border-border-subtle"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-mono text-xs text-text-secondary uppercase mb-1">{t('about.location.label')}</p>
                <p className="font-body text-sm text-text-primary">{t('about.location.value')}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-text-secondary uppercase mb-1">{t('about.education.label')}</p>
                <p className="font-body text-sm text-text-primary">{t('about.education.value')}</p>
                <p className="font-mono text-xs text-accent-amber mt-0.5">GPA: 3.45/4.00</p>
              </div>
            </div>
            
            <div className="h-px bg-border-subtle my-4" />
            
            {/* Quick Stats */}
            <h4 className="font-mono text-xs uppercase mb-3 text-text-secondary">{t('about.facts')}</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-display text-2xl font-bold text-accent-crimson mb-1">3+</p>
                <p className="font-body text-xs text-text-secondary">{t('about.projects')}</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent-amber mb-1">2</p>
                <p className="font-body text-xs text-text-secondary">{language === 'en' ? 'Awards' : 'Penghargaan'}</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent-crimson mb-1">18+</p>
                <p className="font-body text-xs text-text-secondary">{language === 'en' ? 'Technologies' : 'Teknologi'}</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-accent-amber mb-1">3.45</p>
                <p className="font-body text-xs text-text-secondary">GPA / 4.00</p>
              </div>
            </div>
          </motion.div>

          {/* Awards Section - Full Width */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-12 p-6 bg-bg-primary border border-border-subtle"
          >
            <h4 className="font-mono text-xs text-accent-crimson uppercase mb-4">{t('about.awards.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Award 1 */}
              <div className="flex gap-3 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent-crimson/10 flex items-center justify-center group-hover:bg-accent-crimson/20 transition-colors">
                    <svg className="w-5 h-5 text-accent-crimson" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h5 className="font-display text-base font-bold text-text-primary mb-1">
                    {t('about.awards.best.title')}
                  </h5>
                  <p className="font-body text-xs text-text-secondary mb-2">
                    {t('about.awards.best.event')} • {t('about.awards.best.date')}
                  </p>
                  <p className="font-body text-xs text-text-secondary mb-2 line-clamp-2">
                    {t('about.awards.best.desc')}
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1fVuQtsdDjauGmX-IPuG9UUTkEQKlJK1f/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-accent-crimson hover:text-accent-amber transition-colors group"
                  >
                    {language === 'en' ? 'View Certificate' : 'Lihat Sertifikat'}
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Award 2 */}
              <div className="flex gap-3 group">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center group-hover:bg-accent-amber/20 transition-colors">
                    <svg className="w-5 h-5 text-accent-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <h5 className="font-display text-base font-bold text-text-primary mb-1">
                    {t('about.awards.bronze.title')}
                  </h5>
                  <p className="font-body text-xs text-text-secondary mb-2">
                    {t('about.awards.bronze.event')} • {t('about.awards.bronze.date')}
                  </p>
                  <p className="font-body text-xs text-xs text-text-secondary mb-2 line-clamp-2">
                    {t('about.awards.bronze.desc')}
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1A-lo3wdrZuIRnQ5ttcIRnHiJP5pnrRgX/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-accent-amber hover:text-accent-crimson transition-colors group"
                  >
                    {language === 'en' ? 'View Certificate' : 'Lihat Sertifikat'}
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
