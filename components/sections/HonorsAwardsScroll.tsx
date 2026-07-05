'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { HorizontalScrollMarquee } from '@/components/ui/horizontal-scroll-marquee'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { getHonorsAwardsList, getHonorOrgLogo } from '@/components/sections/HonorsAwards'

export default function HonorsAwardsScroll() {
  const { t, dir } = useLanguage()
  const honors = getHonorsAwardsList(t)

  const cards = honors.map((award) => {
    const logo = getHonorOrgLogo(award.issuerOriginal || award.issuer)
    const card = (
      <div className="w-[440px] min-h-[140px] bg-gray-900/90 border border-gray-700/80 rounded-2xl p-5 flex gap-5 hover:border-primary-500/40 transition-colors group">
        <div className="flex-shrink-0 w-28 h-28 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center overflow-hidden">
          {award.image ? (
            <Image
              src={award.image}
              alt={award.title}
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          ) : (
            <Image
              src={logo}
              alt={award.issuer}
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
          )}
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-2xl">{award.icon}</span>
            <h3 className="text-base font-bold text-white line-clamp-2 group-hover:text-primary-400 transition-colors leading-snug">
              {award.title}
            </h3>
          </div>
          <p className="text-sm text-gray-400 line-clamp-1">{award.issuer}</p>
          <p className="text-sm text-green-400 mt-2 font-semibold">{award.date}</p>
        </div>
      </div>
    )

    if (award.slug) {
      return (
        <Link key={award.id} href={`/honors/${award.slug}`} className="block h-full">
          {card}
        </Link>
      )
    }

    return <div key={award.id}>{card}</div>
  })

  return (
    <section dir={dir} className="py-16 bg-black/80 relative overflow-hidden z-10 border-b border-gray-800/50">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>
            {t?.honors?.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-tech text-center" dir={dir}>
            <span className="text-white">
              {(t?.honors?.title || 'Honors & Awards').substring(
                0,
                Math.ceil((t?.honors?.title || 'Honors & Awards').length / 2)
              )}
            </span>
            <span className="text-primary-500">
              {(t?.honors?.title || 'Honors & Awards').substring(
                Math.ceil((t?.honors?.title || 'Honors & Awards').length / 2)
              )}
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.honors?.subtitle}
          </p>
        </motion.div>
      </div>

      <HorizontalScrollMarquee duration={90} gap={8}>
        {cards}
      </HorizontalScrollMarquee>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-10"
      >
        <HoverBorderGradient
          containerClassName="rounded-lg"
          as={Link}
          href="/about#honors-awards"
          className="bg-black text-white flex items-center space-x-2 px-8 py-4 font-semibold"
        >
          <span>{t?.portfolio?.viewMore || 'Voir Plus'}</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </HoverBorderGradient>
      </motion.div>
    </section>
  )
}
