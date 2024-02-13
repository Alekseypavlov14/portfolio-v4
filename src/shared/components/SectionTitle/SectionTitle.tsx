import { ComponentProps, FC, ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className={styles.SectionTitle}>
      {children}
    </h2>
  )
}