import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import { NavigationLink } from '@/services/navigation'
import styles from './Navigation.module.scss'

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav className={styles.Navigation}>
      {navbarLinksConfig.map(link => (
        <NavigationLink
          href={link.url} 
          className={styles.Link} 
          key={link.url} 
          target='_self'
        >
          {link.label}
        </NavigationLink>
      ))}
    </nav>
  )
}