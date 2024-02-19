'use client'

import { FC } from 'react'
import { HomeMainButton } from './components/HomeMainButton'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { Container } from '@/shared/components/Container'
import { Contacts } from '@/widgets/Contacts'
import { Avatar } from './components/Avatar'
import styles from './HomeMain.module.scss'

interface HomeMainProps {}

export const HomeMain: FC<HomeMainProps> = () => {
  return (
    <main className={styles.HomeMain}>
      <Container className={styles.Container}>
        <Avatar />
  
        <div className={styles.Content}>
          <h1 className={styles.Title}>Hello, I'm Alex!</h1>
          <h3 className={styles.Subtitle}>Let's make an awesome site from your awesome idea! </h3>
  
          <HomeMainButton />
  
          <Contacts />
        </div>
      </Container>

      <HighlightDecor top='136px' left='69px' />
      <HighlightDecor top='500px' right='0px' />
    </main>
  )
}