'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projectDetails = {
  title: 'Innovative Design Showcase',
  category: 'Logo Usability',
  description: 'Projects Overview A we reflect on this achievement Overview we reflect. This project showcases innovative design solutions that combine aesthetics with functionality.',
  fullDescription: 'This comprehensive design project involved creating a complete brand identity system that works across multiple platforms. We focused on creating a logo that is not only visually appealing but also highly functional and adaptable to various contexts.',
  technologies: ['Figma', 'Adobe Illustrator', 'React', 'Next.js'],
  challenges: [
    'Creating a logo that works at multiple sizes',
    'Ensuring brand consistency across platforms',
    'Balancing modern aesthetics with timeless design',
  ],
  solutions: [
    'Developed a scalable logo system with multiple variations',
    'Created comprehensive brand guidelines',
    'Implemented responsive design principles',
  ],
}

export default function ProjectDetailsPage() {
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
            href="/projects"
            className="text-primary-600 hover:text-primary-700 mb-8 inline-block"
          >
            ← Back to Projects
          </Link>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="h-96 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <div className="text-8xl">🎨</div>
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {projectDetails.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {projectDetails.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {projectDetails.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {projectDetails.fullDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {projectDetails.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Client:</span> Innovative Company</p>
                <p><span className="font-semibold">Year:</span> 2024</p>
                <p><span className="font-semibold">Duration:</span> 3 Months</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
              <ul className="space-y-2">
                {projectDetails.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-primary-600 mr-2">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-2">
                {projectDetails.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block mr-4"
            >
              View All Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

