import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import { hasHash } from '@/shared/utils/url'
import { Anchor } from '@/shared/components/Anchor'
import styles from './FooterNavigation.module.scss'
import Link from 'next/link'

interface FooterNavigationProps {}

export const FooterNavigation: FC<FooterNavigationProps> = () => {
  return (
    <div className={styles.FooterNavigation}>
      {navbarLinksConfig.map(link => hasHash(link.url) ? (
        <Anchor 
          key={link.url} 
          href={link.url}
          className={styles.FooterNavigationLink}
          target='_self'
        >
          {link.label}
        </Anchor>
      ) : (
        <Link 
          key={link.url} 
          href={link.url}
          className={styles.FooterNavigationLink}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}