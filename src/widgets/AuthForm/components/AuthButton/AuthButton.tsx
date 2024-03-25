'use client'

import { Button, buttonFilledVariant, buttonSmallSize } from '@/shared/components/Button'
import { useAuth } from '../../hooks/use-auth'
import styles from './AuthButton.module.scss'

export function AuthButton() {
  const auth = useAuth()

  return (
    <Button 
      className={styles.AuthButton}
      variant={buttonFilledVariant} 
      size={buttonSmallSize} 
      onClick={auth}
    >
      Log in
    </Button>
  )
}