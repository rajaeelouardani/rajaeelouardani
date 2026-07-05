'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { useEffect, useState } from 'react'
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from '@/components/kibo-ui/contribution-graph'
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from 'date-fns'

interface GitHubData {
  user: {
    login: string
    name: string
    avatar_url: string
    bio: string | null
    public_repos: number
    followers: number
    following: number
    created_at: string
    location: string | null
    blog: string | null
    company: string | null
  }
  stats: {
    totalStars: number
    totalForks: number
    totalRepos: number
    ownedRepos?: number
    contributedRepos?: number
    totalCommits?: number
    topLanguages: string[]
    allLanguages?: Array<{
      name: string
      repos: number
      bytes: number
      count: number
    }>
  }
  repos: Array<{
    id: number
    name: string
    full_name: string
    description: string | null
    stargazers_count: number
    forks_count: number
    language: string | null
    updated_at: string
    html_url: string
  }>
}

interface ContributionsData {
  totalContributions: number
  totalContributionsWithPrivate?: number
  privateContributions?: number
  totalCommits: number
  totalIssues: number
  totalPullRequests: number
  totalReviews: number
  totalRepositories: number
  calendar: Array<{
    days: Array<{
      date: string
      count: number
      color: string
    }>
  }>
}

interface GitHubEvent {
  id: string
  type: string
  repo: string
  created_at: string
  actor: {
    login: string
    avatar_url: string
  }
  payload: {
    action?: string
    commits?: Array<{
      sha: string
      message: string
      author: {
        name: string
        email: string
      }
    }>
    ref?: string
    ref_type?: string
    pull_request?: any
    issue?: any
  }
}

interface GitHubEventsData {
  events: GitHubEvent[]
  stats: {
    PushEvent: number
    PullRequestEvent: number
    IssuesEvent: number
    CreateEvent: number
    WatchEvent: number
    ForkEvent: number
  }
  total: number
}

// Helper function to format bytes
const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

