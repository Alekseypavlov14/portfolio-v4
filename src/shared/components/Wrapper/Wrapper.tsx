import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Wrapper.module.scss'

interface WrapperProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function Wrapper({ className, children, ...props }: WrapperProps) {
  const classNames = clsx(styles.Wrapper, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}