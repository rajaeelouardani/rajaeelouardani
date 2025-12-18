'use client'

import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

// Helper function to get organization logo
// Priority: local logo in public/logos/ > Simple Icons fallback
const getOrgLogo = (company: string) => {
  // Map company names to actual logo file names in public/logos/ (with extensions)
  const localLogoMap: { [key: string]: string | null } = {
    'Freelance': null, // freelance.htm exists but it's HTML, not an image
    'Mcovery': '/logos/mcovery.webp',
    'EXPERTS HUMAN CAPITAL (EHC Groupe)': '/logos/experts_human_capital_logo.jpg',
    'ECLEE': '/logos/logo-eclee.png',
    '10000 CODEURS': '/logos/1000codeurs.png', // File is named 1000codeurs.png
    'Medchain': '/logos/medchain-logo (1).jpg', // File has space and parentheses in name
    'Photography FSM Club': '/logos/photography .png', // File has space in name - URL encoded
    'UMI-MUN Club': '/logos/mun.png',
    'IVR CLUB FSM': '/logos/ivr.png',
    'CSC-FSM Club': '/logos/csc_fsm_logo.jpg',
    'MowajihAI': '/logos/mowajihai.jpg',
    'MWT Moroccan Walking Tours': '/logos/Logo-MWT-500-×-250-px-1.webp',
    'Agence de Marketing': null,
    'Marketing Agency': null,
    'وكالة التسويق': null,
    'Université Moulay Ismail Meknès': '/logos/umi.png',
    'ALX Academy': '/logos/alx.jpg',
    'English for Africa Center': '/logos/english for africa.png', // File has space in name
    'Centre de formation CAPE avec 2htj consulting': '/logos/cape.jpg',
    'JA Worldwide': '/logos/injaz jw.png', // File has space in name
    'Virtual Internship by INJAZ Al-Arab and PMIEF': '/logos/pmief.png',
    'Project Management Institute': '/logos/pmief.png',
    'Lycée Moulay Ismail Meknes': null,
    'Université de Naples Federico II': '/logos/logo napoli Federico II.webp',
    'Faculté des Sciences de Meknès & Université de Naples Federico II': '/logos/logo napoli Federico II.webp',
    'ARMA Association': '/logos/arma assiciation .png', // Association des Randonneurs Marocains pour les Aventures
    'جمعية مشاة مغرب المغامرات': '/logos/arma assiciation .png', // ARMA Association (Arabic)
  }

  const localLogo = localLogoMap[company]
  if (localLogo) {
    // Return local logo path
    return localLogo
  }
  
  // Fallback to Simple Icons
  return getOrgLogoFallback(company)
}

// Fallback function for Simple Icons
const getOrgLogoFallback = (company: string) => {
  const fallbackLogos: { [key: string]: string } = {
    'Freelance': 'https://cdn.simpleicons.org/freelancer/29B2FE',
    'Mcovery': 'https://cdn.simpleicons.org/wordpress/21759B',
    'EXPERTS HUMAN CAPITAL (EHC Groupe)': 'https://cdn.simpleicons.org/linkedin/0077B5',
    'ECLEE': 'https://cdn.simpleicons.org/microsoft/0078D4',
    '10000 CODEURS': 'https://cdn.simpleicons.org/code/007ACC',
    'Medchain': 'https://cdn.simpleicons.org/ethereum/627EEA',
    'Photography FSM Club': 'https://cdn.simpleicons.org/camera/FF6B6B',
    'UMI-MUN Club': 'https://cdn.simpleicons.org/unitednations/4B92DB',
    'IVR CLUB FSM': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'CSC-FSM Club': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'MWT Moroccan Walking Tours': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Agence de Marketing': 'https://cdn.simpleicons.org/marketing/FF6B6B',
    'Marketing Agency': 'https://cdn.simpleicons.org/marketing/FF6B6B',
    'وكالة التسويق': 'https://cdn.simpleicons.org/marketing/FF6B6B',
    'MowajihAI': 'https://cdn.simpleicons.org/openai/412991',
    'Université Moulay Ismail Meknès': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'ALX Academy': 'https://cdn.simpleicons.org/linux/FCC624',
    'English for Africa Center': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Centre de formation CAPE avec 2htj consulting': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'JA Worldwide': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Virtual Internship by INJAZ Al-Arab and PMIEF': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Project Management Institute': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Lycée Moulay Ismail Meknes': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Université de Naples Federico II': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'Faculté des Sciences de Meknès & Université de Naples Federico II': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'ARMA Association': 'https://cdn.simpleicons.org/microsoft/0078D4',
    'جمعية مشاة مغرب المغامرات': 'https://cdn.simpleicons.org/microsoft/0078D4',
  }
  
  return fallbackLogos[company] || 'https://cdn.simpleicons.org/microsoft/0078D4'
}

