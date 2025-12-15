// Types for blog detail translations
export interface BlogDetailTranslations {
  domainExplanation: string
  howToStart: string
  essentialElements: string[]
  fullContent: string
  prerequisites?: string[]
  tools?: string[]
  nextSteps?: string[]
}

export type BlogDetailLocale = 'fr' | 'ar' | 'en'

export type BlogTranslations = Record<number, Record<BlogDetailLocale, BlogDetailTranslations>>

