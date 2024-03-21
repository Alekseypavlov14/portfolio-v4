import { FC } from 'react'
import { navbarLinksConfig } from '@/configs/routing'
import { NavigationLink } from '@/services/navigation'
import styles from './FooterNavigation.module.scss'

interface FooterNavigationProps {}

export const FooterNavigation: FC<FooterNavigationProps> = () => {
  return (
    <div className={styles.FooterNavigation}>
      {navbarLinksConfig.map(link => (
        <NavigationLink
          key={link.url} 
          href={link.url}
          className={styles.FooterNavigationLink}
          target='_self'
        >
          {link.label}
        </NavigationLink>
      ))}
    </div>
  )
}