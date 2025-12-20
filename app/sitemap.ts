import { MetadataRoute } from 'next'
import { projects } from '@/lib/projectsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com'
  
  // Static routes with optimized priorities
  const routes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog routes (if you have blog posts)
  const blogRoutes = [
    // Add your blog post IDs here
    '/blog/1',
    '/blog/2',
    '/blog/3',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
}

