'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BackButton from '@/components/ui/back-button'
import { useLanguage } from '@/contexts/LanguageContext'
import { getHonorBySlug, RIDUGE_GALLERY } from '@/lib/honorsData'

const ridugeContent = {
  fr: {
    back: 'Retour',
    photosTitle: 'Galerie photo',
    associated: 'Associé à',
    external: 'Voir le dossier RIDUGE',
  },
  en: {
    back: 'Back',
    photosTitle: 'Photo gallery',
    associated: 'Associated with',
    external: 'View RIDUGE dossier',
  },
  ar: {
    back: 'رجوع',
    photosTitle: 'معرض الصور',
    associated: 'مرتبط بـ',
    external: 'عرض ملف RIDUGE',
  },
}

export default function HonorDetailPage() {
  const params = useParams()
  const { t, dir, locale } = useLanguage()
  const slug = params?.slug as string
  const honor = getHonorBySlug(slug)
  const labels = ridugeContent[locale as keyof typeof ridugeContent] || ridugeContent.fr

  const awardTranslation = t?.honors?.list?.find((item: { id: number }) => item.id === honor?.id)

  if (!honor || !awardTranslation) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4" dir={dir}>Récompense introuvable</h1>
          <BackButton fallbackHref="/" className="text-primary-500 hover:underline">
            {labels.back}
          </BackButton>
        </div>
      </div>
    )
  }

  const gallery = honor.gallery.length > 0 ? honor.gallery : RIDUGE_GALLERY

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <BackButton
            fallbackHref="/"
            className="text-primary-500 hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {labels.back}
          </BackButton>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-xl p-2 border border-gray-700">
              <Image src={honor.logo} alt={awardTranslation.issuer} width={72} height={72} className="w-full h-full object-contain" unoptimized />
            </div>
            <div>
              <span className="text-gray-400 text-sm">{awardTranslation.date}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mt-1" dir={dir}>{awardTranslation.title}</h1>
              <p className="text-primary-500 font-semibold mt-2" dir={dir}>{awardTranslation.issuer}</p>
            </div>
          </div>

          <div className="relative w-full min-h-[16rem] md:min-h-[24rem] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 mb-8">
            <Image src={honor.coverImage} alt={awardTranslation.title} fill className="object-contain p-2" unoptimized priority />
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-6" dir={dir}>
            {awardTranslation.description}
          </p>

          <p className="text-sm text-gray-500" dir={dir}>
            {labels.associated} {awardTranslation.associated}
          </p>

          {honor.link && (
            <a
              href={honor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary-500 hover:underline text-sm font-semibold"
            >
              {labels.external} →
            </a>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" dir={dir}>{labels.photosTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={image} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 bg-gray-900">
                <Image
                  src={image}
                  alt={`${awardTranslation.title} - ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
