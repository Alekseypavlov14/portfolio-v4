import { getTextFragmentContentBySelector, textFragmentKeys } from '@/entities/text-fragments'
import { ABOUT_ME_COLUMNS_AMOUNT } from '@/configs/globals'
import { Columns, Column } from '@/shared/components/Columns'
import { HighlightDecor } from '@/shared/components/HighlightDecor'
import { aboutMeAnchor } from '@/configs/routing'
import { SectionTitle } from '@/shared/components/SectionTitle'
import { Section } from '@/shared/components/Section'
import styles from './AboutMe.module.scss'

export async function AboutMe() {
  const aboutMeFragment1 = await getTextFragmentContentBySelector(textFragmentKeys.aboutMe1)
  const aboutMeFragment2 = await getTextFragmentContentBySelector(textFragmentKeys.aboutMe2)
  const aboutMeFragment3 = await getTextFragmentContentBySelector(textFragmentKeys.aboutMe3)
  
  return (
    <Section id={aboutMeAnchor}>
      <SectionTitle>
        About me
        <HighlightDecor top={'-10px'} left={'-37px'} />
      </SectionTitle>

      <Columns className={styles.Columns} columns={ABOUT_ME_COLUMNS_AMOUNT}>
        <Column className={styles.Paragraph}>{aboutMeFragment1}</Column>
        <Column className={styles.Paragraph}>{aboutMeFragment2}</Column>
        <Column className={styles.Paragraph}>{aboutMeFragment3}</Column>

        <HighlightDecor bottom={'min(20%, 270px)'} right={'clamp(10px, 10%, 54px)'} />
      </Columns>
    </Section>
  )
}