import Experience from '@/components/sections/Experience'
import Volunteering from '@/components/sections/Volunteering'
import Languages from '@/components/sections/Languages'
import GitHubStats from '@/components/sections/GitHubStats'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Experience />
      <Volunteering />
      <Languages />
      <GitHubStats />
    </div>
  )
}
