import { ComponentProps, FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export const SectionTitle: FC<SectionTitleProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.SectionTitle, className)

  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  )
}