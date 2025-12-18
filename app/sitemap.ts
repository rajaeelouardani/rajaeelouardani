import { MetadataRoute } from 'next'
import { projects } from '@/lib/projectsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajaeelouardani.com'
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/contact',
    '/services',
    '/skills',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
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

