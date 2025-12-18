'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const testimonialsData: any[] = []

// Photo mapping for testimonials - using index to match photos across all languages
const testimonialPhotos: string[] = [
  "/testimonial/Hajar SLIMANI.jfif",
  "/testimonial/IMANE BOUHADDOU.jfif",
  "/testimonial/Douglas Mbiandou.jfif",
  "/testimonial/Awatif Beggar.jpg",
  "/testimonial/Adam bennis.jfif",
  "/testimonial/Samir Messaoudi.jfif",
  "/testimonial/Yasmine Allal.jfif",
  "/testimonial/Sadife Mehmed Descamps.jfif",
  "/testimonial/Mahamouda Salouhou.jfif",
  "/testimonial/Ahmed MOUCHTACHI.jfif",
  "/testimonial/Nadia Handaq.jfif",
  "/logos/mcovery.webp",
]

export default function Testimonials() {
  const { t, dir } = useLanguage()
  
  // Get testimonials from translations
  const testimonials = (t.testimonials?.items || []).map((item: any, index: number) => ({
    quote: item.quote,
    name: item.name,
    designation: item.designation,
    src: testimonialPhotos[index] || "/testimonial/default.jpg",
  }))

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <LayoutTextFlip
              text=""
              words={["Words from Happy Clients", "Testimonials", "Client Reviews", "Recommendations"]}
              className="text-4xl md:text-5xl"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        {testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <AnimatedTestimonials testimonials={testimonials} />
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
