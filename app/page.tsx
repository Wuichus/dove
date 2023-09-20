'use client'
import useAuthGuard from '@/hooks/useAuthGuard'
import { initializeAuth } from '@/lib/auth'
import Nav from '@/components/ui/Nav'

initializeAuth()

export default function Home() {
  const loading = useAuthGuard()
  if (loading) return <p>Loading...</p>

  return (
    <main>
      <Nav />
      Content
    </main>
  )
}
