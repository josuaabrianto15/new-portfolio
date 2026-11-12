import { motion } from 'framer-motion'

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 1.2,
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-crimson rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-amber rounded-full blur-3xl"
      />

      {/* Name animation */}
      <div className="relative z-10 text-center px-6">
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={0}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-text-primary leading-tight"
          >
            JOSUA
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-text-primary leading-tight"
          >
            ABRIANTO
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={2}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-accent-crimson leading-tight"
          >
            HARIANJA
          </motion.h1>
        </div>

        {/* Animated line */}
        <div className="flex justify-center">
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="h-1 w-64 bg-accent-crimson origin-center"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="font-mono text-sm text-text-secondary mt-8 uppercase tracking-wider"
        >
          Software Engineering Student
        </motion.p>
      </div>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-accent-crimson border-t-transparent rounded-full"
        />
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen
