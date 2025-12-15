'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const testimonialsData = [
  {
    id: 1,
    name: 'Hajar SLIMANI',
    role: 'Professeur Habilité - HDR . Ecole Nationale de Commerce et de Gestion - Meknès [ENCG]',
    content:
      'Une jeune étudiante exceptionnelle qui se distingue par son excellence académique, sa passion pour les technologies et son engagement remarquable au sein de son établissement. Dotée d\'une solide culture numérique, Rajae maîtrise avec aisance les outils digitaux et s\'intéresse profondément aux innovations technologiques. Curieuse, rigoureuse et toujours à la recherche de nouvelles compétences, elle incarne parfaitement le profil d\'une future leader dans le domaine tech. Je recommande vivement pour toute opportunité académique ou professionnelle.',
    avatar: '👩‍🏫',
    date: 'May 31, 2025',
  },
  {
    id: 2,
    name: 'IMANE BOUHADDOU',
    role: 'Docteur-Ingénieur Professeur ENSAM-Meknès',
    content:
      'J\'ai eu l\'occasion de collaborer avec Rajae dans plusieurs évènements, une étudiante exceptionnelle qui incarne parfaitement le leadership féminin. Engagée, dynamique et dotée d\'un grand sens des responsabilités, elle sait fédérer, inspirer et agir avec impact. Une vraie force motrice que je recommande sans hésiter !',
    avatar: '👩‍🔬',
    date: 'May 19, 2025',
  },
  {
    id: 3,
    name: 'Ronald Richards',
    role: 'Medical Assistant',
    content:
      'Collaborating with you on our website redesign was a game-changer. Not only did you bring fresh, modern aesthetics, but you also made the user experience seamless and engaging.',
    avatar: '👨‍⚕️',
    date: '2024',
  },
]

// Format for AnimatedTestimonials
const animatedTestimonials = [
  {
    quote: testimonialsData[0].content,
    name: testimonialsData[0].name,
    designation: testimonialsData[0].role,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: testimonialsData[1].content,
    name: testimonialsData[1].name,
    designation: testimonialsData[1].role,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: testimonialsData[2].content,
    name: testimonialsData[2].name,
    designation: testimonialsData[2].role,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Testimonials() {
  const { t, dir } = useLanguage()
  return (
    <section dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2">{t.testimonials.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <LayoutTextFlip
              text=""
              words={["Words from Happy Clients", "Testimonials", "Client Reviews", "Recommendations"]}
              className="text-4xl md:text-5xl"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Recommandations et témoignages de mentors, professeurs et clients satisfaits
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <AnimatedTestimonials testimonials={animatedTestimonials} />
        </motion.div>

        {/* Grid of testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card3D key={testimonial.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 card-3d transform-3d"
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm mb-1">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
                <div className="absolute inset-0 rounded-lg shine-effect opacity-0 hover:opacity-30 transition-opacity pointer-events-none"></div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
