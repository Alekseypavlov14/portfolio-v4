import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './EntityListItem.module.scss'

interface EntityListItemProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function EntityListItem({ className, children, ...props }: EntityListItemProps) {
  const classNames = clsx(styles.EntityListItem, className)
  
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}