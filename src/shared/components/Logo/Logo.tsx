'use client'

import { FC, ComponentPropsWithoutRef } from 'react'
import { useNavigation } from '@/services/navigation'
import Image from 'next/image'
import logo from './logo.svg'
import styles from './Logo.module.scss'

interface LogoProps extends ComponentPropsWithoutRef<'div'> {}

export const Logo: FC<LogoProps> = ({ onClick, ...props }) => {
  const { navigateHomePage } = useNavigation()

  const clickHandler = onClick || navigateHomePage

  return (
    <div onClick={clickHandler} className={styles.Logo} {...props}>
      <Image 
        className={styles.Logo} 
        src={logo}
        alt='ALEX'
      />
    </div>
  )
}