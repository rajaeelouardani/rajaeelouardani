'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { IconCode } from '@tabler/icons-react'

export default function LoadingScreen() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

      useEffect(() => {
        setIsLoading(true)
        setProgress(0)

        // Simulate loading progress - 0.5 seconds
        const duration = 500 // 0.5 seconds
        const steps = 100
        const stepDuration = duration / steps
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + (100 / steps)
      })
    }, stepDuration)

    return () => clearInterval(interval)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* Coding Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <IconCode className="w-16 h-16 text-blue-500 absolute z-10" strokeWidth={1.5} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text Animation */}
          <div className="loading-text mb-8">
            <LoadingTextAnimation text="Rajae Elouardani Portfolio" />
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm mt-4"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LoadingTextAnimation({ text }: { text: string }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate character positions - using deterministic values based on index
  const chars = text.split('')
  const charWidth = 14 // Approximate character width in pixels

  // Deterministic function to generate values based on index
  const getDeterministicValue = (index: number, base: number, range: number) => {
    // Use a simple hash-like function for deterministic randomness
    const seed = (index * 17 + base * 23) % range
    return base + seed
  }

  return (
    <div className={`loading ${isAnimating ? 'start' : ''}`}>
      <div className="opacity-0">{text}</div>
      {chars.map((char, index) => {
        const x = index * charWidth
        // Use deterministic values based on index instead of Math.random()
        const moveY = getDeterministicValue(index, 20, 50) * (index % 2 === 0 ? 1 : -1)
        const moveYS = getDeterministicValue(index, 10, 30) * (index % 2 === 0 ? 1 : -1)
        
        return (
          <span
            key={index}
            style={{
              '--x': `${x}px`,
              '--y': '0px',
              '--move-y': `${moveY}px`,
              '--move-y-s': `${moveYS}px`,
              '--delay': `${index * 10}ms`,
            } as React.CSSProperties}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </div>
  )
}

