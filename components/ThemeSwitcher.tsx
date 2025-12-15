'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const themes = [
  { name: 'Orange', value: 'orange', color: '#f97316' },
  { name: 'Blue', value: 'blue', color: '#3b82f6' },
  { name: 'Green', value: 'green', color: '#10b981' },
  { name: 'Purple', value: 'purple', color: '#a855f7' },
  { name: 'Pink', value: 'pink', color: '#ec4899' },
  { name: 'Red', value: 'red', color: '#ef4444' },
] as const

export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-gray-900 border border-primary-500/30 rounded-lg text-white hover:bg-gray-800 transition-colors"
        title="Change theme"
      >
        <div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: themes.find((t) => t.value === colorTheme)?.color }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-gray-900 border border-primary-500/30 rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]"
          >
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => {
                  setColorTheme(theme.value as any)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                  colorTheme === theme.value
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: theme.color }}
                />
                <span>{theme.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

