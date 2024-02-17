import { FC, ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '../Container'
import { clsx } from '@/shared/utils/clsx'
import styles from './Section.module.scss'

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.Section, className)

  return (
    <div className={classNames} {...props}>
      <Container>
        {children}
      </Container>
    </div>
  )
}