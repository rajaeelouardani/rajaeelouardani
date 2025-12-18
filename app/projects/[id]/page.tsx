'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { getProjectById, getYouTubeEmbedUrl } from '@/lib/projectsData'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, dir } = useLanguage()
  
  const projectId = parseInt(params?.id as string)
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4" dir={dir}>Projet non trouvé</h1>
          <Link href="/projects" className="text-primary-500 hover:underline">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/projects" className="text-primary-500 hover:underline flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
            {t.portfolio.viewMore || 'Retour aux projets'}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="bg-primary-500/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span className="text-gray-400 text-sm">{project.period}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" dir={dir}>
            {project.title}
          </h1>
          {(() => {
            const projectId = project.id.toString();
            const projectData = t?.portfolio?.projects?.[projectId as "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16"];
            
            return (
              <>
                <p className="text-white text-lg max-w-3xl mb-6" dir={dir}>
                  {projectData?.fullDescription || project.fullDescription || project.description}
                </p>
                
                {/* Project Overview Section for Ghilla and TBH */}
                {projectData && (
                  <div className="mt-8 space-y-8">
                    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                      <h2 className="text-2xl font-bold text-white mb-4" dir={dir}>
                        {projectData.overview}
                      </h2>
                      <p className="text-white leading-relaxed" dir={dir}>
                        {projectData.overviewContent}
                      </p>
                    </div>

                    {'objectives' in projectData && projectData.objectives && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.objectives}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.objectivesList?.map((obj: string, idx: number) => (
                            <li key={idx}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {'achievements' in projectData && projectData.achievements && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.achievements}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.achievementsList?.map((achievement: string, idx: number) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                      <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                        {projectData.website}
                      </h3>
                      <p className="text-white mb-2" dir={dir}>
                        {projectData.liveWebsite}
                      </p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 underline block mb-4"
                      >
                        {project.link}
                      </a>
                      {projectData.eLearningWebsite && (
                        <>
                          <p className="text-white mb-2" dir={dir}>
                            {projectData.eLearningWebsite}
                          </p>
                          <a 
                            href="https://fhemtech.ivrclubfs.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 underline block"
                          >
                            https://fhemtech.ivrclubfs.com/
                          </a>
                        </>
                      )}
                    </div>

                    {projectData.keyFeatures && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.keyFeatures}
                        </h3>
                        {projectData.featuresList && projectData.featuresList.length > 0 ? (
                          <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                            {projectData.featuresList.map((feature: string, idx: number) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        ) : (
                          <>
                            {projectData.featuresStudents && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresStudents}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresStudentsList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresTeachers && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresTeachers}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresTeachersList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresAdmin && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresAdmin}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresAdminList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresDashboard && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresDashboard}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresDashboardList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresProjects && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresProjects}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresProjectsList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresResources && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresResources}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresResourcesList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresSites && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresSites}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresSitesList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {projectData.featuresFinancial && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-2" dir={dir}>
                                  {projectData.featuresFinancial}
                                </h4>
                                <ul className="list-disc list-inside space-y-2 text-white ml-4" dir={dir}>
                                  {projectData.featuresFinancialList?.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {projectData.period && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.period}
                        </h3>
                        <p className="text-white whitespace-pre-line" dir={dir}>
                          {projectData.periodContent}
                        </p>
                      </div>
                    )}

                    {projectData.location && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.location}
                        </h3>
                        <p className="text-white" dir={dir}>
                          {projectData.locationContent}
                        </p>
                      </div>
                    )}

                    {projectData.sector && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.sector}
                        </h3>
                        <p className="text-white" dir={dir}>
                          {projectData.sectorContent}
                        </p>
                      </div>
                    )}

                    {projectData.myRole && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.myRole}
                        </h3>
                        {projectData.myRoleList && projectData.myRoleList.length > 0 ? (
                          <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                            {projectData.myRoleList.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white leading-relaxed" dir={dir}>
                            {projectData.myRoleContent}
                          </p>
                        )}
                      </div>
                    )}

                    {projectData.problematic && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.problematic}
                        </h3>
                        <p className="text-white leading-relaxed" dir={dir}>
                          {projectData.problematicContent}
                        </p>
                      </div>
                    )}

                    {projectData.ourApproach && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.ourApproach}
                        </h3>
                        <p className="text-white leading-relaxed" dir={dir}>
                          {projectData.ourApproachContent}
                        </p>
                      </div>
                    )}

                    {projectData.status && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.status}
                        </h3>
                        {projectData.statusList && projectData.statusList.length > 0 ? (
                          <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                            {projectData.statusList.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white whitespace-pre-line" dir={dir}>
                            {projectData.statusContent}
                          </p>
                        )}
                      </div>
                    )}

                    {projectData.solution && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.solution}
                        </h3>
                        <p className="text-white leading-relaxed" dir={dir}>
                          {projectData.solutionContent}
                        </p>
                      </div>
                    )}

                    {projectData.vision && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.vision}
                        </h3>
                        <p className="text-white leading-relaxed" dir={dir}>
                          {projectData.visionContent}
                        </p>
                      </div>
                    )}

                    {projectData.positioning && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.positioning}
                        </h3>
                        <p className="text-white leading-relaxed italic" dir={dir}>
                          {projectData.positioningContent}
                        </p>
                      </div>
                    )}

                    {'competitions' in projectData && projectData.competitions && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.competitions}
                        </h3>
                        <p className="text-white mb-4" dir={dir}>
                          {projectData.competitionsContent}
                        </p>
                        {projectData.competitionsList && projectData.competitionsList.length > 0 && (
                          <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                            {projectData.competitionsList.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {'competencies' in projectData && projectData.competencies && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.competencies}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.competenciesList?.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {projectData.communicationContent && projectData.communicationList && projectData.communicationList.length > 0 && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.communication}
                        </h3>
                        <p className="text-white mb-4" dir={dir}>
                          {projectData.communicationContent}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.communicationList?.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {projectData.technologies && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.technologies}
                        </h3>
                        {projectData.technologiesList && projectData.technologiesList.length > 0 ? (
                          <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                            {projectData.technologiesList.map((tech: string, idx: number) => (
                              <li key={idx}>{tech}</li>
                            ))}
                          </ul>
                        ) : (
              <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                        )}
                      </div>
                    )}

                    {'targetAudience' in projectData && projectData.targetAudience && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.targetAudience}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.targetAudienceList?.map((audience: string, idx: number) => (
                            <li key={idx}>{audience}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {'impact' in projectData && projectData.impact && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.impact}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white" dir={dir}>
                          {projectData.impactList?.map((impact: string, idx: number) => (
                            <li key={idx}>{impact}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {projectData.supervisor && (
                      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                          {projectData.supervisor}
                        </h3>
                        <p className="text-white" dir={dir}>
                          {projectData.supervisorContent}
                        </p>
                      </div>
                    )}

                    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                      <h3 className="text-xl font-bold text-white mb-4" dir={dir}>
                        {projectData.conclusion}
                      </h3>
                      <p className="text-white leading-relaxed" dir={dir}>
                        {projectData.conclusionContent}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </motion.div>
        
        {/* Vidéos YouTube (si disponibles) - Lecture directe avec interface complète */}
        {project.videos && project.videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            {project.videos.map((video, index) => (
              <div key={index} className="mb-8">
                {/* Header avec titre */}
                <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">R</span>
                    </div>
                    <h3 className="text-white font-semibold">{video.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Player vidéo */}
                <div className="relative bg-black rounded-b-lg overflow-hidden">
                  {video.youtubeId ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={`${getYouTubeEmbedUrl(video.youtubeId)}?autoplay=0`}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      src={video.url}
                      poster={video.thumbnail}
                      controls
                      muted
                      className="w-full h-auto"
                      preload="metadata"
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  )}
                  
                  {/* Bouton Watch on YouTube en bas à gauche */}
                  {video.youtubeId && (
                    <div className="absolute bottom-4 left-4">
                      <a
                        href={`https://youtu.be/${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/80 hover:bg-black text-white px-4 py-2 rounded flex items-center gap-2 transition-colors backdrop-blur-sm"
                      >
                        <span className="text-sm">Watch on</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="text-sm font-semibold">YouTube</span>
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Titre en bas */}
                <div className="bg-gray-800 px-4 py-3 rounded-b-lg">
                  <p className="text-white text-sm">{video.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
        
        {/* Logo (si disponible) */}
        {project.logo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4" dir={dir}>Logo</h2>
            <div className={`rounded-lg p-8 flex items-center justify-center ${project.id === 10 || project.id === 11 || project.id === 16 ? 'bg-white' : 'bg-gray-900'}`}>
              <Image
                src={project.logo.url}
                alt={project.logo.description || 'Logo'}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
        
        {/* Galerie d'images */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4" dir={dir}>Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                  {image.includes('img.youtube.com') ? (
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Designs (si disponibles) */}
        {project.designs && project.designs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4" dir={dir}>Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designs.map((design, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4">
                  <Image
                    src={design.url}
                    alt={design.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 className="text-white font-semibold mt-4">{design.title}</h3>
                  {design.description && (
                    <p className="text-gray-400 text-sm mt-2">{design.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Technologies & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 items-center justify-between bg-gray-900 rounded-lg p-6"
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
              Voir le projet →
              </a>
            )}
        </motion.div>

        {/* Description spéciale pour videography */}
        {project.domain === 'videography' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 bg-gray-900/50 rounded-lg p-6 border border-gray-800"
          >
            <p className="text-white leading-relaxed" dir={dir}>
              {t.portfolio.videographyDescription}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
