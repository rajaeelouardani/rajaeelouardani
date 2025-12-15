import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Rajae Elouardani - Portfolio',
  description: 'Web Developer | Content Creator | Computer Science Student | Ambassadrice 10000 Codeurs | ALX Software Engineering | Présidente Photography FSM Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
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

