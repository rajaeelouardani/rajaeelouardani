'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Card3D from '@/components/Card3D'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blogData'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'

const getEducationalResources = (t: any) => [
  {
    name: 'LinkedIn Learning',
    description: t.blog.resources.linkedinLearning,
    url: 'https://www.linkedin.com/learning',
    logo: 'https://cdn.simpleicons.org/linkedin/0077B5',
    free: false,
  },
  {
    name: 'Google Developers',
    description: t.blog.resources.googleDevelopers,
    url: 'https://developers.google.com',
    logo: 'https://cdn.simpleicons.org/google/4285F4',
    free: true,
  },
  {
    name: 'edX',
    description: t.blog.resources.edx,
    url: 'https://www.edx.org',
    logo: 'https://cdn.simpleicons.org/edx/02262B',
    free: true,
  },
  {
    name: 'Meta Training',
    description: t.blog.resources.metaTraining,
    url: 'https://developers.facebook.com',
    logo: 'https://cdn.simpleicons.org/meta/0081FB',
    free: true,
  },
  {
    name: 'freeCodeCamp',
    description: t.blog.resources.freeCodeCamp,
    url: 'https://www.freecodecamp.org',
    logo: 'https://cdn.simpleicons.org/freecodecamp/0A0A23',
    free: true,
  },
  {
    name: 'Coursera',
    description: t.blog.resources.coursera,
    url: 'https://www.coursera.org',
    logo: 'https://cdn.simpleicons.org/coursera/0056D2',
    free: true,
  },
  {
    name: 'Udemy',
    description: t.blog.resources.udemy,
    url: 'https://www.udemy.com',
    logo: 'https://cdn.simpleicons.org/udemy/EC5252',
    free: false,
  },
  {
    name: 'Khan Academy',
    description: t.blog.resources.khanAcademy,
    url: 'https://www.khanacademy.org',
    logo: 'https://cdn.simpleicons.org/khanacademy/14BF96',
    free: true,
  },
  {
    name: 'Codecademy',
    description: t.blog.resources.codecademy,
    url: 'https://www.codecademy.com',
    logo: 'https://cdn.simpleicons.org/codecademy/1F4056',
    free: true,
  },
  {
    name: 'W3Schools',
    description: t.blog.resources.w3schools,
    url: 'https://www.w3schools.com',
    logo: 'https://cdn.simpleicons.org/w3c/005A9C',
    free: true,
  },
  {
    name: 'MDN Web Docs',
    description: t.blog.resources.mdnWebDocs,
    url: 'https://developer.mozilla.org',
    logo: 'https://cdn.simpleicons.org/mdnwebdocs/000000',
    free: true,
  },
  {
    name: 'The Odin Project',
    description: t.blog.resources.theOdinProject,
    url: 'https://www.theodinproject.com',
    logo: 'https://cdn.simpleicons.org/theodinproject/F95602',
    free: true,
  },
  {
    name: 'MIT OpenCourseWare',
    description: t.blog.resources.mitOpenCourseWare,
    url: 'https://ocw.mit.edu',
    logo: 'https://cdn.simpleicons.org/mit/8A8A8A',
    free: true,
  },
  {
    name: 'Harvard CS50',
    description: t.blog.resources.harvardCS50,
    url: 'https://cs50.harvard.edu',
    logo: 'https://cdn.simpleicons.org/harvard/A51C30',
    free: true,
  },
  {
    name: 'SoloLearn',
    description: t.blog.resources.sololearn,
    url: 'https://www.sololearn.com',
    logo: 'https://cdn.simpleicons.org/sololearn/149EF2',
    free: true,
  },
  {
    name: 'Scrimba',
    description: t.blog.resources.scrimba,
    url: 'https://scrimba.com',
    logo: 'https://cdn.simpleicons.org/scrimba/2B283A',
    free: true,
  },
  {
    name: 'Code.org',
    description: t.blog.resources.codeOrg,
    url: 'https://code.org',
    logo: 'https://cdn.simpleicons.org/codeorg/FF6B6B',
    free: true,
  },
  {
    name: 'Stack Overflow',
    description: t.blog.resources.stackOverflow,
    url: 'https://stackoverflow.com',
    logo: 'https://cdn.simpleicons.org/stackoverflow/F58025',
    free: true,
  },
  {
    name: 'GitHub Learning Lab',
    description: t.blog.resources.githubLearningLab,
    url: 'https://lab.github.com',
    logo: 'https://cdn.simpleicons.org/github/181717',
    free: true,
  },
  {
    name: 'JavaScript.info',
    description: t.blog.resources.javascriptInfo,
    url: 'https://javascript.info',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    free: true,
  },
  {
    name: 'React Documentation',
    description: t.blog.resources.reactDocumentation,
    url: 'https://react.dev',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    free: true,
  },
  {
    name: 'Cisco Networking Academy',
    description: t.blog.resources.ciscoNetworkingAcademy,
    url: 'https://www.netacad.com',
    logo: 'https://cdn.simpleicons.org/cisco/1BA0D7',
    free: true,
  },
]

