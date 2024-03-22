import { PORTFOLIO_PAGE_COLUMNS_AMOUNT } from '@/configs/globals'
import { getDecorRandomCoordinates } from './utils/get-decor-random-coordinates'
import { Column, Columns } from '@/shared/components/Columns'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { useProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import { isOdd } from '@/shared/utils/numbers'
import styles from './PortfolioPageList.module.scss'

export function PortfolioPageList() {
  const projects = useProjects()

  return (
    <Section>
      <SectionTitle>My Portfolio</SectionTitle>

      <Columns 
        className={styles.PortfolioPageListCards} 
        columns={PORTFOLIO_PAGE_COLUMNS_AMOUNT}
      >
        {projects.map((project, index) => (
          <Column 
            className={styles.Column} 
            key={project.id}
          >
            <PortfolioCard 
              project={project} 
              stretch 
            />

            {isOdd(index) ? (
              <HighlightDecor 
                top={getDecorRandomCoordinates().y} 
                left={getDecorRandomCoordinates().x}
              />
            ) : null}
          </Column>
        ))}
      </Columns>
    </Section>
  )
}