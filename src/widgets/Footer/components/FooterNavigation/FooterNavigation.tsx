import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import styles from './FooterNavigation.module.scss'
import Link from 'next/link'

interface FooterNavigationProps {}

export const FooterNavigation: FC<FooterNavigationProps> = () => {
  return (
    <div className={styles.FooterNavigation}>
      {navbarLinksConfig.map(link => (
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