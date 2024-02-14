import { NavigationCallback } from './types/navigation-callback'
import { routingConfig } from '@/configs/routing'
import { useRouter } from 'next/navigation'

export interface Navigation {
  navigateHomePage: NavigationCallback
  navigateAboutMeSection: NavigationCallback
  navigatePortfolioPage: NavigationCallback
}

export function useNavigation(): Navigation {
  const router = useRouter()

  const navigateHomePage = () => router.push(routingConfig.homePage.url)
  const navigateAboutMeSection = () => router.push(routingConfig.aboutMeSection.url)
  const navigatePortfolioPage = () => router.push(routingConfig.portfolioPage.url)

  return { 
    navigateHomePage, 
    navigateAboutMeSection,
    navigatePortfolioPage,
  }
}