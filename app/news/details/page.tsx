'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const newsDetails = {
  title: 'Why Good Design is More Than Just Aesthetics',
  date: 'December 12, 2025',
  author: 'Rajae Elouardani',
  category: 'Design',
  content: `
    <p className="mb-4">Design is often misunderstood as merely making things look pretty. However, good design goes far beyond aesthetics—it's about solving problems, enhancing user experience, and creating meaningful connections.</p>
    
    <p className="mb-4">When we think about design, we should consider functionality, usability, and the emotional impact it has on users. A beautiful design that doesn't serve its purpose is ultimately a failure, while a functional design that also delights users is a true success.</p>
    
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Role of User Experience</h2>
    <p className="mb-4">User experience (UX) design focuses on how users interact with products and services. It involves understanding user needs, behaviors, and motivations to create intuitive and enjoyable experiences.</p>
    
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Design Thinking Process</h2>
    <p className="mb-4">The design thinking process involves empathy, definition, ideation, prototyping, and testing. This human-centered approach ensures that designs truly meet user needs.</p>
    
    <p className="mb-4">In conclusion, good design is a balance of aesthetics, functionality, and user-centered thinking. It's about creating solutions that not only look great but also work seamlessly and provide value to users.</p>
  `,
}

export default function NewsDetailsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700 mb-8 inline-block"
          >
            ← Back to News
          </Link>

          <article className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="mb-6">
              <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                {newsDetails.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {newsDetails.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>{newsDetails.date}</span>
              <span className="mx-2">•</span>
              <span>By {newsDetails.author}</span>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-8xl">📰</div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: newsDetails.content }}
            />
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Read More Articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

