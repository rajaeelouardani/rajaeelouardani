'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { HorizontalScrollMarquee } from '@/components/ui/horizontal-scroll-marquee'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { getCertificationsList, getCertOrgLogo } from '@/components/sections/Certifications'

export default function CertificationsScroll() {
  const { t, dir } = useLanguage()
  const certifications = getCertificationsList(t)

  const cards = certifications.map((cert) => (
    <div
      key={cert.id}
      className="w-[380px] min-h-[180px] bg-gray-900/90 border border-gray-700/80 rounded-2xl p-5 flex flex-col gap-4 hover:border-green-500/40 transition-colors group"
    >
      <div className="w-20 h-20 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center p-2 mx-auto">
        <Image
          src={getCertOrgLogo(cert.issuerOriginal || cert.issuer)}
          alt={cert.issuer}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center flex-1">
        <h3 className="text-base font-bold text-white line-clamp-2 group-hover:text-green-400 transition-colors mb-2 leading-snug">
          {cert.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-1">{cert.issuer}</p>
        <p className={`text-sm mt-2 font-semibold ${cert.color}`}>{cert.date}</p>
        {cert.credentialId && (
          <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
        )}
      </div>
    </div>
  ))

  return (
    <section dir={dir} className="py-16 bg-black relative overflow-hidden z-10 border-b border-gray-800/50">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>
            {t?.certifications?.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-tech text-center" dir={dir}>
            <span className="text-white">
              {(t?.certifications?.title || 'Certificats').substring(
                0,
                Math.ceil((t?.certifications?.title || 'Certificats').length / 2)
              )}
            </span>
            <span className="text-primary-500">
              {(t?.certifications?.title || 'Certificats').substring(
                Math.ceil((t?.certifications?.title || 'Certificats').length / 2)
              )}
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.certifications?.subtitle}
          </p>
        </motion.div>
      </div>

      <HorizontalScrollMarquee duration={95} reverse gap={8}>
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
          href="/about#certifications"
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
