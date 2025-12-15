'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const servicesData: Record<string, any> = {
  '1': {
    id: 1,
    titleKey: 'webDevelopment',
    descriptionKey: 'webDevelopmentDesc',
    icon: '🌐',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Node.js'],
    features: [
      'Responsive Web Design',
      'Performance Optimization',
      'SEO Optimization',
      'Modern UI/UX',
      'Cross-browser Compatibility',
    ],
  },
  '2': {
    id: 2,
    titleKey: 'frontendDevelopment',
    descriptionKey: 'frontendDevelopmentDesc',
    icon: '💻',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    features: [
      'Component-based Architecture',
      'State Management',
      'Responsive Design',
      'Accessibility',
      'Modern Frameworks',
    ],
  },
  '3': {
    id: 3,
    titleKey: 'backendDevelopment',
    descriptionKey: 'backendDevelopmentDesc',
    icon: '⚙️',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize.js'],
    features: [
      'RESTful APIs',
      'Database Design',
      'Authentication & Authorization',
      'API Security',
      'Server Optimization',
    ],
  },
  '4': {
    id: 4,
    titleKey: 'ecommerce',
    descriptionKey: 'ecommerceDesc',
    icon: '🛒',
    technologies: ['WordPress', 'WooCommerce', 'E-commerce', 'Elementor'],
    features: [
      'Shopping Cart',
      'Payment Integration',
      'Inventory Management',
      'Order Tracking',
      'Customer Dashboard',
    ],
  },
  '5': {
    id: 5,
    titleKey: 'uiux',
    descriptionKey: 'uiuxDesc',
    icon: '🎨',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'User Testing',
    ],
  },
  '6': {
    id: 6,
    titleKey: '3d',
    descriptionKey: '3dDesc',
    icon: '🎲',
    technologies: ['Three.js', 'React Three Fiber', '3D Graphics', 'WebGL'],
    features: [
      '3D Modeling',
      'Interactive Experiences',
      'WebGL Rendering',
      'Animation',
      'Immersive Design',
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, dir } = useLanguage()
  const serviceId = params?.id as string
  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
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
          onClick={() => router.push('/#services')}
          className="mb-8 text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.services.viewMore}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.services[service.titleKey as keyof typeof t.services]}
          </h1>

          <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-8" dir={dir}>
              {t.services[service.descriptionKey as keyof typeof t.services]}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded border border-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

