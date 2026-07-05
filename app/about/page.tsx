import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import HonorsAwards from '@/components/sections/HonorsAwards'
import Volunteering from '@/components/sections/Volunteering'
import Languages from '@/components/sections/Languages'
import GitHubStats from '@/components/sections/GitHubStats'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Experience />
      <Certifications />
      <HonorsAwards />
      <Volunteering />
      <Languages />
      <GitHubStats />
    </div>
  )
}
