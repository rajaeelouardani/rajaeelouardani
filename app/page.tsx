import Hero from '@/components/sections/Hero'
import TechMarquee from '@/components/TechMarquee'
import CreativePulse from '@/components/sections/CreativePulse'
import HonorsAwardsScroll from '@/components/sections/HonorsAwardsScroll'
import CertificationsScroll from '@/components/sections/CertificationsScroll'
import Portfolio from '@/components/sections/Portfolio'
import Blog from '@/components/sections/Blog'
import { GlobeDemo } from '@/components/GlobeDemo'
import Testimonials from '@/components/sections/Testimonials'
import GitHubStats from '@/components/sections/GitHubStats'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Introduction */}
      <Hero />
      
      {/* Skills Marquee Band */}
      <TechMarquee />
      
      {/* Creative Pulse Circle Section */}
      <CreativePulse />

      {/* Honors & Awards — horizontal scroll */}
      <HonorsAwardsScroll />

      {/* Certifications — horizontal scroll */}
      <CertificationsScroll />
      
      {/* Portfolio Section - 3 Projects with View More Button */}
      <Portfolio />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Blog Section - 3 Blog Posts with View More Button */}
      <Blog />
      
      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Globe Section - Working Internationally from Morocco */}
      <GlobeDemo />
    </div>
  )
}
