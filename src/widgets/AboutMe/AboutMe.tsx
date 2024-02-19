import { FC } from 'react'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'
import { Columns } from '@/shared/components/Columns'
import styles from './AboutMe.module.scss'

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = () => {
  return (
    <Section>
      <SectionTitle>
        About me
        <HighlightDecor top={'-10px'} left={'-37px'} />
      </SectionTitle>

      <Columns>
        <p className={styles.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Impedit similique totam laudantium neque eius quidem itaque, 
          eaque tempora magni pariatur sit quas, ducimus minus aut, 
          reprehenderit suscipit fugiat natus? Itaque.
        </p>
  
        <p className={styles.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Impedit similique totam laudantium neque eius quidem itaque, 
          eaque tempora magni pariatur sit quas, ducimus minus aut, 
          reprehenderit suscipit fugiat natus? Itaque.
        </p>
  
        <p className={styles.Paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Impedit similique totam laudantium neque eius quidem itaque, 
          eaque tempora magni pariatur sit quas, ducimus minus aut, 
          reprehenderit suscipit fugiat natus? Itaque.
        </p>
      </Columns>
    </Section>
  )
}