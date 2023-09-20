import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logout } from '@/lib/auth'
import useGlobalStore from '@/lib/store'

const navItems = [
  {
    name: 'Inicio',
    href: '/',
  },
]

const Nav = () => {
  const user = useGlobalStore((store) => store.user)

  return (
    <nav className='border-mainborder-light bg-base-light  dark:bg-base-dark'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/dove.png'
            className='invert'
            alt='Dove logo'
            width={30}
            height={30}
            priority
          />
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white-light hover:bg-white-light focus:outline-none focus:ring-2 focus:ring-mainborder-light dark:text-white-dark  dark:hover:bg-secondary-dark dark:focus:ring-mainborder-dark md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Abrir navegación</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='dark:border-secondary mt-4 flex flex-col rounded-lg border border-white-light bg-white-light p-4 font-medium dark:bg-secondary-light md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white-light md:p-0 md:dark:bg-base-dark'>
            {navItems.map((item, idx) => (
              <li key={`nav_link_${idx}`}>
                <Link
                  href={item.href}
                  className='block rounded py-2 pl-3 pr-4 text-base-dark hover:bg-white-light dark:text-white-light dark:hover:bg-secondary-light dark:hover:text-white-light md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-secondary-light md:dark:hover:bg-transparent md:dark:hover:text-secondary-dark'
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <span
                  onClick={logout}
                  className='block cursor-pointer rounded py-2 pl-3 pr-4 text-base-dark hover:bg-white-light dark:text-white-light dark:hover:bg-secondary-light dark:hover:text-white-light md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-secondary-light md:dark:hover:bg-transparent md:dark:hover:text-secondary-dark'
                >
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
