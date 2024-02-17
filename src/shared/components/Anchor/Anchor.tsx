import { ComponentPropsWithoutRef, FC } from 'react'
import { clsx } from '@/shared/utils/clsx'
import styles from './Anchor.module.scss'

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {}

export const Anchor: FC<AnchorProps> = ({ className, children, ...props}) => {
  const classNames = clsx(styles.Anchor, className)

  return (
    <a 
      className={classNames} 
      target='_blank'
      {...props}
    >
      {children}
    </a>
  )
}