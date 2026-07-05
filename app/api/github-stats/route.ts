import { NextResponse } from 'next/server'
import {
  GITHUB_USERNAME,
  getGitHubFallbackStats,
  githubCacheHeaders,
} from '@/lib/githubFallback'

export const revalidate = 3600

function authHeaders() {
  const token = process.env.GITHUB_TOKEN
  return {
    Accept: 'application/vnd.github.v3+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export async function GET() {
  const username = GITHUB_USERNAME
  const headers = authHeaders()
  const fallback = getGitHubFallbackStats()

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (userRes.status === 403 || userRes.status === 429 || userRes.status === 401) {
      console.warn('GitHub API rate limited or unauthorized — using fallback profile')
      return NextResponse.json(fallback, { headers: githubCacheHeaders() })
    }

    if (!userRes.ok) {
      console.warn(`GitHub user API error: ${userRes.status}`)
      return NextResponse.json(fallback, { headers: githubCacheHeaders() })
    }

    const userData = await userRes.json()

    const ownedReposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      { headers, next: { revalidate: 3600 } }
    )

    let ownedRepos: any[] = []
    if (ownedReposRes.ok) {
      ownedRepos = await ownedReposRes.json()
    } else if (ownedReposRes.status === 403 || ownedReposRes.status === 429) {
      return NextResponse.json(
        {
          ...fallback,
          user: {
            login: userData.login,
            name: userData.name || userData.login,
            avatar_url: userData.avatar_url,
            bio: userData.bio,
            public_repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            created_at: userData.created_at,
            location: userData.location,
            blog: userData.blog,
            company: userData.company,
          },
          degraded: true,
        },
        { headers: githubCacheHeaders() }
      )
    }

    const starsTotal = ownedRepos.reduce(
      (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
      0
    )
    const forksTotal = ownedRepos.reduce(
      (sum: number, repo: any) => sum + (repo.forks_count || 0),
      0
    )

    const languageCounts: Record<string, number> = {}
    for (const repo of ownedRepos) {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
      }
    }

    const sortedLanguages = Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([name, count]) => ({
        name,
        repos: count,
        bytes: 0,
        count,
      }))

    const topLanguages = sortedLanguages.slice(0, 20).map((lang) => lang.name)

    return NextResponse.json(
      {
        user: {
          login: userData.login,
          name: userData.name,
          avatar_url: userData.avatar_url,
          bio: userData.bio,
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          created_at: userData.created_at,
          location: userData.location,
          blog: userData.blog,
          company: userData.company,
        },
        stats: {
          totalStars: starsTotal,
          totalForks: forksTotal,
          totalRepos: ownedRepos.length,
          ownedRepos: ownedRepos.length,
          contributedRepos: 0,
          totalCommits: 0,
          topLanguages,
          allLanguages: sortedLanguages,
        },
        repos: ownedRepos.slice(0, 6).map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          updated_at: repo.updated_at,
          html_url: repo.html_url,
        })),
      },
      { headers: githubCacheHeaders() }
    )
  } catch (error: any) {
    console.error('Error fetching GitHub stats:', error)
    return NextResponse.json(fallback, { headers: githubCacheHeaders() })
  }
}
