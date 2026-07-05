'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Large circle */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -20,
          y: -20,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary-500"></div>
      </motion.div>

      {/* Small circle */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -4,
          y: -4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
      </motion.div>
    </>
  )
}

