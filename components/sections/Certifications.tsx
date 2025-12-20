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
    'INJAZ Al-Maghrib (Junior Achievement Worldwide)': '/logos/injaz jw.png',
    'Project Management Institute': '/logos/pmief.png',
    'Université Moulay Ismaïl': '/logos/umi.png',
    'Université Moulay Ismail Meknès': '/logos/umi.png',
    '10000 CODEURS': '/logos/1000codeurs.png',
    'ECLEE': '/logos/logo-eclee.png',
    'freeCodeCamp': 'https://cdn.simpleicons.org/freecodecamp/0A0A23',
    'Udemy': 'https://cdn.simpleicons.org/udemy/EC5252',
    'OpenClassrooms': '/logos/openclassrooms_logo.jfif',
    'IBM': '/logos/ibm_logo.jfif',
    'Cambridge International Education': '/logos/cambridgeinternational_logo.jfif',
    'Al Akhawayn University': '/logos/Al Akhawayn University.jfif',
    'AUF': '/logos/auf_logo.jfif',
    'AUF - Afrique Centrale et Grands Lacs': '/logos/auf_logo.jfif',
    'International Association of Physics Students': '/logos/IAPS_LOGO_LIGHT_BACKGROUND-1024x1024.png',
    'UM6P - University Mohammed VI Polytechnic': '/logos/um6p.png',
    'Centre 2htj consulting': '/logos/cape.jpg',
    'Club l\'arc doré Meknes': '/logos/arc dore meknes.jfif',
    'Alison': '/logos/alison_learning_logo.jfif',
    'Unihance': '/logos/unihance_logo.jfif',
    'Faculté des Sciences Meknès': '/logos/umi.png',
    'UNESCO': '/logos/unesco.jpeg',
    'TBH – Tech Business Hub': '/logos/tbh-logo.png',
    'UMI – Tech Business Hub': '/logos/tbh-logo.png',
    'Tech Business Hub': '/logos/tbh-logo.png',
    'Incuboster': '/logos/incubooster-1-1-1-1-1-1-1-1.png',
    'INCUBOOSTER': '/logos/incubooster-1-1-1-1-1-1-1-1.png',
    // Variantes traduites EN
    'Faculty of Sciences Meknès': '/logos/umi.png',
    'Moulay Ismaïl University': '/logos/umi.png',
    'Moulay Ismail Meknès University': '/logos/umi.png',
    'Central Africa and Great Lakes': '/logos/auf_logo.jfif',
    'AUF - Central Africa and Great Lakes': '/logos/auf_logo.jfif',
    // Variantes traduites AR
    'جامعة مولاي إسماعيل': '/logos/umi.png',
    'جامعة مولاي إسماعيل مكناس': '/logos/umi.png',
    'كلية العلوم مكناس': '/logos/umi.png',
    'إنجاز المغرب (Junior Achievement Worldwide)': '/logos/injaz jw.png',
    'معهد إدارة المشاريع': '/logos/pmief.png',
    'AUF - أفريقيا الوسطى والبحيرات الكبرى': '/logos/auf_logo.jfif',
    'الرابطة الدولية لطلاب الفيزياء': '/logos/IAPS_LOGO_LIGHT_BACKGROUND-1024x1024.png',
    'جامعة محمد السادس للبوليتكنيك': '/logos/um6p.png',
    'مركز 2htj للاستشارات': '/logos/cape.jpg',
    'نادي القوس الذهبي مكناس': '/logos/arc dore meknes.jfif',
    'جامعة الأخوين': '/logos/Al Akhawayn University.jfif',
    'كامبريدج التعليم الدولي': '/logos/cambridgeinternational_logo.jfif',
    'اليونسكو': '/logos/unesco.jpeg',
  }
  
  return logoMap[issuer] || 'https://cdn.simpleicons.org/microsoft/0078D4'
}

