'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import {
  IconCamera,
  IconVideo,
  IconCode,
  IconPalette,
  IconRocket,
} from '@tabler/icons-react'

interface Pulse {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: React.ReactNode
  angle: number
  color: string
  bgColor: string
  textColor: string
}

const getPulses = (t: any): Pulse[] => [
  {
    id: 'photography',
    title: t?.creativePulse?.photography?.title || 'Photography',
    description: t?.creativePulse?.photography?.description || 'I capture meaningful moments and visual stories through a creative and professional lens, focusing on composition, emotion, and brand identity.',
    shortDescription: t?.creativePulse?.photography?.shortDescription || 'Visual storytelling through creative lenses',
    icon: <IconCamera className="w-6 h-6" />,
    angle: -90, // Top (0° is right, -90° is top)
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
  },
  {
    id: 'videography',
    title: t?.creativePulse?.videography?.title || 'Videography',
    description: t?.creativePulse?.videography?.description || 'From concept to final cut, I produce engaging videos that tell stories, promote brands, and create strong visual impact.',
    shortDescription: t?.creativePulse?.videography?.shortDescription || 'Motion-driven brand communication',
    icon: <IconVideo className="w-6 h-6" />,
    angle: -18, // Top-right (72° from top)
    color: 'text-purple-400',
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
  },
  {
    id: 'web-development',
    title: t?.creativePulse?.webDevelopment?.title || 'Web Development',
    description: t?.creativePulse?.webDevelopment?.description || 'I build modern, scalable, and high-performance web applications using Next.js, React.js, and Node.js, transforming ideas into digital products.',
    shortDescription: t?.creativePulse?.webDevelopment?.shortDescription || 'Building scalable digital solutions',
    icon: <IconCode className="w-6 h-6" />,
    angle: 54, // Right (144° from top)
    color: 'text-cyan-400',
    bgColor: 'bg-teal-500',
    textColor: 'text-teal-500',
  },
  {
    id: 'branding',
    title: t?.creativePulse?.branding?.title || 'Branding',
    description: t?.creativePulse?.branding?.description || 'I help brands define their visual identity, messaging, and digital presence to stand out and connect with their audience.',
    shortDescription: t?.creativePulse?.branding?.shortDescription || 'Creating strong visual identities',
    icon: <IconPalette className="w-6 h-6" />,
    angle: 126, // Bottom-right (216° from top)
    color: 'text-pink-400',
    bgColor: 'bg-pink-600',
    textColor: 'text-pink-600',
  },
  {
    id: 'entrepreneurship',
    title: t?.creativePulse?.entrepreneurship?.title || 'Entrepreneurship',
    description: t?.creativePulse?.entrepreneurship?.description || 'Co-founder and community leader, actively involved in innovation, startups, and empowering young talents through tech and creativity.',
    shortDescription: t?.creativePulse?.entrepreneurship?.shortDescription || 'Leading innovation & communities',
    icon: <IconRocket className="w-6 h-6" />,
    angle: 198, // Bottom-left (288° from top)
    color: 'text-green-400',
    bgColor: 'bg-green-500',
    textColor: 'text-green-500',
  },
]

