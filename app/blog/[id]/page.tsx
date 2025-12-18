'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card3D from '@/components/Card3D'
import { getBlogPostById } from '@/lib/blogData'
import { getBlogDetailTranslations } from '@/lib/blogDetailsTranslations'
import type { BlogDetailTranslations } from '@/lib/blogDetailsTranslations/types'

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, dir, locale } = useLanguage()
  const blogId = parseInt(params?.id as string)
  const post = getBlogPostById(blogId)
  const [details, setDetails] = useState<BlogDetailTranslations | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true)
      try {
        console.log(`Loading translations for blog ${blogId} with locale ${locale}`)
        const translations = await getBlogDetailTranslations(blogId, locale as 'fr' | 'ar' | 'en')
        console.log(`Loaded translations:`, translations)
        setDetails(translations)
      } catch (error) {
        console.error('Error loading translations:', error)
      } finally {
        setLoading(false)
      }
    }
    
    if (post) {
      loadTranslations()
    }
  }, [blogId, locale, post])

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article de Blog Introuvable</h1>
          <button
            onClick={() => router.push('/blog')}
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Retour au Blog
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Chargement du contenu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black/60 pt-20 relative z-10">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/blog')}
          className="mb-8 text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au Blog
        </motion.button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary-500/20 text-white px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>
            <p className="text-xl text-white mb-6" dir={dir}>{post.description}</p>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-lg mb-12 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 shine-effect opacity-20"></div>
          </div>

          {/* Domain Explanation */}
          {details?.domainExplanation && (
            <Card3D intensity={5}>
              <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">Explication du Domaine</h2>
                <p className="text-gray-300 leading-relaxed text-lg" dir={dir}>
                  {details.domainExplanation}
                </p>
              </div>
            </Card3D>
          )}

          {/* How to Start */}
          {details?.howToStart && (
            <Card3D intensity={5}>
              <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {locale === 'fr' ? 'Comment Commencer' : locale === 'ar' ? 'كيف تبدأ' : 'How to Start'}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg" dir={dir}>
                  {details.howToStart}
                </p>
              </div>
            </Card3D>
          )}

          {/* Essential Elements */}
          {details?.essentialElements && details.essentialElements.length > 0 && (
            <Card3D intensity={5}>
              <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {locale === 'fr' ? 'Éléments Essentiels' : locale === 'ar' ? 'العناصر الأساسية' : 'Essential Elements'}
                </h2>
                <ul className="space-y-4">
                  {details.essentialElements.map((element, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-500 font-bold text-xl mt-1">•</span>
                      <span className="text-gray-300 leading-relaxed flex-1" dir={dir}>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          )}

          {/* Prerequisites */}
          {details?.prerequisites && details.prerequisites.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'fr' ? 'Prérequis' : locale === 'ar' ? 'المتطلبات المسبقة' : 'Prerequisites'}
              </h3>
              <ul className="space-y-2">
                {details.prerequisites.map((req, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-primary-500">✓</span>
                    <span dir={dir}>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools */}
          {details?.tools && details.tools.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'fr' ? 'Outils Nécessaires' : locale === 'ar' ? 'الأدوات اللازمة' : 'Required Tools'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {details.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Full Content */}
          {details?.fullContent && (
            <Card3D intensity={5}>
              <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {locale === 'fr' ? 'Contenu Complet' : locale === 'ar' ? 'المحتوى الكامل' : 'Full Content'}
                </h2>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: details.fullContent }}
                  dir={dir}
                />
              </div>
            </Card3D>
          )}

          {/* Next Steps */}
          {details?.nextSteps && details.nextSteps.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-8 mb-8 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'fr' ? 'Prochaines Étapes' : locale === 'ar' ? 'الخطوات التالية' : 'Next Steps'}
              </h3>
              <ol className="space-y-3 list-decimal list-inside">
                {details.nextSteps.map((step, idx) => (
                  <li key={idx} className="text-gray-300 leading-relaxed" dir={dir}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-primary-500/20 text-white px-3 py-1 rounded-full text-sm border border-primary-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Educational Resources */}
          <Card3D intensity={5}>
            <div className="bg-gray-900 rounded-lg p-8 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">{t.blog.educationalResources}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.resources.map((resource, idx) => (
                  <motion.a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all group"
                  >
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-white group-hover:text-primary-500 transition-colors font-semibold">
                      {resource.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Card3D>
        </motion.article>
      </div>
    </div>
  )
}
