import { ComponentPropsWithoutRef, FC } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { clsx } from '@/shared/utils/clsx'
import styles from './Anchor.module.scss'

interface AnchorProps extends WithRequired<ComponentPropsWithoutRef<'a'>, 'href' | 'children'> {}

export const Anchor: FC<AnchorProps> = ({ className, children, ...props}) => {
  const classNames = clsx(styles.Anchor, className)

  return (
    <a 
      className={classNames} 
      target={props.target || '_blank'}
      {...props}
    >
      {children}
    </a>
  )
}