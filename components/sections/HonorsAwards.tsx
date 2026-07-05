'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Image from 'next/image'
import Link from 'next/link'
import { sortByDateDesc } from '@/lib/utils'
import { getHonorById, truncateText } from '@/lib/honorsData'

// Helper function to get organization logo
export const getHonorOrgLogo = (issuer: string) => {
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
    'RIDUGE': '/honors/riduge/logo.png',
    'Rallye International des Universités et Grandes Écoles (RIDUGE)': '/honors/riduge/logo.png',
    'Centre UNESCO sur l\'Eau (ICIReWARD)': '/logos/unesco.jpeg',
    'UNESCO ICIReWARD - Water4Future': '/logos/unesco.jpeg',
    'UNESCO Water Centre (ICIReWARD)': '/logos/unesco.jpeg',
    'المركز الدولي UNESCO ICIReWARD': '/logos/unesco.jpeg',
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
    id: 7,
    slug: 'riduge-2026',
    title: '1er Prix RIDUGE 2026 — Rallye International des Universités et Grandes Écoles',
    issuer: 'RIDUGE',
    date: 'Apr 2026',
    shortDescription: '1er prix remporté aux côtés de Imane Halif, à travers 9 villes du Maroc en 4 jours, avec une étape finale à l\'UIR Rabat Business School.',
    description: 'Remporté aux côtés de Imane Halif, ce rallye universitaire nous a menées à travers 9 villes du Maroc en 4 jours : Casablanca, Fès, Taza, Tizi Ouasli, Al Hoceïma, Tanger, Larache, Ksar El Kébir, Rabat — avec une étape finale à l\'UIR Rabat Business School. Un parcours de rigueur, de régularité et d\'esprit d\'équipe. Au-delà du titre, une leçon de discipline, de persévérance et de dépassement de soi. Merci à Dr Mohammed Choukri BELKADI (CGEM région Fès-Meknès), à Biougnach et SevenHorses.ma pour le sponsoring, ainsi qu\'à Mme Saida Begi, M. Abderrazaq Mihamou et M. Abdelouahad Ettoubaji pour leur accompagnement tout au long de l\'aventure. Ce n\'est que le début.',
    associated: 'Université Moulay Ismail Meknès',
    color: 'text-green-400',
    icon: '🥇',
    image: '/honors/riduge/winner.jpeg',
  },
  {
    id: 8,
    title: 'Demi-finaliste — Hackathon International Water4Future 2026',
    issuer: 'Centre UNESCO sur l\'Eau (ICIReWARD)',
    date: 'Feb 2026',
    description: 'Notre équipe HydroNova a atteint les demi-finales (top 38/125) de ce hackathon international organisé par le Centre UNESCO sur l\'Eau à Montpellier. En 48h, nous avons conçu HydroPlanner — une plateforme intelligente pour transformer les villes en "villes éponges" et mieux gérer les eaux pluviales. Représentation de l\'Université Moulay Ismaïl et de la Faculté des Sciences de Meknès face à des équipes de 22 pays. Une fierté d\'avoir porté le drapeau du Maroc sur la scène internationale.',
    associated: 'Université Moulay Ismail Meknès',
    color: 'text-primary-500',
    icon: '🌍',
  },
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

export const getHonorsAwardsList = (t: any) => {
  const translationById = Object.fromEntries(
    (t?.honors?.list || []).map((item: { id: number }) => [item.id, item])
  )

  const items = honorsAwards.map((award) => {
    const translation = translationById[award.id]
    const honorDetail = getHonorById(award.id)
    const fullDescription = translation?.description || award.description

    return {
      ...award,
      title: translation?.title || award.title,
      description: fullDescription,
      shortDescription: translation?.shortDescription || (award as any).shortDescription || truncateText(fullDescription),
      issuer: translation?.issuer || award.issuer,
      issuerOriginal: award.issuer,
      date: translation?.date || award.date,
      associated: translation?.associated || award.associated,
      color: award.color,
      icon: award.icon,
      image: honorDetail?.coverImage || (award as any).image,
      slug: (award as any).slug || honorDetail?.slug,
    }
  })

  return sortByDateDesc(items)
}

export default function HonorsAwards() {
  const { t, dir } = useLanguage()
  const translatedHonorsAwards = getHonorsAwardsList(t)
  
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center flex items-center justify-center" dir={dir}>
            <span className="text-white inline-block">{(t?.honors?.title || 'Honors & Awards').substring(0, Math.ceil((t?.honors?.title || 'Honors & Awards').length / 2))}</span>
            <span className="text-primary-500 inline-block">{(t?.honors?.title || 'Honors & Awards').substring(Math.ceil((t?.honors?.title || 'Honors & Awards').length / 2))}</span>
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
                          src={getHonorOrgLogo((award as any).issuerOriginal || award.issuer)}
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
                {(award as any).image && (
                  <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
                    <Image
                      src={(award as any).image}
                      alt={award.title}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>
                )}
                <p className="text-gray-400 text-sm mb-4 flex-1" dir={dir}>
                  {(award as any).shortDescription}
                  {(award as any).slug && (
                    <>
                      {' '}
                      <Link
                        href={`/honors/${(award as any).slug}`}
                        className="text-primary-500 hover:underline font-semibold whitespace-nowrap"
                      >
                        {t?.honors?.readMore || t?.blog?.readMore || 'Lire plus'}
                      </Link>
                    </>
                  )}
                </p>
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

