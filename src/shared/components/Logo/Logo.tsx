'use client'

import { FC, ComponentPropsWithoutRef } from 'react'
import { useNavigation } from '@/services/navigation'
import { clsx } from '@/shared/utils/clsx'
import Image from 'next/image'
import logo from './logo.svg'
import styles from './Logo.module.scss'

interface LogoProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {}

export const Logo: FC<LogoProps> = ({ onClick, className, ...props }) => {
  const { navigateHomePage } = useNavigation()

  const clickHandler = onClick || navigateHomePage

  const classNames = clsx(styles.Logo, className)

  return (
    <div onClick={clickHandler} className={classNames} {...props}>
      <Image 
        className={styles.Logo} 
        src={logo}
        alt='ALEX'
      />
    </div>
  )
}