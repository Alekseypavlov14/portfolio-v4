'use client'

import { FC } from 'react'
import { closeSelector, useMenuStore } from '../../store'
import { navbarLinksConfig } from '@/configs/routing'
import styles from './MobileMenuNavigation.module.scss'
import Link from 'next/link'

interface MobileMenuNavigationProps {}

export const MobileMenuNavigation: FC<MobileMenuNavigationProps> = () => {
  const closeMenu = useMenuStore(closeSelector)

  return (
    <div className={styles.MobileMenuNavigation}>
      {navbarLinksConfig.map(link => (
        <Link 
          className={styles.Link} 
          onClick={closeMenu} 
          href={link.url}
          key={link.url} 
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}