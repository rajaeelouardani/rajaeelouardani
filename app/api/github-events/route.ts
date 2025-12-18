import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 1800 // Revalidate every 30 minutes

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
    const headers = {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    }

    // Fetch user events (public + private if token allows)
    // Try to get both public and private events
    const publicEventsUrl = `https://api.github.com/users/${username}/events/public?per_page=100`
    const privateEventsUrl = `https://api.github.com/users/${username}/events/private?per_page=100`
    
    // Fetch public events
    const publicResponse = await fetch(publicEventsUrl, { 
      headers,
      next: { revalidate: 1800 }
    })
    
    let publicEvents: any[] = []
    if (publicResponse.ok) {
      publicEvents = await publicResponse.json()
    }
    
    // Try to fetch private events (requires token with proper scopes)
    let privateEvents: any[] = []
    try {
      const privateResponse = await fetch(privateEventsUrl, { 
        headers,
        next: { revalidate: 1800 }
      })
      if (privateResponse.ok) {
        privateEvents = await privateResponse.json()
      }
    } catch (err) {
      // Private events may not be accessible, continue with public only
      console.log('Private events not accessible')
    }
    
    // Combine and sort by date (most recent first)
    const allEvents = [...publicEvents, ...privateEvents].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    if (allEvents.length === 0 && publicEvents.length === 0) {
      throw new Error('No events found')
    }

    // Filter and organize events by type
    const contributions = allEvents.map((event: any) => ({
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

    // Count contributions by type
    const stats = {
      PushEvent: contributions.filter((e: any) => e.type === 'PushEvent').length,
      PullRequestEvent: contributions.filter((e: any) => e.type === 'PullRequestEvent').length,
      IssuesEvent: contributions.filter((e: any) => e.type === 'IssuesEvent').length,
      CreateEvent: contributions.filter((e: any) => e.type === 'CreateEvent').length,
      WatchEvent: contributions.filter((e: any) => e.type === 'WatchEvent').length,
      ForkEvent: contributions.filter((e: any) => e.type === 'ForkEvent').length,
    }

    return NextResponse.json({
      events: contributions.slice(0, 50), // Limit to 50 most recent
      stats,
      total: contributions.length,
      hasPrivateEvents: privateEvents.length > 0,
    })
  } catch (error: any) {
    console.error('Error fetching GitHub events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub events', message: error.message },
      { status: 500 }
    )
  }
}

