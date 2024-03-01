'use client'

import { Button, buttonOutlinedVariant, buttonSmallSize } from '@/shared/components/Button'
import { ProjectEntity } from '@/entities/projects'
import { useNavigation } from '@/services/navigation'

interface PortfolioCardLinkButtonProps extends Pick<ProjectEntity, 'link'> {}

export function PortfolioCardLinkButton({ link }: PortfolioCardLinkButtonProps) {
  const { navigateExternalPage } = useNavigation()

  function clickHandler() {
    if (!link) return
    navigateExternalPage(link)
  }

  return (
    <Button 
      variant={buttonOutlinedVariant} 
      size={buttonSmallSize}
      disabled={!link}
      onClick={clickHandler}
    >
      {link ? 'Visit' : 'Unpublished'}
    </Button>
  )
}