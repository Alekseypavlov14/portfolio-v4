'use client'

import { Button, buttonOutlinedVariant, buttonSmallSize } from '@/shared/components/Button'
import { ProjectEntity } from '@/entities/projects'
import { useNavigation } from '@/services/navigation'
import styles from './PortfolioCardLinkButton.module.scss'

interface PortfolioCardLinkButtonProps extends Pick<ProjectEntity, 'link'> {}

export function PortfolioCardLinkButton({ link }: PortfolioCardLinkButtonProps) {
  const { navigateExternalPage } = useNavigation()

  function clickHandler() {
    if (!link) return
    navigateExternalPage(link)
  }

  return (
    <Button 
      className={styles.PortfolioCardLinkButton}
      variant={buttonOutlinedVariant} 
      size={buttonSmallSize}
      disabled={!link}
      onClick={clickHandler}
    >
      {link ? 'Visit' : 'Unpublished'}
    </Button>
  )
}