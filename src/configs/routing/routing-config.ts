import { NavbarLinkConfig } from './types/navbar-link-config'
import { aboutMeAnchor } from './constants'
import { RouteConfig } from './types/route-config'
import { RoutesEnum } from './types/routes'

// used for programmed navigation
export const routingConfig: Record<RoutesEnum, RouteConfig> = {
  [RoutesEnum.homePage]: { url: '/' },
  [RoutesEnum.portfolioPage]: { url: '/portfolio' },
  [RoutesEnum.aboutMeSection]: { url: `/#${aboutMeAnchor}` },
  [RoutesEnum.adminPage]: { url: '/admin' },
  [RoutesEnum.authPage]: { url: '/auth' }
}

// extended routes, used in Navbar (UI)
export const navbarLinksConfig: NavbarLinkConfig[] = [
  { 
    url: routingConfig.homePage.url,
    label: 'Home'
  },
  { 
    url: routingConfig.portfolioPage.url,
    label: 'Portfolio'
  },
  {
    url: routingConfig.aboutMeSection.url,
    label: 'About me'
  },
]