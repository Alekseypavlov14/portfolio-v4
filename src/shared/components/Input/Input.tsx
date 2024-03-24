import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Input.module.scss'

interface InputProps extends WithRequired<ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'> {}

export function Input({ className, ...props }: InputProps) {
  const classNames = clsx(styles.Input, className)

  return (
    <input className={classNames} {...props} />
  )
}