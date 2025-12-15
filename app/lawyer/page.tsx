import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Experience from '@/components/sections/Experience'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function LawyerPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  )
}

