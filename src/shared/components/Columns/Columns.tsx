import { ComponentPropsWithoutRef, FC } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Columns.module.scss'

interface ColumnsProps extends ComponentPropsWithoutRef<'div'> {}

export const Columns: FC<ColumnsProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.Columns, className)

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}