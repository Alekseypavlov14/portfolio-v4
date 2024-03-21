'use client'

import { Button, buttonOutlinedVariant, buttonSmallSize } from '@/shared/components/Button'
import { ProjectEntity } from '@/entities/projects'
import { useNavigation } from '@/services/navigation'
import styles from './PortfolioCardRepoButton.module.scss'

interface PortfolioCardRepoButtonProps extends Pick<ProjectEntity, 'repository'> {}

export function PortfolioCardRepoButton({ repository }: PortfolioCardRepoButtonProps) {
  const { navigateExternalPage } = useNavigation()

  function clickHandler() {
    if (!repository) return
    navigateExternalPage(repository)
  }

  return (
    <Button 
      className={styles.PortfolioCardRepoButton}
      variant={buttonOutlinedVariant} 
      size={buttonSmallSize}
      disabled={!repository}
      onClick={clickHandler}
    >
      {repository ? 'Source code' : 'Closed source'}
    </Button>
  )
}