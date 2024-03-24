import { ReactNode } from 'react'
import styles from './AuthLayout.module.scss'

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.AuthLayout}>
      {children}
    </div>
  )
}