import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import AbstractShape from '../components/AbstractShape'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [showCVDropdown, setShowCVDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCVDropdown(false)
      }
    }

    if (showCVDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCVDropdown])

  const cvLinks = {
    id: 'https://drive.google.com/file/d/1-ST_N6s3abZLHt0RbtfiCflBv3rB2U3Z/view?usp=sharing',
    en: 'https://drive.google.com/file/d/1v7v_ks6H38zWMupUSkwxBE3GA1eTp_ne/view?usp=sharing'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent-crimson/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="block text-text-primary">JOSUA</span>
                <span className="block text-text-primary">ABRIANTO</span>
                <span className="block text-accent-crimson">HARIANJA</span>
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <p className="font-body text-xl md:text-2xl lg:text-3xl text-text-secondary max-w-xl">
                {t('hero.tagline')}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <div>
                <p className="font-mono text-xs text-text-secondary uppercase mb-1">{t('hero.role').split(' ')[0]}</p>
                <p className="font-body text-sm text-text-primary">{t('hero.role')}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-text-secondary uppercase mb-1">Location</p>
                <p className="font-body text-sm text-text-primary">{t('hero.location')}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-text-secondary uppercase mb-1">Status</p>
                <p className="font-body text-sm text-accent-amber flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-amber rounded-full animate-pulse" />
                  {t('hero.status')}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href="https://github.com/josuaabrianto15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-accent-crimson text-text-secondary hover:text-text-primary transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/josua-abrianto-harianja-74a704328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-accent-crimson text-text-secondary hover:text-text-primary transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="mailto:josuaabrianto15@gmail.com"
                className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-accent-crimson text-text-secondary hover:text-text-primary transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#work"
                className="px-8 py-4 bg-accent-crimson text-text-primary font-mono text-sm uppercase tracking-wider hover:bg-accent-crimson/80 transition-colors border-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.work')}
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border border-text-primary text-text-primary font-mono text-sm uppercase tracking-wider hover:bg-text-primary hover:text-bg-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.contact')}
              </motion.a>
              
              {/* Download CV Button with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                  className="px-8 py-4 border border-accent-amber text-accent-amber font-mono text-sm uppercase tracking-wider hover:bg-accent-amber hover:text-bg-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                  <svg 
                    className={`inline-block ml-2 w-4 h-4 transition-transform ${showCVDropdown ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {showCVDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 w-64 bg-bg-primary border border-border-subtle shadow-2xl z-50"
                    >
                      <a
                        href={cvLinks.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-4 font-mono text-sm text-text-primary hover:bg-accent-crimson/10 hover:text-accent-crimson transition-colors border-b border-border-subtle"
                        onClick={() => setShowCVDropdown(false)}
                      >
                        🇮🇩 CV Bahasa Indonesia
                      </a>
                      <a
                        href={cvLinks.en}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-4 font-mono text-sm text-text-primary hover:bg-accent-crimson/10 hover:text-accent-crimson transition-colors"
                        onClick={() => setShowCVDropdown(false)}
                      >
                        🇬🇧 CV English
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] md:h-[600px] hidden lg:block"
          >
            {!prefersReducedMotion ? (
              <Suspense fallback={<div className="w-full h-full bg-bg-secondary animate-pulse rounded-lg" />}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <AbstractShape />
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </Suspense>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-accent-crimson rounded-lg transform rotate-45" />
              </div>
            )}

            {!prefersReducedMotion && (
              <>
                <motion.div
                  className="absolute top-1/4 left-full ml-8 w-20 h-20 border-2 border-accent-crimson/30"
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-full ml-4 w-16 h-16 border-2 border-accent-amber/30 rounded-full"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-text-secondary uppercase">{t('hero.scroll')}</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-crimson to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
