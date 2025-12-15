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
} from 'react-icons/fa'
import { 
  FaDiagramProject,
  FaPeopleGroup,
  FaHeartCircleCheck,
  FaBrain,
  FaCommentsDollar,
} from 'react-icons/fa6'

// Helper function to get logo URL from Simple Icons
const getLogoUrl = (name: string, fallback?: string) => {
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
    'React Three Fiber': 'react',
    'Figma': 'figma',
    'Git': 'git',
    'GitHub': 'github',
    'Trello': 'trello',
    'REST APIs': 'rest',
    'Python': 'python',
    'C': 'c',
    'C++': 'cplusplus',
    'HTML': 'html5',
    'CSS Sprites': 'css3',
    'Emacs': 'gnuemacs',
    'Ubuntu': 'ubuntu',
    'Arduino IDE': 'arduino',
    'Jira': 'jira',
  }
  
  const iconName = iconMap[name] || fallback || 'code'
  // Using colored logos instead of white for better visibility
  return `https://cdn.simpleicons.org/${iconName}`
}

type SkillIcon = string | React.ComponentType<{ className?: string; strokeWidth?: number }>

interface Skill {
  name: string
  icon: SkillIcon
}

const allSkills: Record<string, Skill[]> = {
  'Tools & Technologies': [
    { name: 'Next.js', icon: getLogoUrl('Next.js') },
    { name: 'React.js', icon: getLogoUrl('React.js') },
    { name: 'TypeScript', icon: getLogoUrl('TypeScript') },
    { name: 'JavaScript', icon: getLogoUrl('JavaScript') },
    { name: 'Node.js', icon: getLogoUrl('Node.js') },
    { name: 'Express.js', icon: getLogoUrl('Express.js') },
    { name: 'Redux.js', icon: getLogoUrl('Redux.js') },
    { name: 'HTML5', icon: getLogoUrl('HTML5') },
    { name: 'CSS', icon: getLogoUrl('CSS') },
    { name: 'SCSS', icon: getLogoUrl('SCSS') },
    { name: 'Tailwind CSS', icon: getLogoUrl('Tailwind CSS') },
    { name: 'Bootstrap', icon: getLogoUrl('Bootstrap') },
    { name: 'PHP', icon: getLogoUrl('PHP') },
    { name: 'MySQL', icon: getLogoUrl('MySQL') },
    { name: 'Sequelize.js', icon: getLogoUrl('Sequelize.js') },
    { name: 'Ant Design', icon: getLogoUrl('Ant Design') },
    { name: 'WordPress', icon: getLogoUrl('WordPress') },
    { name: 'Elementor', icon: getLogoUrl('Elementor') },
    { name: 'WooCommerce', icon: getLogoUrl('WooCommerce') },
    { name: 'Three.js', icon: getLogoUrl('Three.js') },
    { name: 'React Three Fiber', icon: getLogoUrl('React Three Fiber') },
    { name: 'Figma', icon: getLogoUrl('Figma') },
    { name: 'Git', icon: getLogoUrl('Git') },
    { name: 'GitHub', icon: getLogoUrl('GitHub') },
    { name: 'Trello', icon: getLogoUrl('Trello') },
    { name: 'REST APIs', icon: getLogoUrl('REST APIs', 'rest') },
    { name: 'Python', icon: getLogoUrl('Python') },
    { name: 'C', icon: getLogoUrl('C') },
    { name: 'C++', icon: getLogoUrl('C++') },
    { name: 'HTML', icon: getLogoUrl('HTML') },
    { name: 'CSS Sprites', icon: getLogoUrl('CSS Sprites') },
    { name: 'Emacs', icon: getLogoUrl('Emacs') },
    { name: 'Ubuntu', icon: getLogoUrl('Ubuntu') },
    { name: 'Arduino IDE', icon: getLogoUrl('Arduino IDE') },
    { name: 'Jira', icon: getLogoUrl('Jira') },
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-600 transition-all mb-8"
            dir={dir}
          >
            {t?.skills?.visitSkills || 'Visit My Skills'}
          </motion.button>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" dir={dir}>
            <span>{t?.skills?.my || 'My '}</span>
            <span className="text-primary-500">{t?.skills?.skillsText || 'Skills'}</span>
            <span className="text-green-400">{t?.skills?.andExpertise || ' & '}</span>
            <span className="text-green-400">{t?.skills?.expertiseText || 'Expertise'}</span>
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
              const isImageUrl = typeof skill.icon === 'string' && skill.icon.startsWith('http')
              
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
                            return (
                              <Component 
                                className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors"
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
