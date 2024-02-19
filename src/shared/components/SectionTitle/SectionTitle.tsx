import { ComponentProps, FC } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps extends WithRequired<ComponentProps<'h2'>, 'children'> {}

export const SectionTitle: FC<SectionTitleProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.SectionTitle, className)

  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  )
}