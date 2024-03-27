import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './EntityList.module.scss'

interface EntityListProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function EntityList({ className, children, ...props }: EntityListProps) {
  const classNames = clsx(styles.EntityList, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}