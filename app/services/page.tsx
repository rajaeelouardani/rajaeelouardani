import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <Services />
      <Pricing />
      <Testimonials />
    </div>
  )
}
