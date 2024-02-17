import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Container.module.scss'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.Container, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}