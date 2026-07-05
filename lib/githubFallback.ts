export const GITHUB_USERNAME = 'rajaeelouardani'

export function getGitHubFallbackStats() {
  return {
    user: {
      login: GITHUB_USERNAME,
      name: 'Rajae Elouardani',
      avatar_url: `https://github.com/${GITHUB_USERNAME}.png`,
      bio: null,
      public_repos: 0,
      followers: 0,
      following: 0,
      created_at: '',
      location: 'Morocco',
      blog: `https://github.com/${GITHUB_USERNAME}`,
      company: null,
    },
    stats: {
      totalStars: 0,
      totalForks: 0,
      totalRepos: 0,
      ownedRepos: 0,
      contributedRepos: 0,
      totalCommits: 0,
      topLanguages: [],
      allLanguages: [],
    },
    repos: [],
    degraded: true,
  }
}

export function githubCacheHeaders() {
  return {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  }
}
