import { NavbarLinkConfig } from './types/navbar-link-config'
import { RouteConfig } from './types/route-config'
import { RoutesEnum } from './types/routes'

// used for programmed navigation
export const routingConfig: Record<RoutesEnum, RouteConfig> = {
  [RoutesEnum.homePage]: { url: '/' },
  [RoutesEnum.aboutMeSection]: { url: '/#about-me'},
  [RoutesEnum.portfolioPage]: { url: '/portfolio' },
}

// extended routes, used in Navbar (UI)
export const navbarLinksConfig: NavbarLinkConfig[] = [
  { 
    url: routingConfig.homePage.url,
    label: 'Home'
  },
  {
    url: routingConfig.aboutMeSection.url,
    label: 'About me'
  },
  { 
    url: routingConfig.portfolioPage.url,
    label: 'Portfolio'
  },
]