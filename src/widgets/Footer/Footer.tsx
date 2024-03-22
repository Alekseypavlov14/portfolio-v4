import { FC } from 'react'
import { buttonOutlinedVariant, buttonBigSize } from '@/shared/components/Button'
import { CollaborateButton } from '@/features/collaboration'
import { FooterNavigation } from './components/FooterNavigation'
import { Column, Columns } from '@/shared/components/Columns'
import { Contacts } from '../Contacts'
import { Section } from '@/shared/components/Section'
import { Logo } from '@/shared/components/Logo'
import styles from './Footer.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.Footer}>
      <Section className={styles.FooterSection}>
        <Columns columns={3}>
          <Column className={styles.FooterColumn}>
            <Logo />
  
            <Contacts className={styles.Contacts} />
          </Column>
  
          <Column className={styles.FooterColumn}>
            <FooterNavigation />
          </Column>
  
          <Column className={styles.FooterColumn}>
            <CollaborateButton
              className={styles.FooterCollaborateButton}
              variant={buttonOutlinedVariant}
              size={buttonBigSize}
            />
  
            <Contacts className={styles.Contacts} />
          </Column>
        </Columns>

        <div className={styles.Copyright}>&copy; Oleksii Pavlov 2024</div>
      </Section>
    </footer>
  )
}