const getExperiences = (t: any) => [
  {
    period: '2021 - Present',
    company: t.experience.experiences[0].company,
    role: t.experience.experiences[0].role,
    description: t.experience.experiences[0].description,
    color: 'text-green-400',
  },
  {
    period: 'Sep 2025 - Present',
    company: 'Mcovery',
    role: t.experience.experiences[1].role,
    description: t.experience.experiences[1].description,
    color: 'text-green-400',
  },
  {
    period: 'Nov 2025 - Present',
    company: 'MWT Moroccan Walking Tours',
    role: t.experience.experiences[2].role,
    description: t.experience.experiences[2].description,
    color: 'text-green-400',
  },
  {
    period: 'Aug 2025 - Nov 2025',
    company: 'EXPERTS HUMAN CAPITAL (EHC Groupe)',
    role: t.experience.experiences[3].role,
    description: t.experience.experiences[3].description,
    color: 'text-primary-500',
  },
  {
    period: 'Apr 2025 - Sep 2025',
    company: 'ECLEE',
    role: t.experience.experiences[4].role,
    description: t.experience.experiences[4].description,
    color: 'text-primary-500',
  },
  {
    period: 'May 2025 - Present',
    company: '10000 CODEURS',
    role: t.experience.experiences[5].role,
    description: t.experience.experiences[5].description,
    color: 'text-green-400',
  },
  {
    period: 'Mar 2024 - Present',
    company: 'Medchain',
    role: t.experience.experiences[6].role,
    description: t.experience.experiences[6].description,
    color: 'text-primary-500',
  },
  {
    period: 'Sep 2023 - Present',
    company: 'Photography FSM Club',
    role: t.experience.experiences[7].role,
    description: t.experience.experiences[7].description,
    color: 'text-green-400',
  },
  {
    period: 'Nov 2024 - Nov 2025',
    company: 'UMI-MUN Club',
    role: t.experience.experiences[8].role,
    description: t.experience.experiences[8].description,
    color: 'text-primary-500',
  },
  {
    period: 'Nov 2023 - Nov 2025',
    company: 'IVR CLUB FSM',
    role: t.experience.experiences[9].role,
    description: t.experience.experiences[9].description,
    color: 'text-primary-500',
  },
  {
    period: 'Aug 2023 - Feb 2025',
    company: 'MowajihAI',
    role: t.experience.experiences[10].role,
    description: t.experience.experiences[10].description,
    color: 'text-primary-500',
  },
  {
    period: 'Nov 2021 - 2022',
    company: 'CSC-FSM Club',
    role: t.experience.experiences[11].role,
    description: t.experience.experiences[11].description,
    color: 'text-primary-500',
  },
  {
    period: '2023',
    company: t.experience.experiences[12]?.company || 'Agence de Marketing',
    role: t.experience.experiences[12]?.role || 'Stagiaire - Développement Web & Photographie',
    description: t.experience.experiences[12]?.description || 'Stage d\'un mois dans une agence de marketing, développement web et photographie. Participation aux projets de développement web, création de contenu visuel et support marketing.',
    color: 'text-primary-500',
  },
  {
    period: 'Dec 2025',
    company: t.experience.experiences[13]?.company || 'ARMA Association',
    role: t.experience.experiences[13]?.role || 'Formatrice - Traitement d\'image',
    description: t.experience.experiences[13]?.description || 'Formation sur le traitement d\'image dans le cadre d\'une formation en IA/Robotique et traitement d\'image.',
    color: 'text-primary-500',
  },
]