export default function Blog() {
  const { t, dir } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const educationalResources = getEducationalResources(t)

  // Get all unique categories with translations
  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]
    return cats
  }, [])
  
  // Translate category name
  const translateCategory = (category: string) => {
    const categories = t?.blog?.categories;
    if (!categories) return category;
    return (categories as Record<string, string>)[category] || category;
  }

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return blogPosts
    }
    return blogPosts.filter(post => post.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section id="blog" dir={dir} className="py-20 bg-black/60 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm uppercase mb-2" dir={dir}>{t.blog.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <span className="text-white">Technology </span>
            <LayoutTextFlip
              text=""
              words={t.blog.flipWords}
              className="text-4xl md:text-5xl"
            />
            {' '}
            <span className="text-primary-500" dir={dir}>{t.blog.andEducationalResources}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`glass-button px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white border-2 border-primary-500'
                    : 'text-gray-300 hover:text-white'
                }`}
                dir={dir}
              >
                {translateCategory(category)}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm" dir={dir}>
              {filteredPosts.length} {filteredPosts.length === 1 ? (t?.blog?.article || 'article') : (t?.blog?.articles || 'articles')} {selectedCategory !== 'All' ? `${t?.blog?.in || 'dans'} ${translateCategory(selectedCategory)}` : (t?.blog?.total || 'au total')}
            </p>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.slice(0, 3).map((post, index) => (
            <Card3D key={post.id} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group card-3d transform-3d"
              >
                <div className="relative h-48 bg-black overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 backdrop-blur-sm text-primary-500 px-3 py-1 rounded-full text-xs font-semibold border border-primary-500/30" dir={dir}>
                      {translateCategory(post.category)}
                    </span>
                  </div>
                  <div className="absolute inset-0 shine-effect opacity-20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors" dir={dir}>
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm" dir={dir}>
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-gray-500 mb-2" dir={dir}>{t.blog.educationalResourcesLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-500 hover:text-primary-400 transition-colors underline"
                        >
                          {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="block mt-4"
                  >
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="w-full text-left text-white font-semibold hover:text-primary-500 transition-colors flex items-center gap-2 text-sm"
                    >
                      {t.blog.readMore}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>

        {/* View More Button */}
        {filteredPosts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as={Link}
              href="/blog"
              className="bg-black text-white dark:text-white flex items-center space-x-2 px-8 py-4 font-semibold"
            >
              <span>{t.news?.viewMore || t.blog?.viewMore || 'Voir plus d\'articles'}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </HoverBorderGradient>
          </motion.div>
        )}

        {/* Educational Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t.blog.educationalResources}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto" dir={dir}>
              {t.blog.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {educationalResources.map((resource, index) => (
              <Card3D key={resource.name} intensity={5} className="h-full">
                <motion.a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-6 rounded-lg transition-all duration-300 cursor-pointer group block h-full flex flex-col"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src={resource.logo}
                        alt={resource.name}
                        width={48}
                        height={48}
                        className="object-contain brightness-0 invert"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h4 className="text-lg font-bold text-white group-hover:text-primary-500 transition-colors">
                          {resource.name}
                        </h4>
                        {resource.free && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
                            {t.blog.free}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3 flex-1" dir={dir}>
                        {resource.description}
                      </p>
                      <span className="text-xs text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-1 mt-auto">
                        {t.blog.visitPlatform}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

