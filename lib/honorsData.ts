export interface HonorDetail {
  id: number
  slug: string
  logo: string
  coverImage: string
  gallery: string[]
  link?: string
}

export const RIDUGE_GALLERY = [
  '/honors/riduge/winner.jpeg',
  '/honors/riduge/photo.jfif',
  '/honors/riduge/solidarite.jfif',
  '/honors/riduge/car-classement.jpeg',
]

export const honorsDetails: Record<string, HonorDetail> = {
  'riduge-2026': {
    id: 7,
    slug: 'riduge-2026',
    logo: '/honors/riduge/logo.png',
    coverImage: '/honors/riduge/winner.jpeg',
    gallery: RIDUGE_GALLERY,
    link: 'https://riduge.vercel.app',
  },
}

export function getHonorBySlug(slug: string): HonorDetail | undefined {
  return honorsDetails[slug]
}

export function getHonorById(id: number): HonorDetail | undefined {
  return Object.values(honorsDetails).find((honor) => honor.id === id)
}

export function truncateText(text: string, maxLength = 110): string {
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength).trim()
  const lastSpace = truncated.lastIndexOf(' ')
  return `${(lastSpace > 60 ? truncated.slice(0, lastSpace) : truncated).trim()}...`
}
