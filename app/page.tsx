import Hero from '@/components/sections/Hero'
import TechMarquee from '@/components/TechMarquee'
import CreativePulse from '@/components/sections/CreativePulse'
import Portfolio from '@/components/sections/Portfolio'
import Blog from '@/components/sections/Blog'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Introduction */}
      <Hero />
      
      {/* Skills Marquee Band */}
      <TechMarquee />
      
      {/* Creative Pulse Circle Section */}
      <CreativePulse />
      
      {/* Portfolio Section - 3 Projects with View More Button */}
      <Portfolio />
      
      {/* Blog Section - 3 Blog Posts with View More Button */}
      <Blog />
    </div>
  )
}
