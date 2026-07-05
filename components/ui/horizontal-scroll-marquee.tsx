'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HorizontalScrollMarqueeProps {
  children: ReactNode[]
  duration?: number
  reverse?: boolean
  gap?: number
  className?: string
}

export function HorizontalScrollMarquee({
  children,
  duration = 45,
  reverse = false,
  gap = 6,
  className = '',
}: HorizontalScrollMarqueeProps) {
  const items = [...children, ...children]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex items-stretch w-max"
        style={{ gap: `${gap * 0.25}rem` }}
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
      >
        {items.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
