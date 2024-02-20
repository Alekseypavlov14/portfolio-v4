import { ComponentPropsWithoutRef, FC } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Chip.module.scss'

interface ChipProps extends ComponentPropsWithoutRef<'div'> {}

export const Chip: FC<ChipProps> = ({ className, ...props }) => {
  const classNames = clsx(styles.Chip, className)

  return (
    <div className={classNames} {...props} />
  )
}