'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

export default function Contact() {
  const { t, dir } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(t.contact.successMessage || 'Message envoyé avec succès !')
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || t.contact.errorMessage || 'Erreur lors de l\'envoi du message. Veuillez réessayer.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(t.contact.errorMessage || 'Erreur lors de l\'envoi du message. Veuillez réessayer.')
      console.error('Erreur:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t.nav.contact}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" dir={dir}>
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: t.contact.phone,
                value: 'Available on request',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: t.contact.email,
                value: 'Contact via LinkedIn',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: t.contact.address,
                value: 'Meknes, Fès-Meknès, Morocco',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-xl border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <div className="text-primary-500 mb-4 p-3 bg-primary-500/10 rounded-lg w-fit">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2" dir={dir}>{item.title}</h3>
                <p className="text-gray-300 hover:text-primary-400 transition-colors" dir={dir}>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto w-full max-w-md rounded-2xl p-6 md:p-8 border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300 shadow-2xl"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2" dir={dir}>
                {t.contact.title}
              </h2>
              <p className="text-sm text-gray-400" dir={dir}>
                {"Get in touch with me. I'm always open to discussing new projects and opportunities."}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname" className="text-gray-300 mb-2">{t.contact.firstName}</Label>
                  <Input
                    id="firstname"
                    name="firstName"
                    placeholder={t.contact.firstName}
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    dir={dir}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/50 transition-all"
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" className="text-gray-300 mb-2">{t.contact.lastName}</Label>
                  <Input
                    id="lastname"
                    name="lastName"
                    placeholder={t.contact.lastName}
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    dir={dir}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/50 transition-all"
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="email" className="text-gray-300 mb-2">{t.contact.yourEmail}</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={t.contact.yourEmail}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  dir={dir}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/50 transition-all"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="phone" className="text-gray-300 mb-2">{t.contact.yourPhone}</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder={t.contact.yourPhone}
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  dir={dir}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/50 transition-all"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="service" className="text-gray-300 mb-2">{t.contact.chooseService}</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  dir={dir}
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                >
                  <option value="" className="bg-gray-900">{t.contact.chooseService}</option>
                  <option value="design" className="bg-gray-900">Design</option>
                  <option value="development" className="bg-gray-900">Development</option>
                  <option value="marketing" className="bg-gray-900">Marketing</option>
                  <option value="security" className="bg-gray-900">Security</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="message" className="text-gray-300 mb-2">{t.contact.yourMessage}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.yourMessage}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  dir={dir}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/50 transition-all resize-none"
                />
              </LabelInputContainer>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm backdrop-blur-sm" dir={dir}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {submitMessage}
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm backdrop-blur-sm" dir={dir}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {submitMessage}
                  </div>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                type="submit"
                disabled={isSubmitting}
                dir={dir}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.contact.sending || 'Envoi...'}
                    </>
                  ) : (
                    <>
                      {t.contact.sendMessage}
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dir === 'rtl' ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"} />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
