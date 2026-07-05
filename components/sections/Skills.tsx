'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
// import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import {
  IconUser,
  IconPalette,
  IconShoppingCart,
  IconChartBar,
  IconMathFunction,
  IconRuler,
  IconRefresh,
  IconBriefcase,
  IconClipboardList,
  IconCamera,
  IconRobot,
  IconPuzzle,
  IconUsers,
  IconClock,
  IconSearch,
  IconSpeakerphone,
  IconBuildingStore,
  IconTrendingUp,
  IconTarget,
  IconChartLine,
  IconBulb,
  IconMessageCircle,
  IconPresentation,
  IconBrain,
  IconChartDots,
} from '@tabler/icons-react'
import { 
  FaChartLine as FaChartLineIcon,
  FaBusinessTime,
  FaHandshake,
  FaLightbulb,
  FaComments,
  FaUserTie,
  FaNetworkWired,
  FaProjectDiagram,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaUbuntu,
  FaFigma,
  FaWordpress,
  FaTrello,
  FaJira,
  FaBlender,
  FaCode,
  FaDatabase,
  FaVideo,
  FaEdit,
} from 'react-icons/fa'
import { 
  FaDiagramProject,
  FaPeopleGroup,
  FaHeartCircleCheck,
  FaBrain,
  FaCommentsDollar,
  FaJs,
} from 'react-icons/fa6'
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiAntdesign,
  SiElementor,
  SiWoocommerce,
  SiThreedotjs,
  SiTailwindcss,
  SiCanva,
  SiAdobexd,
  SiVscodium,
  SiUml,
  SiObsstudio,
  SiPostman,
  SiWireshark,
  SiXampp,
  SiVmware,
  SiCplusplus,
  SiCodeblocks,
  SiC,
  SiGnuemacs,
  SiArduino,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiWondershare,
  SiOllama,
} from 'react-icons/si'

// Helper function to get icon (logo URL or Font Awesome component)
const getIconComponent = (name: string): SkillIcon => {
  // Map tool names to local logo file paths in public/logos/ or external URLs
  const localLogoMap: { [key: string]: string | null } = {
    'Blender': '/logos/blender.png',
    'Visual Studio Code': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  }

  // Check for local logo or external URL first
  const localLogo = localLogoMap[name]
  if (localLogo) {
    return localLogo
  }

  // Fallback to Font Awesome icons
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Next.js': SiNextdotjs,
    'React.js': FaReact,
    'TypeScript': SiTypescript,
    'JavaScript': FaJs,
    'Node.js': FaNodeJs,
    'Express.js': SiExpress,
    'Redux.js': SiRedux,
    'HTML5': FaHtml5,
    'CSS': FaCss3Alt,
    'SCSS': FaSass,
    'Tailwind CSS': SiTailwindcss,
    'Bootstrap': FaBootstrap,
    'PHP': FaPhp,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'Sequelize.js': SiSequelize,
    'Ant Design': SiAntdesign,
    'WordPress': FaWordpress,
    'Elementor': SiElementor,
    'WooCommerce': SiWoocommerce,
    'Three.js': SiThreedotjs,
    'React Three Fiber': FaReact,
    'Figma': FaFigma,
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'Trello': FaTrello,
    'Jira': FaJira,
    'Adobe Photoshop': SiAdobephotoshop,
    'Adobe Illustrator': SiAdobeillustrator,
    'Adobe Premiere Pro': SiAdobepremierepro,
    'Canva': SiCanva,
    'Adobe After Effects': SiAdobeaftereffects,
    'Adobe XD': SiAdobexd,
    'OBS Studio': SiObsstudio,
    'Enterprise Architect': SiUml,
    'Postman': SiPostman,
    'Ollama': SiOllama,
    'CapCut': FaVideo, // Fallback for CapCut
    'Filmora': SiWondershare,
    'Wireshark': SiWireshark,
    'XAMPP': SiXampp,
    'VMware': SiVmware,
    'Dev C++': SiCplusplus,
    'Code::Blocks': SiCodeblocks,
    'Python': FaPython,
    'C': SiC,
    'C++': SiCplusplus,
    'HTML': FaHtml5,
    'CSS Sprites': FaCss3Alt,
    'Emacs': SiGnuemacs,
    'Ubuntu': FaUbuntu,
    'Arduino IDE': SiArduino,
  }
  
  return iconMap[name] || FaNetworkWired // Default fallback icon
}

type SkillIcon = string | React.ComponentType<{ className?: string; strokeWidth?: number }>

interface Skill {
  name: string
  icon: SkillIcon
}

