import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Centered.module.scss'

interface CenteredProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export function Centered({ children, className, ...props }: CenteredProps) {
  const classNames = clsx(styles.Centered, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}