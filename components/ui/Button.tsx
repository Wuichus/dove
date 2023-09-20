import React, { PropsWithChildren } from 'react'

type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
} & PropsWithChildren

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className='hover:bg-terciary-light-hover dark:hover:terciary-dark-hover mb-2 mr-2 rounded-full bg-terciary-light px-5 py-2.5 text-center text-sm font-medium text-black-light focus:outline-none focus:ring-4 dark:bg-terciary-dark'
    >
      {children}
    </button>
  )
}

export default Button
