import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { socialLinks } from '../data/projects'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()
  
  // FormSubmit akan redirect ke halaman thank you setelah submit
  // Ganti YOUR_EMAIL dengan email Anda yang sebenarnya
  const formSubmitEmail = 'josuaabrianto15@gmail.com'

  const socialLinksData = [
    {
      name: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      icon: '✉',
    },
    {
      name: 'GitHub',
      value: '@josuaabrianto15',
      href: socialLinks.github,
      icon: '⌨',
    },
    {
      name: 'LinkedIn',
      value: 'Josua Abrianto Harianja',
      href: socialLinks.linkedin,
      icon: '💼',
    },
  ]

  return (
    <section id="contact" className="section-padding min-h-screen flex items-center" ref={ref}>
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-sm text-accent-crimson mb-4">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-none mb-8">
                {t('contact.headline')} <span className="text-accent-crimson">{t('contact.headline.accent')}</span>
              </h3>
              <p className="font-body text-xl text-text-secondary max-w-lg">
                {t('contact.subheading')}
              </p>
            </div>

            <div className="space-y-6">
              {socialLinksData.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-text-secondary uppercase mb-1">
                      {link.name}
                    </p>
                    <p className="font-body text-text-primary group-hover:text-accent-crimson transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
              
              {/* CV Download Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-border-subtle"
              >
                <p className="font-mono text-xs text-text-secondary uppercase mb-3">Download CV</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1-ST_N6s3abZLHt0RbtfiCflBv3rB2U3Z/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-accent-amber text-accent-amber font-mono text-xs hover:bg-accent-amber hover:text-bg-primary transition-colors"
                  >
                    🇮🇩 ID
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1v7v_ks6H38zWMupUSkwxBE3GA1eTp_ne/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-accent-amber text-accent-amber font-mono text-xs hover:bg-accent-amber hover:text-bg-primary transition-colors"
                  >
                    🇬🇧 EN
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg-secondary border border-border-subtle p-8 md:p-12"
          >
            <h4 className="font-display text-2xl font-bold text-text-primary mb-8">
              {t('contact.form.title')}
            </h4>

            <form 
              action={`https://formsubmit.co/${formSubmitEmail}`}
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label htmlFor="name" className="font-mono text-xs text-text-secondary uppercase mb-2 block">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-border-subtle text-text-primary font-body focus:outline-none focus:border-accent-crimson transition-colors"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-text-secondary uppercase mb-2 block">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-border-subtle text-text-primary font-body focus:outline-none focus:border-accent-crimson transition-colors"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-text-secondary uppercase mb-2 block">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bg-primary border border-border-subtle text-text-primary font-body focus:outline-none focus:border-accent-crimson transition-colors resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-accent-crimson text-text-primary font-mono text-sm uppercase tracking-wider hover:bg-accent-crimson/80 transition-colors border-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
