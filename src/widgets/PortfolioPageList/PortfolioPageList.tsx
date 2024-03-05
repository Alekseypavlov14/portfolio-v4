import { PortfolioCardWrapperForDecor } from './components/PortfolioCardWrapperForDecor'
import { getDecorRandomCoordinates } from './utils/get-decor-random-coordinates'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { PortfolioCard } from '@/widgets/PortfolioCard'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { useProjects } from '@/entities/projects'
import { Columns } from '@/shared/components/Columns'
import { Section } from '@/shared/components/Section'
import { isOdd } from '@/shared/utils/numbers'
import styles from './PortfolioPageList.module.scss'

export function PortfolioPageList() {
  const projects = useProjects()

  return (
    <Section>
      <SectionTitle>My Portfolio</SectionTitle>

      <Columns className={styles.PortfolioPageListCards}>
        {projects.map((project, index) => (
          <PortfolioCardWrapperForDecor key={project.id}>
            <PortfolioCard stretch project={project} />

            {isOdd(index) ? (
              <HighlightDecor 
                top={getDecorRandomCoordinates().y} 
                left={getDecorRandomCoordinates().x}
              />
            ) : null}
          </PortfolioCardWrapperForDecor>
        ))}
      </Columns>
    </Section>
  )
}