'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Image from 'next/image'

// Helper function to get organization logo
const getOrgLogo = (issuer: string) => {
  const logoMap: { [key: string]: string } = {
    // Noms originaux (FR)
    'Université Moulay Ismaïl': '/logos/umi.png',
    'Photography FSM Club': '/logos/photography .png',
    'Tamwilcom': '/logos/incubooster-1-1-1-1-1-1-1-1.png',
    'INCUBOOSTER': '/logos/incubooster-1-1-1-1-1-1-1-1.png',
    'Université Moulay Ismail Meknès': '/logos/umi.png',
    'INJAZ Al-Maghrib (Junior Achievement Worldwide)': '/logos/injaz jw.png',
    'INJAZ El Maghreb & Attijariwafa Bank': '/logos/Attijariwafa_bank_logo.png',
    'Association "أنا وأنت"': '/logos/ana wa ant association.jpg',
    'Lycée Moulay Ismail Meknes': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Attijariwafa Bank': '/logos/Attijariwafa_bank_logo.png',
    'Citi Bank': '/logos/citibank.webp',
    'Entreprendre pour Apprendre (JA Worldwide)': '/logos/injaz jw.png',
    // Variantes traduites EN
    'Moulay Ismaïl University': '/logos/umi.png',
    'Moulay Ismail Meknès University': '/logos/umi.png',
    'Junior Achievement Worldwide (JA Worldwide)': '/logos/injaz jw.png',
    'Moulay Ismail Meknes High School': 'https://cdn.simpleicons.org/microsoft/0078D4',
    // Variantes traduites AR
    'جامعة مولاي إسماعيل': '/logos/umi.png',
    'جامعة مولاي إسماعيل مكناس': '/logos/umi.png',
    'إنجاز المغرب (Junior Achievement Worldwide)': '/logos/injaz jw.png',
    'إنجاز المغرب وبنك التجاري وفا بنك': '/logos/Attijariwafa_bank_logo.png',
    'جمعية "أنا وأنت"': '/logos/ana wa ant association.jpg',
    'ثانوية مولاي إسماعيل مكناس': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'بنك التجاري وفا بنك': '/logos/Attijariwafa_bank_logo.png',
    'سيتي بنك': '/logos/citibank.webp',
    'التعلم من خلال ريادة الأعمال (JA Worldwide)': '/logos/injaz jw.png',
    'تمويلكم': '/logos/incubooster-1-1-1-1-1-1-1-1.png',
  }
  
  return logoMap[issuer] || 'https://cdn.simpleicons.org/microsoft/0078D4'
}

const honorsAwards = [
  {
    id: 1,
    title: 'Meilleure vidéo créative',
    issuer: 'Université Moulay Ismaïl',
    date: 'Apr 2025',
    description: 'Prix du Design 🏆 lors de la compétition des meilleures vidéos créatives des clubs de l\'Université Moulay Ismaïl (UMI), tenue les 10 et 11 avril 2025 dans le cadre de la journée "UMI Out Of The Box".',
    associated: 'Photography FSM Club',
    color: 'text-green-400',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Prix de la compétition du DEEPTECH STARTUP CHALLENGE',
    issuer: 'Tamwilcom',
    date: 'Jan 2025',
    description: 'Prix de la compétition du DEEPTECH STARTUP CHALLENGE organisé par l\'Université Moulay Ismaïl en partenariat avec INCUBOOSTER. Cette journée a été marquée par des présentations inspirantes, des échanges enrichissants entre chercheurs, étudiants et entrepreneurs, ainsi qu\'une compétition stimulante, transformant des idées novatrices en projets à fort impact.',
    associated: 'Université Moulay Ismail Meknès',
    color: 'text-primary-500',
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Prix de Attijariwafa Bank dans la compétition nationale d\'INJAZ Elmaghreb',
    issuer: 'Attijariwafa Bank',
    date: 'May 2023',
    description: 'Prix de Attijariwafa Bank dans la compétition nationale d\'INJAZ Elmaghreb.',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
    color: 'text-green-400',
    icon: '🏅',
  },
  {
    id: 4,
    title: 'Prix de Citi Bank dans la compétition nationale d\'INJAZ Elmaghreb',
    issuer: 'Citi Bank',
    date: 'May 2023',
    description: 'Prix de Citi Bank dans la compétition nationale d\'INJAZ Elmaghreb.',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
    color: 'text-primary-500',
    icon: '🏅',
  },
  {
    id: 5,
    title: 'Premier prix de compétition Innovation Camp',
    issuer: 'INJAZ El Maghreb & Attijariwafa Bank',
    date: 'Apr 2023',
    description: 'Premier prix de compétition Innovation Camp d\'organisation INJAZ El Maghreb & Attijariwafa Bank.',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
    color: 'text-green-400',
    icon: '🥇',
  },
  {
    id: 6,
    title: 'Prix de compétition régionale de l\'association "أنا وأنت"',
    issuer: 'Association "أنا وأنت"',
    date: 'Jul 2021',
    description: 'Prix de compétition régionale de l\'association "أنا وأنت".',
    associated: 'Lycée Moulay Ismail Meknes',
    color: 'text-primary-500',
    icon: '🎖️',
  },
]

const getHonorsAwards = (t: any) => {
  return honorsAwards.map((award, index) => {
    const translation = t?.honors?.list?.[index]
    return {
      ...award,
      title: translation?.title || award.title,
      description: translation?.description || award.description,
      issuer: translation?.issuer || award.issuer, // Nom traduit pour l'affichage
      issuerOriginal: award.issuer, // Nom original pour la recherche du logo
      date: translation?.date || award.date,
      associated: translation?.associated || award.associated,
      color: award.color,
      icon: award.icon,
    }
  })
}

export default function HonorsAwards() {
  const { t, dir } = useLanguage()
  const translatedHonorsAwards = getHonorsAwards(t)
  
  return (
    <section id="honors-awards" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t?.honors?.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono" dir={dir}>
            {t?.honors?.title || 'Honors & Awards'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.honors?.subtitle || "Récompenses et distinctions reçues pour l'excellence et l'innovation dans divers domaines."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedHonorsAwards.map((award: any, index: number) => (
            <Card3D key={award.id} intensity={8} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg transition-all duration-300 cursor-pointer group card-3d transform-3d relative h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="mb-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-300 p-2">
                        <Image
                          src={getOrgLogo((award as any).issuerOriginal || award.issuer)}
                          alt={award.issuer}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = '<span class="text-2xl">🏆</span>'
                            }
                          }}
                          unoptimized
                        />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${award.color} group-hover:text-primary-500 transition-colors`} dir={dir}>
                      {award.title}
                    </h3>
                    <p className="text-white font-semibold text-sm mb-1" dir={dir}>{award.issuer}</p>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700 inline-block mb-2" dir={dir}>
                      {award.date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 flex-1" dir={dir}>{award.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                  <span className="text-xs text-gray-500" dir={dir}>{award.associated}</span>
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

