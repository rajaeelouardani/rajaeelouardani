'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TextAnimationProps {
  text: string
  className?: string
  delay?: number
  type?: 'typing' | 'reveal' | 'glitch' | 'gradient'
}

export default function TextAnimation({
  text,
  className = '',
  delay = 0,
  type = 'reveal',
}: TextAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (type === 'typing') {
      setIsTyping(true)
      let currentIndex = 0
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1))
            currentIndex++
          } else {
            clearInterval(interval)
            setIsTyping(false)
          }
        }, 50)
        return () => clearInterval(interval)
      }, delay * 1000)
      return () => clearTimeout(timer)
    } else {
      setDisplayText(text)
    }
  }, [text, type, delay])

  if (type === 'typing') {
    return (
      <span className={className}>
        {displayText}
        {isTyping && <span className="animate-pulse">|</span>}
      </span>
    )
  }

  if (type === 'glitch') {
    return (
      <motion.span
        className={`${className} text-glitch`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {displayText}
      </motion.span>
    )
  }

  if (type === 'gradient') {
    return (
      <motion.span
        className={`${className} gradient-text`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
      >
        {displayText}
      </motion.span>
    )
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      {displayText}
    </motion.span>
  )
}

