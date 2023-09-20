import useGlobalStore from '@/lib/store'
import { useRouter } from 'next/navigation'

// returns a loading state while the user is being fetched
export default function useAuthGuard(): boolean {
  const user = useGlobalStore((state) => state.user)
  const loading = useGlobalStore((state) => state.loading)
  const router = useRouter()

  if (loading) return true

  if (!user) {
    // timeout to allow the loading component to be rendered
    setTimeout(() => {
      router.push('/login')
    }, 0)
  }

  return false
}
