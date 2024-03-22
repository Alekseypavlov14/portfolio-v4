import { HOME_PAGE_PORTFOLIO_CARDS_AMOUNT } from '@/configs/globals'
import { HomePagePortfolioCardsButton } from './components/HomePagePortfolioCardsButton'
import { Columns, Column } from '@/shared/components/Columns'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { useProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import styles from './HomePagePortfolioCardSection.module.scss'

export function HomePagePortfolioCardSection() {
  const projects = useProjects()

  return (
    <Section>
      <SectionTitle>My portfolio</SectionTitle>

      <Columns 
        className={styles.HomePagePortfolioCardSection} 
        columns={HOME_PAGE_PORTFOLIO_CARDS_AMOUNT}
      >
        {projects.slice(0, HOME_PAGE_PORTFOLIO_CARDS_AMOUNT).map(project => (
          <Column 
            className={styles.PortfolioCardSectionColumn} 
            key={project.id}
          >
            <PortfolioCard 
              project={project} 
              stretch 
            />
          </Column>
        ))}
      </Columns>
      
      <HomePagePortfolioCardsButton />
    </Section>
  )
}
