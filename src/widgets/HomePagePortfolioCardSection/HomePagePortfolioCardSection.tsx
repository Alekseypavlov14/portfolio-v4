import { HOME_PAGE_PORTFOLIO_CARDS_AMOUNT } from '@/configs/globals'
import { HomePagePortfolioCardsButton } from './components/HomePagePortfolioCardsButton'
import { Columns, Column } from '@/shared/components/Columns'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { getProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import styles from './HomePagePortfolioCardSection.module.scss'

export async function HomePagePortfolioCardSection() {
  const projects = await getProjects()

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
