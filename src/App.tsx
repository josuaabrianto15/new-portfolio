import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import SplashScreen from './components/SplashScreen'
import FloatingNav from './components/FloatingNav'
import Hero from './sections/Hero'
import About from './sections/About'
import Capabilities from './sections/Capabilities'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Check if user has seen splash before
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')
    if (hasSeenSplash) {
      setShowSplash(false)
      setIsLoading(false)
    }
  }, [])

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true')
    setShowSplash(false)
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent-crimson origin-left z-50"
            style={{ scaleX }}
          />
          <FloatingNav />
          
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Capabilities />
            <Projects />
            <Contact />
          </main>

          <footer className="border-t border-border-subtle py-8">
            <div className="container-custom px-6 md:px-12 lg:px-24">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-sm text-text-secondary">
                  © 2026 Josua Abrianto Harianja
                </p>
                <p className="font-mono text-sm text-text-secondary">
                  IPB University
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  )
}

export default App
