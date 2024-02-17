'use client'

import { ComponentProps, FC } from 'react'
import { buttonSizeToCSSClassKeyMapper, buttonVariantToCSSClassKeyMapper } from './constants'
import { ButtonVariant } from './types/button-variant'
import { WithRequired } from '@/shared/types/with-required'
import { ButtonSize } from './types/button-size'
import { clsx } from '@/shared/utils/clsx'
import styles from './Button.module.scss'

interface ButtonProps extends WithRequired<ComponentProps<'button'>, 'onClick' | 'children'> {
  variant: ButtonVariant
  size: ButtonSize
}

export const Button: FC<ButtonProps> = ({ variant, size, children, className, ...props }) => {
  const classNames = clsx(
    styles.Button, 
    styles[buttonVariantToCSSClassKeyMapper[variant]],
    styles[buttonSizeToCSSClassKeyMapper[size]],
    className
  )

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}