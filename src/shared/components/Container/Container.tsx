import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div className={styles.Container} {...props}>
      {children}
    </div>
  )
}