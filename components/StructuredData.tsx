'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function StructuredData() {
  const { t } = useLanguage()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com'

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajae Elouardani',
    jobTitle: 'Web Developer',
    description: t?.hero?.description || 'Web Developer | Content Creator | Computer Science Student',
    url: baseUrl,
    sameAs: [
      // Add your social media links here
      // 'https://github.com/rajaeelouardani',
      // 'https://linkedin.com/in/rajaeelouardani',
      // 'https://twitter.com/rajaeelouardani',
    ],
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Photography',
      'Design',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'ALX Software Engineering',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Université Moulay Ismail',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rajae Elouardani - Portfolio',
    url: baseUrl,
    description: t?.hero?.description || 'Web Developer Portfolio',
    author: {
      '@type': 'Person',
      name: 'Rajae Elouardani',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

