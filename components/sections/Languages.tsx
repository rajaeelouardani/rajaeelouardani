'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const getLanguages = (t: any) => {
  // Safety check for languagesList
  const languagesList = t?.languages?.languagesList || []
  
  return [
    {
      id: 1,
      name: languagesList[0]?.name || 'English',
      nameEn: languagesList[0]?.nameEn || 'English',
      level: languagesList[0]?.level || 'Professional',
      icon: '🇬🇧',
      color: 'text-green-400',
    },
    {
      id: 2,
      name: languagesList[1]?.name || 'Arabic',
      nameEn: languagesList[1]?.nameEn || 'Arabic',
      level: languagesList[1]?.level || 'Native',
      icon: '🇲🇦',
      color: 'text-primary-500',
    },
    {
      id: 3,
      name: languagesList[2]?.name || 'French',
      nameEn: languagesList[2]?.nameEn || 'French',
      level: languagesList[2]?.level || 'Professional',
      icon: '🇫🇷',
      color: 'text-green-400',
    },
    {
      id: 4,
      name: languagesList[3]?.name || 'Turkish',
      nameEn: languagesList[3]?.nameEn || 'Turkish',
      level: languagesList[3]?.level || 'A1',
      icon: '🇹🇷',
      color: 'text-primary-500',
    },
  ]
}

export default function Languages() {
  const { t, dir } = useLanguage()
  const languages = getLanguages(t)
  return (
    <section id="languages" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t.languages.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono" dir={dir}>
            <LayoutTextFlip
              text=""
              words={t.languages.flipWords}
              className="text-4xl md:text-5xl"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.languages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <Card3D key={language.id} intensity={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg transition-all duration-300 cursor-pointer group card-3d transform-3d relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {language.icon}
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-1 ${language.color} group-hover:text-primary-500 transition-colors`} dir={dir}>
                    {language.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2" dir={dir}>{language.nameEn}</p>
                  <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full border border-gray-700" dir={dir}>
                    {language.level}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-lg shine-effect opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}

