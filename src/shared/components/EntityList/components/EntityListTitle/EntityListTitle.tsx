import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './EntityListTitle.module.scss'

interface EntityListTitleProps extends WithRequired<ComponentPropsWithoutRef<'h4'>, 'children'> {}

export function EntityListTitle({ className, children, ...props }: EntityListTitleProps) {
  const classNames = clsx(styles.EntityListTitle, className)

  return (
    <h4 className={classNames} {...props}>
      {children}
    </h4>
  )
}