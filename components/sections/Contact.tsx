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
                className="glass-card p-6 rounded-lg"
              >
                <div className="text-primary-500 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2" dir={dir}>{item.title}</h3>
                <p className="text-primary-400" dir={dir}>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
          >
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200" dir={dir}>
              {t.contact.title}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300" dir={dir}>
              {t.contact.description || "Get in touch with me. I'm always open to discussing new projects and opportunities."}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="firstname">{t.contact.firstName}</Label>
                  <Input
                    id="firstname"
                    name="firstName"
                    placeholder={t.contact.firstName}
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    dir={dir}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">{t.contact.lastName}</Label>
                  <Input
                    id="lastname"
                    name="lastName"
                    placeholder={t.contact.lastName}
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    dir={dir}
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">{t.contact.yourEmail}</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={t.contact.yourEmail}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  dir={dir}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone">{t.contact.yourPhone}</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder={t.contact.yourPhone}
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  dir={dir}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="service">{t.contact.chooseService}</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  dir={dir}
                  className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-primary-500 shadow-[0px_0px_1px_1px_#e5e7eb] dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  <option value="" className="bg-gray-900">{t.contact.chooseService}</option>
                  <option value="design" className="bg-gray-900">Design</option>
                  <option value="development" className="bg-gray-900">Development</option>
                  <option value="marketing" className="bg-gray-900">Marketing</option>
                  <option value="security" className="bg-gray-900">Security</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">{t.contact.yourMessage}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.yourMessage}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  dir={dir}
                />
              </LabelInputContainer>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400 text-sm" dir={dir}>
                  {submitMessage}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400 text-sm" dir={dir}>
                  {submitMessage}
                </div>
              )}

              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
                dir={dir}
              >
                {isSubmitting ? (t.contact.sending || 'Envoi...') : t.contact.sendMessage} {!isSubmitting && (dir === 'rtl' ? '←' : '→')}
                <BottomGradient />
              </button>
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