export default function CreativePulse() {
  const [activePulse, setActivePulse] = useState<string | null>(null)
  const { primaryColor } = useTheme()
  const { t, dir } = useLanguage()
  const pulses = getPulses(t || {})

  const centerRadius = 80
  const outerRadius = 200
  const centerX = 200
  const centerY = 200
  // Position icons inside the outer circle, evenly spaced between center and outer edge
  // Ensure icons are well inside the outer circle (not touching the edge)
  const iconRadius = centerRadius + (outerRadius - centerRadius) * 0.55 // 55% between center and outer

  const getPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
    }
  }

  const getQuadrantPath = (index: number) => {
    const segmentAngle = 360 / pulses.length // 72 degrees for 5 segments
    const startAngle = index * segmentAngle - segmentAngle / 2
    const endAngle = (index + 1) * segmentAngle - segmentAngle / 2
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = centerX + outerRadius * Math.cos(startRad)
    const y1 = centerY + outerRadius * Math.sin(startRad)
    const x2 = centerX + outerRadius * Math.cos(endRad)
    const y2 = centerY + outerRadius * Math.sin(endRad)

    const largeArc = segmentAngle > 180 ? 1 : 0

    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} Z`
  }

  const getPositionLabel = (angle: number) => {
    if (angle >= 315 || angle < 45) return 'top'
    if (angle >= 45 && angle < 135) return 'right'
    if (angle >= 135 && angle < 225) return 'bottom'
    if (angle >= 225 && angle < 315) return 'left'
    return 'top'
  }

  const quadrants = pulses.map((pulse, index) => ({
    pulse,
    path: getQuadrantPath(index),
    number: String(index + 1).padStart(2, '0'),
    position: getPositionLabel(pulse.angle),
  }))

  return (
    <section className="min-h-screen flex items-center justify-center bg-black/80 py-20 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm uppercase mb-2" dir={dir}>{t.creativePulse.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">{t.creativePulse.my}</span>
            <LayoutTextFlip
              text=""
              words={t.creativePulse.flipWords}
              className="text-4xl md:text-5xl"
            />
            {' '}
            <span className="text-primary-500">{t.creativePulse.title}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.creativePulse.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {activePulse ? (
                <motion.div
                  key={activePulse}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 rounded-2xl"
                  style={{
                    boxShadow: `0 20px 60px ${primaryColor}40, 0 0 40px ${primaryColor}20`,
                  }}
                >
                  {(() => {
                    const pulse = pulses.find((p) => p.id === activePulse)
                    if (!pulse) return null

                    return (
                      <>
                        <motion.h3
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-2xl md:text-3xl font-bold mb-4"
                          style={{ color: primaryColor }}
                          dir={dir}
                        >
                          {pulse.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-gray-300 text-base md:text-lg leading-relaxed"
                          dir={dir}
                        >
                          {pulse.description}
                        </motion.p>
                      </>
                    )
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-8 rounded-2xl"
                  style={{
                    boxShadow: `0 20px 60px ${primaryColor}40, 0 0 40px ${primaryColor}20`,
                  }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }} dir={dir}>
                    {t.creativePulse.creativeDigitalProfile}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed" dir={dir}>
                    {t.creativePulse.clickToDiscover}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side - 4 Quadrants Circle */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[500px] h-[500px] flex items-center justify-center mx-auto">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" style={{ transform: 'translate(0, 0)' }}>
                {/* 4 Quadrants */}
                {quadrants.map((quadrant, index) => {
                  const isActive = activePulse === quadrant.pulse.id

                  return (
                    <g key={quadrant.pulse.id}>
                      <motion.path
                        d={quadrant.path}
                        fill={quadrant.pulse.bgColor}
                        opacity={isActive ? 0.9 : 0.7}
                        className="transition-opacity duration-300 cursor-pointer"
                        onClick={() => setActivePulse(isActive ? null : quadrant.pulse.id)}
                        whileHover={{ opacity: 0.95 }}
                      />
                      {/* Number in quadrant */}
                      <text
                        x={centerX + (outerRadius * 0.6) * Math.cos((quadrant.pulse.angle * Math.PI) / 180)}
                        y={centerY + (outerRadius * 0.6) * Math.sin((quadrant.pulse.angle * Math.PI) / 180)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`text-2xl font-bold transition-colors duration-300 ${
                          isActive ? 'fill-white' : activePulse !== null ? 'fill-gray-500' : 'fill-white'
                        }`}
                      >
                        {quadrant.number}
                      </text>
                    </g>
                  )
                })}

                {/* Inner Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={centerRadius}
                  fill="rgba(31, 41, 55, 0.9)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                />

                {/* Outer Border - Dotted */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={outerRadius + 10}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                />
              </svg>

              {/* Icons with Titles - Always visible */}
              {quadrants.map((quadrant) => {
                const iconPosition = getPosition(quadrant.pulse.angle, iconRadius)
                const titlePosition = getPosition(quadrant.pulse.angle, iconRadius + 50)
                const isActive = activePulse === quadrant.pulse.id

                // Calculate text alignment based on position
                const getTextAlignment = () => {
                  if (quadrant.position === 'top') return { textAlign: 'center', x: 0, y: -60 }
                  if (quadrant.position === 'right') return { textAlign: 'left', x: 60, y: 0 }
                  if (quadrant.position === 'bottom') return { textAlign: 'center', x: 0, y: 60 }
                  if (quadrant.position === 'left') return { textAlign: 'right', x: -60, y: 0 }
                  return { textAlign: 'center', x: 0, y: 0 }
                }

                const textAlign = getTextAlignment()

                return (
                  <div
                    key={quadrant.pulse.id}
                    className="absolute"
                    style={{
                      left: `${(iconPosition.x / 400) * 100}%`,
                      top: `${(iconPosition.y / 400) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.button
                      onClick={() => setActivePulse(isActive ? null : quadrant.pulse.id)}
                      className={`relative ${quadrant.pulse.color} transition-all duration-300 pointer-events-auto opacity-100`}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="glass-effect w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          boxShadow: isActive 
                            ? `0 0 20px ${primaryColor}80, 0 0 40px ${primaryColor}40`
                            : `0 0 10px ${quadrant.pulse.color === 'text-blue-400' ? 'rgba(59, 130, 246, 0.3)' : 
                              quadrant.pulse.color === 'text-purple-400' ? 'rgba(168, 85, 247, 0.3)' :
                              quadrant.pulse.color === 'text-cyan-400' ? 'rgba(6, 182, 212, 0.3)' :
                              quadrant.pulse.color === 'text-pink-400' ? 'rgba(236, 72, 153, 0.3)' :
                              'rgba(34, 197, 94, 0.3)'}`,
                        }}
                        animate={{
                          y: [0, -8, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2.5 + (quadrant.pulse.angle / 180),
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: quadrant.pulse.angle / 500,
                        }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <span className={`transition-colors duration-300 ${
                          isActive ? 'text-white' : activePulse !== null ? 'text-gray-500' : quadrant.pulse.color
                        }`}>
                          {quadrant.pulse.icon}
                        </span>
                      </motion.div>
                      
                      {/* Title next to icon */}
                      <motion.div
                        className={`absolute whitespace-nowrap ${
                          textAlign.textAlign === 'center' ? 'left-1/2 -translate-x-1/2' :
                          textAlign.textAlign === 'left' ? 'left-full ml-3' :
                          'right-full mr-3'
                        } ${
                          textAlign.textAlign === 'center' && textAlign.y < 0 ? 'bottom-full mb-2' :
                          textAlign.textAlign === 'center' && textAlign.y > 0 ? 'top-full mt-2' :
                          'top-1/2 -translate-y-1/2'
                        }`}
                        style={{
                          color: primaryColor,
                        }}
                      >
                        <span className="text-sm font-semibold" dir={dir}>{quadrant.pulse.title}</span>
                      </motion.div>
                    </motion.button>
                  </div>
                )
              })}

              {/* Central Circle - Text Only - Perfectly centered in global circle */}
              <motion.div
                className="absolute rounded-full bg-gray-800/50 backdrop-blur-xl border-2 border-white/30 flex flex-col items-center justify-center z-10"
                style={{
                  width: '160px',
                  height: '160px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-80px',
                  marginTop: '-80px',
                  boxShadow: `0 0 30px ${primaryColor}30`,
                }}
                animate={{
                  scale: activePulse ? 0.95 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-bold text-white mb-1" dir={dir}>{t.creativePulse.creative}</h3>
                <p className="text-xs text-gray-300 text-center" dir={dir}>{t.creativePulse.digitalProfile}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
