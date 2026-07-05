'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type BackButtonProps = {
  fallbackHref?: string
  className?: string
  children: ReactNode
}

export function navigateBack(
  router: ReturnType<typeof useRouter>,
  fallbackHref: string
) {
  if (typeof window !== 'undefined' && window.history.length > 1) {
    router.back()
    return
  }

  router.push(fallbackHref)
}

export default function BackButton({
  fallbackHref = '/',
  className = '',
  children,
}: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => navigateBack(router, fallbackHref)}
      className={className}
    >
      {children}
    </button>
  )
}