const certifications = [
  {
    id: 0,
    title: 'Participation au Gamethon UNESCO',
    issuer: 'UNESCO',
    date: '2025',
    description: 'Participation au gamethon organisé à Bouznika en 2025',
    color: 'text-green-400',
  },
  {
    id: 1,
    title: 'Company Program',
    issuer: 'INJAZ Al-Maghrib (Junior Achievement Worldwide)',
    date: 'Jun 2025',
    description: 'Équipe gagnante de la compétition régionale de la | IVR CLUB',
    color: 'text-green-400',
  },
  {
    id: 2,
    title: 'PMI Internship Program',
    issuer: 'Project Management Institute',
    date: 'Jun 2025',
    description: 'Programme présenté par INJAZ Al-Arab/JA MENA en collaboration avec PMI',
    color: 'text-primary-500',
  },
  {
    id: 3,
    title: 'Certificat de Participation',
    issuer: 'Faculté des Sciences Meknès',
    date: 'May 2025',
    description: 'Certificat de participation',
    color: 'text-primary-500',
  },
  {
    id: 4,
    title: 'Meilleure vidéo créative',
    issuer: 'Université Moulay Ismaïl',
    date: 'May 2025',
    description: 'Prix du design - Créativité et photographie',
    color: 'text-green-400',
  },
  {
    id: 5,
    title: 'Passport Numérique 10000 Codeurs',
    issuer: '10000 CODEURS',
    date: 'May 2025 - Expires May 2030',
    description: 'Certification numérique valide jusqu\'en 2030',
    color: 'text-primary-500',
  },
  {
    id: 6,
    title: 'Certificate of Recognition',
    issuer: 'Al Akhawayn University',
    date: 'Apr 2025',
    description: 'Reconnaissance pour contribution exceptionnelle',
    color: 'text-primary-500',
  },
  {
    id: 7,
    title: 'Lean Six Sigma Yellow Belt',
    issuer: 'ECLEE',
    date: 'Apr 2025',
    description: 'Certification internationale en amélioration des processus',
    color: 'text-green-400',
  },
  {
    id: 8,
    title: 'PHOTOGRAPHIE',
    issuer: 'AUF',
    date: 'Apr 2025',
    description: 'Formation en photographie - Université Moulay Ismaïl',
    color: 'text-primary-500',
  },
  {
    id: 9,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Feb 2025',
    description: 'Certification en design web responsive',
    color: 'text-primary-500',
    credentialId: 'fcc55fff73b-ef91-4caa-b11e-b7ef2aeaf96a-rwd',
  },
  {
    id: 10,
    title: 'Attestation de Colloque International Pluridisciplinaire',
    issuer: 'Université Moulay Ismaïl',
    date: 'Oct 2024',
    description: 'Participation au colloque international',
    color: 'text-primary-500',
  },
  {
    id: 11,
    title: 'Company Program',
    issuer: 'INJAZ Al-Maghrib (Junior Achievement Worldwide)',
    date: 'Jun 2024',
    description: 'Programme d\'entrepreneuriat',
    color: 'text-green-400',
  },
  {
    id: 12,
    title: 'Certificate of Appreciation',
    issuer: 'International Association of Physics Students',
    date: 'Mar 2024',
    description: 'Reconnaissance pour contribution exceptionnelle',
    color: 'text-primary-500',
  },
  {
    id: 13,
    title: 'Attestation de formation : Design Thinking',
    issuer: 'AUF - Afrique Centrale et Grands Lacs',
    date: 'Feb 2024',
    description: 'Formation en méthodologie Design Thinking',
    color: 'text-green-400',
  },
  {
    id: 14,
    title: 'Attestation de remerciement',
    issuer: 'Université Moulay Ismail Meknès',
    date: 'Dec 2023',
    description: 'Reconnaissance pour services rendus',
    color: 'text-primary-500',
  },
  {
    id: 15,
    title: 'Agribusiness Service Delivery and Community Engagement',
    issuer: 'UM6P - University Mohammed VI Polytechnic',
    date: 'Oct 2023',
    description: 'Blended Summer School en agribusiness',
    color: 'text-primary-500',
  },
  {
    id: 16,
    title: 'Certificat de réalisation au programme company program',
    issuer: 'INJAZ Al-Maghrib (Junior Achievement Worldwide)',
    date: 'Jul 2023',
    description: 'Certificat de réalisation au programme company program',
    color: 'text-green-400',
  },
  {
    id: 17,
    title: 'Big Data Programming Languages & Big Data Vs Data Science',
    issuer: 'Udemy',
    date: 'Jul 2023',
    description: 'Formation en Big Data et langages de programmation',
    color: 'text-primary-500',
  },
  {
    id: 18,
    title: 'Public Speaking',
    issuer: 'Udemy',
    date: 'Jul 2023',
    description: 'Formation en prise de parole en public - Public Relations',
    color: 'text-primary-500',
  },
  {
    id: 19,
    title: 'L\'art du business plan',
    issuer: 'Centre 2htj consulting',
    date: 'May 2023',
    description: 'Formation en création de business plan',
    color: 'text-primary-500',
  },
  {
    id: 20,
    title: 'Innovation Camp compétition 1',
    issuer: 'INJAZ Al-Maghrib (Junior Achievement Worldwide)',
    date: 'May 2023',
    description: 'Participation à la compétition Innovation Camp',
    color: 'text-primary-500',
  },
  {
    id: 21,
    title: 'Innovation Camp compétition 2',
    issuer: 'INJAZ Al-Maghrib (Junior Achievement Worldwide)',
    date: 'May 2023',
    description: 'Participation à la compétition Innovation Camp',
    color: 'text-primary-500',
  },
  {
    id: 22,
    title: 'Certificate of Appreciation',
    issuer: 'Club l\'arc doré Meknes',
    date: 'Jan 2023',
    description: 'Reconnaissance pour contribution au club',
    color: 'text-primary-500',
  },
  {
    id: 23,
    title: 'Certificat of Achievement',
    issuer: 'Cambridge International Education',
    date: '2022',
    description: 'Certification Cambridge en anglais',
    color: 'text-green-400',
  },
  {
    id: 24,
    title: 'Html5/CSS3',
    issuer: 'OpenClassrooms',
    date: '2022',
    description: 'Formation en développement web HTML5 et CSS3',
    color: 'text-primary-500',
  },
  {
    id: 25,
    title: 'Information Systems Development and Society',
    issuer: 'Alison',
    date: '2022',
    description: 'Formation en développement de systèmes d\'information - Méthodologies Agile',
    color: 'text-primary-500',
  },
  {
    id: 26,
    title: 'Photography',
    issuer: 'Unihance',
    date: '2022',
    description: 'Formation en photographie - Compétences analytiques',
    color: 'text-primary-500',
  },
  {
    id: 27,
    title: 'What exactly is an algorithm?',
    issuer: 'IBM',
    date: '2022',
    description: 'Formation en algorithmes et pensée computationnelle',
    color: 'text-primary-500',
  },
  {
    id: 28,
    title: 'Formations TBH – Entrepreneuriat & Innovation',
    issuer: 'TBH – Tech Business Hub',
    date: '2025',
    description: 'Formations continues en entrepreneuriat, gestion de projet et innovation. Entrepreneuriat & création de startups, Project Management, Business Model & stratégie, Innovation et mindset entrepreneurial.',
    color: 'text-primary-500',
  },
  {
    id: 29,
    title: 'Programme DeepTech – Incuboster',
    issuer: 'INCUBOOSTER',
    date: '2025',
    description: 'Participation au programme DeepTech – Incuboster dans le cadre des formations TBH.',
    color: 'text-primary-500',
  },
  {
    id: 30,
    title: 'Women Summit',
    issuer: 'TBH – Tech Business Hub',
    date: '2025',
    description: 'Participation au Women Summit organisé dans le cadre des activités TBH.',
    color: 'text-primary-500',
  },
  {
    id: 31,
    title: 'Compétitions et Programmes Al Akhawayn University',
    issuer: 'Al Akhawayn University',
    date: '2025',
    description: 'Participation à plusieurs compétitions et programmes en partenariat avec Al Akhawayn University dans le cadre des activités TBH.',
    color: 'text-primary-500',
  },
]

