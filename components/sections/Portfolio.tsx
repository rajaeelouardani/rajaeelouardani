'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { webDevelopmentProjects } from '@/lib/projectsData'
import { useMemo } from 'react'

const projects = [
  {
    id: 1,
    title: 'Ghilla Maroc',
    description: 'Site vitrine & e-commerce pour l\'engrais VERANGRI. Présentation de l\'entreprise, vente en ligne, sensibilisation à l\'agriculture durable, intégration des réseaux sociaux.',
    category: 'E-commerce & Web Development',
    period: 'Sep 2025',
    technologies: ['Next.js', 'E-commerce', 'Web Development'],
    link: '#',
  },
  {
    id: 2,
    title: 'HARVEY SPECTEUR',
    description: 'Cabinet RH & Services aux Entreprises. Développement d\'une plateforme moderne pour la gestion RH et les services aux entreprises.',
    category: 'Web Development',
    period: 'Aug 2025',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'CSS'],
    link: '#',
    associated: 'EXPERTS HUMAN CAPITAL (EHC Groupe)',
  },
  {
    id: 3,
    title: 'J&S Firm',
    description: 'Conseil RH et Solutions d\'Entreprise conçues pour la croissance. Plateforme moderne pour les services de conseil RH.',
    category: 'Web Development',
    period: 'Aug 2025',
    technologies: ['Next.js', 'TypeScript', 'JavaScript'],
    link: '#',
  },
  {
    id: 4,
    title: 'TBH-Website',
    description: 'UMI-TBH | Tech Business Hub. Site web pour le hub technologique et business de l\'Université Moulay Ismail.',
    category: 'Web Development',
    period: 'Jul 2025',
    technologies: ['Next.js', 'Web Development'],
    link: '#',
  },
  {
    id: 5,
    title: 'Website Photography FSM Club',
    description: 'Site officiel du Photography Club FSM avec galerie interactive, vidéothèque, ressources pédagogiques, modèle 3D interactif, présentation de l\'équipe et actualités.',
    category: 'Web Development & 3D',
    period: 'Apr - May 2025',
    technologies: ['Next.js', 'Tailwind CSS', 'React Three Fiber', 'Three.js', 'React.js'],
    link: 'https://photographyfsm.online',
  },
  {
    id: 6,
    title: 'Medchain',
    description: 'Plateforme et application mobile sécurisées basées sur la blockchain pour la digitalisation du secteur de la santé au Maroc.',
    category: 'Blockchain & Healthcare',
    period: 'Apr 2024 - Apr 2025',
    technologies: ['Blockchain', 'Mobile App', 'Healthcare'],
    link: '#',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
  },
  {
    id: 7,
    title: 'Smartalim',
    description: 'Projet innovant dans le domaine de l\'alimentation intelligente et durable.',
    category: 'Innovation & Technology',
    period: 'May 2024 - Apr 2025',
    technologies: ['Web Development', 'Innovation'],
    link: '#',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
  },
  {
    id: 8,
    title: 'IVR FSM CLUB',
    description: 'Site web du club IVR (Innovation, Visionnaire, Robotique) de la Faculté des Sciences Meknès. Promotion de l\'innovation, l\'astronomie, biotechnologies, géotechnologies, robotique et IA.',
    category: 'Web Development',
    period: 'Dec 2024 - Jan 2025',
    technologies: ['JavaScript', 'PHP', 'SCSS', 'HTML5', 'Bootstrap'],
    link: '#',
    associated: 'Université Moulay Ismail Meknès',
  },
  {
    id: 9,
    title: 'Club Arc Doré Meknes',
    description: 'Site web du Club l\'Arc Doré de Meknes. Présentation du club et de ses activités.',
    category: 'Web Development',
    period: 'Dec 2023',
    technologies: ['JavaScript', 'HTML', 'Figma', 'CSS', 'Bootstrap'],
    link: '#',
  },
  {
    id: 10,
    title: 'MowajihAI',
    description: 'Projet d\'intelligence artificielle pour l\'orientation et l\'aide à la décision. Gestion de l\'équipe de collecte de données.',
    category: 'AI & Data Collection',
    period: 'Nov 2022 - Jul 2023',
    technologies: ['AI', 'Data Collection', 'Teamwork'],
    link: '#',
    associated: 'Entreprendre pour Apprendre (JA Worldwide)',
  },
]

export default function Portfolio() {
  const { t, dir } = useLanguage()
  
  // Get web project cover images for 3D marquee
  const webProjectCoverImages = useMemo(() => {
    const images: string[] = []
    
    webDevelopmentProjects.forEach(project => {
      // Add only thumbnail/cover
      if (project.thumbnail) {
        images.push(project.thumbnail)
      }
    })
    
    return images.filter(Boolean)
  }, [])
  
  return (
    <section id="projects" dir={dir} className="py-20 bg-black/60 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t.nav.projects}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4" dir={dir}>
            <LayoutTextFlip
              text={t.portfolio.my}
              words={t.portfolio.flipWords}
              className="text-4xl md:text-5xl text-blue-500"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* 3D Marquee Section */}
        <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
          {/* Title Overlay */}
          <div className="relative z-20 mx-auto max-w-4xl text-center px-4 mb-8">
            <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl mb-4">
              {t.portfolio.marqueeTitle || 'Mes Projets Web'}
            </h2>
            <p className="relative z-20 mx-auto max-w-2xl text-center text-sm text-neutral-200 md:text-base">
              {t.portfolio.marqueeSubtitle || 'Découvrez mes réalisations web'}
            </p>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
          
          {/* 3D Marquee Background */}
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={webProjectCoverImages}
          />
        </div>

        {/* View More Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as={Link}
              href="/projects"
              className="bg-black text-white dark:text-white flex items-center space-x-2 px-8 py-4 font-semibold"
            >
              <span>{t.portfolio.viewMore}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </HoverBorderGradient>
          </motion.div>
        )}
      </div>
    </section>
  )
}
