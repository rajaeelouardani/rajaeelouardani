'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, dir } = useLanguage()
  return (
    <>
      {/* Animated Lightings Effect */}
      <article id="wrap">
        <article id="lightings">
          <section id="one">
            <section id="two">
              <section id="three">
                <section id="four">
                  <section id="five"></section>
                </section>
              </section>
            </section>
          </section>
        </article>
      </article>
      
      <footer dir={dir} className="relative bg-black/80 border-t border-gray-900 text-white py-12 z-10 shadow-lg shadow-primary-500/50">
        <div className="container mx-auto px-4">
          <div className="bg-black/60 rounded-2xl p-8 shadow-lg shadow-primary-500/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/svg mon logo favicon.png"
                  alt="Rajae Elouardani Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
                <h3 className="text-2xl font-bold text-white" dir={dir}>{t.footer.fullName || t.nav.fullName || 'RAJAE ELOUARDANI'}</h3>
              </div>
              <p className="text-gray-400 mb-4" dir={dir}>{t.hero.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4" dir={dir}>
                {t.footer.description}
              </p>
              <a
                href="https://10000codeurs.com/rajae-elouardani/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-green-500/20 border border-primary-500/50 rounded-lg text-sm font-semibold text-white hover:from-primary-500/30 hover:to-green-500/30 hover:border-primary-500 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>10000 Codeurs Profile</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.nav.home}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-primary-500 transition-colors">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-500 transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-500 transition-colors">
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-primary-500 transition-colors">
                    {t.nav.projects}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.nav.blog}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-primary-500 transition-colors">
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary-500 transition-colors">
                    {t.pricing.title}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-500 transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t.footer.followUs}</h4>
              <div className="flex flex-col space-y-3">
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/p/Rajae-Elouardani-100036596478135/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rajae-elouardani-577892225/?originalSubdomain=ma" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/rajaeelouardani" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/rajaeelouardani" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/rajaeelouardani/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <div className="mt-2">
                  <a 
                    href="mailto:elouardanirajae@gmail.com" 
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm flex items-center gap-2"
                    aria-label="Contact email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="sr-only">Email: </span>
                    <span aria-hidden="true">Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 All rights reserved. Designed by{' '}
                <a 
                  href="https://www.linkedin.com/in/rajae-elouardani-577892225/?originalSubdomain=ma" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-400 transition-colors font-semibold"
                  style={{ textShadow: '0 0 10px currentColor' }}
                >
                  {t.footer.copyrightName || t.nav.fullName || 'Rajae Elouardani'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
