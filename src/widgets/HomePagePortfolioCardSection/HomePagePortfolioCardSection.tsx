import { use } from 'react'
import { HOME_PAGE_PORTFOLIO_CARDS_AMOUNT } from '@/configs/globals'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { getProjects } from '@/entities/projects'
import styles from './HomePagePortfolioCardSection.module.scss'

export function HomePagePortfolioCardSection() {
  const projects = use(getProjects())

  return (
    <div className={styles.HomePagePortfolioCardSection}>
      {projects.slice(0, HOME_PAGE_PORTFOLIO_CARDS_AMOUNT).map(project => (
        <PortfolioCard project={project} key={project.id} />
      ))}
    </div>
  )
}