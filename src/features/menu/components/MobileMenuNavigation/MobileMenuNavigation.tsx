import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import styles from './MobileMenuNavigation.module.scss'
import Link from 'next/link'

interface MobileMenuNavigationProps {}

export const MobileMenuNavigation: FC<MobileMenuNavigationProps> = () => {
  return (
    <div className={styles.MobileMenuNavigation}>
      {navbarLinksConfig.map(link => (
        <Link key={link.url} className={styles.Link} href={link.url}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}