const getCertifications = (t: any) => {
  return certifications.map((cert, index) => {
    const translation = t?.certifications?.list?.[index]
    return {
      ...cert,
      title: translation?.title || cert.title,
      description: translation?.description || cert.description,
      issuer: translation?.issuer || cert.issuer, // Nom traduit pour l'affichage
      issuerOriginal: cert.issuer, // Nom original pour la recherche du logo
      date: translation?.date || cert.date,
      color: cert.color,
      credentialId: cert.credentialId,
    }
  })
}

export default function Certifications() {
  const { t, dir } = useLanguage()
  const translatedCertifications = getCertifications(t)
  
  return (
    <section id="certifications" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t?.certifications?.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">{(t?.certifications?.title || 'Certificats').substring(0, Math.ceil((t?.certifications?.title || 'Certificats').length / 2))}</span>
            <span className="text-primary-500">{(t?.certifications?.title || 'Certificats').substring(Math.ceil((t?.certifications?.title || 'Certificats').length / 2))}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.certifications?.subtitle || 'Certifications et reconnaissances obtenues tout au long de mon parcours professionnel et académique.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translatedCertifications.map((cert: any, index: number) => (
            <Card3D key={cert.id} intensity={8} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card p-6 rounded-lg transition-all duration-300 cursor-pointer group card-3d transform-3d h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-500 transition-colors" dir={dir}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm font-semibold ${cert.color} mb-2`} dir={dir}>
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-300 p-2">
                      <Image
                        src={getOrgLogo((cert as any).issuerOriginal || cert.issuer)}
                        alt={cert.issuer}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                        unoptimized={getOrgLogo((cert as any).issuerOriginal || cert.issuer).endsWith('.jfif') || getOrgLogo((cert as any).issuerOriginal || cert.issuer).endsWith('.JFIF')}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<span class="text-2xl">🏆</span>'
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 flex-1" dir={dir}>{cert.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">{cert.date}</span>
                  {cert.credentialId && (
                    <span className="text-xs text-primary-500/70">ID: {cert.credentialId.slice(0, 8)}...</span>
                  )}
                </div>
                <div className="absolute inset-0 rounded-lg shine-effect opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  )
}

