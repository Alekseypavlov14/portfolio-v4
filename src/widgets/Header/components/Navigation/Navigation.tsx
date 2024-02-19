import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import styles from './Navigation.module.scss'
import Link from 'next/link'

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={styles.Navigation}>
      {navbarLinksConfig.map(link => (
        <Link key={link.url} className={styles.Link} href={link.url}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}