import { FC, ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '../Container'
import styles from './Section.module.scss'

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <div className={styles.Section}>
      <Container>
        {children}
      </Container>
    </div>
  )
}