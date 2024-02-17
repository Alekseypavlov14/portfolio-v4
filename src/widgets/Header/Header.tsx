import { FC } from 'react'
import { BurgerButton } from '@/features/menu'
import { Navigation } from './components/Navigation'
import { Container } from '@/shared/components/Container'
import { Logo } from '@/shared/components/Logo'
import styles from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <Logo />
        <Navigation />
        <BurgerButton />
      </Container>
    </header>
  )
}