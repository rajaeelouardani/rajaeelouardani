import type { Metadata } from 'next'
import { Radley, Tektur, Reem_Kufi } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MouseFollower from '@/components/MouseFollower'
import ScrollToTop from '@/components/ScrollToTop'
import SocialDock from '@/components/SocialDock'
import LoadingScreen from '@/components/LoadingScreen'
import AnimatedBackground from '@/components/AnimatedBackground'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const radley = Radley({ 
  subsets: ['latin'], 
  variable: '--font-radley',
  weight: ['400'],
  display: 'swap',
})

const tektur = Tektur({ 
  subsets: ['latin'], 
  variable: '--font-tektur',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const reemKufi = Reem_Kufi({ 
  subsets: ['arabic', 'latin'], 
  variable: '--font-reem-kufi',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rajae Elouardani - Portfolio | Web Developer & Content Creator',
    template: '%s | Rajae Elouardani',
  },
  description: 'Développeuse web Full Stack spécialisée en Next.js, React.js et Node.js. Étudiante en Informatique | ALX Software Engineering | Ambassadrice 10000 Codeurs | Présidente Photography FSM Club. Découvrez mes projets web, design et photographie.',
  keywords: [
    'Rajae Elouardani',
    'Web Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Portfolio',
    'Web Development',
    'Photography',
    'Design',
    'Morocco',
    'ALX Software Engineering',
    '10000 Codeurs',
  ],
  authors: [{ name: 'Rajae Elouardani' }],
  creator: 'Rajae Elouardani',
  publisher: 'Rajae Elouardani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
      'ar-MA': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com',
    siteName: 'Rajae Elouardani - Portfolio',
    title: 'Rajae Elouardani - Web Developer & Content Creator',
    description: 'Développeuse web Full Stack spécialisée en Next.js, React.js et Node.js. Découvrez mes projets web, design et photographie.',
    images: [
      {
        url: '/Rajae elouardani.png',
        width: 1200,
        height: 630,
        alt: 'Rajae Elouardani - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajae Elouardani - Web Developer & Content Creator',
    description: 'Développeuse web Full Stack spécialisée en Next.js, React.js et Node.js.',
    images: ['/Rajae elouardani.png'],
    creator: '@rajaeelouardani',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com'
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajae Elouardani',
    jobTitle: 'Web Developer',
    description: 'Web Developer | Content Creator | Computer Science Student',
    url: baseUrl,
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
    description: 'Web Developer Portfolio',
    author: {
      '@type': 'Person',
      name: 'Rajae Elouardani',
    },
  }

  return (
    <html lang="en" className={`${radley.variable} ${tektur.variable} ${reemKufi.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <AnimatedBackground />
            <LoadingScreen />
            <MouseFollower />
            <Header />
            <main>{children}</main>
            <Footer />
            <SocialDock />
            <ScrollToTop />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

