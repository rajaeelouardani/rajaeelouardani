'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'

const newsItems = [
  {
    id: 1,
    title: 'Why Good Design is More Than Just Aesthetics',
    date: 'December 12, 2025',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'How to Balance Creativity and Usability in Design',
    date: 'December 12, 2025',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
  },
]

export default function News() {
  const { t, dir } = useLanguage()
  return (
    <section id="news" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-green-400 text-sm uppercase mb-2">{t.news.sectionLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center">
              <span className="text-white">Explore My Design </span>
              <span className="text-primary-500">Thinking Process</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-gray-300 mb-6">
              We put your ideas and thus your wishes in the form of a unique
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-semibold hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              View More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <Card3D key={item.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📰</div>
                  </div>
                  <div className="absolute inset-0 shine-effect opacity-30"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                    {item.title}
                  </h3>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-white font-semibold hover:text-primary-500 transition-colors flex items-center gap-2"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
