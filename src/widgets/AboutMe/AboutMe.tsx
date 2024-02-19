import { FC } from 'react'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { aboutMeAnchor } from '@/configs/routing'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'
import { Columns } from '@/shared/components/Columns'
import styles from './AboutMe.module.scss'

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = () => {
  return (
    <Section id={aboutMeAnchor}>
      <SectionTitle>
        About me
        <HighlightDecor top={'-10px'} left={'-37px'} />
      </SectionTitle>

      <Columns className={styles.Columns}>
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

        <HighlightDecor bottom={'min(20%, 270px)'} right={'clamp(10px, 10%, 54px)'} />
      </Columns>
    </Section>
  )
}