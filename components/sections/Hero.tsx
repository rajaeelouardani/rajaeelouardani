'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import Link from 'next/link'

export default function Hero() {
  const { t, dir } = useLanguage()
  
  const credentials = [
    { text: t.hero.credentials.student, link: null },
    { text: t.hero.credentials.alx, link: null },
    { text: t.hero.credentials.ambassador, link: 'https://10000codeurs.com/rajae-elouardani/' },
    { text: t.hero.credentials.cofounder, link: null },
    { text: t.hero.credentials.president, link: null },
  ]

  return (
    <section id="home" dir={dir} className="min-h-screen flex items-center justify-center bg-black/80 pt-20 relative overflow-hidden z-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-tech text-center"
              >
                <span className="text-white">{t.hero.imA}</span>{' '}
                <LayoutTextFlip
                  text=""
                  words={t.hero.roles}
                  className="text-5xl md:text-6xl lg:text-7xl font-tech"
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-semibold font-tech text-center flex items-center justify-center gap-2 flex-wrap"
              >
                <span className="text-white inline-block">{t.hero.subtitle?.substring(0, Math.ceil((t.hero.subtitle?.length || 0) / 2)) || ''}</span>
                <span className="text-primary-500 inline-block">{t.hero.subtitle?.substring(Math.ceil((t.hero.subtitle?.length || 0) / 2)) || ''}</span>
              </motion.p>
              <motion.span
                animate={{ 
                  opacity: [1, 0.8, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="block text-center text-lg text-gray-400 mt-2"
              >
                {t.hero.craftingDigitalSolutions}
              </motion.span>
            </div>

            {/* Subtitle - Value + Tech */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
              dir={dir}
              dangerouslySetInnerHTML={{
                __html: t.hero.descriptionText
                  .replace(/Next\.js/g, '<span class="text-primary-500 font-semibold">Next.js</span>')
                  .replace(/React\.js/g, '<span class="text-primary-500 font-semibold">React.js</span>')
                  .replace(/Node\.js/g, '<span class="text-primary-500 font-semibold">Node.js</span>')
              }}
            />

            {/* Credibility Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {credentials.map((credential, index) => {
                const content = (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`glass-effect inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 transition-colors ${
                      credential.link 
                        ? 'hover:text-blue-400 cursor-pointer' 
                        : 'hover:text-primary-400'
                    }`}
                  >
                    {credential.text}
                  </motion.span>
                )
                
                if (credential.link) {
                  return (
                    <Link
                      key={index}
                      href={credential.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </Link>
                  )
                }
                
                return content
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button text-white px-8 py-4 rounded-full font-semibold transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">{t.hero.workTogether}</span>
                  <div className="absolute inset-0 shine-effect"></div>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="glass-button border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400/20 hover:text-blue-300 transition-all"
              >
                {t.hero.viewMyProjects}
              </motion.button>
              <Link
                href="https://10000codeurs.com/rajae-elouardani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400/20 hover:text-green-300 transition-all relative overflow-hidden group flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>10000 Codeurs</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <Card3D className="relative" intensity={20}>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl transform-3d border border-primary-500/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 bg-primary-500 rounded-full opacity-20 blur-3xl float-animation"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-full h-full"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/Rajae elouardani.png"
                      alt="Rajae Elouardani - Web Developer"
                      fill
                      className="object-cover rounded-2xl"
                      priority
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 shine-effect opacity-30"></div>
            </motion.div>
          </Card3D>
        </div>
      </div>
    </section>
  )
}
