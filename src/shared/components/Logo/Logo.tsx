'use client'

import { FC, MouseEventHandler } from 'react'
import { useNavigation } from '@/services/navigation'
import Image from 'next/image'
import logo from './logo.svg'
import styles from './Logo.module.scss'

interface LogoProps {
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Logo: FC<LogoProps> = ({ onClick }) => {
  const { navigateHomePage } = useNavigation()

  const clickHandler = onClick || navigateHomePage

  return (
    <div onClick={clickHandler} className={styles.Logo}>
      <Image 
        className={styles.Logo} 
        src={logo}
        alt='ALEX'
      />
    </div>
  )
}