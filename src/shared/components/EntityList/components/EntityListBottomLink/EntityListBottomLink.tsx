import { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './EntityListBottomLink.module.scss'

interface EntityListBottomLinkProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {
  isLinkNeeded?: boolean
}

export function EntityListBottomLink({ 
  className, 
  children, 
  isLinkNeeded = true, 
  ...props 
}: EntityListBottomLinkProps) {
  const classNames = clsx(styles.EntityListBottomLink, className)

  if (!isLinkNeeded) return null

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}