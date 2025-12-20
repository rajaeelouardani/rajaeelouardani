'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function Card3D({
  children,
  className = '',
  intensity = 15,
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#3b82f6')
  const { primaryColor: themePrimaryColor } = useTheme()
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (themePrimaryColor) {
      setPrimaryColor(themePrimaryColor)
    }
  }, [themePrimaryColor])

  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  // Convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  return (
    <motion.div
      className={`perspective-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${hexToRgba(primaryColor, 0.4)}` 
          : `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px ${hexToRgba(primaryColor, 0.25)}`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

