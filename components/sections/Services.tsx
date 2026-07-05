'use client'

import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import {
  IconWorld,
  IconDeviceLaptop,
  IconServer,
  IconShoppingCart,
  IconPalette,
  IconCube,
  IconArrowRight,
} from '@tabler/icons-react'
import type { ComponentType } from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  technologies: string[]
  number: string
}

const getServices = (t: any): Service[] => [
  {
    id: 1,
    title: t.services.webDevelopment,
    description: t.services.webDevelopmentDesc,
    icon: IconWorld,
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Node.js'],
    number: '01',
  },
  {
    id: 2,
    title: t.services.frontendDevelopment,
    description: t.services.frontendDevelopmentDesc,
    icon: IconDeviceLaptop,
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    number: '02',
  },
  {
    id: 3,
    title: t.services.backendDevelopment,
    description: t.services.backendDevelopmentDesc,
    icon: IconServer,
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize.js'],
    number: '03',
  },
  {
    id: 4,
    title: t.services.ecommerce,
    description: t.services.ecommerceDesc,
    icon: IconShoppingCart,
    technologies: ['WordPress', 'WooCommerce', 'E-commerce', 'Elementor'],
    number: '04',
  },
  {
    id: 5,
    title: t.services.uiux,
    description: t.services.uiuxDesc,
    icon: IconPalette,
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
    number: '05',
  },
  {
    id: 6,
    title: t.services['3d'],
    description: t.services['3dDesc'],
    icon: IconCube,
    technologies: ['Three.js', 'React Three Fiber', '3D Graphics', 'WebGL'],
    number: '06',
  },
]

export default function Services() {
  const { t, dir } = useLanguage()
  const services = getServices(t)

  return (
    <section id="services" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t?.services?.sectionLabel || 'SERVICES'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">{t?.services?.my || 'My '}</span>
            <LayoutTextFlip
              text=""
              words={t?.services?.flipWords || ["Services", "Expertise", "Skills", "Offerings"]}
              className="text-4xl md:text-5xl font-tech"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <Card3D key={service.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group card-3d transform-3d relative"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800 opacity-50">
                  {service.number}
                </div>
                <motion.div
                  className="mb-4 relative z-10 text-primary-500"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon && (
                    <service.icon className="w-12 h-12" strokeWidth={1.5} />
                  )}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 relative z-10">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.id}`}
                  className="text-white font-semibold hover:text-primary-500 transition-colors flex items-center gap-2 relative z-10"
                  dir={dir}
                >
                  {t.services.viewDetails}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <IconArrowRight className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                </Link>
                <div className="absolute inset-0 rounded-lg shine-effect opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
