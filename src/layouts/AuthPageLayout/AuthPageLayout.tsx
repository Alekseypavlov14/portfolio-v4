import { ReactNode } from 'react'
import styles from './AuthPageLayout.module.scss'

interface AuthPageLayoutProps {
  children: ReactNode
}

export function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <div className={styles.AuthPageLayout}>
      {children}
    </div>
  )
}