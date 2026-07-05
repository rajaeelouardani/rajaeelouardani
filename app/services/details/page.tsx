'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceDetails = {
  title: 'Graphic Design Service',
  description: 'Our comprehensive graphic design services cover everything from print materials to digital graphics. We create visually compelling designs that clearly and effectively communicate your brand message.',
  features: [
    'Logo Design & Brand Identity',
    'Print Design (Brochures, Flyers, Business Cards)',
    'Digital Graphics & Social Media Assets',
    'Packaging Design',
    'Illustration & Icon Design',
    'Brand Guidelines & Style Guides',
  ],
  process: [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We start by understanding your brand, target audience, and project goals.',
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'We create initial concepts and design directions based on your requirements.',
    },
    {
      step: '03',
      title: 'Design & Refinement',
      description: 'We develop the chosen concept and refine it based on your feedback.',
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'We deliver final files and provide ongoing support for your design needs.',
    },
  ],
}

export default function ServiceDetailsPage() {
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
            href="/services"
            className="text-primary-600 hover:text-primary-700 mb-8 inline-block"
          >
            ← Back to Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {serviceDetails.title}
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            {serviceDetails.description}
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {serviceDetails.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetails.process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="text-primary-600 font-bold text-lg mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

