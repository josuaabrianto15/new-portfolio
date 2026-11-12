import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Capabilities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const techStack = [
    { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'Flutter', icon: 'devicon-flutter-plain', color: '#02569B' },
    { name: 'Dart', icon: 'devicon-dart-plain', color: '#0175C2' },
    { name: 'Laravel', icon: 'devicon-laravel-plain', color: '#FF2D20' },
    { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', color: '#7952B3' },
    { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
    { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' },
    { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
    { name: 'Figma', icon: 'devicon-figma-plain', color: '#F24E1E' },
    { name: 'Postman', icon: 'devicon-postman-plain', color: '#FF6C37' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="expertise" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-sm text-accent-crimson mb-4">{t('cap.title')}</h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-text-primary max-w-3xl">
            {t('cap.headline')}
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group"
            >
              <div className="bg-bg-secondary border border-border-subtle hover:border-accent-crimson transition-all duration-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: tech.color }}
                />
                
                {/* Icon */}
                <i 
                  className={`${tech.icon} text-5xl md:text-6xl mb-3 relative z-10 transition-all duration-300`}
                  style={{ color: 'var(--color-text-secondary)' }}
                />
                
                {/* Name */}
                <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Capabilities
