'use client'

import { Button, buttonOutlinedVariant, buttonSmallSize } from '@/shared/components/Button'
import { useNavigation } from '@/services/navigation'
import styles from './HomePagePortfolioCardsButton.module.scss'

export function HomePagePortfolioCardsButton() {
  const { navigatePortfolioPage } = useNavigation()

  return (
    <div className={styles.HomePagePortfolioCardsButton}>
      <Button 
        className={styles.Button}
        variant={buttonOutlinedVariant} 
        size={buttonSmallSize}
        onClick={navigatePortfolioPage}
      >
        See more works
      </Button>
    </div>
  )
}