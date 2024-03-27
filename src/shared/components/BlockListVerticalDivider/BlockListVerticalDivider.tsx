import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './BlockListVerticalDivider.module.scss'

interface BlockListVerticalDividerProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function BlockListVerticalDivider({ className, children, ...props }: BlockListVerticalDividerProps) {
  const classNames = clsx(styles.BlockListVerticalDivider, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}