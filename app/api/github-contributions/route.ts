import { NextResponse } from 'next/server'
import { githubCacheHeaders } from '@/lib/githubFallback'

export const revalidate = 3600

export async function GET() {
  const username = 'rajaeelouardani'
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      {
        totalContributions: 0,
        totalContributionsWithPrivate: 0,
        privateContributions: 0,
        totalCommits: 0,
        totalIssues: 0,
        totalPullRequests: 0,
        totalReviews: 0,
        totalRepositories: 0,
        calendar: [],
        degraded: true,
      },
      { headers: githubCacheHeaders() }
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
      console.warn(`GitHub GraphQL contributions error: ${res.status}`)
      return NextResponse.json(
        {
          totalContributions: 0,
          totalContributionsWithPrivate: 0,
          privateContributions: 0,
          totalCommits: 0,
          totalIssues: 0,
          totalPullRequests: 0,
          totalReviews: 0,
          totalRepositories: 0,
          calendar: [],
          degraded: true,
        },
        { headers: githubCacheHeaders() }
      )
    }

    const json = await res.json()

    if (json.errors) {
      console.warn('GitHub GraphQL contributions errors:', json.errors)
      return NextResponse.json(
        {
          totalContributions: 0,
          totalContributionsWithPrivate: 0,
          privateContributions: 0,
          totalCommits: 0,
          totalIssues: 0,
          totalPullRequests: 0,
          totalReviews: 0,
          totalRepositories: 0,
          calendar: [],
          degraded: true,
        },
        { headers: githubCacheHeaders() }
      )
    }

    const contributions = json.data.user.contributionsCollection

    // Calculate total including private contributions if available
    const totalContributions = contributions.contributionCalendar.totalContributions
    const restrictedContributions = contributions.restrictedContributionsCount || 0
    const totalWithPrivate = totalContributions + restrictedContributions

    return NextResponse.json(
      {
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
      },
      { headers: githubCacheHeaders() }
    )
  } catch (error: any) {
    console.error('Error fetching GitHub contributions:', error)
    return NextResponse.json(
      {
        totalContributions: 0,
        totalContributionsWithPrivate: 0,
        privateContributions: 0,
        totalCommits: 0,
        totalIssues: 0,
        totalPullRequests: 0,
        totalReviews: 0,
        totalRepositories: 0,
        calendar: [],
        degraded: true,
      },
      { headers: githubCacheHeaders() }
    )
  }
}

