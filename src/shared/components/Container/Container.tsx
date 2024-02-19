import { ComponentPropsWithoutRef, FC } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Container.module.scss'

interface ContainerProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.Container, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}