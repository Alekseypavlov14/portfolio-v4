import { HOME_PAGE_PORTFOLIO_CARDS_AMOUNT } from '@/configs/globals'
import { HomePagePortfolioCardsButton } from './components/HomePagePortfolioCardsButton'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { useProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import { Columns } from '@/shared/components/Columns'
import styles from './HomePagePortfolioCardSection.module.scss'

export function HomePagePortfolioCardSection() {
  const projects = useProjects()

  return (
    <Section>
      <SectionTitle>My portfolio</SectionTitle>

      <Columns className={styles.HomePagePortfolioCardSection}>
        {projects.slice(0, HOME_PAGE_PORTFOLIO_CARDS_AMOUNT).map(project => (
          <PortfolioCard project={project} stretch key={project.id} />
        ))}
      </Columns>
      
      <HomePagePortfolioCardsButton />
    </Section>
  )
}
