'use client'

import { FC } from 'react'
import { closeSelector, useMenuStore } from '../../store'
import { navbarLinksConfig } from '@/configs/routing'
import { NavigationLink } from '@/services/navigation'
import styles from './MobileMenuNavigation.module.scss'

interface MobileMenuNavigationProps {}

export const MobileMenuNavigation: FC<MobileMenuNavigationProps> = () => {
  const closeMenu = useMenuStore(closeSelector)

  return (
    <div className={styles.MobileMenuNavigation}>
      {navbarLinksConfig.map(link => (
        <NavigationLink 
          className={styles.Link}
          onClick={closeMenu}
          href={link.url}
          key={link.url}
          target='_self'
        >
          {link.label}
        </NavigationLink>
      ))}
    </div>
  )
}