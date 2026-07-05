'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale } from '@/lib/i18n'
import enTranslations from '@/lib/translations/en.json'
import frTranslations from '@/lib/translations/fr.json'
import arTranslations from '@/lib/translations/ar.json'

type Translations = typeof enTranslations

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations,
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && ['en', 'fr', 'ar'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    document.documentElement.lang = newLocale
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  }

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale], dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

