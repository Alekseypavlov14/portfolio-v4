'use client'

import { Button, buttonFilledVariant, buttonSmallSize } from '@/shared/components/Button'
import styles from './AuthButton.module.scss'

export function AuthButton() {
  return (
    <Button 
      className={styles.AuthButton}
      variant={buttonFilledVariant} 
      size={buttonSmallSize} 
      onClick={() => {}}
    >
      Log in
    </Button>
  )
}