export default function GitHubStats() {
  const { t, dir } = useLanguage()
  const username = 'rajaeelouardani'
  const [data, setData] = useState<GitHubData | null>(null)
  const [contributions, setContributions] = useState<ContributionsData | null>(null)
  const [events, setEvents] = useState<GitHubEventsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [degraded, setDegraded] = useState(false)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        setDegraded(false)

        const [statsRes, contributionsRes, eventsRes] = await Promise.all([
          fetch('/api/github-stats'),
          fetch('/api/github-contributions'),
          fetch('/api/github-events'),
        ])

        if (statsRes.ok) {
          const statsJson = await statsRes.json()
          setData(statsJson)
          if (statsJson.degraded) {
            setDegraded(true)
          }
        } else {
          setDegraded(true)
        }

        if (contributionsRes.ok) {
          const contributionsJson = await contributionsRes.json()
          if (contributionsJson.calendar?.length) {
            setContributions(contributionsJson)
          }
          if (contributionsJson.degraded) {
            setDegraded(true)
          }
        }

        if (eventsRes.ok) {
          const eventsJson = await eventsRes.json()
          if (eventsJson.events?.length) {
            setEvents(eventsJson)
          }
        }
      } catch (err) {
        setDegraded(true)
        console.warn('GitHub stats unavailable, showing fallback view')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <section id="github-stats" dir={dir} className="py-20 bg-black/80 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm uppercase mb-2" dir={dir}>{t?.githubStats?.sectionLabel || 'GitHub'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-tech text-center" dir={dir}>
            <LayoutTextFlip
              text=""
              words={t?.githubStats?.flipWords || ["GitHub Activity", "Code Contributions", "Development Stats", "GitHub Profile"]}
              className="text-4xl md:text-5xl"
            />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" dir={dir}>
            {t?.githubStats?.subtitle || 'Mes statistiques et contributions GitHub'}
          </p>
        </motion.div>

        {/* Real GitHub Stats from API */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            <p className="text-gray-400 mt-4" dir={dir}>Chargement des statistiques GitHub...</p>
          </div>
        ) : (
          <>
            {degraded && (
              <div className="text-center mb-8">
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto">
                  <p className="text-yellow-300 text-sm" dir={dir}>
                    Statistiques en cache — données GitHub limitées. Consultez le profil complet ci-dessous.
                  </p>
                </div>
              </div>
            )}

            {data ? (
          <>
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors max-w-4xl mx-auto mb-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Image
                  src={data.user.avatar_url}
                  alt={data.user.login}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full border-4 border-primary-500/50"
                  unoptimized
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2" dir={dir}>
                    {data.user.name || data.user.login}
                  </h3>
                  <p className="text-gray-400 mb-2" dir={dir}>@{data.user.login}</p>
                  {data.user.bio && (
                    <p className="text-gray-300 mb-4" dir={dir}>{data.user.bio}</p>
                  )}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    {data.user.location && (
                      <span className="text-gray-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {data.user.location}
                      </span>
                    )}
                    {data.user.company && (
                      <span className="text-gray-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {data.user.company}
                      </span>
                    )}
                    {data.user.blog && (
                      <a
                        href={data.user.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-400 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid - Only show if there's meaningful data */}
            {(data.stats.totalStars > 0 || data.user.followers > 0) && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
                {data.stats.totalStars > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors text-center"
                  >
                    <div className="text-3xl font-bold text-primary-500 mb-2">{data.stats.totalStars}</div>
                    <div className="text-gray-400 text-sm" dir={dir}>Total Stars</div>
                  </motion.div>
                )}
                {data.user.followers > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors text-center"
                  >
                    <div className="text-3xl font-bold text-primary-500 mb-2">{data.user.followers}</div>
                    <div className="text-gray-400 text-sm" dir={dir}>Followers</div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Contributions Card */}
            {contributions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors max-w-6xl mx-auto mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-6" dir={dir}>Contributions</h3>
                
                {/* Total Contributions */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-500 mb-2">
                    {contributions.totalContributionsWithPrivate || contributions.totalContributions}
                  </div>
                  <p className="text-gray-400 text-lg" dir={dir}>
                    contributions in the last year
                    {contributions.privateContributions && contributions.privateContributions > 0 && (
                      <span className="block text-sm text-gray-500 mt-1">
                        ({contributions.totalContributions} public + {contributions.privateContributions} private)
                      </span>
                    )}
                  </p>
                </div>

                {/* Contribution Calendar Heatmap - Using ContributionGraph Component */}
                <div className="overflow-x-auto pb-4">
                  {(() => {
                    // Convert GitHub calendar data to ContributionGraph format
                    // Flatten all days from calendar weeks
                    const allDays: Array<{ date: string; count: number }> = []
                    contributions.calendar.forEach(week => {
                      week.days.forEach(day => {
                        allDays.push({ date: day.date, count: day.count })
                      })
                    })
                    
                    const maxCount = Math.max(...allDays.map(d => d.count), 1)
                    const maxLevel = 4
                    
                    // Create a map for quick lookup
                    const contributionsMap = new Map<string, { count: number; level: number }>()
                    allDays.forEach(day => {
                      contributionsMap.set(day.date, {
                        count: day.count,
                        level: Math.ceil((day.count / maxCount) * maxLevel),
                      })
                    })
                    
                    // Create data array for all days of the year
                    const now = new Date()
                    const days = eachDayOfInterval({
                      start: startOfYear(now),
                      end: endOfYear(now),
                    })
                    
                    const graphData = days.map((date) => {
                      const dateStr = formatISO(date, { representation: 'date' })
                      const contribution = contributionsMap.get(dateStr)
                      
                      if (contribution) {
                        return {
                          date: dateStr,
                          count: contribution.count,
                          level: Math.min(contribution.level, maxLevel),
                        }
                      }
                      
                      return {
                        date: dateStr,
                        count: 0,
                        level: 0,
                      }
                    })
                    
                    return (
                      <ContributionGraph data={graphData} maxCount={maxCount} maxLevel={maxLevel}>
                        <ContributionGraphCalendar>
                          {({ activity, dayIndex, weekIndex }) => (
                            <ContributionGraphBlock
                              activity={activity}
                              dayIndex={dayIndex}
                              weekIndex={weekIndex}
                            />
                          )}
                        </ContributionGraphCalendar>
                        <ContributionGraphFooter>
                          <ContributionGraphTotalCount />
                          <ContributionGraphLegend />
                        </ContributionGraphFooter>
                      </ContributionGraph>
                    )
                  })()}
                </div>
              </motion.div>
            )}


            {/* Recent Repositories - Only show if there are multiple repos */}
            {data.repos.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors max-w-6xl mx-auto mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-4" dir={dir}>Repositories Récents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 hover:border-primary-500/50"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM4.75 5.5a1.25 1.25 0 00-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H4.75zM6 8.75A.75.75 0 016.75 8h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 8.75zm0 3A.75.75 0 016.75 11h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 11.75zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                          </svg>
                          {repo.name}
                        </h4>
                      </div>
                      {repo.description && (
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2" dir={dir}>{repo.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </>
            ) : (
              <div className="text-center py-8 max-w-2xl mx-auto">
                <Image
                  src={`https://github.com/${username}.png`}
                  alt={username}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full border-4 border-primary-500/50 mx-auto mb-4"
                  unoptimized
                />
                <p className="text-gray-300" dir={dir}>@{username}</p>
              </div>
            )}

            {/* Static activity graph when live contributions are unavailable */}
            {(!contributions || contributions.totalContributions <= 10) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors max-w-6xl mx-auto mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center" dir={dir}>
                  {t?.githubStats?.activityGraph || "Graphique d'Activité"}
                </h3>
                <div className="w-full overflow-x-auto">
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark&hide_border=true&area=true&bg_color=000000&color=3b82f6&line=3b82f6&point=3b82f6&radius=8`}
                    alt="GitHub Activity Graph"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Activity Graph - live contributions */}
        {contributions && contributions.totalContributions > 10 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary-500/50 transition-colors max-w-6xl mx-auto mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center" dir={dir}>{t?.githubStats?.activityGraph || 'Graphique d\'Activité'}</h3>
              <div className="w-full overflow-x-auto">
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark&hide_border=true&area=true&bg_color=000000&color=3b82f6&line=3b82f6&point=3b82f6&radius=8`}
                  alt="GitHub Activity Graph"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark`
                  }}
                />
              </div>
            </motion.div>

          </>
        )}

        {/* Link to GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span dir={dir}>{t?.githubStats?.viewProfile || 'Voir mon profil GitHub complet'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

