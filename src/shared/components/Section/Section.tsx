import { FC, ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { Container } from '../Container'
import { clsx } from '@/shared/utils/clsx'
import styles from './Section.module.scss'

interface SectionProps extends WithRequired<ComponentPropsWithoutRef<'div'>, 'children'> {}

export const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  const classNames = clsx(styles.Section, className)

  return (
    <section className={classNames} {...props}>
      <Container>
        {children}
      </Container>
    </section>
  )
}