const allSkills: Record<string, Skill[]> = {
  'Tools & Technologies': [
    { name: 'Next.js', icon: getIconComponent('Next.js') },
    { name: 'React.js', icon: getIconComponent('React.js') },
    { name: 'TypeScript', icon: getIconComponent('TypeScript') },
    { name: 'JavaScript', icon: getIconComponent('JavaScript') },
    { name: 'Node.js', icon: getIconComponent('Node.js') },
    { name: 'Express.js', icon: getIconComponent('Express.js') },
    { name: 'Redux.js', icon: getIconComponent('Redux.js') },
    { name: 'HTML5', icon: getIconComponent('HTML5') },
    { name: 'CSS', icon: getIconComponent('CSS') },
    { name: 'SCSS', icon: getIconComponent('SCSS') },
    { name: 'Tailwind CSS', icon: getIconComponent('Tailwind CSS') },
    { name: 'Bootstrap', icon: getIconComponent('Bootstrap') },
    { name: 'PHP', icon: getIconComponent('PHP') },
    { name: 'MySQL', icon: getIconComponent('MySQL') },
    { name: 'MongoDB', icon: getIconComponent('MongoDB') },
    { name: 'Sequelize.js', icon: getIconComponent('Sequelize.js') },
    { name: 'Ant Design', icon: getIconComponent('Ant Design') },
    { name: 'WordPress', icon: getIconComponent('WordPress') },
    { name: 'Elementor', icon: getIconComponent('Elementor') },
    { name: 'WooCommerce', icon: getIconComponent('WooCommerce') },
    { name: 'Three.js', icon: getIconComponent('Three.js') },
    { name: 'React Three Fiber', icon: getIconComponent('React Three Fiber') },
    { name: 'Figma', icon: getIconComponent('Figma') },
    { name: 'Git', icon: getIconComponent('Git') },
    { name: 'GitHub', icon: getIconComponent('GitHub') },
    { name: 'Trello', icon: getIconComponent('Trello') },
    { name: 'Jira', icon: getIconComponent('Jira') },
    { name: 'Adobe Photoshop', icon: getIconComponent('Adobe Photoshop') },
    { name: 'Adobe Illustrator', icon: getIconComponent('Adobe Illustrator') },
    { name: 'Adobe Premiere Pro', icon: getIconComponent('Adobe Premiere Pro') },
    { name: 'Canva', icon: getIconComponent('Canva') },
    { name: 'Adobe After Effects', icon: getIconComponent('Adobe After Effects') },
    { name: 'Blender', icon: getIconComponent('Blender') },
    { name: 'Adobe XD', icon: getIconComponent('Adobe XD') },
    { name: 'Visual Studio Code', icon: getIconComponent('Visual Studio Code') },
    { name: 'OBS Studio', icon: getIconComponent('OBS Studio') },
    { name: 'Enterprise Architect', icon: getIconComponent('Enterprise Architect') },
    { name: 'Postman', icon: getIconComponent('Postman') },
    { name: 'Ollama', icon: getIconComponent('Ollama') },
    { name: 'CapCut', icon: getIconComponent('CapCut') },
    { name: 'Filmora', icon: getIconComponent('Filmora') },
    { name: 'Wireshark', icon: getIconComponent('Wireshark') },
    { name: 'XAMPP', icon: getIconComponent('XAMPP') },
    { name: 'VMware', icon: getIconComponent('VMware') },
    { name: 'Dev C++', icon: getIconComponent('Dev C++') },
    { name: 'Code::Blocks', icon: getIconComponent('Code::Blocks') },
    { name: 'Python', icon: getIconComponent('Python') },
    { name: 'C', icon: getIconComponent('C') },
    { name: 'C++', icon: getIconComponent('C++') },
    { name: 'HTML', icon: getIconComponent('HTML') },
    { name: 'CSS Sprites', icon: getIconComponent('CSS Sprites') },
    { name: 'Emacs', icon: getIconComponent('Emacs') },
    { name: 'Ubuntu', icon: getIconComponent('Ubuntu') },
    { name: 'Arduino IDE', icon: getIconComponent('Arduino IDE') },
  ],
  'Industry Knowledge': [
    { name: 'User Experience (UX)', icon: IconUser },
    { name: 'User Interface Design', icon: IconPalette },
    { name: 'E-commerce', icon: IconShoppingCart },
    { name: 'Big Data', icon: IconChartBar },
    { name: 'Algorithme', icon: IconMathFunction },
    { name: 'Unified Modeling Language (UML)', icon: IconRuler },
    { name: 'Agile Methodologies', icon: IconRefresh },
    { name: 'Business Model Canvas', icon: IconBriefcase },
    { name: 'Business Process Model and Notation', icon: IconClipboardList },
    { name: 'Lean Six Sigma', icon: IconChartDots },
    { name: 'Business Strategy', icon: FaBusinessTime },
    { name: 'Project Management', icon: FaDiagramProject },
    { name: 'Business Analysis', icon: FaChartLineIcon },
    { name: 'Digital Marketing', icon: IconTrendingUp },
    { name: 'Entrepreneurship', icon: IconBulb },
    { name: 'Photographie', icon: IconCamera },
    { name: 'Robotics', icon: IconRobot },
  ],
  'Interpersonal Skills': [
    { name: 'Problem Solving', icon: IconPuzzle },
    { name: 'Teamwork', icon: IconUsers },
    { name: 'Time Management', icon: IconClock },
    { name: 'Analytical Skills', icon: IconSearch },
    { name: 'Public Relations', icon: IconSpeakerphone },
    { name: 'Communication', icon: FaComments },
    { name: 'Leadership', icon: FaUserTie },
    { name: 'Negotiation', icon: FaHandshake },
    { name: 'Empathy', icon: FaHeartCircleCheck },
    { name: 'Critical Thinking', icon: FaBrain },
    { name: 'Collaboration', icon: FaPeopleGroup },
    { name: 'Presentation Skills', icon: IconPresentation },
    { name: 'Active Listening', icon: IconMessageCircle },
  ],
}

