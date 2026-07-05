'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ProjectDomain, getProjectsByDomain, getYouTubeEmbedUrl } from '@/lib/projectsData'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import Card3D from '@/components/Card3D'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import Testimonials from '@/components/sections/Testimonials'
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPaintBrush, 
  FaImages, 
  FaFilm, 
  FaCode, 
  FaImage, 
  FaFileAlt, 
  FaMobileAlt, 
  FaMagic, 
  FaIdCard, 
  FaPalette,
} from 'react-icons/fa'

export default function ProjectsPage() {
  const { t, dir } = useLanguage()
  const [activeDomain, setActiveDomain] = useState<ProjectDomain>('web-development')
  const [selectedVideo, setSelectedVideo] = useState<{ youtubeId: string; title: string } | null>(null)
  const [selectedDesignCategory, setSelectedDesignCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null)

  // Helper function to get translated project description
  const getProjectDescription = (project: any) => {
    const projectId = project.id.toString()
    const projectData = t?.portfolio?.projects?.[projectId as keyof typeof t.portfolio.projects] as any
    return projectData?.description || project.description
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null)
        setSelectedImage(null)
      }
    }
    if (selectedVideo || selectedImage) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedVideo, selectedImage])

  // Reset design category when switching domains
  useEffect(() => {
    if (activeDomain !== 'design-only') {
      setSelectedDesignCategory(null)
    }
  }, [activeDomain])

  // Filter projects by domain
  const filteredProjects = useMemo(() => {
    return getProjectsByDomain(activeDomain)
  }, [activeDomain])

  // Get all photography images for photography view
  const allPhotographyImages = useMemo(() => {
    if (activeDomain !== 'photography') return []
    return filteredProjects.flatMap(project => 
      project.images.map(img => ({ url: img, projectId: project.id }))
    )
  }, [activeDomain, filteredProjects])

  // Get design images grouped by category
  const designImagesByCategory = useMemo(() => {
    if (activeDomain !== 'design-only') return {}
    
    const grouped: { [key: string]: Array<{ url: string; projectId: number }> } = {}
    
    filteredProjects.forEach(project => {
      const category = project.designCategory || 'other'
      if (!grouped[category]) {
        grouped[category] = []
      }
      project.images.forEach(img => {
        grouped[category].push({ url: img, projectId: project.id })
      })
    })
    
    return grouped
  }, [activeDomain, filteredProjects])

  // Get current design images based on selected category
  const currentDesignImages = useMemo(() => {
    if (activeDomain !== 'design-only') return []
    if (!selectedDesignCategory) {
      // Show all images if no category selected
      return Object.values(designImagesByCategory).flat()
    }
    return designImagesByCategory[selectedDesignCategory] || []
  }, [activeDomain, selectedDesignCategory, designImagesByCategory])

  // Design categories
  const designCategories = [
    { value: null, label: t?.portfolio?.designCategories?.all || 'Tous', icon: FaPaintBrush },
    { value: 'bondrole', label: t?.portfolio?.designCategories?.bondrole || 'Bâches', icon: FaImage },
    { value: 'flayer', label: t?.portfolio?.designCategories?.flayer || 'Flyers A4', icon: FaFileAlt },
    { value: 'post', label: t?.portfolio?.designCategories?.post || 'Posts Instagram', icon: FaMobileAlt },
    { value: 'logo', label: t?.portfolio?.designCategories?.logo || 'Logos', icon: FaMagic },
    { value: 'CARTE', label: t?.portfolio?.designCategories?.CARTE || 'Carte', icon: FaIdCard },
    { value: 'ui ux', label: t?.portfolio?.designCategories?.['ui ux'] || 'UI/UX', icon: FaPalette }
  ]

  // Domain tabs configuration
  const domains: Array<{ value: ProjectDomain; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { value: 'web-development', label: t?.portfolio?.domains?.web || 'Développement Web', icon: FaCode },
    { value: 'design-only', label: t?.portfolio?.domains?.design || 'Design', icon: FaPaintBrush },
    { value: 'photography', label: t?.portfolio?.domains?.photography || 'Photographie', icon: FaImages },
    { value: 'videography', label: t?.portfolio?.domains?.videography || 'Vidéo & Montage', icon: FaFilm },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Domain filter — same pill style as main navbar */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-6xl bg-black/95 backdrop-blur-md shadow-lg shadow-primary-500/50 rounded-2xl">
        <nav className="px-3 py-2.5">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {domains.map((domain) => {
              const isActive = activeDomain === domain.value
              return (
                <motion.button
                  key={domain.value}
                  type="button"
                  onClick={() => setActiveDomain(domain.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative font-medium text-sm transition-colors flex items-center gap-1.5 px-1 py-1 ${
                    isActive ? 'text-primary-500' : 'text-white hover:text-primary-500'
                  }`}
                  dir={dir}
                >
                  <domain.icon className="w-4 h-4 shrink-0" />
                  <span>{domain.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="projects-domain-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </nav>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center flex items-center justify-center gap-2" dir={dir}>
            <span className="text-white inline-block">{t?.portfolio?.my || 'Mes'}</span>
            <LayoutTextFlip
              text=""
              words={t?.portfolio?.flipWords || ["Projets", "Portfolio", "Travaux", "Créations"]}
              className="text-4xl md:text-5xl inline-block"
            />
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4" dir={dir}>
            {t.portfolio.subtitle}
          </p>
          {activeDomain === 'videography' && (
            <p className="text-gray-400 text-sm max-w-3xl mx-auto" dir={dir}>
              {t.portfolio.videographyDescription}
            </p>
          )}
        </motion.div>

        {/* Photography: Simple image grid */}
        {activeDomain === 'photography' ? (
          <>
            {/* Photography images grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key="photography-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {allPhotographyImages.map((image, index) => (
                  <motion.div
                    key={`${image.projectId}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-900"
                    onClick={() => setSelectedImage({ url: image.url, index })}
                  >
                    <Image
                      src={image.url}
                      alt={`Photography ${index + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                      quality={80}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state for photography */}
            {allPhotographyImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg" dir={dir}>
                  {t?.portfolio?.emptyStates?.noPhotos || 'Aucune photo dans cette catégorie pour le moment.'}
                </p>
              </div>
            )}
          </>
        ) : activeDomain === 'design-only' ? (
          <>
            {/* Category filter for design */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {designCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <motion.button
                    key={category.value || 'all'}
                    onClick={() => setSelectedDesignCategory(category.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedDesignCategory === category.value
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    dir={dir}
                  >
                    <IconComponent className="text-lg" />
                    <span>{category.label}</span>
                  </motion.button>
                )
              })}
            </div>

            {/* Design images grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDesignCategory || 'all'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {currentDesignImages.map((image, index) => {
                  // Check if this is the Mcovery logo (need white background)
                  const isMcoveryLogo = image.url.includes('mcovery.webp')
                  
                  return (
                    <motion.div
                      key={`${image.projectId}-${index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      className={`relative aspect-square overflow-hidden rounded-lg group cursor-pointer ${isMcoveryLogo ? 'bg-white p-4' : ''}`}
                      onClick={() => setSelectedImage({ url: image.url, index })}
                    >
                      <Image
                        src={image.url}
                        alt={`Design ${index + 1}`}
                        fill
                        className={`${isMcoveryLogo ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-300`}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        loading="lazy"
                        quality={80}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/placeholder.jpg'
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* Empty state for design category */}
            {currentDesignImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg" dir={dir}>
                  {t?.portfolio?.emptyStates?.noImages || 'Aucune image dans cette catégorie pour le moment.'}
                </p>
              </div>
            )}
          </>
        ) : (
          /* Projects with cards */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const isVideoProject = project.domain === 'videography' && project.videos && project.videos.length > 0
                const video = isVideoProject && project.videos ? project.videos[0] : null
                const isLogoThumb = [4, 10, 11, 16].includes(project.id)
                const isPhotoProject = project.domain === 'photography'
                const thumbBg = isLogoThumb ? 'bg-white' : isPhotoProject ? 'bg-gray-900' : ''
                const thumbFit = isLogoThumb || isPhotoProject ? 'object-contain p-2' : 'object-cover'
                
                return (
                  <Card3D key={project.id} intensity={10}>
                    {isVideoProject ? (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card rounded-lg overflow-hidden cursor-pointer group h-full flex flex-col"
                        onClick={() => {
                          if (video?.youtubeId) {
                            setSelectedVideo({
                              youtubeId: video.youtubeId,
                              title: video.title || project.title
                            })
                          }
                        }}
                      >
                        <div className={`relative h-64 overflow-hidden ${project.id === 10 || project.id === 11 || project.id === 16 ? 'bg-white' : ''}`}>
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className={`${project.id === 10 || project.id === 11 || project.id === 16 ? 'object-contain p-4' : 'object-cover'} group-hover:scale-110 transition-transform duration-300`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            quality={80}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/placeholder.jpg'
                            }}
                          />
                          <div className={`absolute inset-0 ${project.id === 10 || project.id === 11 || project.id === 16 ? 'bg-transparent' : 'bg-black/60'} group-hover:${project.id === 10 || project.id === 11 || project.id === 16 ? 'bg-transparent' : 'bg-black/40'} transition-colors`} />
                          {/* Cercle play au hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-primary-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <span>▶</span>
                              <span>{t?.portfolio?.youtube || 'YouTube'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 flex-1" dir={dir}>{getProjectDescription(project)}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{project.period}</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <Link href={`/projects/${project.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="glass-card rounded-lg overflow-hidden cursor-pointer group h-full flex flex-col"
                        >
                          <div className={`relative h-64 overflow-hidden ${thumbBg}`}>
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              fill
                              className={`${thumbFit} group-hover:scale-110 transition-transform duration-300`}
                              unoptimized={project.thumbnail.endsWith('.jfif') || project.thumbnail.endsWith('.JFIF')}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              quality={80}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = '/placeholder.jpg'
                              }}
                            />
                            <div className={`absolute inset-0 ${isLogoThumb || isPhotoProject ? 'bg-transparent' : 'bg-black/60'} group-hover:${isLogoThumb || isPhotoProject ? 'bg-transparent' : 'bg-black/40'} transition-colors`} />
                            <div className="absolute bottom-4 left-4">
                              <span className="bg-primary-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                {project.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 flex-1" dir={dir}>{getProjectDescription(project)}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{project.period}</span>
                              <span className="text-primary-500 text-sm font-semibold">
                                {t.portfolio.viewDetails}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    )}
                  </Card3D>
                )
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Empty State - Only for non-design domains */}
        {activeDomain !== 'design-only' && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg" dir={dir}>
              {t?.portfolio?.emptyStates?.noProjects || 'Aucun projet dans cette catégorie pour le moment.'}
            </p>
          </div>
        )}
      </div>

      {/* Modal Popup pour la vidéo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold" dir={dir}>{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Player vidéo */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`${getYouTubeEmbedUrl(selectedVideo.youtubeId)}?autoplay=1`}
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Popup pour les images de design */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image */}
              <div className={`relative w-full h-full flex items-center justify-center min-h-[400px] ${selectedImage.url.includes('mcovery.webp') ? 'bg-white p-8' : 'bg-transparent'}`}>
                <div className="relative w-full h-full max-h-[90vh] min-h-[400px]">
                  <Image
                    src={selectedImage.url}
                    alt={`Image ${selectedImage.index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    quality={75}
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Image non disponible</div>'
                      }
                    }}
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              {(() => {
                const imageList = activeDomain === 'design-only' ? currentDesignImages : activeDomain === 'photography' ? allPhotographyImages : []
                const hasMultipleImages = imageList.length > 1
                
                if (!hasMultipleImages) return null
                
                const currentIndex = imageList.findIndex(img => img.url === selectedImage.url)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1
                const nextIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0
                
                return (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage({ url: imageList[prevIndex].url, index: prevIndex })
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 transition-colors shadow-lg"
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage({ url: imageList[nextIndex].url, index: nextIndex })
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-3 transition-colors shadow-lg"
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </button>
                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                      {currentIndex + 1} / {imageList.length}
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Testimonials />
    </div>
  )
}
