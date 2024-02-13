import { FC, ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '../Container'
import styles from './Section.module.scss'

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Section: FC<SectionProps> = ({ children, ...props }) => {
  return (
    <div className={styles.Section} {...props}>
      <Container>
        {children}
      </Container>
    </div>
  )
}