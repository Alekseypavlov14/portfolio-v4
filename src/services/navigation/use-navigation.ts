import { routingConfig } from '@/configs/routing'
import { NavigationCallback } from './types/navigation-callback'
import { useRouter } from 'next/navigation'

export interface Navigation {
  navigateHomePage: NavigationCallback
  navigatePortfolioPage: NavigationCallback
}

export function useNavigation(): Navigation {
  const router = useRouter()

  const navigateHomePage = () => router.push(routingConfig.homePageURL)
  const navigatePortfolioPage = () => router.push(routingConfig.portfolioPageURL)

  return { 
    navigateHomePage, 
    navigatePortfolioPage
  }
}