const getEducations = (t: any) => [
  {
    period: '2021 - 2025',
    institution: 'Université Moulay Ismail Meknès',
    degree: t.experience.educations[0].degree,
    description: t.experience.educations[0].description,
    color: 'text-green-400',
  },
  {
    period: '2023',
    institution: 'ALX Academy',
    degree: t.experience.educations[1].degree,
    description: t.experience.educations[1].description,
    color: 'text-primary-500',
  },
  {
    period: '2022',
    institution: 'English for Africa Center',
    degree: t.experience.educations[2].degree,
    description: t.experience.educations[2].description,
    color: 'text-primary-500',
  },
  {
    period: '2023',
    institution: 'Centre de formation CAPE avec 2htj consulting',
    degree: t.experience.educations[3].degree,
    description: t.experience.educations[3].description,
    color: 'text-primary-500',
  },
  {
    period: '2023',
    institution: 'JA Worldwide',
    degree: t.experience.educations[4].degree,
    description: t.experience.educations[4].description,
    color: 'text-primary-500',
  },
  {
    period: 'Apr 2025 - Apr 2025',
    institution: 'Virtual Internship by INJAZ Al-Arab and PMIEF',
    degree: t.experience.educations[5].degree,
    description: t.experience.educations[5].description,
    color: 'text-primary-500',
  },
  {
    period: 'Nov 2025',
    institution: 'Faculté des Sciences de Meknès & Université de Naples Federico II',
    degree: t.experience.educations[6].degree,
    description: t.experience.educations[6].description,
    color: 'text-primary-500',
  },
  {
    period: '2021',
    institution: 'Lycée Moulay Ismail Meknes',
    degree: t.experience.educations[7].degree,
    description: t.experience.educations[7].description,
    color: 'text-primary-500',
  },
]

export default function Experience() {
  const { t, dir } = useLanguage()
  const experiences = getExperiences(t)
  const educations = getEducations(t)

  // Group by year and combine experience and education
  const groupByYear = () => {
    const grouped: { [key: string]: { experiences: any[], educations: any[] } } = {}
    
    experiences.forEach(exp => {
      const year = exp.period.match(/\d{4}/)?.[0] || 'Unknown'
      if (!grouped[year]) {
        grouped[year] = { experiences: [], educations: [] }
      }
      grouped[year].experiences.push(exp)
    })
    
    educations.forEach(edu => {
      const year = edu.period.match(/\d{4}/)?.[0] || 'Unknown'
      if (!grouped[year]) {
        grouped[year] = { experiences: [], educations: [] }
      }
      grouped[year].educations.push(edu)
    })
    
    return Object.keys(grouped)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map(year => ({
        year,
        ...grouped[year]
      }))
  }

  const timelineData = groupByYear().map(({ year, experiences, educations }) => ({
    title: year,
    content: (
      <div className="space-y-6">
        {/* Experience Section */}
        {experiences.length > 0 && (
          <div>
            <h4 className="text-lg font-bold text-white mb-3" dir={dir}>{t.experience.myExperience}</h4>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card p-4 rounded-lg flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-300 p-2 flex items-center justify-center">
                    <Image
                      src={getOrgLogo(exp.company)}
                      alt={exp.company}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        const fallbackLogo = getOrgLogoFallback(exp.company)
                        if (fallbackLogo && target.src !== fallbackLogo) {
                          target.src = fallbackLogo
                        } else {
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<span class="text-2xl">🏢</span>'
                          }
                        }
                      }}
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1" dir={dir}>{exp.period}</div>
                    <div className={`text-sm font-bold ${exp.color} mb-1`} dir={dir}>{exp.company}</div>
                    <div className="text-xs text-white mb-1" dir={dir}>{exp.role}</div>
                    <p className="text-xs text-gray-400" dir={dir}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {educations.length > 0 && (
          <div>
            <h4 className="text-lg font-bold text-white mb-3" dir={dir}>{t.experience.myEducation}</h4>
            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <div key={idx} className="glass-card p-4 rounded-lg flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-300 p-2 flex items-center justify-center">
                    <Image
                      src={getOrgLogo(edu.institution)}
                      alt={edu.institution}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        const fallbackLogo = getOrgLogoFallback(edu.institution)
                        if (fallbackLogo && target.src !== fallbackLogo) {
                          target.src = fallbackLogo
                        } else {
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<span class="text-2xl">🎓</span>'
                          }
                        }
                      }}
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1" dir={dir}>{edu.period}</div>
                    <div className={`text-sm font-bold ${edu.color} mb-1`} dir={dir}>{edu.institution}</div>
                    <div className="text-xs text-white mb-1" dir={dir}>{edu.degree}</div>
                    <p className="text-xs text-gray-400" dir={dir}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }))

  return (
    <section id="about" dir={dir} className="bg-black/80 relative overflow-hidden z-10">
      <Timeline data={timelineData} />
    </section>
  )
}
