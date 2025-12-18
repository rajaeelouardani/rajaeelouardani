import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const username = 'rajaeelouardani'
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    )
  }

  try {
    // Get contributions from the last year (all repos including private)
    const now = new Date()
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())

    const query = `
      query ($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            totalRepositoryContributions
            restrictedContributionsCount
          }
        }
      }
    `

    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          login: username,
          from: oneYearAgo.toISOString(),
          to: now.toISOString(),
        },
      }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`GraphQL API error: ${res.status}`)
    }

    const json = await res.json()

    if (json.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
    }

    const contributions = json.data.user.contributionsCollection

    // Calculate total including private contributions if available
    const totalContributions = contributions.contributionCalendar.totalContributions
    const restrictedContributions = contributions.restrictedContributionsCount || 0
    const totalWithPrivate = totalContributions + restrictedContributions

    return NextResponse.json({
      totalContributions: totalContributions,
      totalContributionsWithPrivate: totalWithPrivate,
      privateContributions: restrictedContributions,
      totalCommits: contributions.totalCommitContributions,
      totalIssues: contributions.totalIssueContributions,
      totalPullRequests: contributions.totalPullRequestContributions,
      totalReviews: contributions.totalPullRequestReviewContributions,
      totalRepositories: contributions.totalRepositoryContributions,
      calendar: contributions.contributionCalendar.weeks.map((week: any) => ({
        days: week.contributionDays.map((day: any) => ({
          date: day.date,
          count: day.contributionCount,
          color: day.color,
        })),
      })),
    })
  } catch (error: any) {
    console.error('Error fetching GitHub contributions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions', message: error.message },
      { status: 500 }
    )
  }
}

