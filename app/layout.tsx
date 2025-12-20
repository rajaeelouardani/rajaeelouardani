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
  icons: {
    icon: '/svg mon logo favicon.png',
    apple: '/svg mon logo favicon.png',
  },
  description: 'Développeuse web Full Stack spécialisée en Next.js, React.js et Node.js. Étudiante en Informatique | ALX Software Engineering | Ambassadrice 10000 Codeurs | Présidente Photography FSM Club. Découvrez mes projets web, design et photographie.',
  keywords: [
    'Rajae Elouardani',
    'Web Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'React.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Portfolio',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Photography',
    'Design',
    'UI/UX Design',
    'Graphic Design',
    'Logo Design',
    'Morocco',
    'Moroccan Developer',
    'ALX Software Engineering',
    '10000 Codeurs',
    'Content Creator',
    'Freelance Developer',
    'Web Design',
    'Mobile Development',
    'Responsive Design',
  ],
  category: 'Portfolio',
  classification: 'Web Development Portfolio',
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
    description: 'Web Developer Portfolio - Full Stack Developer specializing in Next.js, React.js, and Node.js',
    author: {
      '@type': 'Person',
      name: 'Rajae Elouardani',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${baseUrl}/projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
    ],
  }

  return (
    <html lang="en" className={`${radley.variable} ${tektur.variable} ${reemKufi.variable}`}>
      <head>
        <link rel="icon" href="/svg mon logo favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/svg mon logo favicon.png" />
        {/* DNS prefetch and preconnect for faster image loading */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Preload first 3 testimonial images (most important) */}
        <link rel="preload" href="/testimonial/kenza Abbouti.webp" as="image" fetchPriority="high" type="image/webp" />
        <link rel="preload" href="/testimonial/Hajar-SLIMANI.png" as="image" fetchPriority="high" type="image/png" />
        <link rel="preload" href="/testimonial/IMANE-BOUHADDOU.png" as="image" fetchPriority="high" type="image/png" />
        {/* Prefetch remaining testimonial images (lower priority) */}
        <link rel="prefetch" href="/testimonial/Douglas-Mbiandou.png" as="image" />
        <link rel="prefetch" href="/testimonial/Awatif Beggar.jpg" as="image" />
        <link rel="prefetch" href="/testimonial/Adam-bennis.png" as="image" />
        <link rel="prefetch" href="/testimonial/Samir Messaoudi.png" as="image" />
        <link rel="prefetch" href="/testimonial/Yasmine-Allal.png" as="image" />
        <link rel="prefetch" href="/testimonial/Sadife-Mehmed-Descamps.png" as="image" />
        <link rel="prefetch" href="/testimonial/Mahamouda-Salouhou.png" as="image" />
        <link rel="prefetch" href="/testimonial/Ahmed-MOUCHTACHI.png" as="image" />
        <link rel="prefetch" href="/testimonial/Nadia-Handaq.png" as="image" />
        <link rel="prefetch" href="/logos/mcovery.webp" as="image" />
        <link rel="prefetch" href="/testimonial/Hôtel Le Rochegude.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href={baseUrl} />
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Morocco" />
        <meta name="language" content="French, English, Arabic" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="content-language" content="fr, en, ar" />
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

