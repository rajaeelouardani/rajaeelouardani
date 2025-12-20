'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

const volunteering = [
  {
    id: 1,
    organization: 'DIGITAGUID ORIENTATION',
    role: 'Fondatrice & Coordinatrice',
    period: '2020',
    description: 'Fondation et coordination d\'une initiative de volontariat éducatif pendant la pandémie COVID-19. Création de groupes WhatsApp pour l\'orientation et le partage de ressources pédagogiques. Mobilisation de 40 enseignants couvrant 4 matières (Français, Arabe, Histoire-Géographie, Éducation Islamique). Mise en place de 12 groupes regroupant 256 élèves bénéficiant de cours, exercices, supports numériques et conseils méthodologiques. Évolution vers un programme d\'accompagnement à l\'orientation scolaire pour les examens régionaux et nationaux du baccalauréat. Collaboration avec des étudiants lauréats pour partager expériences et perspectives académiques.',
    category: 'Education & Orientation',
    color: 'text-primary-500',
    logo: '/logos/DIGITAGUIDE.png',
  },
  {
    id: 2,
    organization: 'Enactus FSJES Meknes',
    role: 'President',
    period: 'Mar 2023 - Feb 2024',
    description: 'Membre d\'Enactus FSJES et project manager de l\'équipe Luminary. Présidente pour deux équipes successives. Bénéficié de formations en entrepreneuriat avec impact social pour préserver notre environnement et développer notre société.',
    category: 'Education & Social Services',
    color: 'text-green-400',
  },
  {
    id: 3,
    organization: 'IVR FSM CLUB',
    role: 'Marketing Manager',
    period: 'Nov 2023 - Jul 2024',
    description: 'Gestion du marketing et de la communication du club IVR (Innovation, Visionnaire, Robotique).',
    category: 'Marketing & Communication',
    color: 'text-primary-500',
  },
  {
    id: 4,
    organization: 'Photography Club FSM',
    role: 'Responsable du club / Formatrice / Graphique designer',
    period: 'Jan 2024 - Jul 2024',
    description: 'Responsable du club, formatrice en photographie et graphique designer. Organisation de formations et gestion des activités du club.',
    category: 'Education & Design',
    color: 'text-green-400',
  },
]

export default function Volunteering() {
  const { t, dir } = useLanguage()
  const { primaryColor } = useTheme()
  
  // Convert hex color to rgba for shadow
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  
  return (
    <section id="volunteering" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t.volunteering.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">{t.volunteering.title.substring(0, Math.ceil(t.volunteering.title.length / 2))}</span>
            <span className="text-primary-500">{t.volunteering.title.substring(Math.ceil(t.volunteering.title.length / 2))}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.volunteering.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {volunteering.slice(0, 4).map((item, index) => {
            return (
            <Card3D key={item.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg transition-all duration-300 cursor-pointer group card-3d transform-3d h-full"
                style={{
                  boxShadow: `0 0 20px ${hexToRgba(primaryColor, 0.5)}, 0 0 40px ${hexToRgba(primaryColor, 0.2)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${hexToRgba(primaryColor, 0.7)}, 0 0 60px ${hexToRgba(primaryColor, 0.3)}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${hexToRgba(primaryColor, 0.5)}, 0 0 40px ${hexToRgba(primaryColor, 0.2)}`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${item.color} group-hover:text-primary-500 transition-colors`}>
                      {item.organization}
                    </h3>
                    <p className="text-white font-semibold mb-2">{item.role}</p>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                      {item.category}
                    </span>
                  </div>
                  <div className="ml-4">
                    {item.logo ? (
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden p-1">
                        <Image
                          src={item.logo}
                          alt={item.organization}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                        <span className="text-2xl">🤝</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
                <div className="absolute inset-0 rounded-lg shine-effect opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            </Card3D>
            )
          })}
        </div>

        {/* View More Button */}
        {volunteering.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="bg-black text-white dark:text-white flex items-center space-x-2 px-8 py-4 font-semibold"
            >
              <span dir={dir}>{t.volunteering.viewMore}</span>
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

