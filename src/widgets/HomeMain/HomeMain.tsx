'use client'

import { FC } from 'react'
import { buttonBigSize, buttonFilledVariant } from '@/shared/components/Button'
import { CollaborateButton } from '@/features/collaboration'
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
  
          <CollaborateButton 
            className={styles.HomeCollaborateButton}
            variant={buttonFilledVariant}
            size={buttonBigSize} 
          />
  
          <Contacts />
        </div>
      </Container>

      <HighlightDecor top='136px' left='69px' />
      <HighlightDecor bottom='20%' right='5%' />
    </main>
  )
}