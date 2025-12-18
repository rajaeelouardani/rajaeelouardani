import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const username = 'rajaeelouardani'
  
  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 }
    })

    if (!userRes.ok) {
      throw new Error(`GitHub API error: ${userRes.status}`)
    }

    const userData = await userRes.json()

    // Fetch all repositories (owned + collaborated)
    const token = process.env.GITHUB_TOKEN
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      ...(token && {
        'Authorization': `token ${token}`
      })
    }

    // Fetch owned repositories
    const ownedReposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&type=all`, {
      headers,
      next: { revalidate: 3600 }
    })

    let ownedRepos: any[] = []
    if (ownedReposRes.ok) {
      ownedRepos = await ownedReposRes.json()
    }

    // Fetch repositories where user has contributed (if token available)
    let contributedRepos: any[] = []
    if (token) {
      try {
        // Get user's events to find contributed repos
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
          headers,
          next: { revalidate: 3600 }
        })
        
        if (eventsRes.ok) {
          const events = await eventsRes.json()
          // Extract unique repo names from events
          const repoNames = new Set<string>()
          events.forEach((event: any) => {
            if (event.repo && event.repo.name) {
              repoNames.add(event.repo.name)
            }
          })

          // Fetch details for each contributed repo
          for (const repoName of Array.from(repoNames).slice(0, 50)) {
            try {
              const repoRes = await fetch(`https://api.github.com/repos/${repoName}`, {
                headers,
                next: { revalidate: 3600 }
              })
              if (repoRes.ok) {
                const repo = await repoRes.json()
                // Only add if user is not the owner (to avoid duplicates)
                if (repo.owner.login !== username) {
                  contributedRepos.push(repo)
                }
              }
            } catch (err) {
              // Skip if repo fetch fails
              continue
            }
          }
        }
      } catch (err) {
        console.log('Could not fetch contributed repos:', err)
      }
    }

    // Combine all repos
    const reposData = [...ownedRepos, ...contributedRepos]

    // Calculate stats from repos
    const starsTotal = reposData.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)
    const forksTotal = reposData.reduce((sum: number, repo: any) => sum + (repo.forks_count || 0), 0)
    
    // Get language distribution from all repos (with detailed stats)
    const languages: { [key: string]: { count: number, bytes: number, repos: string[] } } = {}
    
    // Fetch language details for each repo (in batches to avoid rate limiting)
    const languagePromises = reposData.slice(0, 100).map(async (repo: any) => {
      if (!repo.language) return null
      
      try {
        // Fetch detailed language stats for each repo
        const langRes = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`, {
          headers,
          next: { revalidate: 3600 }
        })
        
        if (langRes.ok) {
          const langData = await langRes.json()
          return { repo: repo.full_name, languages: langData }
        }
      } catch (err) {
        // If detailed fetch fails, use the main language
        return { repo: repo.full_name, languages: { [repo.language]: 1 } }
      }
      return null
    })

    const languageResults = await Promise.all(languagePromises)

    // Aggregate language statistics
    for (const result of languageResults) {
      if (!result) continue
      
      for (const [lang, bytes] of Object.entries(result.languages)) {
        if (!languages[lang]) {
          languages[lang] = { count: 0, bytes: 0, repos: [] }
        }
        languages[lang].count += 1
        languages[lang].bytes += bytes as number
        if (!languages[lang].repos.includes(result.repo)) {
          languages[lang].repos.push(result.repo)
        }
      }
    }

    // Sort languages by total bytes (most used)
    const sortedLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b.bytes - a.bytes)
      .map(([name, data]) => ({
        name,
        repos: data.repos.length,
        bytes: data.bytes,
        count: data.count,
      }))

    // Get top languages by repo count (for display)
    const topLanguages = sortedLanguages
      .sort((a, b) => b.repos - a.repos)
      .slice(0, 20)
      .map(lang => lang.name)

    // Count total commits from all repos (using GraphQL if token available)
    let totalCommits = 0
    if (token) {
      try {
        const graphqlQuery = `
          query ($login: String!) {
            user(login: $login) {
              contributionsCollection {
                totalCommitContributions
                restrictedContributionsCount
              }
            }
          }
        `
        
        const graphqlRes = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: graphqlQuery,
            variables: { login: username },
          }),
          next: { revalidate: 3600 },
        })

        if (graphqlRes.ok) {
          const graphqlData = await graphqlRes.json()
          if (graphqlData.data?.user?.contributionsCollection) {
            totalCommits = graphqlData.data.user.contributionsCollection.totalCommitContributions || 0
            // Add private contributions if available
            if (graphqlData.data.user.contributionsCollection.restrictedContributionsCount) {
              // Note: restrictedContributionsCount includes all types, not just commits
              // We'll use totalCommitContributions as the main count
            }
          }
        }
      } catch (err) {
        console.log('Could not fetch commit count via GraphQL:', err)
        // Fallback: estimate from events
        try {
          const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
            headers,
            next: { revalidate: 3600 }
          })
          if (eventsRes.ok) {
            const events = await eventsRes.json()
            const pushEvents = events.filter((e: any) => e.type === 'PushEvent')
            totalCommits = pushEvents.reduce((sum: number, event: any) => {
              return sum + (event.payload?.commits?.length || 0)
            }, 0)
          }
        } catch (err2) {
          console.log('Could not estimate commits from events')
        }
      }
    }

    return NextResponse.json({
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
        totalRepos: reposData.length,
        ownedRepos: ownedRepos.length,
        contributedRepos: contributedRepos.length,
        totalCommits: totalCommits,
        topLanguages,
        allLanguages: sortedLanguages,
      },
      repos: reposData.slice(0, 6).map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
      }))
    })
  } catch (error: any) {
    console.error('Error fetching GitHub stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data', message: error.message },
      { status: 500 }
    )
  }
}

