import { motion } from 'framer-motion'
import { Home, User, Grid, Lightbulb, Mail, Sun, Moon, Languages } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const FloatingNav = () => {
  const { t, language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    { icon: Home, label: t('nav.home'), href: '#hero' },
    { icon: User, label: t('nav.about'), href: '#about' },
    { icon: Lightbulb, label: t('nav.expertise'), href: '#expertise' },
    { icon: Grid, label: t('nav.work'), href: '#projects' },
    { icon: Mail, label: t('nav.contact'), href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-bg-primary/20 backdrop-blur-xl border border-border-subtle rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-full hover:bg-accent-crimson/10 transition-colors"
              aria-label={item.label}
            >
              <item.icon 
                className="w-5 h-5 text-text-secondary group-hover:text-accent-crimson transition-colors" 
                strokeWidth={1.5}
              />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-bg-primary border border-accent-crimson px-3 py-1.5 rounded whitespace-nowrap">
                  <span className="font-mono text-xs text-text-primary">{item.label}</span>
                </div>
                <div className="w-2 h-2 bg-bg-primary border-l border-b border-accent-crimson rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
              </div>
            </motion.button>
          ))}
          
          {/* Divider */}
          <div className="w-px h-6 bg-border-subtle mx-1" />
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-3 rounded-full hover:bg-accent-amber/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-text-secondary group-hover:text-accent-amber transition-colors" strokeWidth={1.5} />
            ) : (
              <Moon className="w-5 h-5 text-text-secondary group-hover:text-accent-amber transition-colors" strokeWidth={1.5} />
            )}
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-bg-primary border border-accent-amber px-3 py-1.5 rounded whitespace-nowrap">
                <span className="font-mono text-xs text-text-primary">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </div>
              <div className="w-2 h-2 bg-bg-primary border-l border-b border-accent-amber rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
            </div>
          </motion.button>
          
          {/* Language Toggle */}
          <motion.button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-3 rounded-full hover:bg-accent-amber/10 transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5 text-text-secondary group-hover:text-accent-amber transition-colors" strokeWidth={1.5} />
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-bg-primary border border-accent-amber px-3 py-1.5 rounded whitespace-nowrap">
                <span className="font-mono text-xs text-text-primary">{language === 'en' ? 'ID' : 'EN'}</span>
              </div>
              <div className="w-2 h-2 bg-bg-primary border-l border-b border-accent-amber rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default FloatingNav
