'use client'

import { motion } from 'framer-motion'

// Helper function to get logo URL from Simple Icons
const getLogoUrl = (name: string) => {
  const iconMap: { [key: string]: string } = {
    'Next.js': 'nextdotjs',
    'React.js': 'react',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'Node.js': 'nodedotjs',
    'Express.js': 'express',
    'Redux.js': 'redux',
    'HTML5': 'html5',
    'CSS': 'css3',
    'SCSS': 'sass',
    'Tailwind CSS': 'tailwindcss',
    'Bootstrap': 'bootstrap',
    'PHP': 'php',
    'MySQL': 'mysql',
    'Sequelize.js': 'sequelize',
    'Ant Design': 'antdesign',
    'WordPress': 'wordpress',
    'Elementor': 'elementor',
    'WooCommerce': 'woocommerce',
    'Three.js': 'threedotjs',
    'Figma': 'figma',
    'Git': 'git',
    'GitHub': 'github',
    'Trello': 'trello',
    'Python': 'python',
    'C': 'c',
    'C++': 'cplusplus',
    'Ubuntu': 'ubuntu',
    'Arduino IDE': 'arduino',
  }
  
  const iconName = iconMap[name] || 'code'
  return `https://cdn.simpleicons.org/${iconName}`
}

// Technologies principales à afficher dans la bande
const technologies = [
  { name: 'Next.js', logo: getLogoUrl('Next.js') },
  { name: 'React.js', logo: getLogoUrl('React.js') },
  { name: 'TypeScript', logo: getLogoUrl('TypeScript') },
  { name: 'JavaScript', logo: getLogoUrl('JavaScript') },
  { name: 'Node.js', logo: getLogoUrl('Node.js') },
  { name: 'Express.js', logo: getLogoUrl('Express.js') },
  { name: 'Redux.js', logo: getLogoUrl('Redux.js') },
  { name: 'Tailwind CSS', logo: getLogoUrl('Tailwind CSS') },
  { name: 'Bootstrap', logo: getLogoUrl('Bootstrap') },
  { name: 'PHP', logo: getLogoUrl('PHP') },
  { name: 'MySQL', logo: getLogoUrl('MySQL') },
  { name: 'WordPress', logo: getLogoUrl('WordPress') },
  { name: 'Three.js', logo: getLogoUrl('Three.js') },
  { name: 'Figma', logo: getLogoUrl('Figma') },
  { name: 'Git', logo: getLogoUrl('Git') },
  { name: 'GitHub', logo: getLogoUrl('GitHub') },
  { name: 'Python', logo: getLogoUrl('Python') },
]

// Dupliquer les technologies pour une animation fluide
const duplicatedTechnologies = [...technologies, ...technologies]

export default function TechMarquee() {
  return (
    <section className="py-12 bg-black border-y border-gray-800 overflow-hidden relative">
      
      <div className="relative">
        {/* Première bande - défilement vers la droite */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center group"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2 px-6">
                <div className="w-16 h-16 bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300 group-hover:bg-gray-700">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('span')
                        fallback.className = 'text-2xl'
                        fallback.textContent = '💻'
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-primary-500 transition-colors font-semibold whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Deuxième bande - défilement vers la gauche (pour un effet plus riche) */}
        <motion.div
          className="flex gap-12 items-center mt-8"
          animate={{
            x: ['-50%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center group"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2 px-6">
                <div className="w-14 h-14 bg-gray-800 rounded-lg p-2.5 flex items-center justify-center border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 group-hover:bg-gray-700">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const fallback = document.createElement('span')
                        fallback.className = 'text-xl'
                        fallback.textContent = '💻'
                        parent.appendChild(fallback)
                      }
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-green-400 transition-colors font-semibold whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

