import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Column.module.scss'

interface ColumnProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export function Column({ className, ...props }: ColumnProps) {
  const classNames = clsx(styles.Column, className)

  return (
    <div className={classNames} {...props} />
  )
}