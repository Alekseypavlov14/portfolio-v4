'use client'

import { FC } from 'react'
import { closeSelector, useMenuStore } from '../../store'
import { navbarLinksConfig } from '@/configs/routing'
import { hasHash } from '@/shared/utils/url'
import { Anchor } from '@/shared/components/Anchor'
import styles from './MobileMenuNavigation.module.scss'
import Link from 'next/link'

interface MobileMenuNavigationProps {}

export const MobileMenuNavigation: FC<MobileMenuNavigationProps> = () => {
  const closeMenu = useMenuStore(closeSelector)

  return (
    <div className={styles.MobileMenuNavigation}>
      {navbarLinksConfig.map(link => hasHash(link.url) ? (
        <Anchor 
          className={styles.Link} 
          onClick={closeMenu} 
          href={link.url}
          key={link.url} 
          target='_self'
        >
          {link.label}
        </Anchor>
      ) : (
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