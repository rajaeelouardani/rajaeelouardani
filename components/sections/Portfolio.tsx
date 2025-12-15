'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card3D key={project.id} intensity={10}>
              <Link href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group card-3d transform-3d"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl opacity-50"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.category.includes('E-commerce') ? '🛒' : 
                       project.category.includes('Blockchain') ? '⛓️' : 
                       project.category.includes('AI') ? '🤖' : 
                       project.category.includes('3D') ? '🎨' : 
                       project.category.includes('Innovation') ? '💡' : '💻'}
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-black/80 backdrop-blur-sm text-primary-500 px-3 py-1 rounded-full text-sm font-semibold border border-primary-500/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="absolute inset-0 shine-effect opacity-30"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors flex-1">
                      {project.title}
                    </h3>
                  </div>
                  {project.associated && (
                    <p className="text-xs text-gray-500 mb-2">Associated with {project.associated}</p>
                  )}
                  <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.period}</span>
                    <span className="text-white font-semibold hover:text-primary-500 transition-colors flex items-center gap-2 text-sm">
                      {t.portfolio.viewDetails}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
            </Card3D>
          ))}
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
