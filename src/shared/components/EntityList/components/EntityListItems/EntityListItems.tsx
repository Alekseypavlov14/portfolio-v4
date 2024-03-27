import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './EntityListItems.module.scss'

interface EntityListItemsProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function EntityListItems({ className, children, ...props }: EntityListItemsProps) {
  const classNames = clsx(styles.EntityListItems, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}