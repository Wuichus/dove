'use client'
import Button from '@/components/ui/Button'
import useGlobalStore from '@/lib/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/auth'

function Login() {
  const user = useGlobalStore((store) => store.user)
  const router = useRouter()

  if (user) {
    setTimeout(() => router.push('/'), 0)
    return null
  }

  return (
    <section className='bg-base-light dark:bg-base-dark'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        <a href='#' className='mb-6 flex items-center'>
          <Image
            src='/dove.png'
            className='invert'
            alt='Dove logo'
            width={90}
            height={90}
            priority
          />
        </a>
        <div className='dark:border-secondary w-full rounded-lg bg-white-light text-center shadow dark:border dark:bg-secondary-light sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-base-dark dark:text-white-light md:text-2xl'>
              Bienvenido
            </h1>
            <div className='space-y-4 md:space-y-6'>
              <Button onClick={login}>Iniciar sesión</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
