import { ExternalNavigationCallback } from './types/external-navigation-callback'
import { NavigationCallback } from './types/navigation-callback'
import { routingConfig } from '@/configs/routing'
import { useRouter } from 'next/navigation'

export interface Navigation {
  navigateHomePage: NavigationCallback
  navigateAboutMeSection: NavigationCallback
  navigatePortfolioPage: NavigationCallback
  navigateExternalPage: ExternalNavigationCallback
}

export function useNavigation(): Navigation {
  const router = useRouter()

  const navigateHomePage: NavigationCallback = () => router.push(routingConfig.homePage.url)
  const navigateAboutMeSection: NavigationCallback = () => router.push(routingConfig.aboutMeSection.url)
  const navigatePortfolioPage: NavigationCallback = () => router.push(routingConfig.portfolioPage.url)
  const navigateExternalPage: ExternalNavigationCallback = (url, target) => window.open(url, target !== undefined ? target : '_blank')

  return { 
    navigateHomePage, 
    navigateAboutMeSection,
    navigatePortfolioPage,
    navigateExternalPage
  }
}