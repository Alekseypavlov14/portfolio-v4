import { FC } from 'react'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'
import styles from './AboutMe.module.scss'

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = () => {
  return (
    <Section>
      <SectionTitle>About me</SectionTitle>

      <div className={styles.Columns}>
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
      </div>
    </Section>
  )
}