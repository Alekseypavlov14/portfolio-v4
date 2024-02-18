import { FC } from 'react'
import { Button, buttonBigSize, buttonFilledVariant } from '@/shared/components/Button'
import styles from './HomeMainButton.module.scss'

interface HomeMainButtonProps {}

export const HomeMainButton: FC<HomeMainButtonProps> = () => {
  return (
    <Button 
      variant={buttonFilledVariant} 
      className={styles.HomeMainButton}
      size={buttonBigSize} 
      onClick={() => {}}
    >
      Collaborate
    </Button>
  )
}