import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Skills from '@/components/sections/Skills'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function PhotographerPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}

