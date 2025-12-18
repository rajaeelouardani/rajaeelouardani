'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const testimonialsData: any[] = []

// Format for AnimatedTestimonials
const animatedTestimonials = [
  {
    quote:
      "Une jeune étudiante exceptionnelle qui se distingue par son excellence académique, sa passion pour les technologies et son engagement remarquable au sein de son établissement. Dotée d'une solide culture numérique, Rajae maîtrise avec aisance les outils digitaux et s'intéresse profondément aux innovations technologiques. Curieuse, rigoureuse et toujours à la recherche de nouvelles compétences, elle incarne parfaitement le profil d'une future leader dans le domaine tech. Je recommande vivement pour toute opportunité académique ou professionnelle.",
    name: "Hajar SLIMANI",
    designation: "Professeur Habilité - HDR . Ecole Nationale de Commerce et de Gestion - Meknès [ENCG]",
    src: "/testimonial/Hajar SLIMANI.jfif",
  },
  {
    quote:
      "J'ai eu l'occasion de collaborer avec Rajae dans plusieurs évènements, une étudiante exceptionnelle qui incarne parfaitement le leadership féminin. Engagée, dynamique et dotée d'un grand sens des responsabilités, elle sait fédérer, inspirer et agir avec impact. Une vraie force motrice que je recommande sans hésiter !",
    name: "IMANE BOUHADDOU",
    designation: "Docteur-Ingénieur Professeur ENSAM-Meknès",
    src: "/testimonial/IMANE BOUHADDOU.jfif",
  },
  {
    quote:
      "Très belle vidéo de présentation chère Rajae Elouardani ! MashAllah. Ton profil, ta posture et ton projet sont très inspirants pour l'ensemble des talents accompagnés par 10000 CODEURS. C'est un honneur pour nous d'avoir l'opportunité de t'accompagner.",
    name: "Douglas Mbiandou",
    designation: "Ingénieur INSA Lyon 2000. Je construis un écosystème capable de répondre au besoin des entreprises en compétences numériques",
    src: "/testimonial/Douglas Mbiandou.jfif",
  },
  {
    quote:
      "Un grand merci Rajae Elouardani pour ton engagement et ton dynamisme. Merci pour tout ce que tu as donné à UMI-MUN.",
    name: "Awatif Beggar",
    designation: "Professeure de l'enseignement supérieur, Université Moulay Ismail Meknès",
    src: "/testimonial/Awatif Beggar.jpg",
  },
  {
    quote:
      "Merci à toi Rajae Elouardani, ton projet, ta maturité et ton engagement sont à saluer, bravo encore et bon courage pour la suite.",
    name: "Adam Bennis",
    designation: "Responsable CGEM Antenne Meknès",
    src: "/testimonial/Adam bennis.jfif",
  },
  {
    quote:
      "Fier de toi Rajae Elouardani. Hâte de suivre l'évolution de MedChain.",
    name: "Samir Messaoudi",
    designation: "Strategic Cybersecurity Leader | Quantum-Ready Security Architect | ISO 27001 Lead Implementer",
    src: "/testimonial/Samir Messaoudi.jfif",
  },
  {
    quote:
      "Une fille exceptionnelle, engagée, ambitieuse, et toujours prête à se surpasser pour que tout soit parfait ! Faire partie de cet événement à tes côtés a été un vrai privilège. Ta rigueur, ta créativité et ton énergie positive sont une véritable source d'inspiration. Tu incarnes le leadership au féminin dans toute sa splendeur Rajae !",
    name: "Yasmine Allal",
    designation: "Founder & CEO of AFR'INCLUSIF | Peace and security researcher",
    src: "/testimonial/Yasmine Allal.jfif",
  },
  {
    quote:
      "Un Grand Merci pour ce partage à Rajae Elouardani, cela a été un vrai plaisir de faire votre connaissance. Comme je l'ai indiqué lors de mon discours : Vous les jeunes Africains n'êtes pas l'avenir.. Vous êtes Le Présent ! Osez, Innovez et surtout, Croyez en Vous !",
    name: "Sadife Mehmed Descamps",
    designation: "Professional Committed to the Transformation & Innovation of the Healthcare Sector | International Expertise",
    src: "/testimonial/Sadife Mehmed Descamps.jfif",
  },
  {
    quote:
      "Bravo à vous Rajae, j'ai vu des jeunes très intelligents et un avenir prometteur pour l'Afrique. Continuez SVP nous croyons en vous. Vous avez notre soutien et nos encouragement par des actes, des faits et le soutien comme nous le faisons déjà. All The Best!",
    name: "Mahamouda Salouhou, PhD",
    designation: "Director at European Center for Leadership & Entrepreneurship Education, Nelson Mandela Professor of Leadership & Education",
    src: "/testimonial/Mahamouda Salouhou.jfif",
  },
  {
    quote:
      "Quel bel exemple tu donne à l'ensemble des étudiants. Ensemble, poursuivons cette dynamique en développant le concept UMI Peer-to-Peer Learning, pour faire de nos campus des espaces de partage, d'entraide et de transmission des savoirs entre étudiants. Mille bravos Rajae Elouardani. Fier d'avoir une étudiante comme toi engagée et dévouée.",
    name: "Ahmed MOUCHTACHI",
    designation: "Anciennement Président de l'Université Moulay Ismaïl / Anciennement Directeur de l'ENSAM-Casablanca",
    src: "/testimonial/Ahmed MOUCHTACHI.jfif",
  },
  {
    quote:
      "Bravo chère Rajae Elouardani pour ton dynamisme. Continu à dissiper cette énergie positive dans l'entourage estudiantin. Nous sommes fiers de toi et de tous les étudiant(e)s qui croient à l'épanouissement via le parauniversitaire.",
    name: "Nadia Handaq",
    designation: "Professeure Chercheure à l'Université Moulay Ismail Experte-évaluatrice Erasmus+",
    src: "/testimonial/Nadia Handaq.jfif",
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
        {animatedTestimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <AnimatedTestimonials testimonials={animatedTestimonials} />
          </motion.div>
        )}

        {/* Grid of testimonials cards */}
        {testimonialsData.length > 0 && (
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
        )}
      </div>
    </section>
  )
}
