import { ComponentPropsWithoutRef } from 'react'
import styles from './PortfolioCardWrapperForDecor.module.scss'

interface PortfolioCardWrapperForDecorProps extends ComponentPropsWithoutRef<'div'> {}

export function PortfolioCardWrapperForDecor({ ...props }: PortfolioCardWrapperForDecorProps) {
  return (
    <div className={styles.PortfolioCardWrapperForDecor} {...props} />
  )
}