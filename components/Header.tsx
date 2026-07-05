'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ThemeSwitcher from '@/components/ThemeSwitcher'

interface NavLink {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

export default function Header() {
  const { t, dir } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.blog, href: '/blog' },
  ]

  const navSubtitles: Record<string, string> = {
    '/': t.hero?.subtitle || 'Création de Solutions Numériques',
    '/about': t.hero?.description || 'Découvrez mon parcours et mes compétences',
    '/services': t.services?.subtitle || 'Services numériques et créatifs',
    '/projects': t.portfolio?.subtitle || 'Projets créatifs et technologiques',
    '/skills': t.skills?.subtitle || 'Outils et technologies que j\'utilise',
    '/blog': t.blog?.subtitle || 'Articles et réflexions sur le développement',
  }

  return (
    <header
      dir={dir}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-6xl ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-primary-500/50 rounded-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo et nom à gauche */}
          <Link href="/" className="flex items-center gap-2" dir={dir}>
            <NextImage
              src="/svg mon logo favicon.png"
              alt="Rajae Elouardani Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-lg md:text-xl font-bold text-white flex items-center gap-1 font-tech">
              <span className="text-primary-500">{t.nav.firstName || 'RAJAE'}</span>
              <span>{t.nav.lastName || 'ELOUARDANI'}</span>
            </span>
          </Link>

          {/* Menu centré - Desktop seulement */}
          <div className="hidden md:flex items-center space-x-5 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {link.submenu ? (
                  <>
                    <button className="text-white hover:text-primary-500 transition-colors font-medium flex items-center text-sm">
                      {link.name}
                      <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2 border border-gray-800"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-primary-500 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <div
                    className="relative group"
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link
                      href={link.href}
                      className={`text-white hover:text-primary-500 transition-colors font-medium relative text-sm ${
                        pathname === link.href ? 'text-primary-500' : ''
                      }`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    {hoveredLink === link.href && navSubtitles[link.href] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-900 rounded-lg shadow-lg border border-gray-800 whitespace-nowrap z-50 pointer-events-none"
                      >
                        <p className="text-xs text-gray-300">{navSubtitles[link.href]}</p>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-800 rotate-45"></div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contrôles et Menu Button à droite */}
          <div className="flex items-center gap-2">
            {/* Contrôles - Desktop seulement */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-1.5 rounded-lg transition-colors font-semibold text-sm"
                >
                  {t.nav.contactMe}
                </motion.button>
              </Link>
            </div>

            {/* Menu Button - à droite - Mobile seulement */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              />
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden mt-4 pb-4 space-y-2 overflow-visible relative z-50 bg-black/95 backdrop-blur-md rounded-2xl border border-gray-800 p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                          className="w-full text-left text-white hover:text-primary-500 transition-colors font-medium flex items-center justify-between py-2"
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openSubmenu === link.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSubmenu === link.name && (
                          <div className="pl-4 space-y-2 mt-2">
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block text-gray-300 hover:text-primary-500 transition-colors py-1"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setOpenSubmenu(null)
                                }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-white hover:text-primary-500 transition-colors py-2 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between relative">
                    <span className="text-gray-300 text-sm font-medium leading-8">Language</span>
                    <div className="flex items-center">
                      <LanguageSwitcher isMobile={true} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between relative">
                    <span className="text-gray-300 text-sm font-medium leading-8">Theme</span>
                    <div className="flex items-center">
                      <ThemeSwitcher isMobile={true} />
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg transition-colors mt-4 text-center font-semibold"
                >
                  {t.nav.contactMe}
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
