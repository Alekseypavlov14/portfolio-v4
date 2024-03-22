import { ComponentPropsWithoutRef, FC } from 'react'
import { defaultColumnsAmount } from './constants'
import { setCSSVariables } from '@/shared/utils/styles'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Columns.module.scss'

interface ColumnsProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {
  columns?: number
}

export const Columns: FC<ColumnsProps> = ({ 
  children, 
  className, 
  columns = defaultColumnsAmount, 
  ...props 
}) => {
  const classNames = clsx(styles.Columns, className)
  const styleVariables = setCSSVariables({ '--columns': String(columns) })

  return (
    <div 
      className={classNames} 
      style={styleVariables}
      {...props}
    >
      {children}
    </div>
  )
}