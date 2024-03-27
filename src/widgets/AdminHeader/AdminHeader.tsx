'use client'

import { Button, buttonFilledVariant, buttonSmallSize } from '@/shared/components/Button'
import { useNavigation } from '@/services/navigation'
import { Container } from '@/shared/components/Container'
import { Logo } from '@/shared/components/Logo'
import styles from './AdminHeader.module.scss'

export function AdminHeader() {
  const { navigateAdminPage } = useNavigation()

  return (
    <div className={styles.AdminHeader}>
      <Container className={styles.Container}>
        <Logo onClick={navigateAdminPage} />

        <Button
          variant={buttonFilledVariant}
          size={buttonSmallSize}
          onClick={() => {}}
        >
          Exit session
        </Button>
      </Container>
    </div>
  )
}