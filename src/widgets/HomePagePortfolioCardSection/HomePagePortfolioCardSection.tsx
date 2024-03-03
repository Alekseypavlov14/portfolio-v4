import { use } from 'react'
import { HOME_PAGE_PORTFOLIO_CARDS_AMOUNT } from '@/configs/globals'
import { HomePagePortfolioCardsButton } from './components/HomePagePortfolioCardsButton'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { getProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import styles from './HomePagePortfolioCardSection.module.scss'

export function HomePagePortfolioCardSection() {
  const projects = use(getProjects())

  return (
    <Section>
      <SectionTitle>My portfolio</SectionTitle>

      <div className={styles.HomePagePortfolioCardSection}>
        {projects.slice(0, HOME_PAGE_PORTFOLIO_CARDS_AMOUNT).map(project => (
          <PortfolioCard project={project} stretch key={project.id} />
        ))}
      </div>
      
      <HomePagePortfolioCardsButton />
    </Section>
  )
}
