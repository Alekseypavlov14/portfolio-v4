import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import { hasHash } from '@/shared/utils/url'
import { Anchor } from '@/shared/components/Anchor'
import styles from './Navigation.module.scss'
import Link from 'next/link'

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={styles.Navigation}>
      {navbarLinksConfig.map(link => hasHash(link.url) ? (
        <Anchor 
          href={link.url} 
          className={styles.Link} 
          key={link.url} 
          target='_self'>
          {link.label}
        </Anchor>
      ) : (
        <Link 
          href={link.url}
          className={styles.Link} 
          key={link.url} 
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}