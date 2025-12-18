'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

type ServiceDomain = 'web' | 'branding' | 'photography' | 'videography' | 'entrepreneurship'

export default function Pricing() {
  const { t, dir } = useLanguage()
  const [activeTab, setActiveTab] = useState<ServiceDomain>('web')
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect()
        setIsSticky(rect.top <= 0 && rect.bottom > 200)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getServicesData = (t: any) => {
    return {
      all: {
        description: t?.services?.allDescription || 'A complete range of digital, creative, and technical services to bring ideas to life.',
        domains: [
          { name: t?.services?.webDevelopment || 'Web Development', icon: '💻' },
          { name: t?.services?.branding || 'Branding', icon: '🎨' },
          { name: t?.services?.photography || 'Photography', icon: '📸' },
          { name: t?.services?.videography || 'Videography', icon: '🎬' },
          { name: t?.services?.entrepreneurship || 'Entrepreneurship', icon: '🚀' },
        ]
      },
      web: {
        description: t.services.webDescription || 'I design and develop modern, secure, and scalable web solutions tailored to business needs.',
        packs: [
          {
            name: t.services.webStarter || 'Web Starter',
            features: [
              t.services.webStarterFeature1 || 'One-page or landing website',
              t.services.webStarterFeature2 || 'Responsive UI',
              t.services.webStarterFeature3 || 'Basic SEO & performance',
              t.services.webStarterFeature4 || 'Contact & lead forms',
            ]
          },
          {
            name: t.services.webBusiness || 'Web Business',
            features: [
              t.services.webBusinessFeature1 || 'Multi-page website',
              t.services.webBusinessFeature2 || 'Frontend & backend development',
              t.services.webBusinessFeature3 || 'Authentication system',
              t.services.webBusinessFeature4 || 'API integration',
            ]
          },
          {
            name: t.services.webPro || 'Web Pro',
            features: [
              t.services.webProFeature1 || 'Full-stack web application',
              t.services.webProFeature2 || 'Database architecture',
              t.services.webProFeature3 || 'Admin dashboard',
              t.services.webProFeature4 || 'Deployment & maintenance support',
            ]
          },
        ]
      },
      branding: {
        description: t.services.brandingDescription || 'I help brands define their identity, visual language, and digital presence.',
        packs: [
          {
            name: t.services.brandingEssentials || 'Branding Essentials',
            features: [
              t.services.brandingEssentialsFeature1 || 'Logo design',
              t.services.brandingEssentialsFeature2 || 'Color palette & typography',
              t.services.brandingEssentialsFeature3 || 'Brand guidelines',
            ]
          },
          {
            name: t.services.brandIdentity || 'Brand Identity',
            features: [
              t.services.brandIdentityFeature1 || 'Complete visual identity',
              t.services.brandIdentityFeature2 || 'Social media assets',
              t.services.brandIdentityFeature3 || 'Digital brand kit',
            ]
          },
          {
            name: t.services.brandStrategy || 'Brand Strategy',
            features: [
              t.services.brandStrategyFeature1 || 'Brand positioning',
              t.services.brandStrategyFeature2 || 'Messaging & storytelling',
              t.services.brandStrategyFeature3 || 'Digital branding consulting',
            ]
          },
        ]
      },
      photography: {
        description: t.services.photographyDescription || 'Professional photography focused on storytelling, brand image, and visual impact.',
        packs: [
          {
            name: t.services.photographyBasic || 'Photography Basic',
            features: [
              t.services.photographyBasicFeature1 || 'Photo session',
              t.services.photographyBasicFeature2 || 'Basic editing',
              t.services.photographyBasicFeature3 || 'Web & social formats',
            ]
          },
          {
            name: t.services.photographyPro || 'Photography Pro',
            features: [
              t.services.photographyProFeature1 || 'Creative shooting',
              t.services.photographyProFeature2 || 'Advanced retouching',
              t.services.photographyProFeature3 || 'Brand-oriented visuals',
            ]
          },
          {
            name: t.services.photographyContent || 'Photography Content',
            features: [
              t.services.photographyContentFeature1 || 'Content creation for social media',
              t.services.photographyContentFeature2 || 'Campaign & promotional photos',
            ]
          },
        ]
      },
      videography: {
        description: t.services.videographyDescription || 'Engaging video content designed to communicate stories and promote brands.',
        packs: [
          {
            name: t.services.videoStarter || 'Video Starter',
            features: [
              t.services.videoStarterFeature1 || 'Short video shooting',
              t.services.videoStarterFeature2 || 'Basic editing',
              t.services.videoStarterFeature3 || 'Social media formats',
            ]
          },
          {
            name: t.services.videoBusiness || 'Video Business',
            features: [
              t.services.videoBusinessFeature1 || 'Script & concept',
              t.services.videoBusinessFeature2 || 'Professional shooting',
              t.services.videoBusinessFeature3 || 'Motion effects & transitions',
            ]
          },
          {
            name: t.services.videoPremium || 'Video Premium',
            features: [
              t.services.videoPremiumFeature1 || 'Brand storytelling videos',
              t.services.videoPremiumFeature2 || 'Promotional & campaign content',
              t.services.videoPremiumFeature3 || 'Advanced post-production',
            ]
          },
        ]
      },
      entrepreneurship: {
        description: t.services.entrepreneurshipDescription || 'Supporting startups and innovators from idea to execution.',
        packs: [
          {
            name: t.services.startupConsulting || 'Startup Consulting',
            features: [
              t.services.startupConsultingFeature1 || 'Idea validation',
              t.services.startupConsultingFeature2 || 'Technical roadmap',
              t.services.startupConsultingFeature3 || 'MVP planning',
            ]
          },
          {
            name: t.services.mvpBuilder || 'MVP Builder',
            features: [
              t.services.mvpBuilderFeature1 || 'Product strategy',
              t.services.mvpBuilderFeature2 || 'UX & technical guidance',
              t.services.mvpBuilderFeature3 || 'Development planning',
            ]
          },
          {
            name: t.services.growthSupport || 'Growth Support',
            features: [
              t.services.growthSupportFeature1 || 'Digital strategy',
              t.services.growthSupportFeature2 || 'Branding & tech consulting',
              t.services.growthSupportFeature3 || 'Long-term support',
            ]
          },
        ]
      },
    }
  }

  const servicesData = getServicesData(t)
  const currentData = servicesData[activeTab]

  const tabs: { key: ServiceDomain; label: string }[] = [
    { key: 'web', label: t.services.webDevelopment || 'Web Development' },
    { key: 'branding', label: t.services.branding || 'Branding' },
    { key: 'photography', label: t.services.photography || 'Photography' },
    { key: 'videography', label: t.services.videography || 'Videography' },
    { key: 'entrepreneurship', label: t.services.entrepreneurship || 'Entrepreneurship' },
  ]

  return (
    <section id="pricing" dir={dir} className="py-20 bg-black/80 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono" dir={dir}>
            {t?.pricing?.title || 'Flexible Plan'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.pricing?.subtitle || 'Comprehensive strategies, the realm of consulting caters to a spectrum of needs with its array of versatile offerings.'}
          </p>
        </motion.div>

        {/* Sticky Navbar */}
        <div
          className={`sticky top-0 z-20 mb-8 transition-all duration-300 ${
            isSticky ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-2'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
              dir={dir}
            >
              {currentData.description}
            </motion.p>

            {/* Domain Packs View */}
            {currentData.packs && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentData.packs.map((pack: any, index: number) => (
                  <Card3D key={index} intensity={10}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-8 rounded-lg relative card-3d transform-3d"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {pack.name}
                      </h3>
                      <p className="text-gray-400 mb-6">{currentData.description}</p>
                      <ul className="space-y-3 mb-8">
                        {pack.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <svg
                              className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-full font-semibold transition-all bg-primary-500 hover:bg-primary-600 text-white relative overflow-hidden"
                      >
                        <Link href="/contact" className="relative z-10 block">
                          {t.services.requestQuote || 'Request a Quote'}
                        </Link>
                        <div className="absolute inset-0 shine-effect opacity-0 hover:opacity-20 transition-opacity"></div>
                      </motion.button>
                    </motion.div>
                  </Card3D>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
