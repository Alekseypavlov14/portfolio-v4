import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  )
}