export default function Skills() {
  const { t, dir } = useLanguage()
  const [activeTab, setActiveTab] = useState<'Tools & Technologies' | 'Industry Knowledge' | 'Interpersonal Skills'>('Tools & Technologies')

  // Safety checks for translations
  if (!t || typeof t !== 'object' || !t.skills) {
    return (
      <section dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-tech">
              My Skills & Expertise
            </h2>
          </div>
        </div>
      </section>
    )
  }

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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-600 transition-all mb-8"
            dir={dir}
          >
            {t?.skills?.visitSkills || 'Visit My Skills'}
          </motion.button>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">{t?.skills?.my || 'My '}</span>
            <span className="text-primary-500">{t?.skills?.skillsText || 'Skills'}</span>
            <span className="text-white">{t?.skills?.andExpertise || ' & '}</span>
            <span className="text-primary-500">{t?.skills?.expertiseText || 'Expertise'}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.skills?.subtitle || 'Explore the tools and skills I use daily.'}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-full inline-flex border border-gray-800">
            {[
              { key: 'Tools & Technologies' as const, label: t?.skills?.toolsTechnologies || 'Tools & Technologies' },
              { key: 'Industry Knowledge' as const, label: t?.skills?.industryKnowledge || 'Industry Knowledge' },
              { key: 'Interpersonal Skills' as const, label: t?.skills?.interpersonalSkills || 'Interpersonal Skills' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {allSkills[activeTab]?.map((skill, index) => {
              // Check if icon is a React component
              const isReactComponent = typeof skill.icon === 'function' || (typeof skill.icon === 'object' && skill.icon !== null && '$$typeof' in skill.icon)
              const IconComponent = isReactComponent ? skill.icon : null
              const isImageUrl = typeof skill.icon === 'string' && (skill.icon.startsWith('http') || skill.icon.startsWith('/'))
              
              return (
                <Card3D key={skill.name} intensity={5}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="glass-card p-4 rounded-lg card-3d transform-3d transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-800 rounded-lg p-2 group-hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isImageUrl ? (
                          <img
                            src={skill.icon as string}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : IconComponent ? (
                          (() => {
                            const Component = IconComponent as React.ComponentType<{ className?: string; strokeWidth?: number }>
                            // Check if component name suggests it's a Tabler icon
                            const componentName = Component.displayName || Component.name || ''
                            const isTablerIcon = componentName.startsWith('Icon')
                            const isFontAwesome = componentName.includes('Fa') || componentName.includes('Si')
                            return (
                              <Component 
                                className={`w-8 h-8 ${isFontAwesome ? 'text-primary-500 group-hover:text-primary-400' : 'text-primary-500 group-hover:text-primary-400'} transition-colors`}
                                {...(isTablerIcon ? { strokeWidth: 1.5 } : {})}
                              />
                            )
                          })()
                        ) : (
                          <span className="text-4xl">📦</span>
                        )}
                      </motion.div>
                      <span className="text-xs md:text-sm font-semibold text-white group-hover:text-primary-500 transition-colors line-clamp-2 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-lg shine-effect opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </motion.div>
                </Card3D>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
