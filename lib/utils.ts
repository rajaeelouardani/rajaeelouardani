import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MONTH_MAP: Record<string, number> = {
  jan: 0, january: 0, janvier: 0, 'يناير': 0,
  feb: 1, february: 1, février: 1, fevrier: 1, 'فبراير': 1,
  mar: 2, march: 2, mars: 2,
  apr: 3, april: 3, avril: 3, 'أبريل': 3,
  may: 4, mai: 4, 'مايو': 4,
  jun: 5, june: 5, juin: 5,
  jul: 6, july: 6, juillet: 6, 'يوليو': 6,
  aug: 7, august: 7, août: 7, aout: 7,
  sep: 8, sept: 8, september: 8, septembre: 8,
  oct: 9, october: 9, octobre: 9,
  nov: 10, november: 10, novembre: 10,
  dec: 11, december: 11, décembre: 11, decembre: 11, 'ديسمبر': 11,
}

/** Parse flexible date strings (EN/FR/AR) into a sortable month index. */
export function parseEventDate(dateStr: string): number {
  if (!dateStr) return 0

  const primary = dateStr.split(' - ')[0].trim()
  const yearMatch = primary.match(/\b(19|20)\d{2}\b/)
  const year = yearMatch ? parseInt(yearMatch[0], 10) : 0

  const lower = primary.toLowerCase()
  let month = -1

  for (const [key, value] of Object.entries(MONTH_MAP)) {
    if (lower.includes(key) || primary.includes(key)) {
      month = value
      break
    }
  }

  if (month === -1) {
    month = 5 // mid-year default for year-only entries like "2025"
  }

  return year * 12 + month
}

export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date))
}

/** Parse project period strings for sorting (handles ranges, Présent, year ranges). */
export function parseProjectPeriod(period: string): number {
  if (!period) return 0

  const normalized = period.replace(/[–—]/g, '-').toLowerCase()

  if (
    normalized.includes('présent') ||
    normalized.includes('present') ||
    normalized.includes('en développement') ||
    normalized.includes('en cours') ||
    normalized.includes('ongoing') ||
    normalized.includes('développement')
  ) {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth() + 12000
  }

  const yearRange = normalized.match(/\b(19|20)\d{2}\s*-\s*((19|20)\d{2})\b/)
  if (yearRange) {
    const endYear = parseInt(yearRange[2], 10)
    return endYear * 12 + 11
  }

  const parts = period.split(/\s*-\s*|\s*–\s*/).map((p) => p.trim()).filter(Boolean)
  if (parts.length > 1) {
    return Math.max(...parts.map((p) => parseEventDate(p)))
  }

  return parseEventDate(period)
}

export function sortProjectsByPeriodDesc<T extends { period: string; id?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const diff = parseProjectPeriod(b.period) - parseProjectPeriod(a.period)
    if (diff !== 0) return diff
    return (b.id ?? 0) - (a.id ?? 0)
  })
}
