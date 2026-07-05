import { NextResponse } from 'next/server'
import { githubCacheHeaders } from '@/lib/githubFallback'

export const revalidate = 1800

export async function GET() {
  const username = 'rajaeelouardani'
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { events: [], stats: {}, total: 0, degraded: true },
      { headers: githubCacheHeaders() }
    )
  }

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    }

    const publicResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=30`,
      { headers, next: { revalidate: 1800 } }
    )

    if (!publicResponse.ok) {
      return NextResponse.json(
        { events: [], stats: {}, total: 0, degraded: true },
        { headers: githubCacheHeaders() }
      )
    }

    const publicEvents = await publicResponse.json()

    const contributions = publicEvents.map((event: any) => ({
      id: event.id,
      type: event.type,
      repo: event.repo.name,
      created_at: event.created_at,
      actor: {
        login: event.actor.login,
        avatar_url: event.actor.avatar_url,
      },
      payload: {
        action: event.payload?.action,
        commits: event.payload?.commits,
        ref: event.payload?.ref,
        ref_type: event.payload?.ref_type,
        pull_request: event.payload?.pull_request,
        issue: event.payload?.issue,
      },
    }))

    const stats = {
      PushEvent: contributions.filter((e: any) => e.type === 'PushEvent').length,
      PullRequestEvent: contributions.filter((e: any) => e.type === 'PullRequestEvent').length,
      IssuesEvent: contributions.filter((e: any) => e.type === 'IssuesEvent').length,
      CreateEvent: contributions.filter((e: any) => e.type === 'CreateEvent').length,
      WatchEvent: contributions.filter((e: any) => e.type === 'WatchEvent').length,
      ForkEvent: contributions.filter((e: any) => e.type === 'ForkEvent').length,
    }

    return NextResponse.json(
      {
        events: contributions.slice(0, 50),
        stats,
        total: contributions.length,
        hasPrivateEvents: false,
      },
      { headers: githubCacheHeaders() }
    )
  } catch (error: any) {
    console.error('Error fetching GitHub events:', error)
    return NextResponse.json(
      { events: [], stats: {}, total: 0, degraded: true },
      { headers: githubCacheHeaders() }
    )
  }
}
