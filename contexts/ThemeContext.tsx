'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type ColorTheme = 'orange' | 'blue' | 'green' | 'purple' | 'pink' | 'red'

interface ThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
  primaryColor: string
  secondaryColor: string
}

const colorThemes: Record<ColorTheme, { primary: string; secondary: string }> = {
  orange: { primary: '#f97316', secondary: '#10b981' },
  blue: { primary: '#3b82f6', secondary: '#06b6d4' },
  green: { primary: '#10b981', secondary: '#3b82f6' },
  purple: { primary: '#a855f7', secondary: '#ec4899' },
  pink: { primary: '#ec4899', secondary: '#f97316' },
  red: { primary: '#ef4444', secondary: '#f59e0b' },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('blue')

  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme') as ColorTheme
    if (savedTheme && Object.keys(colorThemes).includes(savedTheme)) {
      setColorThemeState(savedTheme)
    }
  }, [])

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme)
    localStorage.setItem('colorTheme', theme)
    updateCSSVariables(theme)
  }

  const updateCSSVariables = (theme: ColorTheme) => {
    if (typeof window === 'undefined') return
    const root = document.documentElement
    const colors = colorThemes[theme]
    
    // Update CSS variables
    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-secondary', colors.secondary)
    
    // Calculate darker/lighter variants
    const primaryDark = colors.primary + 'dd'
    const primaryLight = colors.primary + '80'
    
    // Update Tailwind primary color classes dynamically
    const style = document.createElement('style')
    style.id = 'dynamic-theme'
    style.textContent = `
      /* Background colors */
      .bg-primary-500,
      .bg-primary-600,
      button.bg-primary-500,
      .hover\\:bg-primary-600:hover,
      [class*="bg-primary"] { 
        background-color: ${colors.primary} !important; 
      }
      
      /* Text colors */
      .text-primary-500,
      .hover\\:text-primary-500:hover,
      span.text-primary-500,
      [class*="text-primary"] { 
        color: ${colors.primary} !important; 
      }
      
      /* Border colors */
      .border-primary-500,
      .border-primary-500\\/30,
      .border-primary-500\\/20,
      .border-primary-500\\/60,
      [class*="border-primary"] { 
        border-color: ${colors.primary} !important; 
      }
      
      /* Gradient backgrounds */
      .from-primary-500,
      .to-primary-600,
      .from-primary-900\\/50,
      .from-primary-900\\/80,
      .via-primary-800\\/30,
      [class*="from-primary"],
      [class*="to-primary"],
      [class*="via-primary"] { 
        --tw-gradient-from: ${colors.primary} !important;
        --tw-gradient-to: ${colors.primary}dd !important;
      }
      
      /* Gradient text */
      .gradient-text {
        background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.primary}) !important;
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      /* Glitch animation colors */
      @keyframes glitch {
        0%, 100% {
          text-shadow: 2px 2px 0 ${colors.primary}, -2px -2px 0 ${colors.secondary};
        }
        25% {
          text-shadow: -2px 2px 0 ${colors.primary}, 2px -2px 0 ${colors.secondary};
        }
        50% {
          text-shadow: 2px -2px 0 ${colors.primary}, -2px 2px 0 ${colors.secondary};
        }
        75% {
          text-shadow: -2px -2px 0 ${colors.primary}, 2px 2px 0 ${colors.secondary};
        }
      }
      
      /* Scrollbar */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.primary} !important;
      }
      
      /* Box shadows with primary color */
      [style*="boxShadow"][style*="rgba"] {
        box-shadow: 0 10px 30px ${colors.primary}66 !important;
      }
    `
    const existingStyle = document.getElementById('dynamic-theme')
    if (existingStyle) {
      existingStyle.remove()
    }
    document.head.appendChild(style)
  }

  useEffect(() => {
    updateCSSVariables(colorTheme)
  }, [colorTheme])

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        primaryColor: colorThemes[colorTheme].primary,
        secondaryColor: colorThemes[colorTheme].secondary,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

