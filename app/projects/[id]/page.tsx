'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card3D from '@/components/Card3D'

// This would normally come from a database or API
const projectsData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'Ghilla Maroc',
    description: 'Site vitrine & e-commerce pour l\'engrais VERANGRI. Présentation de l\'entreprise, vente en ligne, sensibilisation à l\'agriculture durable, intégration des réseaux sociaux.',
    fullDescription: 'Ghilla Maroc est une plateforme complète développée pour promouvoir l\'agriculture durable au Maroc. Le site inclut une boutique e-commerce pour la vente d\'engrais VERANGRI, une section informative sur l\'agriculture durable, et une intégration complète des réseaux sociaux pour la communication et le marketing.',
    category: 'E-commerce & Web Development',
    period: 'Sep 2025',
    technologies: ['Next.js', 'E-commerce', 'Web Development', 'Social Media Integration'],
    link: 'https://ghilla.ma',
    images: [],
  },
  '2': {
    id: 2,
    title: 'HARVEY SPECTEUR',
    description: 'Cabinet RH & Services aux Entreprises.',
    fullDescription: 'Développement d\'une plateforme moderne pour la gestion RH et les services aux entreprises. Interface intuitive pour la gestion des ressources humaines, suivi des candidatures, et gestion des services aux entreprises.',
    category: 'Web Development',
    period: 'Aug 2025',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'CSS'],
    associated: 'EXPERTS HUMAN CAPITAL (EHC Groupe)',
    images: [],
  },
  // Add more projects as needed
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, dir } = useLanguage()
  const projectId = params?.id as string
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/#projects')}
          className="mb-8 text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.portfolio.viewMore}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
              {project.period}
            </span>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">{t.portfolio.category}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6" dir={dir}>
              {project.fullDescription || project.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded border border-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.associated && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Associated With</h3>
                <p className="text-gray-300">{project.associated}</p>
              </div>
            )}

            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Visit Project
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

