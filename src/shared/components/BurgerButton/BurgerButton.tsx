import { ComponentProps, FC } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps extends ComponentProps<'div'> {
  active: boolean
}

export const BurgerButton: FC<BurgerButtonProps> = ({ active, ...props }) => {
  const classNames = clsx(styles.BurgerButton, active && styles.Active)

  return (
    <div className={classNames} {...props}>
      <div />
    </div>
  )
}